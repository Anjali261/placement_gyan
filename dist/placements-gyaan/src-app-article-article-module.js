(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-article-article-module"],{

/***/ "95m2":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ng2-material-dropdown/__ivy_ngcc__/fesm2015/ng2-material-dropdown.js ***!
  \*******************************************************************************************/
/*! exports provided: DropdownStateService, Ng2Dropdown, Ng2DropdownButton, Ng2DropdownMenu, Ng2DropdownModule, Ng2MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownStateService", function() { return DropdownStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2Dropdown", function() { return Ng2Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownButton", function() { return Ng2DropdownButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownMenu", function() { return Ng2DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2DropdownModule", function() { return Ng2DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2MenuItem", function() { return Ng2MenuItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "+LUq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");








function Ng2DropdownButton_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
function Ng2DropdownMenu_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Ng2DropdownMenu_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = [[["ng2-dropdown-button"]], [["ng2-dropdown-menu"]]];
const _c2 = ["ng2-dropdown-button", "ng2-dropdown-menu"];
let Ng2DropdownButton = class Ng2DropdownButton {
    constructor(element) {
        this.element = element;
        this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showCaret = true;
    }
    /**
     * @name toggleMenu
     * @desc emits event to toggle menu
     */
    toggleMenu() {
        this.onMenuToggled.emit(true);
    }
    /**
     * @name getPosition
     * @desc returns position of the button
     */
    getPosition() {
        return this.element.nativeElement.getBoundingClientRect();
    }
};
Ng2DropdownButton.ɵfac = function Ng2DropdownButton_Factory(t) { return new (t || Ng2DropdownButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
Ng2DropdownButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Ng2DropdownButton, selectors: [["ng2-dropdown-button"]], inputs: { showCaret: "showCaret" }, outputs: { onMenuToggled: "onMenuToggled" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [["type", "button", "tabindex", "0s", 1, "ng2-dropdown-button", 3, "click"], [1, "ng2-dropdown-button__label"], ["class", "ng2-dropdown-button__caret", 4, "ngIf"], [1, "ng2-dropdown-button__caret"], ["enable-background", "new 0 0 32 32", "height", "16px", "id", "\u0421\u043B\u043E\u0439_1", "version", "1.1", "viewBox", "0 0 32 32", "width", "16px", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["d", "M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z", "fill", "#121313", "id", "Expand_More"]], template: function Ng2DropdownButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Ng2DropdownButton_Template_button_click_0_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Ng2DropdownButton_span_3_Template, 9, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCaret);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".ng2-dropdown-button[_ngcontent-%COMP%]{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button[_ngcontent-%COMP%]:hover{color:#222}.ng2-dropdown-button[_ngcontent-%COMP%]:active, .ng2-dropdown-button[_ngcontent-%COMP%]:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label[_ngcontent-%COMP%]{flex:1 1 95%}.ng2-dropdown-button__caret[_ngcontent-%COMP%]{width:12px;height:12px;display:flex;flex:1 1 6%}.ng2-dropdown-button--icon[_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%], .ng2-dropdown-button--icon   [_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]{border:none;min-width:40px;width:40px;border-radius:100%;transition:.2s;text-align:center;height:40px;padding:.5em}.ng2-dropdown-button--icon[_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]:active, .ng2-dropdown-button--icon   [_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]:active{background:rgba(0,0,0,.2)}"] });
Ng2DropdownButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], Ng2DropdownButton.prototype, "onMenuToggled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Ng2DropdownButton.prototype, "showCaret", void 0);

const KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * @name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
const onSwitchNext = (index, items, state) => {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    }
};
const ɵ0 = onSwitchNext;
/**
 * @name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
const onSwitchPrev = (index, items, state) => {
    if (index > 0) {
        state.select(items[index - 1], true);
    }
};
const ɵ1 = onSwitchPrev;
/**
 * @name onBackspace
 * @param index
 * @param items
 * @param state
 */
const onBackspace = (index, items, state) => {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    }
    else {
        state.select(items[0], true);
    }
};
const ɵ2 = onBackspace;
function onEscape() {
    this.hide();
}
;
/**
 * @name onItemClicked
 * @param index
 * @param items
 * @param state
 */
const onItemClicked = (index, items, state) => {
    return state.selectedItem ? state.selectedItem.click() : undefined;
};
const ɵ3 = onItemClicked;
const ACTIONS = {
    [KEYS.BACKSPACE]: onBackspace,
    [KEYS.PREV]: onSwitchPrev,
    [KEYS.NEXT]: onSwitchNext,
    [KEYS.ENTER]: onItemClicked,
    [KEYS.ESCAPE]: onEscape
};
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}

class Ng2DropdownState {
    constructor() {
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @name selectedItem
     * @desc getter for _selectedItem
     */
    get selectedItem() {
        return this._selectedItem;
    }
    /**
     * @name selects a menu item and emits event
     * @param item
     */
    select(item, dispatchEvent = true) {
        this._selectedItem = item;
        if (!dispatchEvent || !item) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    }
    /**
     * @name unselect
     * @desc sets _selectedItem as undefined
     */
    unselect() {
        this._selectedItem = undefined;
    }
}

let DropdownStateService = class DropdownStateService {
    constructor() {
        this.menuState = {
            isVisible: false,
            toString() {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
};
DropdownStateService.ɵfac = function DropdownStateService_Factory(t) { return new (t || DropdownStateService)(); };
DropdownStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DropdownStateService, factory: function (t) { return DropdownStateService.ɵfac(t); } });

let Ng2MenuItem = class Ng2MenuItem {
    constructor(state, element) {
        this.state = state;
        this.element = element;
        /**
         * @preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    ngOnDestroy() {
        this.state.dropdownState.onItemDestroyed.emit(this);
    }
    /**
     * @name isSelected
     * @desc returns current selected item
     */
    get isSelected() {
        return this === this.state.dropdownState.selectedItem;
    }
    /**
     * @name click
     * @desc emits select event
     */
    select($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    }
    /**
     * @name click
     * @desc emits click event
     */
    click() {
        this.state.dropdownState.onItemClicked.emit(this);
    }
    /**
     * @name focus
     */
    focus() {
        this.element.nativeElement.children[0].focus();
    }
};
Ng2MenuItem.ɵfac = function Ng2MenuItem_Factory(t) { return new (t || Ng2MenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DropdownStateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
Ng2MenuItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Ng2MenuItem, selectors: [["ng2-menu-item"]], inputs: { preventClose: "preventClose", value: "value" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [["role", "button", "tabindex", "0", 1, "ng2-menu-item", 3, "keydown.enter", "click", "mouseover"]], template: function Ng2MenuItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function Ng2MenuItem_Template_div_keydown_enter_0_listener() { return ctx.click(); })("click", function Ng2MenuItem_Template_div_click_0_listener() { return ctx.click(); })("mouseover", function Ng2MenuItem_Template_div_mouseover_0_listener() { return ctx.select(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng2-menu-item--selected", ctx.isSelected);
    } }, styles: [".ng2-menu-item[_ngcontent-%COMP%]{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected[_ngcontent-%COMP%]{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item[_ngcontent-%COMP%]:focus{outline:0}.ng2-menu-item[_ngcontent-%COMP%]:active{background:rgba(158,158,158,.4)}ng2-menu-item[_nghost-%COMP%]     [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"] });
Ng2MenuItem.ctorParameters = () => [
    { type: DropdownStateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Ng2MenuItem.prototype, "preventClose", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Ng2MenuItem.prototype, "value", void 0);

let Ng2DropdownMenu = class Ng2DropdownMenu {
    constructor(dropdownState, element, renderer) {
        this.dropdownState = dropdownState;
        this.element = element;
        this.renderer = renderer;
        /**
         * @name width
         */
        this.width = 4;
        /**
         * @description if set to true, the first element of the dropdown will be automatically focused
         * @name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * @name appendToBody
         */
        this.appendToBody = true;
        /**
         * @name zIndex
         */
        this.zIndex = 1000;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * @name show
     * @shows menu and selects first item
     */
    show(position, dynamic = true) {
        const dc = typeof document !== 'undefined' ? document : undefined;
        const wd = typeof window !== 'undefined' ? window : undefined;
        if (!this.dropdownState.menuState.isVisible) {
            // setting handlers
            this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
            this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
        }
        // update state
        this.dropdownState.menuState.isVisible = true;
        if (position) {
            this.updatePosition(position, dynamic);
        }
    }
    /**
     * @name hide
     * @desc hides menu
     */
    hide() {
        this.dropdownState.menuState.isVisible = false;
        // reset selected item state
        this.dropdownState.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler && this.listeners.arrowHandler();
        this.listeners.handleKeypress && this.listeners.handleKeypress();
    }
    /**
     * @name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param position {ClientRect}
     * @param dynamic {boolean}
     */
    updatePosition(position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
    }
    /**
     * @name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param $event
     */
    handleKeypress($event) {
        const key = $event.keyCode;
        const items = this.items.toArray();
        const index = items.indexOf(this.dropdownState.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.dropdownState.dropdownState);
    }
    /**
     * @name getMenuElement
     */
    getMenuElement() {
        return this.element.nativeElement.children[0];
    }
    /**
     * @name calcPositionOffset
     * @param position
     */
    calcPositionOffset(position) {
        const wd = typeof window !== 'undefined' ? window : undefined;
        const dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        const element = this.getMenuElement();
        const supportPageOffset = wd.pageXOffset !== undefined;
        const isCSS1Compat = (dc.compatMode || '') === 'CSS1Compat';
        const x = supportPageOffset
            ? wd.pageXOffset
            : isCSS1Compat
                ? dc.documentElement.scrollLeft
                : dc.body.scrollLeft;
        const y = supportPageOffset
            ? wd.pageYOffset
            : isCSS1Compat
                ? dc.documentElement.scrollTop
                : dc.body.scrollTop;
        let { top, left } = this.applyOffset(`${position.top + (this.appendToBody ? y - 15 : 0)}px`, `${position.left + x - 5}px`);
        const clientWidth = element.clientWidth;
        const clientHeight = element.clientHeight;
        const marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        const marginFromRight = parseInt(left) + clientWidth;
        const windowScrollHeight = wd.innerHeight + wd.scrollY;
        const windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = `${parseInt(top.replace('px', '')) - clientHeight}px`;
        }
        if (marginFromRight >= windowScrollWidth) {
            const marginRight = marginFromRight - windowScrollWidth + 30;
            left = `${parseInt(left.replace('px', '')) - marginRight}px`;
        }
        return { top, left };
    }
    applyOffset(top, left) {
        if (!this.offset) {
            return { top, left };
        }
        const offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = `${parseInt(top.replace('px', '')) + parseInt(offset[0])}px`;
        left = `${parseInt(left.replace('px', '')) + parseInt(offset[1])}px`;
        return { top, left };
    }
    ngOnInit() {
        const dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    }
    updateOnChange(dynamic = true) {
        const element = this.getMenuElement();
        const position = this.calcPositionOffset(this.position);
        if (position) {
            this.renderer.setStyle(element, 'top', position.top.toString());
            this.renderer.setStyle(element, 'left', position.left.toString());
        }
        // select first item unless user disabled this option
        if (this.focusFirstElement &&
            this.items.first &&
            !this.dropdownState.dropdownState.selectedItem) {
            this.dropdownState.dropdownState.select(this.items.first, false);
        }
    }
    ngOnDestroy() {
        const elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    }
};
Ng2DropdownMenu.ɵfac = function Ng2DropdownMenu_Factory(t) { return new (t || Ng2DropdownMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DropdownStateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
Ng2DropdownMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Ng2DropdownMenu, selectors: [["ng2-dropdown-menu"]], contentQueries: function Ng2DropdownMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, Ng2MenuItem, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, inputs: { width: "width", focusFirstElement: "focusFirstElement", appendToBody: "appendToBody", zIndex: "zIndex", offset: "offset" }, ngContentSelectors: _c0, decls: 4, vars: 12, consts: [[1, "ng2-dropdown-menu__options-container"], ["class", "ng2-dropdown-backdrop", 3, "click", 4, "ngIf"], [1, "ng2-dropdown-backdrop", 3, "click"]], template: function Ng2DropdownMenu_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Ng2DropdownMenu_div_3_Template, 1, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ng2-dropdown-menu ng2-dropdown-menu---width--", ctx.width, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.zIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng2-dropdown-menu--inside-element", !ctx.appendToBody)("ng2-dropdown-menu--open", ctx.dropdownState.menuState.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fade", ctx.dropdownState.menuState.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@opacity", ctx.dropdownState.menuState.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dropdownState.menuState.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%]{display:block}.ng2-dropdown-menu[_ngcontent-%COMP%]{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element[_ngcontent-%COMP%]{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2[_ngcontent-%COMP%]{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4[_ngcontent-%COMP%]{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6[_ngcontent-%COMP%]{width:320px}.ng2-dropdown-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}[_nghost-%COMP%]     .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, height: '*', width: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, overflow: 'hidden', height: 0, width: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, height: '*', width: '*' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, width: 0, height: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('opacity', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 1 })
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, offset: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, offset: 1 })
                    ]))
                ])
            ])
        ] } });
