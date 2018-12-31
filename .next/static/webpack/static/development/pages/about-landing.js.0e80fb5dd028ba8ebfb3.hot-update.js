webpackHotUpdate("static/development/pages/about-landing.js",{

/***/ "./pages/about-landing.js":
/*!********************************!*\
  !*** ./pages/about-landing.js ***!
  \********************************/
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
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2335134032" + " " + 'wrapper'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2335134032",
        css: "html.jsx-2335134032,body.jsx-2335134032,div.jsx-2335134032,span.jsx-2335134032,applet.jsx-2335134032,object.jsx-2335134032,iframe.jsx-2335134032,h1.jsx-2335134032,h2.jsx-2335134032,h3.jsx-2335134032,h4.jsx-2335134032,h5.jsx-2335134032,h6.jsx-2335134032,p.jsx-2335134032,blockquote.jsx-2335134032,pre.jsx-2335134032,a.jsx-2335134032,abbr.jsx-2335134032,acronym.jsx-2335134032,address.jsx-2335134032,big.jsx-2335134032,cite.jsx-2335134032,code.jsx-2335134032,del.jsx-2335134032,dfn.jsx-2335134032,em.jsx-2335134032,img.jsx-2335134032,ins.jsx-2335134032,kbd.jsx-2335134032,q.jsx-2335134032,s.jsx-2335134032,samp.jsx-2335134032,small.jsx-2335134032,strike.jsx-2335134032,strong.jsx-2335134032,sub.jsx-2335134032,sup.jsx-2335134032,tt.jsx-2335134032,var.jsx-2335134032,b.jsx-2335134032,u.jsx-2335134032,i.jsx-2335134032,center.jsx-2335134032,dl.jsx-2335134032,dt.jsx-2335134032,dd.jsx-2335134032,ol.jsx-2335134032,ul.jsx-2335134032,li.jsx-2335134032,fieldset.jsx-2335134032,form.jsx-2335134032,label.jsx-2335134032,legend.jsx-2335134032,table.jsx-2335134032,caption.jsx-2335134032,tbody.jsx-2335134032,tfoot.jsx-2335134032,thead.jsx-2335134032,tr.jsx-2335134032,th.jsx-2335134032,td.jsx-2335134032,article.jsx-2335134032,aside.jsx-2335134032,canvas.jsx-2335134032,details.jsx-2335134032,embed.jsx-2335134032,figure.jsx-2335134032,figcaption.jsx-2335134032,footer.jsx-2335134032,header.jsx-2335134032,hgroup.jsx-2335134032,menu.jsx-2335134032,nav.jsx-2335134032,output.jsx-2335134032,ruby.jsx-2335134032,section.jsx-2335134032,summary.jsx-2335134032,time.jsx-2335134032,mark.jsx-2335134032,audio.jsx-2335134032,video.jsx-2335134032{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article.jsx-2335134032,aside.jsx-2335134032,details.jsx-2335134032,figcaption.jsx-2335134032,figure.jsx-2335134032,footer.jsx-2335134032,header.jsx-2335134032,hgroup.jsx-2335134032,menu.jsx-2335134032,nav.jsx-2335134032,section.jsx-2335134032{display:block;}body.jsx-2335134032{line-height:1;margin:0;}ol.jsx-2335134032,ul.jsx-2335134032{list-style:none;}blockquote.jsx-2335134032,q.jsx-2335134032{quotes:none;}blockquote.jsx-2335134032:before,blockquote.jsx-2335134032:after,q.jsx-2335134032:before,q.jsx-2335134032:after{content:'';content:none;}table.jsx-2335134032{border-collapse:collapse;border-spacing:0;}.wrapper.jsx-2335134032{width:100%;height:100vh;background-color:white;font-family:'Verdana',sans-serif;}.wrapper-contained.jsx-2335134032{box-sizing:border-box;width:80%;min-height:475px;margin:0 auto;margin-top:100px;padding:40px;background-color:#f7f7f7;-webkit-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);-moz-box-shadow:0px 4px 2px -2px rgba(217,217,217,1);box-shadow:0px 4px 2px -2px rgba(217,217,217,1);margin-bottom:100px;}h1.jsx-2335134032{font-size:36px;}h4.jsx-2335134032{margin-top:20px;font-weight:700;}.weather-grid.jsx-2335134032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-directiokn:row;-ms-flex-directiokn:row;flex-directiokn:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFiYWsvU2l0ZXMvc25hcHB5L21hc3Rlci9wYWdlcy9hYm91dC1sYW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFnQnNCLEFBVUssQUFHQSxBQUlFLEFBR0osQUFJRCxBQUljLEFBWWQsQUFPVyxBQWNQLEFBSUMsQUFLRixTQXJFSixFQXdCRyxBQWdCQSxDQXBCZixFQVZBLEFBR1csQ0FnRFgsQ0E1Q0EsQUFnRGtCLEdBaEVQLEdBOENDLENBakNaLENBV0EsQUFnQnlCLENBYk4sR0ExQkYsSUE4Q0UsQUFrQm5CLFVBckNBLENBMUJlLElBdUNxQixFQU9wQixPQTdDVSxPQThDUCxXQW9CSSxNQWpFdkIsQUFzQ0EsQUFRZSxhQUNZLHlCQUMrQiw0QkFrQnhDLDRCQWpCcUMsNkJBa0I3Qix3QkFqQndCLGdEQUM1QixvQkFDdEIsT0FnQnVCLGlHQUN2QiIsImZpbGUiOiIvVXNlcnMvamJhYmFrL1NpdGVzL3NuYXBweS9tYXN0ZXIvcGFnZXMvYWJvdXQtbGFuZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQ2xhc3MgQWJvdXQgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7cXVlcnl9KSB7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tJyk7XG4gICAgLy8gY29uc29sZS5sb2cocXVlcnkpO1xuICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLScpO1xuICAgIC8vIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgcXVlcnkgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlcic+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbiAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG4gICAgICAgICAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuICAgICAgICAgIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbiAgICAgICAgICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuICAgICAgICAgIGIsIHUsIGksIGNlbnRlcixcbiAgICAgICAgICBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuICAgICAgICAgIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxuICAgICAgICAgIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuICAgICAgICAgIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbiAgICAgICAgICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxuICAgICAgICAgIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxuICAgICAgICAgIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuICAgICAgICAgIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuICAgICAgICAgIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgb2wsIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJsb2NrcXVvdGUsIHEge1xuICAgICAgICAgICAgcXVvdGVzOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbiAgICAgICAgICBxOmJlZm9yZSwgcTphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIC8qKioqKioqKipcbiAgICAgICAgICAqXG4gICAgICAgICAgKiBTdGFydCBDU1MgU3R5bGVzXG4gICAgICAgICAgKlxuICAgICAgICAgICoqKioqKioqKiovXG5cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyYXBwZXItY29udGFpbmVkIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNDc1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMnB4IC0ycHggcmdiYSgyMTcsMjE3LDIxNywxKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAycHggLTJweCByZ2JhKDIxNywyMTcsMjE3LDEpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53ZWF0aGVyLWdyaWQge1xuICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IC8qIG9yIGlubGluZS1mbGV4ICovXG4gICAgICAgICAgICAgZmxleC1kaXJlY3Rpb2tuOiByb3c7XG4gICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyLWNvbnRhaW5lZCc+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VhdGhlci1jb250YWluZXInPlxuICAgICAgICAgIDxoMz5UcnkgZW50ZXJpbmcgYSBjaXR5IC9hYm91dC9bQ2l0eSBOYW1lXTwvaDM+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/jbabak/Sites/snappy/master/pages/about-landing.js */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2335134032" + " " + 'wrapper-contained'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2335134032" + " " + 'weather-container'
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        className: "jsx-2335134032"
      }, "Try entering a city /about/[City Name]"))));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about-landing")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=about-landing.js.0e80fb5dd028ba8ebfb3.hot-update.js.map