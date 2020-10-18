/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/contentScript.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.css":
/*!*************************!*\
  !*** ./src/content.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/contentScript.js":
/*!******************************!*\
  !*** ./src/contentScript.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_content_content_bright_ness_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/content/content_bright_ness_logic */ "./src/logic/content/content_bright_ness_logic.js");

// 处理夜间模式以及可视化交互逻辑



// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

// Log `title` of current active web page

// Communicate with background file by sending a message


/***/ }),

/***/ "./src/logic/content/build_main_btn.js":
/*!*********************************************!*\
  !*** ./src/logic/content/build_main_btn.js ***!
  \*********************************************/
/*! exports provided: moveBar, innerMoveBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBar", function() { return moveBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerMoveBar", function() { return innerMoveBar; });
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/create_element */ "./src/utils/create_element.js");

/**
 * 构建主按钮
 */

// const mainBtn = h('div', {
//   style: 'z-index:9999999!important;',
//   class: 'main__btn__'
// },
//   [
//     h('div', { class: 'inner_box' }, [
//       h('div', { class: 'in_the_inner_box_left' }, [
//         h('div', { class: 'move_bar' }, [
//           h('div', { class: 'inner_move_bar' })
//         ])
//       ]),
//       h('div', { class: 'in_the_inner_box_right' })
//     ])
//   ]
// )
// document.querySelector('body[__is_]').appendChild(mainBtn)

document.querySelector('body[__is_]').appendChild(

  Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    style: 'z-index:9999999!important;',
    class: 'main__btn__'
  },
    [
      Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'inner_box' }, [
        Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'in_the_inner_box_left' }, [
          Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'move_bar' }, [
            Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'inner_move_bar' })
          ])
        ]),
        Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', { class: 'in_the_inner_box_right' })
      ])
    ]
  )

)

const moveBar = document.querySelector('.main__btn__ .inner_box .in_the_inner_box_left .move_bar')
const innerMoveBar = document.querySelector('.main__btn__ .inner_box .in_the_inner_box_left .move_bar .inner_move_bar')


/***/ }),

/***/ "./src/logic/content/content_bright_ness_logic.js":
/*!********************************************************!*\
  !*** ./src/logic/content/content_bright_ness_logic.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content.css */ "./src/content.css");
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _init_brightness_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init_brightness_bar */ "./src/logic/content/init_brightness_bar.js");
/* harmony import */ var _build_main_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./build_main_btn */ "./src/logic/content/build_main_btn.js");




console.clear()

let request = null
let saveY = 0

_build_main_btn__WEBPACK_IMPORTED_MODULE_2__["moveBar"].addEventListener('mousemove', e => {
  e.stopPropagation()
  request !== null && cancelAnimationFrame(request)
  request = requestAnimationFrame(_ => {
    if (saveY !== e.offsetY) {
      const height = +getComputedStyle(_build_main_btn__WEBPACK_IMPORTED_MODULE_2__["moveBar"], null).height.replace(/\D/g, '')
      let value = `${e.offsetY / height}`.replace(/(\d)(\.\d)\d*$/g, '$1$2')
      console.info(height, e.offsetY, saveY, value)
      _init_brightness_bar__WEBPACK_IMPORTED_MODULE_1__["default"].SEND_SET_BRIGHT_NESS({ isSave: false, value })
      _build_main_btn__WEBPACK_IMPORTED_MODULE_2__["innerMoveBar"].style.height = `${e.offsetY}px`
      saveY = e.offsetY
    }
    request = null
  })
}, false)


/***/ }),

/***/ "./src/logic/content/init_brightness_bar.js":
/*!**************************************************!*\
  !*** ./src/logic/content/init_brightness_bar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/create_element */ "./src/utils/create_element.js");


/**
 * 遮罩层初始化逻辑
 */
let request = null
const styleText = _ => (
  Object.entries({
    position: 'fixed',
    top: '0',
    left: '0',
    'pointer-events': 'none',
    'z-index': '9999999',
    margin: '0',
    padding: '0',
    display: 'block'
  }).reduce((prev, [k, v]) => (prev += `${k}:${v}!important;`, prev),
    `width:${document.documentElement.clientWidth}px!important;
    height:${document.documentElement.clientHeight}px!important;
    background:rgba(0,0,0,${_ === undefined ? brightness : _});`
  )
)
// 缓存，以供窗口尺寸变化时使用
let brightness = 0

const SEND_SET_BRIGHT_NESS = ({
  isSave, value
}) => {
  // isSave 为真时存入后台缓存中
  console.info('SEND_SET_BRIGHT_NESS')
  if (isSave) {
    chrome.runtime.sendMessage({
      type: 'GET_BRIGHT_NESS'
    }, response => {
      console.log(response.message)
      brightness = response.message
      dom.setAttribute('style', styleText())
    })
  } else {
    brightness = value
    dom.setAttribute('style', styleText(value))
  }
}

SEND_SET_BRIGHT_NESS({ isSave: true })

// 先加载到页面上
const dom = Object(_utils_create_element__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
  style: styleText()
})

// 对 body 的临时引用
let body = document.createElement('body')
body.setAttribute('style', `position:absolute!important;
top:0!important;left:0!important;margin:0!important;padding:0!important;`)
body.setAttribute('__is_', true)
document.documentElement.appendChild(body)
body.appendChild(dom)
body = null

window.addEventListener('resize', _ => {
  request !== null && cancelAnimationFrame(request)
  // 强制 60 Hz
  request = requestAnimationFrame(_ => {
    dom.setAttribute('style', styleText())
    request = null
  })
}, false)

/* harmony default export */ __webpack_exports__["default"] = ({
  SEND_SET_BRIGHT_NESS
});

/***/ }),

/***/ "./src/utils/create_element.js":
/*!*************************************!*\
  !*** ./src/utils/create_element.js ***!
  \*************************************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_object */ "./src/utils/is_object.js");
/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is_array */ "./src/utils/is_array.js");
/**
 * h(
 *  'div',
 *  {
 *   class: String,
 *   id: String,
 *   style: String
 *   ...
 *  },
 *  [
 *   h(...),
 *   'text'
 *  ]
 * )
 */



const h = (key, attr, children) => {
  if (
    typeof key !== 'string' ||
    !Object(_is_object__WEBPACK_IMPORTED_MODULE_0__["isObj"])(attr) ||
    (!Object(_is_array__WEBPACK_IMPORTED_MODULE_1__["isArr"])(children) && children !== undefined)
  ) {
    throw new Error('arguments error')
  }
  return new Proxy({}, {
    get () {
      const el = document.createElement(key)
      Object.entries(attr).forEach(([k, v]) => typeof v === 'string' && el.setAttribute(k, v))
      children && children.forEach(_ => el.appendChild(
        typeof _ === 'string'
          ? document.createTextNode(_)
          : _
      ))
      return el
    }
  })[key]
}


/***/ }),

/***/ "./src/utils/is_array.js":
/*!*******************************!*\
  !*** ./src/utils/is_array.js ***!
  \*******************************/
/*! exports provided: isArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArr", function() { return isArr; });
const isArr = _ => Object.prototype.toString.call(_).slice(8, -1) === 'Array'


/***/ }),

/***/ "./src/utils/is_object.js":
/*!********************************!*\
  !*** ./src/utils/is_object.js ***!
  \********************************/
/*! exports provided: isObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObj", function() { return isObj; });
const isObj = _ => Object.prototype.toString.call(_).slice(8, -1) === 'Object'


/***/ })

/******/ });
//# sourceMappingURL=contentScript.js.map