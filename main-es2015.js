(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"title\" class=\"title\">Login</h1>\n<p class=\"sub-title\">Hello! Log in with your email.</p>\n\n<!-- <nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert> -->\n\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           name=\"email\"\n           id=\"input-email\"\n           pattern=\".+@.+\\..+\"\n           placeholder=\"Email address\"\n           fieldSize=\"large\"\n           autofocus\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\" for=\"input-password\">Password:</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"../request-password\">Forgot Password?</a>\n    </span>\n    <input nbInput\n           fullWidth\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           name=\"password\"\n           type=\"password\"\n           id=\"input-password\"\n           placeholder=\"Password\"\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched \">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n  <div class=\"form-control-group accept-group\">\n    <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox>\n  </div>\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Log In\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  Don't have an account? <a class=\"text-link\" routerLink=\"../register\">Register</a>\n</section> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/request-password/request-password.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/request-password/request-password.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"title\" class=\"title\">Forgot Password</h1>\n<p class=\"sub-title\">Enter your email address and we’ll send a link to reset your password</p>\n\n<!-- <nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert> -->\n\n<form (ngSubmit)=\"requestPass()\" #requestPassForm=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Enter your email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+\\..+\"\n           placeholder=\"Email address\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !requestPassForm.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Request password\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"../login\">Back to Log In</a></p>\n  <p><a routerLink=\"../register\" class=\"text-link\">Register</a></p>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"title\" class=\"title\">Register</h1>\n<!-- \n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert> -->\n\n<form (ngSubmit)=\"register()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">Full name:</label>\n    <input nbInput\n           [(ngModel)]=\"user.fullName\"\n           #fullName=\"ngModel\"\n           id=\"input-name\"\n           name=\"fullName\"\n           placeholder=\"Full name\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"fullName.dirty ? (fullName.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.fullName.required')\"\n           [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\"\n           [attr.aria-invalid]=\"fullName.invalid && fullName.touched ? true : null\">\n    <ng-container *ngIf=\"fullName.invalid && fullName.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.required\">\n        Full name is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.minlength || fullName.errors?.maxlength\">\n        Full name should contains\n        from {{getConfigValue('forms.validation.fullName.minLength')}}\n        to {{getConfigValue('forms.validation.fullName.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+..+\"\n           placeholder=\"Email address\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           placeholder=\"Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-re-password\">Repeat password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           type=\"password\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.dirty ? (rePass.invalid || password.value != rePass.value  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.invalid && rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\" *ngIf=\"getConfigValue('forms.register.terms')\">\n    <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n      Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\n    </nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Register\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <!-- <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a> -->\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  Already have an account? <a class=\"text-link\" routerLink=\"../login\">Log in</a>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calllog/calllog.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calllog/calllog.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card status=\"danger\">\n    <nb-card-header>Calllog works!</nb-card-header>\n    <nb-card-body>\n    </nb-card-body>\n  </nb-card>\n<nb-card accent=\"info\">\n    <nb-card-header>Action Bar</nb-card-header>\n    <nb-card-body class=\"example-items-rows\">\n        <button nbButton hero ghost status=\"primary\" class=\"actionbar-btn-primary\" (click)=\"refresh()\" nbTooltip=\"Refresh call logs\" nbTooltipPlacement=\"top\" nbTooltipStatus=\"primary\" [nbTooltipIcon]=\"{icon: 'info-outline', pack: 'eva'}\"><nb-icon icon=\"refresh-outline\"></nb-icon></button>\n        <button nbButton hero status=\"warning\" class=\"actionbar-btn-warning\" (click)=\"filter()\" nbTooltip=\"Filter content\" nbTooltipPlacement=\"top\" nbTooltipStatus=\"primary\" [nbTooltipIcon]=\"{icon: 'info-outline', pack: 'eva'}\"><nb-icon icon=\"funnel-outline\" ></nb-icon>filter</button>\n        <button nbButton hero status=\"success\" class=\"actionbar-btn-success\" (click)=\"downloadExcel()\" nbTooltip=\"Download excel file\" nbTooltipPlacement=\"top\" nbTooltipStatus=\"primary\" [nbTooltipIcon]=\"{icon: 'info-outline', pack: 'eva'}\"><nb-icon icon=\"cloud-download-outline\" ></nb-icon>save</button>\n      </nb-card-body>\n  </nb-card>\n<ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-list/contact-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-list/contact-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card status=\"danger\">\n    <nb-card-header>Contact list</nb-card-header>\n    <nb-card-body>\n       \n            <nb-list>\n              <nb-list-item *ngFor=\"let user of users\">\n                <nb-user [name]=\"user.name\" [title]=\"user.number\" shape=\"semi-round\">\n                </nb-user>\n              </nb-list-item>\n            </nb-list>\n         \n    </nb-card-body>\n  </nb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-layout>\n\n    <nb-layout-header fixed>\n        <nb-actions size=\"medium\">\n  \n            <nb-action icon=\"menu-outline\" (click)=\"toggle()\"></nb-action>\n        </nb-actions>\n      Ghost Call\n    </nb-layout-header>\n    \n    <nb-sidebar tag=\"left\" state=\"compacted\">\n      <nb-menu [items]=\"items\">\n      </nb-menu>\n    </nb-sidebar>\n    \n    <nb-layout-column class=\"colored-column-warning\">\n  \n      <router-outlet></router-outlet>\n    </nb-layout-column>\n    <nb-layout-footer fixed>\n      <!-- Insert footer here -->\n    </nb-layout-footer>\n  \n  </nb-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nb-card  accent=\"info\">\n    <nb-card-header>forgot-password</nb-card-header>\n    <nb-card-body class=\"example-items-rows\">\n      <input type=\"text\" nbInput fullWidth shape=\"round\" placeholder=\"Old password\">\n      <input type=\"text\" nbInput fullWidth shape=\"round\" placeholder=\"New password\">\n      <input type=\"text\" nbInput fullWidth shape=\"round\" placeholder=\"New password repeat\">\n      <button nbButton hero fullWidth  shape=\"round\"  status=\"success\">SAVE</button>\n    </nb-card-body>\n  </nb-card>\n\n  <nb-card>\n    <nb-card-body>\n  \n      <nb-tabset>\n        <nb-tab tabIcon=\"person-outline\">\n          <p>List of <strong>users</strong>.</p>\n        </nb-tab>\n        <nb-tab [tabIcon]=\"bellIconConfig\">\n          <p>List of <strong>orders</strong>.</p>\n        </nb-tab>\n        <nb-tab tabIcon=\"email-outline\">\n          <p>List of <strong>transactions</strong>.</p>\n        </nb-tab>\n      </nb-tabset>\n  \n    </nb-card-body>\n  </nb-card>\n  <nb-card>\n    <nb-card-body>\n  \n      <nb-tabset fullWidth>\n        <nb-tab tabIcon=\"person-outline\">\n     \n        </nb-tab>\n        <nb-tab tabIcon=\"bell-outline\">\n         \n            <nb-card-body class=\"example-items-rows\">\n                <input type=\"text\" nbInput fullWidth shape=\"round\" placeholder=\"Old password\">\n                <input type=\"text\" nbInput fullWidth shape=\"round\" placeholder=\"New password\">\n                <input type=\"text\" nbInput fullWidth shape=\"round\" placeholder=\"New password repeat\">\n                <button nbButton hero fullWidth  shape=\"round\"  status=\"success\">SAVE</button>\n              </nb-card-body>\n        </nb-tab>\n        <nb-tab tabIcon=\"email-outline\">\n          <p>List of <strong>transactions</strong>.</p>\n        </nb-tab>\n      </nb-tabset>\n  \n    </nb-card-body>\n  </nb-card>\n  \n  <nb-card>\n    <nb-card-body>\n  \n      <nb-tabset>\n        <nb-tab tabTitle=\"Users\" tabIcon=\"person-outline\" responsive>\n          <p>List of <strong>users</strong>.</p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Orders\" tabIcon=\"bell-outline\" responsive>\n          <p>List of <strong>orders</strong>.</p>\n        </nb-tab>\n        <nb-tab tabTitle=\"Transactions\" tabIcon=\"email-outline\" responsive>\n          <p>List of <strong>transactions</strong>.</p>\n        </nb-tab>\n      </nb-tabset>\n  \n    </nb-card-body>\n  </nb-card>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gps-list/gps-list.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gps-list/gps-list.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>gps-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-pages/landing-pages.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-pages/landing-pages.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"page-wrap\">\n\n\n\t<!-- ==========================================================================================================\n\t\t\t\t\t\t\t\t\t\t\t\t\t   HERO\n\t\t ========================================================================================================== -->\n\n\t<div id=\"fh5co-hero-wrapper\">\n\t\t<nav class=\"container navbar navbar-expand-lg main-navbar-nav navbar-light\">\n\t\t\t<a class=\"navbar-brand\" href=\"\">SPOOK</a>\n\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t</button>\n\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t\t<ul class=\"navbar-nav nav-items-center ml-auto mr-auto\">\n\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\" onclick=\"$('#fh5co-features').goTo();return false;\">Features</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\" onclick=\"$('#fh5co-reviews').goTo();return false;\">Reviews</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"#\"  onclick=\"$('#fh5co-download').goTo();return false;\">Download</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a class=\"nav-link\" href=\"/auth/login\" title=\"WebApp Login and SignUp\">Web App</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"social-icons-header\">\n\t\t\t\t\t<a href=\"https://www.facebook.com/fh5co\"><i class=\"fab fa-facebook-f\"></i></a>\n\t\t\t\t\t<a href=\"https://freehtml5.co\"><i class=\"fab fa-instagram\"></i></a>\n\t\t\t\t\t<a href=\"https://www.twitter.com/fh5co\"><i class=\"fab fa-twitter\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<div class=\"container fh5co-hero-inner\">\n\t\t\t<h1 class=\"animated fadeIn wow\" data-wow-delay=\"0.4s\">Spook is free android app build for Track and Motinoring</h1>\n\t\t\t<p class=\"animated fadeIn wow\" data-wow-delay=\"0.67s\">Spook is main advantages its very cheapt and give best value for money product.</p>\n\t\t\t<button class=\"btn btn-md download-btn-first wow fadeInLeft animated\" data-wow-delay=\"0.85s\" onclick=\"$('#fh5co-download').goTo();return false;\">Download</button>\n\t\t\t<button class=\"btn btn-md features-btn-first animated fadeInLeft wow\" data-wow-delay=\"0.95s\" onclick=\"$('#fh5co-features').goTo();return false;\">Features</button>\n\t\t\t<img class=\"fh5co-hero-smartphone animated fadeInRight wow\" data-wow-delay=\"1s\" src=\"assets/img/phone-image.png\" alt=\"Smartphone\">\n\t\t</div>\n\n\n\t</div> <!-- first section wrapper -->\n\n\n\t<!-- ==========================================================================================================\n\t\t\t\t\t\t\t\t\t\t\t\t\t ADVANTAGES\n\t\t ========================================================================================================== -->\n\n\t<div class=\"fh5co-advantages-outer\">\n\t\t<div class=\"container\">\n\t\t\t<h1 class=\"second-title\"><span class=\"span-perfect\">Perfect</span> <span class=\"span-features\">Features</span></h1>\n\t\t\t<small>Only necessary</small>\n\n\t\t\t<div class=\"row fh5co-advantages-grid-columns wow animated fadeIn\" data-wow-delay=\"0.36s\">\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<img class=\"grid-image\" src=\"assets/img/icon-1.png\" alt=\"Icon-1\">\n\t\t\t\t\t<h1 class=\"grid-title\">Usability</h1>\n\t\t\t\t\t<p class=\"grid-desc\">Best for Daily used</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<img class=\"grid-image\" src=\"assets/img/icon-2.png\" alt=\"Icon-2\">\n\t\t\t\t\t<h1 class=\"grid-title\">Live Track by Spook </h1>\n\t\t\t\t\t<p class=\"grid-desc\">Live Location Track, Take Picture, Live Picture & more</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<img class=\"grid-image\" src=\"assets/img/icon-3.png\" alt=\"Icon-3\">\n\t\t\t\t\t<h1 class=\"grid-title\">Many Modules</h1>\n\t\t\t\t\t<p class=\"grid-desc\">Use full Modules developed, Which Help to monitoring</p>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<!-- ==========================================================================================================\n\t\t\t\t\t\t\t\t\t\t\t\t\t  SLIDER\n\t\t ========================================================================================================== -->\n\n\t<div class=\"fh5co-slider-outer wow fadeIn\" data-wow-delay=\"0.36s\">\n\t\t<h1>SIMPLE SCREENSHOT</h1>\n\t\t<div class=\"container fh5co-slider-inner\">\n\n\t\t\t<div class=\"owl-carousel owl-theme\">\n\n\t\t\t\t<div class=\"item\"><img src=\"assets/img/smartphone-2.png\" alt=\"\"></div>\n\t\t\t\t<div class=\"item\"><img src=\"assets/img/smartphone-2.png\" alt=\"\"></div>\n\t\t\t\t<div class=\"item\"><img src=\"assets/img/iphone.png\" alt=\"\"></div>\n\t\t\t\t<div class=\"item\"><img src=\"assets/img/smartphone-2.png\" alt=\"\"></div>\n\n\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\n\t<!-- ==========================================================================================================\n\t\t\t\t\t\t\t\t\t\t\t\t\t  FEATURES\n\t\t ========================================================================================================== -->\n\n\t<div class=\"curved-bg-div wow animated fadeIn\" data-wow-delay=\"0.15s\"></div>\n\t<div id=\"fh5co-features\" class=\"fh5co-features-outer\">\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row fh5co-features-grid-columns\">\n\n\t\t\t\t<div class=\"col-sm-6 in-order-1 wow animated fadeInLeft\" data-wow-delay=\"0.22s\">\n\t\t\t\t\t<div class=\"col-sm-image-container\">\n\t\t\t\t\t\t<img class=\"img-float-left\" src=\"assets/img/smartphone-1.png\" alt=\"smartphone-1\">\n\t\t\t\t\t\t<span class=\"span-new\">NEW</span>\n\t\t\t\t\t\t<span class=\"span-free\">Free</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 in-order-2 sm-6-content wow animated fadeInRight\" data-wow-delay=\"0.22s\">\n\t\t\t\t\t<h1>New Features</h1>\n\t\t\t\t\t<p>Call Recoding, Call Logs, App Data installed & More</p>\n\t\t\t\t\t<span class=\"circle circle-first\"><i class=\"fab fa-instagram\"></i></span>\n\t\t\t\t\t<span class=\"circle circle-middle\"><i class=\"fab fa-facebook\"></i></span>\n\t\t\t\t\t<span class=\"circle circle-last\"><i class=\"fab fa-twitter\"></i></span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft\" data-wow-delay=\"0.22s\">\n\t\t\t\t\t<h1>REAL-TIME STATISTICS</h1>\n\t\t\t\t\t<p>REAL TIME Calling, App Usages, Mesages Logs, Call logs</p>\n\t\t\t\t\t<span class=\"circle circle-first\"><i class=\"fas fa-star\"></i></span>\n\t\t\t\t\t<span class=\"circle circle-middle\"><i class=\"far fa-star\"></i></span>\n\t\t\t\t\t<span class=\"circle circle-last\"><i class=\"far fa-thumbs-up\"></i></span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 in-order-4 wow animated fadeInRight\" data-wow-delay=\"0.22s\">\n\t\t\t\t\t<img class=\"img-float-right\" src=\"assets/img/smartphone-2.png\" alt=\"smartphone-2\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6 in-order-5 wow animated fadeInLeft\" data-wow-delay=\"0.22s\">\n\t\t\t\t\t<div class=\"col-sm-image-container\">\n\t\t\t\t\t\t<img class=\"img-float-left\" src=\"assets/img/smartphone-2.png\" alt=\"smartphone-3\">\n\t\t\t\t\t\t<span class=\"span-data\">DATA</span>\n\t\t\t\t\t\t<span class=\"span-percent\">100%</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 in-order-6 sm-6-content wow animated fadeInRight\" data-wow-delay=\"0.22s\">\n\t\t\t\t\t<h1>POWERFUL BACKEND</h1>\n\t\t\t\t\t<p>99.9 % Down Time</p>\n\t\t\t\t\t<span class=\"circle circle-first\">95%</span>\n\t\t\t\t\t<span class=\"circle circle-middle\"><i class=\"fas fa-forward\"></i></span>\n\t\t\t\t\t<span class=\"circle circle-last\"><i class=\"fab fa-github\"></i></span>\n\n\t\t\t\t</div>\n\n\n\n\n\t\t\t</div> <!-- row -->\n\n\n\t\t</div>\n\t</div>\n\n\n\t<!-- ==========================================================================================================\n\t\t\t\t\t\t\t\t\t\t\t\t\t  REVIEWS\n\t\t ========================================================================================================== -->\n<!-- \n\t<div id=\"fh5co-reviews\" class=\"fh5co-reviews-outer\">\n\t\t<h1>What people are saying</h1>\n\t\t<small>Reviews</small>\n\t\t<div class=\"container fh5co-reviews-inner\">\n\t\t\t<div class=\"row justify-content-center\">\n\t\t\t\t<div class=\"col-sm-5 wow fadeIn animated\" data-wow-delay=\"0.25s\">\n\t\t\t\t\t<img class=\"float-left\" src=\"img/quotes-1.jpg\" alt=\"Quote 1\">\n\t\t\t\t\t<p class=\"testimonial-desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis similique quasi.</p>\n\t\t\t\t\t<small class=\"testimonial-author\">John Doe</small>\n\t\t\t\t\t<img class=\"float-right\" src=\"img/quotes-2.jpg\" alt=\"Quote 2\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-5 testimonial-2 wow fadeIn animated\" data-wow-delay=\"0.67s\">\n\t\t\t\t\t<img class=\"float-left\" src=\"img/quotes-1.jpg\" alt=\"Quote 1\">\n\t\t\t\t\t<p class=\"testimonial-desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis similique quasi.</p>\n\t\t\t\t\t<small class=\"testimonial-author\">Someone</small>\n\t\t\t\t\t<img class=\"float-right\" src=\"img/quotes-2.jpg\" alt=\"Quote 2\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t -->\n\n\t<!-- ==========================================================================================================\n                                                 BOTTOM\n    ========================================================================================================== -->\n\n\t<div id=\"fh5co-download\" class=\"fh5co-bottom-outer\">\n\t\t<div class=\"overlay\">\n\t\t\t<div class=\"container fh5co-bottom-inner\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<h1>How to download the app?</h1>\n\t\t\t\t\t\t<p>Download easyly using Google Play Store and apple store Development running</p>\n\t\t\t\t\t\t<a class=\"wow fadeIn animated\" data-wow-delay=\"0.25s\" href=\"#\"><img class=\"app-store-btn\" src=\"assets/img/app-store-icon.png\" alt=\"App Store Icon\"></a>\n\t\t\t\t\t\t<a class=\"wow fadeIn animated\" data-wow-delay=\"0.67s\" href=\"#\"><img class=\"google-play-btn\" src=\"assets/img/google-play-icon.png\" alt=\"Google Play Icon\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<!-- ==========================================================================================================\n                                               SECTION 7 - SUB FOOTER\n    ========================================================================================================== -->\n\n\t<footer class=\"footer-outer\">\n\t\t<div class=\"container footer-inner\">\n\n\t\t\t<div class=\"footer-three-grid wow fadeIn animated\" data-wow-delay=\"0.66s\">\n\t\t\t\t<div class=\"column-1-3\">\n\t\t\t\t\t<h1>App</h1>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"column-2-3\">\n\t\t\t\t\t<nav class=\"footer-nav\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<a href=\"#\" onclick=\"$('#fh5co-hero-wrapper').goTo();return false;\"><li>Home</li></a>\n\t\t\t\t\t\t\t<a href=\"#\" onclick=\"$('#fh5co-features').goTo();return false;\"><li>Features</li></a>\n\t\t\t\t\t\t\t<a href=\"#\" onclick=\"$('#fh5co-reviews').goTo();return false;\"><li>Reviews</li></a>\n\t\t\t\t\t\t\t<a href=\"#\" onclick=\"$('#fh5co-download').goTo();return false;\"><li class=\"active\">Download</li></a>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"column-3-3\">\n\t\t\t\t\t<div class=\"social-icons-footer\">\n\t\t\t\t\t\t<a href=\"https://www.facebook.com/fh5co\"><i class=\"fab fa-facebook-f\"></i></a>\n\t\t\t\t\t\t<a href=\"https://freehtml5.co\"><i class=\"fab fa-instagram\"></i></a>\n\t\t\t\t\t\t<a href=\"https://www.twitter.com/fh5co\"><i class=\"fab fa-twitter\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<span class=\"border-bottom-footer\"></span>\n\n\t\t\t<p class=\"copyright\">&copy; 2018 App. All rights reserved.</p>\n\t\t\t\n\t\t\t\n\t\t</div>\n\t\n\t</footer>\n\n\n\n\n</div> <!-- main page wrapper -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>logout works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photos/photos.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photos/photos.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>photos works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recoding/recoding.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recoding/recoding.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>recoding works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sms-log/sms-log.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sms-log/sms-log.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nb-layout>\n    <nb-layout-column class=\"colored-column-warning\">\n        <nb-card status=\"danger\" size=\"small\">\n            <nb-card-header>Contact list</nb-card-header>\n            <nb-card-body>\n               \n                    <nb-list nbInfiniteList [threshold]=\"500\" >\n                      <nb-list-item *ngFor=\"let user of users\">\n                        <nb-user [name]=\"user.name\" [title]=\"user.number\" shape=\"semi-round\">\n                        </nb-user>\n                      </nb-list-item>\n                    </nb-list>\n                 \n            </nb-card-body>\n          </nb-card>\n\n    </nb-layout-column>\n    <nb-layout-column class=\"colored-column-danger\">\n        <nb-chat *ngFor=\"let chat of chats\" [title]=\"chat.title\" [status]=\"chat.status\" size=\"small\">\n        <nb-chat-message *ngFor=\"let msg of chat.messages\"\n                         [type]=\"msg.type\"\n                         [message]=\"msg.text\"\n                         [reply]=\"msg.reply\"\n                         [sender]=\"msg.name\"\n                         [date]=\"msg.date\"\n                         [files]=\"msg.files\">\n        </nb-chat-message>\n      </nb-chat>\n    </nb-layout-column>\n  </nb-layout>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _sms_log_sms_log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sms-log/sms-log.component */ "./src/app/sms-log/sms-log.component.ts");
/* harmony import */ var _recoding_recoding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recoding/recoding.component */ "./src/app/recoding/recoding.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _gps_list_gps_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gps-list/gps-list.component */ "./src/app/gps-list/gps-list.component.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/contact-list/contact-list.component.ts");
/* harmony import */ var _calllog_calllog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calllog/calllog.component */ "./src/app/calllog/calllog.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/request-password/request-password.component */ "./src/app/auth/request-password/request-password.component.ts");
/* harmony import */ var _landing_pages_landing_pages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./landing-pages/landing-pages.component */ "./src/app/landing-pages/landing-pages.component.ts");


















const routes = [
    {
        path: '', component: _landing_pages_landing_pages_component__WEBPACK_IMPORTED_MODULE_17__["LandingPagesComponent"],
    },
    {
        path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
        children: [
            {
                path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
            },
            {
                path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
            },
            {
                path: 'forgot-password', component: _auth_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_16__["RequestPasswordComponent"]
            }
        ]
    },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
        children: [
            {
                path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"]
            },
            {
                path: 'sms-log', component: _sms_log_sms_log_component__WEBPACK_IMPORTED_MODULE_4__["SmsLogComponent"]
            },
            {
                path: 'recoding', component: _recoding_recoding_component__WEBPACK_IMPORTED_MODULE_5__["RecodingComponent"]
            },
            {
                path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
            },
            {
                path: 'gps-list', component: _gps_list_gps_list_component__WEBPACK_IMPORTED_MODULE_7__["GpsListComponent"]
            },
            {
                path: 'contact-list', component: _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_8__["ContactListComponent"]
            },
            {
                path: 'calls-log', component: _calllog_calllog_component__WEBPACK_IMPORTED_MODULE_9__["CalllogComponent"]
            },
            {
                path: 'photos', component: _photos_photos_component__WEBPACK_IMPORTED_MODULE_10__["PhotosComponent"]
            },
            {
                path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]
            }
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    /*   title = 'nebular'; */
    constructor( /* private sidebarService: NbSidebarService */) {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _calllog_calllog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calllog/calllog.component */ "./src/app/calllog/calllog.component.ts");
/* harmony import */ var _recoding_recoding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recoding/recoding.component */ "./src/app/recoding/recoding.component.ts");
/* harmony import */ var _sms_log_sms_log_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sms-log/sms-log.component */ "./src/app/sms-log/sms-log.component.ts");
/* harmony import */ var _gps_list_gps_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gps-list/gps-list.component */ "./src/app/gps-list/gps-list.component.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/contact-list/contact-list.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var angular2_csv__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-csv */ "./node_modules/angular2-csv/fesm2015/angular2-csv.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/request-password/request-password.component */ "./src/app/auth/request-password/request-password.component.ts");
/* harmony import */ var _landing_pages_landing_pages_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./landing-pages/landing-pages.component */ "./src/app/landing-pages/landing-pages.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _calllog_calllog_component__WEBPACK_IMPORTED_MODULE_10__["CalllogComponent"],
            _recoding_recoding_component__WEBPACK_IMPORTED_MODULE_11__["RecodingComponent"],
            _sms_log_sms_log_component__WEBPACK_IMPORTED_MODULE_12__["SmsLogComponent"],
            _gps_list_gps_list_component__WEBPACK_IMPORTED_MODULE_13__["GpsListComponent"],
            _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__["ContactListComponent"],
            _photos_photos_component__WEBPACK_IMPORTED_MODULE_15__["PhotosComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
            _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__["AuthComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_23__["SignupComponent"],
            _auth_request_password_request_password_component__WEBPACK_IMPORTED_MODULE_24__["RequestPasswordComponent"],
            _landing_pages_landing_pages_component__WEBPACK_IMPORTED_MODULE_25__["LandingPagesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbMenuModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbThemeModule"].forRoot({ name: 'dark' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSidebarModule"].forRoot(),
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrModule"].forRoot(),
            angular2_csv__WEBPACK_IMPORTED_MODULE_18__["Angular2CsvModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbChatModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbRouteTabsetModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTabsetModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_27__["NbAuthModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AuthComponent = class AuthComponent {
    constructor(location) {
        this.location = location;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authenticated = false;
        this.token = '';
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
        return false;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
AuthComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
        template: `
  <nb-layout>
    <nb-layout-column>
      <nb-card>
        <nb-card-header>
          <nav class="navigation">
            <a href="#" (click)="back()" class="link back-link" aria-label="Back">
              <nb-icon icon="arrow-back"></nb-icon>
            </a>
          </nav>
        </nb-card-header>
        <nb-card-body>
          <nb-auth-block>
            <router-outlet></router-outlet>
          </nb-auth-block>
        </nb-card-body>
      </nb-card>
    </nb-layout-column>
  </nb-layout>
`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginComponent = class LoginComponent {
    constructor(cd, router) {
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.submitted = false;
        //socialLinks: NbAuthSocialLink[] = [];
        this.rememberMe = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.strategy = this.getConfigValue('forms.login.strategy');
        //  this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.rememberMe = this.getConfigValue('forms.login.rememberMe');
    }
    ngOnInit() {
    }
    getConfigValue(key) {
        //return getDeepFromObject(this.options, key, null);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/request-password/request-password.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/auth/request-password/request-password.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .form-group:last-of-type {\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXF1ZXN0LXBhc3N3b3JkL0o6XFxuZWJ1bGFzXFxuZWJ1bGFyL3NyY1xcYXBwXFxhdXRoXFxyZXF1ZXN0LXBhc3N3b3JkXFxyZXF1ZXN0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL3JlcXVlc3QtcGFzc3dvcmQvcmVxdWVzdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLG1CQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlcXVlc3QtcGFzc3dvcmQvcmVxdWVzdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5mb3JtLWdyb3VwOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICB9XHJcbiAgfSIsIjpob3N0IC5mb3JtLWdyb3VwOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/request-password/request-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/auth/request-password/request-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: RequestPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPasswordComponent", function() { return RequestPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RequestPasswordComponent = class RequestPasswordComponent {
    constructor() {
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
    }
    ngOnInit() {
    }
    /* resetPass(): void {
      this.errors = this.messages = [];
      this.submitted = true;
  
      this.service.resetPassword(this.strategy, this.user).subscribe((result: NbAuthResult) => {
        this.submitted = false;
        if (result.isSuccess()) {
          this.messages = result.getMessages();
        } else {
          this.errors = result.getErrors();
        }
  
        const redirect = result.getRedirect();
        if (redirect) {
          setTimeout(() => {
            return this.router.navigateByUrl(redirect);
          }, this.redirectDelay);
        }
        this.cd.detectChanges();
      });
    } */
    getConfigValue(key) {
        // return getDeepFromObject(this.options, key, null);
    }
};
RequestPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-request-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/request-password/request-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-password.component.scss */ "./src/app/auth/request-password/request-password.component.scss")).default]
    })
], RequestPasswordComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SignupComponent = class SignupComponent {
    //socialLinks: NbAuthSocialLink[] = [];
    constructor(cd, router) {
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.strategy = this.getConfigValue('forms.register.strategy');
        // this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    ngOnInit() {
    }
    getConfigValue(key) {
        //return getDeepFromObject(this.options, key, null);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/call-utils.service.ts":
/*!***************************************!*\
  !*** ./src/app/call-utils.service.ts ***!
  \***************************************/
/*! exports provided: CallUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallUtilsService", function() { return CallUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");



let CallUtilsService = class CallUtilsService {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    showToast(position, status, message) {
        if (status == null) {
            status = "success";
        }
        if (message == null) {
            message = "Ghost calling";
        }
        if (position == null) {
            position = "top-right";
        }
        this.toastrService.show(status, message, { position, status });
    }
};
CallUtilsService.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"] }
];
CallUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CallUtilsService);



/***/ }),

/***/ "./src/app/calllog/calllog.component.scss":
/*!************************************************!*\
  !*** ./src/app/calllog/calllog.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGxsb2cvY2FsbGxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/calllog/calllog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/calllog/calllog.component.ts ***!
  \**********************************************/
/*! exports provided: CalllogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalllogComponent", function() { return CalllogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _call_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../call-utils.service */ "./src/app/call-utils.service.ts");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular7-csv/dist/Angular-csv */ "./node_modules/angular7-csv/dist/Angular-csv.js");
/* harmony import */ var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_3__);




