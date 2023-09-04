class Stopwatch {
  #time;
  #startTimer;
  #command;

  constructor() {
    this.#time = 0;
    this.#startTimer;
    this.#command = '';
  }

  start() {
    if (this.#command === 'start') {
      return console.log('Stopwatch Running! Stop first!');
    }
    this.#startTimer = Date.now();
    this.#command = 'start';
    return console.log('Stopwatch Start');
  }

  stop() {
    let stop = this.#startTimer;
    this.#startTimer = Date.now();
    this.#time = this.#time + this.#startTimer - stop;
    this.#command = '';
    return console.log('Stopwatch Stop', Math.floor(this.#time / 1000), 'sec');
  }
}

const sw = new Stopwatch();

sw.start();

console.log('sleep for 4 sec');

setTimeout(() => {
  sw.stop();
}, 4000);
