/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    font-family: sans-serif;
}


button {
    all: unset;
}

html {
    height: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

body {
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 8fr;
    margin: 0;
}

html::-webkit-scrollbar {
    display: none;
}

.projectsPopup {
    width: fit-content;
    height: fit-content;
    display: none;
    position: fixed;
    top: 20%; 
    left: 50%;
    transform: translate(-50%, -50%);
}

.projPopupBtns {
    display: flex;
    justify-content: space-between;
}


.todoPopup {
    width: 50%;
    height: fit-content;
    display: none;
    position: fixed;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
}


#editTodo , #addProject {
    font-size: 1rem;
    display: flex;
    flex: auto;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;
    border: 2px solid black;
    background-color: white;
}

#projName {
    border: 2px solid black;
    border-radius: 3px;
}


.inptWrapr {
    display: flex;
    flex-direction: row;
}

.inptWrapr label {
    margin-right: 1rem;
}

.inptWrapr  input , select {
    width: 100%;
    border: 1px solid black;
    border-radius: 3px;
}


.popupBtns {
    display: flex;
    justify-content: space-between;
}

.popupBtns button , #newProj , #cancelProj {
    border-radius: 5px;
    border: 1px solid black;
    background-color: #dda15e;
    padding: 0.3rem
}

.sidebar {
    background-color: #dda15e;
    display: flex;
    flex-direction: column;
}

.user {
    font-size: 3rem;
    margin: 1rem 1rem 1rem 1rem;
}

.sidebar > .label {
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 3rem 0rem 1rem 0rem;
    padding: 0rem 1.5rem 0rem 2rem;
    display: flex;
    justify-content: space-between;
}

.newProject {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 10px;
}

.newProject:hover {
    background-color: #bc6c25;
}

.sBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    font-size: 1rem;
    padding: 0rem 2rem 0rem 2rem;
    margin-left: 1rem;
    
}

.sBtn img {
    width: 1rem;
}

.sBtn img:hover {
    position: relative;
    left: 0.5rem;
    width: 2rem;
}

.sBtn:hover {
    background-color: #bc6c25;
}

.sorting, .projects {
    display: flex;
    flex-direction: column;
}

.mainContent {
    background-color: #bc6c25;
    padding: 1.5rem;
    display: flex;
}

.page {
    min-width: 30rem;
    display: flex;
    flex: 1;
    background-color: #fefae0;
    border-radius: 10px;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 5px 2px rgba(66, 66, 66, 0.459);
    overflow:HIDDEN;
}

.title {
    font-size: 3rem;
}

.tasksContainer {
    display: flex;
    flex-direction: column;
    flex: auto;
    width: 70%;
    align-items: center;
}


.task {
    display: flex;
    border-bottom: 1px solid #bc6c25;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
}

.taskMiddle {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
}

.taskTitle {
    font-size: 1.2rem;
    font-weight: 600;
}

.taskRight {
   width: 25%;
    display: flex;
    justify-content: center;
}

.DltEdt {
    display: flex;
    flex-direction: column;
}

.priority {

    min-width: 10px;
    height: 100%;
}

#addTodo_button {
    align-self: flex-end;
    outline: 2px black solid;
    border-radius: 10px;
}

#addTodoIcon {
    width: 5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;;AAGA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;;AAGA;IACI,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;;AAGA;IACI,eAAe;IACf,aAAa;IACb,UAAU;IACV,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,yBAAyB;IACzB;AACJ;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,2BAA2B;IAC3B,8BAA8B;IAC9B,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;IACZ,eAAe;IACf,4BAA4B;IAC5B,iBAAiB;;AAErB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,OAAO;IACP,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mDAAmD;IACnD,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,UAAU;IACV,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;GACG,UAAU;IACT,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf","sourcesContent":["* {\n    box-sizing: border-box;\n    font-family: sans-serif;\n}\n\n\nbutton {\n    all: unset;\n}\n\nhtml {\n    height: 100%;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n\nbody {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 2fr 8fr;\n    margin: 0;\n}\n\nhtml::-webkit-scrollbar {\n    display: none;\n}\n\n.projectsPopup {\n    width: fit-content;\n    height: fit-content;\n    display: none;\n    position: fixed;\n    top: 20%; \n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.projPopupBtns {\n    display: flex;\n    justify-content: space-between;\n}\n\n\n.todoPopup {\n    width: 50%;\n    height: fit-content;\n    display: none;\n    position: fixed;\n    top: 50%; \n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\n#editTodo , #addProject {\n    font-size: 1rem;\n    display: flex;\n    flex: auto;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    border-radius: 10px;\n    border: 2px solid black;\n    background-color: white;\n}\n\n#projName {\n    border: 2px solid black;\n    border-radius: 3px;\n}\n\n\n.inptWrapr {\n    display: flex;\n    flex-direction: row;\n}\n\n.inptWrapr label {\n    margin-right: 1rem;\n}\n\n.inptWrapr  input , select {\n    width: 100%;\n    border: 1px solid black;\n    border-radius: 3px;\n}\n\n\n.popupBtns {\n    display: flex;\n    justify-content: space-between;\n}\n\n.popupBtns button , #newProj , #cancelProj {\n    border-radius: 5px;\n    border: 1px solid black;\n    background-color: #dda15e;\n    padding: 0.3rem\n}\n\n.sidebar {\n    background-color: #dda15e;\n    display: flex;\n    flex-direction: column;\n}\n\n.user {\n    font-size: 3rem;\n    margin: 1rem 1rem 1rem 1rem;\n}\n\n.sidebar > .label {\n    align-items: center;\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin: 3rem 0rem 1rem 0rem;\n    padding: 0rem 1.5rem 0rem 2rem;\n    display: flex;\n    justify-content: space-between;\n}\n\n.newProject {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.5rem;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 10px;\n}\n\n.newProject:hover {\n    background-color: #bc6c25;\n}\n\n.sBtn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 3rem;\n    font-size: 1rem;\n    padding: 0rem 2rem 0rem 2rem;\n    margin-left: 1rem;\n    \n}\n\n.sBtn img {\n    width: 1rem;\n}\n\n.sBtn img:hover {\n    position: relative;\n    left: 0.5rem;\n    width: 2rem;\n}\n\n.sBtn:hover {\n    background-color: #bc6c25;\n}\n\n.sorting, .projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.mainContent {\n    background-color: #bc6c25;\n    padding: 1.5rem;\n    display: flex;\n}\n\n.page {\n    min-width: 30rem;\n    display: flex;\n    flex: 1;\n    background-color: #fefae0;\n    border-radius: 10px;\n    padding: 1rem;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0px 0px 5px 2px rgba(66, 66, 66, 0.459);\n    overflow:HIDDEN;\n}\n\n.title {\n    font-size: 3rem;\n}\n\n.tasksContainer {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    width: 70%;\n    align-items: center;\n}\n\n\n.task {\n    display: flex;\n    border-bottom: 1px solid #bc6c25;\n    height: auto;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    padding: 1rem;\n}\n\n.taskMiddle {\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n}\n\n.taskTitle {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.taskRight {\n   width: 25%;\n    display: flex;\n    justify-content: center;\n}\n\n.DltEdt {\n    display: flex;\n    flex-direction: column;\n}\n\n.priority {\n\n    min-width: 10px;\n    height: 100%;\n}\n\n#addTodo_button {\n    align-self: flex-end;\n    outline: 2px black solid;\n    border-radius: 10px;\n}\n\n#addTodoIcon {\n    width: 5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateStorage: () => (/* binding */ populateStorage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainContent.js */ "./src/modules/mainContent.js");
/* harmony import */ var _modules_sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sidebar.js */ "./src/modules/sidebar.js");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/todo.js */ "./src/modules/todo.js");







if (!localStorage.getItem('projects')) {
    _modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects[_modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects.length] = new _modules_project_js__WEBPACK_IMPORTED_MODULE_3__.project ('default', _modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects.length);
    let currentDate = new Date().toJSON().slice(0, 10);
    _modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects[0].todo_library[_modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects[0].todo_library.length] = new _modules_todo_js__WEBPACK_IMPORTED_MODULE_4__.todo ('Example task', "example description...", currentDate, "green", false, `0`);
    (0,_modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.renderProj)(_modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects[0]);
    populateStorage();
} else {
    loadStorage();
    (0,_modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.renderProj)(_modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects[0]);
}




(0,_modules_sidebar_js__WEBPACK_IMPORTED_MODULE_2__.loadSidebarProjects)();

function populateStorage () {
    localStorage.setItem('projects', JSON.stringify(_modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects));
};

function loadStorage () {
    let storageArr = JSON.parse(localStorage.getItem('projects'));
    for (let i = 0; i < storageArr.length; i++) {
        _modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects[i] = new _modules_project_js__WEBPACK_IMPORTED_MODULE_3__.project(storageArr[i].name, i);
        for (let b = 0; b < storageArr[i].todo_library.length; b++) {
            _modules_mainContent_js__WEBPACK_IMPORTED_MODULE_1__.projects[i].todo_library[b] = new _modules_todo_js__WEBPACK_IMPORTED_MODULE_4__.todo(storageArr[i].todo_library[b].name, storageArr[i].todo_library[b].description, storageArr[i].todo_library[b].dueDate, storageArr[i].todo_library[b].priority, storageArr[i].todo_library[b].checked, storageArr[i].todo_library[b].id);
        };
    };
};









/***/ }),

