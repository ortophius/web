/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Game/Game.pug":
/*!***********************************!*\
  !*** ./src/modules/Game/Game.pug ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var req = __webpack_require__(/*! !!./node_modules/pug-loader/index.js!./src/modules/Game/Game.pug */ "./node_modules/pug-loader/index.js!./src/modules/Game/Game.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/modules/Main/Main.pug":
/*!***********************************!*\
  !*** ./src/modules/Main/Main.pug ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var req = __webpack_require__(/*! !!./node_modules/pug-loader/index.js!./src/modules/Main/Main.pug */ "./node_modules/pug-loader/index.js!./src/modules/Main/Main.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/Main/Main.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/Main/Main.scss ***!
  \*****************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#game {\n  border: 1px solid grey;\n}", "",{"version":3,"sources":["webpack://src/modules/Main/Main.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AAMA;EACE,sBAAA;AAHF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n\n}\n\n#game {\n  border: 1px solid grey;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/modules/Game/Game.pug":
/*!**********************************************************************!*\
  !*** ./node_modules/pug-loader/index.js!./src/modules/Game/Game.pug ***!
  \**********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Ccanvas id=\"game\" width=\"840px\" height=\"840px\"\u003E\u003C\u002Fcanvas\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/modules/Main/Main.pug":
/*!**********************************************************************!*\
  !*** ./node_modules/pug-loader/index.js!./src/modules/Main/Main.pug ***!
  \**********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cheader\u003E\u003Ch1\u003EGem-Puzzle\u003C\u002Fh1\u003E\u003C\u002Fheader\u003E\u003Cmain\u003E\u003Cdiv id=\"app\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmain\u003E\u003Cfooter\u003E\u003Ch2\u003EGem-Puzzle\u003C\u002Fh2\u003E\u003C\u002Ffooter\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! default exports */
/*! export attr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export attrs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export classes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export escape [provided] [no usage info] [missing usage info prevents renaming] */
/*! export merge [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rethrow [provided] [no usage info] [missing usage info prevents renaming] */
/*! export style [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
}

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '',
    className,
    padding = '',
    escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '',
    padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
}

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (
    val === false ||
    val == null ||
    (!val && (key === 'class' || key === 'style'))
  ) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if (
    (type === 'object' || type === 'function') &&
    typeof val.toJSON === 'function'
  ) {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + "='" + val.replace(/'/g, '&#39;') + "'";
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse) {
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
}

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html) {
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        escape = '&quot;';
        break;
      case 38:
        escape = '&amp;';
        break;
      case 60:
        escape = '&lt;';
        break;
      case 62:
        escape = '&gt;';
        break;
      default:
        continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
}

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(/*! fs */ "?65c5").readFileSync(filename, 'utf8');
  } catch (ex) {
    pug_rethrow(err, null, lineno);
  }
  var context = 3,
    lines = str.split('\n'),
    start = Math.max(lineno - context, 0),
    end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines
    .slice(start, end)
    .map(function(line, i) {
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
    })
    .join('\n');

  // Alter exception message
  err.path = filename;
  try {
    err.message =
      (filename || 'Pug') +
      ':' +
      lineno +
      '\n' +
      context +
      '\n\n' +
      err.message;
  } catch (e) {}
  throw err;
}


/***/ }),

/***/ "./src/modules/Board/Board.ts":
/*!************************************!*\
  !*** ./src/modules/Board/Board.ts ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Board
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Chip_Chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chip/Chip */ "./src/modules/Chip/Chip.ts");
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Container/Container */ "./src/modules/Container/Container.ts");
;


