import Config from '../Config/Config';
import Container from '../Container/Container';
import Text from '../Text/Text';

export default class Chip extends Container {
  backgroundColor: string;

  protected labelId: number | null = null;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);
    this.backgroundColor = `rgb( 255, 125, ${Math.round(Math.random() * 255)} )`;
  }

  setNumber(num: number) {
    if (this.labelId) this.removeObject(this.labelId);

    const labelText = num.toString();
    const labelSize = this.height - 10;
    const label = new Text(labelText, labelSize, '"Arial", sans-serif');

    const labelX = (this.width - label.width) / 2;
    const labelY = (this.height - label.height) / 2;

    label.x = labelX;
    label.y = labelY;

    this.labelId = this.addObject(label);
  }

  draw(delta: number = 0, ctx: CanvasRenderingContext2D = Config.ctx) {
    ctx.save();
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    super.draw(delta, ctx);
    ctx.restore();
  }
}
