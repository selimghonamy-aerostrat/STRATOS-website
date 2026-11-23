// Full-page screenshot after scrolling through: node full.mjs <path> <width> <out> [reduce]
import puppeteer from 'puppeteer-core';
const [,, pg, w, out, rm] = process.argv;
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const p = await b.newPage(); await p.setViewport({ width: +w, height: 900, deviceScaleFactor: process.env.SEG ? 0.5 : 1 });
if (rm) await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
await p.goto('http://127.0.0.1:4517' + pg, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 2000));
await p.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 300) { scrollTo(0, y); await new Promise(r => setTimeout(r, 90)); } });
await new Promise(r => setTimeout(r, 1500)); await p.evaluate(() => scrollTo(0, 0)); await new Promise(r => setTimeout(r, 900));
if (process.env.SEG) { const H = await p.evaluate(() => document.documentElement.scrollHeight); const seg = +process.env.SEG; let i = 0;
  for (let y = 0; y < H; y += seg, i++) await p.screenshot({ path: out.replace('.png', '_' + i + '.png'), clip: { x: 0, y, width: +w, height: Math.min(seg, H - y) }, captureBeyondViewport: true });
  console.log(i, 'segments', H); } else await p.screenshot({ path: out, fullPage: true });
await b.close();