class Board extends _Container_Container__WEBPACK_IMPORTED_MODULE_2__.default {
    constructor(size) {
        super(0, 0, _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.canvas.width, _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.canvas.height);
        this.table = [];
        this.waitAnimation = false;
        this.size = size;
        const chipCount = (Math.pow(size, 2)) - 1;
        this.chipSize = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.canvas.width / size;
        const nums = [];
        this.unwaitCallback = this.unwait.bind(this);
        for (let i = 1; i <= chipCount; i += 1) {
            nums.push(i);
        }
        let solvable = false;
        let emptyIndex;
        while (!solvable) {
            for (let c = 0; c < nums.length; c += 1) {
                const newIndex = Math.floor(Math.random() * (nums.length));
                const tempNum = nums[c];
                nums[c] = nums[newIndex];
                nums[newIndex] = tempNum;
            }
            emptyIndex = Math.floor(Math.random() * (nums.length));
            const emptyRow = Math.ceil((emptyIndex + 1) / size);
            let pairCount = emptyRow;
            nums.forEach((firstNum, index) => {
                const subArray = nums.slice(index + 1);
                subArray.forEach((secondNum) => {
                    if (firstNum > secondNum)
                        pairCount += 1;
                });
            });
            if ((pairCount % 2) === 0)
                solvable = true;
        }
        nums.splice(emptyIndex, 0, 0);
        nums.forEach((num, index) => {
            const rowIndex = Math.floor(index / size);
            const { table } = this;
            if (!table[rowIndex])
                table[rowIndex] = [];
            table[rowIndex].push(num);
        });
        const colorRate = 360 / (nums.length - 1);
        this.table.forEach((line, row) => {
            const y = row * this.chipSize;
            line.forEach((num, column) => {
                const color = (num === 0)
                    ? 'rgb(255, 255, 255, 255)'
                    : `hsl(${num * colorRate}, 75%, 65%)`;
                const x = column * this.chipSize;
                const chip = new _Chip_Chip__WEBPACK_IMPORTED_MODULE_1__.default(x, y, this.chipSize, this.chipSize);
                chip.zIndex = (num === 0) ? 0 : 1;
                if (num !== 0) {
                    chip.setNumber(num);
                    chip.on('move', this.processMove.bind(this));
                }
                else
                    this.emptyChip = chip;
                chip.backgroundColor = color;
                this.addObject(chip);
            });
        });
        this.lockChips();
    }
    wait() {
        this.waitAnimation = true;
    }
    unwait(e) {
        this.waitAnimation = false;
        e.caller.off('endmove', this.unwaitCallback);
        this.checkIfWin();
        this.lockChips();
    }
    checkIfWin() {
        const { table } = this;
        const flatTable = [].concat(...table);
        let win = true;
        for (let i = 0; i < (flatTable.length - 1); i += 1) {
            if (flatTable[i] !== (i + 1))
                win = false;
        }
        if (win)
            this.emit('win');
    }
    processMove(e) {
        if (this.waitAnimation)
            return;
        const movingChip = e.caller;
        const num = Number(movingChip.label.text);
        const { table } = this;
        let zeroRow;
        let zeroColumn;
        let numRow;
        let numColumn;
        table.forEach((row, rowNum) => {
            row.forEach((chipNum, colNum) => {
                if (chipNum === 0) {
                    zeroRow = rowNum;
                    zeroColumn = colNum;
                }
                if (chipNum === num) {
                    numRow = rowNum;
                    numColumn = colNum;
                }
            });
        });
        table[zeroRow][zeroColumn] = num;
        table[numRow][numColumn] = 0;
        const { x, y } = this.emptyChip;
        const { chipSize } = this;
        movingChip.moveTo(x, y);
        this.emptyChip.setPosition(numColumn * chipSize, numRow * chipSize);
        this.wait();
        movingChip.on('endmove', this.unwaitCallback);
    }
    changeTable(num) {
        if (num > ((Math.pow(this.size, 2)) - 1) || num === 0)
            return;
        const { table } = this;
        let zeroRow;
        let zeroColumn;
        let numRow;
        let numColumn;
        table.forEach((row, rowNum) => {
            row.forEach((chipNum, colNum) => {
                if (chipNum === 0) {
                    zeroRow = rowNum;
                    zeroColumn = colNum;
                }
                if (chipNum === num) {
                    numRow = rowNum;
                    numColumn = colNum;
                }
            });
        });
        table[zeroRow][zeroColumn] = num;
        table[numRow][numColumn] = 0;
    }
    lockChips() {
        this.children.forEach((object) => {
            const chip = object;
            chip.movableTo.x = chip.x;
            chip.movableTo.y = chip.y;
        });
        this.zeroSurrounding.forEach((object) => {
            const chip = object;
            chip.movableTo.x = this.emptyChip.x;
            chip.movableTo.y = this.emptyChip.y;
        });
    }
    get zeroSurrounding() {
        const { table } = this;
        let row;
        let column;
        for (let i = 0; i < table.length; i += 1) {
            const index = table[i].indexOf(0);
            if (index !== -1) {
                row = i;
                column = index;
            }
        }
        const sides = [
            (table[row + 1]) ? table[row + 1][column] : undefined,
            (table[row - 1]) ? table[row - 1][column] : undefined,
            table[row][column + 1],
            table[row][column - 1],
        ];
        const res = [];
        sides.forEach((sideNum) => {
            if (!sideNum)
                return;
            const chip = this.getChip(sideNum);
            res.push(chip);
        });
        return res;
    }
    getChip(num) {
        const { children } = this;
        let chip = null;
        for (let i = 0; i < children.length; i += 1) {
            const child = children[i];
            if ((child.label) && (num === Number(child.label.text)))
                chip = child;
        }
        return chip;
    }
}


