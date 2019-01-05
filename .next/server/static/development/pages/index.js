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

/***/ "./components/Clock.js":
/*!*****************************!*\
  !*** ./components/Clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1117668870" + " " + ((props.light ? 'light' : '') || "")
  }, format(new Date(props.lastUpdate)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1117668870",
    css: "div.jsx-1117668870{padding:15px;color:#82FA58;display:inline-block;font:50px menlo,monaco,monospace;background-color:#000;margin-left:17%;margin-top:100px;}.light.jsx-1117668870{background-color:#999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL0Nsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQixBQUd3QixBQVNTLGFBUlIsU0FTaEIsS0FSdUIscUJBQ2MsaUNBQ2Isc0JBQ04sZ0JBQ0MsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL0Nsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmxpZ2h0ID8gJ2xpZ2h0JyA6ICcnfT5cbiAgICAgIHtmb3JtYXQobmV3IERhdGUocHJvcHMubGFzdFVwZGF0ZSkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgY29sb3I6ICM4MkZBNTg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQ6IDUwcHggbWVubG8sIG1vbmFjbywgbW9ub3NwYWNlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE3JTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAubGlnaHQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBmb3JtYXQgPSB0ID0+IGAke3BhZCh0LmdldFVUQ0hvdXJzKCkpfToke3BhZCh0LmdldFVUQ01pbnV0ZXMoKSl9OiR7cGFkKHQuZ2V0VVRDU2Vjb25kcygpKX1gXG5cbmNvbnN0IHBhZCA9IG4gPT4gbiA8IDEwID8gYDAke259YCA6IG5cbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/components/Clock.js */"
  }));
});

var format = function format(t) {
  return "".concat(pad(t.getUTCHours()), ":").concat(pad(t.getUTCMinutes()), ":").concat(pad(t.getUTCSeconds()));
};

var pad = function pad(n) {
  return n < 10 ? "0".concat(n) : n;
};

/***/ }),

/***/ "./components/nav/Footer.js":
/*!**********************************!*\
  !*** ./components/nav/Footer.js ***!
  \**********************************/
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
    css: ".footer.jsx-570690956{position:absolute;bottom:-40px;bottom:0px;background-color:white;margin-top:40px;box-sizing:border-box;max-width:100%;width:100%;margin:0 auto;padding:15px;font-size:16px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.footer.jsx-570690956 p.jsx-570690956{font-size:12px;}@media screen and (min-width:768px){.footer.jsx-570690956{padding:15px;border:1px solid #DDD;}}@media screen and (min-width:920px){.footer.jsx-570690956 p.jsx-570690956{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL25hdi9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCLEFBRzZCLEFBZ0JILEFBSUEsQUFNRSxhQUxPLEVBSjFCLEFBVUUsR0ExQmEsYUFDRixJQW9CWCxPQW5CdUIsdUJBQ1AsZ0JBQ00sc0JBQ1AsZUFDSixXQUNHLGNBQ0QsYUFDRSxlQUN3Qyx1REFDSCxvREFDTCwrQ0FDakQiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9zbmFwcHkvbWFzdGVyL2NvbXBvbmVudHMvbmF2L0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuXHRtYXJnaW5SaWdodDogMTVcbn1cblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTQwcHg7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MjBweCkge1xuICAgICAgICAgIC5mb290ZXIgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICBcdDxwPkNvcHlyaWdodCBKb2x0IDIwMTguIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxuXG4gICAgPC9kaXY+XG5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iXX0= */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/components/nav/Footer.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-570690956"
  }, "Copyright Jolt 2018. All Rights Reserved."));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/nav/Header.js":