Ng2DropdownMenu.ctorParameters = () => [
    { type: DropdownStateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Ng2DropdownMenu.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Ng2DropdownMenu.prototype, "focusFirstElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Ng2DropdownMenu.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Ng2DropdownMenu.prototype, "appendToBody", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Ng2DropdownMenu.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(Ng2MenuItem, { descendants: true })
], Ng2DropdownMenu.prototype, "items", void 0);

let Ng2Dropdown = class Ng2Dropdown {
    constructor(state) {
        this.state = state;
        this.dynamicUpdate = true;
        // outputs
        this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.state.dropdownState.onItemClicked.subscribe(item => {
            this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            this.hide.call(this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(() => {
                this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(item => {
            this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe((item) => {
            let newSelectedItem;
            const items = this.menu.items.toArray();
            if (item !== this.state.dropdownState.selectedItem) {
                return;
            }
            if (this.menu.focusFirstElement) {
                newSelectedItem =
                    item === items[0] && items.length > 1
                        ? items[1]
                        : items[0];
            }
            this.state.dropdownState.select(newSelectedItem);
        });
    }
    /**
     * @name toggleMenu
     * @desc toggles menu visibility
     */
    toggleMenu(position = this.button.getPosition()) {
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    }
    /**
     * - hides dropdown
     * @name hide
     */
    hide() {
        this.menu.hide();
        this.onHide.emit(this);
    }
    /**
     * - shows dropdown
     * @name show
     * @param position
     */
    show(position = this.button.getPosition()) {
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
    }
    /**
     * @name scrollListener
     */
    scrollListener() {
        if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition(), true);
        }
    }
};
Ng2Dropdown.ɵfac = function Ng2Dropdown_Factory(t) { return new (t || Ng2Dropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DropdownStateService)); };
Ng2Dropdown.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Ng2Dropdown, selectors: [["ng2-dropdown"]], contentQueries: function Ng2Dropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, Ng2DropdownButton, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, Ng2DropdownMenu, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    } }, hostBindings: function Ng2Dropdown_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function Ng2Dropdown_scroll_HostBindingHandler() { return ctx.scrollListener(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { dynamicUpdate: "dynamicUpdate" }, outputs: { onItemClicked: "onItemClicked", onItemSelected: "onItemSelected", onShow: "onShow", onHide: "onHide" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DropdownStateService])], ngContentSelectors: _c2, decls: 3, vars: 0, consts: [[1, "ng2-dropdown-container"]], template: function Ng2Dropdown_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
Ng2Dropdown.ctorParameters = () => [
    { type: DropdownStateService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(Ng2DropdownButton, { static: true })
], Ng2Dropdown.prototype, "button", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(Ng2DropdownMenu, { static: true })
], Ng2Dropdown.prototype, "menu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Ng2Dropdown.prototype, "dynamicUpdate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], Ng2Dropdown.prototype, "onItemClicked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], Ng2Dropdown.prototype, "onItemSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], Ng2Dropdown.prototype, "onShow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], Ng2Dropdown.prototype, "onHide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
], Ng2Dropdown.prototype, "scrollListener", null);

let Ng2DropdownModule = class Ng2DropdownModule {
};
Ng2DropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Ng2DropdownModule });
Ng2DropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Ng2DropdownModule_Factory(t) { return new (t || Ng2DropdownModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2DropdownButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng2-dropdown-button',
                template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n",
                styles: [".ng2-dropdown-button{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196f3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:.2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { onMenuToggled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], showCaret: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2MenuItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng2-menu-item',
                template: `
        <div
            class="ng2-menu-item"
            role="button"
            tabindex="0"
            [class.ng2-menu-item--selected]="isSelected"
            (keydown.enter)="click()"
            (click)="click()"
            (mouseover)="select()"
        >
            <ng-content></ng-content>
        </div>
    `,
                styles: [".ng2-menu-item{font-family:Roboto,\"Helvetica Neue\",Helvetica,Arial;background:#fff;color:rgba(0,0,0,.87);cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) ::ng-deep [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:rgba(0,0,0,.44)}"]
            }]
    }], function () { return [{ type: DropdownStateService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { preventClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2DropdownMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng2-dropdown-menu',
                template: `
        <!-- MENU -->
        <div
            class="ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}"
            [class.ng2-dropdown-menu--inside-element]="!appendToBody"
            [class.ng2-dropdown-menu--open]="dropdownState.menuState.isVisible"
            [style.z-index]="zIndex"
            [@fade]="dropdownState.menuState.toString()"
        >
            <div
                class="ng2-dropdown-menu__options-container"
                [@opacity]="dropdownState.menuState.toString()"
            >
                <ng-content></ng-content>
            </div>
        </div>

        <!-- BACKDROP -->
        <div
            class="ng2-dropdown-backdrop"
            *ngIf="dropdownState.menuState.isVisible"
            (click)="hide()"
        ></div>
    `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, height: '*', width: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, overflow: 'hidden', height: 0, width: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, height: '*', width: '*' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('350ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, width: 0, height: 0 }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('opacity', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('450ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 1 })
                            ]))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, offset: 0.3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, offset: 1 })
                            ]))
                        ])
                    ])
                ],
                styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px 0 rgba(0,0,0,.3);position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host ::ng-deep .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"]
            }]
    }], function () { return [{ type: DropdownStateService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusFirstElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [Ng2MenuItem, { descendants: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2Dropdown, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng2-dropdown',
                template: `
        <div class="ng2-dropdown-container">
            <ng-content select="ng2-dropdown-button"></ng-content>
            <ng-content select="ng2-dropdown-menu"></ng-content>
        </div>
    `,
                providers: [DropdownStateService]
            }]
    }], function () { return [{ type: DropdownStateService }]; }, { dynamicUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onItemClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onItemSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], 
    /**
     * @name scrollListener
     */
    scrollListener: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll']
        }], button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [Ng2DropdownButton, { static: true }]
        }], menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [Ng2DropdownMenu, { static: true }]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Ng2DropdownModule, { declarations: function () { return [Ng2Dropdown, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu, Ng2Dropdown]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Ng2DropdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [
                    Ng2MenuItem,
                    Ng2DropdownButton,
                    Ng2DropdownMenu,
                    Ng2Dropdown
                ],
                declarations: [
                    Ng2Dropdown,
                    Ng2MenuItem,
                    Ng2DropdownButton,
                    Ng2DropdownMenu,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-material-dropdown.js.map

/***/ }),

/***/ "AT9Q":
/*!***************************************************!*\
  !*** ./src/app/article/article-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleRoutingModule", function() { return ArticleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.component */ "DLXL");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "P3Ho");






