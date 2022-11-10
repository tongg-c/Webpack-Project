/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateHome)\n/* harmony export */ });\nfunction generateHome() {\n\tconst main = document.createElement('main')\n\tmain.classList.add('home')\n\tconst h1 = document.createElement('h1')\n\th1.textContent = 'Ramen.'\n\th1.classList.add('animate__animated', 'animate__fadeInLeft')\n\tmain.appendChild(h1)\n\treturn main\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nconst homeButton = document.querySelector('.home-button')\nconst menuButton = document.querySelector('.menu-button')\nconst content = document.getElementById('content')\n\nfunction generatePage(currentPage) {\n\thomeButton.classList.add('active')\n\tcontent.innerHTML = ''\n\tif (currentPage === 'home') content.append((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n\telse content.append((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n}\n\nfunction setActive(clickedButton) {\n\tif (homeButton.classList.contains('active'))\n\t\thomeButton.classList.remove('active')\n\tif (menuButton.classList.contains('active'))\n\t\tmenuButton.classList.remove('active')\n\tclickedButton.classList.add('active')\n}\n\nhomeButton.addEventListener('click', e => {\n\tif (homeButton.classList.contains('active')) return\n\telse {\n\t\tgeneratePage('home')\n\t\tsetActive(e.target)\n\t}\n})\n\nmenuButton.addEventListener('click', e => {\n\tif (menuButton.classList.contains('active')) return\n\telse {\n\t\tgeneratePage('menu')\n\t\tsetActive(e.target)\n\t}\n})\n\ngeneratePage('home')\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateMenu)\n/* harmony export */ });\nfunction generateMenuItem(source, description = 'blank', price = 0) {\n\tconst menuItem = document.createElement('div')\n\tmenuItem.classList.add('food-item', 'animate__animated', 'animate__fadeIn')\n\n\tconst img = document.createElement('img')\n\timg.src = source\n\n\tconst descriptionWrapper = document.createElement('div')\n\tdescriptionWrapper.classList.add('description-wrapper')\n\n\tconst descriptionP = document.createElement('p')\n\tdescriptionP.textContent = description\n\n\tconst priceP = document.createElement('p')\n\tpriceP.textContent = `$${price}`\n\n\tdescriptionWrapper.append(descriptionP, priceP)\n\n\tmenuItem.append(img, descriptionWrapper)\n\treturn menuItem\n}\n\nfunction generateMenu() {\n\tconst main = document.createElement('main')\n\tmain.classList.add('menu')\n\n\tconst ramen1 = generateMenuItem(\n\t\t'../dist/imgs/ramen-1.png',\n\t\t'Filler text describing dish',\n\t\t15\n\t)\n\n\tconst ramen2 = generateMenuItem(\n\t\t'../dist/imgs/ramen-2.png',\n\t\t'Filler text describing dish',\n\t\t14\n\t)\n\n\tconst ramen3 = generateMenuItem(\n\t\t'../dist/imgs/ramen-3.png',\n\t\t'Filler text describing dish',\n\t\t16\n\t)\n\n\tconst ramen4 = generateMenuItem(\n\t\t'../dist/imgs/ramen-4.png',\n\t\t'Filler text describing dish',\n\t\t15\n\t)\n\n\tmain.append(ramen1, ramen2, ramen3, ramen4)\n\n\treturn main\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;