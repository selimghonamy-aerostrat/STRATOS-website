// node sgtrace.mjs <path> [width height] — full-page wheel scroll at 4x CPU; long tasks + frame times (uncapped headless)
import pp from 'puppeteer-core';
const [path, W = 1440, H = 900] = process.argv.slice(2);
const b = await pp.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--disable-gpu-vsync', '--disable-frame-rate-limit'] });
const p = await b.newPage(); await p.setViewport({ width: +W, height: +H });
await p.goto('http://127.0.0.1:4517' + path, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 1500));
const cdp = await p.target().createCDPSession(); await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
await p.evaluate(() => { window.__lt = []; window.__fr = []; new PerformanceObserver(l => l.getEntries().forEach(e => window.__lt.push(Math.round(e.duration)))).observe({ type: 'longtask' });
  let last = performance.now(); (function f(t) { window.__fr.push(t - last); last = t; if (!window.__stop) requestAnimationFrame(f); })(performance.now()); });
const total = await p.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < total; y += 120) { await p.mouse.wheel({ deltaY: 120 }); await new Promise(r => setTimeout(r, 16)); }
await new Promise(r => setTimeout(r, 800));
console.log(path, W, await p.evaluate(() => { window.__stop = true; const f = window.__fr.slice(2).sort((a, b) => a - b); const q = x => f[Math.min(f.length - 1, Math.floor(f.length * x))].toFixed(1);
  return JSON.stringify({ longTasks: window.__lt, frames: f.length, p50: q(.5), p95: q(.95), max: f[f.length - 1].toFixed(1), over20: f.filter(x => x > 20).length, over33: f.filter(x => x > 33.4).length }); }));
await b.close();
