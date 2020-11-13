import Config from '../Config/Config';
import Container from '../Container/Container';

export default class Text extends Container {
  color: string = 'rgba(0, 0, 0, 1)';

  private _text: string;

  private _size: number;

  private _fontFamily: string;

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

  set text(text: string) {
    this._text = text;
    this.measureText();
  }

  get text(): string {
    return this._text;
  }

  set size(size: number) {
    this._size = size;
    this.measureText();
  }

  get size(): number {
    return this._size;
  }

  set fontFamily(fontFamily: string) {
    this._fontFamily = fontFamily;
    this.measureText();
  }

  get fontFamily(): string {
    return this._fontFamily;
  }

  private measureText(): void {
    const { ctx } = Config;

    ctx.save();

    ctx.font = `${this.size}px ${this.fontFamily}`;

    const metrics: TextMetrics = Config.ctx.measureText(this.text);

    ctx.restore();

    this.width = metrics.width;
    this.height = this.size * 0.85;
  }

  render(ctx: CanvasRenderingContext2D = Config.ctx) {
    ctx.save();

    ctx.font = `${this.size}px ${this.fontFamily}`;
    ctx.fillStyle = this.color;
    ctx.textBaseline = 'top';

    ctx.fillText(this.text, this.x, this.y);

    ctx.restore();
  }
}
