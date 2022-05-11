import './main.css';
import App from './modules/app.js';

const form = document.querySelector('form');
const refresh = document.querySelector('#refresh');

document.addEventListener('DOMContentLoaded', async () => {
  App.displayData();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  App.postData();
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  App.displayData();
});

// const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BT0cx2WqtrqYvdaTYVfQ/scores/';

// async function fetchScores() {
//   const response = await fetch(baseURL);
//   return response.json();
// }

// async function postScore(score) {
//   const response = await fetch(baseURL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(score),
//   });
//   return response.json();
// }

// const displayScores = () => {
//   fetchScores()
//     .then((data) => {
//       let html = '';
//       data.result.forEach((item) => {
//         html += `<tr><td>${item.user} : ${item.score}</td></tr>`;
//       });
//       document.querySelector('tbody').innerHTML = html;
//     })
//     .catch((error) => {
//       document.querySelector('tbody').innerHTML = error;
//     });
// };

// const GetScoreFormValues = () => {
//   const name = document.querySelector('.userName').value;
//   const score = document.querySelector('.userScore').value;
//   postScore({ user: name, score })
//     .then(() => {
//       displayScores();
//       document.querySelector('.userName').value = '';
//       document.querySelector('.userScore').value = '';
//     })
//     .catch((error) => {
//       document.querySelector('.result').textContent = error;
//     });
// };

// module.exports = { GetScoreFormValues, displayScores };