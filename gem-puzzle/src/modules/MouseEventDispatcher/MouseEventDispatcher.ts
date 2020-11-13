/* eslint-disable no-param-reassign */
import Events from '../Events/Events';

export default class MouseEventDispatcher extends Events {
  constructor(canvas: HTMLCanvasElement) {
    super();
    canvas.addEventListener('click', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mousedown', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mouseup', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mouseover', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mouseout', this.dispatchMouseEvent.bind(this));
    canvas.addEventListener('mousemove', this.dispatchMouseEvent.bind(this));
  }

  private dispatchMouseEvent(e) {
    this.emit('mouseEvent', e);
  }
}
