import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

export default class MainMenu extends Menu {
  newGame: MenuItem;

  constructor() {
    super();
    this.addItems();
  }

  private addItems() {
    const newGame: MenuItem = new MenuItem('Новая игра');
    newGame.on('click', () => { console.log('nice'); });
    this.addObject(newGame);
  }
}
