module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var linkStyle = {
  marginRight: 15
};

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-570690956" + " " + "footer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "570690956",
    css: ".footer.jsx-570690956{position:absolute;bottom:-40px;bottom:0px;background-color:white;margin-top:40px;box-sizing:border-box;max-width:100%;width:100%;margin:0 auto;padding:15px;font-size:16px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.footer.jsx-570690956 p.jsx-570690956{font-size:12px;}@media screen and (min-width:768px){.footer.jsx-570690956{padding:15px;border:1px solid #DDD;}}@media screen and (min-width:920px){.footer.jsx-570690956 p.jsx-570690956{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0IsQUFHNkIsQUFnQkgsQUFJQSxBQU1FLGFBTE8sRUFKMUIsQUFVRSxHQTFCYSxhQUNGLElBb0JYLE9BbkJ1Qix1QkFDUCxnQkFDTSxzQkFDUCxlQUNKLFdBQ0csY0FDRCxhQUNFLGVBQ3dDLHVEQUNILG9EQUNMLCtDQUNqRCIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL3NuYXBweS9tYXN0ZXIvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcblx0bWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC00MHB4O1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgICAuZm9vdGVyIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgXHQ8cD5Db3B5cmlnaHQgSm9sdCAyMDE4LiBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cblxuICAgIDwvZGl2PlxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/components/Footer.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-570690956"
  }, "Copyright Jolt 2018. All Rights Reserved."));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var linkStyle = {
  default: {
    marginRight: 35,
    textDecoration: 'none'
  },
  bold: {
    marginRight: 15,
    fontWeight: 700,
    textDecoration: 'none',
    color: '#3D4146'
  }
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-681337059" + " " + "header-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "681337059",
    css: ".header-container.jsx-681337059{box-sizing:border-box;margin:0;width:100%;min-height:80px;margin:0 auto;background-color:#2CACFB;background-color:#FFF;color:white;padding:20px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.header-container.jsx-681337059 a.jsx-681337059{color:white;color:#2CACFB;}.logo-branding.jsx-681337059{color:#FB5C64;font-size:36px;font-weight:bold;float:left;}.main-menu.jsx-681337059{text-align:center;display:inline-block;width:100%;margin-top:20px;}.main-menu.jsx-681337059 a.jsx-681337059{color:#a9a9a9;}@media screen and (min-width:565px){.main-menu.jsx-681337059{text-align:right;display:inline-block;width:50%;float:right;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmMsQUFHOEIsQUFnQlYsQUFJRCxBQU9NLEFBTU4sQUFPRyxZQXZCSCxFQUtJLEFBWW5CLEdBT3VCLENBYkUsSUExQlosSUFnQlYsR0FLa0IsRUFwQk4sT0F1Q0osQ0FiRyxHQXpCTSxJQW9CTCxFQW9CRCxFQWRNLE9BTGpCLENBcEJlLEVBd0NELE1BZGQsTUF6QjBCLElBd0M1QixxQkF2Q3lCLHNCQUNWLFlBQ0MsYUFFdUMsdURBQ0gsb0RBQ0wsK0NBQzdDIiwiZmlsZSI6Ii9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuXHRkZWZhdWx0OiB7XG5cdFx0bWFyZ2luUmlnaHQ6IDM1LFxuXHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZSdcblx0fSxcblx0Ym9sZDoge1xuXHRcdG1hcmdpblJpZ2h0OiAxNSxcblx0XHRmb250V2VpZ2h0OiA3MDAsXG5cdFx0dGV4dERlY29yYXRpb246ICdub25lJyxcblx0XHRjb2xvcjogJyMzRDQxNDYnXG5cdH1cbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuXG5cdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuICAgICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgXHQvLyBtYXgtd2lkdGg6IDkwJTtcbiAgICAgIFx0bWFyZ2luOiAwO1xuICAgICAgXHR3aWR0aDogMTAwJTtcbiAgICAgIFx0bWluLWhlaWdodDogODBweDtcbiAgICAgIFx0bWFyZ2luOiAwIGF1dG87XG4gICAgICBcdGJhY2tncm91bmQtY29sb3I6ICMyQ0FDRkI7XG4gICAgICBcdGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICBcdGNvbG9yOiB3aGl0ZTtcbiAgICAgIFx0cGFkZGluZzogMjBweDtcblx0XHRcdFx0Ly8gYm9yZGVyOiAxcHggc29saWQgI0RERDtcblx0XHRcdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0LW1vei1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG4gICAgICB9XG4gICAgICAuaGVhZGVyLWNvbnRhaW5lciBhIHtcbiAgICAgIFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRjb2xvcjogIzJDQUNGQjtcbiAgICAgIH1cbiAgICAgIC5sb2dvLWJyYW5kaW5nIHtcblx0XHRcdFx0Y29sb3I6ICNGQjVDNjQ7XG4gICAgICBcdC8vIG1hcmdpbi10b3BcbiAgICAgIFx0Zm9udC1zaXplOiAzNnB4O1xuICAgICAgXHRmb250LXdlaWdodDogYm9sZDtcbiAgICAgIFx0ZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgICAubWFpbi1tZW51IHtcbiAgICAgIFx0dGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIFx0d2lkdGggMTAwJTtcbiAgICAgIFx0bWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cblx0XHRcdC5tYWluLW1lbnUgYSB7XG5cdFx0XHRcdGNvbG9yOiAjYTlhOWE5O1xuXHRcdFx0fVxuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTY1cHgpIHtcblx0XHRcdCAgLmhlYWRlci1jb250YWluZXIge1xuXHRcdFx0ICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxMDJENjQ7XG5cdFx0XHQgIH1cblx0XHRcdFx0Lm1haW4tbWVudSB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjpyaWdodDtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0d2lkdGggNTAlO1xuXHRcdFx0XHRcdC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjIwcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICBcdDxMaW5rIGhyZWY9XCIvXCI+PGE+PHNwYW4gY2xhc3NOYW1lPVwibG9nby1icmFuZGluZ1wiPkpvbHQ8L3NwYW4+PC9hPjwvTGluaz5cblxuICAgIFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cblx0ICAgICAgPExpbmsgaHJlZj1cIi9cIj5cblx0ICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlLmRlZmF1bHR9PkhvbWU8L2E+XG5cdCAgICAgIDwvTGluaz5cblx0ICAgICAgPExpbmsgaHJlZj1cIi9zaWduLXVwXCI+XG5cdCAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZS5kZWZhdWx0fT5BYm91dDwvYT5cblx0ICAgICAgPC9MaW5rPlxuXHQgICAgICA8TGluayBocmVmPVwiL21hcFwiPlxuXHQgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGUuYm9sZH0+VmlldyBNQVA8L2E+XG5cdCAgICAgIDwvTGluaz5cblxuXHQgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/components/Header.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-681337059"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-681337059" + " " + "logo-branding"
  }, "Jolt"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-681337059" + " " + "main-menu"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle.default,
    className: "jsx-681337059"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sign-up"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle.default,
    className: "jsx-681337059"
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/map"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle.bold,
    className: "jsx-681337059"
  }, "View MAP"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);






