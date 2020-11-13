import MouseEventDispatcher from '../MouseEventDispatcher/MouseEventDispatcher';

interface IConfig {
  ctx: CanvasRenderingContext2D | null;
  canvas: HTMLCanvasElement | null;
  DOMElement: HTMLElement | null;
  MouseEvents: MouseEventDispatcher | null;
  menu: {
    color: {
      active: string,
      inactive: string,
      hover: string,
    }
  }
}

const Config: IConfig = {
  ctx: null,
  canvas: null,
  DOMElement: null,
  MouseEvents: null,
  menu: {
    color: {
      active: '#f3c56f',
      inactive: '#d4d4d4',
      hover: '#9ef72c',
    },
  },
};

export default Config;