const routes = [
    {
        path: '',
        component: _article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"],
        children: [
            {
                path: 'create',
                component: _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"]
            },
        ]
    }
];
class ArticleRoutingModule {
}
ArticleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArticleRoutingModule });
ArticleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArticleRoutingModule_Factory(t) { return new (t || ArticleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "DLXL":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ArticleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 1, vars: 0, template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Kb4U":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js ***!
  \*******************************************************************/
/*! exports provided: DeleteIconComponent, TagComponent, TagInputComponent, TagInputDropdown, TagInputForm, TagInputModule, TagRipple, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIconComponent", function() { return DeleteIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return TagInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputDropdown", function() { return TagInputDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputForm", function() { return TagInputForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return TagInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagRipple", function() { return TagRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TagInputAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DragProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return HighlightPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "+LUq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-material-dropdown */ "95m2");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");













const _c0 = ["input"];
function TagComponent_div_1_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { item: a0, index: a1 }; };
function TagComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("contenteditable", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, ctx_r0.model, ctx_r0.index))("ngTemplateOutlet", ctx_r0.template);
} }
function TagComponent_div_2_delete_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "delete-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagComponent_div_2_delete_icon_3_Template_delete_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.remove($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TagComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function TagComponent_div_2_Template_div_keydown_enter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.disableEditMode($event); })("keydown.escape", function TagComponent_div_2_Template_div_keydown_escape_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.disableEditMode($event); })("click", function TagComponent_div_2_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.editing ? $event.stopPropagation() : undefined; })("blur", function TagComponent_div_2_Template_div_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onBlurred($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagComponent_div_2_delete_icon_3_Template, 1, 0, "delete-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("contenteditable", ctx_r1.editing)("title", ctx_r1.getDisplayValue(ctx_r1.model));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getDisplayValue(ctx_r1.model), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isDeleteIconVisible());
} }
function TagComponent_tag_ripple_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tag-ripple", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx_r2.rippleState);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", -1);
} }
function TagInputDropdown_ng2_menu_item_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "highlight");
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 1, item_r1[ctx_r4.displayBy], ctx_r4.tagInput.inputForm.value.value), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template(rf, ctx) { }
const _c2 = function (a0, a1, a2) { return { item: a0, index: a1, last: a2 }; };
function TagInputDropdown_ng2_menu_item_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const item_r1 = ctx_r8.$implicit;
    const index_r2 = ctx_r8.index;
    const last_r3 = ctx_r8.last;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.templates.first)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c2, item_r1, index_r2, last_r3));
} }
function TagInputDropdown_ng2_menu_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng2-menu-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagInputDropdown_ng2_menu_item_2_span_1_Template, 2, 4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagInputDropdown_ng2_menu_item_2_2_Template, 1, 6, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1)("ngSwitch", !!ctx_r0.templates.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", false);
} }
function TagInputComponent_tag_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tag", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function TagInputComponent_tag_2_Template_tag_onSelect_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.selectItem(item_r3); })("onRemove", function TagInputComponent_tag_2_Template_tag_onRemove_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onRemoveRequested(item_r3, i_r4); })("onKeyDown", function TagInputComponent_tag_2_Template_tag_onKeyDown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.handleKeydown($event); })("onTagEdited", function TagInputComponent_tag_2_Template_tag_onTagEdited_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.updateEditedTag($event); })("onBlur", function TagInputComponent_tag_2_Template_tag_onBlur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onTagBlurred($event, i_r4); })("dragstart", function TagInputComponent_tag_2_Template_tag_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.dragZone ? ctx_r11.onDragStarted($event, item_r3, i_r4) : undefined; })("drop", function TagInputComponent_tag_2_Template_tag_drop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.dragZone ? ctx_r12.onTagDropped($event, i_r4) : undefined; })("dragenter", function TagInputComponent_tag_2_Template_tag_dragenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.dragZone ? ctx_r13.onDragOver($event) : undefined; })("dragover", function TagInputComponent_tag_2_Template_tag_dragover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.dragZone ? ctx_r14.onDragOver($event, i_r4) : undefined; })("dragleave", function TagInputComponent_tag_2_Template_tag_dragleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.dragZone ? ctx_r15.dragProvider.onDragEnd() : undefined; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("draggable", ctx_r0.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("canAddTag", ctx_r0.isTagValid)("disabled", ctx_r0.disable)("@animation", ctx_r0.animationMetadata)("hasRipple", ctx_r0.ripple)("index", i_r4)("removable", ctx_r0.removable)("editable", ctx_r0.editable)("displayBy", ctx_r0.displayBy)("identifyBy", ctx_r0.identifyBy)("template", !!ctx_r0.hasCustomTemplate() ? ctx_r0.templates.first : undefined)("draggable", ctx_r0.dragZone)("model", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", 0);
} }
function TagInputComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 7);
} }
function TagInputComponent_div_6_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](error_r17);
} }
function TagInputComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagInputComponent_div_6_p_1_Template, 3, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.errors);
} }
const _c3 = ["*"];
const escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
const ɵ0 = escape;
let HighlightPipe = class HighlightPipe {
    /**
     * @name transform
     * @param value {string}
     * @param arg {string}
     */
    transform(value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            const regex = new RegExp(`(${escape(arg)})`, 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    }
};
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "highlight", type: HighlightPipe, pure: true });

/*
** constants and default values for <tag-input>
 */
const PLACEHOLDER = '+ Tag';
const SECONDARY_PLACEHOLDER = 'Enter a new tag';
const KEYDOWN = 'keydown';
const KEYUP = 'keyup';
const FOCUS = 'focus';
const MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
const ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
const KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    46: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
const DRAG_AND_DROP_KEY = 'Text';
const NEXT = 'NEXT';
const PREV = 'PREV';

let DragProvider = class DragProvider {
    constructor() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    /**
     * @name setDraggedItem
     * @param event
     * @param tag
     */
    setDraggedItem(event, tag) {
        if (event && event.dataTransfer) {
            event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
        }
    }
    /**
     * @name getDraggedItem
     * @param event
     */
    getDraggedItem(event) {
        if (event && event.dataTransfer) {
            const data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
            try {
                return JSON.parse(data);
            }
            catch (_a) {
                return;
            }
        }
    }
    /**
     * @name setSender
     * @param sender
     */
    setSender(sender) {
        this.sender = sender;
    }
    /**
     * @name setReceiver
     * @param receiver
     */
    setReceiver(receiver) {
        this.receiver = receiver;
    }
    /**
     * @name onTagDropped
     * @param tag
     * @param indexDragged
     * @param indexDropped
     */
    onTagDropped(tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    }
    /**
     * @name setState
     * @param state
     */
    setState(state) {
        this.state = Object.assign(Object.assign({}, this.state), state);
    }
    /**
     * @name getState
     * @param key
     */
    getState(key) {
        return key ? this.state[key] : this.state;
    }
    /**
     * @name onDragEnd
     */
    onDragEnd() {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    }
};
DragProvider.ɵfac = function DragProvider_Factory(t) { return new (t || DragProvider)(); };
DragProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DragProvider, factory: function (t) { return DragProvider.ɵfac(t); } });

const defaults = {
    tagInput: {
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    },
    dropdown: {
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn
    }
};
/**
 * @name matchingFn
 * @param this
 * @param value
 * @param target
 */
function matchingFn(value, target) {
    const targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}

class OptionsProvider {
    setOptions(options) {
        OptionsProvider.defaults.tagInput = Object.assign(Object.assign({}, defaults.tagInput), options.tagInput);
        OptionsProvider.defaults.dropdown = Object.assign(Object.assign({}, defaults.dropdown), options.dropdown);
    }
}
OptionsProvider.defaults = defaults;

class TagModelClass {
}
function isObject(obj) {
    return obj === Object(obj);
}
let TagInputAccessor = class TagInputAccessor {
    constructor() {
        this._items = [];
        /**
         * @name displayBy
         */
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        /**
         * @name identifyBy
         */
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
        this._onChangeCallback(this._items);
    }
    onTouched() {
        this._onTouchedCallback();
    }
    writeValue(items) {
        this._items = items || [];
    }
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @name getItemValue
     * @param item
     * @param fromDropdown
     */
    getItemValue(item, fromDropdown = false) {
        const property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
        return isObject(item) ? item[property] : item;
    }
    /**
     * @name getItemDisplay
     * @param item
     * @param fromDropdown
     */
    getItemDisplay(item, fromDropdown = false) {
        const property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
        return isObject(item) ? item[property] : item;
    }
    /**
     * @name getItemsWithout
     * @param index
     */
    getItemsWithout(index) {
        return this.items.filter((item, position) => position !== index);
    }
};
TagInputAccessor.ɵfac = function TagInputAccessor_Factory(t) { return new (t || TagInputAccessor)(); };
TagInputAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TagInputAccessor, inputs: { displayBy: "displayBy", identifyBy: "identifyBy" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputAccessor.prototype, "displayBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputAccessor.prototype, "identifyBy", void 0);

/**
 * @name listen
 * @param listenerType
 * @param action
 * @param condition
 */
function listen(listenerType, action, condition = true) {
    // if the event provided does not exist, throw an error
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    // if a condition is present and is false, exit early
    if (!condition) {
        return;
    }
    // fire listener
    this.listeners[listenerType].push(action);
}

let TagInputForm = class TagInputForm {
    constructor() {
        /**
         * @name onSubmit
         */
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onBlur
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         */
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeyup
         */
        this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeydown
         */
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name inputTextChange
         */
        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name validators
         */
        this.validators = [];
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        this.asyncValidators = [];
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */
        this.tabindex = '';
        /**
         * @name disabled
         */
        this.disabled = false;
        this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: this.disabled });
    }
    /**
     * @name inputText
     */
    get inputText() {
        return this.item.value;
    }
    /**
     * @name inputText
     * @param text {string}
     */
    set inputText(text) {
        this.item.setValue(text);
        this.inputTextChange.emit(text);
    }
    ngOnInit() {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators);
        // creating form
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            item: this.item
        });
    }
    ngOnChanges(changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
            if (changes.disabled.currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    }
    /**
     * @name value
     */
    get value() {
        return this.form.get('item');
    }
    /**
     * @name isInputFocused
     */
    isInputFocused() {
        const doc = typeof document !== 'undefined' ? document : undefined;
        return doc ? doc.activeElement === this.input.nativeElement : false;
    }
    /**
     * @name getErrorMessages
     * @param messages
     */
    getErrorMessages(messages) {
        return Object.keys(messages)
            .filter(err => this.value.hasError(err))
            .map(err => messages[err]);
    }
    /**
     * @name hasErrors
     */
    hasErrors() {
        const { dirty, value, valid } = this.form;
        return dirty && value.item && !valid;
    }
    /**
     * @name focus
     */
    focus() {
        this.input.nativeElement.focus();
    }
    /**
     * @name blur
     */
    blur() {
        this.input.nativeElement.blur();
    }
    /**
     * @name getElementPosition
     */
    getElementPosition() {
        return this.input.nativeElement.getBoundingClientRect();
    }
    /**
     * - removes input from the component
     * @name destroy
     */
    destroy() {
        const input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    }
    /**
     * @name onKeyDown
     * @param $event
     */
    onKeyDown($event) {
        this.inputText = this.value.value;
        if ($event.key === 'Enter') {
            this.submit($event);
        }
        else {
            return this.onKeydown.emit($event);
        }
    }
    /**
     * @name onKeyUp
     * @param $event
     */
    onKeyUp($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
    }
    /**
     * @name submit
     */
    submit($event) {
        $event.preventDefault();
        this.onSubmit.emit($event);
    }
};
TagInputForm.ɵfac = function TagInputForm_Factory(t) { return new (t || TagInputForm)(); };
TagInputForm.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagInputForm, selectors: [["tag-input-form"]], viewQuery: function TagInputForm_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, inputs: { validators: "validators", asyncValidators: "asyncValidators", tabindex: "tabindex", disabled: "disabled", inputText: "inputText", placeholder: "placeholder", inputId: "inputId", inputClass: "inputClass" }, outputs: { onSubmit: "onSubmit", onBlur: "onBlur", onFocus: "onFocus", onKeyup: "onKeyup", onKeydown: "onKeydown", inputTextChange: "inputTextChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 8, consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "autocomplete", "off", "minlength", "1", "formControlName", "item", 1, "ng2-tag-input__text-input", 3, "tabindex", "ngClass", "focus", "blur", "keydown", "keyup"], ["input", ""]], template: function TagInputForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TagInputForm_Template_form_ngSubmit_0_listener($event) { return ctx.submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function TagInputForm_Template_input_focus_1_listener($event) { return ctx.onFocus.emit($event); })("blur", function TagInputForm_Template_input_blur_1_listener($event) { return ctx.onBlur.emit($event); })("keydown", function TagInputForm_Template_input_keydown_1_listener($event) { return ctx.onKeyDown($event); })("keyup", function TagInputForm_Template_input_keyup_1_listener($event) { return ctx.onKeyUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tabindex", ctx.disabled ? -1 : ctx.tabindex ? ctx.tabindex : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.inputId)("placeholder", ctx.placeholder)("aria-label", ctx.placeholder)("tabindex", ctx.tabindex)("disabled", ctx.disabled ? ctx.disabled : null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}.ng2-tag-input__text-input[_ngcontent-%COMP%]{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input__text-input[disabled=true][_ngcontent-%COMP%]{opacity:.5;background:#fff}"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputForm.prototype, "onSubmit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputForm.prototype, "onBlur", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputForm.prototype, "onFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputForm.prototype, "onKeyup", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputForm.prototype, "onKeydown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputForm.prototype, "inputTextChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputForm.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputForm.prototype, "validators", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputForm.prototype, "asyncValidators", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputForm.prototype, "inputId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputForm.prototype, "inputClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputForm.prototype, "tabindex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputForm.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input')
], TagInputForm.prototype, "input", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputForm.prototype, "inputText", null);

