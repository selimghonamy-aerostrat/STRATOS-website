import pp from 'puppeteer-core';
const b = await pp.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
for (const pg of ['/']) { let ok = 0;
  for (let i = 0; i < 10; i++) { const p = await b.newPage(); await p.setViewport({ width: 1280, height: 800 });
    await p.goto('http://127.0.0.1:4517' + pg, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 600));
    await p.evaluate(() => scrollTo({ top: 600, behavior: 'instant' })); await new Promise(r => setTimeout(r, 400));
    if (await p.evaluate(() => { const h = document.querySelector('#dc-root header.ds-header'); return !!h && h.classList.contains('is-solid'); })) ok++; await p.close(); }
  console.log(pg, ok + '/10'); }
await b.close();
