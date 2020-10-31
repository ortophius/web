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

const printCodes = [
  ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'],
  ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote'],
  ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'Comma', 'Period', 'Slash'],
]

const commandCodes = {
  shift: 'ShiftLeft ShiftRight',
  left: 'ArrowLeft',
  right: 'ArrowRIght',
}

const commandIcons = {
  backspace: '&#9003;',
  enter: '&#9166;',
  shift: '&#8679;',
  space: '&#9251;',
  left: '&#9664;',
  right: '&#9654;',
  speech: '&#127897;',
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
   * @returns {Function} Link to a function used as a callback for deleting the listener.
   */
  on(eventName, callback) {
    if (!this.subs[eventName]) this.subs[eventName] = [];
    const cb = callback;
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

    this.shifted = false;
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
    this.shifted = false;
    this.events.emit('changeLayout');
  }

  nextLayout() {
    const current = this.currentLayout;
    const layoutNames = Object.keys(this.layouts);
    const newLayout = layoutNames[(layoutNames.indexOf(current) + 1) % layoutNames.length];
    this.setLayout(newLayout);
  }

  /**
   * Change layout view when pushing shift button
   */
  shift() {
    const _ = this;
    this.shifted = !this.shifted;
    if (this.shifted) {
      const currentLayout = this.layouts[this.currentLayout];
      this.chars = currentLayout.shifted.map((keysLine, lineIndex) => {
        return [... keysLine].map((char, charIndex) => {
          if (!char) return  currentLayout.normal[lineIndex][charIndex].toUpperCase();
          else return char;
        });
      });
    }
    else this.setLayout(this.currentLayout);
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
 * @prop {string} name Button name
 */
class Button {
  constructor(name) {
    this.domNode = document.createElement('button');
    this.domNode.classList.add('button');
    const active = false;
    this.name = name;
  }

  /**
   * @type {string} key name
   */
  set name(name) {
    this.domNode.dataset.name = name;
  }

  get name() {
    return this.domNode.dataset.name;    
  }

  /**
   * @type {string} key code
   */
  set code(code) {
    this.domNode.dataset.code = code;
  }

  get code() {
    return this.domNode.dataset.code;
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
   * @param {number} [n] if passed, element will be inserted
   * before n'th element
   */
  insert(node, n) {
    if (n === undefined) node.appendChild(this.domNode);
    else node.children[n].before(this.domNode);
  }

  /**
   * Change button states beetwen active and inactive
   * @returns {Button} this button
   */
  toggle() {
    this.active = !this.active;
    if (this.active) this.domNode.classList.add('button__active');
    else this.domNode.classList.remove('button_active');
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
    super('char');
    this.layout = layout;
    this.lineIndex = lineIndex;
    this.charIndex = charIndex;
    this.layout.on('changeLayout', this.update.bind(this));
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
    this.speechBlackout = document.createElement('div');
    this.lines = [];
    this.speechBlackout.classList.add('speech');
    this.domNode.classList.add('keyboard');
    this.domNode.classList.add('keyboard_active');
    this.layout = new Layout();
    this.setupButtons();
    document.body.appendChild(this.speechBlackout);
    document.body.appendChild(this.domNode);
  }

  /**
   * @private
   */
  setupButtons() {
    const _ = this;
    const charTable = this.layout.chars;

    this.layout.chars.forEach((line, lineIndex) => {
      this.addLine();
      const buttonsLine = document.createElement('div');
      buttonsLine.classList.add('keyboard__line');

      _.lines.push(buttonsLine);
      _.domNode.appendChild(buttonsLine);

      line.forEach((char, charIndex) => {
        const button = new CharButton(_.layout, lineIndex, charIndex);
        button.onclick = _.type.bind(this);
        button.insert(_.lines[lineIndex]);
      });
    });

    this.addLine();

    const enter = this.createFuncButton('enter'),
      shift = this.createFuncButton('shift'),
      backspace = this.createFuncButton('backspace'),
      space = this.createFuncButton('space'),
      left = this.createFuncButton('left'),
      right = this.createFuncButton('right'),
      speech = this.createFuncButton('speech'),
      layout = this.createFuncButton('layout');

    layout.label = this.layout.currentLayout;

    backspace.insert(this.lines[0]);
    enter.insert(this.lines[2]);
    shift.insert(this.lines[3], 0);
    space.insert(this.lines[4]);
    left.insert(this.lines[3]);
    right.insert(this.lines[3]);
    layout.insert(this.lines[4], 0);
    speech.insert(this.lines[4]);

  }

  /**
   * Create functional button
   * @param {string} name Button name
   * @returns {Button} Button object
   */
  createFuncButton(name) {
    const button = new Button(name);
    button.label = commandIcons[name] || name;
    button.code = commandCodes[name] || name[0].toUpperCase() + name.slice(1);
    button.onclick = this.command.bind(this);
    return button;
  }

  /**
   * @private
   */
  addLine() {
    const buttonsLine = document.createElement('div');
    buttonsLine.classList.add('keyboard__line');

    this.lines.push(buttonsLine);
    this.domNode.appendChild(buttonsLine);
  }

  /**
   * Type button label into input
   * @private
   * @param {Button} button 
   */
  type(button) {
    this.addChar(button.label);
  }

  /**
   * Add string into input at current caret position
   * @param {string} char 
   */
  addChar(char) {
    const start = this.input.selectionStart;
    const text = this.input.value;
    this.input.value = text.slice(0, start) + char + text.slice(start);
    this.input.focus();
    this.input.selectionStart = start + 1;
    this.input.selectionEnd = this.input.selectionStart;
  }

  /**
   * Delete one symbol on the left side of
   * current caret position
   */
  deleteToLeft() {
    const start = this.input.selectionStart;
    const text = this.input.value;

    if (start === 0) return;

    this.input.value = text.slice(0, (start - 1)) + text.slice((start + 1));
    this.input.focus();
    this.input.selectionStart = start - 1;
    this.input.selectionEnd = this.input.selectionStart;
  }

  /**
   * Process command button click
   * @param {Button} button 
   */
  command(button) {
    const name = button.name;

    if (name === 'space') this.addChar(' ');
    else if (name === 'enter') this.addChar('\r\n');
    else if (name === 'backspace') this.deleteToLeft();
    else if (name === 'layout') {
      this.layout.nextLayout();
      button.label = this.layout.currentLayout;
    }
    else if (name === 'shift') {
      button.toggle();
      this.layout.shift();
    }
    else if (name === 'speech') {
      this.textFromSpeech();
    }
  }
}

const kBoard = new Keyboard(document.getElementById('text'));
