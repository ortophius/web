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
 * @class Layouts
 * Stores layout configurations
 */
class Layouts {
  constructor() {
    this.layouts = {};
    this.load(layouts);
  }

  /**
   * @private
   * @param {object} layouts 
   */
  load(layouts) {
    layouts.forEach(function(layout) {
      this.layouts[layout.name] = layout;
    });
  }

  /**
   * Get layout by name
   * @param {*} layoutName 
   * @returns {layout}
   */
  get(layoutName, shifted) {
    if (!this[layoutName]) return false;
    return (shifted) ? this[layoutName].normal : this[layoutName].shifted;
  }
}