/***/ "./src/modules/mainContent.js":
/*!************************************!*\
  !*** ./src/modules/mainContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cproj: () => (/* binding */ cproj),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   renderProj: () => (/* binding */ renderProj)
/* harmony export */ });
/* harmony import */ var _renderElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderElements.js */ "./src/modules/renderElements.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");
/* harmony import */ var _imgs_pencil_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/pencil-plus.svg */ "./src/imgs/pencil-plus.svg");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.js */ "./src/modules/sidebar.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.js */ "./src/index.js");










const domElements = [
    {element: 'h1', class: 'title', textContent: "default"},
    {element: 'div', class: 'tasksContainer'},
    {element: 'button', id: 'addTodo_button'},
    {element: 'img', src: _imgs_pencil_plus_svg__WEBPACK_IMPORTED_MODULE_2__, id: 'addTodoIcon', parent: '#addTodo_button'}
];


let edit = '';
let ih = 0;
let pro = '';
let cproj = 0;
(0,_renderElements_js__WEBPACK_IMPORTED_MODULE_0__.render)(domElements);

const projects = [

];


const submitPopup = document.querySelector('#newt');

submitPopup.addEventListener("click", (e) => {
    if (edit == true) {
        const ttitle = document.getElementById("ttitle")
        const tdescription = document.getElementById("tdescription")
        const todoDate = document.getElementById("tdueDate")
        const prio = document.getElementById("tpriority")
        const project = document.getElementById("tproject")

        if (ttitle.value === '' || ttitle.value === null) {
            return
        } else if (todoDate.value === '' || todoDate.value === null) {
            return
        };


        projects[pro.project_no].todo_library[ih].name = ttitle.value;
        projects[pro.project_no].todo_library[ih].description = tdescription.value;
        projects[pro.project_no].todo_library[ih].dueDate = todoDate.value;
        projects[pro.project_no].todo_library[ih].priority = prio.value;
        projects[pro.project_no].todo_library[ih].id = project.value;

        if (pro.project_no != project.value) {
            let tempPro = projects[pro.project_no].todo_library[ih];
            projects[pro.project_no].todo_library.splice(ih, 1);
            projects[project.value].todo_library[projects[project.value].todo_library.length] = tempPro;
        }
        pro = '';
        edit = false;
        ih = 0;
        renderProj(projects[project.value]);
        document.querySelector('.todoPopup').style = "display: none;";
    } else {
        const title = document.getElementById("ttitle")
        const description = document.getElementById("tdescription")
        const todoDate = document.getElementById("tdueDate")
        const prio = document.getElementById("tpriority")
        const project = document.getElementById("tproject")

        if (title.value === '' || title.value === null) {
            return
        } else if (todoDate.value === '' || todoDate.value === null) {
            return
        };

    
    

        projects[project.value].todo_library[projects[project.value].todo_library.length] = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.todo (title.value, description.value, todoDate.value, prio.value, false, project.value);
        renderProj(projects[project.value]);
    };
});


const openPopup = document.querySelector("#addTodo_button");

openPopup.addEventListener("click", () => {
    let currentDate = new Date().toJSON().slice(0, 10);

    const Ttitle = document.getElementById("ttitle")
    const description = document.getElementById("tdescription")
    const todoDate = document.getElementById("tdueDate")
    const prio = document.getElementById("tpriority")
    const project = document.getElementById("tproject")
    
    Ttitle.value = '';
    description.value = '';
    todoDate.value = currentDate;
    prio.value = 'yellow';
    project.innerHTML = '';

    for (let i = 0; i < projects.length; i++) {
        let p = document.createElement('option');
        p.textContent = projects[i].name;
        p.setAttribute('value', projects[i].project_no);
        project.appendChild(p);
    }

    project.value = cproj;


    todoDate.setAttribute('min', currentDate);

    document.querySelector('.todoPopup').style = "display: flex;";

    Ttitle.select();
});

const closePopup = document.querySelector('#cancelt');
closePopup.addEventListener("click", () => document.querySelector('.todoPopup').style = "display: none;")

function renderProj (proj) {

    const pageTitle = document.querySelector(".title");
    const taskCont = document.querySelector(".tasksContainer");
    cproj = proj.project_no;

    if (_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.deadlineOn) {
        (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.deadlineSort)(cproj);
    } else if (_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.urgencyOn) {
        (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.urgencySort)(cproj);
    };

    pageTitle.textContent = proj.name;
    taskCont.innerHTML = '';
    for (let i = 0; i < proj.todo_library.length; i++) {
        proj.todo_library[i].id = cproj
        proj.todo_library[i].renderTodo(i);

        let checkboxT = document.querySelector(`#_${cproj}_${i} .taskLeft > input`)

        let editT = document.querySelector(`#_${cproj}_${i} .taskEdit`);

        let delT = document.querySelector(`#_${cproj}_${i} .taskDelete`);

        checkboxT.addEventListener("change", () => {
            if (checkboxT.checked) {
                proj.todo_library[i].checked = true;
            renderProj(projects[cproj]);
            } else {
                proj.todo_library[i].checked = false;
            renderProj(projects[cproj]);
            }
        });

        delT.addEventListener('click', () => {
            projects[proj.project_no].todo_library[i].delete(i);
        })

        editT.addEventListener('click', () => {
            pro = proj
            edit = true;
            ih = i;
            const Ttitle = document.getElementById("ttitle")
            const tdescription = document.getElementById("tdescription")
            const todoDate = document.getElementById("tdueDate")
            const prio = document.getElementById("tpriority")
            const project = document.getElementById("tproject")
    
            Ttitle.value = proj.todo_library[i].name;
            tdescription.value = proj.todo_library[i].description;
            todoDate.value = proj.todo_library[i].dueDate;
            prio.value = proj.todo_library[i].priority;
            project.innerHTML = '';

            for (let i = 0; i < projects.length; i++) {
                let p = document.createElement('option');
                p.textContent = projects[i].name;
                p.setAttribute('value', projects[i].project_no);
                project.appendChild(p);
            }

            project.value = proj.todo_library[i].id;

            let currentDate = new Date().toJSON().slice(0, 10);

            todoDate.setAttribute('min', currentDate);

            document.querySelector('.todoPopup').style = "display: flex;"
        })
    }

    (0,_index_js__WEBPACK_IMPORTED_MODULE_4__.populateStorage)();

};








/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project)
/* harmony export */ });
class project {
    constructor (name, project_no) {
        this.name = name;
        this.todo_library = [];
        this.project_no = project_no;
    }

}



/***/ }),

