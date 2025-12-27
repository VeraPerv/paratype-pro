const themeSwitcherInput = document.querySelector('.theme-switcher__input');
// const body = document.querySelector('.body');

const switchTheme = () => {
  if(themeSwitcherInput.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
};

const initThemeSwitcher = () => {
  if(themeSwitcherInput) {
    themeSwitcherInput.addEventListener('change', switchTheme);
  }
};

export {initThemeSwitcher};


