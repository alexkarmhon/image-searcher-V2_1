const switcher = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

const { LIGHT, DARK } = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme'
};

let theme = localStorage.getItem('page-theme') || LIGHT;
switcher.checked = theme === DARK;
body.classList.add(theme);

const themeChange = () => {
  body.classList.toggle(LIGHT);
  body.classList.toggle(DARK);

  theme = theme === LIGHT ? DARK : LIGHT;
  localStorage.setItem('page-theme', theme);
}

switcher.addEventListener('change', themeChange);