/***/ }),

/***/ "./src/modules/Chip/Chip.ts":
/*!**********************************!*\
  !*** ./src/modules/Chip/Chip.ts ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Chip
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Container/Container */ "./src/modules/Container/Container.ts");
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text/Text */ "./src/modules/Text/Text.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/Utils */ "./src/modules/Utils/Utils.ts");
;



class Chip extends _Container_Container__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.moveSpeed = 400;
        this.label = null;
        this.movableTo = {
            x: 0,
            y: 0,
        };
        this.dragged = false;
        this.savedPosition = {
            x: 0,
            y: 0,
        };
        this.mouseOffset = {
            x: 0,
            y: 0,
        };
        this.savedPosition.x = x;
        this.savedPosition.y = y;
        this.backgroundColor = `rgb( 255, 125, ${Math.round(Math.random() * 255)} )`;
        this.setupListeners();
        this.movableTo.x = this.x;
        this.movableTo.y = this.y;
    }
    setupListeners() {
        const { canvas } = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default;
        this.on('mouseover', () => {
            canvas.style.cursor = 'pointer';
        });
        this.on('mouseout', this.processMouseOut.bind(this));
        this.on('mousedown', this.processMouseDown.bind(this));
        this.on('mouseup', this.processMouseUp.bind(this));
    }
    processMouseOut(e) {
        if (!this.dragged)
            return;
        this.dragged = false;
        _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.canvas.style.cursor = 'default';
        this.processMouseUp(e);
        const { x, y } = this.savedPosition;
        this.moveTo(x, y);
    }
    processMouseDown(e) {
        if (this.isMoving)
            return;
        const mouseEvent = e.data;
        this.mouseOffset.x = mouseEvent.offsetX - this.x;
        this.mouseOffset.y = mouseEvent.offsetY - this.y;
        this.dragged = true;
        if (this.isMoving)
            return;
        this.savedPosition.x = this.x;
        this.savedPosition.y = this.y;
        this.lastMouseDown = mouseEvent.timeStamp;
    }
    dispatchMouseEvent(e) {
        if (e.type === 'mousemove' && this.dragged) {
            const mouseEvent = e;
            let newX = mouseEvent.offsetX - this.mouseOffset.x;
            let newY = mouseEvent.offsetY - this.mouseOffset.y;
            const movableX = _Utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.isBetween(newX, this.movableTo.x, this.savedPosition.x);
            const movableY = _Utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.isBetween(newY, this.movableTo.y, this.savedPosition.y);
            if (!movableX)
                newX = this.x;
            if (!movableY)
                newY = this.y;
            this.setPosition(newX, newY);
            this.lastMouseDown = -999;
        }
        super.dispatchMouseEvent(e);
    }
    processMouseUp(e) {
        if (this.dragged) {
            this.dragged = false;
            const { x, y } = this.savedPosition;
            const lenX = Math.abs(x - this.x);
            const lenY = Math.abs(y - this.y);
            if ((lenX > (this.width * 0.35)) || (lenY > (this.height * 0.35)))
                this.emit('move');
            else
                this.moveTo(x, y);
        }
        const duration = e.data.timeStamp - this.lastMouseDown;
        const lockedX = this.movableTo.x === this.x;
        const lockedY = this.movableTo.y === this.y;
        if (lockedX && lockedY)
            return;
        if (duration < 500)
            this.emit('move');
    }
    animatePosition(delta) {
        if (this.dragged)
            return;
        super.animatePosition(delta);
    }
    moveTo(x, y) {
        super.moveTo(x, y);
        this.dragged = false;
    }
    setNumber(num) {
        if (this.label)
            this.removeObject(this.label);
        const labelText = num.toString();
        const labelSize = this.height - 10;
        const label = new _Text_Text__WEBPACK_IMPORTED_MODULE_2__.default(labelText, labelSize, '"Arial", sans-serif');
        label.color = '#000000c2';
        const labelX = (this.width - label.width) / 2;
        const labelY = (this.height - label.height) / 2;
        label.x = labelX;
        label.y = labelY;
        this.label = label;
        this.addObject(label);
    }
    render(ctx = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.ctx) {
        ctx.save();
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}


