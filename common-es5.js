function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/services/security/auth.guard.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/security/auth.guard.ts ***!
    \*************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppServicesSecurityAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/security/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var url = state.url;
          return this.checkLogin(url);
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(route, state) {
          return this.canActivate(route, state);
        }
      }, {
        key: "checkLogin",
        value: function checkLogin(url) {
          if (this.authService.isLoggedIn()) {
            return true;
          }

          this.authService.redirectUrl = url;
          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: url
            }
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/baseEditView.ts":
  /*!***************************************!*\
    !*** ./src/app/views/baseEditView.ts ***!
    \***************************************/

  /*! exports provided: BaseEditView */

  /***/
  function srcAppViewsBaseEditViewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseEditView", function () {
      return BaseEditView;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BaseEditView = /*#__PURE__*/function () {
      function BaseEditView() {
        _classCallCheck(this, BaseEditView);
      }

      _createClass(BaseEditView, [{
        key: "init",
        value: function init(view) {
          this.view = view || this.view;
        }
      }, {
        key: "save",
        value: function save() {
          var _this = this;

          if (this.view.entityForm.valid) {
            if (this.view.beforeSaved) {
              var done = this.view.beforeSaved();

              if (!done) {
                return;
              }
            }

            this.view.service.save(this.view.entityApi, this.view.entity || this.view.entities).subscribe(function (entityRes) {
              if (_this.view.entities) {
                if (_this.view.iniEntity) {
                  _this.view.iniEntity();
                }
              } else {
                _this.view.entity = entityRes ? entityRes : _this.view.entity;
              }

              if (_this.view._snackBar) {
                _this.view._snackBar.open('Salvo', 'Correctamente', {
                  duration: 2000
                });
              }

              if (_this.view.savedEvent) {
                _this.view.savedEvent.emit(new Date().toString());
              }

              if (_this.view.afterSaved) {
                _this.view.afterSaved();
              }
            });
          }
        }
      }, {
        key: "getEntity",
        value: function getEntity(id, settings) {
          var _this2 = this;

          var entityObservable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this2.view.service.getEntity(_this2.view.entityApi, id, settings).subscribe(function (entityRes) {
              _this2.view.entity = entityRes;

              if (_this2.view.changeDetectorRef) {
                _this2.view.changeDetectorRef.detectChanges();
              }

              observer.next();
            });
          });
          return entityObservable;
        }
      }, {
        key: "getErrorMessage",
        value: function getErrorMessage(field) {
          return this.view.entityForm.controls[field].hasError('required') ? this.view.service.messagesErrors.required : this.view.entityForm.controls[field].hasError('email') ? this.view.service.messagesErrors.email : this.view.entityForm.controls[field].hasError('taken') ? this.view.service.messagesErrors.taken : this.view.entityForm.controls[field].hasError('forbidden') ? this.view.service.messagesErrors.forbidden : this.view.entityForm.controls[field].getError('min');
        }
      }]);

      return BaseEditView;
    }();
    /***/

  },

  /***/
  "./src/app/views/baseSearchView.ts":
  /*!*****************************************!*\
    !*** ./src/app/views/baseSearchView.ts ***!
    \*****************************************/

  /*! exports provided: BaseSearchView */

  /***/
  function srcAppViewsBaseSearchViewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseSearchView", function () {
      return BaseSearchView;
    });
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* tslint:disable:one-line no-trailing-whitespace */


    var BaseSearchView = /*#__PURE__*/function () {
      function BaseSearchView() {
        _classCallCheck(this, BaseSearchView);

        this.pageSizeOptions = [100, 300, 500]; // pageSizeOptions = [1, 2, 3];

        this.length = 0;
        this.pageSize = this.pageSizeOptions[0];
        this.filtersColumns = [];
      }

      _createClass(BaseSearchView, [{
        key: "init",
        value: function init(view) {
          this.view = view || this.view;
          this.pageSizeOptions = this.view.pageSizeOptions || this.pageSizeOptions;
          this.length = this.view.length || this.length;
          this.pageSize = this.view.pageSize || this.pageSize;

          if (!this.view.settings) {
            this.view.settings = {
              count: true
            };
          } else {
            this.view.settings.count = true;
          }

          if (!this.view.settings.options) {
            this.view.settings.options = {
              limit: this.pageSize,
              order: []
            };
          } else {
            this.view.settings.options.limit = this.view.settings.options.limit || this.pageSize;
            this.view.settings.options.order = this.view.settings.options.order || [];
          }

          this.filtersColumns = this.view.filtersColumns || [];
        }
      }, {
        key: "onPageChange",
        value: function onPageChange() {
          var _this3 = this;

          this.applyFilter();

          if (this.view.beforePageChange) {
            this.view.beforePageChange();
          }

          this.view.service.get(this.view.entityApi, this.view.settings).subscribe(function (res) {
            _this3.length = res.count;

            if (_this3.view.beforePrint) {
              res.rows = _this3.view.beforePrint(res.rows);
            }

            _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](res.rows);
          });
        }
      }, {
        key: "onPaginatorChange",
        value: function onPaginatorChange(event) {
          this.view.settings.options.limit = event.pageSize;
          this.view.settings.options.offset = event.pageSize * event.pageIndex;
          this.onPageChange();
        }
      }, {
        key: "onSortChange",
        value: function onSortChange(event) {
          if (event.direction) {
            this.view.settings.options.order = [[event.active, event.direction]];
          } else {
            this.view.settings.options.order = [];
          }

          this.onPageChange();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var _this4 = this;

          this.view.settings.options.where = this.view.settings.options.where || {};

          if (this.view.filter) {
            var _iterator = _createForOfIteratorHelper(this.filtersColumns),
                _step;

            try {
              var _loop = function _loop() {
                var col = _step.value;

                if (!('$or' in _this4.view.settings.options.where)) {
                  _this4.view.settings.options.where.$or = [];
                }

                var indexProperty = _this4.view.settings.options.where.$or.findIndex(function (o) {
                  return o.hasOwnProperty(col);
                });

                if (indexProperty != -1) {
                  _this4.view.settings.options.where.$or[indexProperty] = _defineProperty({}, col, {
                    $like: "%".concat(_this4.view.filter, "%")
                  });
                } else {
                  _this4.view.settings.options.where.$or.push(_defineProperty({}, col, {
                    $like: "%".concat(_this4.view.filter, "%")
                  }));
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            if ('$or' in this.view.settings.options.where) {
              var _iterator2 = _createForOfIteratorHelper(this.filtersColumns),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var col = _step2.value;

                  var indexProperty = _this4.view.settings.options.where.$or.findIndex(function (o) {
                    return o.hasOwnProperty(col);
                  });

                  if (indexProperty != -1) {
                    _this4.view.settings.options.where.$or.splice(indexProperty, 1);
                  }
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (!this.view.settings.options.where.$or.length) {
                delete this.view.settings.options.where.$or;
              }
            }
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete(row) {
          var _this5 = this;

          if (confirm('¿Está seguro de eliminar el registro?')) {
            this.view.service["delete"](this.view.entityApi, row.id).subscribe(function (res) {
              _this5.onPageChange();

              if (_this5.view.deletedEvent) {
                _this5.view.deletedEvent.emit(new Date().toString());
              }
            });
          }
        }
      }]);

      return BaseSearchView;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map