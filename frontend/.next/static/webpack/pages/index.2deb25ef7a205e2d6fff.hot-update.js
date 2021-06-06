webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .././node_modules/nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blog_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/Search */ "./components/blog/Search.js");
var _this = undefined,
    _jsxFileName = "D:\\HUFLIT\\Nam 3\\HK2\\CNPMNC\\foodie-blog\\frontend\\components\\Header.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

var Header = function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    setIsOpen(!isOpen);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    color: "light",
    light: true,
    expand: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
    className: "font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, _config__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"])), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    className: "ml-auto",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blogs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Blogs"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "Li\xEAn h\u1EC7")))), !Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "\u0110\u0103ng nh\u1EADp"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "\u0110\u0103ng k\xFD")))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])().role === 0 && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])().name, "'s Dashboard")))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])().role === 1 && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/admin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, "".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])().name, "'s Dashboard")))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["signout"])(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace("/signin");
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Signout")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/user/crud/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
    className: "btn btn-primary text-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, "Write a blog")))))), __jsx(_blog_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }));
};

_s(Header, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiLCJBUFBfTkFNRSIsImlzQXV0aCIsInJvbGUiLCJuYW1lIiwiY3Vyc29yIiwic2lnbm91dCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7O0FBRUFBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUNDLEdBQUQ7QUFBQSxTQUFTQyxnREFBUyxDQUFDQyxLQUFWLEVBQVQ7QUFBQSxDQUE1Qjs7QUFDQUosa0RBQU0sQ0FBQ0sscUJBQVAsR0FBK0IsVUFBQ0gsR0FBRDtBQUFBLFNBQVNDLGdEQUFTLENBQUNHLElBQVYsRUFBVDtBQUFBLENBQS9COztBQUNBTixrREFBTSxDQUFDTyxrQkFBUCxHQUE0QixVQUFDTCxHQUFEO0FBQUEsU0FBU0MsZ0RBQVMsQ0FBQ0csSUFBVixFQUFUO0FBQUEsQ0FBNUI7O0FBRUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixrQkFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJELGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBYUQsNERBQU0sR0FBR0UsSUFBdEIsa0JBREYsQ0FERixDQXZDSixFQThDR0YsNERBQU0sTUFDTCxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVHLFlBQU0sRUFBRTtBQUFWLEtBRFQ7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNQyw2REFBTyxDQUFDO0FBQUEsZUFBTWxCLGtEQUFNLENBQUNtQixPQUFQLFdBQU47QUFBQSxPQUFELENBQWI7QUFBQSxLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQS9DSixFQXlERSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQVMsYUFBUyxFQUFDLDRCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREYsQ0F6REYsQ0FERixDQUxGLENBREYsRUEwRUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUVGLENBREY7QUE4RUQsQ0FyRkQ7O0dBQU1YLE07O0tBQUFBLE07QUF1RlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJkZWIyNWVmN2EyMDVlMmQ2ZmZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBzaWdub3V0LCBpc0F1dGggfSBmcm9tICcuLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQge1xyXG4gIENvbGxhcHNlLFxyXG4gIE5hdmJhcixcclxuICBOYXZiYXJUb2dnbGVyLFxyXG4gIE5hdmJhckJyYW5kLFxyXG4gIE5hdixcclxuICBOYXZJdGVtLFxyXG4gIE5hdkxpbmssXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbiAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duSXRlbSxcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0ICcuLi8uL25vZGVfbW9kdWxlcy9ucHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9ibG9nL1NlYXJjaCc7XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPE5hdmJhciBjb2xvcj0nbGlnaHQnIGxpZ2h0IGV4cGFuZD0nbWQnPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkJz57QVBQX05BTUV9PC9OYXZMaW5rPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nbWwtYXV0bycgbmF2YmFyPlxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYmxvZ3MnPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluaz5CbG9nczwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvbnRhY3QnPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluaz5MacOqbiBo4buHPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIHshaXNBdXRoKCkgJiYgKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvc2lnbmluJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz7EkMSDbmcgbmjhuq1wPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3NpZ251cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+xJDEg25nIGvDvTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7aXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvdXNlcic+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPntgJHtpc0F1dGgoKS5uYW1lfSdzIERhc2hib2FyZGB9PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxICYmIChcclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hZG1pbic+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPntgJHtpc0F1dGgoKS5uYW1lfSdzIERhc2hib2FyZGB9PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtpc0F1dGgoKSAmJiAoXHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWdub3V0KCgpID0+IFJvdXRlci5yZXBsYWNlKGAvc2lnbmluYCkpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTaWdub3V0XHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3VzZXIvY3J1ZC9ibG9nJz5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IHRleHQtbGlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICBXcml0ZSBhIGJsb2dcclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgICA8U2VhcmNoIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=