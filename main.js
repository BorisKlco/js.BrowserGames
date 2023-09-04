import './style.css';
import { setupCounter } from './counter.js';
import { Stopwatch } from './001 - Stopwatch/stopwatch.js';

const sw = new Stopwatch();

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <p id="status">Status</p>
      <p id="duration">  </p>
      <button id="start" type="button">Start</button>
      <button id="stop" type="button">Stop</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

function start() {
  document.querySelector('#status').innerHTML = `Starting`;
  sw.start();
}
function stop() {
  document.querySelector('#status').innerHTML = `Stopping`;
  sw.stop();
  setDuration(sw.duration);
}

function setDuration(time) {
  document.querySelector('#duration').innerHTML = `${time}s`;
}

document.querySelector('#start').addEventListener('click', () => start());
document.querySelector('#stop').addEventListener('click', () => stop());
console.log(sw.duration);

setupCounter(document.querySelector('#counter'));