let TagRipple = class TagRipple {
    constructor() {
        this.state = 'none';
    }
};
TagRipple.ɵfac = function TagRipple_Factory(t) { return new (t || TagRipple)(); };
TagRipple.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagRipple, selectors: [["tag-ripple"]], inputs: { state: "state" }, decls: 1, vars: 1, consts: [[1, "tag-ripple"]], template: function TagRipple_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@ink", ctx.state);
    } }, styles: ["[_nghost-%COMP%] {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n\n        .tag-ripple[_ngcontent-%COMP%] {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('ink', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: 0, opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('none => clicked', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                    ]))
                ])
            ])
        ] } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagRipple.prototype, "state", void 0);

// mocking navigator
const navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
let TagComponent = class TagComponent {
    constructor(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        /**
         * @name disabled
         */
        this.disabled = false;
        /**
         * @name onSelect
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onRemove
         */
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onBlur
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onKeyDown
         */
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onTagEdited
         */
        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name editing
         */
        this.editing = false;
        /**
         * @name rippleState
         */
        this.rippleState = 'none';
    }
    /**
     * @name readonly {boolean}
     */
    get readonly() {
        return typeof this.model !== 'string' && this.model.readonly === true;
    }
    /**
     * @name select
     */
    select($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    }
    /**
     * @name remove
     */
    remove($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    }
    /**
     * @name focus
     */
    focus() {
        this.element.nativeElement.focus();
    }
    move() {
        this.moving = true;
    }
    /**
     * @name keydown
     * @param event
     */
    keydown(event) {
        if (this.editing) {
            if (event.keyCode === 13) {
                return this.disableEditMode(event);
            }
        }
        else {
            this.onKeyDown.emit({ event, model: this.model });
        }
    }
    /**
     * @name blink
     */
    blink() {
        const classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(() => classList.remove('blink'), 50);
    }
    /**
     * @name toggleEditMode
     */
    toggleEditMode() {
        if (this.editable) {
            return this.editing ? undefined : this.activateEditMode();
        }
    }
    /**
     * @name onBlurred
     * @param event
     */
    onBlurred(event) {
        // Checks if it is editable first before handeling the onBlurred event in order to prevent
        // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        const value = event.target.innerText;
        const result = typeof this.model === 'string'
            ? value
            : Object.assign(Object.assign({}, this.model), { [this.displayBy]: value });
        this.onBlur.emit(result);
    }
    /**
     * @name getDisplayValue
     * @param item
     */
    getDisplayValue(item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    }
    /**
     * @desc returns whether the ripple is visible or not
     * only works in Chrome
     * @name isRippleVisible
     */
    get isRippleVisible() {
        return !this.readonly && !this.editing && isChrome && this.hasRipple;
    }
    /**
     * @name disableEditMode
     * @param $event
     */
    disableEditMode($event) {
        const classList = this.element.nativeElement.classList;
        const input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    }
    /**
     * @name isDeleteIconVisible
     */
    isDeleteIconVisible() {
        return (!this.readonly && !this.disabled && this.removable && !this.editing);
    }
    /**
     * @name getContentEditableText
     */
    getContentEditableText() {
        const input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
    }
    /**
     * @name setContentEditableText
     * @param model
     */
    setContentEditableText(model) {
        const input = this.getContentEditable();
        const value = this.getDisplayValue(model);
        input.innerText = value;
    }
    /**
     * @name
     */
    activateEditMode() {
        const classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    }
    /**
     * @name storeNewValue
     * @param input
     */
    storeNewValue(input) {
        const exists = (tag) => {
            return typeof tag === 'string'
                ? tag === input
                : tag[this.displayBy] === input;
        };
        const hasId = () => {
            return this.model[this.identifyBy] !== this.model[this.displayBy];
        };
        // if the value changed, replace the value in the model
        if (exists(this.model)) {
            return;
        }
        const model = typeof this.model === 'string'
            ? input
            : {
                index: this.index,
                [this.identifyBy]: hasId()
                    ? this.model[this.identifyBy]
                    : input,
                [this.displayBy]: input
            };
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
    }
    /**
     * @name getContentEditable
     */
    getContentEditable() {
        return this.element.nativeElement.querySelector('[contenteditable]');
    }
};
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagComponent, selectors: [["tag"]], viewQuery: function TagComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](TagRipple, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, hostVars: 2, hostBindings: function TagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function TagComponent_keydown_HostBindingHandler($event) { return ctx.keydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("moving", ctx.moving);
    } }, inputs: { disabled: "disabled", model: "model", removable: "removable", editable: "editable", template: "template", displayBy: "displayBy", identifyBy: "identifyBy", index: "index", hasRipple: "hasRipple", canAddTag: "canAddTag" }, outputs: { onSelect: "onSelect", onRemove: "onRemove", onBlur: "onBlur", onKeyDown: "onKeyDown", onTagEdited: "onTagEdited" }, decls: 4, vars: 8, consts: [[3, "ngSwitch", "click", "dblclick", "mousedown", "mouseup"], [4, "ngSwitchCase"], ["class", "tag-wrapper", 4, "ngSwitchCase"], [3, "state", 4, "ngIf"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], [1, "tag-wrapper"], ["spellcheck", "false", 1, "tag__text", "inline", 3, "keydown.enter", "keydown.escape", "click", "blur"], ["aria-label", "Remove tag", "role", "button", 3, "click", 4, "ngIf"], ["aria-label", "Remove tag", "role", "button", 3, "click"], [3, "state"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagComponent_Template_div_click_0_listener($event) { return ctx.select($event); })("dblclick", function TagComponent_Template_div_dblclick_0_listener() { return ctx.toggleEditMode(); })("mousedown", function TagComponent_Template_div_mousedown_0_listener() { return ctx.rippleState = "clicked"; })("mouseup", function TagComponent_Template_div_mouseup_0_listener() { return ctx.rippleState = "none"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagComponent_div_1_Template, 2, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagComponent_div_2_Template, 4, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagComponent_tag_ripple_3_Template, 1, 2, "tag-ripple", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", !!ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", -1)("aria-label", ctx.getDisplayValue(ctx.model));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRippleVisible);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], DeleteIconComponent, TagRipple]; }, styles: ["[_nghost-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%]:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}[_nghost-%COMP%]{max-width:400px}.blink[_nghost-%COMP%]{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   [contenteditable=true][_ngcontent-%COMP%]{outline:0}.tag-wrapper[_ngcontent-%COMP%]{flex-direction:row;display:flex}.tag__text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"] });
TagComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "model", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "removable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "editable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "template", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "displayBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "identifyBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "index", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "hasRipple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagComponent.prototype, "canAddTag", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagComponent.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagComponent.prototype, "onRemove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagComponent.prototype, "onBlur", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagComponent.prototype, "onKeyDown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagComponent.prototype, "onTagEdited", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.moving')
], TagComponent.prototype, "moving", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TagRipple)
], TagComponent.prototype, "ripple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], TagComponent.prototype, "keydown", null);

/**
 * @name animations
 */