/*!**********************************!*\
  !*** ./components/nav/Header.js ***!
  \**********************************/
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
    css: ".header-container.jsx-681337059{box-sizing:border-box;margin:0;width:100%;min-height:80px;margin:0 auto;background-color:#2CACFB;background-color:#FFF;color:white;padding:20px;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);}.header-container.jsx-681337059 a.jsx-681337059{color:white;color:#2CACFB;}.logo-branding.jsx-681337059{color:#FB5C64;font-size:36px;font-weight:bold;float:left;}.main-menu.jsx-681337059{text-align:center;display:inline-block;width:100%;margin-top:20px;}.main-menu.jsx-681337059 a.jsx-681337059{color:#a9a9a9;}@media screen and (min-width:565px){.main-menu.jsx-681337059{text-align:right;display:inline-block;width:50%;float:right;margin-top:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL25hdi9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJjLEFBRzhCLEFBZ0JWLEFBSUQsQUFPTSxBQU1OLEFBT0csWUF2QkgsRUFLSSxBQVluQixHQU91QixDQWJFLElBMUJaLElBZ0JWLEdBS2tCLEVBcEJOLE9BdUNKLENBYkcsR0F6Qk0sSUFvQkwsRUFvQkQsRUFkTSxPQUxqQixDQXBCZSxFQXdDRCxNQWRkLE1BekIwQixJQXdDNUIscUJBdkN5QixzQkFDVixZQUNDLGFBRXVDLHVEQUNILG9EQUNMLCtDQUM3QyIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL3NuYXBweS9tYXN0ZXIvY29tcG9uZW50cy9uYXYvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG5cdGRlZmF1bHQ6IHtcblx0XHRtYXJnaW5SaWdodDogMzUsXG5cdFx0dGV4dERlY29yYXRpb246ICdub25lJ1xuXHR9LFxuXHRib2xkOiB7XG5cdFx0bWFyZ2luUmlnaHQ6IDE1LFxuXHRcdGZvbnRXZWlnaHQ6IDcwMCxcblx0XHR0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuXHRcdGNvbG9yOiAnIzNENDE0Nidcblx0fVxufVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG5cblx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG5cblx0XHQ8c3R5bGUganN4PntgXG4gICAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICBcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBcdC8vIG1heC13aWR0aDogOTAlO1xuICAgICAgXHRtYXJnaW46IDA7XG4gICAgICBcdHdpZHRoOiAxMDAlO1xuICAgICAgXHRtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgXHRtYXJnaW46IDAgYXV0bztcbiAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogIzJDQUNGQjtcbiAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgIFx0Y29sb3I6IHdoaXRlO1xuICAgICAgXHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHQvLyBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuXHRcdFx0XHQtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHQtbW96LWJveC1zaGFkb3c6IDJweCA1cHggMjBweCAtMTNweCByZ2JhKDAsMCwwLDAuNTUpO1xuXHRcdFx0XHRib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXItY29udGFpbmVyIGEge1xuICAgICAgXHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGNvbG9yOiAjMkNBQ0ZCO1xuICAgICAgfVxuICAgICAgLmxvZ28tYnJhbmRpbmcge1xuXHRcdFx0XHRjb2xvcjogI0ZCNUM2NDtcbiAgICAgIFx0Ly8gbWFyZ2luLXRvcFxuICAgICAgXHRmb250LXNpemU6IDM2cHg7XG4gICAgICBcdGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgXHRmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIC5tYWluLW1lbnUge1xuICAgICAgXHR0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgXHR3aWR0aCAxMDAlO1xuICAgICAgXHRtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuXHRcdFx0Lm1haW4tbWVudSBhIHtcblx0XHRcdFx0Y29sb3I6ICNhOWE5YTk7XG5cdFx0XHR9XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjVweCkge1xuXHRcdFx0ICAuaGVhZGVyLWNvbnRhaW5lciB7XG5cdFx0XHQgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzEwMkQ2NDtcblx0XHRcdCAgfVxuXHRcdFx0XHQubWFpbi1tZW51IHtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOnJpZ2h0O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHR3aWR0aCA1MCU7XG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6MjBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuICAgIGB9PC9zdHlsZT5cblxuICAgIFx0PExpbmsgaHJlZj1cIi9cIj48YT48c3BhbiBjbGFzc05hbWU9XCJsb2dvLWJyYW5kaW5nXCI+Sm9sdDwvc3Bhbj48L2E+PC9MaW5rPlxuXG4gICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxuXHQgICAgICA8TGluayBocmVmPVwiL1wiPlxuXHQgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGUuZGVmYXVsdH0+U2lnbi11cDwvYT5cblx0ICAgICAgPC9MaW5rPlxuXHQgICAgICA8TGluayBocmVmPVwiL3NpZ24tdXBcIj5cblx0ICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlLmRlZmF1bHR9PkxvZ2luPC9hPlxuXHQgICAgICA8L0xpbms+XG5cdCAgICAgIDxMaW5rIGhyZWY9XCIvbWFwXCI+XG5cdCAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZS5ib2xkfT5CZWNvbWUgQSBTZXJ2aWNlIFByb3ZpZGVyPC9hPlxuXHQgICAgICA8L0xpbms+XG5cblx0ICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/components/nav/Header.js */"
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

