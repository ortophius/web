/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/level.pug":
/*!*******************************!*\
  !*** ./src/modules/level.pug ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var req = __webpack_require__(/*! !!./node_modules/pug-loader/index.js??ruleSet[1].rules[2].use[1]!./src/modules/level.pug */ "./node_modules/pug-loader/index.js??ruleSet[1].rules[2].use[1]!./src/modules/level.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Jura:wght@300;400;700&family=Raleway:wght@200;300;400&family=Merriweather&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 10px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: min-content auto;\n  min-height: 100vh;\n  background-color: #181e2b;\n  color: #ffffff;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 300;\n  overflow-x: hidden;\n}\n\npre {\n  display: inline;\n  padding: 0.5em;\n  margin-bottom: 1rem;\n  font-family: \"Cutive Mono\", monospace;\n  font-weight: 600;\n  background-color: #181d27;\n  color: #fff;\n}\n\nheader {\n  display: flex;\n  justify-content: flex-start;\n  padding: 1rem 2rem;\n  background-color: #242b3a;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.85);\n  z-index: 3;\n}\n\n.logo {\n  font-family: \"Merriweather\", serif;\n  font-size: 3.2rem;\n  color: #cca449;\n  text-shadow: 2px 3px 1px #171717;\n}\n.logo__highlight {\n  color: #ffd5a8;\n}\n\nmain {\n  display: grid;\n  grid-template-areas: \"cafe cafe side\" \"editor editor side\";\n  grid-template-columns: 2fr 2fr 1fr;\n  grid-template-rows: 1fr 1.5fr;\n}\n\n.cafe {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  grid-area: cafe;\n  z-index: 2;\n}\n.cafe__goal {\n  font-weight: 600;\n  font-size: 3.2rem;\n  color: #ffffff7a;\n  letter-spacing: 0.2rem;\n  margin-bottom: 4rem;\n}\n\n.sidebar {\n  grid-area: side;\n  padding: 2rem;\n  text-align: justify;\n  line-height: 3rem;\n  font-size: 1.6rem;\n  color: #dcdcdc;\n  z-index: 2;\n  background-color: #212631;\n  border-left: 1px solid #2e354487;\n}\n.sidebar__title {\n  color: #fff;\n  font-size: 2.4rem;\n  text-align: center;\n  font-family: \"Jura\", sans-serif;\n}\n.sidebar__subtitle {\n  color: #e0e0e0;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.sidebar__description {\n  font-size: 1.4rem;\n}\n.sidebar__selector {\n  display: block;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.sidebar hr {\n  height: 1px;\n  border: none;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  background-color: #ffffff3b;\n}\n\n.table-space-3d {\n  perspective: 300px;\n}\n\n.table {\n  min-height: 14rem;\n  min-width: 30rem;\n  background-color: #c1873e;\n  transform-style: preserve-3d;\n  transform: rotateX(30deg);\n  transform-origin: bottom;\n  box-shadow: 0px 35px 4px 0px #161b27;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: min-content;\n  grid-template-rows: min-content;\n  justify-items: center;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  column-gap: 2rem;\n  padding: 1rem;\n  padding-bottom: calc(2rem + 4px);\n}\n.table__border {\n  position: relative;\n  min-height: 0.5rem;\n  transform: rotateX(-30deg);\n  transform-origin: top;\n  background-color: #5f3f19;\n}\n.table__legs {\n  position: absolute;\n  top: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 1rem;\n}\n.table__leg {\n  background-color: #462d10;\n  min-height: 1rem;\n  min-width: 2rem;\n}\n\nsushi, plate, sushimi, bento, pickle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  box-shadow: 0px 5px #0000001f;\n  cursor: pointer;\n}\nsushi *, plate *, sushimi *, bento *, pickle * {\n  position: absolute;\n}\nsushi *:nth-child(2), plate *:nth-child(2), sushimi *:nth-child(2), bento *:nth-child(2), pickle *:nth-child(2) {\n  bottom: 3rem;\n}\nsushi *:nth-child(3), plate *:nth-child(3), sushimi *:nth-child(3), bento *:nth-child(3), pickle *:nth-child(3) {\n  bottom: 5rem;\n}\nsushi[data-active=true], plate[data-active=true], sushimi[data-active=true], bento[data-active=true], pickle[data-active=true] {\n  box-shadow: 0 0 0px 5px #ffffff5c;\n}\nsushi.remove, plate.remove, sushimi.remove, bento.remove, pickle.remove {\n  animation: 0.2s ease-in 1 disappear;\n}\nsushi.appear, plate.appear, sushimi.appear, bento.appear, pickle.appear {\n  animation: 0.2s ease-in 1 appear;\n}\n\nplate .active {\n  box-shadow: 0 0 0px 5px #0000004d;\n}\n\nplate.blue {\n  background-color: #4369d3;\n  border-color: #2b4794;\n}\nplate.blue::before {\n  background-color: #5a82f1;\n}\n\nsushi {\n  border-top: 1px solid #717171;\n  border-radius: 50%;\n  background-color: #fff;\n  min-width: 4.3rem;\n  min-height: 4.5rem;\n  border-bottom: 12px solid #0b2b09;\n}\nsushi::before {\n  position: absolute;\n  display: inline-block;\n  content: \"\";\n  min-width: 2rem;\n  min-height: 1.7rem;\n  border-radius: 50%;\n  top: 25%;\n  left: 27%;\n  background-color: #ff4d4d;\n}\n\nplate {\n  min-width: 9rem;\n  min-height: 9rem;\n  background-color: #fff;\n  border-radius: 50%;\n  border-bottom: 5px solid #cfcfcf;\n}\nplate::before {\n  position: absolute;\n  left: 18%;\n  top: 20%;\n  content: \"\";\n  display: inline-block;\n  width: 6rem;\n  height: 6rem;\n  border-radius: 50%;\n  box-shadow: inset 0px 5px 0px 0px #00000030;\n}\n\nsushimi {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 100% 20%;\n  background-color: #f94d4e;\n  transform: rotateZ(-45deg);\n  z-index: 1;\n}\nsushimi::before {\n  position: absolute;\n  top: 43%;\n  left: -8%;\n  display: inline-block;\n  height: 3rem;\n  width: 60%;\n  content: \"\";\n  border-radius: 100%;\n  border-top: 5px solid #f7f7f785;\n  transform: rotateZ(45deg);\n}\n\nbento {\n  width: 8rem;\n  height: 10rem;\n  background-color: #ffffff;\n  border-width: 17px 4px;\n  border-style: solid;\n  border-color: #79422d;\n}\nbento::before {\n  content: \"\";\n  top: 0px;\n  position: absolute;\n  width: 100%;\n  height: 6px;\n  background-color: #79422d78;\n}\n\npickle {\n  height: 5rem;\n  width: 2rem;\n  background-color: #18a916;\n  border-style: solid;\n  border-width: 1px 2px 7px 2px;\n  border-color: #0000009c;\n  border-radius: 10px;\n}\n\n.editor {\n  display: flex;\n  grid-area: editor;\n  padding: 2rem;\n  background-color: #212631;\n  z-index: 2;\n}\n\n.view {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Cutive Mono\", monospace;\n  flex-basis: 50%;\n}\n.view__title {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  background-color: #181d27;\n  border-bottom: 1px solid #ffffff3b;\n}\n.view__pane {\n  display: flex;\n  font-size: 1.8rem;\n  line-height: 2.1rem;\n  color: #888888;\n  background-color: #e6e6e6;\n  cursor: text;\n}\n.view__pane_dark .view__lines {\n  color: #bbbbbb;\n  background-color: #181e2b;\n}\n.view__pane_dark .view__lines [data-active=true] {\n  background-color: #ffffff26;\n  color: #d2d2d2;\n}\n.view__pane_dark .view__numbers {\n  color: #bbbbbb;\n  background-color: #222a3a;\n}\n.view__numbers {\n  background-color: #dcdcdc;\n  padding: 1rem;\n  text-align: right;\n  border-right: 1px solid #ffffff3b;\n}\n.view__lines {\n  position: relative;\n  padding: 1rem;\n  flex-basis: 100%;\n}\n.view__lines div {\n  padding-left: 2rem;\n}\n.view__lines > div {\n  padding-left: 0;\n}\n.view__editable {\n  display: block;\n  outline: none;\n}\n.view__enter {\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n  content: \"Enter\";\n  font-size: 1rem;\n  text-transform: uppercase;\n  background-color: #808080;\n  color: #d2d2d2;\n  padding: 0 1rem;\n  line-height: 1.5rem;\n  border-radius: 0.4rem;\n  border-bottom: 0.4rem solid #5a5a5a;\n  cursor: pointer;\n  user-select: none;\n}\n.view__enter:active:hover {\n  border: none;\n  top: 1.4rem;\n}\n\n.tooltip {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  padding: 0.5rem;\n  background-color: #cfcfcf;\n  color: #101010;\n  border-radius: 8px;\n  z-index: 10;\n}\n\n.select {\n  animation: 0.8s ease-in-out infinite normal toselect;\n}\n\n.select :not([class~=select]) {\n  animation: 0.8s ease-in-out infinite reverse toselect;\n}\n\n.wrong {\n  animation: 0.02s ease-in-out 5 wrong;\n}\n\n.level {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #fff;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  padding: 1rem;\n}\n.level__current {\n  background-color: #41495d;\n}\n.level:hover {\n  background-color: #2a3140;\n}\n\n.levels {\n  display: none;\n}\n.levels_active {\n  display: flex;\n  flex-direction: column;\n}\n\n.burger {\n  font-size: 2.4rem;\n  cursor: pointer;\n}\n\n.menu {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 2rem;\n}\n\n.arrow {\n  font-size: 2.2rem;\n  cursor: pointer;\n}\n\n.info {\n  display: none;\n}\n.info_active {\n  display: block;\n}\n\n.reset {\n  font-size: 2.4rem;\n  align-self: center;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  transition: transform 0.4s ease-in-out;\n}\n.reset:hover {\n  transform: rotate(360deg);\n}\n\n@keyframes toselect {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes appear {\n  0% {\n    left: 1000px;\n  }\n  100% {\n    left: 0px;\n  }\n}\n@keyframes disappear {\n  0% {\n    right: 0px;\n  }\n  100% {\n    right: 1000px;\n  }\n}\n@keyframes wrong {\n  from {\n    position: relative;\n    left: -0.5rem;\n  }\n  to {\n    position: relative;\n    left: 0.5rem;\n  }\n}\n@keyframes enter {\n  from {\n    top: 1.4rem;\n    border-bottom: none;\n  }\n  to {\n    top: 1rem;\n    border-bottom: 4px solid #5a5a5a;\n  }\n}\n@media (max-width: 980px) {\n  .editor {\n    flex-direction: column;\n  }\n\n  main {\n    grid-template-areas: \"cafe\" \"side\" \"editor\";\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  :root {\n    font-size: 8px;\n  }\n\n  .cafe__goal {\n    font-size: 2.4rem;\n  }\n}\n@media (max-width: 480px) {\n  :root {\n    font-size: 6px;\n  }\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Jura:wght@300;400;700&family=Raleway:wght@200;300;400&family=Merriweather&display=swap');\n@import url('https://pro.fontawesome.com/releases/v5.10.0/css/all.css');\n\n$color-dark: #1d232f;\n$color-darker: #212631;\n$color-darkest: #181e2b;\n$color-totally-dark: #181d27;\n\n$text-color-main: #ffffff;\n\n$header-family: 'Merriweather', serif;\n$monospace-family: 'Cutive Mono', monospace;;\n$main-family: 'Raleway', sans-serif;\n$title-family: 'Jura', sans-serif;\n\n:root {\n  font-size: 10px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: min-content auto;\n  min-height: 100vh;\n  background-color: $color-darkest;\n  color: $text-color-main;\n  font-family: $main-family;\n  font-size: 1.8rem;\n  font-weight: 300;\n  overflow-x: hidden;\n}\n\npre {\n  display: inline;\n  padding: 0.5em;\n  margin-bottom: 1rem;\n  font-family: $monospace-family;\n  font-weight: 600;\n  background-color: $color-totally-dark;\n  color: #fff;\n}\n\nheader {\n  display: flex;\n  justify-content: flex-start;\n  padding: 1rem 2rem;\n  background-color: #242b3a;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.85);\n  z-index: 3;\n}\n\n.logo {\n  font-family: $header-family;\n  font-size: 3.2rem;\n  color: #cca449;\n  text-shadow: 2px 3px 1px #171717;\n\n  &__highlight {\n    color: #ffd5a8;\n  }\n}\n\nmain {\n  display: grid;\n  grid-template-areas:\n        \"cafe cafe side\"\n        \"editor editor side\";\n  grid-template-columns: 2fr 2fr 1fr;\n  grid-template-rows: 1fr 1.5fr;\n}\n\n.cafe {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  grid-area: cafe;\n  z-index: 2;\n\n  &__goal {\n    font-weight: 600;\n    font-size: 3.2rem;\n    color: #ffffff7a;\n    letter-spacing: 0.2rem;\n    margin-bottom: 4rem;\n  }\n}\n\n.sidebar {\n  grid-area: side;\n\n  padding: 2rem;\n  text-align: justify;\n  line-height: 3rem;\n  font-size: 1.6rem;\n  color: #dcdcdc;\n\n  z-index: 2;\n  background-color: $color-darker;\n  border-left: 1px solid #2e354487;\n\n  &__title {\n    color: #fff;\n    font-size: 2.4rem;\n    text-align: center;\n    font-family: $title-family;\n  }\n\n  &__subtitle {\n    color: #e0e0e0;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n\n  &__description {\n    font-size: 1.4rem;\n  }\n\n  &__selector {\n    display: block;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n\n  hr {\n    height: 1px;\n    border: none;\n    margin-top: 1rem;\n    margin-bottom: 2rem;\n    background-color: #ffffff3b;\n  }\n}\n\n.table-space-3d {\n  perspective: 300px;\n}\n\n.table {\n  min-height: 14rem;\n  min-width: 30rem;\n  background-color: #c1873e;\n  transform-style: preserve-3d;\n  transform: rotateX(30deg);\n  transform-origin: bottom;\n  box-shadow: 0px 35px 4px 0px #161b27;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: min-content;\n  grid-template-rows: min-content;\n  justify-items: center;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  column-gap: 2rem;\n  padding: 1rem;\n  padding-bottom: calc(2rem + 4px);\n\n  &__border {\n    position: relative;\n    min-height: 0.5rem;\n    transform: rotateX(-30deg);\n    transform-origin: top;\n    background-color: #5f3f19;\n  }\n\n  &__legs {\n    position: absolute;\n    top: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    padding: 0 1rem;\n  }\n\n  &__leg {\n    background-color: #462d10;\n    min-height: 1rem;\n    min-width: 2rem;\n  }\n}\n\nsushi, plate, sushimi, bento, pickle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  box-shadow: 0px 5px #0000001f;\n  cursor: pointer;\n\n  & * {  \n    position: absolute;\n    &:nth-child(2) {\n      bottom: 3rem;\n    }\n  \n    &:nth-child(3) {\n      bottom: 5rem;\n    }\n  }\n\n  &[data-active=\"true\"] {\n    box-shadow: 0 0 0px 5px #ffffff5c;\n  }\n\n  &.remove {\n    animation: 0.2s ease-in 1 disappear;\n  }\n\n  &.appear {\n    animation: 0.2s ease-in 1 appear;\n  }\n}\n\nplate .active {\n  box-shadow: 0 0 0px 5px #0000004d;\n}\n\nplate.blue {\n  background-color: #4369d3;\n  border-color: #2b4794;\n  &::before {\n    background-color: #5a82f1;\n  }\n}\n\nsushi {\n  border-top: 1px solid #717171;\n  border-radius: 50%;\n  background-color: #fff;\n  min-width: 4.3rem;\n  min-height: 4.5rem;\n  border-bottom: 12px solid #0b2b09;\n\n  &::before {\n    position: absolute;\n    display: inline-block;\n    content: \"\";\n    min-width: 2rem;\n    min-height: 1.7rem;\n    border-radius: 50%;\n    top: 25%;\n    left: 27%;\n    background-color: #ff4d4d;\n  }\n}\n\nplate {\n  min-width: 9rem;\n  min-height: 9rem;\n  background-color: #fff;\n  border-radius: 50%;\n  border-bottom: 5px solid #cfcfcf;\n\n  &::before {\n    position: absolute;\n    left: 18%;\n    top: 20%;\n    content: \"\";\n    display: inline-block;\n    width: 6rem;\n    height: 6rem;\n    border-radius: 50%;\n    box-shadow: inset 0px 5px 0px 0px #00000030;\n  }\n}\n\nsushimi {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 100% 20%;\n  background-color: #f94d4e;\n  transform: rotateZ(-45deg);\n  z-index: 1;\n\n  &::before {\n    position: absolute;\n    top: 43%;\n    left: -8%;\n    display: inline-block;\n    height: 3rem;\n    width: 60%;\n    content: \"\";\n    border-radius: 100%;\n    border-top: 5px solid #f7f7f785;\n    transform: rotateZ(45deg);\n  }\n\n  // &::after {\n  //   position: absolute;\n  //   top: 7%;\n  //   left: 26%;\n  //   display: inline-block;\n  //   height: 3rem;\n  //   width: 60%;\n  //   content: \"\";\n  //   border-radius: 100%;\n  //   border-top: 5px solid #f7f7f785;\n  //   transform: rotateZ(45deg);\n  // }\n}\n\nbento {\n  width: 8rem;\n  height: 10rem;\n  background-color: #ffffff;\n  border-width: 17px 4px;\n  border-style: solid;\n  border-color: #79422d;\n\n  &::before {\n    content: \"\";\n    top: 0px;\n    position: absolute;\n    width: 100%;\n    height: 6px;\n    background-color: #79422d78;\n  }\n}\n\npickle {\n  height: 5rem;\n  width: 2rem;\n  background-color: #18a916;\n  border-style: solid;\n  border-width: 1px 2px 7px 2px;\n  border-color: #0000009c;\n  border-radius: 10px;\n}\n\n.editor {\n  display: flex;\n  grid-area: editor;\n  padding: 2rem;\n  background-color: $color-darker;\n  z-index: 2;\n}\n\n.view {\n  display: flex;\n  flex-direction: column;\n  font-family: $monospace-family;\n  flex-basis: 50%;\n\n  &__title {\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem 2rem;\n    background-color: $color-totally-dark;\n    border-bottom: 1px solid #ffffff3b;\n  }\n\n  &__pane {\n    display: flex;\n    font-size: 1.8rem;\n    line-height: 2.1rem;\n    color: #888888;\n    background-color: #e6e6e6;\n    cursor: text;\n\n    &_dark {\n      .view__lines {\n        color: #bbbbbb;\n        background-color: $color-darkest;\n\n        & [data-active=\"true\"] {\n          background-color: #ffffff26;\n          color: #d2d2d2;\n        }\n      }\n\n      .view__numbers {\n        color: #bbbbbb;\n        background-color: #222a3a;\n      }\n    }\n  }\n\n  &__numbers {\n    background-color: #dcdcdc;\n    padding: 1rem;\n    text-align: right;\n    border-right: 1px solid #ffffff3b;\n  }\n\n  &__lines {\n    position: relative;\n    padding: 1rem;\n    flex-basis: 100%;\n\n    & div {\n      padding-left: 2rem;\n    }\n\n    & > div {\n      padding-left: 0;\n    }\n  }\n\n  &__editable {\n    display: block;\n    outline: none;\n  }\n\n  &__enter {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    content: \"Enter\";\n    font-size: 1rem;\n    text-transform: uppercase;\n    background-color: #808080;\n    color: #d2d2d2;\n    padding: 0 1rem;\n    line-height: 1.5rem;\n    border-radius: 0.4rem;\n    border-bottom: 0.4rem solid #5a5a5a;\n    cursor: pointer;\n    user-select: none;\n\n    &:active:hover {\n      border: none;\n      top: 1.4rem;\n    }\n  }\n}\n\n.tooltip {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  padding: 0.5rem;\n  background-color: #cfcfcf;\n  color: #101010;\n  border-radius: 8px;\n  z-index: 10;\n}\n\n.select {\n  animation: 0.8s ease-in-out infinite normal toselect;\n}\n\n.select :not([class~=\"select\"]) {\n  animation: 0.8s ease-in-out infinite reverse toselect;\n}\n\n.wrong {\n  animation: 0.02s ease-in-out 5 wrong;\n}\n\n.level {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #fff;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  padding: 1rem;\n\n  &__current {\n    background-color: #41495d;\n  }\n\n  &:hover {\n    background-color: #2a3140;\n  }\n}\n\n.levels {\n  display: none;\n  &_active {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.burger {\n  font-size: 2.4rem;\n  cursor: pointer;\n}\n\n.menu {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 2rem;\n}\n\n.arrow {\n  font-size: 2.2rem;\n  cursor: pointer;\n}\n\n.info {\n  display: none;\n  &_active {\n    display: block;\n  }\n}\n\n.reset {\n  font-size: 2.4rem;\n  align-self: center;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  transition: transform 0.4s ease-in-out;\n\n  &:hover {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes toselect {\n  0% {\n    transform: scale(1)\n  }\n  \n  50% {\n    transform: scale(1.05)\n  }\n  \n    100% {\n    transform: scale(1)\n  }\n}\n\n@keyframes appear {\n  0% {\n    left: 1000px;\n  }\n\n  100% {\n    left: 0px;\n  }\n}\n\n@keyframes disappear {\n  0% {\n    right: 0px;\n  }\n\n  100% {\n    right: 1000px;\n  }\n}\n\n@keyframes wrong {\n  from {\n    position: relative;\n    left: -0.5rem;\n  }\n  \n  to {\n    position: relative;\n    left: 0.5rem;\n  }\n}\n\n@keyframes enter {\n  from {\n    top: 1.4rem;\n    border-bottom: none;\n  }\n\n  to {\n    top: 1rem;\n    border-bottom: 4px solid #5a5a5a;\n  }\n}\n\n// @media (max-width: 1200px) and (min-width: 768px) {\n//   .editor {\n//     flex-direction: column;\n//   }\n\n//   main {\n//     grid-template-columns: 1fr 1fr 1fr;\n//   }\n// }\n\n@media (max-width: 980px) {\n  .editor {\n    flex-direction: column;\n  }\n\n  main {\n    grid-template-areas:\n    \"cafe\"\n    \"side\"\n    \"editor\";\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 640px) {\n  :root {\n    font-size: 8px;\n  }\n\n  .cafe__goal {\n    font-size: 2.4rem;\n  }\n}\n\n@media (max-width: 480px) {\n  :root {\n    font-size: 6px;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/pug-loader/index.js??ruleSet[1].rules[2].use[1]!./src/modules/level.pug":
