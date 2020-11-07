type Subs = Array<Function>;

export default class Events {
  private events: Array<Subs>;

  private eventObject: {
    type: string,
    caller: Events,
    data: object
  };

  on(eventName: string, callback: Function) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  }

  emit(eventName: string, data?: object) {
    const eventObject = { ...this.eventObject };
    eventObject.data = data;

    const subs: Subs = this.events[eventName];

    subs.forEach((callback) => { callback(eventObject); });
  }
}
