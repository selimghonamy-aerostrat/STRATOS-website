import pp from 'puppeteer-core';
const b = await pp.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const p = await b.newPage(); await p.goto('http://127.0.0.1:4518/contact', { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 800));
console.log(await p.evaluate(() => { const e = document.getElementById('dc-prerender'); return e ? e.tagName + ' ' + e.outerHTML.slice(0, 200) : 'none'; }));
await b.close();