/*!**********************************************************************************************!*\
  !*** ./node_modules/pug-loader/index.js??ruleSet[1].rules[2].use[1]!./src/modules/level.pug ***!
  \**********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"level\"\u003E\n  \u003Cdiv class=\"level__title\"\u003E\u003C\u002Fdiv\u003E\n  \u003Cdiv class=\"level__icon\"\u003E\u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
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

/***/ "./src/modules/levels.ts":
/*!*******************************!*\
  !*** ./src/modules/levels.ts ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTemplate [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemplate": () => /* binding */ getTemplate,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _level_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.pug */ "./src/modules/level.pug");
/* harmony import */ var _level_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_level_pug__WEBPACK_IMPORTED_MODULE_0__);
;
const parser = new DOMParser();
const levelTemplate = parser
    .parseFromString((_level_pug__WEBPACK_IMPORTED_MODULE_0___default()), 'text/html')
    .querySelector('body *');
function getTemplate() {
    return levelTemplate.cloneNode(true);
}
const levels = [
    {
        goal: 'Выберите все вещи на столе',
        dom: '<plate><pickle/></plate><plate><sushi/></plate></pickle><bento/>',
        selector: '*',
        description: {
            title: 'Универсальный селектор',
            subtitle: 'Выбирает все элементы',
            selector: '*',
            info: 'Вы можете выбрать все элементы с помощью универсального селектора.',
            examples: [
                '<pre>*</pre> выбирает все элементы на странице',
            ],
        },
    },
    {
        goal: 'Выберите все тарелки',
        dom: '<plate><sushimi/></plate><plate></plate><bento><sushi/></bento>',
        selector: 'plate',
        description: {
            title: 'Селектор тэга',
            subtitle: 'Выбирает элементы с заданным тэгом',
            selector: 'A',
            info: 'Вы можете выбрать элементы с заданным тегом, указав его имя в селекторе.',
            examples: [
                '<pre>div</pre> выбирает все элементы с тэгом div',
            ],
        },
    },
    {
        goal: 'Выберите синюю тарелку',
        dom: '<plate><sushimi/></plate><plate class="blue"></plate><plate/>',
        selector: 'plate.blue',
        description: {
            title: 'Селектор класса',
            subtitle: 'Выбирает элементы с заданным классом',
            selector: 'div.A',
            info: 'Для нескольких элементов с одинаковым тэгом могут быть указаны разные классы. Для их выбора вы можете использовать селектор класса.',
            examples: [
                '<pre>div</pre> выбирает все элементы с тэгом div',
            ],
        },
    },
    {
        goal: 'Выберите суши внутри бенто',
        dom: `<plate><sushimi></sushimi></plate>
    <plate></plate>
    <sushi></sushi>
    <bento>
      <sushi></sushi>
    </bento>`,
        selector: 'bento sushi',
        description: {
            title: 'Селектор потомков',
            subtitle: 'Выбирает всех потомков с заданным селектором B',
            selector: 'A B',
            info: 'Для нескольких элементов с одинаковым тэгом могут быть указаны разные классы. Для их выбора вы можете использовать селектор класса.',
            examples: [
                '<pre>div p.message</pre> выбирает все элементы <pre>p</pre> с классом <pre>message</pre> внутри <pre>div</pre>',
            ],
        },
    },
    {
        goal: 'Выберите огурец, лежащий на тарелке',
        dom: `
      <plate>
        <bento>
          <pickle></pickle>
        </bento>
      </plate>
      <pickle></pickle>
      <plate>
        <pickle></pickle>
      </plate>`,
        selector: 'plate > pickle',
        description: {
            title: 'Селектор непосредственных потомков',
            subtitle: 'Выбирает непосредственного потомка внутри элемента А',
            selector: 'A > B',
            info: 'Непосредственными потомками являются элементы, расположенные на первом уровне вложнености внутри своего родителя',
            examples: [
                '<pre>ul > li</pre> выберет <pre>li</pre>, которые являются непосредственными потомками <pre>ul</pre>.',
            ],
        },
    },
    {
        goal: 'Выберите все суши, следующие после тарелки',
        dom: `<sushi>
    </sushi>
    <plate></plate>
    <sushi>
    </sushi>
    <sushi>
    </sushi>`,
        selector: 'plate ~ sushi',
        description: {
            title: 'Селектор соседей',
            subtitle: 'Выбирает элементы B, следующие после A',
            selector: 'A ~ B',
            info: 'Этот селектор используется для выбора элементов, следующих после указанного элемента',
            examples: [
                '<pre>div ~ a</pre> выбирает элемент <pre>a</pre> после <pre>div</pre>',
            ],
        },
    },
    {
        goal: 'Выберите огурец рядом с суши',
        dom: `<bento></bento>
    <sushi></sushi>
    <pickle></pickle>
    <plate>
      <pickle></pickle>
    </plate>`,
        selector: 'sushi + pickle',
        description: {
            title: 'Селектор непосредственных соседей',
            subtitle: 'Выбирает элемент B, если он следует после элемента A',
            selector: 'A + B',
            info: 'Вы можете выбрать элемент, который следует сразу за другим элементом',
            examples: [
                '<pre>p + a</pre> выбирает элемент <pre>a</pre>, если он следует сразу за <pre>p</pre>',
            ],
        },
    },
    {
        goal: 'Выберите нижний суши на бенто',
        dom: `
    <bento>
      <sushi>
      </sushi>
      <sushi>
      </sushi>
      <sushi>
      </sushi>
    </bento>
    <plate>
    </plate>
    <plate>
      <pickle>
        </pickle>
    </plate>`,
        selector: 'sushi:first-child',
        description: {
            title: 'Псевдо-селектор :first-child',
            subtitle: 'Выбирает выбирает все элементы А, которые являются первыми потомками своего родителя',
            selector: 'A:first-child',
            info: 'Вы можете выбрать первого потомка с помощью данного селектора',
            examples: [
                '<pre>p a:first-child</pre> выбирает первый элемент <pre>a</pre> внутри <pre>p</pre>',
            ],
        },
    },
    {
        goal: 'Выберите третий слева огурец',
        dom: `<pickle></pickle>
    <pickle></pickle>
    <pickle></pickle>
    <bento>
      <pickle></pickle>
    </bento>`,
        selector: 'pickle:nth-child(3)',
        description: {
            title: 'Селектор N-ного потомка',
            subtitle: 'Выбирает N-ный по счету элемент',
            selector: ':nth-child(N)',
            info: 'Позволяет выбрать элемент, который является N-ным по счету потомком на том же уровне вложенности',
            examples: [
                '<pre>div p:nth-child(2)</pre> выбирает второй элемент<pre>p</pre>, внутри <pre>div</pre>',
            ],
        },
    },
    {
        goal: 'Выберите белую тарелку',
        dom: `
    <plate class="blue"></plate>
    <plate class="blue"></plate>
    <plate></plate>
    <plate class="blue"></plate>`,
        selector: 'plate:not(.blue)',
        description: {
            title: 'Псевдо-селектор :not()',
            subtitle: 'Выбирает элементы, не соответствующие селектору A',
            selector: ':not(A)',
            info: '',
            examples: [
                '<pre>div:not(.wide)</pre> выбирает элементы <pre>div</pre>, у которых не указан класс <pre>big</pre>',
            ],
        },
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (levels);


/***/ }),