/***/ }),

/***/ "./src/modules/Config/Config.ts":
/*!**************************************!*\
  !*** ./src/modules/Config/Config.ts ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const Config = {
    ctx: null,
    canvas: null,
    DOMElement: null,
    menu: {
        color: {
            text: '#ffffff',
            active: '#f3c56f',
            inactive: '#d4d4d4',
            hover: '#9ef72c',
        },
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);


/***/ }),

/***/ "./src/modules/Container/Container.ts":
/*!********************************************!*\
  !*** ./src/modules/Container/Container.ts ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Container
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Events_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Events/Events */ "./src/modules/Events/Events.ts");
;

class Container extends _Events_Events__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        super();
        this.layers = [];
        this.moveSpeed = 50;
        this.display = true;
        this.hover = false;
        this.movingTo = {
            x: null,
            y: null,
        };
        this._zIndex = 0;
        this.mouseOver = false;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setHover(state, e) {
        if (this.hover && !state)
            this.emit('mouseout', e);
        if (!this.hover && state)
            this.emit('mouseover', e);
        this.hover = state;
    }
    set zIndex(newZIndex) {
        this.emit('zIndex', { oldZIndex: this._zIndex, newZIndex });
        this._zIndex = newZIndex;
    }
    get zIndex() {
        return this._zIndex;
    }
    get children() {
        let children = [];
        this.layers.forEach((layer) => {
            children = children.concat(layer);
        });
        return children;
    }
    render(ctx) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    preRender(ctx = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.ctx) {
        ctx.save();
        const path = new Path2D();
        path.rect(this.x, this.y, this.width, this.height);
        ctx.clip(path);
    }
    renderChildren(delta = 0, ctx = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.ctx) {
        this.children.forEach((container) => {
            container.update(delta, ctx);
        });
    }
    postRender(ctx = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.ctx) {
        ctx.restore();
    }
    dispatchMouseEvent(e) {
        const { children } = this;
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        let targetChild;
        children.forEach((child) => {
            const left = child.x;
            const right = left + child.width;
            const top = child.y;
            const bottom = top + child.height;
            const inX = (mouseX >= left) && (mouseX <= right);
            const inY = (mouseY >= top) && (mouseY <= bottom);
            if (child.display && inX && inY)
                targetChild = child;
            else
                child.onMouseOut(e);
        });
        if (targetChild)
            targetChild.dispatchMouseEvent(e);
        this.onMouseEvent(e);
    }
    onMouseEvent(e) {
        if (e.type === 'mousemove') {
            this.setHover(true, e.data);
        }
        this.emit(e.type, e);
    }
    onMouseOut(e) {
        this.setHover(false, e.data);
    }
    updateZIndex(e) {
        const { caller } = e;
        const { oldZIndex, newZIndex } = e.data;
        const { layers } = this;
        const layer = layers[oldZIndex];
        const containerIndex = layer.indexOf(caller);
        layer.splice(containerIndex, 1);
        if (!layers[newZIndex])
            layers[newZIndex] = [];
        layers[newZIndex].push(caller);
    }
    update(delta = 0, ctx = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.ctx) {
        this.animatePosition(delta);
        if (!this.display)
            return;
        this.preRender(ctx);
        this.render(ctx);
        this.renderChildren(delta, ctx);
        this.postRender(ctx);
    }
    addObject(gameObject) {
        const newPosition = {
            x: gameObject.x + this.x,
            y: gameObject.y + this.y,
        };
        gameObject.setPosition(newPosition.x, newPosition.y);
        if (!this.layers[gameObject.zIndex])
            this.layers[gameObject.zIndex] = [];
        this.layers[gameObject.zIndex].push(gameObject);
        gameObject.on('zindex', this.updateZIndex.bind(this));
    }
    removeObject(child) {
        const layer = this.layers[child.zIndex];
        const objectIndex = layer.indexOf(child);
        this.layers[child.zIndex].splice(objectIndex, 1);
    }
    removeAllObjects() {
        this.layers = [];
    }
    setPosition(x, y) {
        const offset = {
            x: x - this.x,
            y: y - this.y,
        };
        this.x = x;
        this.y = y;
        this.children.forEach((child) => {
            child.setPosition(child.x + offset.x, child.y + offset.y);
        });
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
    animatePosition(delta) {
        const { moveSpeed } = this;
        function getNextStep(from, to) {
            const length = Math.abs(to - from);
            const direction = Math.sign(to - from);
            const nextStep = ((moveSpeed * delta) > length)
                ? to
                : from + (moveSpeed * direction * delta);
            return nextStep;
        }
        if (!this.isMoving)
            return;
        const newX = getNextStep(this.x, this.movingTo.x);
        const newY = getNextStep(this.y, this.movingTo.y);
        this.setPosition(newX, newY);
        if (this.x === this.movingTo.x && this.y === this.movingTo.y) {
            this.isMoving = false;
            this.emit('endmove');
        }
    }
    moveTo(x, y) {
        this.isMoving = true;
        this.movingTo.x = x;
        this.movingTo.y = y;
    }
}


