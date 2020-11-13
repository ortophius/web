import Config from '../Config/Config';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

export default class MainMenu extends Menu {
  private _active: boolean = true;

  moveSpeed = 2000;

  constructor() {
    super();
    this.addItems();
  }

  set active(state) {
    this._active = state;

    if (this._active) this.displayMenu();
    else this.hideMenu();
  }

  protected hideMenu() {
    this.moveTo((this.width * -1), this.y);
  }

  protected displayMenu() {
    const newX = (Config.canvas.width - this.width) / 2;
    this.moveTo(newX, this.y);
  }

  private addItems() {
    const newGame: MenuItem = new MenuItem('Новая игра');
    const sounds: MenuItem = new MenuItem('Звук');
    const closeMenu: MenuItem = new MenuItem('Закрыть меню');

    newGame.on('click', this.newGame.bind(this));

    sounds.on('click', () => {
      sounds.active = !sounds.active;
    });
    closeMenu.on('click', this.closeMenu.bind(this));

    this.addObject(newGame);
    this.addObject(sounds);
    this.addObject(closeMenu);
  }

  closeMenu() {
    this.active = false;
  }

  newGame() {
    this.emit('newgame');
  }
}