let CalllogComponent = class CalllogComponent {
    constructor(callUtilsService) {
        this.callUtilsService = callUtilsService;
        this.index = 0;
        this.options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: false,
            headers: [],
            showTitle: true,
            title: 'asfasf',
            useBom: false,
            removeNewLines: true,
            keys: ['approved', 'age', 'name']
        };
        this.datas = [
            {
                name: "Test 1",
                age: 13,
                average: 8.2,
                approved: true,
                description: "using 'Content here, content here' "
            },
            {
                name: 'Test 2',
                age: 11,
                average: 8.2,
                approved: true,
                description: "using 'Content here, content here' "
            },
            {
                name: 'Test 4',
                age: 10,
                average: 8.2,
                approved: true,
                description: "using 'Content here, content here' "
            },
        ];
        this.settings = {
            actions: false,
            columns: {
                id: {
                    title: 'Mobile No',
                    filter: false
                },
                type: {
                    title: 'Type',
                    filter: false
                },
                name: {
                    title: 'Contact Name',
                    filter: false
                },
                time: {
                    title: 'Time',
                    filter: false
                },
                totalDurationa: {
                    title: 'Total Duration',
                    filter: false
                },
            }
        };
        this.data = [
            {
                id: 1,
                type: "Miss called",
                name: "KamleshKumar",
                time: "10-dec-2019 10:10pm",
                totalDurationa: "30 Mins",
            },
            {
                id: 2,
                type: "Received called",
                name: "Maheshbhai",
                time: "19-dec-2019 12:50pm",
                totalDurationa: "20 Mins"
            },
            // ... list of items
            {
                id: 11,
                type: "Dial called",
                name: "Zalak",
                time: "31-dec-2019 1:50pm",
                totalDurationa: "10 Mins"
            }
        ];
    }
    ngOnInit() {
    }
    downloadExcel() {
        new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_3__["AngularCsv"](this.data, "HolidayList", this.options);
    }
    refresh() {
        this.callUtilsService.showToast(null, null, "Refreshing call list...");
    }
    showToast(position, status, message) {
        throw new Error("Method not implemented.");
    }
    filter() {
        throw new Error("Method not implemented.");
    }
};
CalllogComponent.ctorParameters = () => [
    { type: _call_utils_service__WEBPACK_IMPORTED_MODULE_2__["CallUtilsService"] }
];
CalllogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calllog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calllog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calllog/calllog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calllog.component.scss */ "./src/app/calllog/calllog.component.scss")).default]
    })
], CalllogComponent);