/***/ "./src/modules/renderElements.js":
/*!***************************************!*\
  !*** ./src/modules/renderElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });

function render (domElements) {
    const page = document.querySelector('.page');

    for (let i = 0; i < domElements.length; i++) {
        domElements[i].actualElement = document.createElement(domElements[i].element);
        // ^creates "actualElement" property in object and makes its create dom element.
        if (domElements[i].class) domElements[i].actualElement.classList.add(domElements[i].class);
        // adds class to actualElement
        if (domElements[i].id) domElements[i].actualElement.id = domElements[i].id;
        // adds id to actualElement
        if (domElements[i].textContent) domElements[i].actualElement.textContent = domElements[i].textContent;
        // adds textContnet to actualElement
        if (domElements[i].type) domElements[i].actualElement.setAttribute("type", domElements[i].type);
        if (domElements[i].isChecked === true) {
            domElements[i].actualElement.checked = domElements[i].isChecked;
            domElements[0].actualElement.style = 'opacity: 30%';
        } else if (domElements[i].isChecked === false) {
            domElements[i].actualElement.checked = domElements[i].isChecked;
        }
        // adds type attribute to actualElement
        if (domElements[i].parent) {
            const parent = document.querySelector(domElements[i].parent);
            parent.appendChild(domElements[i].actualElement);
        } else page.appendChild(domElements[i].actualElement);
        // attaches actualElements to dom
        if (domElements[i].src) {
            domElements[i].actualElement.setAttribute("src", domElements[i].src)
            domElements[i].actualElement.setAttribute("width", domElements[i].width)
        };
        if (domElements[i].bgColor) {
            const prioEl = document.querySelector(`${domElements[i].parent} .priority`)
            prioEl.style = `background-color: ${domElements[i].bgColor}`;
        }
    };
};

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deadlineOn: () => (/* binding */ deadlineOn),
/* harmony export */   deadlineSort: () => (/* binding */ deadlineSort),
/* harmony export */   loadSidebarProjects: () => (/* binding */ loadSidebarProjects),
/* harmony export */   urgencyOn: () => (/* binding */ urgencyOn),
/* harmony export */   urgencySort: () => (/* binding */ urgencySort)
/* harmony export */ });
/* harmony import */ var _mainContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent.js */ "./src/modules/mainContent.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _imgs_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/delete.svg */ "./src/imgs/delete.svg");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/compareAsc.mjs");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./src/index.js");








const openProjectPopupBtn = document.querySelector(".newProject");
const closeProjPopup = document.getElementById('cancelProj');
const projectPopup = document.querySelector(".projectsPopup");
const projNameInpt = document.querySelector("#projName");
const newProjBtn = document.querySelector("#newProj");
const deadlineBtn = document.querySelector(".deadline");
const urgencyBtn = document.querySelector(".urgency");

function hasWhiteSpace(s) {
    return /\s/g.test(s);
};


function loadSidebarProjects () {
    const sideProjHtml = document.querySelector(".projects");

    sideProjHtml.innerHTML = '';

    for (let i = 0; i < _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++) {
        _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].project_no = i;
        let hoverDelete = false;
        let e = document.createElement('button');
        let t = document.createElement('div');

        t.textContent = _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].name;
        e.appendChild(t);
        e.classList.add(_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[i].name.replace(/\s/g, '_'), 'sBtn');

        if (i > 0) {
            let d = document.createElement('div');
            let img = document.createElement('img');
            img.setAttribute('src', _imgs_delete_svg__WEBPACK_IMPORTED_MODULE_2__);
            d.appendChild(img);
            d.classList = "deleteProjDiv";
            e.appendChild(d);
            img.addEventListener("click", () => {
                hoverDelete = true;
                _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(i, 1);
                loadSidebarProjects()
                ;(0,_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.renderProj)(_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[0]);
            })
        }

        e.addEventListener("click", (e) => {
            if (hoverDelete == true) {
                return
            } else {
                (0,_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.renderProj)(_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[i]);
            }
        })



        sideProjHtml.appendChild(e);
    }
};


openProjectPopupBtn.addEventListener("click", () => {
    projNameInpt.value = '';
    projectPopup.style = "display:flex;";
    projNameInpt.select();
})

closeProjPopup.addEventListener("click", () => {
    projectPopup.style = "display:none;";
})

newProjBtn.addEventListener("click", () => {
    if (projNameInpt.value === '' || projNameInpt.value === null) {
        return
    } else if (hasWhiteSpace(projNameInpt.value) === true) {

    }
    _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects.length] = new _project_js__WEBPACK_IMPORTED_MODULE_1__.project (projNameInpt.value, _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects.length);
    loadSidebarProjects();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.populateStorage)();
})


let deadlineClicked = 1;
let deadlineOn = true;
deadlineBtn.addEventListener("click", () => {
    deadlineClicked += 1;
    urgencyOn = false;
    deadlineOn = true;
    deadlineSort(_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.cproj);
    (0,_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.renderProj)(_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.cproj]);
});

let urgencyClicked = 0; 
let urgencyOn = false;
urgencyBtn.addEventListener("click", () => {
    urgencyClicked += 1;
    urgencyOn = true;
    deadlineOn = false;
    urgencySort(_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.cproj);
    (0,_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.renderProj)(_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[_mainContent_js__WEBPACK_IMPORTED_MODULE_0__.cproj]);
});

function greyTodo (projectNumber) {
    _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectNumber].todo_library.sort(function(a, b) {
        if (a.checked === b.checked) {
            return 0    
        } else if (a.checked === true) {
            return 1
        } else if (a.checked === false && b.checked === true) {
            return -1
        }
    });
};



function deadlineSort (projectNumber) {
    if ((deadlineClicked & 1) === 1) {
        _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectNumber].todo_library.sort(function (a, b) {
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.compareAsc)(a.dueDate, b.dueDate);
        });
        greyTodo(projectNumber);
    } else if ((deadlineClicked & 1) === 0) {
        _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectNumber].todo_library.sort(function (a, b) {
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.compareAsc)(b.dueDate, a.dueDate);
        });
        greyTodo(projectNumber);
    };
};

function urgencySort (projectNumber) {
    if ((urgencyClicked & 1) === 1) {
        _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectNumber].todo_library.sort(function (a, b) {
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.compareAsc)(a.dueDate, b.dueDate);
        });
        _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectNumber].todo_library.sort(function (a, b) {
            if (a.priority === b.priority) {
                return 0
            } else if (a.priority === 'red' && b.priority !== 'red') {
                return -1
            } else if (a.priority === 'yellow' && (b.priority !== 'yellow' && b.priority !== 'red')){
                return -1
            } else {
                return 1
            }
        });
        greyTodo(projectNumber);
    } else if ((urgencyClicked & 1) === 0) {
        _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectNumber].todo_library.sort(function (a, b) {
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.compareAsc)(a.dueDate, b.dueDate);
        });
        _mainContent_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectNumber].todo_library.sort(function (a, b) {
            if (a.priority === b.priority) {
                return 0
            } else if (b.priority === 'red' && a.priority !== 'red') {
                return -1
            } else if (b.priority === 'yellow' && (a.priority !== 'yellow' && a.priority !== 'red')){
                return -1
            } else {
                return 1
            };
        });
        greyTodo(projectNumber);
    };
}



/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todo: () => (/* binding */ todo)
/* harmony export */ });
/* harmony import */ var _renderElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderElements.js */ "./src/modules/renderElements.js");
/* harmony import */ var _imgs_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/delete.svg */ "./src/imgs/delete.svg");
/* harmony import */ var _imgs_pencil_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/pencil.svg */ "./src/imgs/pencil.svg");
/* harmony import */ var _mainContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainContent.js */ "./src/modules/mainContent.js");







