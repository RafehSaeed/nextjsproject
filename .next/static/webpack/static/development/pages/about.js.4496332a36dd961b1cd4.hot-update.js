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
        var weatherForecast = this.props.query.weather.forecast;

        var _CurrentTempAndLoc = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Weather for ", this.props.query.weather.location.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, "Currently ", this.props.query.weather.current.temperature, " C and ", this.props.query.weather.current.skytext));

        var _DailyTemp = weatherForecast.map(function (rows) {
          console.log(rows);
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
            key: rows.date,
            className: "jsx-2805868132" + " " + "results-flex-row"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
            styleId: "2805868132",
            css: ".results-flex-row.jsx-2805868132{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;background-color:white;width:33.66666666667%;margin:15px;margin-top:20px;margin-bottom:20px;padding:10px;-webkit-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);-moz-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);box-shadow:0px 4px 2px -2px rgba(217,217,217,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm9CLEFBR21DLHNCQUNWLHVFQUNXLHVCQUNELHNCQUNWLFlBQ0ksZ0JBQ0csbUJBQ04sYUFDMkMsd0RBQ0gscURBQ0wsZ0RBRWxEIiwiZmlsZSI6Ii9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQ2xhc3MgQWJvdXQgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnl9KSB7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tJyk7XG4gICAgLy8gY29uc29sZS5sb2cocXVlcnkpO1xuICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLScpO1xuICAgIC8vIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgcXVlcnkgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgaWYodGhpcy5wcm9wcy5xdWVyeS53ZWF0aGVyID09ICd1bmRlZmluZWQnKXtcblxuXG4gICAgY29uc3Qgd2VhdGhlckZvcmVjYXN0ID0gdGhpcy5wcm9wcy5xdWVyeS53ZWF0aGVyLmZvcmVjYXN0O1xuXG4gICAgY29uc3QgQ3VycmVudFRlbXBBbmRMb2MgPSAoPGRpdj48aDE+V2VhdGhlciBmb3Ige3RoaXMucHJvcHMucXVlcnkud2VhdGhlci5sb2NhdGlvbi5uYW1lfTwvaDE+XG4gICAgICAgICAgPGg0PkN1cnJlbnRseSB7dGhpcy5wcm9wcy5xdWVyeS53ZWF0aGVyLmN1cnJlbnQudGVtcGVyYXR1cmV9IEMgYW5kIHt0aGlzLnByb3BzLnF1ZXJ5LndlYXRoZXIuY3VycmVudC5za3l0ZXh0fTwvaDQ+PC9kaXY+KTtcblxuICAgIGNvbnN0IERhaWx5VGVtcCA9IHdlYXRoZXJGb3JlY2FzdC5tYXAoIHJvd3MgPT4ge1xuXG5cbiAgICAgIGNvbnNvbGUubG9nKHJvd3MpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17cm93cy5kYXRlfSBjbGFzc05hbWU9XCJyZXN1bHRzLWZsZXgtcm93XCI+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5yZXN1bHRzLWZsZXgtcm93IHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAzMy42NjY2NjY2NjY2NyU7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMnB4IC0ycHggcmdiYSgyMTcsMjE3LDIxNywxKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cblxuXG4gICAgICAgICAgPGRpdj5EYXRlOiB7cm93cy5kYXRlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e3Jvd3Muc2t5dGV4dGRheX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PkxvdyBvZiB7cm93cy5sb3d9IEM8L2Rpdj5cbiAgICAgICAgICA8ZGl2PkhpZ2ggb2Yge3Jvd3MuaGlnaH0gQzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcblxuICAgIH0pO1xuXG5cblxuXG4gICAgfWVsc2Uge1xuXG4gICAgICBjb25zdCBDdXJyZW50VGVtcEFuZExvYyA9ICg8aDE+T29vcHMhPC9oMT4pO1xuICAgICAgY29uc3QgRGFpbHlUZW1wID0gKDxkaXY+Tm8gVmFsaWQgQ2l0eSBGb3VuZCwgVHJ5IEFnYWluITwvZGl2Pik7XG5cblxuICAgIH1cblxuXG5cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbiAgICAgICAgICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG4gICAgICAgICAgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuICAgICAgICAgIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG4gICAgICAgICAgYiwgdSwgaSwgY2VudGVyLFxuICAgICAgICAgIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG4gICAgICAgICAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG4gICAgICAgICAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG4gICAgICAgICAgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuICAgICAgICAgIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG4gICAgICAgICAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG4gICAgICAgICAgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4gICAgICAgICAgYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG4gICAgICAgICAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbCwgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmxvY2txdW90ZSwgcSB7XG4gICAgICAgICAgICBxdW90ZXM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxuICAgICAgICAgIHE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLyoqKioqKioqKlxuICAgICAgICAgICpcbiAgICAgICAgICAqIFN0YXJ0IENTUyBTdHlsZXNcbiAgICAgICAgICAqXG4gICAgICAgICAgKioqKioqKioqKi9cblxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdWZXJkYW5hJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JhcHBlci1jb250YWluZWQge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0NzVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDJweCAtMnB4IHJnYmEoMjE3LDIxNywyMTcsMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDJweCAtMnB4IHJnYmEoMjE3LDIxNywyMTcsMSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndlYXRoZXItZ3JpZCB7XG4gICAgICAgICAgICAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cbiAgICAgICAgICAgICBmbGV4LWRpcmVjdGlva246IHJvdztcbiAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXItY29udGFpbmVkJz5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWF0aGVyLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyLWdyaWRcIj5cbiAgICAgICAgICAgIHtDdXJyZW50VGVtcEFuZExvY31cbiAgICAgICAgICAgIHtEYWlseVRlbXB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/pages/about.js */"
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
      } else {
        var _CurrentTempAndLoc2 = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Ooops!");

        var _DailyTemp2 = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "No Valid City Found, Try Again!");
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2335134032" + " " + 'wrapper'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2335134032",
        css: "html.jsx-2335134032,body.jsx-2335134032,div.jsx-2335134032,span.jsx-2335134032,applet.jsx-2335134032,object.jsx-2335134032,iframe.jsx-2335134032,h1.jsx-2335134032,h2.jsx-2335134032,h3.jsx-2335134032,h4.jsx-2335134032,h5.jsx-2335134032,h6.jsx-2335134032,p.jsx-2335134032,blockquote.jsx-2335134032,pre.jsx-2335134032,a.jsx-2335134032,abbr.jsx-2335134032,acronym.jsx-2335134032,address.jsx-2335134032,big.jsx-2335134032,cite.jsx-2335134032,code.jsx-2335134032,del.jsx-2335134032,dfn.jsx-2335134032,em.jsx-2335134032,img.jsx-2335134032,ins.jsx-2335134032,kbd.jsx-2335134032,q.jsx-2335134032,s.jsx-2335134032,samp.jsx-2335134032,small.jsx-2335134032,strike.jsx-2335134032,strong.jsx-2335134032,sub.jsx-2335134032,sup.jsx-2335134032,tt.jsx-2335134032,var.jsx-2335134032,b.jsx-2335134032,u.jsx-2335134032,i.jsx-2335134032,center.jsx-2335134032,dl.jsx-2335134032,dt.jsx-2335134032,dd.jsx-2335134032,ol.jsx-2335134032,ul.jsx-2335134032,li.jsx-2335134032,fieldset.jsx-2335134032,form.jsx-2335134032,label.jsx-2335134032,legend.jsx-2335134032,table.jsx-2335134032,caption.jsx-2335134032,tbody.jsx-2335134032,tfoot.jsx-2335134032,thead.jsx-2335134032,tr.jsx-2335134032,th.jsx-2335134032,td.jsx-2335134032,article.jsx-2335134032,aside.jsx-2335134032,canvas.jsx-2335134032,details.jsx-2335134032,embed.jsx-2335134032,figure.jsx-2335134032,figcaption.jsx-2335134032,footer.jsx-2335134032,header.jsx-2335134032,hgroup.jsx-2335134032,menu.jsx-2335134032,nav.jsx-2335134032,output.jsx-2335134032,ruby.jsx-2335134032,section.jsx-2335134032,summary.jsx-2335134032,time.jsx-2335134032,mark.jsx-2335134032,audio.jsx-2335134032,video.jsx-2335134032{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article.jsx-2335134032,aside.jsx-2335134032,details.jsx-2335134032,figcaption.jsx-2335134032,figure.jsx-2335134032,footer.jsx-2335134032,header.jsx-2335134032,hgroup.jsx-2335134032,menu.jsx-2335134032,nav.jsx-2335134032,section.jsx-2335134032{display:block;}body.jsx-2335134032{line-height:1;margin:0;}ol.jsx-2335134032,ul.jsx-2335134032{list-style:none;}blockquote.jsx-2335134032,q.jsx-2335134032{quotes:none;}blockquote.jsx-2335134032:before,blockquote.jsx-2335134032:after,q.jsx-2335134032:before,q.jsx-2335134032:after{content:'';content:none;}table.jsx-2335134032{border-collapse:collapse;border-spacing:0;}.wrapper.jsx-2335134032{width:100%;height:100vh;background-color:white;font-family:'Verdana',sans-serif;}.wrapper-contained.jsx-2335134032{box-sizing:border-box;width:80%;min-height:475px;margin:0 auto;margin-top:100px;padding:40px;background-color:#f7f7f7;-webkit-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);-moz-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);box-shadow:0px 4px 2px -2px rgba(217,217,217,1);margin-bottom:100px;}h1.jsx-2335134032{font-size:36px;}h4.jsx-2335134032{margin-top:20px;font-weight:700;}.weather-grid.jsx-2335134032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-directiokn:row;-ms-flex-directiokn:row;flex-directiokn:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRW9CLEFBZ0JzQixBQVVLLEFBR0EsQUFJRSxBQUdKLEFBSUQsQUFJYyxBQVlkLEFBT1csQUFjUCxBQUlDLEFBS0YsU0FyRUosRUF3QkcsQUFnQkEsQ0FwQmYsRUFWQSxBQUdXLENBZ0RYLENBNUNBLEFBZ0RrQixHQWhFUCxHQThDQyxDQWpDWixDQVdBLEFBZ0J5QixDQWJOLEdBMUJGLElBOENFLEFBa0JuQixVQXJDQSxDQTFCZSxJQXVDcUIsRUFPcEIsT0E3Q1UsT0E4Q1AsV0FvQkksTUFqRXZCLEFBc0NBLEFBUWUsYUFDWSx5QkFDK0IsNEJBa0J4Qyw0QkFqQnFDLDZCQWtCN0Isd0JBakJ3QixnREFDNUIsb0JBQ3RCLE9BZ0J1QixpR0FDdkIiLCJmaWxlIjoiL1VzZXJzL2piYWJhay9TaXRlcy9zbmFwcHkvbWFzdGVyL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBDbGFzcyBBYm91dCBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pIHtcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tJyk7XG4gICAgLy8gY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyBxdWVyeSB9XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBpZih0aGlzLnByb3BzLnF1ZXJ5LndlYXRoZXIgPT0gJ3VuZGVmaW5lZCcpe1xuXG5cbiAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3QgPSB0aGlzLnByb3BzLnF1ZXJ5LndlYXRoZXIuZm9yZWNhc3Q7XG5cbiAgICBjb25zdCBDdXJyZW50VGVtcEFuZExvYyA9ICg8ZGl2PjxoMT5XZWF0aGVyIGZvciB7dGhpcy5wcm9wcy5xdWVyeS53ZWF0aGVyLmxvY2F0aW9uLm5hbWV9PC9oMT5cbiAgICAgICAgICA8aDQ+Q3VycmVudGx5IHt0aGlzLnByb3BzLnF1ZXJ5LndlYXRoZXIuY3VycmVudC50ZW1wZXJhdHVyZX0gQyBhbmQge3RoaXMucHJvcHMucXVlcnkud2VhdGhlci5jdXJyZW50LnNreXRleHR9PC9oND48L2Rpdj4pO1xuXG4gICAgY29uc3QgRGFpbHlUZW1wID0gd2VhdGhlckZvcmVjYXN0Lm1hcCggcm93cyA9PiB7XG5cblxuICAgICAgY29uc29sZS5sb2cocm93cyk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtyb3dzLmRhdGV9IGNsYXNzTmFtZT1cInJlc3VsdHMtZmxleC1yb3dcIj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnJlc3VsdHMtZmxleC1yb3cge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDMzLjY2NjY2NjY2NjY3JTtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDJweCAtMnB4IHJnYmEoMjE3LDIxNywyMTcsMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDJweCAtMnB4IHJnYmEoMjE3LDIxNywyMTcsMSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuXG5cbiAgICAgICAgICA8ZGl2PkRhdGU6IHtyb3dzLmRhdGV9PC9kaXY+XG4gICAgICAgICAgPGRpdj57cm93cy5za3l0ZXh0ZGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXY+TG93IG9mIHtyb3dzLmxvd30gQzwvZGl2PlxuICAgICAgICAgIDxkaXY+SGlnaCBvZiB7cm93cy5oaWdofSBDPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gICAgfSk7XG5cblxuXG5cbiAgICB9ZWxzZSB7XG5cbiAgICAgIGNvbnN0IEN1cnJlbnRUZW1wQW5kTG9jID0gKDxoMT5Pb29wcyE8L2gxPik7XG4gICAgICBjb25zdCBEYWlseVRlbXAgPSAoPGRpdj5ObyBWYWxpZCBDaXR5IEZvdW5kLCBUcnkgQWdhaW4hPC9kaXY+KTtcblxuXG4gICAgfVxuXG5cblxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG4gICAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuICAgICAgICAgIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbiAgICAgICAgICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG4gICAgICAgICAgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbiAgICAgICAgICBiLCB1LCBpLCBjZW50ZXIsXG4gICAgICAgICAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbiAgICAgICAgICBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbiAgICAgICAgICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbiAgICAgICAgICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG4gICAgICAgICAgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbiAgICAgICAgICBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbiAgICAgICAgICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbiAgICAgICAgICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbiAgICAgICAgICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9sLCB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBibG9ja3F1b3RlLCBxIHtcbiAgICAgICAgICAgIHF1b3Rlczogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG4gICAgICAgICAgcTpiZWZvcmUsIHE6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICAvKioqKioqKioqXG4gICAgICAgICAgKlxuICAgICAgICAgICogU3RhcnQgQ1NTIFN0eWxlc1xuICAgICAgICAgICpcbiAgICAgICAgICAqKioqKioqKioqL1xuXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cmFwcGVyLWNvbnRhaW5lZCB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ3NXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDJweCAtMnB4IHJnYmEoMjE3LDIxNywyMTcsMSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMnB4IC0ycHggcmdiYSgyMTcsMjE3LDIxNywxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMnB4IC0ycHggcmdiYSgyMTcsMjE3LDIxNywxKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud2VhdGhlci1ncmlkIHtcbiAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAvKiBvciBpbmxpbmUtZmxleCAqL1xuICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9rbjogcm93O1xuICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlci1jb250YWluZWQnPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlYXRoZXItY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXItZ3JpZFwiPlxuICAgICAgICAgICAge0N1cnJlbnRUZW1wQW5kTG9jfVxuICAgICAgICAgICAge0RhaWx5VGVtcH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/pages/about.js */"
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
//# sourceMappingURL=about.js.4496332a36dd961b1cd4.hot-update.js.map