/***/ }),

/***/ "./src/app/contact-list/contact-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactListComponent = class ContactListComponent {
    constructor() {
        this.users = [
            { name: 'Carla Espinosa', number: '+91-9662705684' },
            { name: 'Bob Kelso', number: '+91-9662705456' },
            { name: 'Janitor', number: '+91-9662705852' },
            { name: 'Perry Cox', number: '+91-9662705951' },
            { name: 'Ben Sullivan', number: '+91-9662705753' },
        ];
    }
    ngOnInit() {
    }
};
ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-list/contact-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-list.component.scss */ "./src/app/contact-list/contact-list.component.scss")).default]
    })
], ContactListComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");



let DashboardComponent = class DashboardComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.title = 'nebular';
        this.items = [
            {
                title: 'Call Log',
                icon: 'phone-call-outline',
                link: 'calls-log',
            },
            {
                title: 'Recoding',
                icon: 'mic-outline',
                link: 'recoding',
            },
            {
                title: 'SMS Log',
                icon: 'email-outline',
                link: 'sms-log',
            },
            {
                title: 'Browser History',
                icon: 'browser-outline',
                link: [],
            },
            {
                title: 'GPS',
                icon: 'pin-outline',
                link: 'gps-list',
            },
            {
                title: 'Contacts',
                icon: 'people-outline',
                link: 'contact-list',
            },
            {
                title: 'Photos',
                icon: 'camera-outline',
                link: 'photos',
            },
            {
                title: 'Profile',
                icon: 'person-outline',
                link: 'profile',
            },
            {
                title: 'Change Password',
                icon: 'lock-outline',
                link: 'forgot-password',
            },
            {
                title: 'Privacy Policy',
                icon: { icon: 'checkmark-outline', pack: 'eva' },
                link: [],
            },
            {
                title: 'Logout',
                icon: 'unlock-outline',
                link: 'logout',
            },
        ];
    }
    toggle() {
        this.sidebarService.toggle(true, 'left');
    }
    toggleCompact() {
        this.sidebarService.toggle(true, 'right');
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor() {
        this.bellIconConfig = { icon: 'bell-outline', pack: 'eva' };
    }
    ngOnInit() {
    }
};
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/gps-list/gps-list.component.scss":
/*!**************************************************!*\
  !*** ./src/app/gps-list/gps-list.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dwcy1saXN0L2dwcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/gps-list/gps-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/gps-list/gps-list.component.ts ***!
  \************************************************/
