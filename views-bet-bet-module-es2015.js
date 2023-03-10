(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-bet-bet-module"],{

/***/ "./src/app/pipes/translate.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// import {GlobalizeService}    from '../services/globalize.service';
class TranslatePipe {
    constructor() {
    }
    transform(value, args) {
        value = value || '';
        return (this.getMessage(value) || value);
    }
    getMessage(value) {
        let words = [
            { lottery: 'Lotería' },
            { firstThree: 'Tres primeras' },
            { lastThree: 'Tres ultimas' },
            { chock: 'Cuña' },
            { chockNumber: 'Cuña' },
            { combined: 'Combinado' },
            { number: 'Numero' },
            { price: 'Precio' },
            { employeeCode: 'Código empleado' },
            { created: 'Creado' },
            { userName: 'Nombre usuario' },
            { actions: 'Acciones' },
            { accumulated: 'Acumulado' },
            { accumulatedTotal: 'Acumulado Total' }
        ];
        let word = words.find((o) => value in o);
        return word ? word[value] : '';
    }
}
TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(); };
TranslatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "translate", type: TranslatePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'translate',
                pure: false
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/bet/bet-alerts/bet-alerts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/bet/bet-alerts/bet-alerts.component.ts ***!
  \**************************************************************/
/*! exports provided: BetAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetAlertsComponent", function() { return BetAlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _baseSearchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../baseSearchView */ "./src/app/views/baseSearchView.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/security/auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");



















const _c0 = function (a0) { return { color: a0 }; };
function BetAlertsComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lottery_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lottery_r7.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, lottery_r7.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lottery_r7.name, " ");
} }
function BetAlertsComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetAlertsComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.id, " ");
} }
function BetAlertsComponent_ng_container_45_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r9, " ");
} }
function BetAlertsComponent_ng_container_45_td_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notification_important");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetAlertsComponent_ng_container_45_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BetAlertsComponent_ng_container_45_td_2_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const column_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r13[column_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r9 === "actions" && ctx_r11.validateAlert(element_r13));
} }
function BetAlertsComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BetAlertsComponent_ng_container_45_th_1_Template, 2, 1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BetAlertsComponent_ng_container_45_td_2_Template, 4, 2, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r9);
} }
function BetAlertsComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
} }
function BetAlertsComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
} }
const _c1 = function () { return { standalone: true }; };
class BetAlertsComponent extends _baseSearchView__WEBPACK_IMPORTED_MODULE_1__["BaseSearchView"] {
    constructor(service, authService, router) {
        super();
        this.service = service;
        this.authService = authService;
        this.router = router;
        this.entityApi = 'bets';
        this.entityApiLotteries = 'lotteries';
        this.lotteries = [];
        this.selectedIdLotteries = [];
        this.settings = {
            showPreviewDialog: true,
            query: {
                table: 'vw_betAlerts'
            },
            options: {
                where: {
                    isFourFigure: true,
                    lotteryId: { $in: this.selectedIdLotteries }
                },
                order: [['accumulated', 'desc'], ['accumulatedTotal', 'desc']]
            }
        };
        this.displayedColumns = ['lottery', 'number', 'accumulated', 'difference', 'createdDate', 'accumulatedTotal', 'actions'];
        this.filtersColumns = ['lottery'];
        this.price = 7000;
        this.createdDate = new Date();
    }
    ngOnInit() {
        this.title = 'Apuestas Alertas';
        this.subtitle = 'Apuesta';
        super.init(this);
        let d = new Date();
        let n = d.getDay();
        let dayName = '';
        switch (n) {
            case 0:
                dayName = 'sunday';
                break;
            case 1:
                dayName = 'monday';
                break;
            case 2:
                dayName = 'tuesday';
                break;
            case 3:
                dayName = 'wednesday';
                break;
            case 4:
                dayName = 'thursday';
                break;
            case 5:
                dayName = 'friday';
                break;
            case 6:
                dayName = 'saturday';
                break;
        }
        this.service.get(this.entityApiLotteries, { options: { where: { play: { $like: '%' + dayName + '%' } }, order: [['name', 'asc']] } })
            .subscribe((res) => {
            let enumLotteryTemporality = [
                {
                    value: 'morning', color: 'green'
                },
                {
                    value: 'afternoon', color: 'crimson'
                },
                {
                    value: 'night', color: 'blue'
                },
                {
                    value: null, color: 'Ninguna'
                }
            ];
            let currLotteries = res;
            for (let temp of enumLotteryTemporality) {
                let lotteriesFount = currLotteries.filter((o) => o.temporality == temp.value);
                for (let lottery of lotteriesFount) {
                    lottery.color = temp.color;
                    this.lotteries.push(lottery);
                    this.selectedIdLotteries.push(lottery.id);
                }
            }
            super.onPageChange();
        });
    }
    ngOnChanges(changes) {
        if (this.loadChange) {
            super.onPageChange();
        }
    }
    onEdit(row) {
        // this.router.navigate(['/employee', {employeeId: row.id}]);
    }
    validateAlert(row) {
        let alert = false;
        if (row.accumulated > this.price) {
            alert = true;
        }
        return alert;
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    downloadFile() {
        let filename = 'Numbers' + new Date();
        let text = this.getText();
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    getText() {
        let text = '';
        for (let obj of this.dataSource.data) {
            if (obj.accumulated > this.price) {
                text += obj.lottery + ' ' + obj.number + ' de ' + obj.difference + ' \r\n';
            }
        }
        return text;
    }
    beforePrint(rows) {
        for (let row of rows) {
            row.difference = row.accumulated - this.price;
            if (row.difference < 1) {
                row.difference = '';
            }
        }
        return rows;
    }
    covered() {
        let numbers = [];
        for (let obj of this.dataSource.data) {
            if (obj.accumulated > this.price) {
                let numberFount = numbers.find((o) => o == obj.number);
                if (!numberFount) {
                    numbers.push({ number: obj.number, lotteryId: obj.lotteryId });
                }
            }
        }
        if (numbers.length) {
            if (confirm('¿Ya descargo el archivo de números?')) {
                var datestring = this.createdDate.getDate() + "/" + (this.createdDate.getMonth() + 1) + "/" + this.createdDate.getFullYear();
                this.service.save('details', { numbers: numbers, accumulated: this.price, createdDate: datestring })
                    .subscribe((urls) => {
                    this.onPageChange();
                });
            }
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
        this.settings.options.where.lotteryId = this.selectedIdLotteries;
    }
}
BetAlertsComponent.ɵfac = function BetAlertsComponent_Factory(t) { return new (t || BetAlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
BetAlertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetAlertsComponent, selectors: [["app-bet-alerts"]], inputs: { loadChange: "loadChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 49, vars: 18, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-text-outline", "10px", "margin-top", "10px"], [2, "margin-right", "10px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "float", "left", "width", "30%", "margin-right", "10px"], ["matInput", "", "type", "number", "placeholder", "Entre precio", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModel", "keypress", "ngModelChange"], [2, "width", "30%", "margin-right", "10px"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["multiple", "", 3, "value", "valueChange"], [3, "value", "ngStyle", 4, "ngFor", "ngForOf"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", 2, "overflow", "hidden"], ["mat-fab", "", "color", "basic", 2, "float", "left", 3, "click"], ["mat-fab", "", "color", "warn", 2, "float", "right", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], [3, "value", "ngStyle"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["class", "material-icons", 4, "ngIf"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""]], template: function BetAlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetAlertsComponent_Template_mat_checkbox_ngModelChange_15_listener($event) { return ctx.settings.options.where.isFourFigure = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cuatro Cifras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetAlertsComponent_Template_input_keypress_20_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function BetAlertsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Seleccione fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetAlertsComponent_Template_input_ngModelChange_24_listener($event) { return ctx.createdDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-datepicker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select an option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BetAlertsComponent_Template_mat_select_valueChange_31_listener($event) { return ctx.selectedIdLotteries = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BetAlertsComponent_mat_option_32_Template, 2, 5, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetAlertsComponent_Template_button_click_35_listener() { return ctx.onPageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Refrescar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetAlertsComponent_Template_button_click_37_listener() { return ctx.downloadFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Archivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetAlertsComponent_Template_button_click_39_listener() { return ctx.covered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cubrir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function BetAlertsComponent_Template_table_matSortChange_41_listener($event) { return ctx.onSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, BetAlertsComponent_th_43_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, BetAlertsComponent_td_44_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, BetAlertsComponent_ng_container_45_Template, 3, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, BetAlertsComponent_tr_46_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, BetAlertsComponent_tr_47_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-paginator", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function BetAlertsComponent_Template_mat_paginator_page_48_listener($event) { return ctx.onPaginatorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.settings.options.where.isFourFigure)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedIdLotteries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lotteries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetAlertsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bet-alerts',
                templateUrl: './bet-alerts.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { loadChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/bet/bet-four-figure/bet-four-figure.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/bet/bet-four-figure/bet-four-figure.component.ts ***!
  \************************************************************************/
/*! exports provided: BetFourFigureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetFourFigureComponent", function() { return BetFourFigureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _baseSearchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../baseSearchView */ "./src/app/views/baseSearchView.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/security/auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
















function BetFourFigureComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetFourFigureComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.id, " ");
} }
function BetFourFigureComponent_ng_container_32_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r7, " ");
} }
function BetFourFigureComponent_ng_container_32_td_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notification_important");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetFourFigureComponent_ng_container_32_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BetFourFigureComponent_ng_container_32_td_2_span_3_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r11[column_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r7 === "actions" && ctx_r9.validateAlert(element_r11));
} }
function BetFourFigureComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BetFourFigureComponent_ng_container_32_th_1_Template, 2, 1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BetFourFigureComponent_ng_container_32_td_2_Template, 4, 2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r7);
} }
function BetFourFigureComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function BetFourFigureComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
class BetFourFigureComponent extends _baseSearchView__WEBPACK_IMPORTED_MODULE_1__["BaseSearchView"] {
    constructor(service, authService, router) {
        super();
        this.service = service;
        this.authService = authService;
        this.router = router;
        this.entityApi = 'bets';
        this.price = 50000;
        this.settings = {
            query: {
                table: 'vw_betAlerts'
            },
            options: {
                where: {
                    isFourFigure: true,
                    accumulatedTotal: { $gte: this.price }
                },
                order: [['accumulated', 'desc'], ['accumulatedTotal', 'desc']]
            }
        };
        this.displayedColumns = ['lottery', 'number', 'accumulated', 'createdDate', 'accumulatedTotal', 'actions'];
        this.filtersColumns = ['lottery'];
        this.createdDate = new Date();
    }
    ngOnInit() {
        this.title = 'Apuestas Alertas Cuantro Cifras Mayores A';
        this.subtitle = 'Apuesta';
        super.init(this);
        super.onPageChange();
    }
    ngOnChanges(changes) {
        if (this.loadChange) {
            super.onPageChange();
        }
    }
    onEdit(row) {
        // this.router.navigate(['/employee', {employeeId: row.id}]);
    }
    validateAlert(row) {
        let alert = false;
        if (row.accumulatedTotal >= this.price) {
            alert = true;
        }
        return alert;
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    beforePageChange() {
        this.settings = {
            query: {
                table: 'vw_betAlerts'
            },
            options: {
                where: {
                    isFourFigure: true,
                    accumulatedTotal: { $gte: this.price }
                },
                order: [['accumulated', 'desc'], ['accumulatedTotal', 'desc']]
            }
        };
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
BetFourFigureComponent.ɵfac = function BetFourFigureComponent_Factory(t) { return new (t || BetFourFigureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
BetFourFigureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetFourFigureComponent, selectors: [["app-bet-four-figure"]], inputs: { loadChange: "loadChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 36, vars: 13, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], [2, "float", "left", "width", "30%", "margin-right", "10px"], ["matInput", "", "type", "number", "placeholder", "Entre precio", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModel", "keypress", "ngModelChange"], [2, "width", "30%", "margin-right", "10px"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", 2, "overflow", "hidden"], ["mat-fab", "", "color", "basic", 2, "float", "left", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["class", "material-icons", 4, "ngIf"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""]], template: function BetFourFigureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetFourFigureComponent_Template_input_keypress_16_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function BetFourFigureComponent_Template_input_ngModelChange_16_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Seleccione fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetFourFigureComponent_Template_input_ngModelChange_20_listener($event) { return ctx.createdDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetFourFigureComponent_Template_button_click_26_listener() { return ctx.onPageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Refrescar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function BetFourFigureComponent_Template_table_matSortChange_28_listener($event) { return ctx.onSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BetFourFigureComponent_th_30_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BetFourFigureComponent_td_31_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BetFourFigureComponent_ng_container_32_Template, 3, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BetFourFigureComponent_tr_33_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BetFourFigureComponent_tr_34_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function BetFourFigureComponent_Template_mat_paginator_page_35_listener($event) { return ctx.onPaginatorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetFourFigureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bet-four-figure',
                templateUrl: './bet-four-figure.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { loadChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/bet/bet-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/bet/bet-routing.module.ts ***!
  \*************************************************/
/*! exports provided: BetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetRoutingModule", function() { return BetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/security/auth.guard */ "./src/app/services/security/auth.guard.ts");
/* harmony import */ var _lottery_lottery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lottery/lottery.component */ "./src/app/views/bet/lottery/lottery.component.ts");
/* harmony import */ var _bet_bet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bet/bet.component */ "./src/app/views/bet/bet/bet.component.ts");
/* harmony import */ var _bet_alerts_bet_alerts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bet-alerts/bet-alerts.component */ "./src/app/views/bet/bet-alerts/bet-alerts.component.ts");
/* harmony import */ var _bets_bets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bets/bets.component */ "./src/app/views/bet/bets/bets.component.ts");
/* harmony import */ var _forbidden_number_forbidden_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forbidden-number/forbidden-number.component */ "./src/app/views/bet/forbidden-number/forbidden-number.component.ts");
/* harmony import */ var _bet2_bet2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bet2/bet2.component */ "./src/app/views/bet/bet2/bet2.component.ts");
/* harmony import */ var _bet_four_figure_bet_four_figure_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bet-four-figure/bet-four-figure.component */ "./src/app/views/bet/bet-four-figure/bet-four-figure.component.ts");
/* harmony import */ var _bet_three_figure_bet_three_figure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bet-three-figure/bet-three-figure.component */ "./src/app/views/bet/bet-three-figure/bet-three-figure.component.ts");