/***/ "./components/nav/Layout.js":
/*!**********************************!*\
  !*** ./components/nav/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/nav/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/nav/Footer.js");
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
    css: "div.wrapper.__jsx-style-dynamic-selector{position:relative;box-sizing:border-box;margin:0;width:100%;height:100%;margin:0 auto;padding:0px;padding-top:0;background-color:#ececec;-webkit-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);-moz-box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);box-shadow:2px 5px 20px -13px rgba(0,0,0,0.55);font-family:'Montserrat',sans-serif;background-image:url('/static/marker.svg');background-size:contain;background-position:500px 800px;background-position:600px bottom;background-repeat:no-repeat;padding-bottom:120px;min-height:100vh;".concat(hiddenOverflow, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL25hdi9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJjLEFBR3VCLGtCQUNPLHNCQUNiLFNBQ0UsV0FDRixZQUNLLGNBQ0YsWUFDRSxjQUNXLHlCQUMyQix1REFDSCxvREFDTCwrQ0FDVixvQ0FDTSwyQ0FDbkIsd0JBQ1EsZ0NBQ0MsaUNBQ0wsNEJBQ1AscUJBQ0osaUJBRW5CLDZCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9jb21wb25lbnRzL25hdi9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcblxuXHQvL2NvbmRpdGlvbmFsIHJlbmRlcmluZyBvZiBjb21wb25lbnRzIFNIT1cgT1IgSElERSBGT09URVJcblx0dmFyIGhpZGRlbk92ZXJmbG93ID0gJyc7XG5cblx0aWYocHJvcHMub3ZlcmZsb3cgPT0gdHJ1ZSl7XG5cblx0XHRoaWRkZW5PdmVyZmxvdyA9ICdvdmVyZmxvdzogaGlkZGVuOyc7XG5cdH1lbHNlIHtcblx0XHRoaWRkZW5PdmVyZmxvdyA9ICdvdmVyZmxvdzogaW5oZXJpdCc7XG5cdH1cblxuXHRyZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuXG5cblx0XHQ8c3R5bGUganN4PntgXG4gICAgICBkaXYud3JhcHBlciB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIFx0bWFyZ2luOiAwO1xuICAgICAgXHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuICAgICAgXHRtYXJnaW46IDAgYXV0bztcbiAgICAgIFx0cGFkZGluZzogMHB4O1xuICAgICAgXHRwYWRkaW5nLXRvcDogMDtcbiAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcblx0XHRcdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0LW1vei1ib3gtc2hhZG93OiAycHggNXB4IDIwcHggLTEzcHggcmdiYSgwLDAsMCwwLjU1KTtcblx0XHRcdFx0Ym94LXNoYWRvdzogMnB4IDVweCAyMHB4IC0xM3B4IHJnYmEoMCwwLDAsMC41NSk7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9tYXJrZXIuc3ZnJyk7XG5cdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAwcHggODAwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IDYwMHB4IGJvdHRvbTtcblx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDEyMHB4O1xuXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0JHtoaWRkZW5PdmVyZmxvd31cblx0XHRcdH1cbiAgICBgfTwvc3R5bGU+XG5cblx0XHQ8SGVhZD5cbiAgICAgIDx0aXRsZT5Kb2x0IHwgVGhlIFF1aWNrIFdheSBUbyBGaW5kIFNlcnZpY2VzPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIGtleT1cInZpZXdwb3J0XCIvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLmNzc1wiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MjAwLDMwMCw0MDAsNDAwaSw1MDAsNjAwLDYwMGksNzAwLDgwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwvSGVhZD5cblxuXHRcdDxIZWFkZXIvPlxuXG5cdFx0e3Byb3BzLmNoaWxkcmVufVxuXG5cdFx0PEZvb3Rlci8+XG5cblxuXHQ8L2Rpdj4pXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/components/nav/Layout.js */"),
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
/* harmony import */ var _components_nav_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav/Header */ "./components/nav/Header.js");
/* harmony import */ var _components_nav_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav/Layout */ "./components/nav/Layout.js");
/* harmony import */ var _components_Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Clock */ "./components/Clock.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_8__);


var _dec, _class;




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







