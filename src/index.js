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