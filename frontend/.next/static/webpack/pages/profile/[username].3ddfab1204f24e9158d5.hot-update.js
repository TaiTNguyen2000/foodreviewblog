webpackHotUpdate_N_E("pages/profile/[username]",{

/***/ "./pages/profile/[username].js":
/*!*************************************!*\
  !*** ./pages/profile/[username].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_form_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/form/ContactForm */ "./components/form/ContactForm.js");
var _this = undefined,
    _jsxFileName = "D:\\HUFLIT\\Nam 3\\HK2\\CNPMNC\\foodie-blog\\frontend\\pages\\profile\\[username].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var UserProfile = function UserProfile(_ref) {
  var user = _ref.user,
      blogs = _ref.blogs,
      query = _ref.query;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, user.username, " | ", _config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]));
  };

  var showUserBlogs = function showUserBlogs() {
    return blogs.map(function (blog, i) {
      return __jsx("div", {
        className: "mt-4 mb-4",
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/blogs/".concat(blog.slug),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, __jsx("a", {
        className: "lead",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, blog.title)));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, head(), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-md-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 23
    }
  }, user.name), __jsx("p", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }, "Tham gia v\xE0o ", moment__WEBPACK_IMPORTED_MODULE_6___default()(user.createdAt).fromNow()), __jsx("p", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 23
    }
  }, user.about)), __jsx("div", {
    className: "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/user/photo/").concat(user.username),
    className: "img img-fluid img-thumbnail mb-3",
    style: {
      maxHeight: '100px',
      maxWidth: '100%'
    },
    alt: "user profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 23
    }
  })))))))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "container pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, "Nh\u1EEFng b\xE0i vi\u1EBFt g\u1EA7n \u0111\xE2y c\u1EE7a ", user.name), showUserBlogs()))), __jsx("div", {
    className: "col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, "Nh\u1EAFn cho ", user.name), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }), __jsx(_components_form_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    authorEmail: user.email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }))))))));
};

_c = UserProfile;

UserProfile.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  // console.log(query);
  return Object(_actions_user__WEBPACK_IMPORTED_MODULE_4__["userPublicProfile"])(query.username).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log(data);
      return {
        user: data.user,
        blogs: data.blogs,
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmpzIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwidXNlciIsImJsb2dzIiwicXVlcnkiLCJoZWFkIiwidXNlcm5hbWUiLCJBUFBfTkFNRSIsInNob3dVc2VyQmxvZ3MiLCJtYXAiLCJibG9nIiwiaSIsInNsdWciLCJ0aXRsZSIsIm5hbWUiLCJtb21lbnQiLCJjcmVhdGVkQXQiLCJmcm9tTm93IiwiYWJvdXQiLCJBUEkiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsImVtYWlsIiwiZ2V0SW5pdGlhbFByb3BzIiwidXNlclB1YmxpY1Byb2ZpbGUiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTRCO0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQzlDLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FDWCxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dILElBQUksQ0FBQ0ksUUFEUixTQUNxQkMsZ0RBRHJCLENBREYsQ0FEVztBQUFBLEdBQWI7O0FBUUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFdBQU9MLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzVCLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBRyxFQUFFQSxDQUFoQztB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R0FQTSxDQUFQO0FBUUQsQ0FWRDs7QUFZZUgsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLjNkZGZhYjEyMDRmMjRlOTE1OGQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlclB1YmxpY1Byb2ZpbGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VzZXInO1xyXG5pbXBvcnQgeyBBUEksIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3JtL0NvbnRhY3RGb3JtJztcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKHsgdXNlciwgYmxvZ3MsIHF1ZXJ5IH0pID0+IHtcclxuICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5cclxuICAgICAgICB7dXNlci51c2VybmFtZX0gfCB7QVBQX05BTUV9XHJcbiAgICAgIDwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc2hvd1VzZXJCbG9ncyA9ICgpID0+IHtcclxuICAgIHJldHVybiBibG9ncy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCBtYi00JyBrZXk9e2l9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9ncy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsZWFkJz57YmxvZy50aXRsZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7aGVhZCgpfVxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoYW0gZ2lhIHbDoG8ge21vbWVudCh1c2VyLmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPScnPnt1c2VyLmFib3V0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vdXNlci9waG90by8ke3VzZXIudXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWcgaW1nLWZsdWlkIGltZy10aHVtYm5haWwgbWItMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAnMTAwcHgnLCBtYXhXaWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0ndXNlciBwcm9maWxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcGItNSc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0nY2FyZC10aXRsZSBiZy1wcmltYXJ5IHB0LTQgcGItNCBwbC00IHByLTQgdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgTmjhu69uZyBiw6BpIHZp4bq/dCBn4bqnbiDEkcOieSBj4bunYSB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAge3Nob3dVc2VyQmxvZ3MoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J2NhcmQtdGl0bGUgYmctcHJpbWFyeSBwdC00IHBiLTQgcGwtNCBwci00IHRleHQtbGlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIE5o4bqvbiBjaG8ge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxDb250YWN0Rm9ybSBhdXRob3JFbWFpbD17dXNlci5lbWFpbH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcblVzZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhxdWVyeSk7XHJcbiAgcmV0dXJuIHVzZXJQdWJsaWNQcm9maWxlKHF1ZXJ5LnVzZXJuYW1lKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICByZXR1cm4geyB1c2VyOiBkYXRhLnVzZXIsIGJsb2dzOiBkYXRhLmJsb2dzLCBxdWVyeSB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=