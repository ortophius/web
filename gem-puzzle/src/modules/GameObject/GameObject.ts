export default interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;

  draw(ctx?: CanvasRenderingContext2D, delta?: number);
  setPosition(x: number, y:number);
  setSize(width: number, height: number);
}
