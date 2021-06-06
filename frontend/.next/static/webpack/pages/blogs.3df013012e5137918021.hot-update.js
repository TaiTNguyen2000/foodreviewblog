webpackHotUpdate_N_E("pages/blogs",{

/***/ "./pages/blogs/index.js":
/*!******************************!*\
  !*** ./pages/blogs/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _components_blog_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/blog/Card */ "./components/blog/Card.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./config.js");


var _this = undefined,
    _jsxFileName = "D:\\HUFLIT\\Nam 3\\HK2\\CNPMNC\\foodie-blog\\frontend\\pages\\blogs\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Blogs = function Blogs(_ref) {
  _s();

  var blogs = _ref.blogs,
      categories = _ref.categories,
      tags = _ref.tags,
      totalBlogs = _ref.totalBlogs,
      blogsLimit = _ref.blogsLimit,
      blogSkip = _ref.blogSkip,
      router = _ref.router;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, " Blogs | ", _config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]));
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(blogsLimit),
      limit = _useState[0],
      setLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(totalBlogs),
      size = _useState3[0],
      setSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedBlogs = _useState4[0],
      setLoadedBlogs = _useState4[1];

  var loadMore = function loadMore() {
    var toSkip = skip + limit;
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_6__["listBlogsWithCategoriesAndTags"])(toSkip, limit).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(loadedBlogs), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.blogs)));
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  var loadMoreButton = function loadMoreButton() {
    return size > 0 && size >= limit && __jsx("button", {
      onClick: loadMore,
      className: "btn btn-outline-primary btn-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, "\u0110\u1ECDc th\xEAm b\xE0i vi\u1EBFt");
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      // ()
      return __jsx("article", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, __jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        blog: blog,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }));
    });
  };

  var showAllCategories = function showAllCategories() {
    return categories.map(function (c, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/categories/".concat(c.slug),
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }
      }, c.name));
    });
  };

  var showAllTags = function showAllTags() {
    return tags.map(function (t, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/tags/".concat(t.slug),
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, t.name));
    });
  };

  var showLoadedBlogs = function showLoadedBlogs() {
    return loadedBlogs.map(function (blog, i) {
      return __jsx("article", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 7
        }
      }, __jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        blog: blog,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, head(), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-12 pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "display-4 font-weight-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "Blog \u1EA9m th\u1EF1c")), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-5 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, showAllCategories(), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }), showAllTags())))), __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, showAllBlogs()), __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, showLoadedBlogs()), __jsx("div", {
    className: "text-center pt-5 pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, loadMoreButton()))));
};

_s(Blogs, "Xk61i/WMQ7FElqvkkoA1Qs5MN40=");

_c = Blogs;

Blogs.getInitialProps = function () {
  var skip = 0;
  var limit = 5;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_6__["listBlogsWithCategoriesAndTags"])(skip, limit).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Blogs));

var _c, _c2;