const animations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('animation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ enter }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ leave }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];

let TagInputDropdown = class TagInputDropdown {
    constructor(injector) {
        this.injector = injector;
        /**
         * @name offset
         */
        this.offset = defaults.dropdown.offset;
        /**
         * @name focusFirstElement
         */
        this.focusFirstElement = defaults.dropdown.focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * @name showDropdownIfEmpty
         */
        this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * @name minimumTextLength
         */
        this.minimumTextLength = defaults.dropdown.minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * @name limitItemsTo
         */
        this.limitItemsTo = defaults.dropdown.limitItemsTo;
        /**
         * @name displayBy
         */
        this.displayBy = defaults.dropdown.displayBy;
        /**
         * @name identifyBy
         */
        this.identifyBy = defaults.dropdown.identifyBy;
        /**
         * @description a function a developer can use to implement custom matching for the autocomplete
         * @name matchingFn
         */
        this.matchingFn = defaults.dropdown.matchingFn;
        /**
         * @name appendToBody
         */
        this.appendToBody = defaults.dropdown.appendToBody;
        /**
         * @name keepOpen
         * @description option to leave dropdown open when adding a new item
         */
        this.keepOpen = defaults.dropdown.keepOpen;
        /**
         * @name dynamicUpdate
         */
        this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
        /**
         * @name zIndex
         */
        this.zIndex = defaults.dropdown.zIndex;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * @name items
         */
        this.items = [];
        /**
         * @name tagInput
         */
        this.tagInput = this.injector.get(TagInputComponent);
        /**
         * @name _autocompleteItems
         */
        this._autocompleteItems = [];
        /**
         *
         * @name show
         */
        this.show = () => {
            const maxItemsReached = this.tagInput.items.length === this.tagInput.maxItems;
            const value = this.getFormValue();
            const hasMinimumText = value.trim().length >= this.minimumTextLength;
            const position = this.calculatePosition();
            const items = this.getMatchingItems(value);
            const hasItems = items.length > 0;
            const isHidden = this.isVisible === false;
            const showDropdownIfEmpty = this.showDropdownIfEmpty && hasItems && !value;
            const isDisabled = this.tagInput.disable;
            const shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            const shouldHide = this.isVisible && !hasItems;
            if (this.autocompleteObservable && hasMinimumText) {
                return this.getItemsFromObservable(value);
            }
            if ((!this.showDropdownIfEmpty && !value) ||
                maxItemsReached ||
                isDisabled) {
                return this.dropdown.hide();
            }
            this.setItems(items);
            if (shouldShow) {
                this.dropdown.show(position);
            }
            else if (shouldHide) {
                this.hide();
            }
        };
        /**
         * @name requestAdding
         * @param item {Ng2MenuItem}
         */
        this.requestAdding = (item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tag = this.createTagModel(item);
            yield this.tagInput.onAddingRequested(true, tag).catch(() => { });
        });
        /**
         * @name resetItems
         */
        this.resetItems = () => {
            this.items = [];
        };
        /**
         * @name getItemsFromObservable
         * @param text
         */
        this.getItemsFromObservable = (text) => {
            this.setLoadingState(true);
            const subscribeFn = (data) => {
                // hide loading animation
                this.setLoadingState(false)
                    // add items
                    .populateItems(data);
                this.setItems(this.getMatchingItems(text));
                if (this.items.length) {
                    this.dropdown.show(this.calculatePosition());
                }
                else {
                    this.dropdown.hide();
                }
            };
            this.autocompleteObservable(text)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(subscribeFn, () => this.setLoadingState(false));
        };
    }
    /**
     * @name autocompleteItems
     * @param items
     */
    set autocompleteItems(items) {
        this._autocompleteItems = items;
    }
    /**
     * @name autocompleteItems
     * @desc array of items that will populate the autocomplete
     */
    get autocompleteItems() {
        const items = this._autocompleteItems;
        if (!items) {
            return [];
        }
        return items.map((item) => {
            return typeof item === 'string'
                ? {
                    [this.displayBy]: item,
                    [this.identifyBy]: item
                }
                : item;
        });
    }
    /**
     * @name ngAfterviewInit
     */
    ngAfterViewInit() {
        this.onItemClicked().subscribe((item) => {
            this.requestAdding(item);
        });
        // reset itemsMatching array when the dropdown is hidden
        this.onHide().subscribe(this.resetItems);
        const DEBOUNCE_TIME = 200;
        const KEEP_OPEN = this.keepOpen;
        this.tagInput.onTextChange
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((value) => {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    }
    /**
     * @name updatePosition
     */
    updatePosition() {
        const position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
    }
    /**
     * @name isVisible
     */
    get isVisible() {
        return this.dropdown.menu.dropdownState.menuState.isVisible;
    }
    /**
     * @name onHide
     */
    onHide() {
        return this.dropdown.onHide;
    }
    /**
     * @name onItemClicked
     */
    onItemClicked() {
        return this.dropdown.onItemClicked;
    }
    /**
     * @name selectedItem
     */
    get selectedItem() {
        return this.dropdown.menu.dropdownState.dropdownState.selectedItem;
    }
    /**
     * @name state
     */
    get state() {
        return this.dropdown.menu.dropdownState;
    }
    /**
     * @name hide
     */
    hide() {
        this.resetItems();
        this.dropdown.hide();
    }
    /**
     * @name scrollListener
     */
    scrollListener() {
        if (!this.isVisible || !this.dynamicUpdate) {
            return;
        }
        this.updatePosition();
    }
    /**
     * @name onWindowBlur
     */
    onWindowBlur() {
        this.dropdown.hide();
    }
    /**
     * @name getFormValue
     */
    getFormValue() {
        const formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : '';
    }
    /**
     * @name calculatePosition
     */
    calculatePosition() {
        return this.tagInput.inputForm.getElementPosition();
    }
    /**
     * @name createTagModel
     * @param item
     */
    createTagModel(item) {
        const display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        const value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign(Object.assign({}, item.value), { [this.tagInput.displayBy]: display, [this.tagInput.identifyBy]: value });
    }
    /**
     *
     * @param value {string}
     */
    getMatchingItems(value) {
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        const dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter((item) => {
            const hasValue = dupesAllowed
                ? false
                : this.tagInput.tags.some(tag => {
                    const identifyBy = this.tagInput.identifyBy;
                    const model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                    return model === item[this.identifyBy];
                });
            return this.matchingFn(value, item) && hasValue === false;
        });
    }
    /**
     * @name setItems
     */
    setItems(items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    }
    /**
     * @name populateItems
     * @param data
     */
    populateItems(data) {
        this.autocompleteItems = data.map(item => {
            return typeof item === 'string'
                ? {
                    [this.displayBy]: item,
                    [this.identifyBy]: item
                }
                : item;
        });
        return this;
    }
    /**
     * @name setLoadingState
     * @param state
     */
    setLoadingState(state) {
        this.tagInput.isLoading = state;
        return this;
    }
};
TagInputDropdown.ɵfac = function TagInputDropdown_Factory(t) { return new (t || TagInputDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
TagInputDropdown.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagInputDropdown, selectors: [["tag-input-dropdown"]], contentQueries: function TagInputDropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    } }, viewQuery: function TagInputDropdown_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
    } }, hostBindings: function TagInputDropdown_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function TagInputDropdown_scroll_HostBindingHandler() { return ctx.scrollListener(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("blur", function TagInputDropdown_blur_HostBindingHandler() { return ctx.onWindowBlur(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { offset: "offset", focusFirstElement: "focusFirstElement", showDropdownIfEmpty: "showDropdownIfEmpty", minimumTextLength: "minimumTextLength", limitItemsTo: "limitItemsTo", displayBy: "displayBy", identifyBy: "identifyBy", matchingFn: "matchingFn", appendToBody: "appendToBody", keepOpen: "keepOpen", dynamicUpdate: "dynamicUpdate", zIndex: "zIndex", autocompleteItems: "autocompleteItems", autocompleteObservable: "autocompleteObservable" }, decls: 3, vars: 6, consts: [[3, "dynamicUpdate"], [3, "focusFirstElement", "zIndex", "appendToBody", "offset"], [3, "value", "ngSwitch", 4, "ngFor", "ngForOf"], [3, "value", "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function TagInputDropdown_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng2-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ng2-dropdown-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagInputDropdown_ng2_menu_item_2_Template, 3, 3, "ng2-menu-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dynamicUpdate", ctx.dynamicUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("focusFirstElement", ctx.focusFirstElement)("zIndex", ctx.zIndex)("appendToBody", ctx.appendToBody)("offset", ctx.offset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2MenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], pipes: [HighlightPipe], encapsulation: 2 });
TagInputDropdown.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"])
], TagInputDropdown.prototype, "dropdown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], TagInputDropdown.prototype, "templates", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "focusFirstElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "showDropdownIfEmpty", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "autocompleteObservable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "minimumTextLength", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "limitItemsTo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "displayBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "identifyBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "matchingFn", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "appendToBody", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "keepOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "dynamicUpdate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputDropdown.prototype, "autocompleteItems", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
], TagInputDropdown.prototype, "scrollListener", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:blur')
], TagInputDropdown.prototype, "onWindowBlur", null);

// angular universal hacks
/* tslint:disable-next-line */
const DragEvent = typeof window !== 'undefined' && window.DragEvent;
const CUSTOM_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TagInputComponent),
    multi: true
};
let TagInputComponent = class TagInputComponent extends TagInputAccessor {
    constructor(renderer, dragProvider) {
        super();
        this.renderer = renderer;
        this.dragProvider = dragProvider;
        /**
         * @name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */
        this.separatorKeys = defaults.tagInput.separatorKeys;
        /**
         * @name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */
        this.separatorKeyCodes = defaults.tagInput.separatorKeyCodes;
        /**
         * @name placeholder
         * @desc the placeholder of the input text
         */
        this.placeholder = defaults.tagInput.placeholder;
        /**
         * @name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */
        this.secondaryPlaceholder = defaults.tagInput.secondaryPlaceholder;
        /**
         * @name maxItems
         * @desc maximum number of items that can be added
         */
        this.maxItems = defaults.tagInput.maxItems;
        /**
         * @name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */
        this.validators = defaults.tagInput.validators;
        /**
         * @name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        this.asyncValidators = defaults.tagInput.asyncValidators;
        /**
        * - if set to true, it will only possible to add items from the autocomplete
        * @name onlyFromAutocomplete
        */
        this.onlyFromAutocomplete = defaults.tagInput.onlyFromAutocomplete;
        /**
         * @name errorMessages
         */
        this.errorMessages = defaults.tagInput.errorMessages;
        /**
         * @name theme
         */
        this.theme = defaults.tagInput.theme;
        /**
         * @name onTextChangeDebounce
         */
        this.onTextChangeDebounce = defaults.tagInput.onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * @name id
         */
        this.inputId = defaults.tagInput.inputId;
        /**
         * - custom class assigned to the input
         */
        this.inputClass = defaults.tagInput.inputClass;
        /**
         * - option to clear text input when the form is blurred
         * @name clearOnBlur
         */
        this.clearOnBlur = defaults.tagInput.clearOnBlur;
        /**
         * - hideForm
         * @name clearOnBlur
         */
        this.hideForm = defaults.tagInput.hideForm;
        /**
         * @name addOnBlur
         */
        this.addOnBlur = defaults.tagInput.addOnBlur;
        /**
         * @name addOnPaste
         */
        this.addOnPaste = defaults.tagInput.addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * @name pasteSplitPattern
         */
        this.pasteSplitPattern = defaults.tagInput.pasteSplitPattern;
        /**
         * @name blinkIfDupe
         */
        this.blinkIfDupe = defaults.tagInput.blinkIfDupe;
        /**
         * @name removable
         */
        this.removable = defaults.tagInput.removable;
        /**
         * @name editable
         */
        this.editable = defaults.tagInput.editable;
        /**
         * @name allowDupes
         */
        this.allowDupes = defaults.tagInput.allowDupes;
        /**
         * @description if set to true, the newly added tags will be added as strings, and not objects
         * @name modelAsStrings
         */
        this.modelAsStrings = defaults.tagInput.modelAsStrings;
        /**
         * @name trimTags
         */
        this.trimTags = defaults.tagInput.trimTags;
        /**
         * @name ripple
         */
        this.ripple = defaults.tagInput.ripple;
        /**
         * @name tabindex
         * @desc pass through the specified tabindex to the input
         */
        this.tabindex = defaults.tagInput.tabIndex;
        /**
         * @name disable
         */
        this.disable = defaults.tagInput.disable;
        /**
         * @name dragZone
         */
        this.dragZone = defaults.tagInput.dragZone;
        /**
         * @name onRemoving
         */
        this.onRemoving = defaults.tagInput.onRemoving;
        /**
         * @name onAdding
         */
        this.onAdding = defaults.tagInput.onAdding;
        /**
         * @name animationDuration
         */
        this.animationDuration = defaults.tagInput.animationDuration;
        /**
         * @name onAdd
         * @desc event emitted when adding a new item
         */
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onRemove
         * @desc event emitted when removing an existing item
         */
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onSelect
         * @desc event emitted when selecting an item
         */
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is focused
         */
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onFocus
         * @desc event emitted when the input is blurred
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name onTextChange
         * @desc event emitted when the input value changes
         */
        this.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when text is pasted in the form
         * @name onPaste
         */
        this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag entered is not valid
         * @name onValidationError
         */
        this.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * - output triggered when tag is edited
         * @name onTagEdited
         */
        this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @name isLoading
         */
        this.isLoading = false;
        /**
         * @name listeners
         * @desc array of events that get fired using @fireEvents
         */
        this.listeners = {
            [KEYDOWN]: [],
            [KEYUP]: []
        };
        /**
         * @description emitter for the 2-way data binding inputText value
         * @name inputTextChange
         */
        this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @description private variable to bind get/set
         * @name inputTextValue
         */
        this.inputTextValue = '';
        this.errors = [];
        /**
         * @name appendTag
         * @param tag {TagModel}
         */
        this.appendTag = (tag, index = this.items.length) => {
            const items = this.items;
            const model = this.modelAsStrings ? tag[this.identifyBy] : tag;
            this.items = [
                ...items.slice(0, index),
                model,
                ...items.slice(index, items.length)
            ];
        };
        /**
         * @name createTag
         * @param model
         */
        this.createTag = (model) => {
            const trim = (val, key) => {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return Object.assign(Object.assign({}, typeof model !== 'string' ? model : {}), { [this.displayBy]: this.trimTags ? trim(model, this.displayBy) : model, [this.identifyBy]: this.trimTags ? trim(model, this.identifyBy) : model });
        };
        /**
         *
         * @param tag
         * @param isFromAutocomplete
         */
        this.isTagValid = (tag, fromAutocomplete = false) => {
            const selectedItem = this.dropdown ? this.dropdown.selectedItem : undefined;
            const value = this.getItemDisplay(tag).trim();
            if (selectedItem && !fromAutocomplete || !value) {
                return false;
            }
            const dupe = this.findDupe(tag, fromAutocomplete);
            // if so, give a visual cue and return false
            if (!this.allowDupes && dupe && this.blinkIfDupe) {
                const model = this.tags.find(item => {
                    return this.getItemValue(item.model) === this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            const isFromAutocomplete = fromAutocomplete && this.onlyFromAutocomplete;
            const assertions = [
                // 1. there must be no dupe OR dupes are allowed
                !dupe || this.allowDupes,
                // 2. check max items has not been reached
                !this.maxItemsReached,
                // 3. check item comes from autocomplete or onlyFromAutocomplete is false
                ((isFromAutocomplete) || !this.onlyFromAutocomplete)
            ];
            return assertions.filter(Boolean).length === assertions.length;
        };
        /**
         * @name onPasteCallback
         * @param data
         */
        this.onPasteCallback = (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const getText = () => {
                const isIE = Boolean(window.clipboardData);
                const clipboardData = isIE ? (window.clipboardData) : data.clipboardData;
                const type = isIE ? 'Text' : 'text/plain';
                return clipboardData === null ? '' : clipboardData.getData(type) || '';
            };
            const text = getText();
            const requests = text
                .split(this.pasteSplitPattern)
                .map(item => {
                const tag = this.createTag(item);
                this.setInputValue(tag[this.displayBy]);
                return this.onAddingRequested(false, tag);
            });
            const resetInput = () => setTimeout(() => this.setInputValue(''), 50);
            Promise.all(requests).then(() => {
                this.onPaste.emit(text);
                resetInput();
            })
                .catch(resetInput);
        });
    }
    /**
     * @name inputText
     */
    get inputText() {
        return this.inputTextValue;
    }
    /**
     * @name inputText
     * @param text
     */
    set inputText(text) {
        this.inputTextValue = text;
        this.inputTextChange.emit(text);
    }
    /**
     * @desc removes the tab index if it is set - it will be passed through to the input
     * @name tabindexAttr
     */
    get tabindexAttr() {
        return this.tabindex !== '' ? '-1' : '';
    }
    /**
     * @name ngAfterViewInit
     */
    ngAfterViewInit() {
        // set up listeners
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        // if clear on blur is set to true, subscribe to the event and clear the text's form
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        // if addOnPaste is set to true, register the handler and add items
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        const statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((status) => status !== 'PENDING')).subscribe(() => {
            this.errors = this.inputForm.getErrorMessages(this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((status) => {
            return status === 'PENDING' || this.isLoading;
        }));
        // if hideForm is set to true, remove the input
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    }
    /**
     * @name ngOnInit
     */
    ngOnInit() {
        // if the number of items specified in the model is > of the value of maxItems
        // degrade gracefully and let the max number of items to be the number of items in the model
        // though, warn the user.
        const hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
        }
        // Setting editable to false to fix problem with tags in IE still being editable when
        // onlyFromAutocomplete is true
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    }
    /**
     * @name onRemoveRequested
     * @param tag
     * @param index
     */
    onRemoveRequested(tag, index) {
        return new Promise(resolve => {
            const subscribeFn = (model) => {
                this.removeItem(model, index);
                resolve(tag);
            };
            this.onRemoving ?
                this.onRemoving(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    }
    /**
     * @name onAddingRequested
     * @param fromAutocomplete {boolean}
     * @param tag {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    onAddingRequested(fromAutocomplete, tag, index, giveupFocus) {
        return new Promise((resolve, reject) => {
            const subscribeFn = (model) => {
                return this
                    .addItem(fromAutocomplete, model, index, giveupFocus)
                    .then(resolve)
                    .catch(reject);
            };
            return this.onAdding ?
                this.onAdding(tag)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    }
    /**
     * @name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param item
     * @param emit
     */
    selectItem(item, emit = true) {
        const isReadonly = item && typeof item !== 'string' && item.readonly;
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    }
    /**
     * @name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param eventName
     * @param $event
     */
    fireEvents(eventName, $event) {
        this.listeners[eventName].forEach(listener => listener.call(this, $event));
    }
    /**
     * @name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param data
     */
    handleKeydown(data) {
        const event = data.event;
        const key = event.keyCode || event.which;
        const shiftKey = event.shiftKey || false;
        switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    const index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;
            case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;
            case ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, NEXT);
                }
                break;
            default:
                return;
        }
        // prevent default behaviour
        event.preventDefault();
    }
    onFormSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.onAddingRequested(false, this.formValue);
            }
            catch (_a) {
                return;
            }
        });
    }
    /**
     * @name setInputValue
     * @param value
     */
    setInputValue(value, emitEvent = true) {
        const control = this.getControl();
        // update form value with the transformed item
        control.setValue(value, { emitEvent });
    }
    /**
     * @name getControl
     */
    getControl() {
        return this.inputForm.value;
    }
    /**
     * @name focus
     * @param applyFocus
     * @param displayAutocomplete
     */
    focus(applyFocus = false, displayAutocomplete = false) {
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    }
    /**
     * @name blur
     */
    blur() {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    }
    /**
     * @name hasErrors
     */
    hasErrors() {
        return !!this.inputForm && this.inputForm.hasErrors();
    }
    /**
     * @name isInputFocused
     */
    isInputFocused() {
        return !!this.inputForm && this.inputForm.isInputFocused();
    }
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * @name hasCustomTemplate
     */
    hasCustomTemplate() {
        const template = this.templates ? this.templates.first : undefined;
        const menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    }
    /**
     * @name maxItemsReached
     */
    get maxItemsReached() {
        return this.maxItems !== undefined &&
            this.items.length >= this.maxItems;
    }
    /**
     * @name formValue
     */
    get formValue() {
        const form = this.inputForm.value;
        return form ? form.value : '';
    }
    /**3
     * @name onDragStarted
     * @param event
     * @param index
     */
    onDragStarted(event, tag, index) {
        event.stopPropagation();
        const item = { zone: this.dragZone, tag, index };
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index });
    }
    /**
     * @name onDragOver
     * @param event
     */
    onDragOver(event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    }
    /**
     * @name onTagDropped
     * @param event
     * @param index
     */
    onTagDropped(event, index) {
        const item = this.dragProvider.getDraggedItem(event);
        if (!item || item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @name isDropping
     */
    isDropping() {
        const isReceiver = this.dragProvider.receiver === this;
        const isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    }
    /**
     * @name onTagBlurred
     * @param changedElement {TagModel}
     * @param index {number}
     */
    onTagBlurred(changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    }
    /**
     * @name trackBy
     * @param items
     */
    trackBy(index, item) {
        return item[this.identifyBy];
    }
    /**
     * @name updateEditedTag
     * @param tag
     */
    updateEditedTag({ tag, index }) {
        this.onTagEdited.emit(tag);
    }
    /**
     * @name moveToTag
     * @param item
     * @param direction
     */
    moveToTag(item, direction) {
        const isLast = this.isLastTag(item);
        const isFirst = this.isFirstTag(item);
        const stopSwitch = (direction === NEXT && isLast) ||
            (direction === PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        const offset = direction === NEXT ? 1 : -1;
        const index = this.getTagIndex(item) + offset;
        const tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    }
    /**
     * @name isFirstTag
     * @param item {TagModel}
     */
    isFirstTag(item) {
        return this.tags.first.model === item;
    }
    /**
     * @name isLastTag
     * @param item {TagModel}
     */
    isLastTag(item) {
        return this.tags.last.model === item;
    }
    /**
     * @name getTagIndex
     * @param item
     */
    getTagIndex(item) {
        const tags = this.tags.toArray();
        return tags.findIndex(tag => tag.model === item);
    }
    /**
     * @name getTagAtIndex
     * @param index
     */
    getTagAtIndex(index) {
        const tags = this.tags.toArray();
        return tags[index];
    }
    /**
     * @name removeItem
     * @desc removes an item from the array of the model
     * @param tag {TagModel}
     * @param index {number}
     */
    removeItem(tag, index) {
        this.items = this.getItemsWithout(index);
        // if the removed tag was selected, set it as undefined
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        // focus input
        this.focus(true, false);
        // emit remove event
        this.onRemove.emit(tag);
    }
    /**
     * @name addItem
     * @desc adds the current text model to the items array
     * @param fromAutocomplete {boolean}
     * @param item {TagModel}
     * @param index? {number}
     * @param giveupFocus? {boolean}
     */
    addItem(fromAutocomplete = false, item, index, giveupFocus) {
        const display = this.getItemDisplay(item);
        const tag = this.createTag(item);
        if (fromAutocomplete) {
            this.setInputValue(this.getItemValue(item, true));
        }
        return new Promise((resolve, reject) => {
            /**
             * @name reset
             */
            const reset = () => {
                // reset control and focus input
                this.setInputValue('');
                if (giveupFocus) {
                    this.focus(false, false);
                }
                else {
                    // focus input
                    this.focus(true, false);
                }
                resolve(display);
            };
            const appendItem = () => {
                this.appendTag(tag, index);
                // emit event
                this.onAdd.emit(tag);
                if (!this.dropdown) {
                    return;
                }
                this.dropdown.hide();
                if (this.dropdown.showDropdownIfEmpty) {
                    this.dropdown.show();
                }
            };
            const status = this.inputForm.form.status;
            const isTagValid = this.isTagValid(tag, fromAutocomplete);
            const onValidationError = () => {
                this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                reset();
                return onValidationError();
            }
            if (status === 'PENDING') {
                const statusUpdate$ = this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(statusUpdate => statusUpdate !== 'PENDING'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe((statusUpdate) => {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        return reset();
                    }
                    else {
                        reset();
                        return onValidationError();
                    }
                });
            }
        });
    }
    /**
     * @name setupSeparatorKeysListener
     */
    setupSeparatorKeysListener() {
        const useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        const listener = ($event) => {
            const hasKeyCode = this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            const hasKey = this.separatorKeys.indexOf($event.key) >= 0;
            // the keyCode of keydown event is 229 when IME is processing the key event.
            const isIMEProcessing = $event.keyCode === 229;
            if (hasKeyCode || (hasKey && !isIMEProcessing)) {
                $event.preventDefault();
                this.onAddingRequested(false, this.formValue)
                    .catch(() => { });
            }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
    }
    /**
     * @name setUpKeypressListeners
     */
    setUpKeypressListeners() {
        const listener = ($event) => {
            const isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !this.formValue &&
                this.items.length) {
                this.tags.last.select.call(this.tags.last);
            }
        };
        // setting up the keypress listeners
        listen.call(this, KEYDOWN, listener);
    }
    /**
     * @name setUpKeydownListeners
     */
    setUpInputKeydownListeners() {
        this.inputForm.onKeydown.subscribe(event => {
            if (event.key === 'Backspace' && this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    }
    /**
     * @name setUpOnPasteListener
     */
    setUpOnPasteListener() {
        const input = this.inputForm.input.nativeElement;
        // attach listener to input
        this.renderer.listen(input, 'paste', (event) => {
            this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    }
    /**
     * @name setUpTextChangeSubscriber
     */
    setUpTextChangeSubscriber() {
        this.inputForm.form
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(this.onTextChangeDebounce))
            .subscribe((value) => {
            this.onTextChange.emit(value.item);
        });
    }
    /**
     * @name setUpOnBlurSubscriber
     */
    setUpOnBlurSubscriber() {
        const filterFn = () => {
            const isVisible = this.dropdown && this.dropdown.isVisible;
            return !isVisible && !!this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(filterFn))
            .subscribe(() => {
            const reset = () => this.setInputValue('');
            if (this.addOnBlur) {
                return this
                    .onAddingRequested(false, this.formValue, undefined, true)
                    .then(reset)
                    .catch(reset);
            }
            reset();
        });
    }
    /**
     * @name findDupe
     * @param tag
     * @param isFromAutocomplete
     */
    findDupe(tag, isFromAutocomplete) {
        const identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        const id = tag[identifyBy];
        return this.items.find(item => this.getItemValue(item) === id);
    }
    /**
     * @name setAnimationMetadata
     */
    setAnimationMetadata() {
        this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
        };
    }
};
TagInputComponent.ɵfac = function TagInputComponent_Factory(t) { return new (t || TagInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DragProvider)); };
TagInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagInputComponent, selectors: [["tag-input"]], contentQueries: function TagInputComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, TagInputDropdown, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    } }, viewQuery: function TagInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](TagInputForm, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](TagComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tags = _t);
    } }, hostVars: 1, hostBindings: function TagInputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.tabindexAttr);
    } }, inputs: { separatorKeys: "separatorKeys", separatorKeyCodes: "separatorKeyCodes", placeholder: "placeholder", secondaryPlaceholder: "secondaryPlaceholder", maxItems: "maxItems", validators: "validators", asyncValidators: "asyncValidators", onlyFromAutocomplete: "onlyFromAutocomplete", errorMessages: "errorMessages", theme: "theme", onTextChangeDebounce: "onTextChangeDebounce", inputId: "inputId", inputClass: "inputClass", clearOnBlur: "clearOnBlur", hideForm: "hideForm", addOnBlur: "addOnBlur", addOnPaste: "addOnPaste", pasteSplitPattern: "pasteSplitPattern", blinkIfDupe: "blinkIfDupe", removable: "removable", editable: "editable", allowDupes: "allowDupes", modelAsStrings: "modelAsStrings", trimTags: "trimTags", ripple: "ripple", tabindex: "tabindex", disable: "disable", dragZone: "dragZone", onRemoving: "onRemoving", onAdding: "onAdding", animationDuration: "animationDuration", inputText: "inputText" }, outputs: { onAdd: "onAdd", onRemove: "onRemove", onSelect: "onSelect", onFocus: "onFocus", onBlur: "onBlur", onTextChange: "onTextChange", onPaste: "onPaste", onValidationError: "onValidationError", onTagEdited: "onTagEdited", inputTextChange: "inputTextChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CUSTOM_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c3, decls: 8, vars: 27, consts: [[1, "ng2-tag-input", 3, "ngClass", "click", "drop", "dragenter", "dragover", "dragend"], [1, "ng2-tags-container"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "inputText", "disabled", "validators", "asyncValidators", "hidden", "placeholder", "inputClass", "inputId", "tabindex", "onSubmit", "onBlur", "click", "onKeydown", "onKeyup"], ["class", "progress-bar", 4, "ngIf"], ["class", "error-messages", 3, "ngClass", 4, "ngIf"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave"], [1, "progress-bar"], [1, "error-messages", 3, "ngClass"], ["class", "error-message", 4, "ngFor", "ngForOf"], [1, "error-message"]], template: function TagInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagInputComponent_Template_div_click_0_listener() { return ctx.focus(true, false); })("drop", function TagInputComponent_Template_div_drop_0_listener($event) { return ctx.dragZone ? ctx.onTagDropped($event, undefined) : undefined; })("dragenter", function TagInputComponent_Template_div_dragenter_0_listener($event) { return ctx.dragZone ? ctx.onDragOver($event) : undefined; })("dragover", function TagInputComponent_Template_div_dragover_0_listener($event) { return ctx.dragZone ? ctx.onDragOver($event) : undefined; })("dragend", function TagInputComponent_Template_div_dragend_0_listener() { return ctx.dragZone ? ctx.dragProvider.onDragEnd() : undefined; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TagInputComponent_tag_2_Template, 1, 14, "tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tag-input-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSubmit", function TagInputComponent_Template_tag_input_form_onSubmit_3_listener() { return ctx.onFormSubmit(); })("onBlur", function TagInputComponent_Template_tag_input_form_onBlur_3_listener() { return ctx.blur(); })("click", function TagInputComponent_Template_tag_input_form_click_3_listener() { return ctx.dropdown ? ctx.dropdown.show() : undefined; })("onKeydown", function TagInputComponent_Template_tag_input_form_onKeydown_3_listener($event) { return ctx.fireEvents("keydown", $event); })("onKeyup", function TagInputComponent_Template_tag_input_form_onKeyup_3_listener($event) { return ctx.fireEvents("keyup", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TagInputComponent_div_4_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TagInputComponent_div_6_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng2-tag-input--dropping", ctx.isDropping())("ng2-tag-input--disabled", ctx.disable)("ng2-tag-input--loading", ctx.isLoading)("ng2-tag-input--invalid", ctx.hasErrors())("ng2-tag-input--focused", ctx.isInputFocused());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputText", ctx.inputText)("disabled", ctx.disable)("validators", ctx.validators)("asyncValidators", ctx.asyncValidators)("hidden", ctx.maxItemsReached)("placeholder", ctx.items.length ? ctx.placeholder : ctx.secondaryPlaceholder)("inputClass", ctx.inputClass)("inputId", ctx.inputId)("tabindex", ctx.tabindex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 25, ctx.isProgressBarVisible$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasErrors());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], TagInputForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], TagComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}.progress-bar[_ngcontent-%COMP%], .progress-bar[_ngcontent-%COMP%]:before{height:2px;width:100%;margin:0}.progress-bar[_ngcontent-%COMP%]{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar[_ngcontent-%COMP%]:before{background-color:#82c4f8;content:\"\";-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly[_ngcontent-%COMP%]{cursor:default}tag.readonly[_ngcontent-%COMP%]:focus, tag[_ngcontent-%COMP%]:focus{outline:0}tag.tag--editing[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active, .minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.minimal[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.dark[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active, .bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.bootstrap[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active, .bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}[_nghost-%COMP%]{display:block}"], data: { animation: animations } });
TagInputComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: DragProvider }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "separatorKeys", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "separatorKeyCodes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "secondaryPlaceholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "maxItems", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "validators", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "asyncValidators", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "onlyFromAutocomplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "errorMessages", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "onTextChangeDebounce", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "inputId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "inputClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "clearOnBlur", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "hideForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "addOnBlur", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "addOnPaste", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "pasteSplitPattern", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "blinkIfDupe", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "removable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "editable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "allowDupes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "modelAsStrings", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "trimTags", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "inputText", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "ripple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "tabindex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "disable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "dragZone", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "onRemoving", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "onAdding", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TagInputComponent.prototype, "animationDuration", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "onAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "onRemove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "onFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "onBlur", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "onTextChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "onPaste", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "onValidationError", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "onTagEdited", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TagInputDropdown)
], TagInputComponent.prototype, "dropdown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { descendants: false })
], TagInputComponent.prototype, "templates", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TagInputForm)
], TagInputComponent.prototype, "inputForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(TagComponent)
], TagInputComponent.prototype, "tags", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TagInputComponent.prototype, "inputTextChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.tabindex')
], TagInputComponent.prototype, "tabindexAttr", null);

