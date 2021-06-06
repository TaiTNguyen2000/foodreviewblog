webpackHotUpdate_N_E("pages/blogs",{

/***/ "./components/blog/Search.js":
/*!***********************************!*\
  !*** ./components/blog/Search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");


var _this = undefined,
    _jsxFileName = "D:\\HUFLIT\\Nam 3\\HK2\\CNPMNC\\foodie-blog\\frontend\\components\\blog\\Search.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Search = function Search() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    search: undefined,
    results: [],
    searched: false,
    message: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var search = values.search,
      results = values.results,
      searched = values.searched,
      message = values.message;

  var searchSubmit = function searchSubmit(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["listSearch"])({
      search: search
    }).then(function (data) {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        results: data,
        searched: true,
        message: "T\xECm \u0111\u01B0\u1EE3c ".concat(data.length, " b\xE0i vi\u1EBFt")
      }));
    });
  };

  var handleChange = function handleChange(e) {
    // console.log(e.target.value);
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      search: e.target.value,
      searched: false,
      results: []
    }));
  };

  var searchedBlogs = function searchedBlogs() {
    var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return __jsx("div", {
      className: "jumbotron bg-white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, message && __jsx("p", {
      className: "pt-4 text-muted font-italic",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, message), results.map(function (blog, i) {
      return __jsx("div", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/blogs/".concat(blog.slug),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "text-primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, blog.title)));
    }));
  };

  var searchForm = function searchForm() {
    return __jsx("form", {
      onSubmit: searchSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "col-md-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, __jsx("input", {
      type: "search",
      className: "form-control",
      placeholder: "T\xECm ki\u1EBFm b\xE0i vi\u1EBFt",
      onChange: handleChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }, __jsx("button", {
      className: "btn btn-block btn-outline-primary",
      type: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, "T\xECm ki\u1EBFm"))));
  };

  return __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "pt-3 pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, searchForm()), searched && __jsx("div", {
    style: {
      marginTop: '-120px',
      marginBottom: '-80px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, searchedBlogs(results)));
};

_s(Search, "XKn29j5Af361+uLxpf64hSNC1VI=");

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInVuZGVmaW5lZCIsInJlc3VsdHMiLCJzZWFyY2hlZCIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZWFyY2hTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsaXN0U2VhcmNoIiwidGhlbiIsImRhdGEiLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaGVkQmxvZ3MiLCJtYXAiLCJibG9nIiwiaSIsInNsdWciLCJ0aXRsZSIsInNlYXJjaEZvcm0iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixrQkFBNEJDLHNEQUFRLENBQUM7QUFDbkNDLFVBQU0sRUFBRUMsU0FEMkI7QUFFbkNDLFdBQU8sRUFBRSxFQUYwQjtBQUduQ0MsWUFBUSxFQUFFLEtBSHlCO0FBSW5DQyxXQUFPLEVBQUU7QUFKMEIsR0FBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQU9BLE1BQVFOLE1BQVIsR0FBK0NLLE1BQS9DLENBQVFMLE1BQVI7QUFBQSxNQUFnQkUsT0FBaEIsR0FBK0NHLE1BQS9DLENBQWdCSCxPQUFoQjtBQUFBLE1BQXlCQyxRQUF6QixHQUErQ0UsTUFBL0MsQ0FBeUJGLFFBQXpCO0FBQUEsTUFBbUNDLE9BQW5DLEdBQStDQyxNQUEvQyxDQUFtQ0QsT0FBbkM7O0FBRUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsb0VBQVUsQ0FBQztBQUFF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TUosTTs7S0FBQUEsTTtBQW1GU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MuNjlhYzRjZDdhNDliYzU1MGZiZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gJ3JlYWN0LXJlbmRlci1odG1sJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbGlzdFNlYXJjaCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZyc7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIHNlYXJjaDogdW5kZWZpbmVkLFxyXG4gICAgcmVzdWx0czogW10sXHJcbiAgICBzZWFyY2hlZDogZmFsc2UsXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBzZWFyY2gsIHJlc3VsdHMsIHNlYXJjaGVkLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG4gIGNvbnN0IHNlYXJjaFN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsaXN0U2VhcmNoKHsgc2VhcmNoIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgcmVzdWx0czogZGF0YSxcclxuICAgICAgICBzZWFyY2hlZDogdHJ1ZSxcclxuICAgICAgICBtZXNzYWdlOiBgVMOsbSDEkcaw4bujYyAke2RhdGEubGVuZ3RofSBiw6BpIHZp4bq/dGAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFZhbHVlcyh7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgc2VhcmNoZWQ6IGZhbHNlLFxyXG4gICAgICByZXN1bHRzOiBbXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlYXJjaGVkQmxvZ3MgPSAocmVzdWx0cyA9IFtdKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nanVtYm90cm9uIGJnLXdoaXRlJz5cclxuICAgICAgICB7bWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9J3B0LTQgdGV4dC1tdXRlZCBmb250LWl0YWxpYyc+e21lc3NhZ2V9PC9wPn1cclxuXHJcbiAgICAgICAge3Jlc3VsdHMubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9ncy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz57YmxvZy50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWFyY2hGb3JtID0gKCkgPT4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3NlYXJjaFN1Ym1pdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtOCc+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT0nc2VhcmNoJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1TDrG0ga2nhur9tIGLDoGkgdmnhur90J1xyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWJsb2NrIGJ0bi1vdXRsaW5lLXByaW1hcnknIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICAgIFTDrG0ga2nhur9tXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtMyBwYi01Jz57c2VhcmNoRm9ybSgpfTwvZGl2PlxyXG4gICAgICB7c2VhcmNoZWQgJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnLTEyMHB4JywgbWFyZ2luQm90dG9tOiAnLTgwcHgnIH19PlxyXG4gICAgICAgICAge3NlYXJjaGVkQmxvZ3MocmVzdWx0cyl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9