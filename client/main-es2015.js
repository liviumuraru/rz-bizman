(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\main\Desktop\sentry-rp\server-files\sentryrp-01.base\resources\[gameplay]\bizman\bizman-nui\bizman\src\main.ts */"zUnb");


/***/ }),

/***/ "1wu+":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/loader/loader.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner [diameter]=\"diameter\"></mat-spinner>\r\n<section class=\"loader__overlay\"></section>");

/***/ }),

/***/ "7Tzs":
/*!*************************************!*\
  !*** ./src/app/root.component.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bizman__page {\n  height: 95%;\n  padding: 1%;\n  display: flex;\n  flex-direction: column;\n}\n.bizman__page .content {\n  padding: 15px;\n  background-color: #ffffff7a;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.bizman__page .header__toolbar__row {\n  justify-content: space-between;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxccm9vdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUlZO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0FBRmhCIiwiZmlsZSI6InJvb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYml6bWFuX19wYWdlIHtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmN2E7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgJl9fdG9vbGJhciB7XHJcbiAgICAgICAgICAgICZfX3JvdyB7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "8STC":
/*!********************************!*\
  !*** ./src/app/root.module.ts ***!
  \********************************/
/*! exports provided: RootModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootModule", function() { return RootModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _root_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root.routing.module */ "uzt3");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.component */ "n0Po");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/loader/loader.module */ "r42I");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");










let RootModule = class RootModule {
};
RootModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _root_routing_module__WEBPACK_IMPORTED_MODULE_2__["RootRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _core_loader_loader_module__WEBPACK_IMPORTED_MODULE_6__["LoaderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"]
        ],
        bootstrap: [_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]]
    })
], RootModule);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "QfC1":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/root.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"shouldShowUi()\" class=\"bizman__page\">\r\n    <section class=\"header\">\r\n        <mat-toolbar class=\"header__toolbar\" color=\"primary\">\r\n            <mat-toolbar-row class=\"header__toolbar__row\">\r\n                <section class=\"header__toolbar__row__actions header__toolbar__row__actions--left\">\r\n                    <button (click)=\"goBack()\" mat-icon-button class=\"icon-back\">\r\n                        <mat-icon>arrow_back</mat-icon>\r\n                    </button>\r\n                </section>\r\n                <section class=\"title\">State of San Andreas</section>\r\n                <!-- <span class=\"spacer\"></span> -->\r\n                <section class=\"header__toolbar__row__actions header__toolbar__row__actions--right\">\r\n                    <button (click)=\"closeUi()\" mat-icon-button class=\"icon-close\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                </section>\r\n            </mat-toolbar-row>\r\n        </mat-toolbar>\r\n    </section>\r\n    <section class=\"content\">\r\n        <loader *ngIf=\"showLoader\"></loader>\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n</section>");

/***/ }),

/***/ "Su33":
/*!*************************************************!*\
  !*** ./src/app/core/routing/routing.service.ts ***!
  \*************************************************/
/*! exports provided: RouterCommService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterCommService", function() { return RouterCommService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



let RouterCommService = class RouterCommService {
    constructor() {
        this.goBackSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.goHomeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    goBack() {
        this.goBackSubject.next();
    }
    goHome() {
        this.goHomeSubject.next();
    }
};
RouterCommService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], RouterCommService);



/***/ }),

/***/ "aPAT":
/*!*************************************************!*\
  !*** ./src/app/core/loader/loader.component.ts ***!
  \*************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loader.component.html */ "1wu+");
/* harmony import */ var _loader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component.scss */ "tHus");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LoaderComponent = class LoaderComponent {
    constructor() {
        this.diameter = 40;
    }
};
LoaderComponent.ctorParameters = () => [];
LoaderComponent.propDecorators = {
    diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['diameter',] }]
};
LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'loader',
        template: _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoaderComponent);



/***/ }),

/***/ "n0Po":
/*!***********************************!*\
  !*** ./src/app/root.component.ts ***!
  \***********************************/
/*! exports provided: NativeMessageType, sleepPromise, RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeMessageType", function() { return NativeMessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepPromise", function() { return sleepPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_root_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./root.component.html */ "QfC1");
/* harmony import */ var _root_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root.component.scss */ "7Tzs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_routing_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/routing/routing.service */ "Su33");







