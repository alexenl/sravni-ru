const body = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (window.scrollY > 70) {
    body.classList.add('scroll');
  } else {
    body.classList.remove('scroll');
  }
});
