// "Enlarge" for dense sample figures: any button with data-enlarge-open copies its
// closest [data-enlarge] container into a native modal dialog (Esc closes, focus
// stays inside, focus returns to the button). Lives outside the React tree.
(function () {
  'use strict';
  var css = 'dialog.aerostrat-enlarge{border:none;padding:0;width:min(1240px,94vw);max-height:92vh;background:#001538;border:1px solid rgba(255,255,255,.08);border-radius:16px;box-shadow:0 24px 60px rgba(0,0,0,.45)}' +
    'dialog.aerostrat-enlarge::backdrop{background:rgba(0,21,56,.7);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}' +
    '.aerostrat-enlarge-head{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:14px 20px;background:#001538;color:#fff;font:600 14px/1.3 "Open Sauce One",sans-serif;position:sticky;top:0;z-index:1}' +
    '.aerostrat-enlarge-head button{font:600 13px/1 "Open Sauce One",sans-serif;color:#fff;background:transparent;border:1px solid rgba(255,255,255,.2);border-radius:8px;padding:0 14px;min-height:44px;cursor:pointer}' +
    '.aerostrat-enlarge-head button:focus-visible{outline:2px solid #3F9EE8;outline-offset:2px}' +
    '.aerostrat-enlarge-body{padding:24px;overflow:auto;max-height:calc(92vh - 56px)}' +
    '.aerostrat-enlarge-body [data-enlarge]{zoom:1.25}' +
    '@media (max-width:760px){.aerostrat-enlarge-body [data-enlarge]{zoom:1}.aerostrat-enlarge-body{padding:12px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-enlarge-open]');
    if (!btn) return;
    var box = btn.closest('[data-enlarge]');
    if (!box || typeof HTMLDialogElement !== 'function') return;
    e.preventDefault();
    var title = box.getAttribute('data-enlarge') || 'Figure';
    var d = document.createElement('dialog');
    d.className = 'aerostrat-enlarge';
    d.setAttribute('aria-label', title);
    var head = document.createElement('div'); head.className = 'aerostrat-enlarge-head';
    var h = document.createElement('span'); h.textContent = title;
    var close = document.createElement('button'); close.type = 'button'; close.textContent = 'Close';
    head.appendChild(h); head.appendChild(close);
    var body = document.createElement('div'); body.className = 'aerostrat-enlarge-body';
    var copy = box.cloneNode(true);
    copy.querySelectorAll('[data-enlarge-open]').forEach(function (b) { b.remove(); });
    copy.querySelectorAll('[id]').forEach(function (el) { el.removeAttribute('id'); });
    copy.querySelectorAll('button,a,input,select,textarea').forEach(function (el) { el.setAttribute('tabindex', '-1'); });
    copy.setAttribute('aria-hidden', 'false');
    body.appendChild(copy);
    d.appendChild(head); d.appendChild(body);
    document.body.appendChild(d);
    close.addEventListener('click', function () { d.close(); });
    d.addEventListener('click', function (ev) { if (ev.target === d) d.close(); });
    d.addEventListener('close', function () { d.remove(); btn.focus(); });
    d.showModal();
    close.focus();
  });
})();
