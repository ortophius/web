const layouts = [
  {
    name: 'en',
    normal: [
      ['1', '2','3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', ],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',],
      ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',],
      ['space']
    ],
    shifted: [
      ['!', '@','#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace', ],
      [, , , , , , , , , , '{', '}', '|',],
      [, , , , , , , , , ':', '"', 'enter',],
      ['shift', , , , , , , , '<', '>', '?',],
      ['space']
    ],
  },
  {
    name: 'ru',
    normal: [
      ['1', '2','3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', ],
      ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',],
      ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',],
      ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',],
      ['space']
    ],
    shifted: [
      ['!', '"','№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace', ],
      [, , , , , , , , , , , , '/',],
      [, , , , , , , , , , , 'enter',],
      ['shift', , , , , , , , , , ',',],
      ['space']
    ],
  }
]

/**
 * Class representing a Publisher pattern
 */
class Events {
  constructor() {
    this.subs = {};
  }

  /**
   * Setup an event listener
   * @param {String} eventName Event name
   * @param {Function} callback Function callback
   * @param {*} thisArg callback context
   * @returns {Function} Link to a function used as a callback for deleting the listener.
   */
  on(eventName, callback, thisArg = null) {
    if (!this.subs[eventName]) this.subs[eventName] = [];
    const cb = callback.bind(thisArg);
    this.subs[eventName].push(cb);
    return cb;
  }

  emit(eventName, param) {
    const listeners = this.subs[eventName];
    if (!listeners) return false;

    listeners.forEach(callback => { callback(param) });
  }
}

/**
 * @class Layouts
 * Stores layout configurations
 */
class Layout {
  constructor() {
    this.layouts = {};
    this.load(layouts);
    this.setLayout('en');
    this.events = new Events();
  }

  /**
   * @private
   * @param {object} layouts 
   */
  load(layouts) {
    const _ = this;
    layouts.forEach((layout) => {
      this.layouts[layout.name] = layout;
    });
  }

  /**
   * Get layout by name
   * @param {*} layoutName
   * @returns {layout}
   */
  setLayout(layoutName) {
    if (!this.layouts[layoutName]) return false;

    this.currentLayout = layoutName;
    this.chars = layoutName.normal;
  }

  /**
   * Change layout view when pushing shift button
   */
  shift() {
    const _ = this;
    const currentLayout = this.layouts[this.currentLayout];
    this.chars = currentLayout.shifted.map((keysLine, lineIndex) => {
      return [... keysLine].map((char, charIndex) => {
        if (!char) return  currentLayout.normal[lineIndex][charIndex].toUpperCase();
        else return char;
      });
    });
  }
}

class Keyboard {

}

