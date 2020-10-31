const layouts = [
  {
    name: 'en',
    normal: [
      ['1', '2','3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''],
      [ 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
    ],
    shifted: [
      ['!', '@','#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
      [, , , , , , , , , , '{', '}', '|'],
      [, , , , , , , , , ':', '"'],
      [ , , , , , , , '<', '>', '?']
    ],
  },
  {
    name: 'ru',
    normal: [
      ['1', '2','3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
      ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
      ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
      ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.']
    ],
    shifted: [
      ['!', '"','№', ';', '%', ':', '?', '*', '(', ')', '_', '+'],
      [, , , , , , , , , , , , '/'],
      [, , , , , , , , , , , ],
      [ , , , , , , , , , ',']
    ],
  }
]

const commandIcons = {
  backspace: '&#9003;',
  enter: '&#9166;',
  shift: '&#8679;',
  space: '&#9251;',
}

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
 * @property {Array} chars current character table 
 */
class Layout {
  constructor() {
    this.layouts = {};
    this.events = new Events();
    this.load(layouts);
    this.setLayout('en');
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
   * Set new layout
   * @param {string} layoutName
   */
  setLayout(layoutName) {
    if (!this.layouts[layoutName]) return false;
    this.currentLayout = layoutName;
    this.chars = this.layouts[layoutName].normal;
    this.events.emit('changeLayout');
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
    this.events.emit('changeLayout');
  }

  /**
   * Get specified character from current layout
   * @param {number} lineIndex Keyboard line index, starts from 0
   * @param {number} charIndex Character index inside line, starts from 0
   */
  getChar(lineIndex, charIndex) {
    const char = this.chars[lineIndex][charIndex];
    if (!char) return false;
    return (char);
  }

  /**
   * Subscribe to an event
   * @param {string} eventName An Layout event name
   * @param {function} callback Callback function
   */
  on(eventName, cb) {
    this.events.on(eventName, cb);
  }
}

/**
 * Class representing a keyboard button
 */
class Button {
  constructor() {
    this.domNode = document.createElement('button');
  }

  /**
   * @type {string} key label
   */
  set label(value) {
    this.domNode.innerHTML = String(value);
  }

  get label() {
    return String(this.domNode.innerHTML);
  }

  /**
   * Set callback function
   * @param {function} callback Callback function
   */
  set onclick(callback) {
    this.callback = callback;
    this.domNode.addEventListener('click', this.click.bind(this));
  }

  /**
   * @private
   */
  click() {
    this.callback(this);
  }

  /**
   * Insert a DOM representation of button into 
   * a DOM element 
   * @param {DomNode} node 
   */
  insert(node) {
    node.appendChild(this.domNode);
  }
}

/**
 * A character button
 * @param {Layout} layout Layout object
 * @param {number} lineIndex Line index inside layout table
 * @param {number} charIndex Character index in line of layout table
 */
class CharButton extends Button {
  constructor(layout, lineIndex, charIndex) {
    super();
    this.layout = layout;
    this.lineIndex = lineIndex;
    this.charIndex = charIndex;
    this.layout.on('changeLayout', this.update, this);
    this.update();
  }

  /**
   * @private
   */
  update() {
    this.label = this.layout.getChar(this.lineIndex, this.charIndex);
  }
}

/**
 * Class representing a keyboard.
 * A layer between GUI and businness-logic
 * @param {DomNode} input an DOM input element
 */
class Keyboard {
  constructor(input) {
    this.input = input;
    this.active = true;
    this.domNode = document.createElement('div');
    this.lines = [];
    this.domNode.classList.add('keyboard');
    this.domNode.classList.add('keyboard_active');
    this.layout = new Layout();
    this.setupButtons();
    document.body.appendChild(this.domNode);
  }

  setupButtons() {
    const _ = this;
    const charTable = this.layout.chars;

    this.layout.chars.forEach((line, lineIndex) => {
      const buttonsLine = document.createElement('div');
      buttonsLine.classList.add('keyboard__line');

      _.lines.push(buttonsLine);
      _.domNode.appendChild(buttonsLine);

      line.forEach((char, charIndex) => {
        const button = new CharButton(_.layout, lineIndex, charIndex);
        button.insert(_.lines[lineIndex]);
      });
    })
  }
}

const kBoard = new Keyboard(document.getElementById('text'));
