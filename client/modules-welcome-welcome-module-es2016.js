(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-welcome-welcome-module"],{

/***/ "IghK":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/welcome/welcome.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"card welcome-card\">\r\n    <loader *ngIf=\"showLoader\"></loader>\r\n\r\n    <section class=\"welcome-card__info-panel\" *ngIf=\"characterData\">\r\n        <section class=\"welcome-card__info-panel__text welcome-card__info-panel__text--large\">\r\n            Hello, <b>{{characterData.firstName}} {{characterData.lastName}} ({{characterData.id}})</b>\r\n        </section>\r\n        <mat-divider class=\"content-divider content-divider-horizontal\"></mat-divider>\r\n        <section class=\"welcome-card__info-panel__text\">\r\n            This application servers as a central point of information upon public organisations and also as an aggregator of your own organisations or organisations you are a part of.\r\n        </section>\r\n        <section class=\"welcome-card__info-panel__text\">\r\n            Below you will find a list of actions possible to you, depending on your current state of employment, your organisations and public information disclosed by the state.\r\n        </section>\r\n        <section class=\"welcome-card__info-panel__text\">\r\n            <b>NOTICE:</b> Please understand that this is work in progress, and thus you might find issues and strange, unexpected behaviour. Not all functionality is implemented yet. Make sure to report a bug if you spot it. If you notice any areas where improvements could be made within this application, please e-mail us on Discordia. Thanks!\r\n        </section>\r\n        <mat-divider class=\"content-divider content-divider-horizontal\" *ngIf=\"characterData.roles\"></mat-divider>\r\n        <section *ngIf=\"characterData.roles\" class=\"welcome-card__info-panel__roles welcome-card__info-panel__text\">\r\n          <p>Your roles:</p>\r\n          <mat-chip-list>\r\n            <mat-chip *ngFor=\"let role of characterData.roles\">\r\n              {{role.name}} - {{role.description}}\r\n            </mat-chip>\r\n          </mat-chip-list>\r\n      </section>\r\n      <mat-divider class=\"content-divider content-divider-horizontal\" *ngIf=\"characterData.roles\"></mat-divider>\r\n      <section>\r\n        DEV ONLY CHARACTER CHANGE:\r\n      </section>\r\n      <mat-select (selectionChange)=\"onChangeCharacterEvent($event)\" [(value)]=\"selectedCharId\">\r\n        <mat-option *ngFor=\"let character of characters\" [value]=\"character.id\">\r\n            {{getCharacterDisplayName(character)}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </section>\r\n\r\n    <mat-divider class=\"content-divider content-divider-horizontal\" *ngIf=\"characterData\"></mat-divider>\r\n\r\n    <mat-card-actions class=\"actions\" *ngIf=\"characterData\">\r\n        <section class=\"actions-card-row\">\r\n            <mat-card (click)=\"goToCheckLicenseApplications()\" matRipple class=\"card action-card\" matBadge=\"7\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Organisation license applications</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                  <p>\r\n                    See, comment, approve or deny business applications filed by citizens of San Andreas. Requires role: Judge. You see this because you are a Judge. \r\n                  </p>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n            <mat-card (click)=\"goToCheckLawsuits()\" matRipple class=\"card action-card\" matBadge=\"7\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Lawsuits</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                  <p>\r\n                    See, comment, schedule or share information upon any lawsuit. Requires role: Judge. You see this because you are a Judge. \r\n                  </p>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n            <mat-card (click)=\"goToSelfOrganisations()\" matRipple class=\"card action-card\" matBadge=\"2\">\r\n                <mat-card-header>\r\n                  <mat-card-title>My Organisations</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                  <p>\r\n                    Check the status of organisations you are a part of and perform actions on them based on your roles in those organisations.\r\n                  </p>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n            <mat-card (click)=\"goToSelfOrganisationApplications()\" matRipple class=\"card action-card\" matBadge=\"5\">\r\n                <mat-card-header>\r\n                  <mat-card-title>My organisation requests</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                  <p>\r\n                    Start the process of creating a new organisation or check on your existing organisation requests.\r\n                  </p>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </section>\r\n        <section class=\"actions-card-row\">\r\n            <mat-card (click)=\"goToSelfLawsuits()\" matRipple class=\"card action-card\" matBadge=\"6\">\r\n                <mat-card-header>\r\n                  <mat-card-title>My lawsuits</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                  <p>\r\n                    Check lawsuits that you are a part of as any role, or file a new lawsuit\r\n                  </p>\r\n                </mat-card-content>\r\n            </mat-card>\r\n\r\n            <mat-card (click)=\"goToSelfInformation()\" matRipple class=\"card action-card\">\r\n                <mat-card-header>\r\n                  <mat-card-title>My citizen information</mat-card-title>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                  <p>\r\n                    Check state information about yourself\r\n                  </p>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </section>\r\n    </mat-card-actions>\r\n</mat-card>");

