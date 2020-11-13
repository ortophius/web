import Config from '../Config/Config';
import Text from '../Text/Text';

export default class MenuItem extends Text {
  active: boolean = true;

  hover: boolean = false;

  constructor(text: string, size?: number, x?: number, y?: number) {
    super(text, size, 'Arial', x, y);
    this.setupListeners();
  }

  private setupListeners() {
    this.on('mouseover', this.onMouseOver.bind(this));

    this.on('mouseout', this.onMouseOut.bind(this));
  }

  private onMouseOver() {
    Config.canvas.style.cursor = 'pointer';
    this.hover = true;
  }

  private onMouseOut() {
    this.hover = false;
    Config.canvas.style.cursor = 'default';
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.save();

    const colors = Config.menu.color;
    let color: string;

    if (this.active) {
      if (this.hover) color = colors.hover;
      else color = colors.active;
    } else {
      color = colors.inactive;
    }

    ctx.fillStyle = color;
    ctx.font = `${this.size}px ${this.fontFamily}`;
    ctx.textBaseline = 'top';

    ctx.fillText(this.text, this.x, this.y);

    ctx.restore();
  }
}
