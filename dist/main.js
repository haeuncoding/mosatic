/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// okay so first, we need a key down handler that tracks\n// 1. the audio mapped to each key\n// 2. the animation mapped to each key\n// 3. it exports it to a separate array or object that keeps track of\n// which key pressed and duration between keystrokes \n// 4. if held down, it continually restarts playback, like a little stutter function (auto-repeat)\n// \n\n// }\n// import keyDownHandler from './scripts/key_down_handler.js'\n\nwindow.addEventListener('load', function () {\n  const canvas = document.querySelector('canvas');\n  const context = canvas.getContext('2d');\n  context.fillStyle = '#95c88c';\n  context.fillRect(0, 0, 1920, 1080);\n  class KeyDownHandler {\n    constructor() {\n      this.keys = [];\n      // this.addSoundbank()\n      this.addListeners();\n    }\n    addListeners() {\n      window.addEventListener('keydown', e => {\n        e.preventDefault();\n        e.stopImmediatePropagation();\n        console.log(e.code);\n        switch (e.code) {\n          case \"KeyQ\":\n            qSound.play();\n            break;\n          case \"KeyW\":\n            break;\n          case \"KeyE\":\n            break;\n          case \"KeyR\":\n            break;\n          case \"KeyT\":\n            break;\n          case \"KeyY\":\n            break;\n          case \"KeyU\":\n            break;\n          case \"KeyI\":\n            break;\n          case \"KeyO\":\n            break;\n          case \"KeyP\":\n            break;\n          case \"KeyA\":\n            break;\n          case \"KeyS\":\n            break;\n          case \"KeyD\":\n            break;\n          case \"KeyF\":\n            break;\n          case \"KeyG\":\n            break;\n          case \"KeyH\":\n            break;\n          case \"KeyJ\":\n            break;\n          case \"KeyK\":\n            break;\n          case \"KeyL\":\n            break;\n          case \"KeyZ\":\n            break;\n          case \"KeyX\":\n            break;\n          case \"KeyC\":\n            break;\n          case \"KeyV\":\n            break;\n          case \"KeyB\":\n            break;\n          case \"KeyN\":\n            break;\n          case \"KeyM\":\n            break;\n        }\n      });\n    }\n  }\n  ;\n  const keyDownInp = new KeyDownHandler();\n}); //outer Window Event Listener bounds\n\n// const recorded = {} // this will have the various keys and their attr, like time/order(?)\n\n// // second, key up handler (?)\n// // not sure if i'd need a key up...\n\n// // third, recording handler\n// // includes play, pause, stop, and of course record functions\n\n// // fourth, reverb functions//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGV4dCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIktleURvd25IYW5kbGVyIiwiY29uc3RydWN0b3IiLCJrZXlzIiwiYWRkTGlzdGVuZXJzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJxU291bmQiLCJwbGF5Iiwia2V5RG93bklucCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBva2F5IHNvIGZpcnN0LCB3ZSBuZWVkIGEga2V5IGRvd24gaGFuZGxlciB0aGF0IHRyYWNrc1xuLy8gMS4gdGhlIGF1ZGlvIG1hcHBlZCB0byBlYWNoIGtleVxuLy8gMi4gdGhlIGFuaW1hdGlvbiBtYXBwZWQgdG8gZWFjaCBrZXlcbi8vIDMuIGl0IGV4cG9ydHMgaXQgdG8gYSBzZXBhcmF0ZSBhcnJheSBvciBvYmplY3QgdGhhdCBrZWVwcyB0cmFjayBvZlxuLy8gd2hpY2gga2V5IHByZXNzZWQgYW5kIGR1cmF0aW9uIGJldHdlZW4ga2V5c3Ryb2tlcyBcbi8vIDQuIGlmIGhlbGQgZG93biwgaXQgY29udGludWFsbHkgcmVzdGFydHMgcGxheWJhY2ssIGxpa2UgYSBsaXR0bGUgc3R1dHRlciBmdW5jdGlvbiAoYXV0by1yZXBlYXQpXG4vLyBcblxuICBcbi8vIH1cbi8vIGltcG9ydCBrZXlEb3duSGFuZGxlciBmcm9tICcuL3NjcmlwdHMva2V5X2Rvd25faGFuZGxlci5qcydcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjOTVjODhjJ1xuICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIDE5MjAsIDEwODApXG5cbiAgXG5cbiAgY2xhc3MgS2V5RG93bkhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICAvLyB0aGlzLmFkZFNvdW5kYmFuaygpXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKClcbiAgICB9XG5cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSAgXG4gICAgICAgICAgY29uc29sZS5sb2coZS5jb2RlKVxuXG5cbiAgICAgICAgICBzd2l0Y2goZS5jb2RlKSB7XG4gICAgICAgICAgY2FzZSBcIktleVFcIjpcbiAgICAgICAgICAgIHFTb3VuZC5wbGF5KClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBcbiAgICAgICAgICBjYXNlIFwiS2V5V1wiOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIktleUVcIjpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJLZXlSXCI6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiS2V5VFwiOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIktleVlcIjpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJLZXlVXCI6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiS2V5SVwiOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIktleU9cIjpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJLZXlQXCI6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiS2V5QVwiOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJLZXlEXCI6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiS2V5RlwiOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIktleUdcIjpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJLZXlIXCI6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiS2V5SlwiOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIktleUtcIjpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJLZXlMXCI6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiS2V5WlwiOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIktleVhcIjpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJLZXlDXCI6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiS2V5VlwiOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIktleUJcIjpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJLZXlOXCI6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiS2V5TVwiOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pfTtcbiAgfTtcblxuICBjb25zdCBrZXlEb3duSW5wID0gbmV3IEtleURvd25IYW5kbGVyXG5cbn0pOyAvL291dGVyIFdpbmRvdyBFdmVudCBMaXN0ZW5lciBib3VuZHNcbiAgICAgIFxuXG5cbi8vIGNvbnN0IHJlY29yZGVkID0ge30gLy8gdGhpcyB3aWxsIGhhdmUgdGhlIHZhcmlvdXMga2V5cyBhbmQgdGhlaXIgYXR0ciwgbGlrZSB0aW1lL29yZGVyKD8pXG5cblxuLy8gLy8gc2Vjb25kLCBrZXkgdXAgaGFuZGxlciAoPylcbi8vIC8vIG5vdCBzdXJlIGlmIGknZCBuZWVkIGEga2V5IHVwLi4uXG5cblxuLy8gLy8gdGhpcmQsIHJlY29yZGluZyBoYW5kbGVyXG4vLyAvLyBpbmNsdWRlcyBwbGF5LCBwYXVzZSwgc3RvcCwgYW5kIG9mIGNvdXJzZSByZWNvcmQgZnVuY3Rpb25zXG5cbi8vIC8vIGZvdXJ0aCwgcmV2ZXJiIGZ1bmN0aW9uc1xuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUdBQSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFXO0VBQ3pDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQy9DLE1BQU1DLE9BQU8sR0FBR0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3ZDRCxPQUFPLENBQUNFLFNBQVMsR0FBRyxTQUFTO0VBQzdCRixPQUFPLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7RUFJbEMsTUFBTUMsY0FBYyxDQUFDO0lBQ25CQyxXQUFXLEdBQUU7TUFDVCxJQUFJLENBQUNDLElBQUksR0FBRyxFQUFFO01BQ2Q7TUFDQSxJQUFJLENBQUNDLFlBQVksRUFBRTtJQUN2QjtJQUdBQSxZQUFZLEdBQUk7TUFFZFosTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVZLENBQUMsSUFBSTtRQUNwQ0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7UUFDbEJELENBQUMsQ0FBQ0Usd0JBQXdCLEVBQUU7UUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixDQUFDLENBQUNLLElBQUksQ0FBQztRQUduQixRQUFPTCxDQUFDLENBQUNLLElBQUk7VUFDYixLQUFLLE1BQU07WUFDVEMsTUFBTSxDQUFDQyxJQUFJLEVBQUU7WUFDZjtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1FBQU07TUFFWixDQUFDLENBQUM7SUFBQTtFQUNKO0VBQUM7RUFFRCxNQUFNQyxVQUFVLEdBQUcsSUFBSVosY0FBYztBQUV2QyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUlKOztBQUdBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQSJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;