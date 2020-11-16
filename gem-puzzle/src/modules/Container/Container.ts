import Config from '../Config/Config';
import Events from '../Events/Events';

interface IMovingTo {
  x: number | null,
  y: number | null,
}

type Layer = Container[];

export default abstract class Container extends Events {
  x: number;

  y: number;

  width: number;

  height: number;

  layers: Layer[] = [];

  moveSpeed: number = 50;

  display: boolean = true;

  protected hover: boolean = false;

  protected isMoving: boolean;

  protected movingTo: IMovingTo = {
    x: null,
    y: null,
  };

  protected _zIndex: number = 0;

  protected mouseOver: boolean = false;

  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 0,
    height: number = 0,
  ) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  setHover(state: boolean, e: MouseEvent) {
    if (this.hover && !state) this.emit('mouseout', e);
    if (!this.hover && state) this.emit('mouseover', e);
    this.hover = state;
  }

  set zIndex(newZIndex: number) {
    this.emit('zIndex', { oldZIndex: this._zIndex, newZIndex });
    this._zIndex = newZIndex;
  }

  get zIndex(): number {
    return this._zIndex;
  }

  get children(): Container[] {
    let children = [];

    this.layers.forEach((layer) => {
      children = children.concat(layer);
    });

    return children;
  }

  protected render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  protected preRender(ctx: CanvasRenderingContext2D = Config.ctx) {
    ctx.save();
    const path = new Path2D();
    path.rect(this.x, this.y, this.width, this.height);
    ctx.clip(path);
  }

  protected renderChildren(delta: number = 0, ctx: CanvasRenderingContext2D = Config.ctx) {
    this.children.forEach((container) => {
      container.update(delta, ctx);
    });
  }

  protected postRender(ctx: CanvasRenderingContext2D = Config.ctx) {
    ctx.restore();
  }

  protected dispatchMouseEvent(e) {
    const { children } = this;

    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    let targetChild: Container;

    children.forEach((child) => {
      const left = child.x;
      const right = left + child.width;

      const top = child.y;
      const bottom = top + child.height;

      const inX = (mouseX >= left) && (mouseX <= right);
      const inY = (mouseY >= top) && (mouseY <= bottom);

      if (child.display && inX && inY) targetChild = child;
      else child.onMouseOut(e);
    });

    if (targetChild) targetChild.dispatchMouseEvent(e);
    this.onMouseEvent(e);
  }

  onMouseEvent(e): void {
    if (e.type === 'mousemove') {
      this.setHover(true, e.data);
    }

    this.emit(e.type, e);
  }

  onMouseOut(e) {
    this.setHover(false, e.data);
  }

  protected updateZIndex(e) {
    const { caller } = e;
    const { oldZIndex, newZIndex } = e.data;
    const { layers } = this;

    const layer = layers[oldZIndex];
    const containerIndex = layer.indexOf(caller);

    layer.splice(containerIndex, 1);

    if (!layers[newZIndex]) layers[newZIndex] = [];

    layers[newZIndex].push(caller);
  }

  update(delta: number = 0, ctx: CanvasRenderingContext2D = Config.ctx) {
    this.animatePosition(delta);

    if (!this.display) return;

    this.preRender(ctx);
    this.render(ctx);
    this.renderChildren(delta, ctx);
    this.postRender(ctx);
  }

  addObject(gameObject: Container): void {
    const newPosition = {
      x: gameObject.x + this.x,
      y: gameObject.y + this.y,
    };

    gameObject.setPosition(newPosition.x, newPosition.y);

    if (!this.layers[gameObject.zIndex]) this.layers[gameObject.zIndex] = [];

    this.layers[gameObject.zIndex].push(gameObject);

    gameObject.on('zindex', this.updateZIndex.bind(this));
  }

  removeObject(child: Container) {
    const layer = this.layers[child.zIndex];
    const objectIndex = layer.indexOf(child);
    this.layers[child.zIndex].splice(objectIndex, 1);
  }

  removeAllObjects() {
    this.layers = [];
  }

  setPosition(x: number, y: number) {
    const offset = {
      x: x - this.x,
      y: y - this.y,
    };

    this.x = x;
    this.y = y;

    this.children.forEach((child) => {
      child.setPosition(child.x + offset.x, child.y + offset.y);
    });
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  protected animatePosition(delta: number) {
    const { moveSpeed } = this;
    function getNextStep(from: number, to: number) {
      const length = Math.abs(to - from);
      const direction = Math.sign(to - from);

      const nextStep = ((moveSpeed * delta) > length)
        ? to
        : from + (moveSpeed * direction * delta);

      return nextStep;
    }

    if (!this.isMoving) return;
    const newX = getNextStep(this.x, this.movingTo.x);
    const newY = getNextStep(this.y, this.movingTo.y);

    this.setPosition(newX, newY);

    if (this.x === this.movingTo.x && this.y === this.movingTo.y) {
      this.isMoving = false;
      this.emit('endmove');
    }
  }

  moveTo(x: number, y: number) {
    this.isMoving = true;
    this.movingTo.x = x;
    this.movingTo.y = y;
  }
}