var Index = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["inject"])('store'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_8__["observer"])(_class =
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
      this.props.store.start();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.stop();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_nav_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "4289508199",
        css: ".container.jsx-4289508199{z-index:2;overflow:hidden;width:calc(100% - 40px);margin:0 auto;position:relative;}.hero-wrapper.jsx-4289508199{position:relative;}.left-side.jsx-4289508199{float:left;width:50%;display:inline-block;}.intro-text.jsx-4289508199{margin-left:30%;width:80%;margin-top:75px;font-weight:700;font-size:33px;}.body-text.jsx-4289508199{box-sizing:border-box;clear:both;width:100%;margin:0 auto;display:block;padding:10px;padding-bottom:60px;padding-left:0;margin-left:15%;margin-top:25px;font-weight:500;font-size:16px;color:#777;line-height:1.43;}@media screen and (min-width:768px){.left-side.jsx-4289508199{float:left;padding-top:150px;width:70%;display:inline-block;}.intro-text.jsx-4289508199{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-4289508199{box-sizing:border-box;clear:both;width:70%;margin-left:14%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}@media screen and (min-width:1024px){.left-side.jsx-4289508199{float:left;padding-top:150px;width:50%;display:inline-block;}.intro-text.jsx-4289508199{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-4289508199{box-sizing:border-box;clear:both;width:60%;margin-left:10%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2dCLEFBR2lCLEFBT1EsQUFHUCxBQU1LLEFBT00sQUFrQlYsQUFNSyxBQU1NLEFBY1gsQUFNSyxBQU1NLFVBOUVQLENBV04sQUE4QlMsQUEwQkEsS0FuRFQsQUErQk8sQUEwQkEsRUFsRWxCLEdBTUQsQ0FVYSxBQThCQyxBQTBCQSxJQTlFWSxBQWdCUixHQXlCTCxBQTBCQSxHQXBCTSxBQTBCQSxDQWxETixBQThCQSxBQTBCQSxNQXBDWixBQTBCQSxHQXpEQSxBQUtpQixDQXFDQyxBQTBCQSxDQXhESCxJQXdCRSxBQTBCQSxFQXpFRixRQWlCQyxBQU9ELENBOEJRLEFBMEJBLENBdEN0QixBQTBCQSxHQXBCQSxBQTBCQSxDQXpFa0IsUUF3QkwsQ0FQZCxPQXFDa0IsQUEwQkEsRUEvRWxCLEdBd0JxQixXQThCSCxBQTBCQSxTQXZERixPQThCQyxBQTBCQSxRQXZEQSxPQThCSixBQTBCQSxTQXZESSxFQThCTCxBQTBCQSxVQXpCWCxBQTBCQSxJQXhEZ0IsZ0JBQ0QsZUFDSixXQUNNLGlCQUNsQiIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL3NuYXBweS9tYXN0ZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2L0hlYWRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYvTGF5b3V0J1xuaW1wb3J0IENsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvQ2xvY2snXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgaW5qZWN0LCBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnXG5cbkBpbmplY3QoJ3N0b3JlJylcbkBvYnNlcnZlclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuXG5cdFx0Y29uc29sZS5sb2cocXVlcnkpXG5cblx0XHRyZXR1cm4geyBxdWVyeSB9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLnN0b3JlLnN0YXJ0KClcblx0fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuc3RvcmUuc3RvcCgpXG4gIH1cblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaGVyby13cmFwcGVyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmxlZnQtc2lkZSB7XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdC8vIHBhZGRpbmctdG9wOiAxNTBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmludHJvLXRleHQge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA3NXB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzNweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmJvZHktdGV4dCB7XG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0Y2xlYXI6IGJvdGg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDYwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTUlO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMjVweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzc3Nztcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQzO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdFx0XHQubGVmdC1zaWRlIHtcblx0XHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxNTBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaW50cm8tdGV4dCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDc1cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNjNweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ib2R5LXRleHQge1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRjbGVhcjogYm90aDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE0JTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIzcHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcblx0XHRcdFx0XHRcdC5sZWZ0LXNpZGUge1xuXHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDE1MHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pbnRyby10ZXh0IHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDIwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNzVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA2M3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJvZHktdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGNsZWFyOiBib3RoO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNjAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjNweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3Nzc7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRgfTwvc3R5bGU+XG5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0ey8qIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlLXNxdWFyZVwiPjwvc3Bhbj4gKi99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVyby13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZWZ0LXNpZGVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tdGV4dFwiPkNoZWNrIHVzIG91dCBhZ2FpbiBzaG9ydGx5LjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7LyogLy8vUHVsbGluZyBuYW1lIGZyb20gdGhlIE1PQlggc3RvcmUgPT4gQ2hlY2sgSG9tZVN0b3JlICovfVxuXHRcdFx0XHR7LyogLy8vQ2hlY2sgSG9tZVN0b3JlIGZvciBnZXROYW1lIGZ1bmN0aW9uKi99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9keS10ZXh0XCI+e3RoaXMucHJvcHMuc3RvcmUuZ2V0TmFtZX0gd2UgYXJlIGN1cnJlbnRseSB1bmRlciBjb25zdHJ1Y3Rpb24uIDooPC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7LyogLy8vTU9CWCBDb21wb25lbnQgdXNpbmcgb2JzZXJ2YWJsZXMgKi99XG5cdFx0XHQ8Q2xvY2tcblx0XHRcdFx0bGFzdFVwZGF0ZT17dGhpcy5wcm9wcy5zdG9yZS5sYXN0VXBkYXRlfVxuXHRcdFx0XHRsaWdodD17dGhpcy5wcm9wcy5zdG9yZS5saWdodH1cblx0XHRcdC8+XG5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/pages/index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4289508199" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4289508199" + " " + "hero-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4289508199" + " " + "left-side"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4289508199" + " " + "intro-text"
      }, "Check us out again shortly."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-4289508199" + " " + "body-text"
      }, this.props.store.getName, " we are currently under construction. :(")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Clock__WEBPACK_IMPORTED_MODULE_6__["default"], {
        lastUpdate: this.props.store.lastUpdate,
        light: this.props.store.light
      }));
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
                console.log(query);
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
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component)) || _class) || _class);
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

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

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