/***/ }),

/***/ "NvpJ":
/*!******************************************************!*\
  !*** ./src/app/modules/welcome/welcome.component.ts ***!
  \******************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./welcome.component.html */ "IghK");
/* harmony import */ var _welcome_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component.scss */ "rtmq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_player_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/player/player.service */ "jzRL");






let WelcomeComponent = class WelcomeComponent {
    constructor(playerService, router, route) {
        this.playerService = playerService;
        this.router = router;
        this.route = route;
        this.showLoader = true;
        this.characters = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //TODO get active character
            this.player = yield this.playerService.getPlayerData();
            this.characters = this.player.characters;
            yield this.changeCharacter(this.characters[0].id);
            this.showLoader = false;
        });
    }
    changeCharacter(characterId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.characterData = this.playerService.changeActiveCharacter(characterId);
            this.selectedCharId = this.characterData.id;
        });
    }
    goToCheckLicenseApplications() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['organisation/requests', 'management']);
        });
    }
    getCharacterDisplayName(character) {
        return `${character.firstName} ${character.lastName} (${character.id})`;
    }
    onChangeCharacterEvent(characterChangeEvent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showLoader = true;
            yield this.changeCharacter(characterChangeEvent.value);
            this.showLoader = false;
        });
    }
    goToCheckLawsuits() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    goToSelfOrganisations() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['business']);
        });
    }
    goToSelfOrganisationApplications() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.router.navigate(['organisation/requests']);
        });
    }
    goToSelfLawsuits() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    goToSelfInformation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: src_app_core_player_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'welcome',
        template: _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_welcome_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WelcomeComponent);



/***/ }),

/***/ "TU8p":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js ***!
  \***********************************************************************/
