(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "jzRL":
/*!***********************************************!*\
  !*** ./src/app/core/player/player.service.ts ***!
  \***********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let PlayerService = class PlayerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.playerDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        window.addEventListener('message', this.handleNativeEvent.bind(this));
    }
    getPlayerData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.httpClient.post('https://bizman/getPlayerData', {}).toPromise().then(data => {
                return this.playerDataSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();
            });
        });
    }
    handleNativeEvent(event) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch ((_a = event === null || event === void 0 ? void 0 : event.data) === null || _a === void 0 ? void 0 : _a.message) {
                case "rz://bizman/player/data":
                    this.playerDataSubject.next(event.data.data);
                    console.log('got player', event.data.data);
                    break;
                default:
                    break;
            }
        });
    }
};
PlayerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlayerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], PlayerService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map