/***/ }),

/***/ "./src/modules/Events/Events.ts":
/*!**************************************!*\
  !*** ./src/modules/Events/Events.ts ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Events
/* harmony export */ });
class Events {
    constructor() {
        this.events = [];
    }
    emit(eventType, data = {}) {
        const eventObject = {
            eventType,
            caller: this,
            data,
        };
        if (this.events[eventType] === undefined)
            return;
        const subs = this.events[eventType];
        subs.forEach((callback) => { callback(eventObject); });
    }
    on(eventType, callback) {
        if (this.events[eventType] === undefined)
            this.events[eventType] = [];
        this.events[eventType].push(callback);
    }
    off(eventType, callback) {
        if (!this.events[eventType])
            return;
        const subs = this.events[eventType];
        const subIndex = subs.indexOf(callback);
        if (subIndex === -1)
            return;
        subs.splice(subIndex, 1);
    }
}


/***/ }),

/***/ "./src/modules/Game/Game.ts":
/*!**********************************!*\
  !*** ./src/modules/Game/Game.ts ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Game
/* harmony export */ });
/* harmony import */ var _Board_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Board/Board */ "./src/modules/Board/Board.ts");
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Container/Container */ "./src/modules/Container/Container.ts");
/* harmony import */ var _Img_Img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Img/Img */ "./src/modules/Img/Img.ts");
/* harmony import */ var _MainMenu_MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MainMenu/MainMenu */ "./src/modules/MainMenu/MainMenu.ts");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Menu/Menu */ "./src/modules/Menu/Menu.ts");
/* harmony import */ var _Menu_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Menu/MenuItem */ "./src/modules/Menu/MenuItem.ts");
/* harmony import */ var _Menu_MenuText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Menu/MenuText */ "./src/modules/Menu/MenuText.ts");
/* harmony import */ var _Menu_SizeMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Menu/SizeMenu */ "./src/modules/Menu/SizeMenu.ts");
/* harmony import */ var _Game_pug__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Game.pug */ "./src/modules/Game/Game.pug");
/* harmony import */ var _Game_pug__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Game_pug__WEBPACK_IMPORTED_MODULE_9__);
// import Chip from '../Chip/Chip';
;








// import Menu from '../Menu/Menu';
// import MenuText from '../Menu/MenuText';