/*! exports provided: GpsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsListComponent", function() { return GpsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GpsListComponent = class GpsListComponent {
    constructor() { }
    ngOnInit() {
    }
};
GpsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gps-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gps-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gps-list/gps-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gps-list.component.scss */ "./src/app/gps-list/gps-list.component.scss")).default]
    })
], GpsListComponent);



/***/ }),

/***/ "./src/app/landing-pages/landing-pages.component.scss":
/*!************************************************************!*\
  !*** ./src/app/landing-pages/landing-pages.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZXMvbGFuZGluZy1wYWdlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/landing-pages/landing-pages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/landing-pages/landing-pages.component.ts ***!
  \**********************************************************/
/*! exports provided: LandingPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagesComponent", function() { return LandingPagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingPagesComponent = class LandingPagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingPagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-pages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-pages/landing-pages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-pages.component.scss */ "./src/app/landing-pages/landing-pages.component.scss")).default]
    })
], LandingPagesComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoutComponent = class LogoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.scss */ "./src/app/logout/logout.component.scss")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/photos/photos.component.scss":
/*!**********************************************!*\
  !*** ./src/app/photos/photos.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3Rvcy9waG90b3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/photos/photos.component.ts":
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotosComponent = class PhotosComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/photos/photos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photos.component.scss */ "./src/app/photos/photos.component.scss")).default]
    })
], PhotosComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/recoding/recoding.component.scss":
/*!**************************************************!*\
  !*** ./src/app/recoding/recoding.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29kaW5nL3JlY29kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/recoding/recoding.component.ts":
/*!************************************************!*\
  !*** ./src/app/recoding/recoding.component.ts ***!
  \************************************************/