const routes = [
    {
        path: 'betalerts',
        canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _bet_alerts_bet_alerts_component__WEBPACK_IMPORTED_MODULE_5__["BetAlertsComponent"]
    },
    {
        path: 'betfourfigure',
        canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _bet_four_figure_bet_four_figure_component__WEBPACK_IMPORTED_MODULE_9__["BetFourFigureComponent"]
    },
    {
        path: 'betthreefigure',
        canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _bet_three_figure_bet_three_figure_component__WEBPACK_IMPORTED_MODULE_10__["BetThreeFigureComponent"]
    },
    {
        path: 'lottery',
        canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _lottery_lottery_component__WEBPACK_IMPORTED_MODULE_3__["LotteryComponent"]
    },
    {
        path: 'bet',
        canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _bet_bet_component__WEBPACK_IMPORTED_MODULE_4__["BetComponent"]
    },
    {
        path: 'bet2',
        canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _bet2_bet2_component__WEBPACK_IMPORTED_MODULE_8__["Bet2Component"]
    },
    {
        path: 'bets',
        canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _bets_bets_component__WEBPACK_IMPORTED_MODULE_6__["BetsComponent"]
    },
    {
        path: 'forbidden',
        canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _forbidden_number_forbidden_number_component__WEBPACK_IMPORTED_MODULE_7__["ForbiddenNumberComponent"]
    }
];
class BetRoutingModule {
}
BetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BetRoutingModule });
BetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BetRoutingModule_Factory(t) { return new (t || BetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/bet/bet-three-figure/bet-three-figure.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/bet/bet-three-figure/bet-three-figure.component.ts ***!
  \**************************************************************************/
/*! exports provided: BetThreeFigureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetThreeFigureComponent", function() { return BetThreeFigureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _baseSearchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../baseSearchView */ "./src/app/views/baseSearchView.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/security/auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
















function BetThreeFigureComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetThreeFigureComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.id, " ");
} }
function BetThreeFigureComponent_ng_container_32_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r7, " ");
} }
function BetThreeFigureComponent_ng_container_32_td_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notification_important");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetThreeFigureComponent_ng_container_32_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BetThreeFigureComponent_ng_container_32_td_2_span_3_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r11[column_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r7 === "actions" && ctx_r9.validateAlert(element_r11));
} }
function BetThreeFigureComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BetThreeFigureComponent_ng_container_32_th_1_Template, 2, 1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BetThreeFigureComponent_ng_container_32_td_2_Template, 4, 2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r7);
} }
function BetThreeFigureComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function BetThreeFigureComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
class BetThreeFigureComponent extends _baseSearchView__WEBPACK_IMPORTED_MODULE_1__["BaseSearchView"] {
    constructor(service, authService, router) {
        super();
        this.service = service;
        this.authService = authService;
        this.router = router;
        this.entityApi = 'bets';
        this.price = 70000;
        this.settings = {
            query: {
                table: 'vw_betAlerts'
            },
            options: {
                where: {
                    isFourFigure: false,
                    accumulatedTotal: { $gte: this.price }
                },
                order: [['accumulated', 'desc'], ['accumulatedTotal', 'desc']]
            }
        };
        this.displayedColumns = ['lottery', 'number', 'accumulated', 'createdDate', 'accumulatedTotal', 'actions'];
        this.filtersColumns = ['lottery'];
        this.createdDate = new Date();
    }
    ngOnInit() {
        this.title = 'Apuestas Alertas Tres Cifras Mayores A';
        this.subtitle = 'Apuesta';
        super.init(this);
        super.onPageChange();
    }
    ngOnChanges(changes) {
        if (this.loadChange) {
            super.onPageChange();
        }
    }
    onEdit(row) {
        // this.router.navigate(['/employee', {employeeId: row.id}]);
    }
    validateAlert(row) {
        let alert = false;
        if (row.accumulatedTotal >= this.price) {
            alert = true;
        }
        return alert;
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    beforePageChange() {
        this.settings = {
            query: {
                table: 'vw_betAlerts'
            },
            options: {
                where: {
                    isFourFigure: false,
                    accumulatedTotal: { $gte: this.price }
                },
                order: [['accumulated', 'desc'], ['accumulatedTotal', 'desc']]
            }
        };
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
BetThreeFigureComponent.ɵfac = function BetThreeFigureComponent_Factory(t) { return new (t || BetThreeFigureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
BetThreeFigureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetThreeFigureComponent, selectors: [["app-bet-three-figure"]], inputs: { loadChange: "loadChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 36, vars: 13, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], [2, "float", "left", "width", "30%", "margin-right", "10px"], ["matInput", "", "type", "number", "placeholder", "Entre precio", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModel", "keypress", "ngModelChange"], [2, "width", "30%", "margin-right", "10px"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", 2, "overflow", "hidden"], ["mat-fab", "", "color", "basic", 2, "float", "left", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["class", "material-icons", 4, "ngIf"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""]], template: function BetThreeFigureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetThreeFigureComponent_Template_input_keypress_16_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function BetThreeFigureComponent_Template_input_ngModelChange_16_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Seleccione fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetThreeFigureComponent_Template_input_ngModelChange_20_listener($event) { return ctx.createdDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetThreeFigureComponent_Template_button_click_26_listener() { return ctx.onPageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Refrescar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function BetThreeFigureComponent_Template_table_matSortChange_28_listener($event) { return ctx.onSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BetThreeFigureComponent_th_30_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BetThreeFigureComponent_td_31_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BetThreeFigureComponent_ng_container_32_Template, 3, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BetThreeFigureComponent_tr_33_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BetThreeFigureComponent_tr_34_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function BetThreeFigureComponent_Template_mat_paginator_page_35_listener($event) { return ctx.onPaginatorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetThreeFigureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bet-three-figure',
                templateUrl: './bet-three-figure.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { loadChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/bet/bet.module.ts":
/*!*****************************************!*\
  !*** ./src/app/views/bet/bet.module.ts ***!
  \*****************************************/
/*! exports provided: BetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetModule", function() { return BetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _bet_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bet-routing.module */ "./src/app/views/bet/bet-routing.module.ts");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/translate.pipe */ "./src/app/pipes/translate.pipe.ts");
/* harmony import */ var _lottery_lottery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lottery/lottery.component */ "./src/app/views/bet/lottery/lottery.component.ts");
/* harmony import */ var _lotteries_lotteries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lotteries/lotteries.component */ "./src/app/views/bet/lotteries/lotteries.component.ts");
/* harmony import */ var _bet_bet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bet/bet.component */ "./src/app/views/bet/bet/bet.component.ts");
/* harmony import */ var _bet_alerts_bet_alerts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bet-alerts/bet-alerts.component */ "./src/app/views/bet/bet-alerts/bet-alerts.component.ts");
/* harmony import */ var _bets_bets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bets/bets.component */ "./src/app/views/bet/bets/bets.component.ts");
/* harmony import */ var _forbidden_number_forbidden_number_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forbidden-number/forbidden-number.component */ "./src/app/views/bet/forbidden-number/forbidden-number.component.ts");
/* harmony import */ var _forbidden_numbers_forbidden_numbers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forbidden-numbers/forbidden-numbers.component */ "./src/app/views/bet/forbidden-numbers/forbidden-numbers.component.ts");
/* harmony import */ var _bet2_bet2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bet2/bet2.component */ "./src/app/views/bet/bet2/bet2.component.ts");
/* harmony import */ var _bet_four_figure_bet_four_figure_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bet-four-figure/bet-four-figure.component */ "./src/app/views/bet/bet-four-figure/bet-four-figure.component.ts");
/* harmony import */ var _bet_three_figure_bet_three_figure_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bet-three-figure/bet-three-figure.component */ "./src/app/views/bet/bet-three-figure/bet-three-figure.component.ts");

















