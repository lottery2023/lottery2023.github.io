(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/security/auth.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/services/security/auth.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const url = state.url;
        return this.checkLogin(url);
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    checkLogin(url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/baseEditView.ts":
/*!***************************************!*\
  !*** ./src/app/views/baseEditView.ts ***!
  \***************************************/
/*! exports provided: BaseEditView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseEditView", function() { return BaseEditView; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class BaseEditView {
    constructor() {
    }
    init(view) {
        this.view = view || this.view;
    }
    save() {
        if (this.view.entityForm.valid) {
            if (this.view.beforeSaved) {
                let done = this.view.beforeSaved();
                if (!done) {
                    return;
                }
            }
            this.view.service.save(this.view.entityApi, this.view.entity || this.view.entities).subscribe((entityRes) => {
                if (this.view.entities) {
                    if (this.view.iniEntity) {
                        this.view.iniEntity();
                    }
                }
                else {
                    this.view.entity = entityRes ? entityRes : this.view.entity;
                }
                if (this.view._snackBar) {
                    this.view._snackBar.open('Salvo', 'Correctamente', {
                        duration: 2000,
                    });
                }
                if (this.view.savedEvent) {
                    this.view.savedEvent.emit(new Date().toString());
                }
                if (this.view.afterSaved) {
                    this.view.afterSaved();
                }
            });
        }
    }
    getEntity(id, settings) {
        const entityObservable = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
            this.view.service.getEntity(this.view.entityApi, id, settings)
                .subscribe((entityRes) => {
                this.view.entity = entityRes;
                if (this.view.changeDetectorRef) {
                    this.view.changeDetectorRef.detectChanges();
                }
                observer.next();
            });
        });
        return entityObservable;
    }
    getErrorMessage(field) {
        return this.view.entityForm.controls[field].hasError('required') ? this.view.service.messagesErrors.required :
            this.view.entityForm.controls[field].hasError('email') ? this.view.service.messagesErrors.email :
                this.view.entityForm.controls[field].hasError('taken') ? this.view.service.messagesErrors.taken :
                    this.view.entityForm.controls[field].hasError('forbidden') ? this.view.service.messagesErrors.forbidden :
                        this.view.entityForm.controls[field].getError('min');
    }
}


/***/ }),

/***/ "./src/app/views/baseSearchView.ts":
/*!*****************************************!*\
  !*** ./src/app/views/baseSearchView.ts ***!
  \*****************************************/
/*! exports provided: BaseSearchView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSearchView", function() { return BaseSearchView; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* tslint:disable:one-line no-trailing-whitespace */

class BaseSearchView {
    constructor() {
        this.pageSizeOptions = [100, 300, 500];
        // pageSizeOptions = [1, 2, 3];
        this.length = 0;
        this.pageSize = this.pageSizeOptions[0];
        this.filtersColumns = [];
    }
    init(view) {
        this.view = view || this.view;
        this.pageSizeOptions = this.view.pageSizeOptions || this.pageSizeOptions;
        this.length = this.view.length || this.length;
        this.pageSize = this.view.pageSize || this.pageSize;
        if (!this.view.settings) {
            this.view.settings = {
                count: true
            };
        }
        else {
            this.view.settings.count = true;
        }
        if (!this.view.settings.options) {
            this.view.settings.options = {
                limit: this.pageSize,
                order: []
            };
        }
        else {
            this.view.settings.options.limit = this.view.settings.options.limit || this.pageSize;
            this.view.settings.options.order = this.view.settings.options.order || [];
        }
        this.filtersColumns = this.view.filtersColumns || [];
    }
    onPageChange() {
        this.applyFilter();
        if (this.view.beforePageChange) {
            this.view.beforePageChange();
        }
        this.view.service.get(this.view.entityApi, this.view.settings)
            .subscribe((res) => {
            this.length = res.count;
            if (this.view.beforePrint) {
                res.rows = this.view.beforePrint(res.rows);
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](res.rows);
        });
    }
    onPaginatorChange(event) {
        this.view.settings.options.limit = event.pageSize;
        this.view.settings.options.offset = event.pageSize * event.pageIndex;
        this.onPageChange();
    }
    onSortChange(event) {
        if (event.direction) {
            this.view.settings.options.order = [[event.active, event.direction]];
        }
        else {
            this.view.settings.options.order = [];
        }
        this.onPageChange();
    }
    applyFilter() {
        this.view.settings.options.where = this.view.settings.options.where || {};
        if (this.view.filter) {
            for (const col of this.filtersColumns) {
                if (!('$or' in this.view.settings.options.where)) {
                    this.view.settings.options.where.$or = [];
                }
                let indexProperty = this.view.settings.options.where.$or.findIndex((o) => o.hasOwnProperty(col));
                if (indexProperty != -1) {
                    this.view.settings.options.where.$or[indexProperty] = { [col]: { $like: `%${this.view.filter}%` } };
                }
                else {
                    this.view.settings.options.where.$or.push({ [col]: { $like: `%${this.view.filter}%` } });
                }
            }
        }
        else {
            if ('$or' in this.view.settings.options.where) {
                for (const col of this.filtersColumns) {
                    let indexProperty = this.view.settings.options.where.$or.findIndex((o) => o.hasOwnProperty(col));
                    if (indexProperty != -1) {
                        this.view.settings.options.where.$or.splice(indexProperty, 1);
                    }
                }
                if (!this.view.settings.options.where.$or.length) {
                    delete this.view.settings.options.where.$or;
                }
            }
        }
    }
    onDelete(row) {
        if (confirm('¿Está seguro de eliminar el registro?')) {
            this.view.service.delete(this.view.entityApi, row.id)
                .subscribe((res) => {
                this.onPageChange();
                if (this.view.deletedEvent) {
                    this.view.deletedEvent.emit(new Date().toString());
                }
            });
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map