var Layout = function Layout(props) {
  //conditional rendering of components SHOW OR HIDE FOOTER
  var hiddenOverflow = '';

  if (props.overflow == true) {
    hiddenOverflow = 'overflow: hidden;';
  } else {
    hiddenOverflow = 'overflow: inherit';
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2259787818", [hiddenOverflow]]]) + " " + "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2259787818",
    css: "div.wrapper.__jsx-style-dynamic-selector{position:relative;box-sizing:border-box;margin:0;width:100%;height:100%;margin:0 auto;padding:0px;padding-top:0;background-color:#ececec;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);font-family:'Montserrat',sans-serif;background-image:url('/static/marker.svg');background-size:contain;background-position:500px 800px;background-position:600px bottom;background-repeat:no-repeat;padding-bottom:120px;min-height:100vh;".concat(hiddenOverflow, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmMsQUFHdUIsa0JBQ08sc0JBQ2IsU0FDRSxXQUNGLFlBQ0ssY0FDRixZQUNFLGNBQ1cseUJBQzJCLHVEQUNILG9EQUNMLCtDQUNWLG9DQUNNLDJDQUNuQix3QkFDUSxnQ0FDQyxpQ0FDTCw0QkFDUCxxQkFDSixpQkFFbkIsNkJBQUMiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9zbmFwcHkvbWFzdGVyL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG5cblx0Ly9jb25kaXRpb25hbCByZW5kZXJpbmcgb2YgY29tcG9uZW50cyBTSE9XIE9SIEhJREUgRk9PVEVSXG5cdHZhciBoaWRkZW5PdmVyZmxvdyA9ICcnO1xuXG5cdGlmKHByb3BzLm92ZXJmbG93ID09IHRydWUpe1xuXG5cdFx0aGlkZGVuT3ZlcmZsb3cgPSAnb3ZlcmZsb3c6IGhpZGRlbjsnO1xuXHR9ZWxzZSB7XG5cdFx0aGlkZGVuT3ZlcmZsb3cgPSAnb3ZlcmZsb3c6IGluaGVyaXQnO1xuXHR9XG5cblx0cmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblxuXG5cdFx0PHN0eWxlIGpzeD57YFxuICAgICAgZGl2LndyYXBwZXIge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBcdG1hcmdpbjogMDtcbiAgICAgIFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcbiAgICAgIFx0bWFyZ2luOiAwIGF1dG87XG4gICAgICBcdHBhZGRpbmc6IDBweDtcbiAgICAgIFx0cGFkZGluZy10b3A6IDA7XG4gICAgICBcdGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG5cdFx0XHRcdC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdC1tb3otYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvbWFya2VyLnN2ZycpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDUwMHB4IDgwMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2MDBweCBib3R0b207XG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxMjBweDtcblx0XHRcdFx0bWluLWhlaWdodDogMTAwdmg7XG5cdFx0XHRcdCR7aGlkZGVuT3ZlcmZsb3d9XG5cdFx0XHR9XG4gICAgYH08L3N0eWxlPlxuXG5cdFx0PEhlYWQ+XG4gICAgICA8dGl0bGU+Sm9sdCB8IFRoZSBRdWljayBXYXkgVG8gRmluZCBTZXJ2aWNlczwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyBrZXk9XCJ2aWV3cG9ydFwiLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjIwMCwzMDAsNDAwLDQwMGksNTAwLDYwMCw2MDBpLDcwMCw4MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICA8L0hlYWQ+XG5cblx0XHQ8SGVhZGVyLz5cblxuXHRcdHtwcm9wcy5jaGlsZHJlbn1cblxuXHRcdDxGb290ZXIvPlxuXG5cblx0PC9kaXY+KVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/components/Layout.js */"),
    dynamic: [hiddenOverflow]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2259787818", [hiddenOverflow]]])
  }, "Jolt | The Quick Way To Find Services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2259787818", [hiddenOverflow]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2259787818", [hiddenOverflow]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2259787818", [hiddenOverflow]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:200,300,400,400i,500,600,600i,700,800,900",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2259787818", [hiddenOverflow]]])
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 // Index.getInitialProps = async function(query) {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//
//   // console.log(data);
//   console.log(`Show data fetched. Count: ${data.length}`)
//
//   return {
//     shows: data
//   }
// }

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2843331227",
        css: ".container.jsx-2843331227{z-index:2;overflow:hidden;width:calc(100% - 40px);margin:0 auto;position:relative;}.hero-wrapper.jsx-2843331227{position:relative;}.left-side.jsx-2843331227{float:left;width:50%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:30%;width:80%;margin-top:75px;font-weight:700;font-size:33px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:100%;margin:0 auto;display:block;padding:10px;padding-bottom:60px;padding-left:0;margin-left:15%;margin-top:25px;font-weight:500;font-size:16px;color:#777;line-height:1.43;}@media screen and (min-width:768px){.left-side.jsx-2843331227{float:left;padding-top:150px;width:70%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:70%;margin-left:14%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}@media screen and (min-width:1024px){.left-side.jsx-2843331227{float:left;padding-top:150px;width:50%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:60%;margin-left:10%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2dCLEFBR2lCLEFBT1EsQUFHUCxBQU1LLEFBT00sQUFrQlYsQUFNSyxBQU1NLEFBY1gsQUFNSyxBQU1NLFVBOUVQLENBV04sQUE4QlMsQUEwQkEsS0FuRFQsQUErQk8sQUEwQkEsRUFsRWxCLEdBTUQsQ0FVYSxBQThCQyxBQTBCQSxJQTlFWSxBQWdCUixHQXlCTCxBQTBCQSxHQXBCTSxBQTBCQSxDQWxETixBQThCQSxBQTBCQSxNQXBDWixBQTBCQSxHQXpEQSxBQUtpQixDQXFDQyxBQTBCQSxDQXhESCxJQXdCRSxBQTBCQSxFQXpFRixRQWlCQyxBQU9ELENBOEJRLEFBMEJBLENBdEN0QixBQTBCQSxHQXBCQSxBQTBCQSxDQXpFa0IsUUF3QkwsQ0FQZCxPQXFDa0IsQUEwQkEsRUEvRWxCLEdBd0JxQixXQThCSCxBQTBCQSxTQXZERixPQThCQyxBQTBCQSxRQXZEQSxPQThCSixBQTBCQSxTQXZESSxFQThCTCxBQTBCQSxVQXpCWCxBQTBCQSxJQXhEZ0IsZ0JBQ0QsZUFDSixXQUNNLGlCQUNsQiIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL3NuYXBweS9tYXN0ZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24ocXVlcnkpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vXG4vLyAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG4vL1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHNob3dzOiBkYXRhXG4vLyAgIH1cbi8vIH1cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuXG5cdCAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcblx0ICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG5cdFx0Ly9XT1JLUyBzaG91bGQgcmV0dXJuIHNvbWUgZGF0YSBmcm9tIF5eIEFQSVxuXHQgIC8vIHJldHVybiB7XG5cdCAgLy8gICBzaG93czogZGF0YVxuXHQgIC8vIH1cblx0XHQvLyBUcnkgaW5zaWRlIGNvbXBvbmVudERpZE1vdW50IGZ1bmN0aW9uIGNvbnNvbGUubG9nIHNob3dzXG5cblx0XHRyZXR1cm4geyBxdWVyeSB9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXG5cdH1cblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaGVyby13cmFwcGVyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmxlZnQtc2lkZSB7XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdC8vIHBhZGRpbmctdG9wOiAxNTBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmludHJvLXRleHQge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA3NXB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzNweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmJvZHktdGV4dCB7XG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0Y2xlYXI6IGJvdGg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDYwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTUlO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMjVweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzc3Nztcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQzO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdFx0XHQubGVmdC1zaWRlIHtcblx0XHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxNTBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaW50cm8tdGV4dCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDc1cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNjNweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ib2R5LXRleHQge1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRjbGVhcjogYm90aDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE0JTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIzcHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcblx0XHRcdFx0XHRcdC5sZWZ0LXNpZGUge1xuXHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDE1MHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pbnRyby10ZXh0IHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDIwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNzVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA2M3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJvZHktdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGNsZWFyOiBib3RoO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNjAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjNweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3Nzc7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cblxuXHRcdFx0YH08L3N0eWxlPlxuXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdHsvKiA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS1zcXVhcmVcIj48L3NwYW4+ICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlcm8td3JhcHBlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zaWRlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludHJvLXRleHRcIj5DaGVjayB1cyBvdXQgYWdhaW4gc2hvcnRseS48L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5XZSBhcmUgY3VycmVudGx5IHVuZGVyIGNvbnN0cnVjdGlvbi4gOig8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/pages/index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2843331227" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2843331227" + " " + "hero-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2843331227" + " " + "left-side"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2843331227" + " " + "intro-text"
      }, "Check us out again shortly."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2843331227" + " " + "body-text"
      }, "We are currently under construction. :(")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.tvmaze.com/search/shows?q=batman');

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  query: query
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map