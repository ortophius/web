import canvas from './Game.pug';

export default class Game {
  private canvas: HTMLCanvasElement;

  private context: CanvasRenderingContext2D;

  private DOMElement: HTMLElement;

  constructor(id: string) {
    this.DOMElement = document.querySelector(id);
  }

  start(): void {
    this.DOMElement.innerHTML = canvas;
    this.canvas = document.querySelector('#game');
    this.context = this.canvas.getContext('2d');
  }
}
