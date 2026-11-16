// Copy buttons: <button data-copy-target="id"> copies the text of #id to the clipboard
// and confirms in the button label for two seconds. Delegated, outside the React tree.
(function () {
  'use strict';
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-copy-target]');
    if (!btn) return;
    var src = document.getElementById(btn.getAttribute('data-copy-target'));
    if (!src) return;
    var text = src.innerText.trim();
    var label = btn.textContent;
    function done(ok) {
      btn.textContent = ok ? 'Copied' : 'Select the text to copy';
      setTimeout(function () { btn.textContent = label; }, 2000);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    else done(false);
  });
})();