var NativeMessageType;
(function (NativeMessageType) {
    NativeMessageType["TOGGLE_UI"] = "rz://gameplay/bizman/toggleDisplay";
})(NativeMessageType || (NativeMessageType = {}));
function sleepPromise(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
let RootComponent = class RootComponent {
    constructor(routerCommService, httpClient, router, route) {
        this.routerCommService = routerCommService;
        this.httpClient = httpClient;
        this.router = router;
        this.route = route;
        this.showLoader = true;
        this.showUI = false;
        window.addEventListener('message', this.handleNativeEvent.bind(this));
        window.addEventListener('keyup', this.handleKeyupEvent.bind(this));
        this.routerCommService.goHomeSubject.subscribe(_ => {
            this.router.navigate(['welcome']);
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                this.showLoader = true;
            }
            else {
                this.showLoader = false;
            }
        }, (_err) => {
            this.showLoader = false;
        });
        this.showLoader = false;
    }
    goBack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.routerCommService.goBack();
        });
    }
    closeUi() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showUI = false;
            yield this.httpClient.post('https://bizman/onUIToggled', JSON.stringify({
                showUI: this.showUI
            })).toPromise();
            this.router.navigate(['welcome']);
        });
    }
    handleKeyupEvent(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (event.key === 'Escape') {
                yield this.closeUi();
            }
        });
    }
    handleNativeEvent(event) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch ((_a = event === null || event === void 0 ? void 0 : event.data) === null || _a === void 0 ? void 0 : _a.message) {
                case NativeMessageType.TOGGLE_UI:
                    this.showUI = !this.showUI;
                    yield this.httpClient.post('https://bizman/onUIToggled', JSON.stringify({
                        showUI: this.showUI
                    })).toPromise();
                    if (this.showUI) {
                        yield this.router.navigate(['welcome']);
                    }
                    break;
                default:
                    break;
            }
        });
    }
    shouldShowUi() {
        return this.showUI;
    }
};
RootComponent.ctorParameters = () => [
    { type: _core_routing_routing_service__WEBPACK_IMPORTED_MODULE_6__["RouterCommService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
RootComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-root',
        template: _raw_loader_root_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_root_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RootComponent);



/***/ }),

/***/ "r42I":
/*!**********************************************!*\
  !*** ./src/app/core/loader/loader.module.ts ***!
  \**********************************************/
/*! exports provided: LoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderModule", function() { return LoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.component */ "aPAT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





let LoaderModule = class LoaderModule {
};
LoaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
        ],
        exports: [
            _loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]
        ]
    })
], LoaderModule);



/***/ }),

/***/ "tHus":
/*!***************************************************!*\
  !*** ./src/app/core/loader/loader.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-spinner {\n  position: absolute;\n  top: calc(50% - 20px);\n  left: calc(50% - 20px);\n}\n\n.loader__overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  background: #232323;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xyXG59XHJcblxyXG4ubG9hZGVyX19vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG59Il19 */");

/***/ }),

/***/ "uzt3":
/*!****************************************!*\
  !*** ./src/app/root.routing.module.ts ***!
  \****************************************/
/*! exports provided: RootRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootRoutingModule", function() { return RootRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'welcome',
                loadChildren: () => Promise.all(/*! import() | modules-welcome-welcome-module */[__webpack_require__.e("default~modules-organisation-organisation-module~modules-organisation-requests-organisation-request-~c587f394"), __webpack_require__.e("common"), __webpack_require__.e("modules-welcome-welcome-module")]).then(__webpack_require__.bind(null, /*! ./modules/welcome/welcome.module */ "dODg")).then(module => module.WelcomeModule),
            },
            {
                path: 'business',
                loadChildren: () => Promise.all(/*! import() | modules-organisation-organisation-module */[__webpack_require__.e("default~modules-organisation-organisation-module~modules-organisation-requests-organisation-request-~c587f394"), __webpack_require__.e("default~modules-organisation-organisation-module~modules-organisation-requests-organisation-request-module"), __webpack_require__.e("modules-organisation-organisation-module")]).then(__webpack_require__.bind(null, /*! ./modules/organisation/organisation.module */ "LxmL")).then(module => module.OrganisationModule)
            },
            //TODO change business to organisation
            {
                path: 'organisation/requests',
                loadChildren: () => Promise.all(/*! import() | modules-organisation-requests-organisation-request-module */[__webpack_require__.e("default~modules-organisation-organisation-module~modules-organisation-requests-organisation-request-~c587f394"), __webpack_require__.e("default~modules-organisation-organisation-module~modules-organisation-requests-organisation-request-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-organisation-requests-organisation-request-module")]).then(__webpack_require__.bind(null, /*! ./modules/organisation-requests/organisation-request.module */ "IrdP")).then(module => module.OrganisationRequestModule)
            },
            {
                path: 'organisation',
                redirectTo: 'business',
                pathMatch: 'full'
            }
        ]
    }
];
let RootRoutingModule = class RootRoutingModule {
};
RootRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RootRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_root_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/root.module */ "8STC");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_root_module__WEBPACK_IMPORTED_MODULE_2__["RootModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map