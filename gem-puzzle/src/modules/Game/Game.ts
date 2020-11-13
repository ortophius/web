import Chip from '../Chip/Chip';
import Config from '../Config/Config';
import MouseEventDispatcher from '../MouseEventDispatcher/MouseEventDispatcher';
import template from './Game.pug';

let chip: Chip;

export default class Game {
  private lastTime: number = 0;

  constructor(id: string) {
    const DOMElement: HTMLElement = document.querySelector(id);
    DOMElement.innerHTML = template;
    Config.DOMElement = DOMElement;

    Config.canvas = document.querySelector('#game');

    const ctx = Config.canvas.getContext('2d');

    Config.ctx = ctx;

    Config.MouseEvents = new MouseEventDispatcher(Config.canvas);
  }

  start(): void {
    chip = new Chip(0, 0, 40, 40);
    chip.setNumber(433);
    chip.moveTo(100, 100);

    const updateFunc: Function = this.preUpdate.bind(this);
    this.intervalId = setInterval(updateFunc, 1000 / 120);
  }

  preUpdate() {
    window.requestAnimationFrame(this.update.bind(this));
  }

  update(time: number = 0) {
    const { ctx, canvas } = Config;

    const newTime = parseFloat(time.toFixed(2)) / 1000;
    const delta = parseFloat((newTime - this.lastTime).toFixed(2));
    this.lastTime = newTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    chip.update(delta);
  }
}
