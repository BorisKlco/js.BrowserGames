export class Stopwatch {
  #time;
  #startTimer;
  #running;

  constructor() {
    this.#time = 0;
    this.#startTimer;
    this.#running = false;
    this.duration = 0;
  }

  start() {
    if (this.#running) {
      return 'Stopwatch Running! Stop first!';
    }
    this.#startTimer = Date.now();
    this.#running = true;
    return 'Stopwatch Start';
  }

  stop() {
    let stop = this.#startTimer;
    this.#startTimer = Date.now();
    this.#time = this.#time + this.#startTimer - stop;
    this.#running = false;
    this.duration = Math.floor(this.#time / 100) / 10;
    return 'Stopwatch Stop';
  }

  reset() {
    this.#time = 0;
    this.#startTimer = 0;
    this.#running = false;
    this.duration = 0;
    return 'Stopwatch reseted';
  }
}

const sw = new Stopwatch();

function start() {
  document.querySelector('#status').innerHTML = `Starting`;
  sw.start();
}
function stop() {
  document.querySelector('#status').innerHTML = `Stopping`;
  sw.stop();
  setDuration(sw.duration);
}

function reset() {
  sw.reset();
  setDuration(sw.duration);
}

function setDuration(time) {
  document.querySelector('#duration').innerHTML = `${time}s`;
}

document.querySelector('#stopwatch').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="reset" type="button">Reset</button>
      <p id="status">Status</p>
      <p id="duration">0s</p>
      <button id="start" type="button">Start</button>
      <button id="stop" type="button">Stop</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

document.querySelector('#start').addEventListener('click', () => start());
document.querySelector('#stop').addEventListener('click', () => stop());
document.querySelector('#reset').addEventListener('click', () => reset());
