type Subs = Array<Function>;

export default abstract class Events {
  events: Array<Subs> = [];

  protected emit(eventType: string, data: object = {}) {
    const eventObject = {
      eventType,
      caller: this,
      data,
    };

    if (this.events[eventType] === undefined) return;

    const subs: Subs = this.events[eventType];

    subs.forEach((callback) => { callback(eventObject); });
  }

  on(eventType: string, callback: Function) {
    if (this.events[eventType] === undefined) this.events[eventType] = [];
    this.events[eventType].push(callback);
  }

  off(eventType: string, callback: Function) {
    if (!this.events[eventType]) return;
    const subs = this.events[eventType];
    const subIndex = subs.indexOf(callback);

    if (subIndex === -1) return;

    subs.splice(subIndex, 1);
  }
}
