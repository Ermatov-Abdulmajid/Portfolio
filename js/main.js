const modifiers = {
  elSiteHeaderOpen: 'site-header--open'
}

const elSiteHeader = document.querySelector('.site-header');
const elSiteHeaderToggler = elSiteHeader.querySelector('.site-header__toggler');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function () {
    elSiteHeader.classList.toggle(modifiers.elSiteHeaderOpen);
  });
}
