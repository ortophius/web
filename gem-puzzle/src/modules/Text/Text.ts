import Config from '../Config/Config';
import Container from '../Container/Container';

export default class Text extends Container {
  color: string = 'rgba(0, 0, 0, 1)';

  maxWidth: number | 'auto' = 'auto';

  metricsWidth: number;

  text: string;

  size: number;

  fontFamily: string;

  constructor(
    text: string = '',
    size: number = 24,
    fontFamily: string = '"Arial", sans-serif',
    x: number = 0,
    y:number = 0,
  ) {
    super(x, y, 0, 0);
    this.text = text;
    this.size = size;
    this.fontFamily = fontFamily;
  }

  get width(): number {
    if (this.maxWidth !== 'auto') return this.maxWidth;

    const { ctx } = Config;

    ctx.font = `${this.size}px ${this.fontFamily}`;
    const metrics: TextMetrics = Config.ctx.measureText(this.text);

    this.metricsWidth = metrics.width;

    return this.metricsWidth;
  }

  set width(width: number | 'auto') {
    this.maxWidth = width;
  }

  get height(): number {
    return this.size;
  }

  set height(height: number) {
    this.size = height / 1;
  }

  draw(delta: number = 0, ctx: CanvasRenderingContext2D = Config.ctx) {
    ctx.save();
    ctx.font = `${this.size}px ${this.fontFamily}`;
    ctx.fillStyle = this.color;
    ctx.textBaseline = 'top';

    if (this.maxWidth === 'auto') {
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillText(this.text, this.x, this.y, this.maxWidth);
    }

    super.draw(delta);
    ctx.restore();
  }
}
