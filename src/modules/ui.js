import data from '../data.js';

const scores = document.querySelector('.scores');

const addUi = () => {
  let result = '';
  data.forEach((data) => {
    const info = `
    <div class="scores-info">
      <span>${data.user}</span>
      <span>${data.score}</span>
    </div>
    `;
    result += info;
  });
  scores.innerHTML = result;
};

export default addUi;