class todo {
    constructor(name, description, dueDate, priority, checked, id) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
        this.id = id;
    }


    renderTodo(i){
        let todoId = `_${this.id}_${i}`;


        const domElements = [
            {element: 'div', class: 'task', id: `${todoId}`, parent: '.tasksContainer'},
            {element: 'div', class: 'taskLeft', parent: `#${todoId}`},
            {element: 'input', type: 'checkbox', parent: `#${todoId} .taskLeft`, isChecked: this.checked},
            {element: 'div', class: 'taskMiddle', parent: `#${todoId}`},
            {element: 'div', class: 'taskTitle', textContent: `${this.name}`, parent: `#${todoId} .taskMiddle`},
            {element: 'div', class: 'taskDescription', textContent: `${this.description}`, parent: `#${todoId} .taskMiddle`},
            {element: 'div', class: 'taskRight', parent: `#${todoId}`},
            {element: 'div', class: 'taskDate', textContent: `${this.dueDate}`, parent: `#${todoId} .taskRight`},
            {element: 'div', class: 'DltEdt', parent: `#${todoId}`},
            {element: 'button', class: 'taskEdit', parent: `#${todoId} .DltEdt`},
            {element: 'img', id: 'editIcon', src: _imgs_pencil_svg__WEBPACK_IMPORTED_MODULE_2__, width: '20px', parent: `#${todoId} .taskEdit`},
            {element: 'button', class: 'taskDelete', parent: `#${todoId} .DltEdt`},
            {element: 'img', id: 'deleteIcon', src: _imgs_delete_svg__WEBPACK_IMPORTED_MODULE_1__, width: '20px', parent: `#${todoId} .taskDelete`},
            {element: 'div', class: 'priority', bgColor: `${this.priority}`, parent: `#${todoId}`}
        ];
        (0,_renderElements_js__WEBPACK_IMPORTED_MODULE_0__.render)(domElements);
    };

    delete(i) {
        let todoId = `_${this.id}_${i}`;
        let arr = todoId.split('');
        let projId = arr.slice(1, 2).join();
        let todoNo = arr.slice(3).join();
        _mainContent_js__WEBPACK_IMPORTED_MODULE_3__.projects[projId].todo_library.splice(todoNo,1);
        (0,_mainContent_js__WEBPACK_IMPORTED_MODULE_3__.renderProj)(_mainContent_js__WEBPACK_IMPORTED_MODULE_3__.projects[projId]);
        
    }
}



/***/ }),

/***/ "./src/imgs/delete.svg":
/*!*****************************!*\
  !*** ./src/imgs/delete.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/imgs/pencil-plus.svg":
/*!**********************************!*\
  !*** ./src/imgs/pencil-plus.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "378dacad5886df7eb57d.svg";

/***/ }),

