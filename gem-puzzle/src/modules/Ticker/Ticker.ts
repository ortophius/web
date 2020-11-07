import Scene from '../Scene/Scene';

export default class Ticker {
  private subs: Array<Scene>;

  private timerId: number;

  private time: number;

  constructor(interval: number = 60) {
    this.time = performance.now();
    this.setInterval(interval);
  }

  setInterval(interval: number): void {
    const callback: Function = this.tick.bind(this);
    const timePeriod = 1000 / interval;

    if (this.timerId !== undefined) clearInterval(this.timerId);
    this.timerId = setInterval(callback, timePeriod);
  }

  tick(): void {
    const delta = performance.now() - this.time;
    this.subs.forEach((sub) => {
      sub.update(delta);
    });
  }
}