$RefreshReg$(_c, "Blogs");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiQmxvZ3MiLCJibG9ncyIsImNhdGVnb3JpZXMiLCJ0YWdzIiwidG90YWxCbG9ncyIsImJsb2dzTGltaXQiLCJibG9nU2tpcCIsInJvdXRlciIsImhlYWQiLCJBUFBfTkFNRSIsInVzZVN0YXRlIiwibGltaXQiLCJzZXRMaW1pdCIsInNraXAiLCJzZXRTa2lwIiwic2l6ZSIsInNldFNpemUiLCJsb2FkZWRCbG9ncyIsInNldExvYWRlZEJsb2dzIiwibG9hZE1vcmUiLCJ0b1NraXAiLCJsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3MiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxvYWRNb3JlQnV0dG9uIiwic2hvd0FsbEJsb2dzIiwibWFwIiwiYmxvZyIsImkiLCJzaG93QWxsQ2F0ZWdvcmllcyIsImMiLCJzbHVnIiwibmFtZSIsInNob3dBbGxUYWdzIiwidCIsInNob3dMb2FkZWRCbG9ncyIsImdldEluaXRpYWxQcm9wcyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQVFSO0FBQUE7O0FBQUEsTUFQSkMsS0FPSSxRQVBKQSxLQU9JO0FBQUEsTUFOSkMsVUFNSSxRQU5KQSxVQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsTUFKSkMsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsTUFDSSxRQURKQSxNQUNJOztBQUNKLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FDWCxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFB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QUFOTCxPQUFQO0FBUUQ7QUFDRixHQWJNLENBQVA7QUFjRCxDQWpCRDs7QUFtQmUscUVBQUEyQiw4REFBVSxDQUFDeEMsS0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncy4zZGYwMTMwMTJlNTEzNzkxODAyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jsb2cnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jsb2cvQ2FyZCc7XHJcbmltcG9ydCB7IEFQSSwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuY29uc3QgQmxvZ3MgPSAoe1xyXG4gIGJsb2dzLFxyXG4gIGNhdGVnb3JpZXMsXHJcbiAgdGFncyxcclxuICB0b3RhbEJsb2dzLFxyXG4gIGJsb2dzTGltaXQsXHJcbiAgYmxvZ1NraXAsXHJcbiAgcm91dGVyLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+IEJsb2dzIHwge0FQUF9OQU1FfTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZShibG9nc0xpbWl0KTtcclxuICBjb25zdCBbc2tpcCwgc2V0U2tpcF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSh0b3RhbEJsb2dzKTtcclxuICBjb25zdCBbbG9hZGVkQmxvZ3MsIHNldExvYWRlZEJsb2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgbG9hZE1vcmUgPSAoKSA9PiB7XHJcbiAgICBsZXQgdG9Ta2lwID0gc2tpcCArIGxpbWl0O1xyXG4gICAgbGlzdEJsb2dzV2l0aENhdGVnb3JpZXNBbmRUYWdzKHRvU2tpcCwgbGltaXQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRMb2FkZWRCbG9ncyhbLi4ubG9hZGVkQmxvZ3MsIC4uLmRhdGEuYmxvZ3NdKTtcclxuICAgICAgICBzZXRTaXplKGRhdGEuc2l6ZSk7XHJcbiAgICAgICAgc2V0U2tpcCh0b1NraXApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2FkTW9yZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHNpemUgPiAwICYmXHJcbiAgICAgIHNpemUgPj0gbGltaXQgJiYgKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bG9hZE1vcmV9IGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLWxnJz5cclxuICAgICAgICAgIMSQ4buNYyB0aMOqbSBiw6BpIHZp4bq/dFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dBbGxCbG9ncyA9ICgpID0+IHtcclxuICAgIHJldHVybiBibG9ncy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgLy8gKClcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YXJ0aWNsZSBrZXk9e2l9PlxyXG4gICAgICAgICAgPENhcmQgYmxvZz17YmxvZ30gLz5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dBbGxDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcmllcy8ke2Muc2x1Z31gfSBrZXk9e2l9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5IG1yLTEgbWwtMSBtdC0zJz57Yy5uYW1lfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0FsbFRhZ3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGFncy5tYXAoKHQsIGkpID0+IChcclxuICAgICAgPExpbmsgaHJlZj17YC90YWdzLyR7dC5zbHVnfWB9IGtleT17aX0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPSdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtci0xIG1sLTEgbXQtMyc+e3QubmFtZX08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dMb2FkZWRCbG9ncyA9ICgpID0+IHtcclxuICAgIHJldHVybiBsb2FkZWRCbG9ncy5tYXAoKGJsb2csIGkpID0+IChcclxuICAgICAgPGFydGljbGUga2V5PXtpfT5cclxuICAgICAgICA8Q2FyZCBibG9nPXtibG9nfSAvPlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7aGVhZCgpfVxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMiBwdC0zJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNCBmb250LXdlaWdodC1ib2xkIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgQmxvZyDhuqltIHRo4buxY1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYi01IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAge3Nob3dBbGxDYXRlZ29yaWVzKCl9XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICB7c2hvd0FsbFRhZ3MoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPntzaG93QWxsQmxvZ3MoKX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPntzaG93TG9hZGVkQmxvZ3MoKX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBwdC01IHBiLTUnPntsb2FkTW9yZUJ1dHRvbigpfTwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5CbG9ncy5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XHJcbiAgbGV0IHNraXAgPSAwO1xyXG4gIGxldCBsaW1pdCA9IDU7XHJcbiAgcmV0dXJuIGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyhza2lwLCBsaW1pdCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJsb2dzOiBkYXRhLmJsb2dzLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGRhdGEuY2F0ZWdvcmllcyxcclxuICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgdG90YWxCbG9nczogZGF0YS5zaXplLFxyXG4gICAgICAgIGJsb2dzTGltaXQ6IGxpbWl0LFxyXG4gICAgICAgIGJsb2dTa2lwOiBza2lwLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9ncyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=