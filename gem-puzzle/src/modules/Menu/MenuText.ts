import Config from '../Config/Config';
import Text from '../Text/Text';

export default class MenuText extends Text {
  constructor(text, x: number = 0, y: number = 0) {
    super(text, 26, 'Arial', x, y);
    this.color = Config.menu.color.text;

    console.log(this.color);
  }
}
