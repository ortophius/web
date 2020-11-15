// import Chip from '../Chip/Chip';
import Config from '../Config/Config';
import Container from '../Container/Container';
import MainMenu from '../MainMenu/MainMenu';
import SizeMenu from '../Menu/SizeMenu';
// import Menu from '../Menu/Menu';
// import MenuText from '../Menu/MenuText';
import template from './Game.pug';

// let chip: Chip;
// let menu: Menu;

export default class Game extends Container {
  private lastTime: number;

  private intervalId: number;

  private mainMenu: MainMenu;

  private sizeMenu: SizeMenu;

  private MouseEvents: MouseEventDispatcher;

  constructor(id: string) {
    Config.DOMElement = document.querySelector(id);

    Config.DOMElement.innerHTML = template;

    const canvas = document.querySelector('#game');

    Config.canvas = canvas;
    Config.ctx = Config.canvas.getContext('2d');

    super(0, 0, Config.canvas.width, Config.canvas.height);

    this.lastTime = 0;

    canvas.addEventListener('click', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mousedown', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mouseup', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mouseover', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mouseout', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mousemove', this.dispatchMouseEvent.bind(this));
  }

  start(): void {
    this.createMenu();

    this.setupListeners();

    this.update(0);
  }

  setupListeners() {
    const self = this;

    this.mainMenu.on('newgame', () => {
      self.mainMenu.display = false;
      self.sizeMenu.display = true;
    });

    this.sizeMenu.on('size', this.createBoard.bind(this));
  }

  createMenu() {
    this.mainMenu = new MainMenu();
    this.sizeMenu = new SizeMenu();
    this.sizeMenu.display = false;
    this.addObject(this.mainMenu);
    this.addObject(this.sizeMenu);
  }

  createBoard(e) {
    console.log(e.data.size);
  }

  render() {
    const { ctx } = Config;
    ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  update(time: number = 0) {
    const { ctx } = Config;

    const newTime = parseFloat(time.toFixed(2)) / 1000;
    const delta = parseFloat((newTime - this.lastTime).toFixed(2));
    this.lastTime = newTime;

    ctx.clearRect(0, 0, Config.canvas.width, Config.canvas.height);

    super.update(delta);
    window.requestAnimationFrame(this.update.bind(this));
  }
}
