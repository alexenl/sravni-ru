const nextQuestionButton = document.querySelector('.question__button');
const radioButtons = document.querySelectorAll('input[name^=question]');

radioButtons.forEach((radio) => radio.addEventListener('change', () => {
  nextQuestionButton.disabled = false;
}));

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const currentPage = document.location.pathname;
  const currentQuestion = Number(currentPage[6]);

  document.location.href = currentQuestion === 4 ? './result.html' : `./quest${currentQuestion + 1}.html`;
});