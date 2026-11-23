import pp from 'puppeteer-core';
const b = await pp.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
for (const pg of ['/', '/ebt-cbta']) {
  const p = await b.newPage(); await p.setViewport({ width: 1440, height: 900 });
  await p.goto('http://127.0.0.1:4517' + pg, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 1500));
  const cdp = await p.target().createCDPSession(); await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  await p.evaluate(() => { window.__lt = []; window.__fr = []; new PerformanceObserver(l => l.getEntries().forEach(e => window.__lt.push(Math.round(e.duration)))).observe({ type: 'longtask', buffered: false });
    let last = performance.now(); (function f(t) { window.__fr.push(t - last); last = t; if (!window.__stop) requestAnimationFrame(f); })(performance.now()); });
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 120) { await p.mouse.wheel({ deltaY: 120 }); await new Promise(r => setTimeout(r, 16)); }
  await new Promise(r => setTimeout(r, 800));
  const r = await p.evaluate(() => { window.__stop = true; const f = window.__fr.slice(2).sort((a, b) => a - b); const q = x => f[Math.min(f.length - 1, Math.floor(f.length * x))].toFixed(1);
    return { longTasks: window.__lt, frames: f.length, p50: q(0.5), p95: q(0.95), max: f[f.length - 1].toFixed(1), over20: f.filter(x => x > 20).length }; });
  console.log(pg, JSON.stringify(r)); await p.close();
}
// count-up check (no throttle)
const p = await b.newPage(); await p.setViewport({ width: 1440, height: 900 }); await p.goto('http://127.0.0.1:4517/', { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 1200));
const before = await p.evaluate(() => [...document.querySelectorAll('#dc-root .hm-proof data')].map(d => d.textContent).join(' '));
await p.evaluate(() => document.querySelector('#dc-root .hm-proof').scrollIntoView({ block: 'center', behavior: 'instant' }));
const mid = []; for (const t of [300, 700, 1200]) { await new Promise(r => setTimeout(r, t === 300 ? 300 : 400)); mid.push(await p.evaluate(() => [...document.querySelectorAll('#dc-root .hm-proof data')].map(d => d.textContent).join(' '))); }
await new Promise(r => setTimeout(r, 800)); const end = await p.evaluate(() => [...document.querySelectorAll('#dc-root .hm-proof data')].map(d => d.textContent + '/' + d.getAttribute('value')).join(' '));
console.log('count: before', before, '| during', mid.join(' | '), '| end', end);
await b.close();
