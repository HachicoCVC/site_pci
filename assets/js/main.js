(function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('nav--open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('[data-accordion]').forEach((acc) => {
    acc.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const item = btn.closest('.faq__item');
      if (!item) return;
      item.classList.toggle('faq__item--open');
    });
  });
})();