import Config from '../Config/Config';
import Container from '../Container/Container';

export default class Menu extends Container {
  backgroundColor: string = 'rgba(0, 0, 0, 0.8)';

  private itemsAreaHeight: number;

  private itemsHeight: number;

  constructor() {
    super(0, 0, 0, 0);

    const { canvas } = Config;

    this.height = canvas.height;
    this.width = canvas.width - (canvas.width * 0.32);

    const x = (canvas.width - this.width) / 2;
    const y = 0;
    this.setPosition(x, y);

    this.itemsHeight = 0;
    this.itemsAreaHeight = this.height - (this.height * 0.8);
  }

  addObject(gameObject: Container): number {
    const objectId = super.addObject(gameObject);

    const { y } = gameObject;
    const x = this.x + ((this.width - gameObject.width) / 2);

    gameObject.setPosition(x, y);

    this.itemsHeight += gameObject.height;

    this.centerItems();

    return objectId;
  }

  private centerItems() {
    const topOffset: number = (this.height - this.itemsAreaHeight) / 2;
    const gutter: number = (this.itemsAreaHeight - this.itemsHeight) / (this.children.length + 1);

    // this.children.reduce((usedHeight, item) => {
    //   const gameObject: Container = item;
    //   gameObject.y = topOffset + usedHeight + gutter;
    //   return usedHeight + gutter + item.height;
    // });

    let usedHeight = 0;
    this.children.forEach((child) => {
      const gameObject: Container = child;
      gameObject.y = topOffset + usedHeight + gutter;
      usedHeight += gutter + gameObject.height;
    });
  }

  render(ctx: CanvasRenderingContext2D = Config.ctx) {
    ctx.save();

    ctx.fillStyle = this.backgroundColor;

    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.restore();
  }
}
