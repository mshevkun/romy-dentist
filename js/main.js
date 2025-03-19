document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector('.btn');
  var menu = document.querySelector('.full-menu');
  var navItems = document.querySelectorAll('.nav__item');

  burger.addEventListener('click', function () {
    burger.classList.toggle('btn--open');
    menu.classList.toggle('menu--open');
  });

  navItems.forEach(el => {
    el.onmouseover = function () {
      burger.classList.toggle('btn--open');
      menu.classList.toggle('menu--open');
    };
  });



  // Change classes in contact-form section for max-width: 768px

  const mql = window.matchMedia('(max-width: 768px)');
  const contactForm = document.querySelector('.contact-form')
  const contactFormWrapper = document.querySelector('.contact-form-content-wrapper')

  function contactFormClassesChange(e) {
    if (e.matches) {
      if (contactForm.classList.contains('container-fluid')) {
        contactForm.classList.remove('container-fluid')
        contactForm.classList.add('container')
      }

      if (contactFormWrapper.classList.contains('row')) {
        contactFormWrapper.classList.remove('row')
        contactFormWrapper.classList.remove('d-flex')
      }
    } else {
      if (contactForm.classList.contains('container')) {
        contactForm.classList.remove('container')
        contactForm.classList.add('container-fluid')
      }

      if (!contactFormWrapper.classList.contains('row')) {
        contactFormWrapper.classList.add('row')
        contactFormWrapper.classList.add('d-flex')
      }
    }
  }

  mql.onchange = (e) => {
    contactFormClassesChange(e)
  };

  contactFormClassesChange(mql)
});