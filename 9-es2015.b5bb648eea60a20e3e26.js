(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"57dx":function(t,e,a){"use strict";a.r(e),a.d(e,"FinanceModule",(function(){return H}));var n=a("ofXK"),c=a("tyNb"),o=a("5K0A"),i=a("Vt10"),r=a("fXoL"),l=a("H+bZ"),b=a("zVt+"),s=a("Wp6s"),d=a("kmnG"),u=a("qFsG"),f=a("3Pt+"),m=a("iadO"),g=a("bTqV"),h=a("+0xr"),p=a("Dh3D"),C=a("M9IT"),w=a("NFeN");function T(t,e){if(1&t&&(r.Ub(0,"mat-card-header"),r.Ub(1,"mat-card-title"),r.Ub(2,"div",0),r.Ub(3,"div",20),r.zc(4),r.Tb(),r.Tb(),r.Tb(),r.Ub(5,"mat-card-subtitle"),r.Ub(6,"div",0),r.Ub(7,"div",20),r.zc(8),r.Tb(),r.Tb(),r.Tb(),r.Tb()),2&t){const t=r.gc();r.Cb(4),r.Bc(" ",t.title," "),r.Cb(4),r.Bc(" ",t.subtitle," ")}}function U(t,e){1&t&&(r.Ub(0,"th",21),r.zc(1," Id "),r.Tb())}function y(t,e){if(1&t&&(r.Ub(0,"td",22),r.zc(1),r.Tb()),2&t){const t=e.$implicit;r.Cb(1),r.Bc(" ",t.id," ")}}function D(t,e){if(1&t&&(r.Ub(0,"th",21),r.zc(1),r.Tb()),2&t){const t=r.gc().$implicit;r.Cb(1),r.Bc(" ",t," ")}}function x(t,e){if(1&t){const t=r.Vb();r.Ub(0,"button",27),r.cc("click",(function(){r.sc(t);const e=r.gc().$implicit;return r.gc(2).onEdit(e)})),r.Ub(1,"mat-icon"),r.zc(2,"launch"),r.Tb(),r.Tb()}}function v(t,e){if(1&t){const t=r.Vb();r.Ub(0,"button",28),r.cc("click",(function(){r.sc(t);const e=r.gc().$implicit;return r.gc(2).onDelete(e)})),r.Ub(1,"mat-icon"),r.zc(2,"delete_outline"),r.Tb(),r.Tb()}}function z(t,e){if(1&t&&(r.Ub(0,"td",22),r.Ub(1,"span"),r.zc(2),r.Tb(),r.yc(3,x,3,0,"button",25),r.yc(4,v,3,0,"button",26),r.Tb()),2&t){const t=e.$implicit,a=r.gc().$implicit;r.Cb(2),r.Ac(t[a]),r.Cb(1),r.lc("ngIf","actions"===a),r.Cb(1),r.lc("ngIf","actions"===a)}}function S(t,e){if(1&t&&(r.Ub(0,"td",29),r.zc(1),r.Tb()),2&t){const t=r.gc().$implicit,e=r.gc();r.Cb(1),r.Ac(e.getText(t))}}function k(t,e){1&t&&(r.Sb(0,23),r.yc(1,D,2,1,"th",13),r.yc(2,z,5,3,"td",14),r.yc(3,S,2,1,"td",24),r.Rb()),2&t&&r.lc("matColumnDef",e.$implicit)}function F(t,e){1&t&&r.Pb(0,"tr",30)}function I(t,e){1&t&&r.Pb(0,"tr",31)}function M(t,e){1&t&&r.Pb(0,"tr",32)}const P=[{path:"sales",canActivate:[o.a],component:(()=>{class t extends i.a{constructor(t,e,a){super(),this.service=t,this.authService=e,this.router=a,this.showCardHeader=!0,this.entityApi="bets",this.settings={query:{table:"vw_sales"},options:{where:{}}},this.displayedColumns=["employeeCode","valor"],this.filtersColumns=["employeeCode"],this.createdDate=new Date}ngOnInit(){this.title="Ventas",this.subtitle="Finanzas",super.init(this),super.onPageChange()}ngOnChanges(t){this.loadChange&&super.onPageChange()}onEdit(t){this.router.navigate(["/bet",{betId:t.id}])}getText(t){return"employeeCode"==t?"Total":"valor"==t&&this.dataSource&&this.dataSource.data?this.dataSource.data.reduce((t,e)=>t+e.valor,0):""}beforePageChange(){if(this.createdDate){var t=this.createdDate.getDate()+"/"+(this.createdDate.getMonth()+1)+"/"+this.createdDate.getFullYear();this.settings.options.where.createdDate=t}else delete this.settings.options.where.createdDate}}return t.\u0275fac=function(e){return new(e||t)(r.Ob(l.a),r.Ob(b.a),r.Ob(c.f))},t.\u0275cmp=r.Ib({type:t,selectors:[["app-sales"]],inputs:{loadChange:"loadChange",showCardHeader:"showCardHeader"},features:[r.zb,r.Ab],decls:29,vars:13,consts:[["fxLayout","row","fxLayoutWrap","wrap"],["fxFlex.gt-sm","100","fxFlex.gt-xs","100","fxFlex","100"],[4,"ngIf"],["fxFlex.gt-sm","100","fxFlex.gt-xs","100",2,"overflow","hidden"],[2,"float","left","width","30%","margin-right","10px"],["matInput","","placeholder","Filtrar",3,"ngModel","keyup.enter","ngModelChange"],[2,"width","30%","margin-right","10px"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["picker",""],["mat-fab","","color","basic",2,"float","left",3,"click"],["mat-table","","matSort","",1,"mat-elevation-z8",3,"dataSource","matSortChange"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"],["fxFlex.gt-sm","100","fxFlex.gt-xs","100"],["mat-header-cell",""],["mat-cell",""],[3,"matColumnDef"],["mat-footer-cell","",4,"matFooterCellDef"],["mat-button","",3,"click",4,"ngIf"],["mat-button","","color","warn",3,"click",4,"ngIf"],["mat-button","",3,"click"],["mat-button","","color","warn",3,"click"],["mat-footer-cell",""],["mat-header-row",""],["mat-row",""],["mat-footer-row",""]],template:function(t,e){if(1&t&&(r.Ub(0,"div",0),r.Ub(1,"div",1),r.Ub(2,"mat-card"),r.yc(3,T,9,2,"mat-card-header",2),r.Ub(4,"mat-card-content"),r.Ub(5,"div",0),r.Ub(6,"div",3),r.Ub(7,"mat-form-field",4),r.Ub(8,"input",5),r.cc("keyup.enter",(function(){return e.onPageChange()}))("ngModelChange",(function(t){return e.filter=t})),r.Tb(),r.Tb(),r.Ub(9,"mat-form-field",6),r.Ub(10,"mat-label"),r.zc(11,"Seleccione fecha"),r.Tb(),r.Ub(12,"input",7),r.cc("ngModelChange",(function(t){return e.createdDate=t})),r.Tb(),r.Pb(13,"mat-datepicker-toggle",8),r.Pb(14,"mat-datepicker",null,9),r.Tb(),r.Tb(),r.Tb(),r.Ub(16,"div",0),r.Ub(17,"div",3),r.Ub(18,"button",10),r.cc("click",(function(){return e.onPageChange()})),r.zc(19,"Refrescar"),r.Tb(),r.Tb(),r.Tb(),r.Ub(20,"table",11),r.cc("matSortChange",(function(t){return e.onSortChange(t)})),r.Sb(21,12),r.yc(22,U,2,0,"th",13),r.yc(23,y,2,1,"td",14),r.Rb(),r.yc(24,k,4,1,"ng-container",15),r.yc(25,F,1,0,"tr",16),r.yc(26,I,1,0,"tr",17),r.yc(27,M,1,0,"tr",18),r.Tb(),r.Ub(28,"mat-paginator",19),r.cc("page",(function(t){return e.onPaginatorChange(t)})),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb()),2&t){const t=r.qc(15);r.Cb(3),r.lc("ngIf",e.showCardHeader),r.Cb(5),r.lc("ngModel",e.filter),r.Cb(4),r.lc("matDatepicker",t)("ngModel",e.createdDate),r.Cb(1),r.lc("for",t),r.Cb(7),r.lc("dataSource",e.dataSource),r.Cb(4),r.lc("ngForOf",e.displayedColumns),r.Cb(1),r.lc("matHeaderRowDef",e.displayedColumns),r.Cb(1),r.lc("matRowDefColumns",e.displayedColumns),r.Cb(1),r.lc("matFooterRowDef",e.displayedColumns),r.Cb(1),r.lc("length",e.length)("pageSize",e.pageSize)("pageSizeOptions",e.pageSizeOptions)}},directives:[s.a,n.k,s.c,d.c,u.b,f.b,f.l,f.o,d.f,m.b,m.d,d.g,m.a,g.a,h.n,p.a,h.c,h.i,h.b,n.j,h.k,h.m,h.g,C.a,s.e,s.h,s.g,h.h,h.a,h.e,w.a,h.d,h.j,h.l,h.f],encapsulation:2}),t})()}];let O=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(e){return new(e||t)},imports:[[c.h.forChild(P)],c.h]}),t})();var R=a("onrN");let H=(()=>{class t{}return t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({factory:function(e){return new(e||t)},imports:[[n.c,O,R.a,f.q,f.h]]}),t})()}}]);