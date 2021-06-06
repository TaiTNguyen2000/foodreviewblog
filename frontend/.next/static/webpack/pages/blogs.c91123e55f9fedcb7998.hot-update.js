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
    }, " Blogs | ", _config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]), __jsx("meta", {
      name: "description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "Latest web developoment tutorials | ".concat(_config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }), __jsx("meta", {
      property: "og:description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "webiste",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }));
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
        lineNumber: 63,
        columnNumber: 9
      }
    }, "Load more");
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      // ()
      return __jsx("article", {
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, __jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        blog: blog,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }), __jsx("hr", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
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
          lineNumber: 84,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
          lineNumber: 92,
          columnNumber: 7
        }
      }, __jsx("a", {
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
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
          lineNumber: 100,
          columnNumber: 7
        }
      }, __jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        blog: blog,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }
      }));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, head(), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-12 pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "display-4 font-weight-bold text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, "Programming blogs and tutorials")), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-5 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, showAllCategories(), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }), showAllTags())))), __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, showAllBlogs()), __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, showLoadedBlogs()), __jsx("div", {
    className: "text-center pt-5 pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, loadMoreButton()))));
};

_s(Blogs, "Xk61i/WMQ7FElqvkkoA1Qs5MN40=");

_c = Blogs;

Blogs.getInitialProps = function () {
  var skip = 0;
  var limit = 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiQmxvZ3MiLCJibG9ncyIsImNhdGVnb3JpZXMiLCJ0YWdzIiwidG90YWxCbG9ncyIsImJsb2dzTGltaXQiLCJibG9nU2tpcCIsInJvdXRlciIsImhlYWQiLCJBUFBfTkFNRSIsInVzZVN0YXRlIiwibGltaXQiLCJzZXRMaW1pdCIsInNraXAiLCJzZXRTa2lwIiwic2l6ZSIsInNldFNpemUiLCJsb2FkZWRCbG9ncyIsInNldExvYWRlZEJsb2dzIiwibG9hZE1vcmUiLCJ0b1NraXAiLCJsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3MiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxvYWRNb3JlQnV0dG9uIiwic2hvd0FsbEJsb2dzIiwibWFwIiwiYmxvZyIsImkiLCJzaG93QWxsQ2F0ZWdvcmllcyIsImMiLCJzbHVnIiwibmFtZSIsInNob3dBbGxUYWdzIiwidCIsInNob3dMb2FkZWRCbG9ncyIsImdldEluaXRpYWxQcm9wcyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQVFSO0FBQUE7O0FBQUEsTUFQSkMsS0FPSSxRQVBKQSxLQU9JO0FBQUEsTUFOSkMsVUFNSSxRQU5KQSxVQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsTUFKSkMsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsTUFDSSxRQURKQSxNQUNJOztBQUNKLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsV0FDWCxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFB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O0FBQUE7QUFBQSxLQUF3Q1gsY0FBYyxFQUF0RCxDQW5CRixDQURGLENBRkYsQ0FERjtBQTRCRCxDQTVIRDs7R0FBTTNCLEs7O0tBQUFBLEs7O0FBOEhOQSxLQUFLLENBQUN1QyxlQUFOLEdBQXdCLFlBQU07QUFDNUIsTUFBSTFCLElBQUksR0FBRyxDQUFYO0FBQ0EsTUFBSUYsS0FBSyxHQUFHLENBQVo7QUFDQSxTQUFPVSxvRkFBOEIsQ0FBQ1IsSUFBRCxFQUFPRixLQUFQLENBQTlCLENBQTRDVyxJQUE1QyxDQUFpRCxVQUFDQyxJQUFELEVBQVU7QUFDaEUsUUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNDLEtBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTztBQUNMdkIsYUFBSyxFQUFFc0IsSUFBSSxDQUFDdEIsS0FEUDtBQUVMQyxrQkFBVSxFQUFFcUIsSUFBSSxDQUFDckIsVUFGWjtBQUdMQyxZQUFJLEVBQUVvQixJQUFJLENBQUNwQixJQUhOO0FBSUxDLGtCQUFVLEVBQUVtQixJQUFJLENBQUNSLElBSlo7QUFLTFYsa0JBQVUsRUFBRU0sS0FMUDtBQU1MTCxnQkFBUSxFQUFFTztBQU5MLE9BQVA7QUFRRDtBQUNGLEdBYk0sQ0FBUDtBQWNELENBakJEOztBQW1CZSxxRUFBQTJCLDhEQUFVLENBQUN4QyxLQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzLmM5MTEyM2U1NWY5ZmVkY2I3OTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmxvZy9DYXJkJztcclxuaW1wb3J0IHsgQVBJLCBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG5jb25zdCBCbG9ncyA9ICh7XHJcbiAgYmxvZ3MsXHJcbiAgY2F0ZWdvcmllcyxcclxuICB0YWdzLFxyXG4gIHRvdGFsQmxvZ3MsXHJcbiAgYmxvZ3NMaW1pdCxcclxuICBibG9nU2tpcCxcclxuICByb3V0ZXIsXHJcbn0pID0+IHtcclxuICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT4gQmxvZ3MgfCB7QVBQX05BTUV9PC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICBjb250ZW50PSdQcm9ncmFtbWluZyBibG9ncyBhbmQgdHV0b3JpYWxzIG9uIHJlYWN0IG5vZGUgbmV4dCB2dWUgcGhwIGxhcmF2ZWwgYW5kIHdlYiBkZXZlbG9wb21lbnQnXHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9J29nOnRpdGxlJ1xyXG4gICAgICAgIGNvbnRlbnQ9e2BMYXRlc3Qgd2ViIGRldmVsb3BvbWVudCB0dXRvcmlhbHMgfCAke0FQUF9OQU1FfWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIGNvbnRlbnQ9J1Byb2dyYW1taW5nIGJsb2dzIGFuZCB0dXRvcmlhbHMgb24gcmVhY3Qgbm9kZSBuZXh0IHZ1ZSBwaHAgbGFyYXZlbCBhbmQgd2ViIGRldmVsb3BvbWVudCdcclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnR5cGUnIGNvbnRlbnQ9J3dlYmlzdGUnIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9IC8+XHJcblxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6aW1hZ2U6dHlwZScgY29udGVudD0naW1hZ2UvanBnJyAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoYmxvZ3NMaW1pdCk7XHJcbiAgY29uc3QgW3NraXAsIHNldFNraXBdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUodG90YWxCbG9ncyk7XHJcbiAgY29uc3QgW2xvYWRlZEJsb2dzLCBzZXRMb2FkZWRCbG9nc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgbGV0IHRvU2tpcCA9IHNraXAgKyBsaW1pdDtcclxuICAgIGxpc3RCbG9nc1dpdGhDYXRlZ29yaWVzQW5kVGFncyh0b1NraXAsIGxpbWl0KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TG9hZGVkQmxvZ3MoWy4uLmxvYWRlZEJsb2dzLCAuLi5kYXRhLmJsb2dzXSk7XHJcbiAgICAgICAgc2V0U2l6ZShkYXRhLnNpemUpO1xyXG4gICAgICAgIHNldFNraXAodG9Ta2lwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZE1vcmVCdXR0b24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBzaXplID4gMCAmJlxyXG4gICAgICBzaXplID49IGxpbWl0ICYmIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvYWRNb3JlfSBjbGFzc05hbWU9J2J0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1sZyc+XHJcbiAgICAgICAgICBMb2FkIG1vcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93QWxsQmxvZ3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYmxvZ3MubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgIC8vICgpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUga2V5PXtpfT5cclxuICAgICAgICAgIDxDYXJkIGJsb2c9e2Jsb2d9IC8+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93QWxsQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxyXG4gICAgICA8TGluayBocmVmPXtgL2NhdGVnb3JpZXMvJHtjLnNsdWd9YH0ga2V5PXtpfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBtci0xIG1sLTEgbXQtMyc+e2MubmFtZX08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dBbGxUYWdzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvdGFncy8ke3Quc2x1Z31gfSBrZXk9e2l9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbXItMSBtbC0xIG10LTMnPnt0Lm5hbWV9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TG9hZGVkQmxvZ3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbG9hZGVkQmxvZ3MubWFwKChibG9nLCBpKSA9PiAoXHJcbiAgICAgIDxhcnRpY2xlIGtleT17aX0+XHJcbiAgICAgICAgPENhcmQgYmxvZz17YmxvZ30gLz5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge2hlYWQoKX1cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTIgcHQtMyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXNwbGF5LTQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIFByb2dyYW1taW5nIGJsb2dzIGFuZCB0dXRvcmlhbHNcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGItNSB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIHtzaG93QWxsQ2F0ZWdvcmllcygpfVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAge3Nob3dBbGxUYWdzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz57c2hvd0FsbEJsb2dzKCl9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz57c2hvd0xvYWRlZEJsb2dzKCl9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHQtNSBwYi01Jz57bG9hZE1vcmVCdXR0b24oKX08L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuQmxvZ3MuZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xyXG4gIGxldCBza2lwID0gMDtcclxuICBsZXQgbGltaXQgPSAyO1xyXG4gIHJldHVybiBsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3Moc2tpcCwgbGltaXQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBibG9nczogZGF0YS5ibG9ncyxcclxuICAgICAgICBjYXRlZ29yaWVzOiBkYXRhLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgIHRvdGFsQmxvZ3M6IGRhdGEuc2l6ZSxcclxuICAgICAgICBibG9nc0xpbWl0OiBsaW1pdCxcclxuICAgICAgICBibG9nU2tpcDogc2tpcCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQmxvZ3MpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9