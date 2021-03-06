function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.setAttribute('data-theme', themeName);
}

function saveTheme() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'night') {
      setTheme('night');
    } else {
      setTheme('light');
    }
  } else {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('night');
    } else {
      setTheme('light');
    }
  }
}

module.exports = {
  setTheme,
  saveTheme,
};