let DeleteIconComponent = class DeleteIconComponent {
};
DeleteIconComponent.ɵfac = function DeleteIconComponent_Factory(t) { return new (t || DeleteIconComponent)(); };
DeleteIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteIconComponent, selectors: [["delete-icon"]], decls: 3, vars: 0, consts: [["height", "16px", "viewBox", "0 0 32 32", "width", "16px"], ["d", "M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z", "fill", "#121313"]], template: function DeleteIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}delete-icon[_nghost-%COMP%]{width:20px;height:16px;transition:.15s;display:inline-block;text-align:right}delete-icon[_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#444}delete-icon[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}delete-icon[_nghost-%COMP%]:hover{transform:scale(1.5) translateY(-3px)}.dark[_nghost-%COMP%], .dark   [_nghost-%COMP%]{text-align:right}.dark[_nghost-%COMP%]   path[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.dark[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}.minimal[_nghost-%COMP%], .minimal   [_nghost-%COMP%]{text-align:right}.minimal[_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#444}.minimal[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}.bootstrap[_nghost-%COMP%], .bootstrap   [_nghost-%COMP%]{text-align:right}.bootstrap[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.bootstrap[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}tag[_nghost-%COMP%]:active   path[_ngcontent-%COMP%], tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], tag[_nghost-%COMP%]:focus   path[_ngcontent-%COMP%], tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.darktag[_nghost-%COMP%]:active   path[_ngcontent-%COMP%], .darktag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .darktag[_nghost-%COMP%]:focus   path[_ngcontent-%COMP%], .darktag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.minimaltag[_nghost-%COMP%]:active   path[_ngcontent-%COMP%], .minimaltag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimaltag[_nghost-%COMP%]:focus   path[_ngcontent-%COMP%], .minimaltag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.bootstraptag[_nghost-%COMP%]:active   path[_ngcontent-%COMP%], .bootstraptag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstraptag[_nghost-%COMP%]:focus   path[_ngcontent-%COMP%], .bootstraptag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.bootstrap3-info[_nghost-%COMP%], .bootstrap3-info   [_nghost-%COMP%]{height:inherit}.bootstrap3-info[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap3-info   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}"] });

const optionsProvider = new OptionsProvider();
let TagInputModule = class TagInputModule {
    /**
     * @name withDefaults
     * @param options {Options}
     */
    static withDefaults(options) {
        optionsProvider.setOptions(options);
    }
};
TagInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TagInputModule });
TagInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TagInputModule_Factory(t) { return new (t || TagInputModule)(); }, providers: [
        DragProvider,
        { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"], useValue: false },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'highlight'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return []; }, { displayBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], identifyBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputForm, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tag-input-form',
                template: "<!-- form -->\n<form (ngSubmit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n           formControlName=\"item\"\n\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyUp($event)\"\n    />\n</form>\n",
                styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}"]
            }]
    }], function () { return []; }, { onSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onKeyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], inputTextChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], validators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], asyncValidators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagRipple, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tag-ripple',
                template: `
        <div class="tag-ripple" [@ink]="state"></div>
    `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('ink', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: 0, opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('none => clicked', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, offset: 0.5, width: '50%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                            ]))
                        ])
                    ])
                ],
                styles: [`
        :host {
            width: 100%;
            height: 100%;
            left: 0;
            overflow: hidden;
            position: absolute;
        }

        .tag-ripple {
            background: rgba(0, 0, 0, 0.1);
            top: 50%;
            left: 50%;
            height: 100%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
    `]
            }]
    }], function () { return []; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tag',
                template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
                styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onTagEdited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], moving: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.moving']
        }], 
    /**
     * @name keydown
     * @param event
     */
    keydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
        }], model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], identifyBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hasRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], canAddTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [TagRipple]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputDropdown, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tag-input-dropdown',
                template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, { offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusFirstElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showDropdownIfEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minimumTextLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], limitItemsTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], identifyBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], matchingFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], keepOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dynamicUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autocompleteItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], 
    /**
     * @name scrollListener
     */
    scrollListener: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll']
        }], 
    /**
     * @name onWindowBlur
     */
    onWindowBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:blur']
        }], dropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2Dropdown"]]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
        }], autocompleteObservable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tag-input',
                providers: [CUSTOM_ACCESSOR],
                template: "<div\n    [ngClass]=\"theme\"\n    class=\"ng2-tag-input\"\n    (click)=\"focus(true, false)\"\n    [attr.tabindex]=\"-1\"\n    (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n    (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n    (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n    [class.ng2-tag-input--dropping]=\"isDropping()\"\n    [class.ng2-tag-input--disabled]=\"disable\"\n    [class.ng2-tag-input--loading]=\"isLoading\"\n    [class.ng2-tag-input--invalid]=\"hasErrors()\"\n    [class.ng2-tag-input--focused]=\"isInputFocused()\"\n>\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag\n            *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n            (onSelect)=\"selectItem(item)\"\n            (onRemove)=\"onRemoveRequested(item, i)\"\n            (onKeyDown)=\"handleKeydown($event)\"\n            (onTagEdited)=\"updateEditedTag($event)\"\n            (onBlur)=\"onTagBlurred($event, i)\"\n            draggable=\"{{ editable }}\"\n            (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n            (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n            (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n            (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n            (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n            [canAddTag]=\"isTagValid\"\n            [attr.tabindex]=\"0\"\n            [disabled]=\"disable\"\n            [@animation]=\"animationMetadata\"\n            [hasRipple]=\"ripple\"\n            [index]=\"i\"\n            [removable]=\"removable\"\n            [editable]=\"editable\"\n            [displayBy]=\"displayBy\"\n            [identifyBy]=\"identifyBy\"\n            [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n            [draggable]=\"dragZone\"\n            [model]=\"item\"\n        >\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onFormSubmit()\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n            [inputText]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\"\n        >\n        </tag-input-form>\n    </div>\n\n    <div\n        class=\"progress-bar\"\n        *ngIf=\"isProgressBarVisible$ | async\"\n    ></div>\n</div>\n\n<!-- ERRORS -->\n<div\n    *ngIf=\"hasErrors()\"\n    [ngClass]=\"theme\"\n    class=\"error-messages\"\n>\n    <p\n        *ngFor=\"let error of errors\"\n        class=\"error-message\"\n    >\n        <span>{{ error }}</span>\n    </p>\n</div>\n<ng-content></ng-content>\n",
                animations,
                styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:\"\";-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):active,.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):active,.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active,.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: DragProvider }]; }, { separatorKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], separatorKeyCodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], secondaryPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], validators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], asyncValidators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onlyFromAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], errorMessages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onTextChangeDebounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clearOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], addOnBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], addOnPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pasteSplitPattern: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], blinkIfDupe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowDupes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], modelAsStrings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], trimTags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dragZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onRemoving: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onAdding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onTextChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onValidationError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onTagEdited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], inputTextChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], inputText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tabindexAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.tabindex']
        }], dropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [TagInputDropdown]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { descendants: false }]
        }], inputForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [TagInputForm]
        }], tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [TagComponent]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeleteIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'delete-icon',
                template: "<span>\n    <svg\n        height=\"16px\"\n        viewBox=\"0 0 32 32\"\n        width=\"16px\"\n    >\n        <path\n            d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n            fill=\"#121313\"\n        />\n    </svg>\n</span>",
                styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;transition:.15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:active) path,:host-context(tag:focus) path{fill:#fff}:host-context(.darktag:active) path,:host-context(.darktag:focus) path{fill:#000}:host-context(.minimaltag:active) path,:host-context(.minimaltag:focus) path{fill:#000}:host-context(.bootstraptag:active) path,:host-context(.bootstraptag:focus) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}"]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TagInputModule, { declarations: function () { return [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]]; }, exports: function () { return [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_4__["Ng2DropdownModule"]
                ],
                declarations: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                exports: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                providers: [
                    DragProvider,
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"], useValue: false },
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-chips.js.map

/***/ }),

/***/ "rZHr":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article.component */ "DLXL");
/* harmony import */ var _article_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-routing.module */ "AT9Q");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "Kb4U");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review/review.component */ "jX04");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_modal */ "dPr5");




// import { SocialLoginModule } from 'ng-social-login-module';











class ArticleModule {
}
ArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArticleModule });
ArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArticleModule_Factory(t) { return new (t || ArticleModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _article_routing_module__WEBPACK_IMPORTED_MODULE_7__["ArticleRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"].forRoot(),
            // SocialLoginModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArticleModule, { declarations: [_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"],
        _review_review_component__WEBPACK_IMPORTED_MODULE_10__["ReviewComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _article_routing_module__WEBPACK_IMPORTED_MODULE_7__["ArticleRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"], _modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"],
                    _review_review_component__WEBPACK_IMPORTED_MODULE_10__["ReviewComponent"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _article_routing_module__WEBPACK_IMPORTED_MODULE_7__["ArticleRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"].forRoot(),
                    // SocialLoginModule,
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                    _modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-article-article-module.js.map