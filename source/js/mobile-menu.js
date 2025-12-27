const header = document.querySelector('.header');
const toggleMenu = document.querySelector('.header-nav__menu-wrapper');
const toggleBtn = document.getElementById('toggle-btn');
const headerElement = document.querySelector('.header');
const headerWrapper = document.querySelector('.header-nav__wrapper');
const primaryLinks = document.querySelector('.menu-primary')?.querySelectorAll('.menu-primary__link');
const secondaryLinks = document.querySelector('.menu-secondary')?.querySelectorAll('.menu-secondary__link');
const profileLinks = document.querySelector('.profile-menu')?.querySelectorAll('.profile-menu__link');
const profileHeadingLink = document.querySelector('.profile')?.querySelector ('.profile__link');
const rulesListLinks = document.querySelector('.rules-list')?.querySelectorAll('.rules-list__link');
const socialsLinks = document.querySelector('.socials-list')?.querySelectorAll('.socials-list__link');
const switcherInput = header?.querySelector('.theme-switcher__input');
const copyright = header?.querySelector('.design-company');

const breakpoint = window.matchMedia('(max-width: 1023px)');

const setTabIndex = (arr) => {
  // const newArr = [...arr];
  const newArr = Array.from(arr);
  newArr.forEach((item) => {
    item.setAttribute('tabindex', '0');
  });
  profileHeadingLink.setAttribute('tabindex', '0');
  switcherInput.setAttribute('tabindex', '0');
  copyright.setAttribute('tabindex', '0');
};

const removeTabIndex = (arr) => {
  // const newArr = [...arr];
  const newArr = Array.from(arr);
  newArr.forEach((item) => {
    item.setAttribute('tabindex', '-1');
  });
  profileHeadingLink.setAttribute('tabindex', '-1');
  switcherInput.setAttribute('tabindex', '-1');
  copyright.setAttribute('tabindex', '0');
};

const openMenu = () => {
  headerElement.classList.add('header--overlay');
  document.body.classList.add('body--overlay');
  toggleBtn.classList.add('header-nav__toggle--open');
  setTabIndex(primaryLinks);
  setTabIndex(secondaryLinks);
  setTabIndex(profileLinks);
  setTabIndex(rulesListLinks);
  setTabIndex(socialsLinks);
  setTabIndex(profileHeadingLink);
};

const closeMenu = () => {
  toggleBtn.classList.remove('header-nav__toggle--open');
  document.body.classList.remove('body--overlay');
  headerElement.classList.remove('header--overlay');
  removeTabIndex(primaryLinks);
  removeTabIndex(secondaryLinks);
  removeTabIndex(profileLinks);
  removeTabIndex(rulesListLinks);
  removeTabIndex(socialsLinks);
  removeTabIndex(profileHeadingLink);
};

const openCloseToggleMenu = () => {
  headerWrapper.classList.toggle('header-nav__wrapper--open');
  const isOpen = headerWrapper.classList.contains('header-nav__wrapper--open');

  if (isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
};

breakpoint.addEventListener('change', () => {
  if (!breakpoint.matches || headerWrapper.classList.contains('header-nav__wrapper--open')) {
    setTabIndex(primaryLinks);
  } else {
    removeTabIndex(primaryLinks);
  }
}
);

const mobileMenuToggle = () => {
  toggleBtn.addEventListener('click', openCloseToggleMenu);
};


export { mobileMenuToggle };