// let chip: Chip;
// let menu: Menu;
class Game extends _Container_Container__WEBPACK_IMPORTED_MODULE_2__.default {
    constructor(id) {
        _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default.DOMElement = document.querySelector(id);
        _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default.DOMElement.innerHTML = (_Game_pug__WEBPACK_IMPORTED_MODULE_9___default());
        const canvas = document.querySelector('#game');
        _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default.canvas = canvas;
        _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default.ctx = _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default.canvas.getContext('2d');
        super(0, 0, _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default.canvas.width, _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default.canvas.height);
        this.lastTime = 0;
        canvas.addEventListener('click', this.dispatchMouseEvent.bind(this));
        canvas.addEventListener('mousedown', this.dispatchMouseEvent.bind(this));
        canvas.addEventListener('mouseup', this.dispatchMouseEvent.bind(this));
        canvas.addEventListener('mouseover', this.dispatchMouseEvent.bind(this));
        canvas.addEventListener('mouseout', this.dispatchMouseEvent.bind(this));
        canvas.addEventListener('mousemove', this.dispatchMouseEvent.bind(this));
    }
    start() {
        const self = this;
        this.layers = [];
        this.createMenu();
        this.setupListeners();
        this.toggleMenu = new _Img_Img__WEBPACK_IMPORTED_MODULE_3__.default('./assets/cog-solid.svg', 820, 0, 20, 20);
        this.toggleMenu.on('click', () => {
            self.mainMenu.display = !self.mainMenu.display;
        });
        this.toggleMenu.zIndex = 11;
        this.addObject(this.toggleMenu);
        this.update(0);
    }
    setupListeners() {
        const self = this;
        this.mainMenu.on('newgame', () => {
            self.mainMenu.display = false;
            self.sizeMenu.display = true;
        });
        this.sizeMenu.on('size', this.createBoard.bind(this));
    }
    createMenu() {
        this.mainMenu = new _MainMenu_MainMenu__WEBPACK_IMPORTED_MODULE_4__.default();
        this.sizeMenu = new _Menu_SizeMenu__WEBPACK_IMPORTED_MODULE_8__.default();
        this.mainMenu.zIndex = 9;
        this.sizeMenu.zIndex = 9;
        this.sizeMenu.display = false;
        this.addObject(this.mainMenu);
        this.addObject(this.sizeMenu);
    }
    createBoard(e) {
        if (this.board)
            this.removeObject(this.board);
        this.board = new _Board_Board__WEBPACK_IMPORTED_MODULE_0__.default(e.data.size);
        this.sizeMenu.display = false;
        this.board.on('win', this.win.bind(this));
        this.addObject(this.board);
    }
    win() {
        const self = this;
        const congrat = new _Menu_Menu__WEBPACK_IMPORTED_MODULE_5__.default();
        const again = new _Menu_MenuItem__WEBPACK_IMPORTED_MODULE_6__.default('Заново');
        const text = new _Menu_MenuText__WEBPACK_IMPORTED_MODULE_7__.default('Поздравляем! У вас получилось!');
        congrat.addObject(text);
        congrat.addObject(again);
        congrat.zIndex = 10;
        this.addObject(congrat);
        again.on('click', () => {
            self.removeObject(congrat);
            self.start.bind(self)();
        });
    }
    render() {
        const { ctx } = _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default;
        ctx.clearRect(this.x, this.y, this.width, this.height);
    }
    update(time = 0) {
        const { ctx } = _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default;
        const newTime = parseFloat(time.toFixed(2)) / 1000;
        const delta = parseFloat((newTime - this.lastTime).toFixed(2));
        this.lastTime = newTime;
        ctx.clearRect(0, 0, _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default.canvas.width, _Config_Config__WEBPACK_IMPORTED_MODULE_1__.default.canvas.height);
        super.update(delta);
        window.requestAnimationFrame(this.update.bind(this));
    }
}


/***/ }),

/***/ "./src/modules/Img/Img.ts":
/*!********************************!*\
  !*** ./src/modules/Img/Img.ts ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Img
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Container/Container */ "./src/modules/Container/Container.ts");
;

class Img extends _Container_Container__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(src, x, y, width, height) {
        super(x, y, width, height);
        this.src = src;
        this.image = new Image(width, height);
        this.image.src = this.src;
    }
    render(ctx = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}


/***/ }),

