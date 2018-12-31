webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




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

// Class About 
var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      if (this.props.query.weather == 'undefined') {
        var CurrentTempAndLoc = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Ooops!");
        var DailyTemp = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "No Valid City Found, Try Again!");
      } else {
        var weatherForecast = this.props.query.weather.forecast;
        var CurrentTempAndLoc = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Weather for ", this.props.query.weather.location.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, "Currently ", this.props.query.weather.current.temperature, " C and ", this.props.query.weather.current.skytext));
        var DailyTemp = weatherForecast.map(function (rows) {
          console.log(rows);
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            key: rows.date,
            className: "jsx-2805868132" + " " + "results-flex-row"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
            styleId: "2805868132",
            css: ".results-flex-row.jsx-2805868132{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;background-color:white;width:33.66666666667%;margin:15px;margin-top:20px;margin-bottom:20px;padding:10px;-webkit-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);-moz-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);box-shadow:0px 4px 2px -2px rgba(217,217,217,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29CLEFBR21DLHNCQUNWLHVFQUNXLHVCQUNELHNCQUNWLFlBQ0ksZ0JBQ0csbUJBQ04sYUFDMkMsd0RBQ0gscURBQ0wsZ0RBRWxEIiwiZmlsZSI6Ii9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQ2xhc3MgQWJvdXQgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnl9KSB7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tJyk7XG4gICAgLy8gY29uc29sZS5sb2cocXVlcnkpO1xuICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLScpO1xuICAgIC8vIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgcXVlcnkgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgaWYodGhpcy5wcm9wcy5xdWVyeS53ZWF0aGVyID09ICd1bmRlZmluZWQnKXtcblxuXG4gICAgICB2YXIgQ3VycmVudFRlbXBBbmRMb2MgPSAoPGgxPk9vb3BzITwvaDE+KTtcbiAgICAgIHZhciBEYWlseVRlbXAgPSAoPGRpdj5ObyBWYWxpZCBDaXR5IEZvdW5kLCBUcnkgQWdhaW4hPC9kaXY+KVxuXG5cbiAgICB9ZWxzZSB7XG5cblxuICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdCA9IHRoaXMucHJvcHMucXVlcnkud2VhdGhlci5mb3JlY2FzdDtcblxuICAgIHZhciBDdXJyZW50VGVtcEFuZExvYyA9ICg8ZGl2PjxoMT5XZWF0aGVyIGZvciB7dGhpcy5wcm9wcy5xdWVyeS53ZWF0aGVyLmxvY2F0aW9uLm5hbWV9PC9oMT5cbiAgICAgICAgICA8aDQ+Q3VycmVudGx5IHt0aGlzLnByb3BzLnF1ZXJ5LndlYXRoZXIuY3VycmVudC50ZW1wZXJhdHVyZX0gQyBhbmQge3RoaXMucHJvcHMucXVlcnkud2VhdGhlci5jdXJyZW50LnNreXRleHR9PC9oND48L2Rpdj4pO1xuXG4gICAgdmFyIERhaWx5VGVtcCA9IHdlYXRoZXJGb3JlY2FzdC5tYXAoIHJvd3MgPT4ge1xuXG5cbiAgICAgIGNvbnNvbGUubG9nKHJvd3MpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17cm93cy5kYXRlfSBjbGFzc05hbWU9XCJyZXN1bHRzLWZsZXgtcm93XCI+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5yZXN1bHRzLWZsZXgtcm93IHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAzMy42NjY2NjY2NjY2NyU7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMnB4IC0ycHggcmdiYSgyMTcsMjE3LDIxNywxKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cblxuXG4gICAgICAgICAgPGRpdj5EYXRlOiB7cm93cy5kYXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e3Jvd3Muc2t5dGV4dGRheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkxvdyBvZiB7cm93cy5sb3d9IEM8L2Rpdj5cbiAgICAgICAgICA8ZGl2PkhpZ2ggb2Yge3Jvd3MuaGlnaH0gQzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcblxuICAgIH0pO1xuXG4gICAgfVxuXG5cblxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG4gICAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuICAgICAgICAgIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbiAgICAgICAgICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG4gICAgICAgICAgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbiAgICAgICAgICBiLCB1LCBpLCBjZW50ZXIsXG4gICAgICAgICAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbiAgICAgICAgICBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbiAgICAgICAgICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbiAgICAgICAgICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG4gICAgICAgICAgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbiAgICAgICAgICBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbiAgICAgICAgICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbiAgICAgICAgICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbiAgICAgICAgICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9sLCB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBibG9ja3F1b3RlLCBxIHtcbiAgICAgICAgICAgIHF1b3Rlczogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG4gICAgICAgICAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvKioqKioqKioqXG4gICAgICAgICAgKlxuICAgICAgICAgICogU3RhcnQgQ1NTIFN0eWxlc1xuICAgICAgICAgICpcbiAgICAgICAgICAqKioqKioqKioqL1xuXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cmFwcGVyLWNvbnRhaW5lZCB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ3NXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDJweCAtMnB4IHJnYmEoMjE3LDIxNywyMTcsMSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMnB4IC0ycHggcmdiYSgyMTcsMjE3LDIxNywxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMnB4IC0ycHggcmdiYSgyMTcsMjE3LDIxNywxKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud2VhdGhlci1ncmlkIHtcbiAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9rbjogcm93O1xuICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlci1jb250YWluZWQnPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXItZ3JpZFwiPlxuICAgICAgICAgICAge0N1cnJlbnRUZW1wQW5kTG9jfVxuICAgICAgICAgICAge0RhaWx5VGVtcH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/pages/about.js */"
          }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2805868132"
          }, "Date: ", rows.date), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2805868132"
          }, rows.skytextday), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2805868132"
          }, "Low of ", rows.low, " C"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            className: "jsx-2805868132"
          }, "High of ", rows.high, " C"));
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2335134032" + " " + 'wrapper'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2335134032",
        css: "html.jsx-2335134032,body.jsx-2335134032,div.jsx-2335134032,span.jsx-2335134032,applet.jsx-2335134032,object.jsx-2335134032,iframe.jsx-2335134032,h1.jsx-2335134032,h2.jsx-2335134032,h3.jsx-2335134032,h4.jsx-2335134032,h5.jsx-2335134032,h6.jsx-2335134032,p.jsx-2335134032,blockquote.jsx-2335134032,pre.jsx-2335134032,a.jsx-2335134032,abbr.jsx-2335134032,acronym.jsx-2335134032,address.jsx-2335134032,big.jsx-2335134032,cite.jsx-2335134032,code.jsx-2335134032,del.jsx-2335134032,dfn.jsx-2335134032,em.jsx-2335134032,img.jsx-2335134032,ins.jsx-2335134032,kbd.jsx-2335134032,q.jsx-2335134032,s.jsx-2335134032,samp.jsx-2335134032,small.jsx-2335134032,strike.jsx-2335134032,strong.jsx-2335134032,sub.jsx-2335134032,sup.jsx-2335134032,tt.jsx-2335134032,var.jsx-2335134032,b.jsx-2335134032,u.jsx-2335134032,i.jsx-2335134032,center.jsx-2335134032,dl.jsx-2335134032,dt.jsx-2335134032,dd.jsx-2335134032,ol.jsx-2335134032,ul.jsx-2335134032,li.jsx-2335134032,fieldset.jsx-2335134032,form.jsx-2335134032,label.jsx-2335134032,legend.jsx-2335134032,table.jsx-2335134032,caption.jsx-2335134032,tbody.jsx-2335134032,tfoot.jsx-2335134032,thead.jsx-2335134032,tr.jsx-2335134032,th.jsx-2335134032,td.jsx-2335134032,article.jsx-2335134032,aside.jsx-2335134032,canvas.jsx-2335134032,details.jsx-2335134032,embed.jsx-2335134032,figure.jsx-2335134032,figcaption.jsx-2335134032,footer.jsx-2335134032,header.jsx-2335134032,hgroup.jsx-2335134032,menu.jsx-2335134032,nav.jsx-2335134032,output.jsx-2335134032,ruby.jsx-2335134032,section.jsx-2335134032,summary.jsx-2335134032,time.jsx-2335134032,mark.jsx-2335134032,audio.jsx-2335134032,video.jsx-2335134032{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article.jsx-2335134032,aside.jsx-2335134032,details.jsx-2335134032,figcaption.jsx-2335134032,figure.jsx-2335134032,footer.jsx-2335134032,header.jsx-2335134032,hgroup.jsx-2335134032,menu.jsx-2335134032,nav.jsx-2335134032,section.jsx-2335134032{display:block;}body.jsx-2335134032{line-height:1;margin:0;}ol.jsx-2335134032,ul.jsx-2335134032{list-style:none;}blockquote.jsx-2335134032,q.jsx-2335134032{quotes:none;}blockquote.jsx-2335134032:before,blockquote.jsx-2335134032:after,q.jsx-2335134032:before,q.jsx-2335134032:after{content:'';content:none;}table.jsx-2335134032{border-collapse:collapse;border-spacing:0;}.wrapper.jsx-2335134032{width:100%;height:100vh;background-color:white;font-family:'Verdana',sans-serif;}.wrapper-contained.jsx-2335134032{box-sizing:border-box;width:80%;min-height:475px;margin:0 auto;margin-top:100px;padding:40px;background-color:#f7f7f7;-webkit-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);-moz-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);box-shadow:0px 4px 2px -2px rgba(217,217,217,1);margin-bottom:100px;}h1.jsx-2335134032{font-size:36px;}h4.jsx-2335134032{margin-top:20px;font-weight:700;}.weather-grid.jsx-2335134032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-directiokn:row;-ms-flex-directiokn:row;flex-directiokn:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RW9CLEFBZ0JzQixBQVVLLEFBR0EsQUFJRSxBQUdKLEFBSUQsQUFJYyxBQVlkLEFBT1csQUFjUCxBQUlDLEFBS0YsU0FyRUosRUF3QkcsQUFnQkEsQ0FwQmYsRUFWQSxBQUdXLENBZ0RYLENBNUNBLEFBZ0RrQixHQWhFUCxHQThDQyxDQWpDWixDQVdBLEFBZ0J5QixDQWJOLEdBMUJGLElBOENFLEFBa0JuQixVQXJDQSxDQTFCZSxJQXVDcUIsRUFPcEIsT0E3Q1UsT0E4Q1AsV0FvQkksTUFqRXZCLEFBc0NBLEFBUWUsYUFDWSx5QkFDK0IsNEJBa0J4Qyw0QkFqQnFDLDZCQWtCN0Isd0JBakJ3QixnREFDNUIsb0JBQ3RCLE9BZ0J1QixpR0FDdkIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9zbmFwcHkvbWFzdGVyL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBDbGFzcyBBYm91dCBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pIHtcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tJyk7XG4gICAgLy8gY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyBxdWVyeSB9XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBpZih0aGlzLnByb3BzLnF1ZXJ5LndlYXRoZXIgPT0gJ3VuZGVmaW5lZCcpe1xuXG5cbiAgICAgIHZhciBDdXJyZW50VGVtcEFuZExvYyA9ICg8aDE+T29vcHMhPC9oMT4pO1xuICAgICAgdmFyIERhaWx5VGVtcCA9ICg8ZGl2Pk5vIFZhbGlkIENpdHkgRm91bmQsIFRyeSBBZ2FpbiE8L2Rpdj4pXG5cblxuICAgIH1lbHNlIHtcblxuXG4gICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0ID0gdGhpcy5wcm9wcy5xdWVyeS53ZWF0aGVyLmZvcmVjYXN0O1xuXG4gICAgdmFyIEN1cnJlbnRUZW1wQW5kTG9jID0gKDxkaXY+PGgxPldlYXRoZXIgZm9yIHt0aGlzLnByb3BzLnF1ZXJ5LndlYXRoZXIubG9jYXRpb24ubmFtZX08L2gxPlxuICAgICAgICAgIDxoND5DdXJyZW50bHkge3RoaXMucHJvcHMucXVlcnkud2VhdGhlci5jdXJyZW50LnRlbXBlcmF0dXJlfSBDIGFuZCB7dGhpcy5wcm9wcy5xdWVyeS53ZWF0aGVyLmN1cnJlbnQuc2t5dGV4dH08L2g0PjwvZGl2Pik7XG5cbiAgICB2YXIgRGFpbHlUZW1wID0gd2VhdGhlckZvcmVjYXN0Lm1hcCggcm93cyA9PiB7XG5cblxuICAgICAgY29uc29sZS5sb2cocm93cyk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtyb3dzLmRhdGV9IGNsYXNzTmFtZT1cInJlc3VsdHMtZmxleC1yb3dcIj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnJlc3VsdHMtZmxleC1yb3cge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDMzLjY2NjY2NjY2NjY3JTtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDJweCAtMnB4IHJnYmEoMjE3LDIxNywyMTcsMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDJweCAtMnB4IHJnYmEoMjE3LDIxNywyMTcsMSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuXG5cbiAgICAgICAgICA8ZGl2PkRhdGU6IHtyb3dzLmRhdGV9PC9kaXY+XG4gICAgICAgICAgPGRpdj57cm93cy5za3l0ZXh0ZGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXY+TG93IG9mIHtyb3dzLmxvd30gQzwvZGl2PlxuICAgICAgICAgIDxkaXY+SGlnaCBvZiB7cm93cy5oaWdofSBDPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gICAgfSk7XG5cbiAgICB9XG5cblxuXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbiAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG4gICAgICAgICAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuICAgICAgICAgIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbiAgICAgICAgICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuICAgICAgICAgIGIsIHUsIGksIGNlbnRlcixcbiAgICAgICAgICBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuICAgICAgICAgIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxuICAgICAgICAgIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuICAgICAgICAgIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbiAgICAgICAgICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxuICAgICAgICAgIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxuICAgICAgICAgIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuICAgICAgICAgIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuICAgICAgICAgIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgb2wsIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJsb2NrcXVvdGUsIHEge1xuICAgICAgICAgICAgcXVvdGVzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbiAgICAgICAgICBxOmJlZm9yZSwgcTphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8qKioqKioqKipcbiAgICAgICAgICAqXG4gICAgICAgICAgKiBTdGFydCBDU1MgU3R5bGVzXG4gICAgICAgICAgKlxuICAgICAgICAgICoqKioqKioqKiovXG5cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyYXBwZXItY29udGFpbmVkIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNDc1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMnB4IC0ycHggcmdiYSgyMTcsMjE3LDIxNywxKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53ZWF0aGVyLWdyaWQge1xuICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgICAgICAgICAgZmxleC1kaXJlY3Rpb2tuOiByb3c7XG4gICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyLWNvbnRhaW5lZCc+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlci1ncmlkXCI+XG4gICAgICAgICAgICB7Q3VycmVudFRlbXBBbmRMb2N9XG4gICAgICAgICAgICB7RGFpbHlUZW1wfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/pages/about.js */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2335134032" + " " + 'wrapper-contained'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2335134032" + " " + 'weather-container'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2335134032" + " " + "weather-grid"
      }, CurrentTempAndLoc, DailyTemp))));
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
                return _context.abrupt("return", {
                  query: query
                });

              case 2:
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

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about.js.e76869296d962eacfddb.hot-update.js.map