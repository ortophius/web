import Config from '../Config/Config';
import Container from '../Container/Container';
import Text from '../Text/Text';
import { Utils } from '../Utils/Utils';

export default class Chip extends Container {
  backgroundColor: string;

  moveSpeed = 400;

  label: Text | null = null;

  movableTo = {
    x: 0,
    y: 0,
  };

  private dragged: boolean = false;

  savedPosition = {
    x: 0,
    y: 0,
  };

  private mouseOffset = {
    x: 0,
    y: 0,
  };

  private lastMouseDown: number;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);

    this.savedPosition.x = x;
    this.savedPosition.y = y;

    this.backgroundColor = `rgb( 255, 125, ${Math.round(Math.random() * 255)} )`;

    this.setupListeners();

    this.movableTo.x = this.x;
    this.movableTo.y = this.y;
  }

  private setupListeners() {
    const { canvas } = Config;

    this.on('mouseover', () => {
      canvas.style.cursor = 'pointer';
    });

    this.on('mouseout', this.processMouseOut.bind(this));

    this.on('mousedown', this.processMouseDown.bind(this));

    this.on('mouseup', this.processMouseUp.bind(this));
  }

  processMouseOut(e) {
    if (!this.dragged) return;

    this.dragged = false;

    Config.canvas.style.cursor = 'default';

    this.processMouseUp(e);

    const { x, y } = this.savedPosition;

    this.moveTo(x, y);
  }

  private processMouseDown(e) {
    if (this.isMoving) return;

    const mouseEvent: MouseEvent = e.data;

    this.mouseOffset.x = mouseEvent.offsetX - this.x;
    this.mouseOffset.y = mouseEvent.offsetY - this.y;

    this.dragged = true;

    if (this.isMoving) return;

    this.savedPosition.x = this.x;
    this.savedPosition.y = this.y;

    this.lastMouseDown = mouseEvent.timeStamp;
  }

  protected dispatchMouseEvent(e): void {
    if (e.type === 'mousemove' && this.dragged) {
      const mouseEvent: MouseEvent = e;

      let newX = mouseEvent.offsetX - this.mouseOffset.x;
      let newY = mouseEvent.offsetY - this.mouseOffset.y;

      const movableX = Utils.isBetween(newX, this.movableTo.x, this.savedPosition.x);
      const movableY = Utils.isBetween(newY, this.movableTo.y, this.savedPosition.y);

      if (!movableX) newX = this.x;
      if (!movableY) newY = this.y;

      this.setPosition(newX, newY);
      this.lastMouseDown = -999;
    }

    super.dispatchMouseEvent(e);
  }

  private processMouseUp(e) {
    if (this.dragged) {
      this.dragged = false;

      const { x, y } = this.savedPosition;
      const lenX = Math.abs(x - this.x);
      const lenY = Math.abs(y - this.y);

      if ((lenX > (this.width * 0.35)) || (lenY > (this.height * 0.35))) this.emit('move');
      else this.moveTo(x, y);
    }

    const duration = e.data.timeStamp - this.lastMouseDown;

    const lockedX = this.movableTo.x === this.x;
    const lockedY = this.movableTo.y === this.y;

    if (lockedX && lockedY) return;

    if (duration < 500) this.emit('move');
  }

  protected animatePosition(delta: number) {
    if (this.dragged) return;
    super.animatePosition(delta);
  }

  moveTo(x: number, y: number) {
    super.moveTo(x, y);

    this.dragged = false;
  }

  setNumber(num: number) {
    if (this.label) this.removeObject(this.label);

    const labelText = num.toString();
    const labelSize = this.height - 10;
    const label = new Text(labelText, labelSize, '"Arial", sans-serif');

    label.color = '#000000c2';

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