/***/ "./src/modules/main.ts":
/*!*****************************!*\
  !*** ./src/modules/main.ts ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./src/styles.scss");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/modules/view.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./levels */ "./src/modules/levels.ts");
/* eslint-disable no-param-reassign */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let goalElem;
let sidebarTitle;
let sidebarSubTitle;
let sidebarSelector;
let description;
let table;
let listDiv;
let info;
let enter;
let errAnimation = false;
let showLevels = false;
const parser = new DOMParser();
/**
 * Time for kostily!
 */
const tmp = document.createElement('textarea');
function congrats() {
    goalElem.textContent = 'Поздравляем, теперь вы можете в CSS!';
}
function initStorage() {
    const solvedLevels = JSON.stringify(Array(_levels__WEBPACK_IMPORTED_MODULE_2__.default.length).fill(false));
    localStorage.setItem('currentLevel', '0');
    localStorage.setItem('solvedLevels', solvedLevels);
    localStorage.setItem('menu', '0');
}
function getLevel() {
    const res = localStorage.getItem('currentLevel');
    return (!res) ? null : Number(res);
}
function getSolved() {
    const res = localStorage.getItem('solvedLevels');
    if (!res)
        return null;
    return JSON.parse(res);
}
function checkStorage() {
    const level = getLevel();
    if (level === null)
        initStorage();
    const solvedLevels = getSolved();
    if (solvedLevels.length !== _levels__WEBPACK_IMPORTED_MODULE_2__.default.length) {
        const addLength = _levels__WEBPACK_IMPORTED_MODULE_2__.default.length - solvedLevels.length;
        const addArray = Array(addLength).fill(false);
        localStorage.setItem('solvedLevels', JSON.stringify([...solvedLevels, ...addArray]));
    }
}
function toggleLevelsList() {
    showLevels = !showLevels;
    if (showLevels) {
        listDiv.classList.add('levels_active');
        info.classList.remove('info_active');
    }
    else {
        info.classList.add('info_active');
        listDiv.classList.remove('levels_active');
    }
    localStorage.setItem('menu', (showLevels) ? '1' : '0');
}
function insertElemIntoViewer(elem, parent) {
    const elems = Array.from(elem.children);
    elems.forEach((child) => {
        const div = document.createElement('div');
        parent.appendChild(div);
        div.innerHTML += `&lt;${child.tagName.toLowerCase()}`;
        const { attributes } = child;
        if (attributes && attributes.length > 0) {
            for (let i = 0; i < attributes.length; i += 1) {
                const attr = attributes[i];
                div.innerHTML += ` ${attr.name}="${attr.value}"`;
            }
        }
        if (child.children.length > 0) {
            div.innerHTML += '&gt;';
            insertElemIntoViewer(child, div);
            div.innerHTML += `&lt;/${child.tagName.toLowerCase()}&gt;`;
        }
        else
            div.innerHTML += '/&gt;';
    });
}
function removeItems() {
    return new Promise((resolve) => {
        const { selector } = _levels__WEBPACK_IMPORTED_MODULE_2__.default[getLevel()];
        const elems = document.querySelectorAll(`.table ${selector}`);
        const lines = Array.from(document.querySelector('.html-view .view__lines').children);
        elems.forEach((elem) => elem.classList.add('remove'));
        lines.forEach((line) => { line.remove(); });
        setTimeout(() => {
            elems.forEach((elem) => elem.remove());
            resolve();
        }, 200);
    });
}
function toggletoolTip(element, show = true) {
    if (!show) {
        Array
            .from(document.querySelectorAll('.tooltip'))
            .forEach((item) => { item.remove(); });
        return;
    }
    const toolTipDiv = document.createElement('div');
    toolTipDiv.classList.add('tooltip');
    toolTipDiv.innerHTML += `&lt;${element.tagName.toLowerCase()}`;
    const attrString = Array.from(element.attributes)
        .filter((attr) => attr.value !== '')
        .filter((attr) => attr.name !== 'data-active')
        .filter((attr) => attr.value !== 'select')
        .map((attr) => `${attr.name}="${attr.value}"`)
        .join(' ');
    if (attrString.length)
        toolTipDiv.innerHTML += ` ${attrString}`;
    const endPart = (element.children.length)
        ? `&gt;&lt;${element.tagName.toLowerCase()}/&gt;`
        : '/&gt;';
    toolTipDiv.innerHTML += endPart;
    const rect = element.getBoundingClientRect();
    toolTipDiv.style.top = `${rect.top - 50}px`;
    toolTipDiv.style.left = `${rect.left}px`;
    document.body.appendChild(toolTipDiv);
}
function highlight(e) {
    e.stopPropagation();
    const tableItems = Array.from(document.querySelectorAll('.table *'));
    const HTMLLines = Array.from(document.querySelectorAll('.html-view .view__lines *'));
    const element = e.target;
    let elIndex = tableItems.indexOf(element);
    if (elIndex === -1)
        elIndex = HTMLLines.indexOf(element);
    const tableElement = tableItems[elIndex];
    const viewElememnt = HTMLLines[elIndex];
    if (e.type === 'mouseover') {
        tableElement.dataset.active = 'true';
        viewElememnt.dataset.active = 'true';
        toggletoolTip(tableElement);
    }
    if (e.type === 'mouseout') {
        tableElement.dataset.active = 'false';
        viewElememnt.dataset.active = 'false';
        toggletoolTip((tableElement), false);
    }
}
function loadLevel() {
    document.querySelector('.view__editable').innerHTML = '';
    const level = _levels__WEBPACK_IMPORTED_MODULE_2__.default[getLevel()];
    removeItems();
    goalElem.innerText = `${getLevel() + 1} ${level.goal}`;
    description.innerHTML = '';
    sidebarTitle.innerText = level.description.title;
    sidebarSubTitle.innerText = level.description.subtitle;
    sidebarSelector.innerText = level.description.selector;
    description.innerText += level.description.info;
    description.innerHTML += '<br><br>Примеры:<br>';
    level.description.examples.forEach((example) => {
        description.innerHTML += '<hr>';
        description.innerHTML += example;
    });
    const { body } = parser.parseFromString(level.dom, 'text/html');
    const htmlViewer = document
        .querySelector('.html-view')
        .querySelector('.view__lines');
    insertElemIntoViewer(body, htmlViewer);
    table.innerHTML = '';
    table.innerHTML = body.innerHTML;
    const tableItems = Array.from(document.querySelectorAll('.table *'));
    const HTMLLines = Array.from(document.querySelectorAll('.html-view .view__lines *'));
    const elements = [...tableItems, ...HTMLLines];
    tableItems.forEach((item) => { item.classList.add('appear'); });
    elements.forEach((item) => {
        item.addEventListener('mouseover', highlight);
        item.addEventListener('mouseout', highlight);
    });
    const { selector } = level;
    setTimeout(() => {
        tableItems.forEach((item) => { item.classList.remove('appear'); });
        document.querySelectorAll(`.table ${selector}`).forEach((item) => { item.classList.add('select'); });
    }, 200);
    const levelLines = document.querySelectorAll('.level');
    levelLines.forEach((line) => { line.classList.remove('level__current'); });
    levelLines[getLevel()].classList.add('level__current');
}
function setLevel(e) {
    if (!(this).classList.contains('level'))
        return;
    const num = Number(e.currentTarget.dataset.num);
    const currentLevel = getLevel();
    if (num === currentLevel)
        return;
    localStorage.setItem('currentLevel', num.toString());
    loadLevel();
}
function buildLevelList() {
    const solved = getSolved();
    const levelLines = document.querySelectorAll('.level');
    if (levelLines.length > 0)
        levelLines.forEach((line) => line.remove());
    _levels__WEBPACK_IMPORTED_MODULE_2__.default.forEach((level, i) => {
        const levelDiv = (0,_levels__WEBPACK_IMPORTED_MODULE_2__.getTemplate)();
        levelDiv.dataset.num = i.toString();
        levelDiv.querySelector('.level__title').innerHTML = `${(i + 1).toString()}. `;
        levelDiv.querySelector('.level__title').innerHTML += level.description.title;
        if (solved[i])
            levelDiv.querySelector('.level__icon').innerHTML = '<i class="fas fa-check"></i>';
        listDiv.appendChild(levelDiv);
    });
    document.querySelectorAll('.level').forEach((line) => {
        line.addEventListener('click', setLevel);
    });
}
function setErrAnimation(selector, state = true) {
    const views = document.querySelectorAll('.view');
    let elems;
    try {
        elems = document.querySelectorAll(`.table ${selector}`);
    }
    catch (err) {
        elems = [];
    }
    views.forEach((elem) => {
        if (state)
            elem.classList.add('wrong');
        else
            elem.classList.remove('wrong');
    });
    elems.forEach((elem) => {
        if (state)
            elem.classList.add('wrong');
        else
            elem.classList.remove('wrong');
    });
    if (!errAnimation) {
        setTimeout(() => {
            setErrAnimation(selector, false);
            errAnimation = false;
        }, 400);
    }
    errAnimation = true;
}
function allDone() {
    const solved = getSolved();
    return solved.every((isSolved) => isSolved);
}
function checkAnswer(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const keyboardEventObject = e;
        if (keyboardEventObject.code && keyboardEventObject.code !== 'Enter')
            return;
        let win = true;
        e.preventDefault();
        tmp.innerHTML = document.querySelector('.view__editable').innerHTML;
        const selector = tmp.value;
        if (selector === '')
            return;
        const rightCollection = document.querySelectorAll(`.table ${_levels__WEBPACK_IMPORTED_MODULE_2__.default[getLevel()].selector}`);
        let collection;
        try {
            collection = document.querySelectorAll(`.table ${selector}`);
        }
        catch (err) {
            win = false;
        }
        if (collection && collection.length && (collection.length === rightCollection.length)) {
            collection.forEach((item, i) => { if (item !== rightCollection[i])
                win = false; });
        }
        else
            win = false;
        if (!win)
            setErrAnimation(selector);
        if (win) {
            const solved = getSolved();
            solved[getLevel()] = true;
            localStorage.setItem('solvedLevels', JSON.stringify(solved));
            buildLevelList();
            yield removeItems();
            if (allDone())
                congrats();
            else if (getLevel() <= _levels__WEBPACK_IMPORTED_MODULE_2__.default.length) {
                const nextLevel = getLevel() + 1;
                localStorage.setItem('currentLevel', nextLevel.toString());
                loadLevel();
            }
        }
    });
}
function changeLevel(e) {
    const prevLevel = getLevel();
    let currentLevel = prevLevel;
    const arrow = e.target;
    const lastLevel = _levels__WEBPACK_IMPORTED_MODULE_2__.default.length - 1;
    if (arrow.classList.contains('prev'))
        currentLevel -= 1;
    else
        currentLevel += 1;
    if (currentLevel < 0)
        currentLevel = 0;
    if (currentLevel > lastLevel)
        currentLevel = lastLevel;
    localStorage.setItem('currentLevel', currentLevel.toString());
    if (prevLevel !== currentLevel)
        loadLevel();
}
function start() {
    listDiv = document.querySelector('.levels');
    table = document.querySelector('.table');
    goalElem = document.querySelector('.cafe__goal');
    sidebarTitle = document.querySelector('.sidebar__title');
    sidebarSubTitle = document.querySelector('.sidebar__subtitle');
    description = document.querySelector('.sidebar__description');
    sidebarSelector = document.querySelector('.sidebar__selector');
    info = document.querySelector('.info');
    enter = document.querySelector('.view__enter');
    checkStorage();
    buildLevelList();
    loadLevel();
    document.querySelector('.view__editable').addEventListener('keydown', checkAnswer);
    document.querySelector('.burger').addEventListener('click', toggleLevelsList);
    document.querySelector('.reset').addEventListener('click', () => { initStorage(); start(); });
    document.querySelectorAll('.arrow').forEach((arrow) => {
        arrow.addEventListener('click', changeLevel);
    });
    enter.addEventListener('click', checkAnswer);
    const tab = localStorage.getItem('menu');
    if (tab === '1')
        toggleLevelsList();
}
document.addEventListener('DOMContentLoaded', start);


/***/ }),

/***/ "./src/modules/view.ts":
/*!*****************************!*\
  !*** ./src/modules/view.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

function focus(e) {
    if (e.target.innerText === 'Type selector here')
        e.target.innerText = '';
}
function unfocus(e) {
    if (e.target.innerText.trim() === '')
        e.target.innerText = 'Type selector here';
}
function setupViews() {
    const lineCount = 20;
    const nodeList = Array.from(document.querySelectorAll('.view__numbers'));
    nodeList.forEach((node) => {
        for (let i = 1; i <= lineCount; i += 1) {
            const element = node;
            element.innerHTML += `${i}<br>`;
        }
    });
    const editable = document.querySelector('.view__editable');
    editable.addEventListener('focus', focus);
    editable.addEventListener('blur', unfocus);
    const editorView = document.querySelector('.editor-view');
    editorView.addEventListener('click', () => { editable.focus(); });
}
document.addEventListener('DOMContentLoaded', setupViews);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/******/ 	__webpack_require__("./src/modules/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=app.js.map