type Subs = Array<Function>;

export default abstract class Events {
  events: Array<Subs> = [];

  on(eventType: string, callback: Function) {
    if (this.events[eventType] === undefined) this.events[eventType] = [];
    this.events[eventType].push(callback);
    console.log(this.events);
  }

  emit(eventType: string, data: object = {}) {
    const eventObject = {
      eventType,
      caller: this,
      data,
    };
    console.log(this.events);
    const subs: Subs = this.events[eventType];

    subs.forEach((callback) => { callback(eventObject); });
  }
}
