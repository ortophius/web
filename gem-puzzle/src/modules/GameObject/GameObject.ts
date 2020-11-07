export default interface GameObject {
  x: number;

  y: number;

  width: number;

  height: number;

  draw(delta: number)
}
