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

eval("// okay so first, we need a key down handler that tracks\n// 1. the audio mapped to each key\n// 2. the animation mapped to each key\n// 3. it exports it to a separate array or object that keeps track of\n// which key pressed and duration between keystrokes \n// 4. if held down, it continually restarts playback, like a little stutter function (auto-repeat)\n// \n\n// }\nwindow.addEventListener('load', function () {\n  const canvas = document.querySelector('canvas');\n  const context = canvas.getContext('2d');\n  context.fillStyle = '#95c88c';\n  context.fillRect(0, 0, 1920, 1080);\n  class keyDownHandler {\n    constructor() {\n      this.keys = [];\n      window.addEventListener('keydown', function (e) {\n        e.preventDefault();\n        e.stopImmediatePropagation();\n        const audioContext = new AudioContext();\n        e.stopImmediatePropagation();\n        const audioElement = document.querySelector('#sound-1');\n        console.log(audioElement instanceof HTMLAudioElement);\n        const track = audioContext.createMediaElementSource(audioElement);\n        console.log('im dying');\n        track.connect(audioContext.destination);\n        console.log(e.code);\n        switch (e.code) {\n          case \"KeyQ\":\n            audioElement.play();\n            break;\n          case \"KeyW\":\n            break;\n          case \"KeyE\":\n            break;\n          case \"KeyR\":\n            break;\n          case \"KeyT\":\n            break;\n          case \"KeyY\":\n            break;\n          case \"KeyU\":\n            break;\n          case \"KeyI\":\n            break;\n          case \"KeyO\":\n            break;\n          case \"KeyP\":\n            break;\n          case \"KeyA\":\n            break;\n          case \"KeyS\":\n            break;\n          case \"KeyD\":\n            break;\n          case \"KeyF\":\n            break;\n          case \"KeyG\":\n            break;\n          case \"KeyH\":\n            break;\n          case \"KeyJ\":\n            break;\n          case \"KeyK\":\n            break;\n          case \"KeyL\":\n            break;\n          case \"KeyZ\":\n            break;\n          case \"KeyX\":\n            break;\n          case \"KeyC\":\n            break;\n          case \"KeyV\":\n            break;\n          case \"KeyB\":\n            break;\n          case \"KeyN\":\n            break;\n          case \"KeyM\":\n            break;\n        }\n      });\n    }\n  }\n  ;\n  const keyDownInput = new keyDownHandler();\n}); //outer Window Event Listener bounds\n\n// const recorded = {} // this will have the various keys and their attr, like time/order(?)\n\n// // second, key up handler (?)\n// // not sure if i'd need a key up...\n\n// // third, recording handler\n// // includes play, pause, stop, and of course record functions\n\n// // fourth, reverb functions//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGV4dCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImtleURvd25IYW5kbGVyIiwiY29uc3RydWN0b3IiLCJrZXlzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0IiwiYXVkaW9FbGVtZW50IiwiY29uc29sZSIsImxvZyIsIkhUTUxBdWRpb0VsZW1lbnQiLCJ0cmFjayIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImNvZGUiLCJwbGF5Iiwia2V5RG93bklucHV0Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIG9rYXkgc28gZmlyc3QsIHdlIG5lZWQgYSBrZXkgZG93biBoYW5kbGVyIHRoYXQgdHJhY2tzXG4vLyAxLiB0aGUgYXVkaW8gbWFwcGVkIHRvIGVhY2gga2V5XG4vLyAyLiB0aGUgYW5pbWF0aW9uIG1hcHBlZCB0byBlYWNoIGtleVxuLy8gMy4gaXQgZXhwb3J0cyBpdCB0byBhIHNlcGFyYXRlIGFycmF5IG9yIG9iamVjdCB0aGF0IGtlZXBzIHRyYWNrIG9mXG4vLyB3aGljaCBrZXkgcHJlc3NlZCBhbmQgZHVyYXRpb24gYmV0d2VlbiBrZXlzdHJva2VzIFxuLy8gNC4gaWYgaGVsZCBkb3duLCBpdCBjb250aW51YWxseSByZXN0YXJ0cyBwbGF5YmFjaywgbGlrZSBhIGxpdHRsZSBzdHV0dGVyIGZ1bmN0aW9uIChhdXRvLXJlcGVhdClcbi8vIFxuXG4gIFxuLy8gfVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29udGV4dC5maWxsU3R5bGUgPSAnIzk1Yzg4YydcbiAgY29udGV4dC5maWxsUmVjdCgwLCAwLCAxOTIwLCAxMDgwKVxuXG5cbmNsYXNzIGtleURvd25IYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMua2V5cyA9IFtdO1xuXG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKVxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IGF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZC0xJylcbiAgICAgICAgY29uc29sZS5sb2coYXVkaW9FbGVtZW50IGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudClcbiAgICAgICAgY29uc3QgdHJhY2sgPSBhdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvRWxlbWVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbSBkeWluZycpXG4gICAgICAgIHRyYWNrLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGUuY29kZSlcbiAgICAgICAgc3dpdGNoKGUuY29kZSkge1xuICAgICAgICBjYXNlIFwiS2V5UVwiOlxuICAgICAgIFxuICAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgY2FzZSBcIktleVdcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUVcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVJcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVRcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVlcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVVcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUlcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleU9cIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVBcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUFcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleURcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUZcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUdcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUhcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUpcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUtcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUxcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVpcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVhcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUNcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVZcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUJcIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleU5cIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleU1cIjpcbiAgICAgICAgYnJlYWs7XG4gICAgfX0pO1xufX07XG5cblxuXG5cblxuXG5jb25zdCBrZXlEb3duSW5wdXQgPSBuZXcga2V5RG93bkhhbmRsZXJcblxufSk7IC8vb3V0ZXIgV2luZG93IEV2ZW50IExpc3RlbmVyIGJvdW5kc1xuICAgICAgXG5cblxuLy8gY29uc3QgcmVjb3JkZWQgPSB7fSAvLyB0aGlzIHdpbGwgaGF2ZSB0aGUgdmFyaW91cyBrZXlzIGFuZCB0aGVpciBhdHRyLCBsaWtlIHRpbWUvb3JkZXIoPylcblxuXG4vLyAvLyBzZWNvbmQsIGtleSB1cCBoYW5kbGVyICg/KVxuLy8gLy8gbm90IHN1cmUgaWYgaSdkIG5lZWQgYSBrZXkgdXAuLi5cblxuXG4vLyAvLyB0aGlyZCwgcmVjb3JkaW5nIGhhbmRsZXJcbi8vIC8vIGluY2x1ZGVzIHBsYXksIHBhdXNlLCBzdG9wLCBhbmQgb2YgY291cnNlIHJlY29yZCBmdW5jdGlvbnNcblxuLy8gLy8gZm91cnRoLCByZXZlcmIgZnVuY3Rpb25zXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0FBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVc7RUFDekMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDL0MsTUFBTUMsT0FBTyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDdkNELE9BQU8sQ0FBQ0UsU0FBUyxHQUFHLFNBQVM7RUFDN0JGLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztFQUdwQyxNQUFNQyxjQUFjLENBQUM7SUFDakJDLFdBQVcsR0FBRTtNQUNiLElBQUksQ0FBQ0MsSUFBSSxHQUFHLEVBQUU7TUFHZFgsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBU1csQ0FBQyxFQUFDO1FBQzFDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQkQsQ0FBQyxDQUFDRSx3QkFBd0IsRUFBRTtRQUU1QixNQUFNQyxZQUFZLEdBQUcsSUFBSUMsWUFBWSxFQUFFO1FBQ3ZDSixDQUFDLENBQUNFLHdCQUF3QixFQUFFO1FBQzVCLE1BQU1HLFlBQVksR0FBR2QsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ3ZEYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsWUFBWSxZQUFZRyxnQkFBZ0IsQ0FBQztRQUNyRCxNQUFNQyxLQUFLLEdBQUdOLFlBQVksQ0FBQ08sd0JBQXdCLENBQUNMLFlBQVksQ0FBQztRQUNqRUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ3ZCRSxLQUFLLENBQUNFLE9BQU8sQ0FBQ1IsWUFBWSxDQUFDUyxXQUFXLENBQUM7UUFFdkNOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxDQUFDLENBQUNhLElBQUksQ0FBQztRQUNuQixRQUFPYixDQUFDLENBQUNhLElBQUk7VUFDYixLQUFLLE1BQU07WUFFWFIsWUFBWSxDQUFDUyxJQUFJLEVBQUU7WUFDbkI7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtVQUVBLEtBQUssTUFBTTtZQUNYO1VBRUEsS0FBSyxNQUFNO1lBQ1g7VUFFQSxLQUFLLE1BQU07WUFDWDtRQUFNO01BQ1QsQ0FBQyxDQUFDO0lBQ1A7RUFBQztFQUFDO0VBT0YsTUFBTUMsWUFBWSxHQUFHLElBQUlsQixjQUFjO0FBRXZDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBSUo7O0FBR0E7QUFDQTs7QUFHQTtBQUNBOztBQUVBIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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