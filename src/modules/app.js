const scores = document.querySelector('.scores');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BT0cp2WqtrqYvdaTYVfQ/scores/';
class App {
  static getData = async () => {
    const response = await fetch(url);
    const scores = await response.json();
    return scores;
  }

  static displayData = async () => {
    let data = [];
    try {
      const fetchData = await App.getData();
      data = fetchData.result;
    } catch (e) {
      const info = `
      <div class="scores-info">
        <span>${e}</span>
      </div>
      `;
      scores.innerHTML = info;
    }
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
  }

  static postData = async () => {
    const name = document.querySelector('#userName').value;
    const marks = document.querySelector('#userScore').value;
    const score = Number(marks);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: name, score }),
    });
    const result = response.json();
    result.then(() => {
      App.displayData();
      document.querySelector('#userName').value = '';
      document.querySelector('#userScore').value = '';
    });
  }
}

export default App;