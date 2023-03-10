function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-security-security-module"], {
  /***/
  "./src/app/views/security/menu/menu.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/security/menu/menu.component.ts ***!
    \*******************************************************/

  /*! exports provided: TodoItemFlatNode, MenuComponent */

  /***/
  function srcAppViewsSecurityMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function () {
      return TodoItemFlatNode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _baseEditView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../baseEditView */
    "./src/app/views/baseEditView.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/security/auth.service */
    "./src/app/services/security/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    function MenuComponent_mat_tree_node_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenuComponent_mat_tree_node_15_Template_mat_checkbox_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var node_r2 = ctx.$implicit;
          return node_r2.state = $event;
        })("change", function MenuComponent_mat_tree_node_15_Template_mat_checkbox_change_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var node_r2 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.todoLeafItemSelectionToggle(node_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r2.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r2.name + node_r2.checks, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", node_r2.state)("checked", ctx_r0.checklistSelection.isSelected(node_r2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r2.name);
      }
    }

    function MenuComponent_mat_tree_node_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MenuComponent_mat_tree_node_16_Template_mat_checkbox_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var node_r6 = ctx.$implicit;
          return node_r6.state = $event;
        })("change", function MenuComponent_mat_tree_node_16_Template_mat_checkbox_change_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var node_r6 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.todoItemSelectionToggle(node_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r6 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "toggle " + node_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r6.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", node_r6.state)("checked", ctx_r1.descendantsAllSelected(node_r6))("indeterminate", ctx_r1.descendantsPartiallySelected(node_r6));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "toggle " + node_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r6.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "toggle " + node_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r6) ? "expand_more" : "chevron_right", " ");
      }
    }
    /** Flat to-do item node with expandable and level information */


    var TodoItemFlatNode = function TodoItemFlatNode() {
      _classCallCheck(this, TodoItemFlatNode);
    };

    var MenuComponent = /*#__PURE__*/function (_baseEditView__WEBPAC) {
      _inherits(MenuComponent, _baseEditView__WEBPAC);

      var _super = _createSuper(MenuComponent);

      function MenuComponent(service, authService, route, fb, router, changeDetectorRef, _snackBar) {
        var _this;

        _classCallCheck(this, MenuComponent);

        _this = _super.call(this);
        _this.service = service;
        _this.authService = authService;
        _this.route = route;
        _this.fb = fb;
        _this.router = router;
        _this.changeDetectorRef = changeDetectorRef;
        _this._snackBar = _snackBar;
        _this.entityApi = 'users';
        _this.items = [{
          name: 'Apuesta',
          icon: 'business',
          children: [{
            state: 'betalerts',
            name: 'Apuestas alertas',
            icon: 'fiber_manual_record',
            expandable: false,
            level: 1,
            checks: true
          }, {
            state: 'bet',
            name: 'Apuesta',
            icon: 'fiber_manual_record'
          }, {
            state: 'bet2',
            name: 'Apuesta-PRUEBA',
            icon: 'fiber_manual_record'
          }, {
            state: 'bets',
            name: 'Buscador',
            icon: 'fiber_manual_record'
          }, {
            state: 'forbidden',
            name: 'Numero Prohibido',
            icon: 'fiber_manual_record'
          }]
        }, {
          name: 'Recursos Humanos',
          icon: 'group',
          children: [{
            state: 'employee',
            name: 'Empleado',
            icon: 'fiber_manual_record'
          }, {
            state: 'lottery',
            name: 'Loterias',
            icon: 'fiber_manual_record'
          }, {
            state: 'employeealerts',
            name: 'Empleados Alerta ',
            icon: 'fiber_manual_record'
          }]
        }, {
          name: 'Finanzas',
          icon: 'attach_money',
          children: [{
            state: 'sales',
            name: 'Ventas',
            icon: 'fiber_manual_record'
          }]
        }, {
          name: 'Análisis',
          icon: 'poll',
          children: [{
            state: 'employeesWork',
            name: 'Digitación',
            icon: 'fiber_manual_record'
          }]
        }, {
          name: 'Seguridad',
          icon: 'verified_user',
          children: [{
            state: 'user',
            name: 'Usuario',
            icon: 'fiber_manual_record'
          }, {
            state: 'users',
            name: 'Usuarios',
            icon: 'fiber_manual_record'
          }]
        }];

        _this._transformer = function (node, level) {
          return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            state: node.state,
            icon: node.icon,
            level: level
          };
        };

        _this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](function (node) {
          return node.level;
        }, function (node) {
          return node.expandable;
        });
        _this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](_this._transformer, function (node) {
          return node.level;
        }, function (node) {
          return node.expandable;
        }, function (node) {
          return node.children;
        });
        _this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](_this.treeControl, _this.treeFlattener);

        _this.hasChild = function (_, node) {
          return node.expandable;
        };
        /** The selection for checklist */


        _this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true
        /* multiple */
        );
        _this.check = true;

        _this.configFormGroup = function (entityId) {
          var setting = {
            field: 'name'
          };

          if (entityId) {
            setting.options = {
              where: {
                id: {
                  $ne: entityId
                }
              }
            };
          }

          _this.entityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({// name: new FormControl('', [Validators.required],
            //   [this.service.takenValidator(this.entityApi, setting)]),
            // password: new FormControl('', [Validators.required]),
            // email: new FormControl('', [Validators.email])
            // isActive: new FormControl('', [Validators.required]),
            // isSuperAdmin: new FormControl('', [Validators.required])
          });
        };

        _this.getLevel = function (node) {
          return node.level;
        };

        return _this;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.title = 'Menu'; //+ this.service.getUrl();

          this.subtitle = 'Seguridad';
          this.iniEntity();

          _get(_getPrototypeOf(MenuComponent.prototype), "init", this).call(this, this);

          this.route.params.subscribe(function (params) {
            if (params && params.userId) {
              _this2.configFormGroup(params.userId);

              _get(_getPrototypeOf(MenuComponent.prototype), "getEntity", _this2).call(_this2, params.userId).subscribe(function () {});
            } else {
              _this2.configFormGroup();
            }
          });
          this.dataSource.data = this.items;
          debugger; // this.checklistSelection.toggle(this.items[0].children[0]);

          this.checklistSelection.isSelected(this.items[0].children[0]);
          this.todoLeafItemSelectionToggle(this.items[0].children[0]);
        }
      }, {
        key: "iniEntity",
        value: function iniEntity() {
          this.entity = {
            employeeId: null,
            name: null,
            password: null,
            email: null,
            isActive: true,
            isSuperAdmin: false
          };
        }
      }, {
        key: "new",
        value: function _new() {
          this.iniEntity(); // this.router.navigate(['/user']);
        }
      }, {
        key: "afterSaved",
        value: function afterSaved() {
          this.loadEmployees = new Date().toString();
        }
        /** Whether all the descendants of the node are selected. */

      }, {
        key: "descendantsAllSelected",
        value: function descendantsAllSelected(node) {
          var _this3 = this;

          var descendants = this.treeControl.getDescendants(node);
          var descAllSelected = descendants.length > 0 && descendants.every(function (child) {
            return _this3.checklistSelection.isSelected(child);
          });
          return descAllSelected;
        }
        /** Whether part of the descendants are selected */

      }, {
        key: "descendantsPartiallySelected",
        value: function descendantsPartiallySelected(node) {
          var _this4 = this;

          var descendants = this.treeControl.getDescendants(node);
          var result = descendants.some(function (child) {
            return _this4.checklistSelection.isSelected(child);
          });
          return result && !this.descendantsAllSelected(node);
        }
        /** Toggle the to-do item selection. Select/deselect all the descendants node */

      }, {
        key: "todoItemSelectionToggle",
        value: function todoItemSelectionToggle(node) {
          var _this$checklistSelect,
              _this$checklistSelect2,
              _this5 = this;

          debugger;
          this.checklistSelection.toggle(node);
          var descendants = this.treeControl.getDescendants(node);
          this.checklistSelection.isSelected(node) ? (_this$checklistSelect = this.checklistSelection).select.apply(_this$checklistSelect, _toConsumableArray(descendants)) : (_this$checklistSelect2 = this.checklistSelection).deselect.apply(_this$checklistSelect2, _toConsumableArray(descendants)); // Force update for the parent

          descendants.forEach(function (child) {
            return _this5.checklistSelection.isSelected(child);
          });
          this.checkAllParentsSelection(node);
        }
        /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */

      }, {
        key: "todoLeafItemSelectionToggle",
        value: function todoLeafItemSelectionToggle(node) {
          debugger;
          this.checklistSelection.toggle(node);
          this.checkAllParentsSelection(node);
        }
        /* Checks all the parents when a leaf node is selected/unselected */

      }, {
        key: "checkAllParentsSelection",
        value: function checkAllParentsSelection(node) {
          var parent = this.getParentNode(node);

          while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
          }
        }
        /** Check root node checked state and change it accordingly */

      }, {
        key: "checkRootNodeSelection",
        value: function checkRootNodeSelection(node) {
          var _this6 = this;

          var nodeSelected = this.checklistSelection.isSelected(node);
          var descendants = this.treeControl.getDescendants(node);
          var descAllSelected = descendants.length > 0 && descendants.every(function (child) {
            return _this6.checklistSelection.isSelected(child);
          });

          if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
          } else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
          }
        }
        /* Get the parent node of a node */

      }, {
        key: "getParentNode",
        value: function getParentNode(node) {
          var currentLevel = this.getLevel(node);

          if (currentLevel < 1) {
            return null;
          }

          var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

          for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];

            if (this.getLevel(currentNode) < currentLevel) {
              return currentNode;
            }
          }

          return null;
        }
      }]);

      return MenuComponent;
    }(_baseEditView__WEBPACK_IMPORTED_MODULE_1__["BaseEditView"]);

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 19,
      vars: 6,
      consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], [3, "formGroup"], [3, "dataSource", "treeControl"], ["matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "ngModel", "checked", "ngModelChange", "change"], ["appAccordion", ""], ["appAccordionLink", ""], ["appAccordionToggle", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "checklist-leaf-node", 3, "ngModel", "checked", "indeterminate", "ngModelChange", "change"], ["mat-icon-button", "", "matTreeNodeToggle", "", 2, "cursor", "pointer"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tree", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MenuComponent_mat_tree_node_15_Template, 11, 5, "mat-tree-node", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MenuComponent_mat_tree_node_16_Template, 10, 9, "mat-tree-node", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entityForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeNodeDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardFooter"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeNodePadding"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeNodeToggle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html'
        }]
      }], function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/security/security-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/views/security/security-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SecurityRoutingModule */

  /***/
  function srcAppViewsSecuritySecurityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function () {
      return SecurityRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/security/auth.guard */
    "./src/app/services/security/auth.guard.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/views/security/users/users.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/views/security/user/user.component.ts");

    var routes = [{
      path: 'users',
      canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    }, {
      path: 'user',
      canActivate: [_services_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
    }];

    var SecurityRoutingModule = function SecurityRoutingModule() {
      _classCallCheck(this, SecurityRoutingModule);
    };

    SecurityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SecurityRoutingModule
    });
    SecurityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SecurityRoutingModule_Factory(t) {
        return new (t || SecurityRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecurityRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/security/security.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/views/security/security.module.ts ***!
    \***************************************************/

  /*! exports provided: SecurityModule */

  /***/
  function srcAppViewsSecuritySecurityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityModule", function () {
      return SecurityModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _demo_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../demo-material-module */
    "./src/app/demo-material-module.ts");
    /* harmony import */


    var _security_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./security-routing.module */
    "./src/app/views/security/security-routing.module.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/views/security/users/users.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/views/security/user/user.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/views/security/menu/menu.component.ts");

    var SecurityModule = function SecurityModule() {
      _classCallCheck(this, SecurityModule);
    };

    SecurityModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SecurityModule
    });
    SecurityModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SecurityModule_Factory(t) {
        return new (t || SecurityModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _security_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecurityRoutingModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_2__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecurityModule, {
        declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _security_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecurityRoutingModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_2__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _security_routing_module__WEBPACK_IMPORTED_MODULE_3__["SecurityRoutingModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_2__["DemoMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/security/user/user.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/security/user/user.component.ts ***!
    \*******************************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppViewsSecurityUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _baseEditView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../baseEditView */
    "./src/app/views/baseEditView.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/security/auth.service */
    "./src/app/services/security/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function UserComponent_mat_error_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("name"));
      }
    }

    function UserComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("password"));
      }
    }

    function UserComponent_mat_error_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("email"));
      }
    }

    function UserComponent_mat_option_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4.text, " ");
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var UserComponent = /*#__PURE__*/function (_baseEditView__WEBPAC2) {
      _inherits(UserComponent, _baseEditView__WEBPAC2);

      var _super2 = _createSuper(UserComponent);

      function UserComponent(service, authService, route, fb, router, changeDetectorRef, _snackBar) {
        var _this7;

        _classCallCheck(this, UserComponent);

        _this7 = _super2.call(this);
        _this7.service = service;
        _this7.authService = authService;
        _this7.route = route;
        _this7.fb = fb;
        _this7.router = router;
        _this7.changeDetectorRef = changeDetectorRef;
        _this7._snackBar = _snackBar;
        _this7.entityApi = 'users';
        _this7.entityApiMenus = 'menus';
        _this7.passChanged = false;

        _this7.configFormGroup = function (entityId) {
          var setting = {
            field: 'name'
          };

          if (entityId) {
            setting.options = {
              where: {
                id: {
                  $ne: entityId
                }
              }
            };
          }

          _this7.entityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [_this7.service.takenValidator(_this7.entityApi, setting)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
          });
        };

        return _this7;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.title = 'User'; //+ this.service.getUrl();

          this.subtitle = 'Seguridad';
          this.iniEntity();

          _get(_getPrototypeOf(UserComponent.prototype), "init", this).call(this, this);

          this.service.getSelect(this.entityApiMenus, {
            value: 'id',
            text: 'name',
            options: {
              order: [['name', 'asc']]
            }
          }).subscribe(function (res) {
            _this8.menus = res;
          });
          this.route.params.subscribe(function (params) {
            if (params && params.userId) {
              _this8.configFormGroup(params.userId);

              _get(_getPrototypeOf(UserComponent.prototype), "getEntity", _this8).call(_this8, params.userId, {
                options: {
                  include: [{
                    association: 'menus'
                  }]
                }
              }).subscribe(function () {
                debugger;
                _this8.entity;
              });
            } else {
              _this8.configFormGroup();
            }
          });
        }
      }, {
        key: "iniEntity",
        value: function iniEntity() {
          this.entity = {
            employeeId: null,
            defaultMenuId: null,
            name: null,
            password: null,
            email: null,
            isActive: true,
            isSuperAdmin: false
          };
        }
      }, {
        key: "new",
        value: function _new() {
          this.iniEntity();
          this.router.navigate(['/user']);
        }
      }, {
        key: "beforeSaved",
        value: function beforeSaved() {
          var done = true;

          if (this.entity.id) {
            if (!this.passChanged) {
              this.currPass = this.entity.password;
              delete this.entity.password;
            }
          }

          return done;
        }
      }, {
        key: "afterSaved",
        value: function afterSaved() {
          // this.loadEmployees = new Date().toString();
          if (!this.passChanged) {
            this.entity.password = this.currPass;
          }
        }
      }, {
        key: "passChange",
        value: function passChange() {
          this.passChanged = true;
        }
      }]);

      return UserComponent;
    }(_baseEditView__WEBPACK_IMPORTED_MODULE_1__["BaseEditView"]);

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 50,
      vars: 20,
      consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], [3, "formGroup"], ["matInput", "", "placeholder", "Entre usuario", "formControlName", "name", "required", "", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "Entre password", "formControlName", "password", "required", "", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "placeholder", "Enter email", "formControlName", "email", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 2, "margin-text-outline", "10px", "margin-top", "10px"], [2, "margin-right", "10px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matNativeControl", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-fab", "", "color", "accent", 3, "disabled", "click"], ["mat-fab", "", "color", "primary", 3, "click"], [3, "value"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.entity.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserComponent_mat_error_18_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.entity.password = $event;
          })("change", function UserComponent_Template_input_change_22_listener() {
            return ctx.passChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserComponent_mat_error_23_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.entity.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserComponent_mat_error_28_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_mat_checkbox_ngModelChange_31_listener($event) {
            return ctx.entity.isActive = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Esta Activo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_mat_checkbox_ngModelChange_35_listener($event) {
            return ctx.entity.isSuperAdmin = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Es super administrador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Seleccione men\xFA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_mat_select_ngModelChange_42_listener($event) {
            return ctx.entity.defaultMenuId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserComponent_mat_option_43_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_45_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_47_listener() {
            return ctx["new"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entityForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.isActive)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.isSuperAdmin)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entity.defaultMenuId)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.entityForm.valid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardFooter"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html'
        }]
      }], function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/security/users/users.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/security/users/users.component.ts ***!
    \*********************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppViewsSecurityUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _baseSearchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../baseSearchView */
    "./src/app/views/baseSearchView.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/security/auth.service */
    "./src/app/services/security/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function UsersComponent_mat_card_header_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.subtitle, " ");
      }
    }

    function UsersComponent_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_td_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.id, " ");
      }
    }

    function UsersComponent_ng_container_17_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r7, " ");
      }
    }

    function UsersComponent_ng_container_17_td_2_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_container_17_td_2_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.onEdit(element_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "launch");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_ng_container_17_td_2_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_container_17_td_2_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.onDelete(element_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UsersComponent_ng_container_17_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersComponent_ng_container_17_td_2_button_3_Template, 3, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_ng_container_17_td_2_button_4_Template, 3, 0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r11 = ctx.$implicit;

        var column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r11[column_r7]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r7 === "actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r7 === "actions");
      }
    }

    function UsersComponent_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_ng_container_17_th_1_Template, 2, 1, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersComponent_ng_container_17_td_2_Template, 5, 3, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r7);
      }
    }

    function UsersComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function UsersComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
      }
    }

    var UsersComponent = /*#__PURE__*/function (_baseSearchView__WEBP) {
      _inherits(UsersComponent, _baseSearchView__WEBP);

      var _super3 = _createSuper(UsersComponent);

      function UsersComponent(service, authService, router) {
        var _this9;

        _classCallCheck(this, UsersComponent);

        _this9 = _super3.call(this);
        _this9.service = service;
        _this9.authService = authService;
        _this9.router = router;
        _this9.showCardHeader = true;
        _this9.entityApi = 'users';
        _this9.settings = {
          options: {
            where: {}
          }
        };
        _this9.displayedColumns = ['name', 'isActive', 'actions'];
        _this9.filtersColumns = ['name'];
        _this9.createdDate = new Date();
        return _this9;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = 'Usuarios';
          this.subtitle = 'Seguriada';

          _get(_getPrototypeOf(UsersComponent.prototype), "init", this).call(this, this);

          _get(_getPrototypeOf(UsersComponent.prototype), "onPageChange", this).call(this);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.loadChange) {
            _get(_getPrototypeOf(UsersComponent.prototype), "onPageChange", this).call(this);
          }
        }
      }, {
        key: "onEdit",
        value: function onEdit(row) {
          this.router.navigate(['/user', {
            userId: row.id
          }]);
        }
      }]);

      return UsersComponent;
    }(_baseSearchView__WEBPACK_IMPORTED_MODULE_1__["BaseSearchView"]);

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      inputs: {
        loadChange: "loadChange",
        showCardHeader: "showCardHeader"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 21,
      vars: 9,
      consts: [["fxLayout", "row", "fxLayoutWrap", "wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [4, "ngIf"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", 2, "overflow", "hidden"], [2, "float", "left", "width", "30%", "margin-right", "10px"], ["matInput", "", "placeholder", "Filtrar", 3, "ngModel", "keyup.enter", "ngModelChange"], ["mat-fab", "", "color", "basic", 2, "float", "left", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersComponent_mat_card_header_3_Template, 9, 2, "mat-card-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function UsersComponent_Template_input_keyup_enter_8_listener() {
            return ctx.onPageChange();
          })("ngModelChange", function UsersComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.filter = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_11_listener() {
            return ctx.onPageChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Refrescar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function UsersComponent_Template_table_matSortChange_13_listener($event) {
            return ctx.onSortChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersComponent_th_15_Template, 2, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UsersComponent_td_16_Template, 2, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UsersComponent_ng_container_17_Template, 3, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UsersComponent_tr_18_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UsersComponent_tr_19_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-paginator", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function UsersComponent_Template_mat_paginator_page_20_listener($event) {
            return ctx.onPaginatorChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCardHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);

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
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatRow"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html'
        }]
      }], function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        loadChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showCardHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=views-security-security-module-es5.js.map