import pp from 'puppeteer-core';
const b = await pp.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
for (const pg of ['/', '/solutions', '/ebt-cbta', '/tms', '/about', '/clients', '/contact', '/glossary', '/privacy', '/legal/subprocessors', '/404.html']) {
  const p = await b.newPage(); await p.setViewport({ width: 1440, height: 900 }); const errs = [];
  p.on('console', m => { if (['error', 'warning'].includes(m.type())) errs.push(m.text().slice(0, 80)); }); p.on('pageerror', e => errs.push(e.message));
  await p.goto('http://127.0.0.1:4517' + pg, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 1500));
  const r = await p.evaluate(() => {
    const root = document.querySelector('#dc-root') || document.body; const out = { upper: [], border: [], num: [] };
    root.querySelectorAll('main *').forEach(e => {
      const cs = getComputedStyle(e); const t = (e.childNodes.length && [...e.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ')) || '';
      if (t && cs.textTransform === 'uppercase' && parseFloat(cs.letterSpacing) > 0.5 && e.offsetParent) out.upper.push(t.slice(0, 30));
      if (t && /^0[1-9]\b/.test(t) && e.offsetParent) out.num.push(t.slice(0, 30));
      for (const side of ['Top', 'Right', 'Bottom', 'Left']) { const w = parseFloat(cs['border' + side + 'Width']); if (w >= 1 && cs['border' + side + 'Style'] !== 'none' && cs.borderImageSource === 'none' && e.offsetParent && !/INPUT|TEXTAREA|SELECT|IFRAME/.test(e.tagName)) { out.border.push(e.tagName + '.' + (e.className.baseVal === undefined ? e.className : '').toString().slice(0, 25) + ' ' + side); break; } }
    });
    return { h: document.documentElement.scrollHeight, sw: document.documentElement.scrollWidth > document.documentElement.clientWidth, counts: document.querySelectorAll('[data-count]').length, upper: [...new Set(out.upper)].slice(0, 5), num: [...new Set(out.num)].slice(0, 5), border: [...new Set(out.border)].slice(0, 6) };
  });
  console.log(pg, JSON.stringify({ ...r, errs: errs.slice(0, 3) })); await p.close();
}
await b.close();
