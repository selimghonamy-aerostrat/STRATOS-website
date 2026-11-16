// Glossary filter: hides terms (and empty groups) that do not match the text typed
// in #gloss-filter. Uses the `hidden` attribute only, so the page markup is untouched.
(function () {
  'use strict';
  var st0 = document.createElement('style');
  st0.textContent = '.aerostrat-gloss-term[hidden],.aerostrat-gloss-group[hidden]{display:none !important}';
  document.head.appendChild(st0);
  function apply(q) {
    q = (q || '').trim().toLowerCase();
    var shown = 0, total = 0;
    document.querySelectorAll('#dc-root .aerostrat-gloss-group').forEach(function (g) {
      var any = false;
      g.querySelectorAll('.aerostrat-gloss-term').forEach(function (t) {
        total++;
        var hit = !q || t.textContent.toLowerCase().indexOf(q) !== -1;
        if (hit) { t.removeAttribute('hidden'); any = true; shown++; } else t.setAttribute('hidden', '');
      });
      if (any) g.removeAttribute('hidden'); else g.setAttribute('hidden', '');
    });
    var st = document.getElementById('gloss-filter-status');
    if (st) st.textContent = q ? (shown ? shown + ' of ' + total + ' terms match.' : 'No terms match. Try another word.') : '';
  }
  document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'gloss-filter') apply(e.target.value);
  });
})();
