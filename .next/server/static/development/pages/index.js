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
    css: ".footer.jsx-570690956{position:absolute;bottom:-40px;bottom:0px;background-color:white;margin-top:40px;box-sizing:border-box;max-width:100%;width:100%;margin:0 auto;padding:15px;font-size:16px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.footer.jsx-570690956 p.jsx-570690956{font-size:12px;}@media screen and (min-width:768px){.footer.jsx-570690956{padding:15px;border:1px solid #DDD;}}@media screen and (min-width:920px){.footer.jsx-570690956 p.jsx-570690956{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmFmZWhcXERlc2t0b3BcXE5leHRBcHBcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0IsQUFHNkIsQUFnQkgsQUFJQSxBQU1FLGFBTE8sRUFKMUIsQUFVRSxHQTFCYSxhQUNGLElBb0JYLE9BbkJ1Qix1QkFDUCxnQkFDTSxzQkFDUCxlQUNKLFdBQ0csY0FDRCxhQUNFLGVBQ3dDLHVEQUNILG9EQUNMLCtDQUNqRCIsImZpbGUiOiJDOlxcVXNlcnNcXFJhZmVoXFxEZXNrdG9wXFxOZXh0QXBwXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcblx0bWFyZ2luUmlnaHQ6IDE1XHJcbn1cclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IC00MHB4O1xyXG4gICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xyXG4gICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkyMHB4KSB7XHJcbiAgICAgICAgICAuZm9vdGVyIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgXHQ8cD5Db3B5cmlnaHQgSm9sdCAyMDE4LiBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Rafeh\\Desktop\\NextApp\\components\\Footer.js */"
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
    css: ".header-container.jsx-681337059{box-sizing:border-box;margin:0;width:100%;min-height:80px;margin:0 auto;background-color:#2CACFB;background-color:#FFF;color:white;padding:20px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.header-container.jsx-681337059 a.jsx-681337059{color:white;color:#2CACFB;}.logo-branding.jsx-681337059{color:#FB5C64;font-size:36px;font-weight:bold;float:left;}.main-menu.jsx-681337059{text-align:center;display:inline-block;width:100%;margin-top:20px;}.main-menu.jsx-681337059 a.jsx-681337059{color:#a9a9a9;}@media screen and (min-width:565px){.main-menu.jsx-681337059{text-align:right;display:inline-block;width:50%;float:right;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmFmZWhcXERlc2t0b3BcXE5leHRBcHBcXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmMsQUFHOEIsQUFnQlYsQUFJRCxBQU9NLEFBTU4sQUFPRyxZQXZCSCxFQUtJLEFBWW5CLEdBT3VCLENBYkUsSUExQlosSUFnQlYsR0FLa0IsRUFwQk4sT0F1Q0osQ0FiRyxHQXpCTSxJQW9CTCxFQW9CRCxFQWRNLE9BTGpCLENBcEJlLEVBd0NELE1BZGQsTUF6QjBCLElBd0M1QixxQkF2Q3lCLHNCQUNWLFlBQ0MsYUFFdUMsdURBQ0gsb0RBQ0wsK0NBQzdDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUmFmZWhcXERlc2t0b3BcXE5leHRBcHBcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuXHRkZWZhdWx0OiB7XHJcblx0XHRtYXJnaW5SaWdodDogMzUsXHJcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXHJcblx0fSxcclxuXHRib2xkOiB7XHJcblx0XHRtYXJnaW5SaWdodDogMTUsXHJcblx0XHRmb250V2VpZ2h0OiA3MDAsXHJcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG5cdFx0Y29sb3I6ICcjM0Q0MTQ2J1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG5cclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcbiAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcclxuICAgICAgXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBcdC8vIG1heC13aWR0aDogOTAlO1xyXG4gICAgICBcdG1hcmdpbjogMDtcclxuICAgICAgXHR3aWR0aDogMTAwJTtcclxuICAgICAgXHRtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgICBcdG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBcdGJhY2tncm91bmQtY29sb3I6ICMyQ0FDRkI7XHJcbiAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgXHRjb2xvcjogd2hpdGU7XHJcbiAgICAgIFx0cGFkZGluZzogMjBweDtcclxuXHRcdFx0XHQvLyBib3JkZXI6IDFweCBzb2xpZCAjREREO1xyXG5cdFx0XHRcdC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XHJcblx0XHRcdFx0LW1vei1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcclxuXHRcdFx0XHRib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyLWNvbnRhaW5lciBhIHtcclxuICAgICAgXHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdFx0Y29sb3I6ICMyQ0FDRkI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28tYnJhbmRpbmcge1xyXG5cdFx0XHRcdGNvbG9yOiAjRkI1QzY0O1xyXG4gICAgICBcdC8vIG1hcmdpbi10b3BcclxuICAgICAgXHRmb250LXNpemU6IDM2cHg7XHJcbiAgICAgIFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIFx0ZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLm1haW4tbWVudSB7XHJcbiAgICAgIFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBcdHdpZHRoIDEwMCU7XHJcbiAgICAgIFx0bWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG5cdFx0XHQubWFpbi1tZW51IGEge1xyXG5cdFx0XHRcdGNvbG9yOiAjYTlhOWE5O1xyXG5cdFx0XHR9XHJcblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2NXB4KSB7XHJcblx0XHRcdCAgLmhlYWRlci1jb250YWluZXIge1xyXG5cdFx0XHQgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzEwMkQ2NDtcclxuXHRcdFx0ICB9XHJcblx0XHRcdFx0Lm1haW4tbWVudSB7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOnJpZ2h0O1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0d2lkdGggNTAlO1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjIwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgXHQ8TGluayBocmVmPVwiL1wiPjxhPjxzcGFuIGNsYXNzTmFtZT1cImxvZ28tYnJhbmRpbmdcIj5Kb2x0PC9zcGFuPjwvYT48L0xpbms+XHJcblxyXG4gICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxyXG5cdCAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0ICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlLmRlZmF1bHR9PlNpZ24tdXA8L2E+XHJcblx0ICAgICAgPC9MaW5rPlxyXG5cdCAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiPlxyXG5cdCAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZS5kZWZhdWx0fT5Mb2dpbjwvYT5cclxuXHQgICAgICA8L0xpbms+XHJcblx0ICAgICAgPExpbmsgaHJlZj1cIi9tYXBcIj5cclxuXHQgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGUuYm9sZH0+QmVjb21lIEEgU2VydmljZSBQcm92aWRlcjwvYT5cclxuXHQgICAgICA8L0xpbms+XHJcblxyXG5cdCAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Rafeh\\Desktop\\NextApp\\components\\Header.js */"
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
  }, "Sign-up")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/sign-up"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle.default,
    className: "jsx-681337059"
  }, "Login")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/map"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle.bold,
    className: "jsx-681337059"
  }, "Become A Service Provider"))));
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1973709287", [hiddenOverflow]]]) + " " + "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1973709287",
    css: "div.wrapper.__jsx-style-dynamic-selector{position:relative;box-sizing:border-box;margin:0;width:100%;height:100%;margin:0 auto;padding:0px;padding-top:0;background-color:#ececec;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);font-family:'Montserrat',sans-serif;background-image:url('/static/marker.svg');background-size:contain;background-position:500px 800px;background-position:600px bottom;background-repeat:no-repeat;padding-bottom:120px;min-height:100vh;".concat(hiddenOverflow, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmFmZWhcXERlc2t0b3BcXE5leHRBcHBcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmMsQUFHdUIsa0JBQ08sc0JBQ2IsU0FDRSxXQUNGLFlBQ0ssY0FDRixZQUNFLGNBQ1cseUJBQzJCLHVEQUNILG9EQUNMLCtDQUNWLG9DQUNNLDJDQUNuQix3QkFDUSxnQ0FDQyxpQ0FDTCw0QkFDUCxxQkFDSixpQkFFbkIsNkJBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxSYWZlaFxcRGVza3RvcFxcTmV4dEFwcFxcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuXHJcblx0Ly9jb25kaXRpb25hbCByZW5kZXJpbmcgb2YgY29tcG9uZW50cyBTSE9XIE9SIEhJREUgRk9PVEVSXHJcblx0dmFyIGhpZGRlbk92ZXJmbG93ID0gJyc7XHJcblxyXG5cdGlmKHByb3BzLm92ZXJmbG93ID09IHRydWUpe1xyXG5cclxuXHRcdGhpZGRlbk92ZXJmbG93ID0gJ292ZXJmbG93OiBoaWRkZW47JztcclxuXHR9ZWxzZSB7XHJcblx0XHRoaWRkZW5PdmVyZmxvdyA9ICdvdmVyZmxvdzogaW5oZXJpdCc7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cclxuXHJcblx0XHQ8c3R5bGUganN4PntgXHJcbiAgICAgIGRpdi53cmFwcGVyIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgXHRtYXJnaW46IDA7XHJcbiAgICAgIFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG4gICAgICBcdG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBcdHBhZGRpbmc6IDBweDtcclxuICAgICAgXHRwYWRkaW5nLXRvcDogMDtcclxuICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG5cdFx0XHRcdC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XHJcblx0XHRcdFx0LW1vei1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcclxuXHRcdFx0XHRib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9tYXJrZXIuc3ZnJyk7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDUwMHB4IDgwMHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDYwMHB4IGJvdHRvbTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRcdFx0XHQke2hpZGRlbk92ZXJmbG93fVxyXG5cdFx0XHR9XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG5cdFx0PEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5Kb2x0IHwgVGhlIFF1aWNrIFdheSBUbyBGaW5kIFNlcnZpY2VzPC90aXRsZT5cclxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyBrZXk9XCJ2aWV3cG9ydFwiLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoyMDAsMzAwLDQwMCw0MDBpLDUwMCw2MDAsNjAwaSw3MDAsODAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICA8L0hlYWQ+XHJcblxyXG5cdFx0PEhlYWRlci8+XHJcblxyXG5cdFx0e3Byb3BzLmNoaWxkcmVufVxyXG5cclxuXHRcdDxGb290ZXIvPlxyXG5cclxuXHJcblx0PC9kaXY+KVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Rafeh\\Desktop\\NextApp\\components\\Layout.js */"),
    dynamic: [hiddenOverflow]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1973709287", [hiddenOverflow]]])
  }, "Jolt | The Quick Way To Find Services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1973709287", [hiddenOverflow]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1973709287", [hiddenOverflow]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1973709287", [hiddenOverflow]]])
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Montserrat:200,300,400,400i,500,600,600i,700,800,900",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1973709287", [hiddenOverflow]]])
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
        css: ".container.jsx-2843331227{z-index:2;overflow:hidden;width:calc(100% - 40px);margin:0 auto;position:relative;}.hero-wrapper.jsx-2843331227{position:relative;}.left-side.jsx-2843331227{float:left;width:50%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:30%;width:80%;margin-top:75px;font-weight:700;font-size:33px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:100%;margin:0 auto;display:block;padding:10px;padding-bottom:60px;padding-left:0;margin-left:15%;margin-top:25px;font-weight:500;font-size:16px;color:#777;line-height:1.43;}@media screen and (min-width:768px){.left-side.jsx-2843331227{float:left;padding-top:150px;width:70%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:70%;margin-left:14%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}@media screen and (min-width:1024px){.left-side.jsx-2843331227{float:left;padding-top:150px;width:50%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:60%;margin-left:10%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmFmZWhcXERlc2t0b3BcXE5leHRBcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRGdCLEFBR2lCLEFBT1EsQUFHUCxBQU1LLEFBT00sQUFrQlYsQUFNSyxBQU1NLEFBY1gsQUFNSyxBQU1NLFVBOUVQLENBV04sQUE4QlMsQUEwQkEsS0FuRFQsQUErQk8sQUEwQkEsRUFsRWxCLEdBTUQsQ0FVYSxBQThCQyxBQTBCQSxJQTlFWSxBQWdCUixHQXlCTCxBQTBCQSxHQXBCTSxBQTBCQSxDQWxETixBQThCQSxBQTBCQSxNQXBDWixBQTBCQSxHQXpEQSxBQUtpQixDQXFDQyxBQTBCQSxDQXhESCxJQXdCRSxBQTBCQSxFQXpFRixRQWlCQyxBQU9ELENBOEJRLEFBMEJBLENBdEN0QixBQTBCQSxHQXBCQSxBQTBCQSxDQXpFa0IsUUF3QkwsQ0FQZCxPQXFDa0IsQUEwQkEsRUEvRWxCLEdBd0JxQixXQThCSCxBQTBCQSxTQXZERixPQThCQyxBQTBCQSxRQXZEQSxPQThCSixBQTBCQSxTQXZESSxFQThCTCxBQTBCQSxVQXpCWCxBQTBCQSxJQXhEZ0IsZ0JBQ0QsZUFDSixXQUNNLGlCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXFJhZmVoXFxEZXNrdG9wXFxOZXh0QXBwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5cclxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24ocXVlcnkpIHtcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbi8vXHJcbi8vICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbi8vICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxyXG4vL1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBzaG93czogZGF0YVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pIHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhxdWVyeSlcclxuXHQgLy8gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXHJcblx0IC8vICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuXHRcdC8vIC8vV09SS1Mgc2hvdWxkIHJldHVybiBzb21lIGRhdGEgZnJvbSBeXiBBUElcclxuXHQgLy8gIHJldHVybiB7XHJcblx0IC8vICAgIHNob3dzOiBkYXRhXHJcblx0IC8vICB9XHJcblx0XHQvLyAvLyBUcnkgaW5zaWRlIGNvbXBvbmVudERpZE1vdW50IGZ1bmN0aW9uIGNvbnNvbGUubG9nIHNob3dzXHJcblxyXG5cdFx0cmV0dXJuIHsgcXVlcnkgfVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0ei1pbmRleDogMjtcclxuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Lmhlcm8td3JhcHBlciB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5sZWZ0LXNpZGUge1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0Ly8gcGFkZGluZy10b3A6IDE1MHB4O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5pbnRyby10ZXh0IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMwJTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDgwJTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNzVweDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzM3B4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmJvZHktdGV4dCB7XHJcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHRcdGNsZWFyOiBib3RoO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTUlO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS40MztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cdFx0XHRcdFx0XHQubGVmdC1zaWRlIHtcclxuXHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTUwcHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuaW50cm8tdGV4dCB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDIwJTtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA3NXB4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA2M3B4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5ib2R5LXRleHQge1xyXG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXI6IGJvdGg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTQlO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyM3B4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0XHRcdFx0XHQubGVmdC1zaWRlIHtcclxuXHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTUwcHg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuaW50cm8tdGV4dCB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDIwJTtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA3NXB4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA2M3B4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5ib2R5LXRleHQge1xyXG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXI6IGJvdGg7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDYwJTtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAlO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyM3B4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblxyXG5cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0ey8qIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlLXNxdWFyZVwiPjwvc3Bhbj4gKi99XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZXJvLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zaWRlXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tdGV4dFwiPkNoZWNrIHVzIG91dCBhZ2FpbiBzaG9ydGx5LjwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+V2UgYXJlIGN1cnJlbnRseSB1bmRlciBjb25zdHJ1Y3Rpb24uIDooPC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Rafeh\\Desktop\\NextApp\\pages\\index.js */"
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
        var query;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                console.log(query); //  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
                //  const data = await res.json()
                // //WORKS should return some data from ^^ API
                //  return {
                //    shows: data
                //  }
                // // Try inside componentDidMount function console.log shows

                return _context.abrupt("return", {
                  query: query
                });

              case 3:
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