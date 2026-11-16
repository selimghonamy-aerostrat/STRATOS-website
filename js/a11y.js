// Keyboard support for every tab set on the live page (#dc-root):
// - one tab stop per tab set (roving tabindex), Arrow keys / Home / End move and select
// - tabs and their panel are linked with aria-controls / aria-labelledby
// - visible focus rings in brand Sky Blue
// It only adds attributes; the page's own templates and state stay in charge.
(function () {
  'use strict';
  var st = document.createElement('style');
  st.textContent = '#dc-root a:focus-visible,#dc-root button:focus-visible,#dc-root summary:focus-visible,#dc-root input:focus-visible,#dc-root textarea:focus-visible{outline:2px solid #3F9EE8;outline-offset:2px}';
  document.head.appendChild(st);
  var uid = 0;

  function sync(list) {
    var tabs = [].slice.call(list.querySelectorAll('[role="tab"]'));
    if (!tabs.length) return;
    if (!list.id) list.id = 'aerostrat-tl-' + (++uid);
    var sel = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0];
    // the panel: first [role=tabpanel] after the tab list within the same parent
    var panel = null, n = list.nextElementSibling;
    while (n && !panel) { if (n.getAttribute('role') === 'tabpanel') panel = n; else if (n.querySelector) panel = n.querySelector('[role="tabpanel"]'); n = n.nextElementSibling; }
    if (panel && !panel.id) panel.id = list.id + '-panel';
    tabs.forEach(function (t, i) {
      if (!t.id) t.id = list.id + '-tab-' + i;
      var ti = t === sel ? '0' : '-1';
      if (t.getAttribute('tabindex') !== ti) t.setAttribute('tabindex', ti);
      if (panel && t.getAttribute('aria-controls') !== panel.id) t.setAttribute('aria-controls', panel.id);
    });
    if (panel) {
      if (panel.getAttribute('aria-labelledby') !== sel.id) panel.setAttribute('aria-labelledby', sel.id);
      if (!panel.hasAttribute('tabindex')) panel.setAttribute('tabindex', '0');
    }
  }
  function syncAll() { document.querySelectorAll('#dc-root [role="tablist"]').forEach(sync); }

  document.addEventListener('keydown', function (e) {
    var tab = e.target.closest && e.target.closest('#dc-root [role="tab"]');
    if (!tab) return;
    var list = tab.closest('[role="tablist"]'); if (!list) return;
    var tabs = [].slice.call(list.querySelectorAll('[role="tab"]')), i = tabs.indexOf(tab), j = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') j = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') j = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') j = 0;
    else if (e.key === 'End') j = tabs.length - 1;
    if (j < 0) return;
    e.preventDefault();
    tabs[j].click();
    tabs[j].focus();
    setTimeout(function () { sync(list); }, 50);
  });

  var pending = false;
  new MutationObserver(function () {
    if (pending) return; pending = true;
    requestAnimationFrame(function () { pending = false; syncAll(); });
  }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['aria-selected'] });
  syncAll();
})();