/*! exports provided: RecodingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecodingComponent", function() { return RecodingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecodingComponent = class RecodingComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecodingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recoding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recoding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recoding/recoding.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recoding.component.scss */ "./src/app/recoding/recoding.component.scss")).default]
    })
], RecodingComponent);



/***/ }),

/***/ "./src/app/sms-log/sms-log.component.scss":
/*!************************************************!*\
  !*** ./src/app/sms-log/sms-log.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ntcy1sb2cvc21zLWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sms-log/sms-log.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sms-log/sms-log.component.ts ***!
  \**********************************************/
/*! exports provided: SmsLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsLogComponent", function() { return SmsLogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SmsLogComponent = class SmsLogComponent {
    constructor() {
        this.users = [
            { name: 'Carla Espinosa', number: '+91-9662705684' },
            { name: 'Bob Kelso', number: '+91-9662705456' },
            { name: 'Janitor', number: '+91-9662705852' },
            { name: 'Perry Cox', number: '+91-9662705951' },
            { name: 'Ben Sullivan', number: '+91-9662705753' },
            { name: 'Carla Espinosa', number: '+91-9662705684' },
            { name: 'Bob Kelso', number: '+91-9662705456' },
            { name: 'Janitor', number: '+91-9662705852' },
            { name: 'Perry Cox', number: '+91-9662705951' },
            { name: 'Ben Sullivan', number: '+91-9662705753' }, { name: 'Carla Espinosa', number: '+91-9662705684' },
            { name: 'Bob Kelso', number: '+91-9662705456' },
            { name: 'Janitor', number: '+91-9662705852' },
            { name: 'Perry Cox', number: '+91-9662705951' },
            { name: 'Ben Sullivan', number: '+91-9662705753' },
        ];
        this.chats = [
            {
                status: 'danger',
                title: 'Messages',
                messages: [
                    {
                        text: 'Danger!',
                        date: new Date(),
                        reply: false,
                        name: 'Bot',
                    },
                    {
                        text: 'Danger!',
                        date: new Date(),
                        reply: true,
                        name: 'Bot'
                    },
                    {
                        text: 'Danger!',
                        date: new Date(),
                        reply: true,
                        name: 'Bot'
                    }, {
                        text: 'Danger!',
                        date: new Date(),
                        reply: true,
                        name: 'Bot'
                    }, {
                        text: 'Danger!',
                        date: new Date(),
                        reply: true,
                        name: 'Bot'
                    }, {
                        text: 'Danger!',
                        date: new Date(),
                        reply: true,
                        name: 'Bot'
                    },
                ],
            }
        ];
    }
    ngOnInit() {
    }
    sendMessage(messages, event) {
        messages.push({
            text: event.message,
            date: new Date(),
            reply: true,
            user: {
                name: 'Jonh Doe',
                avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
            },
        });
    }
};
SmsLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sms-log',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sms-log.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sms-log/sms-log.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sms-log.component.scss */ "./src/app/sms-log/sms-log.component.scss")).default]
    })
], SmsLogComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! J:\nebulas\nebular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map