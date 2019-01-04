webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
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




 // const index = (props) => (

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
        css: ".container.jsx-2843331227{z-index:2;overflow:hidden;width:calc(100% - 40px);margin:0 auto;position:relative;}.hero-wrapper.jsx-2843331227{position:relative;}.left-side.jsx-2843331227{float:left;width:50%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:30%;width:80%;margin-top:75px;font-weight:700;font-size:33px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:100%;margin:0 auto;display:block;padding:10px;padding-bottom:60px;padding-left:0;margin-left:15%;margin-top:25px;font-weight:500;font-size:16px;color:#777;line-height:1.43;}@media screen and (min-width:768px){.left-side.jsx-2843331227{float:left;padding-top:150px;width:70%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:70%;margin-left:14%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}@media screen and (min-width:1024px){.left-side.jsx-2843331227{float:left;padding-top:150px;width:50%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:60%;margin-left:10%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2dCLEFBR2lCLEFBT1EsQUFHUCxBQU1LLEFBT00sQUFrQlYsQUFNSyxBQU1NLEFBY1gsQUFNSyxBQU1NLFVBOUVQLENBV04sQUE4QlMsQUEwQkEsS0FuRFQsQUErQk8sQUEwQkEsRUFsRWxCLEdBTUQsQ0FVYSxBQThCQyxBQTBCQSxJQTlFWSxBQWdCUixHQXlCTCxBQTBCQSxHQXBCTSxBQTBCQSxDQWxETixBQThCQSxBQTBCQSxNQXBDWixBQTBCQSxHQXpEQSxBQUtpQixDQXFDQyxBQTBCQSxDQXhESCxJQXdCRSxBQTBCQSxFQXpFRixRQWlCQyxBQU9ELENBOEJRLEFBMEJBLENBdEN0QixBQTBCQSxHQXBCQSxBQTBCQSxDQXpFa0IsUUF3QkwsQ0FQZCxPQXFDa0IsQUEwQkEsRUEvRWxCLEdBd0JxQixXQThCSCxBQTBCQSxTQXZERixPQThCQyxBQTBCQSxRQXZEQSxPQThCSixBQTBCQSxTQXZESSxFQThCTCxBQTBCQSxVQXpCWCxBQTBCQSxJQXhEZ0IsZ0JBQ0QsZUFDSixXQUNNLGlCQUNsQiIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL3NuYXBweS9tYXN0ZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cblxuLy8gY29uc3QgaW5kZXggPSAocHJvcHMpID0+IChcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pIHtcblxuXHRcdCAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcblx0XHQgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHRcdC8vV09SS1Mgc2hvdWxkIHJldHVybiBzb21lIGRhdGEgZnJvbSBeXiBBUElcblx0XHQgIC8vIHJldHVybiB7XG5cdFx0ICAvLyAgIHNob3dzOiBkYXRhXG5cdFx0ICAvLyB9XG5cdFx0XHQvLyBUcnkgaW5zaWRlIGNvbXBvbmVudERpZE1vdW50IGZ1bmN0aW9uIGNvbnNvbGUubG9nIHNob3dzXG5cblx0XHRyZXR1cm4geyBxdWVyeSB9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXG5cdH1cblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaGVyby13cmFwcGVyIHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmxlZnQtc2lkZSB7XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdC8vIHBhZGRpbmctdG9wOiAxNTBweDtcblx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmludHJvLXRleHQge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiA4MCU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA3NXB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzNweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmJvZHktdGV4dCB7XG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0Y2xlYXI6IGJvdGg7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDYwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTUlO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMjVweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzc3Nztcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjQzO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdFx0XHQubGVmdC1zaWRlIHtcblx0XHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxNTBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaW50cm8tdGV4dCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDc1cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogNjNweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ib2R5LXRleHQge1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRjbGVhcjogYm90aDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDcwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE0JTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIzcHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcblx0XHRcdFx0XHRcdC5sZWZ0LXNpZGUge1xuXHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDE1MHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pbnRyby10ZXh0IHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDIwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNzVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA2M3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJvZHktdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGNsZWFyOiBib3RoO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNjAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjNweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3Nzc7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cblxuXHRcdFx0YH08L3N0eWxlPlxuXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdHsvKiA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS1zcXVhcmVcIj48L3NwYW4+ICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlcm8td3JhcHBlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zaWRlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludHJvLXRleHRcIj5DaGVjayB1cyBvdXQgYWdhaW4gc2hvcnRseS48L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2R5LXRleHRcIj5XZSBhcmUgY3VycmVudGx5IHVuZGVyIGNvbnN0cnVjdGlvbi4gOig8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhXG4gIH1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/pages/index.js */"
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

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.json();

        case 5:
          data = _context2.sent;
          // console.log(data);
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context2.abrupt("return", {
            shows: data
          });

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.6358edad3bf73223c3e0.hot-update.js.map