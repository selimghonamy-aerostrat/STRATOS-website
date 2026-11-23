// AeroStrat motion and header (feat/uiux-v3, v3.2). Native JS only: IntersectionObserver,
// requestAnimationFrame, sticky positioning. Inlined into every page by scripts/sync-shared.py.
// Runs on the pre-rendered copy first and re-binds when the live page (#dc-root) replaces it.
// Rule: nothing above the fold is ever hidden. Elements are visible by default; only those that
// start below the fold get .rv-wait and reveal as they come in (at 85% of the viewport).
// prefers-reduced-motion: nothing moves, nothing is hidden, the hero shows the poster only.
// scripts/prerender.mjs sets window.__dcPrerender so the snapshot is taken untouched.
(function () {
  'use strict';
  if (window.__dsMotion) return; window.__dsMotion = true;
  var d = document, html = d.documentElement, W = window;
  var reduce = W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var snapshot = !!W.__dcPrerender;
  var motion = !reduce && !snapshot && 'IntersectionObserver' in W;
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  if (motion) html.classList.add('ds-motion');

  var STATIC = !d.querySelector('script[src*="/js/support.js"]');
  var revealed = {};
  var main = null, scope = null, io = null, stepIo = null;
  var st = { lastY: 0, ticking: false, fills: [], expands: [], pxs: [], pins: [], scrub: null, snav: null };
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var REV = '[data-rv],[data-lm],[data-draw],[data-count]';

  /* ---------- binding ---------- */
  function activeMain() {
    var pre = d.getElementById('dc-prerender');
    if (pre) return pre.querySelector('main');
    var m = d.querySelector('#dc-root main.aerostrat-page-enter') || d.querySelector('#dc-root main');
    // static pages (privacy, sub-processors, 404) have no React root
    return m || (STATIC ? d.querySelector('main') : null);
  }
  // STATIC (set above): React pages load js/support.js before this script; static pages do not.
  // Testing for the x-dc element is not enough: support.js replaces it before React has drawn the live page.
  var isStatic = function () { return STATIC; };
  function live() { return !!(main && main.isConnected && !main.closest('#dc-prerender') && (STATIC || main.closest('#dc-root'))); }
  function check() {
    var m = activeMain();
    if (m && m !== main && m.isConnected) bind(m);
  }
  function bind(m) {
    if (io) io.disconnect(); if (stepIo) stepIo.disconnect();
    main = m; scope = m.parentNode;
    header();
    prepare();
    observe();
    scrubSetup();
    toneSetup();
    snavSetup();
    onScroll(); frame();
  }

  /* ---------- header: always visible; solid after 24px ---------- */
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
    var n = 0, vh = W.innerHeight, first = !st.bound; st.bound = true;
    scope.querySelectorAll(REV).forEach(function (el) { el.__k = 'k' + (n++); });
    scope.querySelectorAll('[data-rv]').forEach(function (el) {
      var sibs = [].filter.call(el.parentNode.children, function (c) { return c.hasAttribute('data-rv'); });
      el.style.setProperty('--i', Math.min(sibs.indexOf(el), 6));
    });
    if (motion) {
      html.classList.add('rv-ready');
      scope.querySelectorAll(REV).forEach(function (el) {
        var below = el.getBoundingClientRect().top > vh * 0.92;
        // first screen: always visible; after the handover, keep what was already shown
        if (first && !below) revealed[el.__k] = 1;
        if (revealed[el.__k]) { el.classList.add('is-in'); el.classList.remove('rv-wait'); if (el.hasAttribute('data-count')) el.__counted = true; return; }
        if (!below) { el.classList.add('is-in'); revealed[el.__k] = 1; return; }
        el.classList.add('rv-wait');
      });
    }
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
  W.addEventListener('resize', function () { pinMode(); if (scope && motion) scope.querySelectorAll('[data-lm].rv-wait').forEach(lines); onScroll(); });

  /* ---------- observers ---------- */
  function observe() {
    if (motion) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target; el.classList.add('is-in'); revealed[el.__k] = 1; io.unobserve(el);
        });
      }, { threshold: 0, rootMargin: '0px 0px -15% 0px' });
      scope.querySelectorAll(REV).forEach(function (el) { if (!el.classList.contains('is-in') || (el.hasAttribute('data-count') && !el.__counted)) io.observe(el); });
      stepIo = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) en.target.classList.add('is-active'); });
      }, { threshold: 0.3 });
      st.pins.forEach(function (p) { if (!p.el.classList.contains('is-pinned')) p.steps.forEach(function (s) { stepIo.observe(s); }); });
    } else {
      st.pins.forEach(function (p) { p.steps.forEach(function (s) { s.classList.add('is-active'); }); });
    }
  }
  // count-up changes only the number; any child (the Coral "+") is kept
  function count(el) {
    if (el.__counted) return; el.__counted = true;
    var to = +el.getAttribute('data-count'), node = el.firstChild, t0 = 0, dur = 1200;
    if (!node || node.nodeType !== 3) return;
    function f(t) {
      if (!t0) t0 = t;
      var p = clamp((t - t0) / dur, 0, 1), e = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(to * e).toLocaleString('en-GB');
      if (p < 1) requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  /* ---------- hero: the video plays from load; scrolling lifts it like a take-off ---------- */
  function scrubSetup() {
    var hero = scope.querySelector('[data-hero]');
    st.scrub = null;
    if (!hero) return;
    var v = hero.querySelector('video'), lift = hero.querySelector('[data-hero-lift]'), fade = hero.querySelector('[data-hero-fade]');
    st.scrub = { hero: hero, v: v, lift: lift, fade: fade, vis: true };
    if (!v || !motion || saveData) return;           // reduced motion / Save-Data: the poster only
    var start = function () {
      var s = st.scrub; if (!s || !live() || !s.v.isConnected || s.v.__src) return;
      s.v.__src = true;
      s.v.muted = true; s.v.playsInline = true; s.v.loop = true;
      s.v.src = W.innerWidth < 760 ? s.v.getAttribute('data-src-sm') : s.v.getAttribute('data-src');
      var p = s.v.play(); if (p && p.catch) p.catch(function () {});
      // pause only when the hero is completely off-screen, resume when it returns
      new IntersectionObserver(function (es) {
        var on = es[0].isIntersecting; s.vis = on;
        if (on) { var q = s.v.play(); if (q && q.catch) q.catch(function () {}); } else s.v.pause();
      }).observe(s.hero);
    };
    if (live()) start();
  }
  function scrubFrame(vh) {
    var s = st.scrub; if (!s || !motion) return;
    var r = s.hero.getBoundingClientRect();
    if (r.bottom < 0) return;
    var p = clamp(-r.top / Math.max(1, r.height), 0, 1);
    if (s.v) s.v.style.transform = p ? 'translate3d(0,' + (-8 * p).toFixed(2) + '%,0) scale(' + (1 + 0.12 * p).toFixed(4) + ')' : '';
    if (s.fade) s.fade.style.opacity = p.toFixed(3);
    if (s.lift) { s.lift.style.transform = p ? 'translate3d(0,' + (-40 * p).toFixed(1) + 'px,0)' : ''; s.lift.style.opacity = p ? (1 - 0.4 * p).toFixed(3) : ''; }
  }

  /* ---------- blended canvas: the section on the middle line sets the tone ---------- */
  var toneIo = null;
  function toneOf(el) {
    var t = el.getAttribute('data-tone'); if (t) return t;
    var c = el.classList;
    if (c.contains('on-light')) return 'light';
    if (c.contains('on-deep') || c.contains('ds-band')) return 'deep';
    return 'navy';
  }
  function toneSetup() {
    if (toneIo) toneIo.disconnect();
    var canvas = scope.querySelector('.as-canvas'); if (!canvas || !('IntersectionObserver' in W)) return;
    var secs = [].slice.call(main.children).reduce(function (a, el) { return a.concat(el.tagName === 'DIV' && el.querySelector(':scope > section') ? [].slice.call(el.querySelectorAll(':scope > section')) : [el]); }, []);
    if (reduce) canvas.style.transition = 'none';
    // every section takes the canvas tone, so text is always readable while the colour changes;
    // photo-led sections (heroes, the statement band) stay dark
    var foot = scope.querySelector('footer');
    var themed = secs.concat(foot ? [foot] : []).filter(function (el) { return !/(^|\s)(ds-phero|hm-hero|hm-sband|nf)(\s|$)/.test(el.className || ''); });
    secs.concat(themed).forEach(function (el) { if (!el.hasAttribute('data-tone')) el.setAttribute('data-tone', toneOf(el)); });
    var apply = function (tone) {
      canvas.setAttribute('data-tone', tone);
      themed.forEach(function (el) { el.classList.remove('on-light', 'on-navy', 'on-deep'); el.classList.add('on-' + tone); });
    };
    toneIo = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) apply(en.target.getAttribute('data-tone') || toneOf(en.target)); });
    }, { rootMargin: '-50% 0px -50% 0px' });
    secs.forEach(function (el) { toneIo.observe(el); });
    html.classList.add('tone-ready');
    st.orbs = [].slice.call(canvas.querySelectorAll('.as-orb'));
  }

  /* ---------- section navigation on long pages ---------- */
  function snavSetup() {
    var nav = scope.querySelector('.ds-snav');
    st.snav = null;
    if (!nav) return;
    var links = [].slice.call(nav.querySelectorAll('a[href^="#"]'));
    var sel = nav.querySelector('select');
    if (sel && !sel.__ds) { sel.__ds = true; sel.addEventListener('change', function () { var t = d.getElementById(sel.value); if (t) t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }); }
    st.snav = { nav: nav, links: links, sel: sel, cur: null };
  }
  function snavFrame() {
    var s = st.snav; if (!s) return;
    var line = s.nav.getBoundingClientRect().bottom + 24, active = null;
    s.links.forEach(function (a) { var t = d.getElementById(a.getAttribute('href').slice(1)); if (t && t.getBoundingClientRect().top <= line) active = a; });
    if (active === s.cur) return;
    s.cur = active;
    s.links.forEach(function (a) { if (a === active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    if (active && active.scrollIntoView && s.nav.querySelector('.ds-snav-in')) {
      var box = s.nav.querySelector('.ds-snav-in'), ar = active.getBoundingClientRect(), br = box.getBoundingClientRect();
      if (ar.left < br.left || ar.right > br.right - 40) box.scrollLeft += ar.left - br.left - 40;
    }
    if (s.sel && active) s.sel.value = active.getAttribute('href').slice(1);
  }

  /* ---------- scroll-driven work (transform, opacity and clip only) ---------- */
  function onScroll() { if (!st.ticking) { st.ticking = true; requestAnimationFrame(frame); } }
  function frame() {
    st.ticking = false;
    var y = W.scrollY || html.scrollTop, vh = W.innerHeight;
    runway(clamp(y / Math.max(1, html.scrollHeight - vh), 0, 1));
    var solid = y > 24 || html.classList.contains('ds-sheet-open');
    if (hdr) hdr.classList.toggle('is-solid', solid);
    html.classList.toggle('ds-solid', solid);
    st.lastY = y;
    if (!scope) return;
    scrubFrame(vh);
    if (motion && st.orbs) st.orbs.forEach(function (o, i) { o.style.transform = 'translate3d(0,' + (Math.sin(y / 1400 + i * 2) * 0.15 * vh).toFixed(1) + 'px,0)'; });
    snavFrame();
    if (motion) st.fills.forEach(function (f) {
      var r = f.el.getBoundingClientRect();
      var p = clamp((vh * 0.88 - r.top) / (r.height + vh * 0.38), 0, 1);
      f.el.style.setProperty('--f', (p * (f.n + 1.5)).toFixed(2));
    });
    if (motion) st.expands.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var p = clamp((vh - r.top) / (vh * 0.75), 0, 1);
      el.style.clipPath = 'inset(0 ' + (6 * (1 - p)).toFixed(2) + '% round ' + (16 * (1 - p)).toFixed(1) + 'px)';
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
      p.bars.forEach(function (b, i) { b.querySelector('b').style.transform = 'scaleX(' + clamp(pr * 3 - i, 0, 1).toFixed(3) + ')'; });
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
  W.addEventListener('resize', onScroll, { passive: true });

  /* ---------- runway bar: the aircraft rolls along and takes off at the end of the page ---------- */
  var rw = { cur: null, target: 0, raf: 0 };
  function runway(pct) {
    rw.target = pct;
    if (!rw.raf) rw.raf = requestAnimationFrame(runwayStep);
  }
  function runwayStep() {
    rw.raf = 0;
    var r = scope && scope.querySelector('.ds-runway');
    if (!r) return;
    var ship = r.querySelector('.ship'), laid = r.querySelector('.laid'), wake = r.querySelector('.wake');
    var pct = rw.target, cur = rw.cur == null || reduce ? pct : rw.cur + (pct - rw.cur) * 0.2;
    if (Math.abs(pct - cur) < 0.0004) cur = pct;
    rw.cur = cur;
    var laneW = r.clientWidth || W.innerWidth, lift = clamp((cur - 0.7) / 0.24, 0, 1);
    var shipX = 2 + cur * Math.max(0, laneW - 24), tailX = shipX + 4, wakeW = Math.min(tailX, 26 + lift * 40);
    ship.style.transform = 'translate3d(' + shipX.toFixed(1) + 'px,' + (lift * -3).toFixed(2) + 'px,0) rotate(' + (lift * -24).toFixed(2) + 'deg) scale(' + (1 - lift * 0.3).toFixed(3) + ')';
    ship.style.opacity = (1 - lift * 0.55).toFixed(3);
    laid.style.transform = 'scaleX(' + (Math.max(0, tailX) / laneW).toFixed(4) + ')';
    wake.style.transform = 'translate3d(' + Math.max(0, tailX - wakeW).toFixed(1) + 'px,0,0) scaleX(' + (wakeW / 66).toFixed(3) + ')';
    wake.style.opacity = lift.toFixed(3);
    if (cur !== pct) rw.raf = requestAnimationFrame(runwayStep);
  }

  /* ---------- closing CTA: rounded-square particles settle into a flight-path arc ---------- */
  function particles() {
    var cv = scope.querySelector('.hm-particles');
    if (!cv || cv.__ds) return; cv.__ds = true;
    var ctx = cv.getContext('2d'); if (!ctx) return;
    var N = 56, pts = [], w = 0, h = 0, dpr = Math.min(2, W.devicePixelRatio || 1), t0 = 0, running = false, done = false;
    function size() { var r = cv.getBoundingClientRect(); w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    function target(i) {
      var t = i / (N - 1), x0 = w * 0.08, x1 = w * 0.92, cx = w * 0.5, y0 = h * 0.86, cy = h * 0.18;
      return { x: (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1, y: (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * cy + t * t * y0 };
    }
    function seed() { pts = []; for (var i = 0; i < N; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, s: 3 + Math.random() * 4, c: i % 9 === 4 ? 'rgba(255,90,19,' : 'rgba(63,158,232,', a: 0.25 + Math.random() * 0.35 }); }
    function sq(x, y, s, col) { ctx.fillStyle = col; ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x - s / 2, y - s / 2, s, s, 2); else ctx.rect(x - s / 2, y - s / 2, s, s); ctx.fill(); }
    function draw(k) {
      ctx.clearRect(0, 0, w, h);
      pts.forEach(function (p, i) {
        var tg = target(i), e = 1 - Math.pow(1 - k, 3);
        sq(p.x + (tg.x - p.x) * e, p.y + (tg.y - p.y) * e, p.s * (1 - 0.35 * e), p.c + (p.a + 0.3 * e).toFixed(2) + ')');
      });
    }
    function loop(t) {
      if (!t0) t0 = t; var k = clamp((t - t0) / 3600, 0, 1); draw(k);
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
  var mo = new MutationObserver(function () {
    if (pending) return; pending = true;
    requestAnimationFrame(function () {
      pending = false; check();
      if (live() && (isStatic() || main.classList.contains('aerostrat-page-enter'))) mo.disconnect();
    });
  });
  mo.observe(d.documentElement, { childList: true, subtree: true });
  check();
})();
