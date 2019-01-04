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
                console.log(data); // console.log(`Show data fetched. Count: ${data.length}`)

                return _context.abrupt("return", {
                  shows: data // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
                  // return { query }

                });

              case 9:
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
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.shows);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2843331227",
        css: ".container.jsx-2843331227{z-index:2;overflow:hidden;width:calc(100% - 40px);margin:0 auto;position:relative;}.hero-wrapper.jsx-2843331227{position:relative;}.left-side.jsx-2843331227{float:left;width:50%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:30%;width:80%;margin-top:75px;font-weight:700;font-size:33px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:100%;margin:0 auto;display:block;padding:10px;padding-bottom:60px;padding-left:0;margin-left:15%;margin-top:25px;font-weight:500;font-size:16px;color:#777;line-height:1.43;}@media screen and (min-width:768px){.left-side.jsx-2843331227{float:left;padding-top:150px;width:70%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:70%;margin-left:14%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}@media screen and (min-width:1024px){.left-side.jsx-2843331227{float:left;padding-top:150px;width:50%;display:inline-block;}.intro-text.jsx-2843331227{margin-left:20%;margin-top:75px;font-weight:700;font-size:63px;}.body-text.jsx-2843331227{box-sizing:border-box;clear:both;width:60%;margin-left:10%;display:inline-block;margin-top:50px;font-weight:500;font-size:23px;color:#777;padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2dCLEFBR2lCLEFBT1EsQUFHUCxBQU1LLEFBT00sQUFrQlYsQUFNSyxBQU1NLEFBY1gsQUFNSyxBQU1NLFVBOUVQLENBV04sQUE4QlMsQUEwQkEsS0FuRFQsQUErQk8sQUEwQkEsRUFsRWxCLEdBTUQsQ0FVYSxBQThCQyxBQTBCQSxJQTlFWSxBQWdCUixHQXlCTCxBQTBCQSxHQXBCTSxBQTBCQSxDQWxETixBQThCQSxBQTBCQSxNQXBDWixBQTBCQSxHQXpEQSxBQUtpQixDQXFDQyxBQTBCQSxDQXhESCxJQXdCRSxBQTBCQSxFQXpFRixRQWlCQyxBQU9ELENBOEJRLEFBMEJBLENBdEN0QixBQTBCQSxHQXBCQSxBQTBCQSxDQXpFa0IsUUF3QkwsQ0FQZCxPQXFDa0IsQUEwQkEsRUEvRWxCLEdBd0JxQixXQThCSCxBQTBCQSxTQXZERixPQThCQyxBQTBCQSxRQXZEQSxPQThCSixBQTBCQSxTQXZESSxFQThCTCxBQTBCQSxVQXpCWCxBQTBCQSxJQXhEZ0IsZ0JBQ0QsZUFDSixXQUNNLGlCQUNsQiIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL3NuYXBweS9tYXN0ZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cblxuLy8gY29uc3QgaW5kZXggPSAocHJvcHMpID0+IChcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLScpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHF1ZXJ5KTtcblx0XHQvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0nKTtcblxuXHRcdCAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcblx0XHQgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cblx0XHQgIGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdCAgLy8gY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG5cdFx0ICByZXR1cm4ge1xuXHRcdCAgICBzaG93czogZGF0YVxuXHRcdCAgfVxuXG5cblx0XHQvLyBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuXHRcdC8vIHJldHVybiB7IHF1ZXJ5IH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9wcy5zaG93cyk7XG5cblx0fVxuXG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDI7XG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5oZXJvLXdyYXBwZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubGVmdC1zaWRlIHtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0Ly8gcGFkZGluZy10b3A6IDE1MHB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9ja1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaW50cm8tdGV4dCB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMzAlO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDc1cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAzM3B4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYm9keS10ZXh0IHtcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRjbGVhcjogYm90aDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNjBweDtcblx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNSU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyNXB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNzc3O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNDM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRcdC5sZWZ0LXNpZGUge1xuXHRcdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDE1MHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNzAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2tcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pbnRyby10ZXh0IHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDIwJTtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNzVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiA2M3B4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJvZHktdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGNsZWFyOiBib3RoO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNzAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTQlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjNweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3Nzc7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuXHRcdFx0XHRcdFx0LmxlZnQtc2lkZSB7XG5cdFx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTUwcHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9ja1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmludHJvLXRleHQge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMjAlO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA3NXB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDYzcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYm9keS10ZXh0IHtcblx0XHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0Y2xlYXI6IGJvdGg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA2MCU7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMCU7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNTBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyM3B4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzc3Nztcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblxuXG5cdFx0XHRgfTwvc3R5bGU+XG5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0ey8qIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlLXNxdWFyZVwiPjwvc3Bhbj4gKi99XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVyby13cmFwcGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZWZ0LXNpZGVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tdGV4dFwiPkNoZWNrIHVzIG91dCBhZ2FpbiBzaG9ydGx5LjwvZGl2PlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHktdGV4dFwiPldlIGFyZSBjdXJyZW50bHkgdW5kZXIgY29uc3RydWN0aW9uLiA6KDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufVxuXG4vLyBpbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vXG4vLyAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG4vL1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHNob3dzOiBkYXRhXG4vLyAgIH1cbi8vIH1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/pages/index.js */"
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
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component); // index.getInitialProps = async function() {
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
//# sourceMappingURL=index.js.6d5748b65f6c0399f122.hot-update.js.map