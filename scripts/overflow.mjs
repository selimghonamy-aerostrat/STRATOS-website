// node overflow.mjs /path ...  -> reports horizontal overflow at 1440/1280/1024/768/390/360
import pp from 'puppeteer-core';
const b = await pp.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
for (const pg of process.argv.slice(2)) for (const w of [1440, 1280, 1024, 768, 390, 360]) {
  const p = await b.newPage(); await p.setViewport({ width: w, height: 900 });
  await p.goto('http://127.0.0.1:4517' + pg, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 1500));
  const r = await p.evaluate(() => { const W = document.documentElement.clientWidth; const bad = [];
    document.querySelectorAll('body *').forEach(e => { const b = e.getBoundingClientRect(); if (b.width && b.right > W + 1 && getComputedStyle(e).position !== 'fixed' && !e.closest('.ds-domains,.ds-marquee,.ds-snav-in,.legal-table,[style*="overflow"]')) bad.push((e.className && e.className.baseVal === undefined ? e.className : e.tagName) + ' ' + Math.round(b.right)); });
    return { sw: document.documentElement.scrollWidth, W, bad: bad.slice(0, 4) }; });
  if (r.sw > r.W || r.bad.length) console.log(pg, w, JSON.stringify(r)); await p.close();
}
console.log('done'); await b.close();
