// Viewport shots at scroll targets: node vshots.mjs <path> <width> <prefix> <spec...>  spec = selector[@fraction] (fraction of element height scrolled past its top)
import puppeteer from 'puppeteer-core';
const [,, pg, w, pre, ...specs] = process.argv;
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const p = await b.newPage(); await p.setViewport({ width: +w, height: +(process.env.H || 900), deviceScaleFactor: 0.5 });
if (process.env.RM) await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
await p.goto('http://127.0.0.1:4517' + pg, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 2000));
let i = 0;
for (const s of specs) {
  const [sel, fr = '0'] = s.split('@');
  await p.evaluate(async (sel, fr) => { const el = document.querySelector(sel); const r = el.getBoundingClientRect(); const target = scrollY + r.top + r.height * fr - (fr === 0 ? 0 : 0);
    const cur = scrollY; const steps = 12; for (let k = 1; k <= steps; k++) { scrollTo(0, cur + (target - cur) * k / steps); await new Promise(r => setTimeout(r, 40)); } }, sel, +fr);
  await new Promise(r => setTimeout(r, 1600));
  await p.screenshot({ path: `${pre}_${i++}.png` });
}
await b.close();
