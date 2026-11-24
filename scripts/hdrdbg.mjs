import pp from 'puppeteer-core';
const b = await pp.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 800 });
await p.goto('http://127.0.0.1:4517/contact', { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 600));
await p.evaluate(() => scrollTo({ top: 600, behavior: 'instant' })); await new Promise(r => setTimeout(r, 400));
console.log(await p.evaluate(() => JSON.stringify({ headers: [...document.querySelectorAll('header.ds-header')].map(h => ({ inRoot: !!h.closest('#dc-root'), ds: !!h.__ds, cls: h.className })), pre: !!document.getElementById('dc-prerender'), y: scrollY, mains: document.querySelectorAll('main').length, motion: !!window.__dsMotion, rv: document.documentElement.className })));
await b.close();