/*! exports provided: MatBadge, MatBadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadge", function() { return MatBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function() { return MatBadgeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let nextId = 0;
// Boilerplate for applying mixins to MatBadge.
/** @docs-private */
class MatBadgeBase {
}
const _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(MatBadgeBase);
/** Directive to display a text badge. */
class MatBadge extends _MatBadgeMixinBase {
    constructor(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
        super();
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._ariaDescriber = _ariaDescriber;
        this._renderer = _renderer;
        this._animationMode = _animationMode;
        /** Whether the badge has any content. */
        this._hasContent = false;
        this._color = 'primary';
        this._overlap = true;
        /**
         * Position the badge should reside.
         * Accepts any combination of 'above'|'below' and 'before'|'after'
         */
        this.position = 'above after';
        /** Size of the badge. Can be 'small', 'medium', or 'large'. */
        this.size = 'medium';
        /** Unique id for the badge */
        this._id = nextId++;
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            const nativeElement = _elementRef.nativeElement;
            if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
                throw Error('matBadge must be attached to an element node.');
            }
        }
    }
    /** The color of the badge. Can be `primary`, `accent`, or `warn`. */
    get color() { return this._color; }
    set color(value) {
        this._setColor(value);
        this._color = value;
    }
    /** Whether the badge should overlap its contents or not */
    get overlap() { return this._overlap; }
    set overlap(val) {
        this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val);
    }
    /** Message used to describe the decorated element via aria-describedby */
    get description() { return this._description; }
    set description(newDescription) {
        if (newDescription !== this._description) {
            const badgeElement = this._badgeElement;
            this._updateHostAriaDescription(newDescription, this._description);
            this._description = newDescription;
            if (badgeElement) {
                newDescription ? badgeElement.setAttribute('aria-label', newDescription) :
                    badgeElement.removeAttribute('aria-label');
            }
        }
    }
    /** Whether the badge is hidden. */
    get hidden() { return this._hidden; }
    set hidden(val) {
        this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val);
    }
    /** Whether the badge is above the host or not */
    isAbove() {
        return this.position.indexOf('below') === -1;
    }
    /** Whether the badge is after the host or not */
    isAfter() {
        return this.position.indexOf('before') === -1;
    }
    ngOnChanges(changes) {
        const contentChange = changes['content'];
        if (contentChange) {
            const value = contentChange.currentValue;
            this._hasContent = value != null && `${value}`.trim().length > 0;
            this._updateTextContent();
        }
    }
    ngOnDestroy() {
        const badgeElement = this._badgeElement;
        if (badgeElement) {
            if (this.description) {
                this._ariaDescriber.removeDescription(badgeElement, this.description);
            }
            // When creating a badge through the Renderer, Angular will keep it in an index.
            // We have to destroy it ourselves, otherwise it'll be retained in memory.
            if (this._renderer.destroyNode) {
                this._renderer.destroyNode(badgeElement);
            }
        }
    }
    /**
     * Gets the element into which the badge's content is being rendered.
     * Undefined if the element hasn't been created (e.g. if the badge doesn't have content).
     */
    getBadgeElement() {
        return this._badgeElement;
    }
    /** Injects a span element into the DOM with the content. */
    _updateTextContent() {
        if (!this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
        }
        else {
            this._badgeElement.textContent = this._stringifyContent();
        }
        return this._badgeElement;
    }
    /** Creates the badge element */
    _createBadgeElement() {
        const badgeElement = this._renderer.createElement('span');
        const activeClass = 'mat-badge-active';
        const contentClass = 'mat-badge-content';
        // Clear any existing badges which may have persisted from a server-side render.
        this._clearExistingBadges(contentClass);
        badgeElement.setAttribute('id', `mat-badge-content-${this._id}`);
        badgeElement.classList.add(contentClass);
        badgeElement.textContent = this._stringifyContent();
        if (this._animationMode === 'NoopAnimations') {
            badgeElement.classList.add('_mat-animation-noopable');
        }
        if (this.description) {
            badgeElement.setAttribute('aria-label', this.description);
        }
        this._elementRef.nativeElement.appendChild(badgeElement);
        // animate in after insertion
        if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => {
                    badgeElement.classList.add(activeClass);
                });
            });
        }
        else {
            badgeElement.classList.add(activeClass);
        }
        return badgeElement;
    }
    /** Sets the aria-label property on the element */
    _updateHostAriaDescription(newDescription, oldDescription) {
        // ensure content available before setting label
        const content = this._updateTextContent();
        if (oldDescription) {
            this._ariaDescriber.removeDescription(content, oldDescription);
        }
        if (newDescription) {
            this._ariaDescriber.describe(content, newDescription);
        }
    }
    /** Adds css theme class given the color to the component host */
    _setColor(colorPalette) {
        if (colorPalette !== this._color) {
            const classList = this._elementRef.nativeElement.classList;
            if (this._color) {
                classList.remove(`mat-badge-${this._color}`);
            }
            if (colorPalette) {
                classList.add(`mat-badge-${colorPalette}`);
            }
        }
    }
    /** Clears any existing badges that might be left over from server-side rendering. */
    _clearExistingBadges(cssClass) {
        const element = this._elementRef.nativeElement;
        let childCount = element.children.length;
        // Use a reverse while, because we'll be removing elements from the list as we're iterating.
        while (childCount--) {
            const currentChild = element.children[childCount];
            if (currentChild.classList.contains(cssClass)) {
                element.removeChild(currentChild);
            }
        }
    }
    /** Gets the string representation of the badge content. */
    _stringifyContent() {
        // Convert null and undefined to an empty string which is consistent
        // with how Angular handles them in inside template interpolations.
        const content = this.content;
        return content == null ? '' : `${content}`;
    }
}
MatBadge.ɵfac = function MatBadge_Factory(t) { return new (t || MatBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8)); };
MatBadge.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatBadge, selectors: [["", "matBadge", ""]], hostAttrs: [1, "mat-badge"], hostVars: 20, hostBindings: function MatBadge_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx._hasContent)("mat-badge-disabled", ctx.disabled);
    } }, inputs: { disabled: ["matBadgeDisabled", "disabled"], position: ["matBadgePosition", "position"], size: ["matBadgeSize", "size"], color: ["matBadgeColor", "color"], overlap: ["matBadgeOverlap", "overlap"], description: ["matBadgeDescription", "description"], hidden: ["matBadgeHidden", "hidden"], content: ["matBadge", "content"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
MatBadge.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"],] }] }
];
MatBadge.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matBadgeColor',] }],
    overlap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matBadgeOverlap',] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matBadgePosition',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matBadge',] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matBadgeDescription',] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matBadgeSize',] }],
    hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matBadgeHidden',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatBadge, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matBadge]',
                inputs: ['disabled: matBadgeDisabled'],
                host: {
                    'class': 'mat-badge',
                    '[class.mat-badge-overlap]': 'overlap',
                    '[class.mat-badge-above]': 'isAbove()',
                    '[class.mat-badge-below]': '!isAbove()',
                    '[class.mat-badge-before]': '!isAfter()',
                    '[class.mat-badge-after]': 'isAfter()',
                    '[class.mat-badge-small]': 'size === "small"',
                    '[class.mat-badge-medium]': 'size === "medium"',
                    '[class.mat-badge-large]': 'size === "large"',
                    '[class.mat-badge-hidden]': 'hidden || !_hasContent',
                    '[class.mat-badge-disabled]': 'disabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["AriaDescriber"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgePosition']
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeSize']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeColor']
        }], overlap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeOverlap']
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeDescription']
        }], hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadgeHidden']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matBadge']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatBadgeModule {
}
MatBadgeModule.ɵfac = function MatBadgeModule_Factory(t) { return new (t || MatBadgeModule)(); };
MatBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatBadgeModule });
MatBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatBadgeModule, { declarations: function () { return [MatBadge]; }, imports: function () { return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; }, exports: function () { return [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatBadgeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]
                ],
                exports: [MatBadge, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                declarations: [MatBadge]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=badge.js.map

/***/ }),

