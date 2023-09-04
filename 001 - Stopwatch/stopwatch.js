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
