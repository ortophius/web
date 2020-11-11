import Config from '../Config/Config';
import Events from '../Events/Events';

interface IMovingTo {
  x: number | null,
  y: number | null,
}

export default abstract class Container extends Events {
  x: number;

  y: number;

  width: number;

  height: number;

  children: Array<Container>;

  moveSpeed: number = 50;

  protected isMoving: boolean;

  protected movingTo: IMovingTo = {
    x: null,
    y: null,
  };

  protected _zIndex: number = 0;

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
    this.children = [];
  }

  abstract render(ctx: CanvasRenderingContext2D);

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

  update(delta: number = 0, ctx: CanvasRenderingContext2D = Config.ctx) {
    this.animatePosition(delta);
    this.preRender(ctx);
    this.render(ctx);
    this.renderChildren(delta, ctx);
    this.postRender(ctx);
  }

  addObject(gameObject: Container): number {
    const newPosition = {
      x: gameObject.x + this.x,
      y: gameObject.y + this.y,
    };

    gameObject.setPosition(newPosition.x, newPosition.y);

    this.children.push(gameObject);

    const objectId = this.children.length - 1;

    return objectId;
  }

  removeObject(id: number) {
    this.children.splice(id, 1);
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

  animatePosition(delta) {
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

    if (this.x === this.movingTo.x && this.y === this.movingTo.y) this.isMoving = false;
  }

  moveTo(x: number, y: number) {
    this.isMoving = true;
    this.movingTo.x = x;
    this.movingTo.y = y;
  }
}
