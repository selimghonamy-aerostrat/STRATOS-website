// AeroStrat motion and header (feat/uiux-v3). Native JS only: IntersectionObserver,
// requestAnimationFrame, sticky positioning. Runs on the pre-rendered copy first and
// re-binds when the live page (#dc-root) replaces it, carrying over what was revealed.
// With prefers-reduced-motion nothing moves and everything is shown at once; the header,
// menu and theme still work. scripts/prerender.mjs sets window.__dcPrerender so the
// snapshot is taken with everything visible.
(function () {
  'use strict';
  if (window.__dsMotion) return; window.__dsMotion = true;
  var d = document, html = d.documentElement, W = window;
  var reduce = W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var snapshot = !!W.__dcPrerender;
  var motion = !reduce && !snapshot && 'IntersectionObserver' in W;
  if (motion) html.classList.add('ds-motion');

  var revealed = {};            // keys of elements already shown, kept across the handover
  var main = null, scope = null, io = null, themeIo = null, stepIo = null;
  var st = { y: 0, lastY: 0, ticking: false, fills: [], expands: [], pxs: [], pins: [], counts: [] };
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };

  /* ---------- binding ---------- */
  function activeMain() {
    var pre = d.getElementById('dc-prerender');
    if (pre) return pre.querySelector('main');
    return d.querySelector('#dc-root main.aerostrat-page-enter') || d.querySelector('#dc-root main');
  }
  function check() {
    var m = activeMain();
    if (m && m !== main && m.isConnected) bind(m);
  }
  function bind(m) {
    if (io) io.disconnect(); if (themeIo) themeIo.disconnect(); if (stepIo) stepIo.disconnect();
    main = m; scope = m.parentNode;
    header();
    prepare();
    observe();
    onScroll(); frame();
  }

  /* ---------- header (D6) ---------- */
  var hdr = null, mega = null, megaT = null, sheetBtn = null, sheet = null, megaTimer = 0;
  function header() {
    hdr = scope.querySelector('header.ds-header');
    if (!hdr) return;
    mega = hdr.querySelector('[data-mega]'); megaT = mega && mega.querySelector('.ds-mtog');
    sheetBtn = hdr.querySelector('.ds-menu'); sheet = hdr.querySelector('.ds-sheet');
    hdr.querySelectorAll('.aerostrat-nav-link.active').forEach(function (a) { a.setAttribute('aria-current', 'page'); });
    if (hdr.__ds) return; hdr.__ds = true;
    if (mega) {
      var fine = W.matchMedia && W.matchMedia('(hover: hover)').matches;
      if (fine) {
        mega.addEventListener('mouseenter', function () { clearTimeout(megaTimer); setMega(true); });
        mega.addEventListener('mouseleave', function () { megaTimer = setTimeout(function () { setMega(false); }, 160); });
      }
      megaT.addEventListener('click', function () { setMega(!mega.classList.contains('is-open')); });
      mega.addEventListener('focusout', function (e) { if (!mega.contains(e.relatedTarget)) setMega(false); });
      mega.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mega.classList.contains('is-open')) { setMega(false); megaT.focus(); }
        if (e.key === 'ArrowDown' && e.target === megaT) { e.preventDefault(); setMega(true); var f = mega.querySelector('.ds-mega a'); if (f) f.focus(); }
      });
    }
    if (sheetBtn) {
      sheetBtn.addEventListener('click', function () { setSheet(!sheet.classList.contains('is-open')); });
      hdr.addEventListener('keydown', function (e) {
        if (!sheet.classList.contains('is-open')) return;
        if (e.key === 'Escape') { setSheet(false); sheetBtn.focus(); return; }
        if (e.key !== 'Tab') return;
        var f = [sheetBtn].concat([].slice.call(sheet.querySelectorAll('a')));
        var i = f.indexOf(d.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
      });
      sheet.addEventListener('click', function (e) { if (e.target.closest('a')) setSheet(false); });
    }
    hdr.addEventListener('focusin', function () { hdr.classList.remove('is-hidden'); });
  }
  function setMega(on) {
    if (!mega) return;
    mega.classList.toggle('is-open', on);
    megaT.setAttribute('aria-expanded', on ? 'true' : 'false');
  }
  function setSheet(on) {
    sheet.classList.toggle('is-open', on);
    sheetBtn.setAttribute('aria-expanded', on ? 'true' : 'false');
    sheetBtn.setAttribute('aria-label', on ? 'Close menu' : 'Menu');
    html.classList.toggle('ds-sheet-open', on);
    if (on) { var a = sheet.querySelector('a'); if (a) setTimeout(function () { a.focus(); }, 50); }
  }
  d.addEventListener('click', function (e) { if (mega && mega.classList.contains('is-open') && !mega.contains(e.target)) setMega(false); });
  W.addEventListener('resize', function () { if (sheet && W.innerWidth > 1020 && sheet.classList.contains('is-open')) setSheet(false); });

  /* ---------- preparing elements ---------- */
  function words(el, cls) {
    // wrap each word (text nodes only, nested spans kept) for line masks and the word fill
    var out = [];
    (function walk(n) {
      [].slice.call(n.childNodes).forEach(function (c) {
        if (c.nodeType === 3) {
          var parts = c.textContent.split(/(\s+)/), frag = d.createDocumentFragment();
          parts.forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(d.createTextNode(p)); return; }
            var w = d.createElement('span'); w.className = cls;
            if (cls === 'ds-w') { var i = d.createElement('span'); i.textContent = p; w.appendChild(i); } else w.textContent = p;
            frag.appendChild(w); out.push(w);
          });
          c.parentNode.replaceChild(frag, c);
        } else if (c.nodeType === 1 && !c.classList.contains('ds-w') && !c.classList.contains('ds-fw')) walk(c);
      });
    })(el);
    return out;
  }
  function lines(el) {
    var ws = el.querySelectorAll('.ds-w'), top = null, l = -1;
    ws.forEach(function (w) { var t = w.offsetTop; if (top === null || t > top + 4) { l++; top = t; } w.style.setProperty('--l', l); });
  }
  function prepare() {
    var n = 0;
    scope.querySelectorAll('[data-rv],[data-lm],.ds-sweep,[data-draw],[data-count]').forEach(function (el) { el.__k = 'k' + (n++); });
    // stagger siblings that reveal together
    scope.querySelectorAll('[data-rv]').forEach(function (el) {
      var sibs = [].filter.call(el.parentNode.children, function (c) { return c.hasAttribute('data-rv'); });
      el.style.setProperty('--i', Math.min(sibs.indexOf(el), 6));
    });
    if (motion) scope.querySelectorAll('[data-lm]').forEach(function (el) { if (!el.querySelector('.ds-w')) words(el, 'ds-w'); lines(el); el.classList.add('is-split'); });
    st.fills = [].map.call(scope.querySelectorAll('[data-fill]'), function (el) {
      var ws = el.querySelectorAll('.ds-fw'); if (!ws.length) ws = words(el, 'ds-fw');
      [].forEach.call(ws, function (w, i) { w.style.setProperty('--k', i); });
      if (!motion) el.style.setProperty('--f', 9999);
      return { el: el, n: ws.length };
    });
    scope.querySelectorAll('.hm-nodes .hm-n, .hm-chipg').forEach(function (g) {
      var sibs = [].filter.call(g.parentNode.children, function (c) { return c.classList.contains(g.classList[0]); });
      g.style.setProperty('--k', sibs.indexOf(g));
    });
    st.expands = [].slice.call(scope.querySelectorAll('[data-expand]'));
    st.pxs = motion ? [].slice.call(scope.querySelectorAll('[data-px]')) : [];
    st.pins = [].map.call(scope.querySelectorAll('[data-pin]'), function (p) {
      var steps = [].slice.call(p.querySelectorAll('.hm-step')), bars = [].slice.call(p.querySelectorAll('.hm-bar'));
      bars.forEach(function (b, i) {
        if (b.__ds) return; b.__ds = true;
        b.addEventListener('click', function () {
          var r = p.getBoundingClientRect(), total = p.offsetHeight - W.innerHeight;
          if (!p.classList.contains('is-pinned')) { steps[i].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); return; }
          W.scrollTo({ top: W.scrollY + r.top + total * (i + 0.2) / 3, behavior: reduce ? 'auto' : 'smooth' });
        });
      });
      return { el: p, steps: steps, bars: bars, cur: -1 };
    });
    pinMode();
    // carry over the handover: anything already shown stays shown, without replaying
    var instant = [];
    scope.querySelectorAll('[data-rv],[data-lm],.ds-sweep,[data-draw],[data-count]').forEach(function (el) {
      if (!motion || revealed[el.__k]) { el.classList.add('is-in'); instant.push(el); if (el.hasAttribute('data-count')) el.__counted = true; }
    });
    if (instant.length && motion) {
      instant.forEach(function (el) { el.style.transition = 'none'; el.querySelectorAll('.ds-w > span').forEach(function (s) { s.style.transition = 'none'; }); });
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        instant.forEach(function (el) { el.style.transition = ''; el.querySelectorAll('.ds-w > span').forEach(function (s) { s.style.transition = ''; }); });
      }); });
    }
    particles();
  }
  function pinMode() {
    st.pins.forEach(function (p) {
      var on = motion && W.innerWidth > 1020 && W.innerHeight > 620;
      p.el.classList.toggle('is-pinned', on);
      if (!on) p.steps.forEach(function (s) { s.removeAttribute('inert'); });
      p.cur = -1;
    });
  }
  W.addEventListener('resize', function () { pinMode(); if (scope) scope.querySelectorAll('[data-lm]').forEach(function (el) { if (motion) lines(el); }); onScroll(); });

  /* ---------- observers ---------- */
  function observe() {
    if (motion) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target; el.classList.add('is-in'); revealed[el.__k] = 1; io.unobserve(el);
          if (el.hasAttribute('data-count')) count(el);
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
      scope.querySelectorAll('[data-rv],[data-lm],.ds-sweep,[data-draw],[data-count]').forEach(function (el) { if (!el.classList.contains('is-in')) io.observe(el); });
      // unpinned product story: each step plays when it comes into view
      stepIo = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) en.target.classList.add('is-active'); });
      }, { threshold: 0.35 });
      st.pins.forEach(function (p) { if (!p.el.classList.contains('is-pinned')) p.steps.forEach(function (s) { stepIo.observe(s); }); });
    } else {
      st.pins.forEach(function (p) { p.steps.forEach(function (s) { s.classList.add('is-active'); }); });
    }
    // dark to light: the section on the middle line of the screen sets the page theme (D3)
    var themed = scope.querySelectorAll('[data-theme]');
    if (themed.length && 'IntersectionObserver' in W) {
      themeIo = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) html.setAttribute('data-theme', en.target.getAttribute('data-theme')); });
      }, { rootMargin: '-50% 0px -50% 0px' });
      themed.forEach(function (s) { themeIo.observe(s); });
    }
  }
  function count(el) {
    if (el.__counted) return; el.__counted = true;
    var to = +el.getAttribute('data-count'), suf = el.getAttribute('data-suffix') || '', t0 = 0, dur = 1400;
    function f(t) {
      if (!t0) t0 = t;
      var p = clamp((t - t0) / dur, 0, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e).toLocaleString('en-GB') + suf;
      if (p < 1) requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  /* ---------- scroll-driven work (transform, opacity and clip only) ---------- */
  function onScroll() { if (!st.ticking) { st.ticking = true; requestAnimationFrame(frame); } }
  function frame() {
    st.ticking = false;
    var y = W.scrollY || html.scrollTop, vh = W.innerHeight, dy = y - st.lastY;
    var bar = scope && scope.querySelector('.ds-progress span');
    if (bar) bar.style.transform = 'scaleX(' + clamp(y / Math.max(1, html.scrollHeight - vh), 0, 1).toFixed(4) + ')';
    if (hdr) {
      hdr.classList.toggle('is-solid', y > 80);
      var busy = hdr.contains(d.activeElement) || (mega && mega.classList.contains('is-open')) || html.classList.contains('ds-sheet-open');
      if (y < 160 || busy || dy < -4) hdr.classList.remove('is-hidden');
      else if (dy > 6) { hdr.classList.add('is-hidden'); if (mega) setMega(false); }
    }
    st.lastY = y;
    if (!scope) return;
    st.fills.forEach(function (f) {
      if (!motion) return;
      var r = f.el.getBoundingClientRect();
      var p = clamp((vh * 0.88 - r.top) / (r.height + vh * 0.38), 0, 1);
      f.el.style.setProperty('--f', (p * (f.n + 1.5)).toFixed(2));
    });
    st.expands.forEach(function (el) {
      if (!motion) return;
      var r = el.getBoundingClientRect();
      var p = clamp((vh - r.top) / (vh * 0.75), 0, 1);
      el.style.clipPath = 'inset(0 ' + (8 * (1 - p)).toFixed(2) + '% round ' + (16 * (1 - p)).toFixed(1) + 'px)';
    });
    st.pxs.forEach(function (el) {
      var r = el.parentNode.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var t = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.transform = 'translate3d(0,' + clamp(t * -40, -40, 40).toFixed(1) + 'px,0)';
    });
    st.pins.forEach(function (p) {
      if (!p.el.classList.contains('is-pinned')) return;
      var r = p.el.getBoundingClientRect(), total = Math.max(1, p.el.offsetHeight - vh);
      var pr = clamp(-r.top / total, 0, 1), cur = Math.min(2, Math.floor(pr * 3));
      p.bars.forEach(function (b, i) {
        b.querySelector('b').style.transform = 'scaleX(' + clamp(pr * 3 - i, 0, 1).toFixed(3) + ')';
      });
      if (cur !== p.cur) {
        p.cur = cur;
        p.steps.forEach(function (s, i) {
          s.classList.toggle('is-active', i === cur);
          if (i === cur) s.removeAttribute('inert'); else s.setAttribute('inert', '');
        });
        p.bars.forEach(function (b, i) { if (i === cur) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
      }
    });
  }
  W.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- closing CTA: rounded-square particles settle into a flight-path arc ---------- */
  function particles() {
    var cv = scope.querySelector('.hm-particles');
    if (!cv || cv.__ds) return; cv.__ds = true;
    var ctx = cv.getContext('2d'); if (!ctx) return;
    var N = 64, pts = [], w = 0, h = 0, dpr = Math.min(2, W.devicePixelRatio || 1), t0 = 0, running = false, done = false;
    function size() { var r = cv.getBoundingClientRect(); w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    function target(i) { // a quadratic flight path across the band
      var t = i / (N - 1), x0 = w * 0.08, x1 = w * 0.92, cx = w * 0.5, y0 = h * 0.86, cy = h * 0.18;
      return { x: (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1, y: (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * cy + t * t * y0 };
    }
    function seed() { pts = []; for (var i = 0; i < N; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, s: 3 + Math.random() * 4, c: i % 9 === 4 ? 'rgba(255,90,19,' : 'rgba(63,158,232,', a: 0.25 + Math.random() * 0.35 }); }
    function sq(x, y, s, col) { var r = 2; ctx.fillStyle = col; ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x - s / 2, y - s / 2, s, s, r); else ctx.rect(x - s / 2, y - s / 2, s, s); ctx.fill(); }
    function draw(k) {
      ctx.clearRect(0, 0, w, h);
      pts.forEach(function (p, i) {
        var tg = target(i), e = 1 - Math.pow(1 - k, 3);
        var x = p.x + (tg.x - p.x) * e, y = p.y + (tg.y - p.y) * e;
        sq(x, y, p.s * (1 - 0.35 * e), p.c + (p.a + 0.3 * e).toFixed(2) + ')');
      });
    }
    function loop(t) {
      if (!t0) t0 = t; var k = clamp((t - t0) / 4200, 0, 1); draw(k);
      if (k < 1) requestAnimationFrame(loop); else { running = false; done = true; }
    }
    size(); seed();
    if (!motion) { draw(1); done = true; return; }
    draw(0);
    new IntersectionObserver(function (es) {
      if (es[0].isIntersecting && !running && !done) { running = true; requestAnimationFrame(loop); }
    }, { threshold: 0.3 }).observe(cv);
    W.addEventListener('resize', function () { size(); if (done) draw(1); });
  }

  /* ---------- start ---------- */
  var pending = false;
  new MutationObserver(function () {
    if (pending) return; pending = true;
    requestAnimationFrame(function () { pending = false; check(); });
  }).observe(d.documentElement, { childList: true, subtree: true });
  check();
})();