class BetModule {
}
BetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BetModule });
BetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BetModule_Factory(t) { return new (t || BetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _bet_routing_module__WEBPACK_IMPORTED_MODULE_4__["BetRoutingModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BetModule, { declarations: [_lottery_lottery_component__WEBPACK_IMPORTED_MODULE_6__["LotteryComponent"], _lotteries_lotteries_component__WEBPACK_IMPORTED_MODULE_7__["LotteriesComponent"], _bet_bet_component__WEBPACK_IMPORTED_MODULE_8__["BetComponent"], _bet_alerts_bet_alerts_component__WEBPACK_IMPORTED_MODULE_9__["BetAlertsComponent"], _bets_bets_component__WEBPACK_IMPORTED_MODULE_10__["BetsComponent"],
        _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"],
        _forbidden_number_forbidden_number_component__WEBPACK_IMPORTED_MODULE_11__["ForbiddenNumberComponent"],
        _forbidden_numbers_forbidden_numbers_component__WEBPACK_IMPORTED_MODULE_12__["ForbiddenNumbersComponent"],
        _bet2_bet2_component__WEBPACK_IMPORTED_MODULE_13__["Bet2Component"],
        _bet_four_figure_bet_four_figure_component__WEBPACK_IMPORTED_MODULE_14__["BetFourFigureComponent"],
        _bet_three_figure_bet_three_figure_component__WEBPACK_IMPORTED_MODULE_15__["BetThreeFigureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _bet_routing_module__WEBPACK_IMPORTED_MODULE_4__["BetRoutingModule"],
        _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_lottery_lottery_component__WEBPACK_IMPORTED_MODULE_6__["LotteryComponent"], _lotteries_lotteries_component__WEBPACK_IMPORTED_MODULE_7__["LotteriesComponent"], _bet_bet_component__WEBPACK_IMPORTED_MODULE_8__["BetComponent"], _bet_alerts_bet_alerts_component__WEBPACK_IMPORTED_MODULE_9__["BetAlertsComponent"], _bets_bets_component__WEBPACK_IMPORTED_MODULE_10__["BetsComponent"],
                    _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"],
                    _forbidden_number_forbidden_number_component__WEBPACK_IMPORTED_MODULE_11__["ForbiddenNumberComponent"],
                    _forbidden_numbers_forbidden_numbers_component__WEBPACK_IMPORTED_MODULE_12__["ForbiddenNumbersComponent"],
                    _bet2_bet2_component__WEBPACK_IMPORTED_MODULE_13__["Bet2Component"],
                    _bet_four_figure_bet_four_figure_component__WEBPACK_IMPORTED_MODULE_14__["BetFourFigureComponent"],
                    _bet_three_figure_bet_three_figure_component__WEBPACK_IMPORTED_MODULE_15__["BetThreeFigureComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _bet_routing_module__WEBPACK_IMPORTED_MODULE_4__["BetRoutingModule"],
                    _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/bet/bet/bet.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/bet/bet/bet.component.ts ***!
  \************************************************/
/*! exports provided: BetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetComponent", function() { return BetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _baseEditView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../baseEditView */ "./src/app/views/baseEditView.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/security/auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






















function BetComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r17.text, " ");
} }
function BetComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("employeeId"));
} }
const _c0 = function () { return { standalone: true }; };
const _c1 = function (a0) { return { color: a0 }; };
function BetComponent_mat_checkbox_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetComponent_mat_checkbox_27_Template_mat_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const lottery_r18 = ctx.$implicit; return lottery_r18.check = $event; })("change", function BetComponent_mat_checkbox_27_Template_mat_checkbox_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.lotteryChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lottery_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", lottery_r18.check)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("value", lottery_r18.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, lottery_r18.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lottery_r18.name);
} }
function BetComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("checkLotteries"));
} }
function BetComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getErrorMessage("number"));
} }
function BetComponent_mat_form_field_42_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetComponent_mat_form_field_42_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.numberOnly($event); })("ngModelChange", function BetComponent_mat_form_field_42_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.entity.firstThreePrice = $event; })("change", function BetComponent_mat_form_field_42_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.firstThreePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.entity.firstThreePrice);
} }
function BetComponent_mat_form_field_46_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetComponent_mat_form_field_46_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.numberOnly($event); })("ngModelChange", function BetComponent_mat_form_field_46_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.entity.chockFourFigurePrice = $event; })("change", function BetComponent_mat_form_field_46_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.chockFourFigurePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r6.entity.chockFourFigurePrice);
} }
function BetComponent_mat_form_field_47_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetComponent_mat_form_field_47_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.numberOnly($event); })("ngModelChange", function BetComponent_mat_form_field_47_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.entity.chockThreeFigurePrice = $event; })("change", function BetComponent_mat_form_field_47_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.chockThreeFigurePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r7.entity.chockThreeFigurePrice);
} }
function BetComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getErrorMessage("checkChock"));
} }
function BetComponent_mat_form_field_53_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetComponent_mat_form_field_53_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.numberOnly($event); })("ngModelChange", function BetComponent_mat_form_field_53_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.entity.lastThreePrice = $event; })("change", function BetComponent_mat_form_field_53_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.lastThreePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.entity.lastThreePrice);
} }
function BetComponent_mat_form_field_57_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetComponent_mat_form_field_57_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.numberOnly($event); })("ngModelChange", function BetComponent_mat_form_field_57_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.entity.combinedFourFigurePrice = $event; })("change", function BetComponent_mat_form_field_57_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.combinedFourFigurePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r10.entity.combinedFourFigurePrice);
} }
function BetComponent_mat_form_field_58_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetComponent_mat_form_field_58_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.numberOnly($event); })("ngModelChange", function BetComponent_mat_form_field_58_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.entity.combinedThreeFigurePrice = $event; })("change", function BetComponent_mat_form_field_58_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.combinedThreeFigurePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r11.entity.combinedThreeFigurePrice);
} }
function BetComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getErrorMessage("checkCombined"));
} }
function BetComponent_ng_container_63_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r46, " ");
} }
function BetComponent_ng_container_63_td_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetComponent_ng_container_63_td_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r53.preventEnter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetComponent_ng_container_63_td_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetComponent_ng_container_63_td_2_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const element_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.onDeleteCustom(element_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetComponent_ng_container_63_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BetComponent_ng_container_63_td_2_button_3_Template, 1, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BetComponent_ng_container_63_td_2_button_4_Template, 3, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    const column_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r50[column_r46]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r46 === "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r46 === "actions");
} }
function BetComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BetComponent_ng_container_63_th_1_Template, 2, 1, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BetComponent_ng_container_63_td_2_Template, 5, 3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r46);
} }
function BetComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 45);
} }
function BetComponent_tr_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 46);
} }
function BetComponent_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.getErrorMessage("checkNumbers"));
} }
class BetComponent extends _baseEditView__WEBPACK_IMPORTED_MODULE_2__["BaseEditView"] {
    constructor(service, authService, route, fb, router, changeDetectorRef, _snackBar) {
        super();
        this.service = service;
        this.authService = authService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this._snackBar = _snackBar;
        this.entityApi = 'bets';
        this.entityDetailApi = 'details';
        this.entityApiEmployees = 'employees';
        this.entityApiLotteries = 'lotteries';
        this.entityNumbers = 'numbers';
        this.employees = [];
        this.lotteries = [];
        this.number = null;
        this.displayedColumns = ['number', 'price', 'actions'];
        this.configFormGroup = (entityId) => {
            let setting = { field: 'number', ValidationError: 'forbidden' };
            // if (entityId) {
            //
            //   setting.options = {
            //     where: {
            //       id: { $ne: entityId }
            //     }
            //   }
            // }
            this.entityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                checkLotteries: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                checkNumbers: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                firstThreePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                lastThreePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                // chockPrice: new FormControl(''),
                checkCombined: this.fb.array([]),
                checkChock: this.fb.array([]),
                // combinedFourFigurePrice: new FormControl(''),
                combinedThreeFigurePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                total: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null, [this.service.takenValidator(this.entityNumbers, setting)])
            });
        };
    }
    ngOnInit() {
        this.title = 'Apuesta';
        this.subtitle = 'Apuesta';
        this.iniEntity();
        super.init(this);
        this.route.params.subscribe((params) => {
            this.service.getSelect(this.entityApiEmployees, { value: 'id', text: 'code', options: { order: [['code', 'asc']] } })
                .subscribe((res) => {
                this.employees = res;
            });
            let d = new Date();
            let n = d.getDay();
            let dayName = '';
            switch (n) {
                case 0:
                    dayName = 'sunday';
                    break;
                case 1:
                    dayName = 'monday';
                    break;
                case 2:
                    dayName = 'tuesday';
                    break;
                case 3:
                    dayName = 'wednesday';
                    break;
                case 4:
                    dayName = 'thursday';
                    break;
                case 5:
                    dayName = 'friday';
                    break;
                case 6:
                    dayName = 'saturday';
                    break;
            }
            let tasks = 0;
            let totalTasks = 0;
            let processTasks = () => {
                tasks++;
                if (tasks == totalTasks) {
                    let lotteriesDetail = [];
                    let numbersDetail = [];
                    if (this.entity && this.entity.details && this.entity.details.length) {
                        for (let detail of this.entity.details) {
                            let lotteryFound = lotteriesDetail.find((o) => o.id == detail.lotteryId);
                            if (!lotteryFound) {
                                lotteriesDetail.push(detail.lottery);
                            }
                        }
                        for (let detail of this.entity.details) {
                            let numberFount = numbersDetail.find((o) => o.number == detail.number);
                            if (!numberFount) {
                                let numbers = this.entity.details.filter((o) => o.number == detail.number);
                                let LotteriesThreeFigures = lotteriesDetail.filter((o) => o.isThreeFigures == true);
                                let LotteriesFourFigures = lotteriesDetail.filter((o) => o.isThreeFigures == false);
                                if (detail.number.length == 3) {
                                    if (numbers.length == LotteriesThreeFigures.length) {
                                        numbersDetail.push(detail);
                                    }
                                    else {
                                        let numberFourFigures = this.entity.details.filter((o) => o.number.length > 3);
                                        let stop = (numbers.length - (LotteriesFourFigures.length * LotteriesThreeFigures.length)) / LotteriesThreeFigures.length;
                                        //todo revisar bien
                                        if (stop < 1) {
                                            stop = (numbers.length - (LotteriesFourFigures.length)) / LotteriesThreeFigures.length;
                                        }
                                        for (let i = 0; i < stop; i++) {
                                            numbersDetail.push(detail);
                                        }
                                    }
                                }
                                else {
                                    if (numbers.length == LotteriesFourFigures.length) {
                                        numbersDetail.push(detail);
                                    }
                                    else {
                                        let stop = numbers.length / LotteriesFourFigures.length;
                                        for (let i = 0; i < stop; i++) {
                                            numbersDetail.push(detail);
                                        }
                                    }
                                }
                            }
                        }
                        for (let detail of numbersDetail) {
                            this.addCheckNumbers(detail.number, detail.isFirstThree, detail.isLastThreem);
                        }
                        for (let lotteryDetail of lotteriesDetail) {
                            let lotteryFound = this.lotteries.find((o) => o.id == lotteryDetail.id);
                            if (lotteryFound) {
                                lotteryFound.check = true;
                                this.lotteryChange({ checked: true, source: { value: lotteryFound.id } });
                            }
                        }
                    }
                    if (this.entity.chock) {
                        const checkChock = this.entityForm.get('checkChock');
                        this.entityForm.get('checkChock').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                        checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), chockFourFigure: true }));
                        checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), chockFourFigure: false }));
                    }
                    if (this.entity.combined) {
                        const checkCombined = this.entityForm.get('checkCombined');
                        this.entityForm.get('checkCombined').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                        checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: true }));
                        checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: false }));
                    }
                }
            };
            totalTasks++;
            this.service.get(this.entityApiLotteries, { options: { where: { play: { $like: '%' + dayName + '%' } }, order: [['name', 'asc']] } })
                .subscribe((res) => {
                let enumLotteryTemporality = [
                    {
                        value: 'morning', color: 'green'
                    },
                    {
                        value: 'afternoon', color: 'crimson'
                    },
                    {
                        value: 'night', color: 'blue'
                    },
                    {
                        value: null, color: 'Ninguna'
                    }
                ];
                let currLotteries = res;
                for (let temp of enumLotteryTemporality) {
                    let lotteriesFount = currLotteries.filter((o) => o.temporality == temp.value);
                    for (let lottery of lotteriesFount) {
                        lottery.color = temp.color;
                        this.lotteries.push(lottery);
                    }
                }
                processTasks();
            });
            if (params && params.betId) {
                totalTasks++;
                this.configFormGroup(params.betId);
                super.getEntity(params.betId, { options: {
                        include: [{ association: 'details', include: [{ association: 'lottery' }] },
                            { association: 'employee' },]
                    } }).subscribe(() => {
                    processTasks();
                });
            }
            else {
                this.configFormGroup();
            }
        });
    }
    iniEntity() {
        let currEmployeeId = null;
        if (this.entity && this.entity.employeeId) {
            currEmployeeId = this.entity.employeeId;
        }
        this.entity = {
            employeeId: null,
            userId: null,
            price: null,
            firstThree: false,
            firstThreePrice: null,
            lastThree: false,
            lastThreePrice: null,
            chock: false,
            chockFourFigurePrice: null,
            chockThreeFigurePrice: null,
            // chockPrice: null,
            combined: false,
            combinedFourFigurePrice: null,
            combinedThreeFigurePrice: null,
            total: null,
            details: null
        };
        this.entity.employeeId = currEmployeeId;
    }
    new() {
        this.iniEntity();
        for (let lottery of this.lotteries) {
            lottery.check = false;
        }
        if (this.entityForm) {
            const checkNumbers = this.entityForm.get('checkNumbers');
            let stop = checkNumbers.controls.length;
            for (let i = 0; i < stop; i++) {
                checkNumbers.removeAt(0);
            }
            const checkLotteries = this.entityForm.get('checkLotteries');
            stop = checkLotteries.controls.length;
            for (let i = 0; i < stop; i++) {
                checkLotteries.removeAt(0);
            }
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
    }
    lotteryChange(e) {
        const checkLotteries = this.entityForm.get('checkLotteries');
        let lottery = this.lotteries.find((o) => o.id == e.source.value);
        let hastManyThreeFigures = false;
        let hastThreeFigures = false;
        let count = 0;
        for (let obj of checkLotteries.value) {
            if (obj.isThreeFigures) {
                count += 1;
                hastThreeFigures = true;
                if (count >= 2) {
                    hastManyThreeFigures = true;
                    break;
                }
            }
        }
        if (e.checked) {
            checkLotteries.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: e.source.value, isThreeFigures: lottery.isThreeFigures }));
        }
        else {
            let i = 0;
            checkLotteries.controls.forEach((item) => {
                if (item.value.id == e.source.value) {
                    checkLotteries.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.validateAllNumbers(lottery, hastManyThreeFigures, hastThreeFigures);
    }
    add() {
        const numberControl = this.entityForm.get('number');
        if (this.number && this.number.toString().length > 2 && numberControl.valid) {
            let isFirstThree = false;
            let isLastThree = false;
            if (this.number.toString().length == 3) {
                isLastThree = true;
            }
            this.addCheckNumbers(this.number, isFirstThree, isLastThree);
            isLastThree = false;
            let hastThreeFigures = this.findThreeFigures();
            if (hastThreeFigures || this.entity.lastThree) {
                isLastThree = true;
                if (this.number.toString().length > 3) {
                    this.addCheckNumbers(this.number.substring(1, this.number.length), isFirstThree, isLastThree);
                }
                isLastThree = false;
            }
            if (this.entity.firstThree) {
                isFirstThree = true;
                if (this.number.toString().length > 3) {
                    this.addCheckNumbers(this.number.substring(0, this.number.length - 1), isFirstThree, isLastThree);
                }
            }
            this.number = null;
        }
    }
    findThreeFigures() {
        let hastThreeFigures = false;
        const checkLotteries = this.entityForm.get('checkLotteries');
        if (checkLotteries.value) {
            for (let obj of checkLotteries.value) {
                let lottery = this.lotteries.find((o) => o.id == obj.id);
                if (lottery.isThreeFigures) {
                    hastThreeFigures = true;
                    break;
                }
            }
        }
        return hastThreeFigures;
    }
    addCheckNumbers(number, isFirstThree, isLastThree) {
        const checkNumbers = this.entityForm.get('checkNumbers');
        checkNumbers.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), number: number, isFirstThree: isFirstThree, isLastThree: isLastThree, price: this.entity.price }));
        this.refreshGrid();
    }
    onDeleteCustom(row) {
        // if (confirm('¿Está seguro de eliminar el registro?')) {
        const checkNumbers = this.entityForm.get('checkNumbers');
        let index = checkNumbers.value.findIndex((o) => o.id == row.id);
        checkNumbers.removeAt(index);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](checkNumbers.value);
        this.calculateTotal();
        let details = [];
        let deleteDetails = [];
        if (this.entity && this.entity.details && this.entity.details.length) {
            details = this.entity.details.filter((o) => o.number == row.number);
        }
        for (let detail of details) {
            let detailFound = deleteDetails.find((o) => o.lotteryId == detail.lotteryId);
            if (!detailFound) {
                deleteDetails.push(detail);
            }
        }
        deleteDetails = deleteDetails.map((o) => { return o.id; });
        this.view.service.deleteOptions(this.entityDetailApi, {
            options: {
                where: { id: deleteDetails }
            }
        })
            .subscribe((res) => {
        });
        // }
    }
    getDisabled() {
        let disabled = true;
        if (this.number && this.number.toString().length > 2) {
            disabled = false;
        }
        return disabled;
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }
    beforeSaved() {
        let done = true;
        let currentUser = this.authService.getItem('currentUser');
        this.entity.userId = currentUser.id;
        let dbDetails = this.entity.details || [];
        this.entity.details = [];
        let onlyThreeFigures = true;
        let lottery;
        const checkLotteries = this.entityForm.get('checkLotteries');
        for (let obj of checkLotteries.value) {
            lottery = this.lotteries.find((o) => o.id == obj.id);
            if (!lottery.isThreeFigures) {
                onlyThreeFigures = false;
                break;
            }
        }
        const checkNumbers = this.entityForm.get('checkNumbers');
        if (onlyThreeFigures) {
            for (let obj of checkNumbers.value) {
                if (obj.number.length > 3) {
                    alert('Solo 3 cifras ' + lottery.name);
                    done = false;
                    break;
                }
            }
        }
        if (done == false) {
            return done;
        }
        for (let objl of checkLotteries.value) {
            for (let obj of checkNumbers.value) {
                let isFourFigure = obj.number.length == 4;
                lottery = this.lotteries.find((o) => o.id == objl.id);
                if (lottery && lottery.isThreeFigures && isFourFigure) {
                }
                else {
                    let currDetail = {
                        lotteryId: lottery.id,
                        number: obj.number,
                        price: obj.price,
                        accumulated: obj.price,
                        isFourFigure: isFourFigure,
                        isFirstThree: obj.isFirstThree,
                        isLastThree: obj.isLastThree
                    };
                    let detailFount = dbDetails.find((o) => o.lotteryId == currDetail.lotteryId && o.number == currDetail.number);
                    let index = dbDetails.findIndex((o) => o.lotteryId == currDetail.lotteryId && o.number == currDetail.number);
                    if (detailFount) {
                        currDetail.id = detailFount.id;
                        dbDetails.splice(index, 1);
                    }
                    else {
                        currDetail.id = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])();
                    }
                    this.entity.details.push(currDetail);
                }
            }
        }
        if (onlyThreeFigures) {
            for (let obj of this.entity.details) {
                if (obj.number.length > 3) {
                    alert('Solo 3 cifras ' + lottery.name);
                    done = false;
                }
            }
        }
        this.entity;
        return done;
    }
    validateAllNumbers(lottery, hastManyThreeFigures, hastThreeFigures) {
        if (lottery.isThreeFigures && !this.entity.lastThree && !hastManyThreeFigures) {
            const checkNumbers = this.entityForm.get('checkNumbers');
            if (lottery.check) {
                if (!hastThreeFigures) {
                    for (let obj of checkNumbers.value) {
                        if (obj.number.length == 4) {
                            let isFirstThree = false;
                            let isLastThree = true;
                            this.addCheckNumbers(obj.number.substring(1, obj.number.length), isFirstThree, isLastThree);
                        }
                    }
                }
            }
            else {
                for (let obj of checkNumbers.value) {
                    if (obj.number.length == 3 && obj.isLastThree) {
                        this.onDeleteCustom({ id: obj.id });
                    }
                }
            }
        }
        this.calculateTotal();
    }
    refreshGrid() {
        const checkNumbers = this.entityForm.get('checkNumbers');
        for (let obj of checkNumbers.value) {
            obj.price = this.entity.price;
            if (obj.isFirstThree && this.entity.firstThree) {
                obj.price = this.entity.firstThreePrice;
            }
            if (obj.isLastThree && this.entity.lastThree) {
                obj.price = this.entity.lastThreePrice;
            }
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](checkNumbers.value);
        this.calculateTotal();
    }
    preventEnter() {
        //let a = '' //todo validar por que cuando se da enter se esta lanzando el evento click del primero control de accion en el grid
    }
    firstThreeChange(e) {
        const checkNumbers = this.entityForm.get('checkNumbers');
        if (e.checked) {
            this.entity.firstThreePrice = this.entity.price;
            this.entityForm.get('firstThreePrice').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            for (let obj of checkNumbers.value) {
                if (obj.number.length == 4) {
                    let isFirstThree = true;
                    let isLastThree = false;
                    this.addCheckNumbers(obj.number.substring(0, obj.number.length - 1), isFirstThree, isLastThree);
                }
            }
        }
        else {
            this.entityForm.get('firstThreePrice').clearValidators();
            let fourFigures = [];
            for (let obj of checkNumbers.value) {
                if (obj.number.length == 4) {
                    fourFigures.push(obj);
                }
            }
            for (let obj of fourFigures) {
                let numberToFind = obj.number.substring(0, obj.number.length - 1);
                let objFount = checkNumbers.value.find((o) => o.number == numberToFind);
                this.onDeleteCustom({ id: objFount.id });
            }
        }
        this.entityForm.get('firstThreePrice').updateValueAndValidity();
        this.changeDetectorRef.detectChanges();
    }
    firstThreePriceChange() {
        const checkNumbers = this.entityForm.get('checkNumbers');
        for (let obj of checkNumbers.value) {
            if (obj.number.length == 3 && obj.isFirstThree) {
                obj.price = this.entity.firstThreePrice;
            }
        }
        this.calculateTotal();
    }
    lastThreeChange(e) {
        let hastThreeFigures = this.findThreeFigures();
        const checkNumbers = this.entityForm.get('checkNumbers');
        if (e.checked) {
            this.entity.lastThreePrice = this.entity.price;
            this.entityForm.get('lastThreePrice').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            if (!hastThreeFigures) {
                for (let obj of checkNumbers.value) {
                    if (obj.number.length == 4) {
                        let isFirstThree = false;
                        let isLastThree = true;
                        this.addCheckNumbers(obj.number.substring(1, obj.number.length), isFirstThree, isLastThree);
                    }
                }
            }
        }
        else {
            this.entityForm.get('lastThreePrice').clearValidators();
            if (!hastThreeFigures) {
                for (let obj of checkNumbers.value) {
                    if (obj.number.length == 3 && obj.isLastThree) {
                        this.onDeleteCustom({ id: obj.id });
                    }
                }
            }
        }
        this.entityForm.get('lastThreePrice').updateValueAndValidity();
        this.changeDetectorRef.detectChanges();
    }
    lastThreePriceChange() {
        const checkNumbers = this.entityForm.get('checkNumbers');
        for (let obj of checkNumbers.value) {
            if (obj.number.length == 3 && obj.isLastThree) {
                obj.price = this.entity.lastThreePrice;
            }
        }
        this.calculateTotal();
    }
    chockChange(e) {
        const checkChock = this.entityForm.get('checkChock');
        if (e.checked) {
            this.entityForm.get('checkChock').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            if (this.entity.price) {
                this.entity.chockFourFigurePrice = this.entity.price;
                this.entity.chockThreeFigurePrice = this.entity.price;
                checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), chockFourFigure: true }));
                checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), chockFourFigure: false }));
            }
        }
        else {
            this.entity.chockFourFigurePrice = null;
            this.entity.chockThreeFigurePrice = null;
            let i = 0;
            checkChock.controls.forEach((item) => {
                checkChock.removeAt(i);
                i++;
            });
            this.entityForm.get('checkChock').clearValidators();
        }
        this.entityForm.get('checkChock').updateValueAndValidity();
        this.calculateTotal();
    }
    chockFourFigurePriceChange() {
        const checkChock = this.entityForm.get('checkChock');
        if (this.entity.chockFourFigurePrice) {
            checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), ChockFourFigure: true }));
        }
        else {
            let i = 0;
            checkChock.controls.forEach((item) => {
                if (item.value.ChockFourFigure) {
                    checkChock.removeAt(i);
                    return;
                }
                else {
                    checkChock.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.calculateTotal();
    }
    chockThreeFigurePriceChange() {
        const checkChock = this.entityForm.get('checkChock');
        if (this.entity.chockThreeFigurePrice) {
            checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), ChockFourFigure: false }));
        }
        else {
            let i = 0;
            checkChock.controls.forEach((item) => {
                if (item.value.ChockFourFigure) {
                    checkChock.removeAt(i);
                    return;
                }
                else {
                    checkChock.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.calculateTotal();
    }
    // chockPriceChange(): void {
    //   this.calculateTotal();
    // }
    combinedChange(e) {
        const checkCombined = this.entityForm.get('checkCombined');
        if (e.checked) {
            this.entityForm.get('checkCombined').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            if (this.entity.price) {
                this.entity.combinedFourFigurePrice = this.entity.price;
                this.entity.combinedThreeFigurePrice = this.entity.price;
                checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: true }));
                checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: false }));
            }
        }
        else {
            this.entity.combinedFourFigurePrice = null;
            this.entity.combinedThreeFigurePrice = null;
            let i = 0;
            checkCombined.controls.forEach((item) => {
                checkCombined.removeAt(i);
                i++;
            });
            this.entityForm.get('checkCombined').clearValidators();
        }
        this.entityForm.get('checkCombined').updateValueAndValidity();
        this.calculateTotal();
    }
    combinedFourFigurePriceChange() {
        const checkCombined = this.entityForm.get('checkCombined');
        if (this.entity.combinedFourFigurePrice) {
            checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: true }));
        }
        else {
            let i = 0;
            checkCombined.controls.forEach((item) => {
                if (item.value.combinedFourFigure) {
                    checkCombined.removeAt(i);
                    return;
                }
                else {
                    checkCombined.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.calculateTotal();
    }
    combinedThreeFigurePriceChange() {
        const checkCombined = this.entityForm.get('checkCombined');
        if (this.entity.combinedThreeFigurePrice) {
            checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: false }));
        }
        else {
            let i = 0;
            checkCombined.controls.forEach((item) => {
                if (item.value.combinedFourFigure) {
                    checkCombined.removeAt(i);
                    return;
                }
                else {
                    checkCombined.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.calculateTotal();
    }
    calculateTotal() {
        this.entity.total = 0;
        let lotteriesFour = 0;
        let lotteriesThree = 0;
        let NumbersFour = 0;
        let NumbersThree = 0;
        let numbersThreeFirst = 0;
        let numbersThreeLast = 0;
        let firstThreePrice = this.entity.firstThreePrice || 0;
        let lastThreePrice = this.entity.lastThreePrice || 0;
        const checkLotteries = this.entityForm.get('checkLotteries');
        let lottery;
        for (let obj of checkLotteries.value) {
            lottery = this.lotteries.find((o) => o.id == obj.id);
            if (lottery.isThreeFigures) {
                lotteriesThree += 1;
            }
            else {
                lotteriesFour += 1;
            }
        }
        const checkNumbers = this.entityForm.get('checkNumbers');
        for (let obj of checkNumbers.value) {
            if (obj.number.length == 3) {
                NumbersThree += 1;
                if (obj.isFirstThree) {
                    numbersThreeFirst += 1;
                }
                else {
                    numbersThreeLast += 1;
                }
            }
            else {
                NumbersFour += 1;
            }
        }
        this.entity.total = this.entity.price * NumbersFour * lotteriesFour;
        if (this.entity.firstThree) {
            this.entity.total += this.entity.firstThreePrice * numbersThreeFirst * (lotteriesFour + lotteriesThree);
            if (numbersThreeLast) {
                if (this.entity.lastThree) {
                    this.entity.total += this.entity.lastThreePrice * numbersThreeLast * (lotteriesFour + lotteriesThree);
                }
                else {
                    this.entity.total += this.entity.price * numbersThreeLast * (lotteriesFour + lotteriesThree);
                }
            }
        }
        else if (this.entity.lastThree) {
            this.entity.total += this.entity.lastThreePrice * numbersThreeLast * (lotteriesFour + lotteriesThree);
        }
        else {
            this.entity.total += this.entity.price * NumbersThree * (lotteriesFour + lotteriesThree);
        }
        if (this.entity.chock) {
            if (NumbersThree) {
                this.entity.total += this.entity.chockFourFigurePrice * NumbersFour * (lotteriesFour);
                this.entity.total += this.entity.chockThreeFigurePrice * NumbersThree * (lotteriesFour + lotteriesThree);
            }
            else {
                this.entity.total += this.entity.chockFourFigurePrice * NumbersFour * (lotteriesFour + lotteriesThree);
            }
        }
        if (this.entity.combined) {
            if (NumbersThree) {
                this.entity.total += this.entity.combinedFourFigurePrice * NumbersFour * (lotteriesFour);
                this.entity.total += this.entity.combinedThreeFigurePrice * NumbersThree * (lotteriesFour + lotteriesThree);
            }
            else {
                this.entity.total += this.entity.combinedFourFigurePrice * NumbersFour * (lotteriesFour + lotteriesThree);
            }
        }
        // if (this.entity.firstThree && this.entity.lastThree) {
        //   this.entity.total = (this.entity.price * lotteriesFour) + (firstThreePrice * (lotteriesFour + lotteriesThree)) + (lastThreePrice * (lotteriesFour + lotteriesThree));
        // }
        // else if (this.entity.firstThree && !this.entity.lastThree) {
        //   this.entity.total = (this.entity.price * lotteriesFour) + (firstThreePrice * (lotteriesFour + lotteriesThree));
        // }
        // else if (this.entity.lastThree && !this.entity.firstThree) {
        //   this.entity.total = (this.entity.price * lotteriesFour) + (lastThreePrice * (lotteriesFour + lotteriesThree));
        // }
        // else {
        //   this.entity.total = (this.entity.price * (lotteriesFour + lotteriesThree));
        // }
        // this.entity.total = (this.entity.price * countLotteries) + (firstThreePrice * countLotteries) + (lastThreePrice * countLotteries);
        this.changeDetectorRef.detectChanges();
    }
    lotteryAllChange(e) {
        if (e.checked) {
            for (let obj of this.lotteries) {
                obj.check = true;
                this.lotteryChange({ source: { value: obj.id } });
            }
        }
        else {
            for (let obj of this.lotteries) {
                obj.check = false;
                this.lotteryChange({ source: { value: obj.id } });
            }
        }
    }
}
BetComponent.ɵfac = function BetComponent_Factory(t) { return new (t || BetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
BetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetComponent, selectors: [["app-bet"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 72, vars: 39, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], [3, "formGroup"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "overflow", "hidden"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", 2, "float", "left", "width", "50%"], [2, "width", "95%"], ["matNativeControl", "", "formControlName", "employeeId", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "formControlName", "total", "type", "number", "placeholder", "Total", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModel", "readonly", "keypress", "ngModelChange"], ["style", "margin-right: 25px;", 3, "ngModel", "ngModelOptions", "value", "ngStyle", "ngModelChange", "change", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Entre number", "formControlName", "number", "onKeyPress", "if(this.value.length===4) return false;", "autocomplete", "off", 3, "ngModel", "keypress", "ngModelChange", "keyup.enter"], ["matInput", "", "formControlName", "price", "type", "number", "placeholder", "Entre Precio", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", "required", "", 3, "ngModel", "keypress", "ngModelChange", "change"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-text-outline", "10px", "margin-top", "10px", "overflow", "hidden"], [2, "margin-right", "10px", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["style", "width: 95%;", 4, "ngIf"], ["style", "width: 32%;margin-right: 10px;", 4, "ngIf"], ["style", "width: 32%", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "10px"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-fab", "", "color", "accent", 3, "disabled", "click"], ["mat-fab", "", "color", "primary", 3, "click"], [3, "value"], [2, "margin-right", "25px", 3, "ngModel", "ngModelOptions", "value", "ngStyle", "ngModelChange", "change"], ["matInput", "", "formControlName", "firstThreePrice", "type", "number", "placeholder", "Entre precio, tres primeras", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", "required", "", 3, "ngModel", "keypress", "ngModelChange", "change"], [2, "width", "32%", "margin-right", "10px"], ["matInput", "", "type", "number", "placeholder", "Cuatro cifras, cu\u00F1a", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange", "change"], [2, "width", "32%"], ["matInput", "", "type", "number", "placeholder", "Tres cifras, cu\u00F1a", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange", "change"], ["matInput", "", "formControlName", "lastThreePrice", "type", "number", "placeholder", "Entre precio, tres ultimas", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", "required", "", 3, "ngModel", "keypress", "ngModelChange", "change"], ["matInput", "", "type", "number", "placeholder", "Cuatro cifras, combinado", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange", "change"], ["matInput", "", "type", "number", "placeholder", "Tres cifras, combinado", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange", "change"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function BetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Seleccione C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetComponent_Template_mat_select_ngModelChange_19_listener($event) { return ctx.entity.employeeId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BetComponent_mat_option_20_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BetComponent_mat_error_21_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetComponent_Template_input_keypress_24_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function BetComponent_Template_input_ngModelChange_24_listener($event) { return ctx.entity.total = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BetComponent_mat_checkbox_27_Template, 2, 8, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, BetComponent_mat_error_28_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetComponent_Template_input_keypress_32_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function BetComponent_Template_input_ngModelChange_32_listener($event) { return ctx.number = $event; })("keyup.enter", function BetComponent_Template_input_keyup_enter_32_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BetComponent_mat_error_33_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function BetComponent_Template_input_keypress_37_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function BetComponent_Template_input_ngModelChange_37_listener($event) { return ctx.entity.price = $event; })("change", function BetComponent_Template_input_change_37_listener() { return ctx.refreshGrid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetComponent_Template_mat_checkbox_ngModelChange_40_listener($event) { return ctx.entity.firstThree = $event; })("change", function BetComponent_Template_mat_checkbox_change_40_listener($event) { return ctx.firstThreeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Tres primeras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BetComponent_mat_form_field_42_Template, 2, 1, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetComponent_Template_mat_checkbox_ngModelChange_44_listener($event) { return ctx.entity.chock = $event; })("change", function BetComponent_Template_mat_checkbox_change_44_listener($event) { return ctx.chockChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cu\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, BetComponent_mat_form_field_46_Template, 2, 3, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, BetComponent_mat_form_field_47_Template, 2, 3, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, BetComponent_mat_error_48_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetComponent_Template_mat_checkbox_ngModelChange_51_listener($event) { return ctx.entity.lastThree = $event; })("change", function BetComponent_Template_mat_checkbox_change_51_listener($event) { return ctx.lastThreeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tres Ultimas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, BetComponent_mat_form_field_53_Template, 2, 1, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetComponent_Template_mat_checkbox_ngModelChange_55_listener($event) { return ctx.entity.combined = $event; })("change", function BetComponent_Template_mat_checkbox_change_55_listener($event) { return ctx.combinedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Combinado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, BetComponent_mat_form_field_57_Template, 2, 3, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, BetComponent_mat_form_field_58_Template, 2, 3, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, BetComponent_mat_error_59_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, BetComponent_ng_container_63_Template, 3, 1, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, BetComponent_tr_64_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, BetComponent_tr_65_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, BetComponent_mat_error_66_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetComponent_Template_button_click_68_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetComponent_Template_button_click_70_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entityForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.employeeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.total)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lotteries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.firstThree)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.firstThree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.chock)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.chock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.chock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.chock && ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.lastThree)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.lastThree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.combined)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.combined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.combined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.combined && ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.entityForm.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bet',
                templateUrl: './bet.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/bet/bet2/bet2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/bet/bet2/bet2.component.ts ***!
  \**************************************************/
/*! exports provided: Bet2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bet2Component", function() { return Bet2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _baseEditView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../baseEditView */ "./src/app/views/baseEditView.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/security/auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






















function Bet2Component_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r17.text, " ");
} }
function Bet2Component_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("employeeId"));
} }
const _c0 = function () { return { standalone: true }; };
const _c1 = function (a0) { return { color: a0 }; };
function Bet2Component_mat_checkbox_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Bet2Component_mat_checkbox_27_Template_mat_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const lottery_r18 = ctx.$implicit; return lottery_r18.check = $event; })("change", function Bet2Component_mat_checkbox_27_Template_mat_checkbox_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.lotteryChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lottery_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", lottery_r18.check)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("value", lottery_r18.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, lottery_r18.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lottery_r18.name);
} }
function Bet2Component_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("checkLotteries"));
} }
function Bet2Component_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getErrorMessage("number"));
} }
function Bet2Component_mat_form_field_42_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Bet2Component_mat_form_field_42_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.numberOnly($event); })("ngModelChange", function Bet2Component_mat_form_field_42_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.entity.firstThreePrice = $event; })("change", function Bet2Component_mat_form_field_42_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.firstThreePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.entity.firstThreePrice);
} }
function Bet2Component_mat_form_field_46_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Bet2Component_mat_form_field_46_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.numberOnly($event); })("ngModelChange", function Bet2Component_mat_form_field_46_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.entity.chockFourFigurePrice = $event; })("change", function Bet2Component_mat_form_field_46_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.chockFourFigurePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r6.entity.chockFourFigurePrice);
} }
function Bet2Component_mat_form_field_47_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Bet2Component_mat_form_field_47_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.numberOnly($event); })("ngModelChange", function Bet2Component_mat_form_field_47_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.entity.chockThreeFigurePrice = $event; })("change", function Bet2Component_mat_form_field_47_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.chockThreeFigurePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r7.entity.chockThreeFigurePrice);
} }
function Bet2Component_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getErrorMessage("checkChock"));
} }
function Bet2Component_mat_form_field_53_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Bet2Component_mat_form_field_53_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.numberOnly($event); })("ngModelChange", function Bet2Component_mat_form_field_53_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.entity.lastThreePrice = $event; })("change", function Bet2Component_mat_form_field_53_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.lastThreePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.entity.lastThreePrice);
} }
function Bet2Component_mat_form_field_57_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Bet2Component_mat_form_field_57_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.numberOnly($event); })("ngModelChange", function Bet2Component_mat_form_field_57_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.entity.combinedFourFigurePrice = $event; })("change", function Bet2Component_mat_form_field_57_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.combinedFourFigurePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r10.entity.combinedFourFigurePrice);
} }
function Bet2Component_mat_form_field_58_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Bet2Component_mat_form_field_58_Template_input_keypress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.numberOnly($event); })("ngModelChange", function Bet2Component_mat_form_field_58_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.entity.combinedThreeFigurePrice = $event; })("change", function Bet2Component_mat_form_field_58_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.combinedThreeFigurePriceChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r11.entity.combinedThreeFigurePrice);
} }
function Bet2Component_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getErrorMessage("checkCombined"));
} }
function Bet2Component_ng_container_63_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r46, " ");
} }
function Bet2Component_ng_container_63_td_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Bet2Component_ng_container_63_td_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r53.preventEnter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Bet2Component_ng_container_63_td_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Bet2Component_ng_container_63_td_2_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const element_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.onDeleteCustomGrid(element_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Bet2Component_ng_container_63_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Bet2Component_ng_container_63_td_2_button_3_Template, 1, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Bet2Component_ng_container_63_td_2_button_4_Template, 3, 0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    const column_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r50[column_r46]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r46 === "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r46 === "actions");
} }
function Bet2Component_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Bet2Component_ng_container_63_th_1_Template, 2, 1, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Bet2Component_ng_container_63_td_2_Template, 5, 3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r46);
} }
function Bet2Component_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 46);
} }
function Bet2Component_tr_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 47);
} }
function Bet2Component_mat_error_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.getErrorMessage("checkNumbers"));
} }
class Bet2Component extends _baseEditView__WEBPACK_IMPORTED_MODULE_2__["BaseEditView"] {
    constructor(service, authService, route, fb, router, changeDetectorRef, _snackBar) {
        super();
        this.service = service;
        this.authService = authService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this._snackBar = _snackBar;
        this.entityApi = 'bets';
        this.entityDetailApi = 'details';
        this.entityApiEmployees = 'employees';
        this.entityApiLotteries = 'lotteries';
        this.entityNumbers = 'numbers';
        this.employees = [];
        this.lotteries = [];
        this.number = null;
        this.displayedColumns = ['number', 'price', 'actions'];
        // settingNumber: any = {field: 'number', ValidationError: 'forbidden', options: {
        //     query: {
        //       table: 'vw_forbiddenNumbers'
        //     },
        //     where: {
        //       isActive: true
        //     }
        //   }}
        this.forbiddenNumbers = [];
        this.configFormGroup = (entityId) => {
            // if (entityId) {
            //
            //   setting.options = {
            //     where: {
            //       id: { $ne: entityId }
            //     }
            //   }
            // }
            this.entityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                checkLotteries: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                // number: new FormControl('', null,
                //   [this.service.takenValidator(this.entityNumbers, this.settingNumber)]),
                number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                total: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                firstThreePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                lastThreePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                checkChock: this.fb.array([]),
                checkCombined: this.fb.array([]),
                checkNumbers: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
                // // chockPrice: new FormControl(''),
                //
                //
                // // combinedFourFigurePrice: new FormControl(''),
                // combinedThreeFigurePrice: new FormControl(''),
            });
        };
    }
    ngOnInit() {
        // this.title = 'Apuesta - [EN PRUEBA]';
        this.title = 'Apuesta';
        this.subtitle = 'Apuesta';
        this.iniEntity();
        super.init(this);
        this.route.params.subscribe((params) => {
            this.service.getSelect(this.entityApiEmployees, { value: 'id', text: 'code', options: { order: [['code', 'asc']] } })
                .subscribe((res) => {
                this.employees = res;
            });
            let d = new Date();
            let n = d.getDay();
            let dayName = '';
            switch (n) {
                case 0:
                    dayName = 'sunday';
                    break;
                case 1:
                    dayName = 'monday';
                    break;
                case 2:
                    dayName = 'tuesday';
                    break;
                case 3:
                    dayName = 'wednesday';
                    break;
                case 4:
                    dayName = 'thursday';
                    break;
                case 5:
                    dayName = 'friday';
                    break;
                case 6:
                    dayName = 'saturday';
                    break;
            }
            let tasks = 0;
            let totalTasks = 0;
            let processTasks = () => {
                tasks++;
                let lotteriesDetail = [];
                if (tasks == totalTasks) {
                    if (this.entity && this.entity.details && this.entity.details.length) {
                        for (let detail of this.entity.details) {
                            let lotteryFound = lotteriesDetail.find((o) => o.id == detail.lotteryId);
                            if (!lotteryFound) {
                                lotteriesDetail.push(detail.lottery);
                            }
                        }
                        const checkLotteries = this.entityForm.get('checkLotteries');
                        for (let lotteryDetail of lotteriesDetail) {
                            let lotteryFound = this.lotteries.find((o) => o.id == lotteryDetail.id);
                            if (lotteryFound) {
                                lotteryFound.check = true;
                                // this.lotteryChange({checked: true, source:{value: lotteryFound.id }})
                                checkLotteries.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: lotteryFound.id, isThreeFigures: lotteryFound.isThreeFigures }));
                            }
                        }
                    }
                    this.entity.details.sort(this.compare);
                    this.calculateTotal();
                }
            };
            totalTasks++;
            this.service.get(this.entityNumbers, { query: {
                    table: 'vw_forbiddenNumbers'
                },
                options: {
                    where: {
                        isActive: true
                    }
                } })
                .subscribe((res) => {
                this.forbiddenNumbers = res.rows;
                processTasks();
            });
            totalTasks++;
            this.service.get(this.entityApiLotteries, { options: { where: { play: { $like: '%' + dayName + '%' } }, order: [['name', 'asc']] } })
                .subscribe((res) => {
                let enumLotteryTemporality = [
                    {
                        value: 'morning', color: 'green'
                    },
                    {
                        value: 'afternoon', color: 'crimson'
                    },
                    {
                        value: 'night', color: 'blue'
                    },
                    {
                        value: null, color: 'Ninguna'
                    }
                ];
                let currLotteries = res;
                for (let temp of enumLotteryTemporality) {
                    let lotteriesFount = currLotteries.filter((o) => o.temporality == temp.value);
                    for (let lottery of lotteriesFount) {
                        lottery.color = temp.color;
                        this.lotteries.push(lottery);
                    }
                }
                processTasks();
            });
            if (params && params.betId) {
                totalTasks++;
                this.configFormGroup(params.betId);
                super.getEntity(params.betId, { options: {
                        include: [{ association: 'details', include: [{ association: 'lottery' }] },
                            { association: 'employee' },]
                    } }).subscribe(() => {
                    processTasks();
                });
            }
            else {
                this.configFormGroup();
            }
        });
    }
    iniEntity() {
        let currEmployeeId = null;
        if (this.entity && this.entity.employeeId) {
            currEmployeeId = this.entity.employeeId;
        }
        let currentUser = this.authService.getItem('currentUser');
        this.entity = {
            employeeId: null,
            userId: currentUser.id,
            price: null,
            firstThree: false,
            firstThreePrice: null,
            lastThree: false,
            lastThreePrice: null,
            chock: false,
            chockFourFigurePrice: null,
            chockThreeFigurePrice: null,
            // chockPrice: null,
            combined: false,
            combinedFourFigurePrice: null,
            combinedThreeFigurePrice: null,
            total: null,
            details: []
        };
        this.entity.employeeId = currEmployeeId;
    }
    compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.lotteryId;
        const bandB = b.lotteryId;
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        }
        else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }
    getName(lotteryId) {
        let lottery = this.lotteries.find((o) => o.id == lotteryId);
        return lottery ? lottery.name : '';
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }
    preventEnter() {
        //let a = '' //todo validar por que cuando se da enter se esta lanzando el evento click del primero control de accion en el grid
    }
    lotteryChange(e) {
        const checkLotteries = this.entityForm.get('checkLotteries');
        let lottery = this.lotteries.find((o) => o.id == e.source.value);
        let hastManyThreeFigures = false;
        let hastThreeFigures = false;
        if (e.checked) {
            checkLotteries.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: e.source.value, isThreeFigures: lottery.isThreeFigures }));
            let count = 0;
            for (let obj of checkLotteries.value) {
                if (obj.isThreeFigures) {
                    count += 1;
                    hastThreeFigures = true;
                    if (count >= 2) {
                        hastManyThreeFigures = true;
                        break;
                    }
                }
            }
            let newDetails = [];
            let getNewDetail = (detail, lottery) => {
                let newDetail = JSON.parse(JSON.stringify(detail));
                newDetail.number = newDetail.number.substring(1, detail.number.length);
                newDetail.lotteryId = lottery.id;
                newDetail.isFourFigure = false;
                newDetail.isLastThree = true;
                return newDetail;
            };
            let currNumbers = this.entity.details.filter((o) => o.lotteryId == this.entity.details[0].lotteryId || !o.lotteryId);
            let hasCurrNumbersThreeFigures = false;
            for (let detail of this.entity.details) {
                if (detail.number.length > 3) {
                    hasCurrNumbersThreeFigures = false;
                }
            }
            for (let detail of currNumbers) {
                if (detail.number.length == 3) {
                    if (!detail.isFirstThree) {
                        detail.isLastThree = true;
                    }
                    if (!detail.lotteryId) {
                        detail.lotteryId = lottery.id;
                    }
                    else {
                        let newDetail = JSON.parse(JSON.stringify(detail));
                        newDetail.lotteryId = lottery.id;
                        newDetail.isFourFigure = false;
                        newDetails.push(newDetail);
                    }
                }
                else {
                    if (!detail.lotteryId && !lottery.isThreeFigures) {
                        detail.lotteryId = lottery.id;
                        let currLotteryNumbers = this.lotteries.find((o) => o.id == this.entity.details[0].lotteryId);
                        if (hastThreeFigures && !currLotteryNumbers.isThreeFigures) {
                            newDetails.push(getNewDetail(detail, lottery));
                        }
                    }
                    else if (!detail.lotteryId && lottery.isThreeFigures) {
                        newDetails.push(getNewDetail(detail, lottery));
                    }
                    else {
                        if (lottery.isThreeFigures) {
                            if (!hastManyThreeFigures && !this.entity.lastThree) {
                                for (let obj of checkLotteries.value) {
                                    if (!obj.isThreeFigures && detail.number.length > 3) {
                                        newDetails.push(getNewDetail(detail, obj));
                                    }
                                }
                                newDetails.push(getNewDetail(detail, lottery));
                            }
                        }
                        else {
                            let newDetail = JSON.parse(JSON.stringify(detail));
                            newDetail.lotteryId = lottery.id;
                            if (newDetail.number.length == 3) {
                                newDetail.isFourFigure = false;
                            }
                            else {
                                newDetail.isFourFigure = true;
                            }
                            newDetails.push(newDetail);
                        }
                    }
                }
            }
            this.entity.details = this.entity.details.concat(newDetails);
        }
        else {
            let count = 0;
            for (let obj of checkLotteries.value) {
                if (obj.isThreeFigures) {
                    count += 1;
                    hastThreeFigures = true;
                    if (count >= 2) {
                        hastManyThreeFigures = true;
                        break;
                    }
                }
            }
            let i = 0;
            checkLotteries.controls.forEach((item) => {
                if (item.value.id == e.source.value) {
                    checkLotteries.removeAt(i);
                    return;
                }
                i++;
            });
            let removeValFromIndex = [];
            for (let i = 0; i < this.entity.details.length; i++) {
                let detail = this.entity.details[i];
                if (detail.lotteryId == lottery.id) {
                    removeValFromIndex.push(i);
                }
                if (lottery.isThreeFigures && !this.entity.lastThree && !hastManyThreeFigures) {
                    if (detail.lotteryId != lottery.id && detail.isLastThree) {
                        removeValFromIndex.push(i);
                    }
                }
            }
            this.onDeleteCustom(removeValFromIndex);
        }
        this.entity.details.sort(this.compare);
        this.calculateTotal();
    }
    add() {
        const numberControl = this.entityForm.get('number');
        if (this.number && this.number.toString().length > 2 && numberControl.valid) {
            const checkLotteries = this.entityForm.get('checkLotteries');
            let hastManyThreeFigures = false;
            let hastThreeFigures = false;
            let hastFourFigures = false;
            let count = 0;
            for (let obj of checkLotteries.value) {
                if (obj.isThreeFigures) {
                    count += 1;
                    hastThreeFigures = true;
                    if (count >= 2) {
                        hastManyThreeFigures = true;
                        break;
                    }
                }
            }
            for (let obj of checkLotteries.value) {
                if (!obj.isThreeFigures) {
                    hastFourFigures = true;
                    break;
                }
            }
            let isFourFigure = false;
            if (this.number.toString().length == 4) {
                isFourFigure = true;
            }
            if (!hastFourFigures && hastThreeFigures && isFourFigure) {
                let currDetail = {
                    number: this.number,
                    price: this.entity.price,
                    accumulated: this.entity.price,
                    isFourFigure: isFourFigure,
                };
                this.entity.details.push(currDetail);
            }
            if (checkLotteries.value.length) {
                for (let obj of checkLotteries.value) {
                    let currDetail = {
                        lotteryId: obj.id,
                        isFourFigure: isFourFigure,
                        price: this.entity.price,
                        accumulated: this.entity.price,
                    };
                    if (!isFourFigure) {
                        currDetail.isLastThree = true;
                    }
                    if (obj.isThreeFigures) {
                        currDetail.isLastThree = true;
                        if (this.number.length > 3) {
                            currDetail.isFourFigure = false;
                            currDetail.number = this.number.substring(1, this.number.length);
                        }
                        else {
                            currDetail.number = this.number;
                        }
                    }
                    else {
                        currDetail.number = this.number;
                        if (hastThreeFigures && this.number.length > 3) {
                            let newDetail = JSON.parse(JSON.stringify(currDetail));
                            newDetail.isFourFigure = false;
                            newDetail.isLastThree = true;
                            newDetail.number = this.number.substring(1, this.number.length);
                            if (this.entity.lastThree) {
                                newDetail.price = this.entity.lastThreePrice;
                                newDetail.accumulated = this.entity.lastThreePrice;
                            }
                            this.entity.details.push(newDetail);
                        }
                    }
                    if ((currDetail.number.length == 3 && hastThreeFigures) || (currDetail.number.length == 3 && this.entity.lastThree)) {
                        // if ((currDetail.number.length == 3)) {
                        currDetail.isLastThree = true;
                        if (this.entity.lastThree) {
                            currDetail.price = this.entity.lastThreePrice;
                            currDetail.accumulated = this.entity.lastThreePrice;
                        }
                    }
                    this.entity.details.push(currDetail);
                    if (this.entity.firstThree) {
                        if (this.number.toString().length > 3) {
                            let currDetail = {
                                lotteryId: obj.id,
                                number: this.number.substring(0, this.number.length - 1),
                                price: this.entity.firstThreePrice,
                                accumulated: this.entity.firstThreePrice,
                                isFourFigure: false,
                                isFirstThree: true,
                            };
                            this.entity.details.push(currDetail);
                        }
                    }
                    if (this.entity.lastThree && !hastThreeFigures) {
                        if (this.number.toString().length > 3) {
                            let currDetail = {
                                lotteryId: obj.id,
                                number: this.number.substring(1, this.number.length),
                                price: this.entity.lastThreePrice,
                                accumulated: this.entity.lastThreePrice,
                                isFourFigure: false,
                                isLastThree: true,
                            };
                            this.entity.details.push(currDetail);
                        }
                    }
                }
            }
            else {
                let currDetail = {
                    number: this.number,
                    price: this.entity.price,
                    accumulated: this.entity.price,
                    isFourFigure: isFourFigure,
                };
                if (!isFourFigure) {
                    currDetail.isLastThree = true;
                }
                // if (this.number.length == 3) {
                if (this.number.length == 3 && this.entity.lastThree) {
                    currDetail.isLastThree = true;
                    if (this.entity.lastThree) {
                        currDetail.price = this.entity.lastThreePrice;
                        currDetail.accumulated = this.entity.lastThreePrice;
                    }
                }
                this.entity.details.push(currDetail);
                if (this.entity.firstThree) {
                    if (this.number.toString().length > 3) {
                        let currDetail = {
                            number: this.number.substring(0, this.number.length - 1),
                            price: this.entity.firstThreePrice,
                            accumulated: this.entity.firstThreePrice,
                            isFourFigure: false,
                            isFirstThree: true,
                            isLastThree: false
                        };
                        this.entity.details.push(currDetail);
                    }
                }
                if (this.entity.lastThree) {
                    if (this.number.toString().length > 3) {
                        let currDetail = {
                            number: this.number.substring(1, this.number.length),
                            price: this.entity.lastThreePrice,
                            accumulated: this.entity.lastThreePrice,
                            isFourFigure: false,
                            isLastThree: true,
                            isFirstThree: false
                        };
                        this.entity.details.push(currDetail);
                    }
                }
            }
        }
        this.number = null;
        this.entity.details.sort(this.compare);
        this.calculateTotal();
    }
    onDeleteCustomGrid(row) {
        let removeValFromIndex = [];
        let numbersFound = [];
        for (let i = 0; i < this.entity.details.length; i++) {
            let detail = this.entity.details[i];
            if (detail.number == row.number) {
                let numberFound = numbersFound.find((o) => o.number == detail.number && o.lotteryId == detail.lotteryId);
                if (!numberFound) {
                    numbersFound.push(detail);
                    removeValFromIndex.push(i);
                }
            }
        }
        this.onDeleteCustom(removeValFromIndex);
    }
    onDeleteCustom(removeValFromIndex) {
        let deleteIds = [];
        for (let i = removeValFromIndex.length - 1; i >= 0; i--) {
            let detail = this.entity.details[removeValFromIndex[i]];
            if (detail.id) {
                deleteIds.push(detail.id);
            }
            this.entity.details.splice(removeValFromIndex[i], 1);
        }
        if (deleteIds.length) {
            this.view.service.deleteOptions(this.entityDetailApi, {
                options: {
                    where: { id: deleteIds }
                }
            })
                .subscribe((res) => {
                this.entity.details.sort(this.compare);
                this.calculateTotal();
                if (!this.entity.details.length) {
                    const checkNumbers = this.entityForm.get('checkNumbers');
                    let stop = checkNumbers.controls.length;
                    for (let i = 0; i < stop; i++) {
                        checkNumbers.removeAt(0);
                    }
                }
                this.view.service.save(this.view.entityApi, {
                    id: this.entity.id,
                    employeeId: this.entity.employeeId,
                    userId: this.entity.userId,
                    price: this.entity.price,
                    firstThree: this.entity.firstThree,
                    firstThreePrice: this.entity.firstThreePrice,
                    lastThree: this.entity.lastThree,
                    lastThreePrice: this.entity.lastThreePrice,
                    chock: this.entity.chock,
                    chockFourFigurePrice: this.entity.chockFourFigurePrice,
                    chockThreeFigurePrice: this.entity.chockThreeFigurePrice,
                    combined: this.entity.combined,
                    combinedFourFigurePrice: this.entity.combinedFourFigurePrice,
                    combinedThreeFigurePrice: this.entity.combinedThreeFigurePrice,
                    total: this.entity.total,
                }).subscribe((entityRes) => {
                    this.entity = entityRes ? entityRes : this.entity;
                    if (this.view._snackBar) {
                        this.view._snackBar.open('Salvo', 'Correctamente', {
                            duration: 2000,
                        });
                    }
                });
            });
        }
        else {
            this.entity.details.sort(this.compare);
            this.calculateTotal();
            if (!this.entity.details.length) {
                const checkNumbers = this.entityForm.get('checkNumbers');
                let stop = checkNumbers.controls.length;
                for (let i = 0; i < stop; i++) {
                    checkNumbers.removeAt(0);
                }
            }
        }
    }
    beforeSaved() {
        let done = true;
        let onlyThreeFigures = true;
        const checkLotteries = this.entityForm.get('checkLotteries');
        for (let obj of checkLotteries.value) {
            let lottery = this.lotteries.find((o) => o.id == obj.id);
            if (!lottery.isThreeFigures) {
                onlyThreeFigures = false;
                break;
            }
        }
        if (onlyThreeFigures) {
            for (let detail of this.entity.details) {
                if (detail.number.length > 3) {
                    alert('Solo 3 cifras en las loterias seleccionadas');
                    done = false;
                }
            }
        }
        for (let detail of this.entity.details) {
            let forbiddenFound = this.forbiddenNumbers.find((o) => o.number == detail.number && o.lotteryId == detail.lotteryId);
            if (forbiddenFound) {
                alert('El Número: ' + forbiddenFound.number + '; prohibido en ' + forbiddenFound.lotteryName);
                done = false;
            }
        }
        return done;
    }
    changePrice() {
        for (let detail of this.entity.details) {
            if (this.entity.firstThree && detail.isFirstThree) {
                detail.price = this.entity.firstThreePrice;
                detail.accumulated = this.entity.firstThreePrice;
            }
            else if (this.entity.lastThree && detail.isLastThree) {
                detail.price = this.entity.lastThreePrice;
                detail.accumulated = this.entity.lastThreePrice;
            }
            else {
                detail.price = this.entity.price;
                detail.accumulated = this.entity.price;
            }
        }
        this.calculateTotal();
    }
    calculateTotal() {
        if (this.entity.details.length) {
            const checkNumbers = this.entityForm.get('checkNumbers');
            if (!checkNumbers.value.length) {
                checkNumbers.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])() }));
            }
        }
        this.entity.total = 0;
        let NumbersThree = 0;
        let NumbersFour = 0;
        let hasFourFigure = false;
        let lotteryFourFigureId;
        let hasThreeFigure = false;
        let lotteryThreeFigureId;
        for (let detail of this.entity.details) {
            this.entity.total += detail.price;
            if (detail.number.length == 3) {
                NumbersThree++;
                if (!hasThreeFigure) {
                    hasThreeFigure = true;
                    lotteryThreeFigureId = detail.lotteryId;
                }
            }
            else {
                NumbersFour++;
                if (!hasFourFigure) {
                    hasFourFigure = true;
                    lotteryFourFigureId = detail.lotteryId;
                }
            }
        }
        if (this.entity.chock) {
            if (NumbersThree) {
                this.entity.total += this.entity.chockFourFigurePrice * NumbersFour;
                this.entity.total += this.entity.chockThreeFigurePrice * NumbersThree;
            }
            else {
                this.entity.total += this.entity.chockFourFigurePrice * NumbersFour;
            }
        }
        if (this.entity.combined) {
            if (NumbersThree) {
                this.entity.total += this.entity.combinedFourFigurePrice * NumbersFour;
                this.entity.total += this.entity.combinedThreeFigurePrice * NumbersThree;
            }
            else {
                this.entity.total += this.entity.combinedFourFigurePrice * NumbersFour;
            }
        }
        let data = [];
        if (this.entity.details.length) {
            if (hasFourFigure) {
                if (lotteryFourFigureId) {
                    data = this.entity.details.filter((o) => o.lotteryId == lotteryFourFigureId);
                }
                else if (!lotteryThreeFigureId) {
                    data = this.entity.details.filter((o) => o.lotteryId == lotteryFourFigureId);
                }
                else {
                    data = this.entity.details.filter((o) => o.lotteryId == lotteryThreeFigureId || o.lotteryId == lotteryFourFigureId);
                }
            }
            else {
                data = this.entity.details.filter((o) => o.lotteryId == lotteryThreeFigureId);
            }
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
    }
    firstThreeChange(e) {
        // const checkNumbers: FormArray = this.entityForm.get('checkNumbers') as FormArray;
        if (e.checked) {
            this.entityForm.get('firstThreePrice').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            const checkLotteries = this.entityForm.get('checkLotteries');
            this.entity.firstThreePrice = this.entity.price;
            let newDetails = [];
            let currDetails = JSON.parse(JSON.stringify(this.entity.details));
            let lotteryFourFigureId = null;
            for (let detail of currDetails) {
                if (detail.number.length == 4) {
                    let newDetail = JSON.parse(JSON.stringify(detail));
                    newDetail.isFourFigure = false;
                    newDetail.isLastThree = false;
                    newDetail.isFirstThree = true;
                    newDetail.number = newDetail.number.substring(0, newDetail.number.length - 1);
                    newDetails.push(newDetail);
                    if (!lotteryFourFigureId) {
                        lotteryFourFigureId = detail.lotteryId;
                    }
                }
            }
            if (lotteryFourFigureId) {
                let addToThreeFigure = this.entity.details.filter((o) => o.lotteryId == lotteryFourFigureId && o.number.length > 3);
                for (let detail of addToThreeFigure) {
                    for (let obj of checkLotteries.value) {
                        if (obj.isThreeFigures) {
                            let newDetail = JSON.parse(JSON.stringify(detail));
                            newDetail.isFourFigure = false;
                            newDetail.isLastThree = false;
                            newDetail.isFirstThree = true;
                            newDetail.lotteryId = obj.id;
                            newDetail.number = newDetail.number.substring(0, newDetail.number.length - 1);
                            newDetails.push(newDetail);
                        }
                    }
                }
            }
            this.entity.details = this.entity.details.concat(newDetails);
        }
        else {
            this.entityForm.get('firstThreePrice').clearValidators();
            let removeValFromIndex = [];
            for (let i = 0; i < this.entity.details.length; i++) {
                let detail = this.entity.details[i];
                if (detail.isFirstThree) {
                    removeValFromIndex.push(i);
                }
            }
            this.onDeleteCustom(removeValFromIndex);
        }
        this.entityForm.get('firstThreePrice').updateValueAndValidity();
        this.entity.details.sort(this.compare);
        this.calculateTotal();
        // this.changeDetectorRef.detectChanges();
    }
    firstThreePriceChange() {
        // const checkNumbers: FormArray = this.entityForm.get('checkNumbers') as FormArray;
        for (let detail of this.entity.details) {
            if (detail.number.length == 3 && detail.isFirstThree) {
                detail.price = this.entity.firstThreePrice;
                detail.accumulated = this.entity.firstThreePrice;
            }
        }
        this.calculateTotal();
    }
    lastThreeChange(e) {
        const checkLotteries = this.entityForm.get('checkLotteries');
        let hastThreeFigures = false;
        let hastManyThreeFigures = false;
        let count = 0;
        for (let obj of checkLotteries.value) {
            if (obj.isThreeFigures) {
                count += 1;
                hastThreeFigures = true;
                if (count >= 2) {
                    hastManyThreeFigures = true;
                    break;
                }
            }
        }
        if (e.checked) {
            this.entity.lastThreePrice = this.entity.price;
            this.entityForm.get('lastThreePrice').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            if (!hastThreeFigures) {
                let newDetails = [];
                let currDetails = JSON.parse(JSON.stringify(this.entity.details));
                for (let detail of currDetails) {
                    if (detail.number.length == 4) {
                        let newDetail = JSON.parse(JSON.stringify(detail));
                        newDetail.isFourFigure = false;
                        newDetail.isLastThree = true;
                        newDetail.isFirstThree = false;
                        newDetail.number = newDetail.number.substring(1, newDetail.number.length);
                        newDetails.push(newDetail);
                    }
                }
                this.entity.details = this.entity.details.concat(newDetails);
            }
        }
        else {
            this.entityForm.get('lastThreePrice').clearValidators();
            if (!hastThreeFigures) {
                let removeValFromIndex = [];
                for (let i = 0; i < this.entity.details.length; i++) {
                    let detail = this.entity.details[i];
                    if (detail.isLastThree) {
                        removeValFromIndex.push(i);
                    }
                }
                this.onDeleteCustom(removeValFromIndex);
            }
        }
        this.entityForm.get('lastThreePrice').updateValueAndValidity();
        this.entity.details.sort(this.compare);
        this.calculateTotal();
    }
    lastThreePriceChange() {
        for (let detail of this.entity.details) {
            if (detail.number.length == 3 && detail.isLastThree) {
                detail.price = this.entity.lastThreePrice;
                detail.accumulated = this.entity.lastThreePrice;
            }
        }
        this.calculateTotal();
    }
    chockChange(e) {
        const checkChock = this.entityForm.get('checkChock');
        if (e.checked) {
            this.entityForm.get('checkChock').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            if (this.entity.price) {
                this.entity.chockFourFigurePrice = this.entity.price;
                this.entity.chockThreeFigurePrice = this.entity.price;
                checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), chockFourFigure: true }));
                checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), chockFourFigure: false }));
            }
        }
        else {
            this.entity.chockFourFigurePrice = null;
            this.entity.chockThreeFigurePrice = null;
            let i = 0;
            checkChock.controls.forEach((item) => {
                checkChock.removeAt(i);
                i++;
            });
            this.entityForm.get('checkChock').clearValidators();
        }
        this.entityForm.get('checkChock').updateValueAndValidity();
        this.calculateTotal();
    }
    chockFourFigurePriceChange() {
        const checkChock = this.entityForm.get('checkChock');
        if (this.entity.chockFourFigurePrice) {
            checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), ChockFourFigure: true }));
        }
        else {
            let i = 0;
            checkChock.controls.forEach((item) => {
                if (item.value.ChockFourFigure) {
                    checkChock.removeAt(i);
                    return;
                }
                else {
                    checkChock.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.calculateTotal();
    }
    chockThreeFigurePriceChange() {
        const checkChock = this.entityForm.get('checkChock');
        if (this.entity.chockThreeFigurePrice) {
            checkChock.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), ChockFourFigure: false }));
        }
        else {
            let i = 0;
            checkChock.controls.forEach((item) => {
                if (item.value.ChockFourFigure) {
                    checkChock.removeAt(i);
                    return;
                }
                else {
                    checkChock.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.calculateTotal();
    }
    combinedChange(e) {
        const checkCombined = this.entityForm.get('checkCombined');
        if (e.checked) {
            this.entityForm.get('checkCombined').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            if (this.entity.price) {
                this.entity.combinedFourFigurePrice = this.entity.price;
                this.entity.combinedThreeFigurePrice = this.entity.price;
                checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: true }));
                checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: false }));
            }
        }
        else {
            this.entity.combinedFourFigurePrice = null;
            this.entity.combinedThreeFigurePrice = null;
            let i = 0;
            checkCombined.controls.forEach((item) => {
                checkCombined.removeAt(i);
                i++;
            });
            this.entityForm.get('checkCombined').clearValidators();
        }
        this.entityForm.get('checkCombined').updateValueAndValidity();
        this.calculateTotal();
    }
    combinedFourFigurePriceChange() {
        const checkCombined = this.entityForm.get('checkCombined');
        if (this.entity.combinedFourFigurePrice) {
            checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: true }));
        }
        else {
            let i = 0;
            checkCombined.controls.forEach((item) => {
                if (item.value.combinedFourFigure) {
                    checkCombined.removeAt(i);
                    return;
                }
                else {
                    checkCombined.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.calculateTotal();
    }
    combinedThreeFigurePriceChange() {
        const checkCombined = this.entityForm.get('checkCombined');
        if (this.entity.combinedThreeFigurePrice) {
            checkCombined.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(), combinedFourFigure: false }));
        }
        else {
            let i = 0;
            checkCombined.controls.forEach((item) => {
                if (item.value.combinedFourFigure) {
                    checkCombined.removeAt(i);
                    return;
                }
                else {
                    checkCombined.removeAt(i);
                    return;
                }
                i++;
            });
        }
        this.calculateTotal();
    }
    new() {
        this.iniEntity();
        this.number = null;
        for (let lottery of this.lotteries) {
            lottery.check = false;
        }
        if (this.entityForm) {
            const checkNumbers = this.entityForm.get('checkNumbers');
            let stop = checkNumbers.controls.length;
            for (let i = 0; i < stop; i++) {
                checkNumbers.removeAt(0);
            }
            const checkLotteries = this.entityForm.get('checkLotteries');
            stop = checkLotteries.controls.length;
            for (let i = 0; i < stop; i++) {
                checkLotteries.removeAt(0);
            }
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        // this.router.navigate(['/bet2']);
    }
}
Bet2Component.ɵfac = function Bet2Component_Factory(t) { return new (t || Bet2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
Bet2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Bet2Component, selectors: [["app-bet2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 72, vars: 39, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], [3, "formGroup"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "overflow", "hidden"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", 2, "float", "left", "width", "50%"], [2, "width", "95%"], ["matNativeControl", "", "formControlName", "employeeId", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "formControlName", "total", "type", "number", "placeholder", "Total", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModel", "readonly", "keypress", "ngModelChange"], ["style", "margin-right: 25px;", 3, "ngModel", "ngModelOptions", "value", "ngStyle", "ngModelChange", "change", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Entre number", "formControlName", "number", "onKeyPress", "if(this.value.length===4) return false;", "autocomplete", "off", 3, "ngModel", "keypress", "ngModelChange", "keyup.enter"], ["matInput", "", "formControlName", "price", "type", "number", "placeholder", "Entre Precio", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", "required", "", 3, "ngModel", "keypress", "ngModelChange", "change"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-text-outline", "10px", "margin-top", "10px", "overflow", "hidden"], [2, "margin-right", "10px", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["style", "width: 77%;", 4, "ngIf"], ["style", "width: 32%;margin-right: 10px;", 4, "ngIf"], ["style", "width: 32%", 4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-top", "10px"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-fab", "", "color", "accent", 3, "disabled", "click"], ["mat-fab", "", "color", "primary", 3, "click"], [3, "value"], [2, "margin-right", "25px", 3, "ngModel", "ngModelOptions", "value", "ngStyle", "ngModelChange", "change"], [2, "width", "77%"], ["matInput", "", "formControlName", "firstThreePrice", "type", "number", "placeholder", "Entre precio, tres primeras", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", "required", "", 3, "ngModel", "keypress", "ngModelChange", "change"], [2, "width", "32%", "margin-right", "10px"], ["matInput", "", "type", "number", "placeholder", "Cuatro cifras, cu\u00F1a", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange", "change"], [2, "width", "32%"], ["matInput", "", "type", "number", "placeholder", "Tres cifras, cu\u00F1a", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange", "change"], ["matInput", "", "formControlName", "lastThreePrice", "type", "number", "placeholder", "Entre precio, tres ultimas", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", "required", "", 3, "ngModel", "keypress", "ngModelChange", "change"], ["matInput", "", "type", "number", "placeholder", "Cuatro cifras, combinado", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange", "change"], ["matInput", "", "type", "number", "placeholder", "Tres cifras, combinado", "onKeyPress", "if(this.value.length==9) return false;", "autocomplete", "off", 3, "ngModelOptions", "ngModel", "keypress", "ngModelChange", "change"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function Bet2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Seleccione C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Bet2Component_Template_mat_select_ngModelChange_19_listener($event) { return ctx.entity.employeeId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Bet2Component_mat_option_20_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, Bet2Component_mat_error_21_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Bet2Component_Template_input_keypress_24_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function Bet2Component_Template_input_ngModelChange_24_listener($event) { return ctx.entity.total = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Bet2Component_mat_checkbox_27_Template, 2, 8, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, Bet2Component_mat_error_28_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Bet2Component_Template_input_keypress_32_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function Bet2Component_Template_input_ngModelChange_32_listener($event) { return ctx.number = $event; })("keyup.enter", function Bet2Component_Template_input_keyup_enter_32_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, Bet2Component_mat_error_33_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function Bet2Component_Template_input_keypress_37_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function Bet2Component_Template_input_ngModelChange_37_listener($event) { return ctx.entity.price = $event; })("change", function Bet2Component_Template_input_change_37_listener() { return ctx.changePrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Bet2Component_Template_mat_checkbox_ngModelChange_40_listener($event) { return ctx.entity.firstThree = $event; })("change", function Bet2Component_Template_mat_checkbox_change_40_listener($event) { return ctx.firstThreeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Tres primeras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, Bet2Component_mat_form_field_42_Template, 2, 1, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Bet2Component_Template_mat_checkbox_ngModelChange_44_listener($event) { return ctx.entity.chock = $event; })("change", function Bet2Component_Template_mat_checkbox_change_44_listener($event) { return ctx.chockChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cu\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, Bet2Component_mat_form_field_46_Template, 2, 3, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, Bet2Component_mat_form_field_47_Template, 2, 3, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, Bet2Component_mat_error_48_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Bet2Component_Template_mat_checkbox_ngModelChange_51_listener($event) { return ctx.entity.lastThree = $event; })("change", function Bet2Component_Template_mat_checkbox_change_51_listener($event) { return ctx.lastThreeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tres Ultimas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, Bet2Component_mat_form_field_53_Template, 2, 1, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Bet2Component_Template_mat_checkbox_ngModelChange_55_listener($event) { return ctx.entity.combined = $event; })("change", function Bet2Component_Template_mat_checkbox_change_55_listener($event) { return ctx.combinedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Combinado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, Bet2Component_mat_form_field_57_Template, 2, 3, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, Bet2Component_mat_form_field_58_Template, 2, 3, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, Bet2Component_mat_error_59_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, Bet2Component_ng_container_63_Template, 3, 1, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, Bet2Component_tr_64_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, Bet2Component_tr_65_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, Bet2Component_mat_error_66_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Bet2Component_Template_button_click_68_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Bet2Component_Template_button_click_70_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entityForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.employeeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.total)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lotteries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.firstThree)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.firstThree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.chock)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.chock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.chock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.chock && ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.lastThree)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.lastThree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.combined)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.combined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.combined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entity.combined && ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.entityForm.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Bet2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bet2',
                templateUrl: './bet2.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/bet/bets/bets.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/bet/bets/bets.component.ts ***!
  \**************************************************/
/*! exports provided: BetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetsComponent", function() { return BetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _baseSearchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../baseSearchView */ "./src/app/views/baseSearchView.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/security/auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../pipes/translate.pipe */ "./src/app/pipes/translate.pipe.ts");



















function BetsComponent_mat_card_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
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
function BetsComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8.text, " ");
} }
function BetsComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetsComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.betId, " ");
} }
function BetsComponent_ng_container_32_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, column_r10), " ");
} }
function BetsComponent_ng_container_32_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14[column_r10]);
} }
function BetsComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BetsComponent_ng_container_32_th_1_Template, 3, 3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BetsComponent_ng_container_32_td_2_Template, 3, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r10);
} }
function BetsComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
} }
function BetsComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 29);
} }
class BetsComponent extends _baseSearchView__WEBPACK_IMPORTED_MODULE_1__["BaseSearchView"] {
    constructor(service, authService, router) {
        super();
        this.service = service;
        this.authService = authService;
        this.router = router;
        this.showCardHeader = true;
        this.entityApi = 'bets';
        this.settings = {
            showPreviewDialog: true,
            query: {
                table: 'vw_bets'
            },
            options: {
                where: {},
                order: [['created', 'desc']]
            }
        };
        this.displayedColumns = ['lottery', 'firstThree', 'lastThree', 'combined',
            'number', 'price', 'employeeCode', 'chockNumber', 'created', 'userName', 'actions'];
        this.filtersColumns = ['lottery', 'employeeCode'];
        this.lotteries = [];
    }
    ngOnInit() {
        this.title = 'Apuestas';
        this.subtitle = 'Apuesta';
        this.service.getSelect('lotteries', { value: 'id', text: 'name' })
            .subscribe((res) => {
            // res.unshift({value: null, text: 'Ninguna'})
            this.lotteries = res;
            this.lotteryId = this.lotteries[0].value;
            super.init(this);
            super.onPageChange();
        });
    }
    ngOnChanges(changes) {
        if (this.loadChange) {
            super.onPageChange();
        }
    }
    onEdit(row) {
        this.router.navigate(['/bet2', { betId: row.id }]);
    }
    beforePageChange() {
        if (this.lotteryId) {
            this.settings.options.where.lotteryId = this.lotteryId;
        }
        else {
            delete this.settings.options.where.lotteryId;
        }
        if (this.createdDate) {
            var datestring = this.createdDate.getDate() + "/" + (this.createdDate.getMonth() + 1) + "/" + this.createdDate.getFullYear();
            // + " " +         this.createdDate.getHours() + ":" + this.createdDate.getMinutes();
            this.settings.options.where.createdDate = datestring;
        }
        else {
            delete this.settings.options.where.createdDate;
        }
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }
    numberChange() {
        if (this.number) {
            this.settings.options.where.$or = [{ number: this.number }, { chockNumber: this.number }];
        }
        else {
            this.settings.options.where.$or = [];
        }
    }
    padNumber(value, width, z) {
        z = z || '0';
        value = value + '';
        return value.length >= width ? value : new Array(width - value.length + 1).join(z) + value;
    }
    ;
}
BetsComponent.ɵfac = function BetsComponent_Factory(t) { return new (t || BetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
BetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetsComponent, selectors: [["app-bets"]], inputs: { loadChange: "loadChange", showCardHeader: "showCardHeader" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 36, vars: 15, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [4, "ngIf"], [2, "width", "30%", "margin-right", "10px"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", 2, "overflow", "hidden"], [2, "float", "left", "width", "30%", "margin-right", "10px"], ["matInput", "", "placeholder", "Filtrar", 3, "ngModel", "keyup.enter", "ngModelChange"], ["matNativeControl", "", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "width", "30%"], ["matInput", "", "placeholder", "Entre number", "onKeyPress", "if(this.value.length===4) return false;", "autocomplete", "off", 3, "ngModel", "change", "keypress", "ngModelChange"], ["mat-fab", "", "color", "basic", 2, "float", "left", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["mat-header-row", ""], ["mat-row", ""]], template: function BetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BetsComponent_mat_card_header_3_Template, 9, 2, "mat-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Seleccione fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.createdDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-datepicker-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function BetsComponent_Template_input_keyup_enter_16_listener() { return ctx.onPageChange(); })("ngModelChange", function BetsComponent_Template_input_ngModelChange_16_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Seleccione Loteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetsComponent_Template_mat_select_ngModelChange_20_listener($event) { return ctx.lotteryId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BetsComponent_mat_option_21_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BetsComponent_Template_input_change_23_listener() { return ctx.numberChange(); })("keypress", function BetsComponent_Template_input_keypress_23_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function BetsComponent_Template_input_ngModelChange_23_listener($event) { return ctx.number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetsComponent_Template_button_click_26_listener() { return ctx.onPageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Refrescar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function BetsComponent_Template_table_matSortChange_28_listener($event) { return ctx.onSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BetsComponent_th_30_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BetsComponent_td_31_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BetsComponent_ng_container_32_Template, 3, 1, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BetsComponent_tr_33_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BetsComponent_tr_34_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function BetsComponent_Template_mat_paginator_page_35_listener($event) { return ctx.onPaginatorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCardHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.createdDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lotteryId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lotteries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRow"]], pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bets',
                templateUrl: './bets.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { loadChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showCardHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/bet/forbidden-number/forbidden-number.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/bet/forbidden-number/forbidden-number.component.ts ***!
  \**************************************************************************/
/*! exports provided: ForbiddenNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenNumberComponent", function() { return ForbiddenNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _baseEditView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../baseEditView */ "./src/app/views/baseEditView.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/security/auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _forbidden_numbers_forbidden_numbers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../forbidden-numbers/forbidden-numbers.component */ "./src/app/views/bet/forbidden-numbers/forbidden-numbers.component.ts");




















function ForbiddenNumberComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("number"));
} }
function ForbiddenNumberComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r5.text, " ");
} }
function ForbiddenNumberComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("lotteryId"));
} }
function ForbiddenNumberComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Numeros ");
} }
function ForbiddenNumberComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-forbidden-numbers", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loadChange", ctx_r4.loadNumbers)("showCardHeader", false);
} }
const _c0 = function () { return { standalone: true }; };
class ForbiddenNumberComponent extends _baseEditView__WEBPACK_IMPORTED_MODULE_1__["BaseEditView"] {
    constructor(service, authService, route, fb, router, changeDetectorRef, _snackBar) {
        super();
        this.service = service;
        this.authService = authService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this._snackBar = _snackBar;
        this.entityApi = 'numbers';
        this.entities = [];
        this.lotteries = [];
        this.configFormGroup = (entityId) => {
            let setting = { field: 'number' };
            if (entityId) {
                setting.options = {
                    where: {
                        id: { $ne: entityId }
                    }
                };
            }
            this.entityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                lotteryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
        };
    }
    ngOnInit() {
        this.title = 'Prohibido'; //+ this.service.getUrl();
        this.subtitle = 'Apuesta';
        this.service.getSelect('lotteries', { value: 'id', text: 'name' })
            .subscribe((res) => {
            this.lotteries = res;
            this.lotteries.unshift({ value: 'all', text: 'Todas' });
        });
        this.iniEntity();
        super.init(this);
        this.route.params.subscribe((params) => {
            if (params && params.numberId) {
                this.configFormGroup(params.numberId);
                super.getEntity(params.numberId).subscribe(() => {
                });
            }
            else {
                this.configFormGroup();
            }
        });
    }
    iniEntity() {
        this.currEntity = {
            number: null,
            isActive: true,
            lotteryId: null
        };
    }
    new() {
        this.iniEntity();
        this.router.navigate(['/forbidden']);
    }
    afterSaved() {
        this.loadNumbers = new Date().toString();
    }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }
    beforeSaved() {
        let done = true;
        this.entities = [];
        if (this.currEntity.lotteryId == 'all') {
            for (let lottery of this.lotteries) {
                if (lottery.value != 'all') {
                    this.entities.push({
                        number: this.currEntity.number,
                        isActive: true,
                        lotteryId: lottery.value
                    });
                }
            }
        }
        else {
            this.entities = [this.currEntity];
        }
        return done;
    }
}
ForbiddenNumberComponent.ɵfac = function ForbiddenNumberComponent_Factory(t) { return new (t || ForbiddenNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
ForbiddenNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenNumberComponent, selectors: [["app-forbidden-number"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 12, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], [3, "formGroup"], ["matInput", "", "placeholder", "Entre number", "formControlName", "number", "onKeyPress", "if(this.value.length===4) return false;", "autocomplete", "off", "required", "", 3, "ngModel", "keypress", "ngModelChange"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-text-outline", "10px", "margin-top", "10px"], [2, "margin-right", "10px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matNativeControl", "", "formControlName", "lotteryId", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-fab", "", "color", "accent", 3, "disabled", "click"], ["mat-fab", "", "color", "primary", 3, "click"], ["mat-tab-label", ""], ["matTabContent", ""], [3, "value"], [3, "loadChange", "showCardHeader"]], template: function ForbiddenNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ForbiddenNumberComponent_Template_input_keypress_17_listener($event) { return ctx.numberOnly($event); })("ngModelChange", function ForbiddenNumberComponent_Template_input_ngModelChange_17_listener($event) { return ctx.currEntity.number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForbiddenNumberComponent_mat_error_18_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForbiddenNumberComponent_Template_mat_checkbox_ngModelChange_21_listener($event) { return ctx.currEntity.isActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Esta Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Seleccione loteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForbiddenNumberComponent_Template_mat_select_ngModelChange_28_listener($event) { return ctx.currEntity.lotteryId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ForbiddenNumberComponent_mat_option_29_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ForbiddenNumberComponent_mat_error_30_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForbiddenNumberComponent_Template_button_click_32_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForbiddenNumberComponent_Template_button_click_34_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ForbiddenNumberComponent_ng_template_39_Template, 3, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ForbiddenNumberComponent_ng_template_40_Template, 3, 2, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entityForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currEntity.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currEntity.isActive)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currEntity.lotteryId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lotteries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.entityForm.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardFooter"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _forbidden_numbers_forbidden_numbers_component__WEBPACK_IMPORTED_MODULE_17__["ForbiddenNumbersComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forbidden-number',
                templateUrl: './forbidden-number.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/bet/forbidden-numbers/forbidden-numbers.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/bet/forbidden-numbers/forbidden-numbers.component.ts ***!
  \****************************************************************************/
/*! exports provided: ForbiddenNumbersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenNumbersComponent", function() { return ForbiddenNumbersComponent; });
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
















function ForbiddenNumbersComponent_mat_card_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
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
function ForbiddenNumbersComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForbiddenNumbersComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.id, " ");
} }
function ForbiddenNumbersComponent_ng_container_11_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r7, " ");
} }
function ForbiddenNumbersComponent_ng_container_11_td_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForbiddenNumbersComponent_ng_container_11_td_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onDelete(element_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForbiddenNumbersComponent_ng_container_11_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForbiddenNumbersComponent_ng_container_11_td_2_button_3_Template, 3, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r11[column_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r7 === "actions");
} }
function ForbiddenNumbersComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForbiddenNumbersComponent_ng_container_11_th_1_Template, 2, 1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForbiddenNumbersComponent_ng_container_11_td_2_Template, 4, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r7);
} }
function ForbiddenNumbersComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function ForbiddenNumbersComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
class ForbiddenNumbersComponent extends _baseSearchView__WEBPACK_IMPORTED_MODULE_1__["BaseSearchView"] {
    constructor(service, authService, router) {
        super();
        this.service = service;
        this.authService = authService;
        this.router = router;
        this.showCardHeader = true;
        this.entityApi = 'numbers';
        this.settings = {
            query: {
                table: 'vw_forbiddenNumbers'
            },
            options: {
                order: [['number']]
            }
        };
        this.displayedColumns = ['number', 'isActive', 'lotteryName', 'actions'];
        this.filtersColumns = ['number'];
    }
    ngOnInit() {
        this.title = 'Numeros Prohibido';
        this.subtitle = 'Apuesta';
        super.init(this);
        super.onPageChange();
    }
    ngOnChanges(changes) {
        if (this.loadChange) {
            super.onPageChange();
        }
    }
    onEdit(row) {
        this.router.navigate(['/forbidden', { numberId: row.id }]);
    }
}
ForbiddenNumbersComponent.ɵfac = function ForbiddenNumbersComponent_Factory(t) { return new (t || ForbiddenNumbersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ForbiddenNumbersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenNumbersComponent, selectors: [["app-forbidden-numbers"]], inputs: { loadChange: "loadChange", showCardHeader: "showCardHeader" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 9, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [4, "ngIf"], ["matInput", "", "placeholder", "Filtrar", 3, "ngModel", "keyup.enter", "ngModelChange"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ForbiddenNumbersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForbiddenNumbersComponent_mat_card_header_3_Template, 9, 2, "mat-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ForbiddenNumbersComponent_Template_input_keyup_enter_6_listener() { return ctx.onPageChange(); })("ngModelChange", function ForbiddenNumbersComponent_Template_input_ngModelChange_6_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function ForbiddenNumbersComponent_Template_table_matSortChange_7_listener($event) { return ctx.onSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForbiddenNumbersComponent_th_9_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForbiddenNumbersComponent_td_10_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForbiddenNumbersComponent_ng_container_11_Template, 3, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForbiddenNumbersComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForbiddenNumbersComponent_tr_13_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ForbiddenNumbersComponent_Template_mat_paginator_page_14_listener($event) { return ctx.onPaginatorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCardHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenNumbersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forbidden-numbers',
                templateUrl: './forbidden-numbers.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { loadChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showCardHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/bet/lotteries/lotteries.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/bet/lotteries/lotteries.component.ts ***!
  \************************************************************/
/*! exports provided: LotteriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteriesComponent", function() { return LotteriesComponent; });
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
















function LotteriesComponent_mat_card_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
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
function LotteriesComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LotteriesComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.id, " ");
} }
function LotteriesComponent_ng_container_11_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r7, " ");
} }
function LotteriesComponent_ng_container_11_td_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LotteriesComponent_ng_container_11_td_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onEdit(element_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LotteriesComponent_ng_container_11_td_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LotteriesComponent_ng_container_11_td_2_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.onDelete(element_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LotteriesComponent_ng_container_11_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LotteriesComponent_ng_container_11_td_2_button_3_Template, 3, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LotteriesComponent_ng_container_11_td_2_button_4_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r11[column_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r7 === "actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r7 === "actions");
} }
function LotteriesComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LotteriesComponent_ng_container_11_th_1_Template, 2, 1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LotteriesComponent_ng_container_11_td_2_Template, 5, 3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r7);
} }
function LotteriesComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function LotteriesComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
class LotteriesComponent extends _baseSearchView__WEBPACK_IMPORTED_MODULE_1__["BaseSearchView"] {
    constructor(service, authService, router) {
        super();
        this.service = service;
        this.authService = authService;
        this.router = router;
        this.showCardHeader = true;
        this.entityApi = 'lotteries';
        this.settings = {
            options: {
                order: [['name']]
            }
        };
        this.displayedColumns = ['code', 'name', 'play', 'isThreeFigures', 'actions'];
        this.filtersColumns = ['name', 'code'];
    }
    ngOnInit() {
        this.title = 'Loterias';
        this.subtitle = 'Apuesta';
        // const company  = this.authService.getItem('company');
        // this.settings.options.where = {companyId: company.id};
        super.init(this);
        super.onPageChange();
    }
    ngOnChanges(changes) {
        if (this.loadChange) {
            super.onPageChange();
        }
    }
    onEdit(row) {
        this.router.navigate(['/lottery', { lotteryId: row.id }]);
    }
}
LotteriesComponent.ɵfac = function LotteriesComponent_Factory(t) { return new (t || LotteriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LotteriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LotteriesComponent, selectors: [["app-lotteries"]], inputs: { loadChange: "loadChange", showCardHeader: "showCardHeader" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 9, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [4, "ngIf"], ["matInput", "", "placeholder", "Filtrar", 3, "ngModel", "keyup.enter", "ngModelChange"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function LotteriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LotteriesComponent_mat_card_header_3_Template, 9, 2, "mat-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function LotteriesComponent_Template_input_keyup_enter_6_listener() { return ctx.onPageChange(); })("ngModelChange", function LotteriesComponent_Template_input_ngModelChange_6_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function LotteriesComponent_Template_table_matSortChange_7_listener($event) { return ctx.onSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LotteriesComponent_th_9_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LotteriesComponent_td_10_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LotteriesComponent_ng_container_11_Template, 3, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LotteriesComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LotteriesComponent_tr_13_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function LotteriesComponent_Template_mat_paginator_page_14_listener($event) { return ctx.onPaginatorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCardHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LotteriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lotteries',
                templateUrl: './lotteries.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { loadChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showCardHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/bet/lottery/lottery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/bet/lottery/lottery.component.ts ***!
  \********************************************************/
/*! exports provided: LotteryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryComponent", function() { return LotteryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _baseEditView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../baseEditView */ "./src/app/views/baseEditView.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/security/auth.service */ "./src/app/services/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _lotteries_lotteries_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lotteries/lotteries.component */ "./src/app/views/bet/lotteries/lotteries.component.ts");




















function LotteryComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("code"));
} }
function LotteryComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("name"));
} }
function LotteryComponent_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6.text, " ");
} }
function LotteryComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("checkArray"));
} }
function LotteryComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "monetization_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loterias ");
} }
function LotteryComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-lotteries", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loadChange", ctx_r5.loadLotteries)("showCardHeader", false);
} }
const _c0 = function () { return { standalone: true }; };
class LotteryComponent extends _baseEditView__WEBPACK_IMPORTED_MODULE_1__["BaseEditView"] {
    constructor(service, authService, route, fb, router, changeDetectorRef, _snackBar) {
        super();
        this.service = service;
        this.authService = authService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this._snackBar = _snackBar;
        this.entityApi = 'lotteries';
        this.weekDays = {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        };
        this.enumLotteryTemporality = [
            {
                value: null, text: 'Ninguna'
            },
            {
                value: 'morning', text: 'Mañana'
            },
            {
                value: 'afternoon', text: 'Tarde'
            },
            {
                value: 'night', text: 'Noche'
            }
        ];
        this.configFormGroup = (entityId) => {
            let settingName = { field: 'name' };
            let settingCode = { field: 'code' };
            if (entityId) {
                settingName.options = {
                    where: {
                        id: { $ne: entityId }
                    }
                };
                settingCode.options = {
                    where: {
                        id: { $ne: entityId }
                    }
                };
            }
            this.entityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [this.service.takenValidator(this.entityApi, settingName)]),
                code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [this.service.takenValidator(this.entityApi, settingCode)]),
                checkArray: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
        };
    }
    ngOnInit() {
        this.title = 'Loteria';
        this.subtitle = 'Apuesta';
        // this.new();
        this.iniEntity();
        super.init(this);
        this.route.params.subscribe((params) => {
            if (params && params.lotteryId) {
                this.configFormGroup(params.lotteryId);
                super.getEntity(params.lotteryId).subscribe(() => {
                    for (let day in this.weekDays) {
                        this.weekDays[day] = false;
                    }
                    let days = this.entity.play.split(',');
                    for (let day of days) {
                        this.weekDays[day] = true;
                        this.playDaysChange({ checked: true, source: { value: day } });
                    }
                });
            }
            else {
                this.configFormGroup();
            }
        });
    }
    iniEntity() {
        this.entity = {
            code: null,
            name: null,
            play: null,
            isThreeFigures: false,
            temporality: null,
            closing: null
        };
    }
    new() {
        for (let day in this.weekDays) {
            this.weekDays[day] = false;
        }
        if (this.entityForm) {
            const checkArray = this.entityForm.get('checkArray');
            let stop = checkArray.controls.length;
            for (let i = 0; i < stop; i++) {
                checkArray.removeAt(0);
            }
        }
        this.iniEntity();
        // this.configFormGroup();
        this.router.navigate(['/lottery']);
    }
    playDaysChange(e) {
        const checkArray = this.entityForm.get('checkArray');
        if (e.checked) {
            checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](e.source.value));
        }
        else {
            let i = 0;
            checkArray.controls.forEach((item) => {
                if (item.value == e.source.value) {
                    checkArray.removeAt(i);
                    return;
                }
                i++;
            });
        }
        let days = '';
        checkArray.controls.forEach((item) => {
            days += item.value + ',';
        });
        days = days.substring(0, days.length - 1);
        this.entity.play = days || null;
    }
    afterSaved() {
        this.loadLotteries = new Date().toString();
    }
}
LotteryComponent.ɵfac = function LotteryComponent_Factory(t) { return new (t || LotteryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
LotteryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LotteryComponent, selectors: [["app-lottery"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 62, vars: 49, consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], [3, "formGroup"], [2, "float", "left", "width", "20%", "margin-right", "10px"], ["matInput", "", "placeholder", "Entre c\u00F3digo", "formControlName", "code", "required", "", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [2, "width", "20%", "margin-right", "10px"], ["matInput", "", "placeholder", "Entre nombre", "formControlName", "name", "required", "", 3, "ngModel", "ngModelChange"], ["matNativeControl", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "width", "20%"], ["matInput", "", "placeholder", "Entre hora de cierre", "type", "time", 3, "ngModel", "ngModelOptions", "ngModelChange"], [2, "margin-right", "10px", 3, "ngModel", "ngModelOptions", "value", "ngModelChange", "change"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-text-outline", "10px", "margin-top", "10px"], [2, "margin-right", "10px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-fab", "", "color", "accent", 3, "disabled", "click"], ["mat-fab", "", "color", "primary", 3, "click"], ["mat-tab-label", ""], ["matTabContent", ""], [3, "value"], [3, "loadChange", "showCardHeader"]], template: function LotteryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_input_ngModelChange_17_listener($event) { return ctx.entity.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LotteryComponent_mat_error_18_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_input_ngModelChange_20_listener($event) { return ctx.entity.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LotteryComponent_mat_error_21_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Seleccione temporalidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_mat_select_ngModelChange_25_listener($event) { return ctx.entity.temporality = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LotteryComponent_mat_option_26_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_input_ngModelChange_28_listener($event) { return ctx.entity.closing = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_mat_checkbox_ngModelChange_33_listener($event) { return ctx.weekDays.monday = $event; })("change", function LotteryComponent_Template_mat_checkbox_change_33_listener($event) { return ctx.playDaysChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lunes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_mat_checkbox_ngModelChange_35_listener($event) { return ctx.weekDays.tuesday = $event; })("change", function LotteryComponent_Template_mat_checkbox_change_35_listener($event) { return ctx.playDaysChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Martes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_mat_checkbox_ngModelChange_37_listener($event) { return ctx.weekDays.wednesday = $event; })("change", function LotteryComponent_Template_mat_checkbox_change_37_listener($event) { return ctx.playDaysChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mi\u00E9rcoles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_mat_checkbox_ngModelChange_39_listener($event) { return ctx.weekDays.thursday = $event; })("change", function LotteryComponent_Template_mat_checkbox_change_39_listener($event) { return ctx.playDaysChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Jueves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_mat_checkbox_ngModelChange_41_listener($event) { return ctx.weekDays.friday = $event; })("change", function LotteryComponent_Template_mat_checkbox_change_41_listener($event) { return ctx.playDaysChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Viernes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_mat_checkbox_ngModelChange_43_listener($event) { return ctx.weekDays.saturday = $event; })("change", function LotteryComponent_Template_mat_checkbox_change_43_listener($event) { return ctx.playDaysChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sabado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_mat_checkbox_ngModelChange_45_listener($event) { return ctx.weekDays.sunday = $event; })("change", function LotteryComponent_Template_mat_checkbox_change_45_listener($event) { return ctx.playDaysChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Domingo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, LotteryComponent_mat_error_47_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LotteryComponent_Template_mat_checkbox_ngModelChange_50_listener($event) { return ctx.entity.isThreeFigures = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Es tres cifras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LotteryComponent_Template_button_click_53_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LotteryComponent_Template_button_click_55_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, LotteryComponent_ng_template_60_Template, 3, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, LotteryComponent_ng_template_61_Template, 3, 2, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entityForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.temporality)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.enumLotteryTemporality);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.closing)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.entity.closing, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Juega: ", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weekDays.monday)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0))("value", "monday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weekDays.tuesday)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c0))("value", "tuesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weekDays.wednesday)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c0))("value", "wednesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weekDays.thursday)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c0))("value", "thursday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weekDays.friday)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c0))("value", "friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weekDays.saturday)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c0))("value", "saturday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weekDays.sunday)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c0))("value", "sunday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.isThreeFigures)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.entityForm.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardFooter"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _lotteries_lotteries_component__WEBPACK_IMPORTED_MODULE_17__["LotteriesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LotteryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lottery',
                templateUrl: './lottery.component.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-bet-bet-module-es2015.js.map