interface IConfig {
  ctx: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
  DOMElement: HTMLElement | null;
}

const Config: IConfig = {
  ctx: null,
  canvas: null,
  DOMElement: null,
};

export default Config;