/***/ "dODg":
/*!***************************************************!*\
  !*** ./src/app/modules/welcome/welcome.module.ts ***!
  \***************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/loader/loader.module */ "r42I");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../welcome/welcome.component */ "NvpJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./welcome.routing.module */ "onHq");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");














let WelcomeModule = class WelcomeModule {
};
WelcomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            src_app_core_loader_loader_module__WEBPACK_IMPORTED_MODULE_8__["LoaderModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_11__["WelcomeRoutingModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"]
        ]
    })
], WelcomeModule);



/***/ }),

/***/ "onHq":
/*!***********************************************************!*\
  !*** ./src/app/modules/welcome/welcome.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WelcomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeRoutingModule", function() { return WelcomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.component */ "NvpJ");




const routes = [
    {
        path: '',
        component: _welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    }
];
let WelcomeRoutingModule = class WelcomeRoutingModule {
};
WelcomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WelcomeRoutingModule);



/***/ }),

/***/ "rtmq":
/*!********************************************************!*\
  !*** ./src/app/modules/welcome/welcome.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card, .card {\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: column;\n  min-height: 40px;\n}\n.welcome-card__info-panel, .card__info-panel {\n  display: flex;\n  flex-direction: column;\n}\n.welcome-card__info-panel__text, .card__info-panel__text {\n  font-size: 1.5em;\n  margin-top: 15px;\n  line-height: 1.15em;\n}\n.welcome-card__info-panel__text--large, .card__info-panel__text--large {\n  font-size: 2.5em;\n  align-self: center;\n}\n.welcome-card .actions, .card .actions {\n  margin-top: 15px;\n  margin: 0;\n  padding: 0;\n}\n.welcome-card .actions .actions-card-row, .card .actions .actions-card-row {\n  display: flex;\n  flex-direction: row;\n}\n.welcome-card .actions .actions-card-row:last-child, .card .actions .actions-card-row:last-child {\n  margin-right: 0;\n}\n.welcome-card .actions .actions-card-row .action-card, .card .actions .actions-card-row .action-card {\n  min-width: 20%;\n  margin-right: 1%;\n  cursor: pointer;\n}\n.welcome-card .actions .actions-card-row .action-card ::ng-deep .mat-card-header .mat-card-header-text, .card .actions .actions-card-row .action-card ::ng-deep .mat-card-header .mat-card-header-text {\n  margin: 0;\n}\n.welcome-card .actions .actions-card-row .action-card ::ng-deep .mat-badge-content, .card .actions .actions-card-row .action-card ::ng-deep .mat-badge-content {\n  right: 1%;\n  top: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFDWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDaEI7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGUjtBQUlRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRlo7QUFJWTtFQUNJLGVBQUE7QUFGaEI7QUFLWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFIaEI7QUFNb0I7RUFDSSxTQUFBO0FBSnhCO0FBUWdCO0VBQ0ksU0FBQTtFQUNBLE9BQUE7QUFOcEIiLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQsIC5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgJl9faW5mby1wYW5lbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAmX190ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTVlbTtcclxuXHJcbiAgICAgICAgICAgICYtLWxhcmdlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIC5hY3Rpb25zLWNhcmQtcm93IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hY3Rpb24tY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIDo6bmctZGVlcCAubWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDElO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=modules-welcome-welcome-module-es2016.js.map