/***/ "./src/modules/Main/Main.ts":
/*!**********************************!*\
  !*** ./src/modules/Main/Main.ts ***!
  \**********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.scss */ "./src/modules/Main/Main.scss");
/* harmony import */ var _Main_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.pug */ "./src/modules/Main/Main.pug");
/* harmony import */ var _Main_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Main_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Game/Game */ "./src/modules/Game/Game.ts");
;


function init() {
    document.body.innerHTML = (_Main_pug__WEBPACK_IMPORTED_MODULE_1___default());
}
window.onload = init();
const game = new _Game_Game__WEBPACK_IMPORTED_MODULE_2__.default('#app');
game.start();


/***/ }),

/***/ "./src/modules/MainMenu/MainMenu.ts":
/*!******************************************!*\
  !*** ./src/modules/MainMenu/MainMenu.ts ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MainMenu
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/Menu */ "./src/modules/Menu/Menu.ts");
/* harmony import */ var _Menu_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Menu/MenuItem */ "./src/modules/Menu/MenuItem.ts");
;


class MainMenu extends _Menu_Menu__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor() {
        super();
        this._active = true;
        this.moveSpeed = 2000;
        this.addItems();
    }
    set active(state) {
        this._active = state;
        if (this._active)
            this.displayMenu();
        else
            this.hideMenu();
    }
    hideMenu() {
        this.moveTo((this.width * -1), this.y);
    }
    displayMenu() {
        const newX = (_Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.canvas.width - this.width) / 2;
        this.moveTo(newX, this.y);
    }
    addItems() {
        const newGame = new _Menu_MenuItem__WEBPACK_IMPORTED_MODULE_2__.default('Новая игра');
        const sounds = new _Menu_MenuItem__WEBPACK_IMPORTED_MODULE_2__.default('Звук');
        const closeMenu = new _Menu_MenuItem__WEBPACK_IMPORTED_MODULE_2__.default('Закрыть меню');
        newGame.on('click', this.newGame.bind(this));
        sounds.on('click', () => {
            sounds.active = !sounds.active;
        });
        closeMenu.on('click', this.closeMenu.bind(this));
        this.addObject(newGame);
        this.addObject(sounds);
        this.addObject(closeMenu);
    }
    closeMenu() {
        this.active = false;
    }
    newGame() {
        this.emit('newgame');
    }
}


/***/ }),

/***/ "./src/modules/Menu/Menu.ts":
/*!**********************************!*\
  !*** ./src/modules/Menu/Menu.ts ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Menu
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Container/Container */ "./src/modules/Container/Container.ts");
;

class Menu extends _Container_Container__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor() {
        super(0, 0, 0, 0);
        this.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        const { canvas } = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default;
        this.height = canvas.height;
        this.width = canvas.width - (canvas.width * 0.32);
        const x = (canvas.width - this.width) / 2;
        const y = 0;
        this.setPosition(x, y);
        this.itemsHeight = 0;
        this.itemsAreaHeight = this.height - (this.height * 0.8);
    }
    addObject(gameObject) {
        super.addObject(gameObject);
        const { y } = gameObject;
        const x = this.x + ((this.width - gameObject.width) / 2);
        gameObject.setPosition(x, y);
        this.itemsHeight += gameObject.height;
        this.centerItems();
    }
    centerItems() {
        const topOffset = (this.height - this.itemsAreaHeight) / 2;
        const gutter = (this.itemsAreaHeight - this.itemsHeight) / (this.children.length + 1);
        let usedHeight = 0;
        this.children.forEach((child) => {
            const gameObject = child;
            gameObject.y = topOffset + usedHeight + gutter;
            usedHeight += gutter + gameObject.height;
        });
    }
    render(ctx = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.ctx) {
        ctx.save();
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}


/***/ }),

/***/ "./src/modules/Menu/MenuItem.ts":
/*!**************************************!*\
  !*** ./src/modules/Menu/MenuItem.ts ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MenuItem
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text/Text */ "./src/modules/Text/Text.ts");
;

