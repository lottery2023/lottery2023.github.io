(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-finance-finance-module"],{

/***/ "./src/app/views/finance/finance-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/finance/finance-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FinanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceRoutingModule", function() { return FinanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/security/auth.guard */ "./src/app/services/security/auth.guard.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/views/finance/sales/sales.component.ts");






const routes = [
    {
        path: 'sales',
        canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_3__["SalesComponent"]
    },
];
class FinanceRoutingModule {
}
FinanceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FinanceRoutingModule });
FinanceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FinanceRoutingModule_Factory(t) { return new (t || FinanceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FinanceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinanceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/finance/finance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/finance/finance.module.ts ***!
  \*************************************************/
/*! exports provided: FinanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceModule", function() { return FinanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _finance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finance-routing.module */ "./src/app/views/finance/finance-routing.module.ts");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/views/finance/sales/sales.component.ts");







class FinanceModule {
}
FinanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FinanceModule });
FinanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FinanceModule_Factory(t) { return new (t || FinanceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _finance_routing_module__WEBPACK_IMPORTED_MODULE_2__["FinanceRoutingModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FinanceModule, { declarations: [_sales_sales_component__WEBPACK_IMPORTED_MODULE_5__["SalesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _finance_routing_module__WEBPACK_IMPORTED_MODULE_2__["FinanceRoutingModule"],
        _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinanceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sales_sales_component__WEBPACK_IMPORTED_MODULE_5__["SalesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _finance_routing_module__WEBPACK_IMPORTED_MODULE_2__["FinanceRoutingModule"],
                    _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/finance/sales/sales.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/finance/sales/sales.component.ts ***!
  \********************************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _baseSearchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../baseSearchView */ "./src/app/views/baseSearchView.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/security/auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

















function SalesComponent_mat_card_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.subtitle, " ");
} }
function SalesComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.id, " ");
} }
function SalesComponent_ng_container_24_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r9, " ");
} }
function SalesComponent_ng_container_24_td_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_ng_container_24_td_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.onEdit(element_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_ng_container_24_td_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_ng_container_24_td_2_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.onDelete(element_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesComponent_ng_container_24_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SalesComponent_ng_container_24_td_2_button_3_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SalesComponent_ng_container_24_td_2_button_4_Template, 3, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14[column_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r9 === "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r9 === "actions");
} }
function SalesComponent_ng_container_24_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getText(column_r9));
} }
function SalesComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SalesComponent_ng_container_24_th_1_Template, 2, 1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SalesComponent_ng_container_24_td_2_Template, 5, 3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SalesComponent_ng_container_24_td_3_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r9);
} }
function SalesComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
} }
function SalesComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
} }
function SalesComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
} }
class SalesComponent extends _baseSearchView__WEBPACK_IMPORTED_MODULE_1__["BaseSearchView"] {
    constructor(service, authService, router) {
        super();
        this.service = service;
        this.authService = authService;
        this.router = router;
        this.showCardHeader = true;
        this.entityApi = 'bets';
        this.settings = {
            query: {
                table: 'vw_sales'
            },
            options: {
                where: {}
            }
        };
        this.displayedColumns = ['employeeCode', 'valor'];
        this.filtersColumns = ['employeeCode'];
        this.createdDate = new Date();
    }
    ngOnInit() {
        this.title = 'Ventas';
        this.subtitle = 'Finanzas';
        super.init(this);
        super.onPageChange();
    }
    ngOnChanges(changes) {
        if (this.loadChange) {
            super.onPageChange();
        }
    }
    onEdit(row) {
        this.router.navigate(['/bet', { betId: row.id }]);
    }
    getText(element) {
        if (element == 'employeeCode') {
            return 'Total';
        }
        else if (element == 'valor') {
            if (this.dataSource && this.dataSource.data) {
                return this.dataSource.data.reduce((accum, curr) => accum + curr.valor, 0);
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    }
    beforePageChange() {
        if (this.createdDate) {
            var datestring = this.createdDate.getDate() + "/" + (this.createdDate.getMonth() + 1) + "/" + this.createdDate.getFullYear();
            // + " " +         this.createdDate.getHours() + ":" + this.createdDate.getMinutes();
            this.settings.options.where.createdDate = datestring;
        }
        else {
            delete this.settings.options.where.createdDate;
        }
    }
}
SalesComponent.ɵfac = function SalesComponent_Factory(t) { return new (t || SalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalesComponent, selectors: [["app-sales"]], inputs: { loadChange: "loadChange", showCardHeader: "showCardHeader" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 29, vars: 13, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [4, "ngIf"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", 2, "overflow", "hidden"], [2, "float", "left", "width", "30%", "margin-right", "10px"], ["matInput", "", "placeholder", "Filtrar", 3, "ngModel", "keyup.enter", "ngModelChange"], [2, "width", "30%", "margin-right", "10px"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-fab", "", "color", "basic", 2, "float", "left", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function SalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SalesComponent_mat_card_header_3_Template, 9, 2, "mat-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SalesComponent_Template_input_keyup_enter_8_listener() { return ctx.onPageChange(); })("ngModelChange", function SalesComponent_Template_input_ngModelChange_8_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Seleccione fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SalesComponent_Template_input_ngModelChange_12_listener($event) { return ctx.createdDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesComponent_Template_button_click_18_listener() { return ctx.onPageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Refrescar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function SalesComponent_Template_table_matSortChange_20_listener($event) { return ctx.onSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SalesComponent_th_22_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SalesComponent_td_23_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SalesComponent_ng_container_24_Template, 4, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SalesComponent_tr_25_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SalesComponent_tr_26_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SalesComponent_tr_27_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-paginator", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function SalesComponent_Template_mat_paginator_page_28_listener($event) { return ctx.onPaginatorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCardHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatFooterRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatFooterCellDef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatFooterRow"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sales',
                templateUrl: './sales.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { loadChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showCardHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=views-finance-finance-module-es2015.js.map