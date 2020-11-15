import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuText from './MenuText';

export default class SizeMenu extends Menu {
  constructor() {
    super();
    this.addObject(new MenuText('Выберите размер поля'));

    for (let i = 4; i <= 8; i += 1) {
      const option = new MenuItem(`${i}x${i}`);
      option.on('click', this.processChoice.bind(this));
      this.addObject(option);
    }
  }

  private processChoice(e) {
    this.emit('size', { size: Number(e.caller.text[0]) });
  }
}
