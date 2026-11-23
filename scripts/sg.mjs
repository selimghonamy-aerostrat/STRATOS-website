// node sg.mjs <width> <height> <outPrefix> [selector@offsetVh ...]  — style guide captures + checks
import pp from 'puppeteer-core';
const [W, H, out, ...marks] = process.argv.slice(2);
const b = await pp.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const p = await b.newPage(); await p.setViewport({ width: +W, height: +H });
const errs = []; p.on('console', m => { if (['error', 'warning'].includes(m.type())) errs.push(m.text()); }); p.on('pageerror', e => errs.push(String(e)));
p.on('requestfailed', r => errs.push('failed ' + r.url()));
await p.goto('http://127.0.0.1:4517/styleguide.html', { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 1200));
const info = await p.evaluate(() => ({ h: document.documentElement.scrollHeight, sw: document.documentElement.scrollWidth > innerWidth }));
console.log(JSON.stringify(info));
let i = 0;
for (const m of marks) {
  const [sel, off] = m.split('@');
  const y = await p.evaluate((sel, off) => { const el = sel === 'top' ? document.body : document.querySelector(sel); let t = 0, e = el; while (e) { t += e.offsetTop; e = e.offsetParent; } return Math.max(0, t + innerHeight * (+off || 0)); }, sel, off);
  // scroll in steps so scroll-linked effects update like a user
  const cur = await p.evaluate(() => scrollY); const steps = 12;
  for (let k = 1; k <= steps; k++) { await p.evaluate(v => window.scrollTo(0, v), cur + (y - cur) * k / steps); await new Promise(r => setTimeout(r, 30)); }
  await new Promise(r => setTimeout(r, 700));
  const th = await p.evaluate(() => document.documentElement.getAttribute('data-theme') || 'dark');
  await p.screenshot({ path: `${out}_${i}.png` }); console.log(i, m, th); i++;
}
console.log('errors', errs.length ? errs : 0);
await b.close();
