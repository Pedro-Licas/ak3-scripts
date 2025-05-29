(function() {
  function waitFor(selector, cb, tries = 20, interval = 200) {
    let i = 0;
    const timer = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(timer);
        cb(el);
      } else if (++i >= tries) {
        clearInterval(timer);
      }
    }, interval);
  }

  waitFor('.scroll-top', function(scrollBtn) {
    scrollBtn.style.display = 'none';
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
  });
})();
