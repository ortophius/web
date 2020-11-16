import Config from '../Config/Config';
import Container from '../Container/Container';

export default class Img extends Container {
  private image: HTMLImageElement;

  constructor(private src: string, x: number, y: number, width: number, height: number) {
    super(x, y, width, height);
    this.image = new Image(width, height);
    this.image.src = this.src;
  }

  render(ctx = Config.ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
