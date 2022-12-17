const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('click', function () {
  if (localStorage.getItem('dark-mode') === 'true') {
    localStorage.setItem('dark-mode', 'false');
  } else {
    localStorage.setItem('dark-mode', 'true');
  }
  updateStylesheet();
});

function updateStylesheet() {
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

updateStylesheet();
