import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const p = await b.newPage(); await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 0.5 });
await p.goto('http://127.0.0.1:4517/', { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 2000));
await p.hover('#dc-root .ds-mwrap'); await new Promise(r => setTimeout(r, 600));
await p.screenshot({ path: '/tmp/u_mega.png', clip: { x: 500, y: 0, width: 940, height: 420 } });
const st = () => p.evaluate(() => ({ open: document.querySelector('#dc-root .ds-mwrap').classList.contains('is-open'), exp: document.querySelector('#dc-root .ds-mtog').getAttribute('aria-expanded'), focus: document.activeElement && (document.activeElement.textContent || '').trim().slice(0, 30) }));
console.log('hover', JSON.stringify(await st()));
await p.mouse.move(10, 600); await new Promise(r => setTimeout(r, 500)); console.log('leave', JSON.stringify(await st()));
// keyboard: tab to the toggle, Enter, ArrowDown, Escape
await p.focus('#dc-root .ds-mtog'); await p.keyboard.press('Enter'); await new Promise(r => setTimeout(r, 300)); console.log('enter', JSON.stringify(await st()));
await p.keyboard.press('Tab'); console.log('tab', JSON.stringify(await st()));
await p.keyboard.press('Escape'); await new Promise(r => setTimeout(r, 300)); console.log('esc', JSON.stringify(await st()));
// scroll: header solid then hidden on down, back on up
await p.evaluate(() => scrollTo(0, 400)); await new Promise(r => setTimeout(r, 400));
await p.evaluate(() => scrollTo(0, 1400)); await new Promise(r => setTimeout(r, 600));
console.log('down', await p.evaluate(() => document.querySelector('#dc-root header').className));
await p.evaluate(() => scrollTo(0, 1100)); await new Promise(r => setTimeout(r, 600));
console.log('up', await p.evaluate(() => document.querySelector('#dc-root header').className));
await p.screenshot({ path: '/tmp/u_solid.png', clip: { x: 0, y: 0, width: 1440, height: 200 } });
// mobile sheet
await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 }); await p.evaluate(() => scrollTo(0, 0)); await new Promise(r => setTimeout(r, 600));
await p.click('#dc-root .ds-menu'); await new Promise(r => setTimeout(r, 700));
console.log('sheet', await p.evaluate(() => [document.querySelector('#dc-root .ds-menu').getAttribute('aria-expanded'), document.activeElement.textContent.trim(), document.documentElement.className].join(' | ')));
await p.screenshot({ path: '/tmp/u_sheet.png' });
await p.keyboard.press('Escape'); await new Promise(r => setTimeout(r, 400));
console.log('sheet esc', await p.evaluate(() => [document.querySelector('#dc-root .ds-menu').getAttribute('aria-expanded'), document.activeElement.getAttribute('aria-label')].join(' | ')));
await b.close();
