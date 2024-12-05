document.getElementById('toggle-theme').addEventListener('click', function () {
  const themeLink = document.getElementById('theme-style');
  if (themeLink.getAttribute('href') === 'styles.css') {
    themeLink.setAttribute('href', 'blue-theme.css');
    this.textContent = 'Desactivar Modo Daltonismo';
  } else {
    themeLink.setAttribute('href', 'styles.css');
    this.textContent = 'Activar Modo Daltonismo';
  }
});
