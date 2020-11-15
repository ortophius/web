import Config from '../Config/Config';
import Container from '../Container/Container';
import Text from '../Text/Text';

export default class Chip extends Container {
  backgroundColor: string;

  moveSpeed = 400;

  protected label: Text | null = null;

  private dragged: boolean = false;

  private savedPosition = {
    x: 0,
    y: 0,
  };

  private mouseOffset = {
    x: 0,
    y: 0,
  };

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);

    this.savedPosition.x = x;
    this.savedPosition.y = y;

    this.backgroundColor = `rgb( 255, 125, ${Math.round(Math.random() * 255)} )`;

    this.setupListeners();
  }

  private setupListeners() {
    const { canvas } = Config;

    this.on('mouseover', () => {
      canvas.style.cursor = 'pointer';
    });

    this.on('mouseout', this.onMouseOut.bind(this));

    this.on('mousedown', this.onMouseDown.bind(this));

    this.on('mouseup', this.onMouseUp.bind(this));
  }

  private onMouseOut() {
    this.dragged = false;

    Config.canvas.style.cursor = 'default';

    this.onMouseUp();
  }

  private onMouseDown(e) {
    const mouseEvent: MouseEvent = e.data;

    this.mouseOffset.x = mouseEvent.offsetX - this.x;
    this.mouseOffset.y = mouseEvent.offsetY - this.y;

    this.dragged = true;

    this.savedPosition.x = this.x;
    this.savedPosition.y = this.y;
  }

  protected processMouseEvent(e): void {
    super.processMouseEvent(e);
    if (e.data.type === 'mouseout') this.onMouseOut();
    if (e.data.type !== 'mousemove' || !this.dragged) return;

    const mouseEvent: MouseEvent = e.data;

    const x = mouseEvent.offsetX - this.mouseOffset.x;
    const y = mouseEvent.offsetY - this.mouseOffset.y;

    this.setPosition(x, y);
  }

  private onMouseUp() {
    this.dragged = false;

    const { x, y } = this.savedPosition;

    this.moveTo(x, y);
  }

  protected animatePosition(delta: number) {
    if (this.dragged) return;
    super.animatePosition(delta);
  }

  setNumber(num: number) {
    if (this.label) this.removeObject(this.label);

    const labelText = num.toString();
    const labelSize = this.height - 10;
    const label = new Text(labelText, labelSize, '"Arial", sans-serif');

    const labelX = (this.width - label.width) / 2;
    const labelY = (this.height - label.height) / 2;

    label.x = labelX;
    label.y = labelY;

    this.label = label;
    this.addObject(label);
  }

  render(ctx: CanvasRenderingContext2D = Config.ctx) {
    ctx.save();
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }
}
