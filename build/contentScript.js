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

/***/ "./src/contentScript.js":
/*!******************************!*\
  !*** ./src/contentScript.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createElement */ "./src/utils/createElement.js");


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

chrome.runtime.sendMessage(
  {
    type: 'GET_BRIGHT_NESS'
  },
  response => {
    console.log(response.message)
  }
)

// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'COUNT') {
    console.log(`Current count is ${request.payload.count}`);
  }

  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  sendResponse({});
  return true;
});

// ----------

console.clear()


console.info(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["h"], typeof _utils_createElement__WEBPACK_IMPORTED_MODULE_0__["h"])
let dom = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
  style: 'background:red;',
  class: '_____huajixxx'
}, [
  '滑稽', Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__["h"])('span', {}, ['滑稽2s'])
])

document.body.appendChild(dom)


/***/ }),

/***/ "./src/utils/createElement.js":
/*!************************************!*\
  !*** ./src/utils/createElement.js ***!
  \************************************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var _isObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObj */ "./src/utils/isObj.js");
/* harmony import */ var _isArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArr */ "./src/utils/isArr.js");
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
    !Object(_isObj__WEBPACK_IMPORTED_MODULE_0__["isObj"])(attr) ||
    (!Object(_isArr__WEBPACK_IMPORTED_MODULE_1__["isArr"])(children) && children !== undefined)
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

/***/ "./src/utils/isArr.js":
/*!****************************!*\
  !*** ./src/utils/isArr.js ***!
  \****************************/
/*! exports provided: isArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArr", function() { return isArr; });
const isArr = _ => Object.prototype.toString.call(_).slice(8, -1) === 'Array'


/***/ }),

/***/ "./src/utils/isObj.js":
/*!****************************!*\
  !*** ./src/utils/isObj.js ***!
  \****************************/
/*! exports provided: isObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObj", function() { return isObj; });
const isObj = _ => Object.prototype.toString.call(_).slice(8, -1) === 'Object'


/***/ })

/******/ });
//# sourceMappingURL=contentScript.js.map