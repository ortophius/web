import Config from '../Config/Config';
import Text from '../Text/Text';

export default class MenuItem extends Text {
  active: boolean = true;

  constructor(text: string, size?: number, x?: number, y?: number) {
    super(text, size, 'Arial', x, y);
    this.color = Config.menu.color.active;
    this.setupListeners();
  }

  private setupListeners() {
    this.on('mouseover', this.onMouseOver.bind(this));

    this.on('mouseout', this.onMouseOut.bind(this));
  }

  private onMouseOver() {
    if (this.active) this.color = Config.menu.color.hover;
    Config.canvas.style.cursor = 'pointer';
  }

  private onMouseOut() {
    this.color = (this.active)
      ? Config.menu.color.active
      : Config.menu.color.inactive;

    Config.canvas.style.cursor = 'default';
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.fillStyle = this.color;
    ctx.font = `${this.size}px ${this.fontFamily}`;
    ctx.textBaseline = 'top';

    ctx.fillText(this.text, this.x, this.y);

    ctx.restore();
  }
}