class MenuItem extends _Text_Text__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(text, size, x, y) {
        super(text, size, 'Arial', x, y);
        this.active = true;
        this.hover = false;
        this.setupListeners();
    }
    setupListeners() {
        const self = this;
        this.on('mouseover', () => {
            _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.canvas.style.cursor = 'pointer';
            self.hover = true;
        });
        this.on('mouseout', () => {
            self.hover = false;
            _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.canvas.style.cursor = 'default';
        });
    }
    render(ctx) {
        ctx.save();
        const colors = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.menu.color;
        let color;
        if (this.active) {
            if (this.hover)
                color = colors.hover;
            else
                color = colors.active;
        }
        else {
            color = colors.inactive;
        }
        ctx.fillStyle = color;
        ctx.font = `${this.size}px ${this.fontFamily}`;
        ctx.textBaseline = 'top';
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}


/***/ }),

/***/ "./src/modules/Menu/MenuText.ts":
/*!**************************************!*\
  !*** ./src/modules/Menu/MenuText.ts ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ MenuText
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text/Text */ "./src/modules/Text/Text.ts");
;

class MenuText extends _Text_Text__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(text, x = 0, y = 0) {
        super(text, 26, 'Arial', x, y);
        this.color = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.menu.color.text;
        console.log(this.color);
    }
}


/***/ }),

/***/ "./src/modules/Menu/SizeMenu.ts":
/*!**************************************!*\
  !*** ./src/modules/Menu/SizeMenu.ts ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SizeMenu
/* harmony export */ });
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/modules/Menu/Menu.ts");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/modules/Menu/MenuItem.ts");
/* harmony import */ var _MenuText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuText */ "./src/modules/Menu/MenuText.ts");
;


class SizeMenu extends _Menu__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super();
        this.addObject(new _MenuText__WEBPACK_IMPORTED_MODULE_2__.default('Выберите размер поля'));
        for (let i = 4; i <= 8; i += 1) {
            const option = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__.default(`${i}x${i}`);
            option.on('click', this.processChoice.bind(this));
            this.addObject(option);
        }
    }
    processChoice(e) {
        this.emit('size', { size: Number(e.caller.text[0]) });
    }
}


/***/ }),

/***/ "./src/modules/Text/Text.ts":
/*!**********************************!*\
  !*** ./src/modules/Text/Text.ts ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Text
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/modules/Config/Config.ts");
/* harmony import */ var _Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Container/Container */ "./src/modules/Container/Container.ts");
;

class Text extends _Container_Container__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(text = '', size = 24, fontFamily = '"Arial", sans-serif', x = 0, y = 0) {
        super(x, y, 0, 0);
        this.color = 'rgb(0, 0, 0, 1)';
        this.text = text;
        this.size = size;
        this.fontFamily = fontFamily;
    }
    set text(text) {
        this._text = text;
        this.measureText();
    }
    get text() {
        return this._text;
    }
    set size(size) {
        this._size = size;
        this.measureText();
    }
    get size() {
        return this._size;
    }
    set fontFamily(fontFamily) {
        this._fontFamily = fontFamily;
        this.measureText();
    }
    get fontFamily() {
        return this._fontFamily;
    }
    measureText() {
        const { ctx } = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default;
        ctx.save();
        ctx.font = `${this.size}px ${this.fontFamily}`;
        const metrics = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.ctx.measureText(this.text);
        ctx.restore();
        this.width = metrics.width;
        this.height = this.size;
    }
    render(ctx = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.default.ctx) {
        ctx.save();
        ctx.font = `${this.size}px ${this.fontFamily}`;
        ctx.fillStyle = this.color;
        ctx.textBaseline = 'top';
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}


/***/ }),

/***/ "./src/modules/Utils/Utils.ts":
/*!************************************!*\
  !*** ./src/modules/Utils/Utils.ts ***!
  \************************************/
/*! namespace exports */
/*! export Utils [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => /* binding */ Utils
/* harmony export */ });
var Utils;
(function (Utils) {
    function isBetween(num, firstNum, secondNum) {
        const min = Math.min(firstNum, secondNum);
        const max = Math.max(firstNum, secondNum);
        const res = (num >= min) && (num <= max);
        return res;
    }
    Utils.isBetween = isBetween;
})(Utils || (Utils = {}));


/***/ }),

/***/ "./src/modules/Main/Main.scss":
/*!************************************!*\
  !*** ./src/modules/Main/Main.scss ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/modules/Main/Main.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "?65c5":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/modules/Main/Main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=app.js.map