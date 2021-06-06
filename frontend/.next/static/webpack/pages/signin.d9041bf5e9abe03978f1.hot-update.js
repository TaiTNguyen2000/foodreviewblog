webpackHotUpdate_N_E("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_auth_SigninComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/auth/SigninComponent */ "./components/auth/SigninComponent.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
var _this = undefined,
    _jsxFileName = "D:\\HUFLIT\\Nam 3\\HK2\\CNPMNC\\foodie-blog\\frontend\\pages\\signin.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







var Signin = function Signin(_ref) {
  var router = _ref.router;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, " Signin | ", _config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]));
  };

  var showRedirectMessage = function showRedirectMessage() {
    if (router.query.message) {
      return __jsx("div", {
        className: "alert alert-danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 14
        }
      }, router.query.message);
    } else {
      return;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, head(), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-center pt-4 pb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Signin"), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 offset-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, showRedirectMessage())), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6 offset-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_components_auth_SigninComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }))))));
};

_c = Signin;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Signin));

var _c, _c2;

$RefreshReg$(_c, "Signin");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIlNpZ25pbiIsInJvdXRlciIsImhlYWQiLCJBUFBfTkFNRSIsInNob3dSZWRpcmVjdE1lc3NhZ2UiLCJxdWVyeSIsIm1lc3NhZ2UiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQzdCLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FDWCxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFrQkMsZ0RBQWxCLENBREYsQ0FEVztBQUFBLEdBQWI7O0FBTUEsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDLFFBQUlILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxPQUFqQixFQUEwQjtBQUN4QixhQUFPO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFDTCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsT0FBbEQsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMO0FBQ0Q7QUFDRixHQU5EOztBQVFBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixJQUFJLEVBRFAsRUFFRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBR0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q0UsbUJBQW1CLEVBQTFELENBREYsQ0FIRixFQU9FO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBUEYsQ0FERixDQUZGLENBREY7QUFvQkQsQ0FuQ0Q7O0tBQU1KLE07QUFxQ1MscUVBQUFPLDhEQUFVLENBQUNQLE1BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLmQ5MDQxYmY1ZTlhYmUwMzk3OGYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNpZ25pbkNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvU2lnbmluQ29tcG9uZW50JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQVBJLCBBUFBfTkFNRSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5jb25zdCBTaWduaW4gPSAoeyByb3V0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPiBTaWduaW4gfCB7QVBQX05BTUV9PC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG5cclxuICBjb25zdCBzaG93UmVkaXJlY3RNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5tZXNzYWdlKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtZGFuZ2VyJz57cm91dGVyLnF1ZXJ5Lm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtoZWFkKCl9XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBwdC00IHBiLTQnPlNpZ25pbjwvaDI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBvZmZzZXQtbWQtMyc+e3Nob3dSZWRpcmVjdE1lc3NhZ2UoKX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgb2Zmc2V0LW1kLTMnPlxyXG4gICAgICAgICAgICAgIDxTaWduaW5Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNpZ25pbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=