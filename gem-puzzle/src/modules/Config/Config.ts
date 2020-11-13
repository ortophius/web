import MouseEventDispatcher from '../MouseEventDispatcher/MouseEventDispatcher';

interface IConfig {
  ctx: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
  DOMElement: HTMLElement | null;
  MouseEvents: MouseEventDispatcher | null;
}

const Config: IConfig = {
  ctx: null,
  canvas: null,
  DOMElement: null,
  MouseEvents: null,
};

export default Config;