/***/ "./src/imgs/pencil.svg":
/*!*****************************!*\
  !*** ./src/imgs/pencil.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareAsc: () => (/* binding */ compareAsc),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const diff = _dateLeft.getTime() - _dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsTUFB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QUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kdWxlcy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbXBhcmVBc2MubWpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cblxuYnV0dG9uIHtcbiAgICBhbGw6IHVuc2V0O1xufVxuXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgOGZyO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9qZWN0c1BvcHVwIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDIwJTsgXG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ucHJvalBvcHVwQnRucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuLnRvZG9Qb3B1cCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlOyBcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cblxuI2VkaXRUb2RvICwgI2FkZFByb2plY3Qge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IGF1dG87XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jcHJvak5hbWUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuXG4uaW5wdFdyYXByIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5pbnB0V3JhcHIgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmlucHRXcmFwciAgaW5wdXQgLCBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuXG4ucG9wdXBCdG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBvcHVwQnRucyBidXR0b24gLCAjbmV3UHJvaiAsICNjYW5jZWxQcm9qIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkYTE1ZTtcbiAgICBwYWRkaW5nOiAwLjNyZW1cbn1cblxuLnNpZGViYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGExNWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udXNlciB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gMXJlbTtcbn1cblxuLnNpZGViYXIgPiAubGFiZWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDNyZW0gMHJlbSAxcmVtIDByZW07XG4gICAgcGFkZGluZzogMHJlbSAxLjVyZW0gMHJlbSAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmV3UHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm5ld1Byb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzZjMjU7XG59XG5cbi5zQnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMHJlbSAycmVtIDByZW0gMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBcbn1cblxuLnNCdG4gaW1nIHtcbiAgICB3aWR0aDogMXJlbTtcbn1cblxuLnNCdG4gaW1nOmhvdmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMC41cmVtO1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG4uc0J0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JjNmMyNTtcbn1cblxuLnNvcnRpbmcsIC5wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWFpbkNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzZjMjU7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wYWdlIHtcbiAgICBtaW4td2lkdGg6IDMwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoNjYsIDY2LCA2NiwgMC40NTkpO1xuICAgIG92ZXJmbG93OkhJRERFTjtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50YXNrc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IGF1dG87XG4gICAgd2lkdGg6IDcwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmM2YzI1O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4udGFza01pZGRsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50YXNrVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50YXNrUmlnaHQge1xuICAgd2lkdGg6IDI1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uRGx0RWR0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcmlvcml0eSB7XG5cbiAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jYWRkVG9kb19idXR0b24ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG91dGxpbmU6IDJweCBibGFjayBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jYWRkVG9kb0ljb24ge1xuICAgIHdpZHRoOiA1cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwi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Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuYnV0dG9uIHtcXG4gICAgYWxsOiB1bnNldDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDhmcjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0c1BvcHVwIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjAlOyBcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnByb2pQb3B1cEJ0bnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcblxcbi50b2RvUG9wdXAge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlOyBcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuI2VkaXRUb2RvICwgI2FkZFByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IGF1dG87XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvak5hbWUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5cXG4uaW5wdFdyYXByIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmlucHRXcmFwciBsYWJlbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmlucHRXcmFwciAgaW5wdXQgLCBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuXFxuLnBvcHVwQnRucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBvcHVwQnRucyBidXR0b24gLCAjbmV3UHJvaiAsICNjYW5jZWxQcm9qIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkYTE1ZTtcXG4gICAgcGFkZGluZzogMC4zcmVtXFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkYTE1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnVzZXIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuLnNpZGViYXIgPiAubGFiZWwge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbWFyZ2luOiAzcmVtIDByZW0gMXJlbSAwcmVtO1xcbiAgICBwYWRkaW5nOiAwcmVtIDEuNXJlbSAwcmVtIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubmV3UHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzZjMjU7XFxufVxcblxcbi5zQnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMHJlbSAycmVtIDByZW0gMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIFxcbn1cXG5cXG4uc0J0biBpbWcge1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLnNCdG4gaW1nOmhvdmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAwLjVyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4uc0J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzZjMjU7XFxufVxcblxcbi5zb3J0aW5nLCAucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbkNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM2YzI1O1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wYWdlIHtcXG4gICAgbWluLXdpZHRoOiAzMHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmFlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHJnYmEoNjYsIDY2LCA2NiwgMC40NTkpO1xcbiAgICBvdmVyZmxvdzpISURERU47XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRhc2tzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogYXV0bztcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JjNmMyNTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRhc2tNaWRkbGUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrVGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2tSaWdodCB7XFxuICAgd2lkdGg6IDI1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5EbHRFZHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcblxcbiAgICBtaW4td2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2FkZFRvZG9fYnV0dG9uIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG91dGxpbmU6IDJweCBibGFjayBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2FkZFRvZG9JY29uIHtcXG4gICAgd2lkdGg6IDVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJQcm9qIH0gZnJvbSAnLi9tb2R1bGVzL21haW5Db250ZW50LmpzJztcbmltcG9ydCB7IGxvYWRTaWRlYmFyUHJvamVjdHMgfSBmcm9tICcuL21vZHVsZXMvc2lkZWJhci5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL21vZHVsZXMvbWFpbkNvbnRlbnQuanMnO1xuaW1wb3J0IHsgdG9kbyB9IGZyb20gJy4vbW9kdWxlcy90b2RvLmpzJztcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgIHByb2plY3RzW3Byb2plY3RzLmxlbmd0aF0gPSBuZXcgcHJvamVjdCAoJ2RlZmF1bHQnLCBwcm9qZWN0cy5sZW5ndGgpO1xuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwgMTApO1xuICAgIHByb2plY3RzWzBdLnRvZG9fbGlicmFyeVtwcm9qZWN0c1swXS50b2RvX2xpYnJhcnkubGVuZ3RoXSA9IG5ldyB0b2RvICgnRXhhbXBsZSB0YXNrJywgXCJleGFtcGxlIGRlc2NyaXB0aW9uLi4uXCIsIGN1cnJlbnREYXRlLCBcImdyZWVuXCIsIGZhbHNlLCBgMGApO1xuICAgIHJlbmRlclByb2oocHJvamVjdHNbMF0pO1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufSBlbHNlIHtcbiAgICBsb2FkU3RvcmFnZSgpO1xuICAgIHJlbmRlclByb2oocHJvamVjdHNbMF0pO1xufVxuXG5cblxuXG5sb2FkU2lkZWJhclByb2plY3RzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UgKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59O1xuXG5mdW5jdGlvbiBsb2FkU3RvcmFnZSAoKSB7XG4gICAgbGV0IHN0b3JhZ2VBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2VBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvamVjdHNbaV0gPSBuZXcgcHJvamVjdChzdG9yYWdlQXJyW2ldLm5hbWUsIGkpO1xuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IHN0b3JhZ2VBcnJbaV0udG9kb19saWJyYXJ5Lmxlbmd0aDsgYisrKSB7XG4gICAgICAgICAgICBwcm9qZWN0c1tpXS50b2RvX2xpYnJhcnlbYl0gPSBuZXcgdG9kbyhzdG9yYWdlQXJyW2ldLnRvZG9fbGlicmFyeVtiXS5uYW1lLCBzdG9yYWdlQXJyW2ldLnRvZG9fbGlicmFyeVtiXS5kZXNjcmlwdGlvbiwgc3RvcmFnZUFycltpXS50b2RvX2xpYnJhcnlbYl0uZHVlRGF0ZSwgc3RvcmFnZUFycltpXS50b2RvX2xpYnJhcnlbYl0ucHJpb3JpdHksIHN0b3JhZ2VBcnJbaV0udG9kb19saWJyYXJ5W2JdLmNoZWNrZWQsIHN0b3JhZ2VBcnJbaV0udG9kb19saWJyYXJ5W2JdLmlkKTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9yZW5kZXJFbGVtZW50cy5qcyc7XG5pbXBvcnQgeyB0b2RvIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBhZGRUb2RvSWNvbiBmcm9tICcuLi9pbWdzL3BlbmNpbC1wbHVzLnN2Zyc7XG5pbXBvcnQgeyBkZWFkbGluZU9uIH0gZnJvbSAnLi9zaWRlYmFyLmpzJztcbmltcG9ydCB7IGRlYWRsaW5lU29ydCB9IGZyb20gJy4vc2lkZWJhci5qcyc7XG5pbXBvcnQgeyB1cmdlbmN5T24gfSBmcm9tICcuL3NpZGViYXIuanMnO1xuaW1wb3J0IHsgdXJnZW5jeVNvcnQgfSBmcm9tICcuL3NpZGViYXIuanMnO1xuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuXG5cbmNvbnN0IGRvbUVsZW1lbnRzID0gW1xuICAgIHtlbGVtZW50OiAnaDEnLCBjbGFzczogJ3RpdGxlJywgdGV4dENvbnRlbnQ6IFwiZGVmYXVsdFwifSxcbiAgICB7ZWxlbWVudDogJ2RpdicsIGNsYXNzOiAndGFza3NDb250YWluZXInfSxcbiAgICB7ZWxlbWVudDogJ2J1dHRvbicsIGlkOiAnYWRkVG9kb19idXR0b24nfSxcbiAgICB7ZWxlbWVudDogJ2ltZycsIHNyYzogYWRkVG9kb0ljb24sIGlkOiAnYWRkVG9kb0ljb24nLCBwYXJlbnQ6ICcjYWRkVG9kb19idXR0b24nfVxuXTtcblxuXG5sZXQgZWRpdCA9ICcnO1xubGV0IGloID0gMDtcbmxldCBwcm8gPSAnJztcbmV4cG9ydCBsZXQgY3Byb2ogPSAwO1xucmVuZGVyKGRvbUVsZW1lbnRzKTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuXG5dO1xuXG5cbmNvbnN0IHN1Ym1pdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3QnKTtcblxuc3VibWl0UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGVkaXQgPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB0dGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR0aXRsZVwiKVxuICAgICAgICBjb25zdCB0ZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRkZXNjcmlwdGlvblwiKVxuICAgICAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGR1ZURhdGVcIilcbiAgICAgICAgY29uc3QgcHJpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHByaW9yaXR5XCIpXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRwcm9qZWN0XCIpXG5cbiAgICAgICAgaWYgKHR0aXRsZS52YWx1ZSA9PT0gJycgfHwgdHRpdGxlLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmICh0b2RvRGF0ZS52YWx1ZSA9PT0gJycgfHwgdG9kb0RhdGUudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9O1xuXG5cbiAgICAgICAgcHJvamVjdHNbcHJvLnByb2plY3Rfbm9dLnRvZG9fbGlicmFyeVtpaF0ubmFtZSA9IHR0aXRsZS52YWx1ZTtcbiAgICAgICAgcHJvamVjdHNbcHJvLnByb2plY3Rfbm9dLnRvZG9fbGlicmFyeVtpaF0uZGVzY3JpcHRpb24gPSB0ZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHByb2plY3RzW3Byby5wcm9qZWN0X25vXS50b2RvX2xpYnJhcnlbaWhdLmR1ZURhdGUgPSB0b2RvRGF0ZS52YWx1ZTtcbiAgICAgICAgcHJvamVjdHNbcHJvLnByb2plY3Rfbm9dLnRvZG9fbGlicmFyeVtpaF0ucHJpb3JpdHkgPSBwcmlvLnZhbHVlO1xuICAgICAgICBwcm9qZWN0c1twcm8ucHJvamVjdF9ub10udG9kb19saWJyYXJ5W2loXS5pZCA9IHByb2plY3QudmFsdWU7XG5cbiAgICAgICAgaWYgKHByby5wcm9qZWN0X25vICE9IHByb2plY3QudmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB0ZW1wUHJvID0gcHJvamVjdHNbcHJvLnByb2plY3Rfbm9dLnRvZG9fbGlicmFyeVtpaF07XG4gICAgICAgICAgICBwcm9qZWN0c1twcm8ucHJvamVjdF9ub10udG9kb19saWJyYXJ5LnNwbGljZShpaCwgMSk7XG4gICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0LnZhbHVlXS50b2RvX2xpYnJhcnlbcHJvamVjdHNbcHJvamVjdC52YWx1ZV0udG9kb19saWJyYXJ5Lmxlbmd0aF0gPSB0ZW1wUHJvO1xuICAgICAgICB9XG4gICAgICAgIHBybyA9ICcnO1xuICAgICAgICBlZGl0ID0gZmFsc2U7XG4gICAgICAgIGloID0gMDtcbiAgICAgICAgcmVuZGVyUHJvaihwcm9qZWN0c1twcm9qZWN0LnZhbHVlXSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvUG9wdXAnKS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZTtcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHRpdGxlXCIpXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZGVzY3JpcHRpb25cIilcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRkdWVEYXRlXCIpXG4gICAgICAgIGNvbnN0IHByaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRwcmlvcml0eVwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cHJvamVjdFwiKVxuXG4gICAgICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gJycgfHwgdGl0bGUudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKHRvZG9EYXRlLnZhbHVlID09PSAnJyB8fCB0b2RvRGF0ZS52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH07XG5cbiAgICBcbiAgICBcblxuICAgICAgICBwcm9qZWN0c1twcm9qZWN0LnZhbHVlXS50b2RvX2xpYnJhcnlbcHJvamVjdHNbcHJvamVjdC52YWx1ZV0udG9kb19saWJyYXJ5Lmxlbmd0aF0gPSBuZXcgdG9kbyAodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCB0b2RvRGF0ZS52YWx1ZSwgcHJpby52YWx1ZSwgZmFsc2UsIHByb2plY3QudmFsdWUpO1xuICAgICAgICByZW5kZXJQcm9qKHByb2plY3RzW3Byb2plY3QudmFsdWVdKTtcbiAgICB9O1xufSk7XG5cblxuY29uc3Qgb3BlblBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUb2RvX2J1dHRvblwiKTtcblxub3BlblBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLCAxMCk7XG5cbiAgICBjb25zdCBUdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR0aXRsZVwiKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZGVzY3JpcHRpb25cIilcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGR1ZURhdGVcIilcbiAgICBjb25zdCBwcmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cHJpb3JpdHlcIilcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cHJvamVjdFwiKVxuICAgIFxuICAgIFR0aXRsZS52YWx1ZSA9ICcnO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgdG9kb0RhdGUudmFsdWUgPSBjdXJyZW50RGF0ZTtcbiAgICBwcmlvLnZhbHVlID0gJ3llbGxvdyc7XG4gICAgcHJvamVjdC5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgIHAuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3RzW2ldLnByb2plY3Rfbm8pO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHApO1xuICAgIH1cblxuICAgIHByb2plY3QudmFsdWUgPSBjcHJvajtcblxuXG4gICAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKCdtaW4nLCBjdXJyZW50RGF0ZSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1BvcHVwJykuc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7XCI7XG5cbiAgICBUdGl0bGUuc2VsZWN0KCk7XG59KTtcblxuY29uc3QgY2xvc2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWx0Jyk7XG5jbG9zZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1BvcHVwJykuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmU7XCIpXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qIChwcm9qKSB7XG5cbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgIGNvbnN0IHRhc2tDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc0NvbnRhaW5lclwiKTtcbiAgICBjcHJvaiA9IHByb2oucHJvamVjdF9ubztcblxuICAgIGlmIChkZWFkbGluZU9uKSB7XG4gICAgICAgIGRlYWRsaW5lU29ydChjcHJvaik7XG4gICAgfSBlbHNlIGlmICh1cmdlbmN5T24pIHtcbiAgICAgICAgdXJnZW5jeVNvcnQoY3Byb2opO1xuICAgIH07XG5cbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qLm5hbWU7XG4gICAgdGFza0NvbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qLnRvZG9fbGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9qLnRvZG9fbGlicmFyeVtpXS5pZCA9IGNwcm9qXG4gICAgICAgIHByb2oudG9kb19saWJyYXJ5W2ldLnJlbmRlclRvZG8oaSk7XG5cbiAgICAgICAgbGV0IGNoZWNrYm94VCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNfJHtjcHJvan1fJHtpfSAudGFza0xlZnQgPiBpbnB1dGApXG5cbiAgICAgICAgbGV0IGVkaXRUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI18ke2Nwcm9qfV8ke2l9IC50YXNrRWRpdGApO1xuXG4gICAgICAgIGxldCBkZWxUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI18ke2Nwcm9qfV8ke2l9IC50YXNrRGVsZXRlYCk7XG5cbiAgICAgICAgY2hlY2tib3hULmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94VC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvai50b2RvX2xpYnJhcnlbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICByZW5kZXJQcm9qKHByb2plY3RzW2Nwcm9qXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2oudG9kb19saWJyYXJ5W2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbmRlclByb2oocHJvamVjdHNbY3Byb2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RzW3Byb2oucHJvamVjdF9ub10udG9kb19saWJyYXJ5W2ldLmRlbGV0ZShpKTtcbiAgICAgICAgfSlcblxuICAgICAgICBlZGl0VC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBybyA9IHByb2pcbiAgICAgICAgICAgIGVkaXQgPSB0cnVlO1xuICAgICAgICAgICAgaWggPSBpO1xuICAgICAgICAgICAgY29uc3QgVHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dGl0bGVcIilcbiAgICAgICAgICAgIGNvbnN0IHRkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGR1ZURhdGVcIilcbiAgICAgICAgICAgIGNvbnN0IHByaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRwcmlvcml0eVwiKVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHByb2plY3RcIilcbiAgICBcbiAgICAgICAgICAgIFR0aXRsZS52YWx1ZSA9IHByb2oudG9kb19saWJyYXJ5W2ldLm5hbWU7XG4gICAgICAgICAgICB0ZGVzY3JpcHRpb24udmFsdWUgPSBwcm9qLnRvZG9fbGlicmFyeVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRvZG9EYXRlLnZhbHVlID0gcHJvai50b2RvX2xpYnJhcnlbaV0uZHVlRGF0ZTtcbiAgICAgICAgICAgIHByaW8udmFsdWUgPSBwcm9qLnRvZG9fbGlicmFyeVtpXS5wcmlvcml0eTtcbiAgICAgICAgICAgIHByb2plY3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICAgICAgICAgIHAuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3RzW2ldLnByb2plY3Rfbm8pO1xuICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2plY3QudmFsdWUgPSBwcm9qLnRvZG9fbGlicmFyeVtpXS5pZDtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLCAxMCk7XG5cbiAgICAgICAgICAgIHRvZG9EYXRlLnNldEF0dHJpYnV0ZSgnbWluJywgY3VycmVudERhdGUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1BvcHVwJykuc3R5bGUgPSBcImRpc3BsYXk6IGZsZXg7XCJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcblxufTtcblxuXG5cblxuXG5cbiIsImV4cG9ydCBjbGFzcyBwcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgcHJvamVjdF9ubykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvZG9fbGlicmFyeSA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3Rfbm8gPSBwcm9qZWN0X25vO1xuICAgIH1cblxufVxuXG4iLCJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIgKGRvbUVsZW1lbnRzKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRvbUVsZW1lbnRzW2ldLmFjdHVhbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRvbUVsZW1lbnRzW2ldLmVsZW1lbnQpO1xuICAgICAgICAvLyBeY3JlYXRlcyBcImFjdHVhbEVsZW1lbnRcIiBwcm9wZXJ0eSBpbiBvYmplY3QgYW5kIG1ha2VzIGl0cyBjcmVhdGUgZG9tIGVsZW1lbnQuXG4gICAgICAgIGlmIChkb21FbGVtZW50c1tpXS5jbGFzcykgZG9tRWxlbWVudHNbaV0uYWN0dWFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRvbUVsZW1lbnRzW2ldLmNsYXNzKTtcbiAgICAgICAgLy8gYWRkcyBjbGFzcyB0byBhY3R1YWxFbGVtZW50XG4gICAgICAgIGlmIChkb21FbGVtZW50c1tpXS5pZCkgZG9tRWxlbWVudHNbaV0uYWN0dWFsRWxlbWVudC5pZCA9IGRvbUVsZW1lbnRzW2ldLmlkO1xuICAgICAgICAvLyBhZGRzIGlkIHRvIGFjdHVhbEVsZW1lbnRcbiAgICAgICAgaWYgKGRvbUVsZW1lbnRzW2ldLnRleHRDb250ZW50KSBkb21FbGVtZW50c1tpXS5hY3R1YWxFbGVtZW50LnRleHRDb250ZW50ID0gZG9tRWxlbWVudHNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIC8vIGFkZHMgdGV4dENvbnRuZXQgdG8gYWN0dWFsRWxlbWVudFxuICAgICAgICBpZiAoZG9tRWxlbWVudHNbaV0udHlwZSkgZG9tRWxlbWVudHNbaV0uYWN0dWFsRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGRvbUVsZW1lbnRzW2ldLnR5cGUpO1xuICAgICAgICBpZiAoZG9tRWxlbWVudHNbaV0uaXNDaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkb21FbGVtZW50c1tpXS5hY3R1YWxFbGVtZW50LmNoZWNrZWQgPSBkb21FbGVtZW50c1tpXS5pc0NoZWNrZWQ7XG4gICAgICAgICAgICBkb21FbGVtZW50c1swXS5hY3R1YWxFbGVtZW50LnN0eWxlID0gJ29wYWNpdHk6IDMwJSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9tRWxlbWVudHNbaV0uaXNDaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZG9tRWxlbWVudHNbaV0uYWN0dWFsRWxlbWVudC5jaGVja2VkID0gZG9tRWxlbWVudHNbaV0uaXNDaGVja2VkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZHMgdHlwZSBhdHRyaWJ1dGUgdG8gYWN0dWFsRWxlbWVudFxuICAgICAgICBpZiAoZG9tRWxlbWVudHNbaV0ucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvbUVsZW1lbnRzW2ldLnBhcmVudCk7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudHNbaV0uYWN0dWFsRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBwYWdlLmFwcGVuZENoaWxkKGRvbUVsZW1lbnRzW2ldLmFjdHVhbEVsZW1lbnQpO1xuICAgICAgICAvLyBhdHRhY2hlcyBhY3R1YWxFbGVtZW50cyB0byBkb21cbiAgICAgICAgaWYgKGRvbUVsZW1lbnRzW2ldLnNyYykge1xuICAgICAgICAgICAgZG9tRWxlbWVudHNbaV0uYWN0dWFsRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZG9tRWxlbWVudHNbaV0uc3JjKVxuICAgICAgICAgICAgZG9tRWxlbWVudHNbaV0uYWN0dWFsRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBkb21FbGVtZW50c1tpXS53aWR0aClcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRvbUVsZW1lbnRzW2ldLmJnQ29sb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHByaW9FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZG9tRWxlbWVudHNbaV0ucGFyZW50fSAucHJpb3JpdHlgKVxuICAgICAgICAgICAgcHJpb0VsLnN0eWxlID0gYGJhY2tncm91bmQtY29sb3I6ICR7ZG9tRWxlbWVudHNbaV0uYmdDb2xvcn1gO1xuICAgICAgICB9XG4gICAgfTtcbn07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL21haW5Db250ZW50LmpzJztcbmltcG9ydCB7IHJlbmRlclByb2ogfSBmcm9tICcuL21haW5Db250ZW50LmpzJztcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IGRsdEljb24gZnJvbSBcIi4uL2ltZ3MvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IHsgY29tcGFyZUFzYyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgY3Byb2ogfSBmcm9tICcuL21haW5Db250ZW50LmpzJztcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuY29uc3Qgb3BlblByb2plY3RQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdFwiKTtcbmNvbnN0IGNsb3NlUHJvalBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFByb2onKTtcbmNvbnN0IHByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNQb3B1cFwiKTtcbmNvbnN0IHByb2pOYW1lSW5wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvak5hbWVcIik7XG5jb25zdCBuZXdQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdQcm9qXCIpO1xuY29uc3QgZGVhZGxpbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlYWRsaW5lXCIpO1xuY29uc3QgdXJnZW5jeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXJnZW5jeVwiKTtcblxuZnVuY3Rpb24gaGFzV2hpdGVTcGFjZShzKSB7XG4gICAgcmV0dXJuIC9cXHMvZy50ZXN0KHMpO1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNpZGViYXJQcm9qZWN0cyAoKSB7XG4gICAgY29uc3Qgc2lkZVByb2pIdG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcblxuICAgIHNpZGVQcm9qSHRtbC5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvamVjdHNbaV0ucHJvamVjdF9ubyA9IGk7XG4gICAgICAgIGxldCBob3ZlckRlbGV0ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHQudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICBlLmFwcGVuZENoaWxkKHQpO1xuICAgICAgICBlLmNsYXNzTGlzdC5hZGQocHJvamVjdHNbaV0ubmFtZS5yZXBsYWNlKC9cXHMvZywgJ18nKSwgJ3NCdG4nKTtcblxuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGxldCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkbHRJY29uKTtcbiAgICAgICAgICAgIGQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGQuY2xhc3NMaXN0ID0gXCJkZWxldGVQcm9qRGl2XCI7XG4gICAgICAgICAgICBlLmFwcGVuZENoaWxkKGQpO1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaG92ZXJEZWxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBsb2FkU2lkZWJhclByb2plY3RzKClcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qKHByb2plY3RzWzBdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGhvdmVyRGVsZXRlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvaihwcm9qZWN0c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuXG4gICAgICAgIHNpZGVQcm9qSHRtbC5hcHBlbmRDaGlsZChlKTtcbiAgICB9XG59O1xuXG5cbm9wZW5Qcm9qZWN0UG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qTmFtZUlucHQudmFsdWUgPSAnJztcbiAgICBwcm9qZWN0UG9wdXAuc3R5bGUgPSBcImRpc3BsYXk6ZmxleDtcIjtcbiAgICBwcm9qTmFtZUlucHQuc2VsZWN0KCk7XG59KVxuXG5jbG9zZVByb2pQb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RQb3B1cC5zdHlsZSA9IFwiZGlzcGxheTpub25lO1wiO1xufSlcblxubmV3UHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChwcm9qTmFtZUlucHQudmFsdWUgPT09ICcnIHx8IHByb2pOYW1lSW5wdC52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKGhhc1doaXRlU3BhY2UocHJvak5hbWVJbnB0LnZhbHVlKSA9PT0gdHJ1ZSkge1xuXG4gICAgfVxuICAgIHByb2plY3RzW3Byb2plY3RzLmxlbmd0aF0gPSBuZXcgcHJvamVjdCAocHJvak5hbWVJbnB0LnZhbHVlLCBwcm9qZWN0cy5sZW5ndGgpO1xuICAgIGxvYWRTaWRlYmFyUHJvamVjdHMoKTtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbn0pXG5cblxubGV0IGRlYWRsaW5lQ2xpY2tlZCA9IDE7XG5leHBvcnQgbGV0IGRlYWRsaW5lT24gPSB0cnVlO1xuZGVhZGxpbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWFkbGluZUNsaWNrZWQgKz0gMTtcbiAgICB1cmdlbmN5T24gPSBmYWxzZTtcbiAgICBkZWFkbGluZU9uID0gdHJ1ZTtcbiAgICBkZWFkbGluZVNvcnQoY3Byb2opO1xuICAgIHJlbmRlclByb2oocHJvamVjdHNbY3Byb2pdKTtcbn0pO1xuXG5sZXQgdXJnZW5jeUNsaWNrZWQgPSAwOyBcbmV4cG9ydCBsZXQgdXJnZW5jeU9uID0gZmFsc2U7XG51cmdlbmN5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdXJnZW5jeUNsaWNrZWQgKz0gMTtcbiAgICB1cmdlbmN5T24gPSB0cnVlO1xuICAgIGRlYWRsaW5lT24gPSBmYWxzZTtcbiAgICB1cmdlbmN5U29ydChjcHJvaik7XG4gICAgcmVuZGVyUHJvaihwcm9qZWN0c1tjcHJval0pO1xufSk7XG5cbmZ1bmN0aW9uIGdyZXlUb2RvIChwcm9qZWN0TnVtYmVyKSB7XG4gICAgcHJvamVjdHNbcHJvamVjdE51bWJlcl0udG9kb19saWJyYXJ5LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBpZiAoYS5jaGVja2VkID09PSBiLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAwICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGEuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfSBlbHNlIGlmIChhLmNoZWNrZWQgPT09IGZhbHNlICYmIGIuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZGVhZGxpbmVTb3J0IChwcm9qZWN0TnVtYmVyKSB7XG4gICAgaWYgKChkZWFkbGluZUNsaWNrZWQgJiAxKSA9PT0gMSkge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50b2RvX2xpYnJhcnkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVBc2MoYS5kdWVEYXRlLCBiLmR1ZURhdGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JleVRvZG8ocHJvamVjdE51bWJlcik7XG4gICAgfSBlbHNlIGlmICgoZGVhZGxpbmVDbGlja2VkICYgMSkgPT09IDApIHtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdE51bWJlcl0udG9kb19saWJyYXJ5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlQXNjKGIuZHVlRGF0ZSwgYS5kdWVEYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdyZXlUb2RvKHByb2plY3ROdW1iZXIpO1xuICAgIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXJnZW5jeVNvcnQgKHByb2plY3ROdW1iZXIpIHtcbiAgICBpZiAoKHVyZ2VuY3lDbGlja2VkICYgMSkgPT09IDEpIHtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdE51bWJlcl0udG9kb19saWJyYXJ5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlQXNjKGEuZHVlRGF0ZSwgYi5kdWVEYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3ROdW1iZXJdLnRvZG9fbGlicmFyeS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYS5wcmlvcml0eSA9PT0gYi5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGEucHJpb3JpdHkgPT09ICdyZWQnICYmIGIucHJpb3JpdHkgIT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGEucHJpb3JpdHkgPT09ICd5ZWxsb3cnICYmIChiLnByaW9yaXR5ICE9PSAneWVsbG93JyAmJiBiLnByaW9yaXR5ICE9PSAncmVkJykpe1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZ3JleVRvZG8ocHJvamVjdE51bWJlcik7XG4gICAgfSBlbHNlIGlmICgodXJnZW5jeUNsaWNrZWQgJiAxKSA9PT0gMCkge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0TnVtYmVyXS50b2RvX2xpYnJhcnkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVBc2MoYS5kdWVEYXRlLCBiLmR1ZURhdGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdE51bWJlcl0udG9kb19saWJyYXJ5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhLnByaW9yaXR5ID09PSBiLnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYi5wcmlvcml0eSA9PT0gJ3JlZCcgJiYgYS5wcmlvcml0eSAhPT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYi5wcmlvcml0eSA9PT0gJ3llbGxvdycgJiYgKGEucHJpb3JpdHkgIT09ICd5ZWxsb3cnICYmIGEucHJpb3JpdHkgIT09ICdyZWQnKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JleVRvZG8ocHJvamVjdE51bWJlcik7XG4gICAgfTtcbn1cblxuIiwiXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXJFbGVtZW50cy5qc1wiO1xuaW1wb3J0IGRsdEljb24gZnJvbSBcIi4uL2ltZ3MvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGVkdEljb24gZnJvbSBcIi4uL2ltZ3MvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9tYWluQ29udGVudC5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvaiB9IGZyb20gXCIuL21haW5Db250ZW50LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyB0b2RvIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrZWQsIGlkKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG5cbiAgICByZW5kZXJUb2RvKGkpe1xuICAgICAgICBsZXQgdG9kb0lkID0gYF8ke3RoaXMuaWR9XyR7aX1gO1xuXG5cbiAgICAgICAgY29uc3QgZG9tRWxlbWVudHMgPSBbXG4gICAgICAgICAgICB7ZWxlbWVudDogJ2RpdicsIGNsYXNzOiAndGFzaycsIGlkOiBgJHt0b2RvSWR9YCwgcGFyZW50OiAnLnRhc2tzQ29udGFpbmVyJ30sXG4gICAgICAgICAgICB7ZWxlbWVudDogJ2RpdicsIGNsYXNzOiAndGFza0xlZnQnLCBwYXJlbnQ6IGAjJHt0b2RvSWR9YH0sXG4gICAgICAgICAgICB7ZWxlbWVudDogJ2lucHV0JywgdHlwZTogJ2NoZWNrYm94JywgcGFyZW50OiBgIyR7dG9kb0lkfSAudGFza0xlZnRgLCBpc0NoZWNrZWQ6IHRoaXMuY2hlY2tlZH0sXG4gICAgICAgICAgICB7ZWxlbWVudDogJ2RpdicsIGNsYXNzOiAndGFza01pZGRsZScsIHBhcmVudDogYCMke3RvZG9JZH1gfSxcbiAgICAgICAgICAgIHtlbGVtZW50OiAnZGl2JywgY2xhc3M6ICd0YXNrVGl0bGUnLCB0ZXh0Q29udGVudDogYCR7dGhpcy5uYW1lfWAsIHBhcmVudDogYCMke3RvZG9JZH0gLnRhc2tNaWRkbGVgfSxcbiAgICAgICAgICAgIHtlbGVtZW50OiAnZGl2JywgY2xhc3M6ICd0YXNrRGVzY3JpcHRpb24nLCB0ZXh0Q29udGVudDogYCR7dGhpcy5kZXNjcmlwdGlvbn1gLCBwYXJlbnQ6IGAjJHt0b2RvSWR9IC50YXNrTWlkZGxlYH0sXG4gICAgICAgICAgICB7ZWxlbWVudDogJ2RpdicsIGNsYXNzOiAndGFza1JpZ2h0JywgcGFyZW50OiBgIyR7dG9kb0lkfWB9LFxuICAgICAgICAgICAge2VsZW1lbnQ6ICdkaXYnLCBjbGFzczogJ3Rhc2tEYXRlJywgdGV4dENvbnRlbnQ6IGAke3RoaXMuZHVlRGF0ZX1gLCBwYXJlbnQ6IGAjJHt0b2RvSWR9IC50YXNrUmlnaHRgfSxcbiAgICAgICAgICAgIHtlbGVtZW50OiAnZGl2JywgY2xhc3M6ICdEbHRFZHQnLCBwYXJlbnQ6IGAjJHt0b2RvSWR9YH0sXG4gICAgICAgICAgICB7ZWxlbWVudDogJ2J1dHRvbicsIGNsYXNzOiAndGFza0VkaXQnLCBwYXJlbnQ6IGAjJHt0b2RvSWR9IC5EbHRFZHRgfSxcbiAgICAgICAgICAgIHtlbGVtZW50OiAnaW1nJywgaWQ6ICdlZGl0SWNvbicsIHNyYzogZWR0SWNvbiwgd2lkdGg6ICcyMHB4JywgcGFyZW50OiBgIyR7dG9kb0lkfSAudGFza0VkaXRgfSxcbiAgICAgICAgICAgIHtlbGVtZW50OiAnYnV0dG9uJywgY2xhc3M6ICd0YXNrRGVsZXRlJywgcGFyZW50OiBgIyR7dG9kb0lkfSAuRGx0RWR0YH0sXG4gICAgICAgICAgICB7ZWxlbWVudDogJ2ltZycsIGlkOiAnZGVsZXRlSWNvbicsIHNyYzogZGx0SWNvbiwgd2lkdGg6ICcyMHB4JywgcGFyZW50OiBgIyR7dG9kb0lkfSAudGFza0RlbGV0ZWB9LFxuICAgICAgICAgICAge2VsZW1lbnQ6ICdkaXYnLCBjbGFzczogJ3ByaW9yaXR5JywgYmdDb2xvcjogYCR7dGhpcy5wcmlvcml0eX1gLCBwYXJlbnQ6IGAjJHt0b2RvSWR9YH1cbiAgICAgICAgXTtcbiAgICAgICAgcmVuZGVyKGRvbUVsZW1lbnRzKTtcbiAgICB9O1xuXG4gICAgZGVsZXRlKGkpIHtcbiAgICAgICAgbGV0IHRvZG9JZCA9IGBfJHt0aGlzLmlkfV8ke2l9YDtcbiAgICAgICAgbGV0IGFyciA9IHRvZG9JZC5zcGxpdCgnJyk7XG4gICAgICAgIGxldCBwcm9qSWQgPSBhcnIuc2xpY2UoMSwgMikuam9pbigpO1xuICAgICAgICBsZXQgdG9kb05vID0gYXJyLnNsaWNlKDMpLmpvaW4oKTtcbiAgICAgICAgcHJvamVjdHNbcHJvaklkXS50b2RvX2xpYnJhcnkuc3BsaWNlKHRvZG9ObywxKTtcbiAgICAgICAgcmVuZGVyUHJvaihwcm9qZWN0c1twcm9qSWRdKTtcbiAgICAgICAgXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKlxuICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gdG9EYXRlKGRhdGVSaWdodCk7XG5cbiAgY29uc3QgZGlmZiA9IF9kYXRlTGVmdC5nZXRUaW1lKCkgLSBfZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmVBc2M7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==