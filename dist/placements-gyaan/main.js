(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anjalisingh/Downloads/placements-gyaan-main/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "header"], [1, "div", "logo-box"], ["src", "../../assets/img/placements-gyaan.png", "alt", "placements gyaan", 1, "logo"], [1, "text-box"], [1, "heading-primary"], [1, "heading-primary-main"], [1, "heading-primary-sub"], ["href", "#", 1, "btn", "btn-white", "btn-animated"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Placements Gyaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "help at one place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Discover Archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.7;\n  color: #777;\n  padding: 50px;\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(128, 214, 113, 0.801), rgba(39, 180, 133, 0.801)), url(\"https://images.unsplash.com/photo-1521791136064-7986c2920216?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\");\n  background-size: cover;\n  background-position: top;\n  position: relative;\n  -webkit-clip-path: polygon(0 0, 100% 0%, 100% 85vh, 0% 100%);\n          clip-path: polygon(0 0, 100% 0%, 100% 85vh, 0% 100%);\n}\n\n.logo-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 40px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 35px;\n  animation-name: moveInRight;\n  animation-duration: 1s;\n  animation-timing-function: ease-out;\n}\n\n\n\n.text-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.heading-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-bottom: 40px;\n}\n\n.heading-primary-main[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 40px;\n  font-weight: 400;\n  letter-spacing: 10px;\n  animation-name: moveInLeft;\n  animation-duration: 1s;\n  animation-timing-function: ease-out;\n}\n\n.heading-primary-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 22.5px;\n  animation-name: moveInRight;\n  animation-duration: 1s;\n  animation-timing-function: ease-out;\n}\n\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-100px);\n  }\n  80% {\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n  80% {\n    transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 15px 40px;\n  display: inline-block;\n  border-radius: 100px;\n  transition: all;\n  position: relative;\n  \n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n\n.btn[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.btn-white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #777;\n}\n\n.btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 100px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n\n.btn-white[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n}\n\n.btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1.5) scaleY(1.6);\n  opacity: 0;\n}\n\n.btn-animated[_ngcontent-%COMP%] {\n  animation: moveInBottom 1s ease-out 0.75s;\n  animation-fill-mode: backwards;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrUkFBQTtFQUtBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUFISjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7QUFKSjs7QUFPQTs7OztHQUFBOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FBUEo7O0FBWUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7QUFUSjs7QUFZQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBVE47RUFZRTtJQUNJLDJCQUFBO0VBVk47RUFhRTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFQVhOO0FBQ0Y7O0FBY0E7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQVpOO0VBZUU7SUFDSSw0QkFBQTtFQWJOO0VBZ0JFO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VBZE47QUFDRjs7QUFrQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQWhCTjtFQW1CRTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFQWpCTjtBQUNGOztBQW9CQTs7RUFFSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFsQkw7O0FBc0JBO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtBQW5CSjs7QUFxQkE7RUFDSSwyQkFBQTtFQUNBLHlDQUFBO0FBbEJKOztBQXVCQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQXBCSjs7QUF1QkE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxzQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxrQ0FBQTtFQUNBLFVBQUE7QUFwQko7O0FBdUJBO0VBQ0kseUNBQUE7RUFDQSw4QkFBQTtBQXBCSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIixzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OjEuNztcbiAgICBjb2xvcjojNzc3O1xuICAgIHBhZGRpbmc6NTBweDtcbn1cblxuLmhlYWRlcntcbiAgICBoZWlnaHQ6OTV2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQgYm90dG9tLFxuICAgICAgICBoc2xhKDExMSwgNTUlLCA2NCUsIDAuODAxKSxcbiAgICAgICAgaHNsYSgxNjAsIDY0JSwgNDMlLCAwLjgwMSkpLCBcbiAgICAgICAgdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMTc5MTEzNjA2NC03OTg2YzI5MjAyMTY/aXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCUsIDEwMCUgODV2aCwgMCUgMTAwJSk7XG5cbn1cblxuLmxvZ28tYm94e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgbGVmdDogNDBweDtcbn1cblxuLmxvZ297XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlSW5SaWdodDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG4vKiAubG9nbzpob3ZlciB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJblJpZ2h0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59ICovXG5cbi50ZXh0LWJveHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uaGVhZGluZy1wcmltYXJ5e1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbn1cblxuLmhlYWRpbmctcHJpbWFyeS1tYWlue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOjEwcHggO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlSW5MZWZ0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG5cblxufVxuXG4uaGVhZGluZy1wcmltYXJ5LXN1YntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzoyMi41cHggO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlSW5SaWdodDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmVJbkxlZnR7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgfVxuXG4gICAgODAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgfVxuXG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlSW5SaWdodHtcbiAgICAwJXtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICAgIH1cblxuICAgIDgwJXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbiAgICB9XG5cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxufVxuXG5cbkBrZXlmcmFtZXMgbW92ZUluQm90dG9te1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gICAgfVxuXG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuLmJ0bjpsaW5rLFxuLmJ0bjp2aXNpdGVke1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgIHRyYW5zaXRpb246IGFsbCA7XG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgLyogYW5pbWF0aW9uOiBtb3ZlSW5Cb3R0b20gMXM7ICovXG5cbn1cblxuLmJ0bjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG59XG4uYnRuOmFjdGl2ZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLC4yKTtcblxufVxuXG5cbi5idG4td2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzc3Nztcbn1cblxuLmJ0bjo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xufVxuXG4uYnRuLXdoaXRlOjphZnRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYnRuOmhvdmVyOjphZnRlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjUpIHNjYWxlWSgxLjYpO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5idG4tYW5pbWF0ZWR7XG4gICAgYW5pbWF0aW9uOiBtb3ZlSW5Cb3R0b20gMXMgZWFzZS1vdXQgLjc1cztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vt0":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");



class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let AuthService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["OurAuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer ${AuthService.getToken()}'
            }
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


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

/***/ "K90U":
/*!************************************************!*\
  !*** ./src/app/all-post/all-post.component.ts ***!
  \************************************************/
/*! exports provided: AllPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPostComponent", function() { return AllPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Api-Data/api-data.service */ "yc3H");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_modal */ "dPr5");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_modal/modal.component */ "zALO");











function AllPostComponent_div_16_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const problems_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", problems_r4.problem_view_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", problems_r4.problem_name, "");
} }
function AllPostComponent_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllPostComponent_div_16_div_3_div_1_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.problems);
} }
function AllPostComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "zak-modal", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllPostComponent_div_16_div_3_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllPostComponent_div_16_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.modalService.open(item_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "View Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.problems.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.userId.google.pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r1.userId.google.name, " ( ", item_r1.company, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.date.substring(0, 10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, "");
} }
const _c0 = function (a1, a2, a3) { return { id: "foo", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
class AllPostComponent {
    constructor(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.articleTitleSearched = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.all_company = ["GOOGLE", "ADOBE", "JUNIPER NETWORKS", "MICROSOFT", "INTEL", "CISCO", "HONEYWELL", "TCS", "INFOSYS", "AMAZON"];
        this.all_year = ["2021", '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002'];
        this.p = 1;
        this.total = 100;
        this.pageSize = 10;
    }
    searchByArticleTitle() {
        this.articleTitleSearched.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => {
            console.log(e.target.value);
            return e.target.value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(word => {
            word.trim();
            return this.searchArticle(word);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.log(err);
            this.errorMessage = err.message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        })).subscribe(val => {
            this.articlesFetched = val;
            console.log(`Articles fetched based on Titlee`);
        });
    }
    // Observing the changes recieved when subject is used
    searchArticle(word) {
        word = word.trim();
        if (word === "") {
            console.log("no word entered");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        else {
            return this.dataService.getData("/articles/getArticlesByCompanyVerified/" + word).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
                console.log(response);
                this.articlesFetched = response;
                this.arrayList = this.articlesFetched.articles;
                for (let i = 0; i < this.arrayList.length; i++) {
                    this.arrayList[i].selected = "no";
                    // console.log(this.arrayList[i]);
                    if (this.arrayList[i].createdAt != null) {
                        let d = new Date(this.arrayList[i].createdAt);
                        this.arrayList[i].createdAt = (d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate());
                    }
                    // this.arrayList[i].createdAt=  this.arrayList[i].createdAt.slice(0,10)
                }
                console.log("Articles fetched based on company Name");
                this.all_posts = this.arrayList;
                console.log(this.arrayList);
            }));
        }
    }
    ngOnInit() {
        this.searchByArticleTitle();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.dataService.postData('/get/articles', { page: this.p, limit: this.pageSize }).subscribe(data => {
            console.log(data);
            this.all_posts = data['data'];
            this.total = data['total'];
        });
        google.charts.load('current', { 'packages': ['corechart'] });
        this.dataService.getData('/pie/stats').subscribe(d => {
            this.placed_count = d;
            google.charts.setOnLoadCallback(this.initPieGraph());
        });
    }
    onStatusSelect(item) {
        this.getProfileData();
    }
    onStatusAll(item) {
        this.getProfileData();
    }
    onStatusDeSelect(item) {
        this.getProfileData();
    }
    onStatusDeSelectAll(item) {
        this.getProfileData();
        console.log("selected all");
    }
    onChange(page) {
        this.p = page;
        this.dataService.postData('/get/articles', { page: this.p, limit: this.pageSize }).subscribe(data => {
            console.log(data);
            this.all_posts = data['data'];
            this.total = data['total'];
        });
    }
    getProfileData() {
    }
    initPieGraph() {
        var data = google.visualization.arrayToDataTable([
            ['Status', 'Total'],
            ['Rejected', this.placed_count['rejected']],
            ['Placed', this.placed_count['accepted']],
        ]);
        var options = {
            title: 'Placement Stats',
            //is3D: true,
            pieHole: 0.4,
            colors: ['#EC6F19', 'green', '#7D06D3']
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
}
AllPostComponent.ɵfac = function AllPostComponent_Factory(t) { return new (t || AllPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_3__["ApiDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal__WEBPACK_IMPORTED_MODULE_4__["ModalService"])); };
AllPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllPostComponent, selectors: [["app-all-post"]], decls: 20, vars: 16, consts: [[1, "container"], [1, "row", 2, "margin-bottom", "20px"], [1, "col-sm-4"], ["type", "text", "placeholder", "Search...", 1, "col-sm-12", 3, "keyup"], [3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onSelectAll", "onDeSelect", "onDeSelectAll"], [1, "content"], [1, "row"], [1, "col-xl-4"], ["id", "piechart", 1, "styling", "graph", "mt-3"], [1, "card-box"], [1, "col-xl-8"], ["class", "card mt-2", 4, "ngFor", "ngForOf"], [1, "pagination", "pagination-sm", "m-0", "float-right"], ["id", "foo", 3, "pageChange"], [1, "card", "mt-2"], [3, "id"], ["class", "taggedProblems", 4, "ngIf"], [1, "ql-container", "ql-snow", 2, "border-width", "0"], [1, "ql-editor", 3, "innerHTML"], [1, "card-header"], [1, "float-left"], ["alt", "Avatar", 3, "src"], [1, "float-right", 2, "margin-top", "0.6rem"], [1, "card-body"], [1, "card-title"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", 3, "click"], [1, "taggedProblems"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["target", "_blank", 1, "btn", "btn-outline-warning", 3, "href"]], template: function AllPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AllPostComponent_Template_input_keyup_3_listener($event) { return ctx.articleTitleSearched.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ng-multiselect-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllPostComponent_Template_ng_multiselect_dropdown_ngModelChange_5_listener($event) { return ctx.selected_all_company = $event; })("onSelect", function AllPostComponent_Template_ng_multiselect_dropdown_onSelect_5_listener($event) { return ctx.onStatusSelect($event); })("onSelectAll", function AllPostComponent_Template_ng_multiselect_dropdown_onSelectAll_5_listener($event) { return ctx.onStatusAll($event); })("onDeSelect", function AllPostComponent_Template_ng_multiselect_dropdown_onDeSelect_5_listener($event) { return ctx.onStatusDeSelect($event); })("onDeSelectAll", function AllPostComponent_Template_ng_multiselect_dropdown_onDeSelectAll_5_listener($event) { return ctx.onStatusDeSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-multiselect-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllPostComponent_Template_ng_multiselect_dropdown_ngModelChange_7_listener($event) { return ctx.selected_all_year = $event; })("onSelect", function AllPostComponent_Template_ng_multiselect_dropdown_onSelect_7_listener($event) { return ctx.onStatusSelect($event); })("onSelectAll", function AllPostComponent_Template_ng_multiselect_dropdown_onSelectAll_7_listener($event) { return ctx.onStatusAll($event); })("onDeSelect", function AllPostComponent_Template_ng_multiselect_dropdown_onDeSelect_7_listener($event) { return ctx.onStatusDeSelect($event); })("onDeSelectAll", function AllPostComponent_Template_ng_multiselect_dropdown_onDeSelectAll_7_listener($event) { return ctx.onStatusDeSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllPostComponent_div_16_Template, 17, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pagination-controls", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllPostComponent_Template_pagination_controls_pageChange_19_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Site")("settings", ctx.dropdownSettings)("data", ctx.all_company)("ngModel", ctx.selected_all_company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Year")("settings", ctx.dropdownSettings)("data", ctx.all_year)("ngModel", ctx.selected_all_year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 9, ctx.all_posts, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c0, ctx.pageSize, ctx.p, ctx.total)));
    } }, directives: [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".thumb-lg[_ngcontent-%COMP%] {\n  height: 88px;\n  width: 88px;\n}\n\n.profile-user-box[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom right, #74f189, #2c8633) !important;\n}\n\n.profile-user-box[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n}\n\n.card-box[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 3px;\n  margin-bottom: 30px;\n  background-color: #fff;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f6f8;\n  overflow: hidden;\n  padding: 10px 0;\n  position: relative;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   .inbox-item-img[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  margin-right: 15px;\n  width: 40px;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.styling[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   .inbox-item-author[_ngcontent-%COMP%] {\n  color: #313a46;\n  display: block;\n  margin: 0;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   .inbox-item-text[_ngcontent-%COMP%] {\n  color: #98a6ad;\n  display: block;\n  font-size: 14px;\n  margin: 0;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   .inbox-item-date[_ngcontent-%COMP%] {\n  color: #98a6ad;\n  font-size: 11px;\n  position: absolute;\n  right: 7px;\n  top: 12px;\n}\n\n.comment-list[_ngcontent-%COMP%]   .comment-box-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.comment-list[_ngcontent-%COMP%]   .comment-box-item[_ngcontent-%COMP%]   .commnet-item-date[_ngcontent-%COMP%] {\n  color: #98a6ad;\n  font-size: 11px;\n  position: absolute;\n  right: 7px;\n  top: 2px;\n}\n\n.comment-list[_ngcontent-%COMP%]   .comment-box-item[_ngcontent-%COMP%]   .commnet-item-msg[_ngcontent-%COMP%] {\n  color: #313a46;\n  display: block;\n  margin: 10px 0;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 24px;\n}\n\n.comment-list[_ngcontent-%COMP%]   .comment-box-item[_ngcontent-%COMP%]   .commnet-item-user[_ngcontent-%COMP%] {\n  color: #98a6ad;\n  display: block;\n  font-size: 14px;\n  margin: 0;\n}\n\n.comment-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: block;\n}\n\n.ribbon-box[_ngcontent-%COMP%]   .ribbon-primary[_ngcontent-%COMP%] {\n  background: #2d7bf4;\n}\n\n.ribbon-box[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n  position: relative;\n  float: left;\n  clear: both;\n  padding: 5px 12px 5px 12px;\n  margin-left: -30px;\n  margin-bottom: 15px;\n  font-family: Rubik, sans-serif;\n  -o-box-shadow: 2px 5px 10px rgba(49, 58, 70, 0.15);\n  box-shadow: 2px 5px 10px rgba(49, 58, 70, 0.15);\n  color: #fff;\n  font-size: 13px;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: #02c0ce !important;\n}\n\n.badge-custom[_ngcontent-%COMP%] {\n  background: #02c0ce;\n  color: #fff;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-family: Rubik, sans-serif;\n  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);\n  padding: 0.35em 0.5em;\n  font-weight: 500;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #98a6ad !important;\n}\n\n.font-13[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n\n.graphs[_ngcontent-%COMP%] {\n  min-height: 130px;\n  padding: 5%;\n}\n\n.problem-text-solved[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: green;\n}\n\n.problem-text-partially_solved[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: gray;\n}\n\n.problem-text-unsolved[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: red;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  height: 2.4rem;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 2.5rem;\n  padding: 0;\n  margin: 0;\n  position: relative;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 0.45rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 1.59rem !important;\n  padding-left: 1.6rem !important;\n  padding-right: 1.6rem !important;\n  background-color: white;\n  color: black;\n  cursor: pointer;\n  margin-bottom: 0.5rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 1rem !important;\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n  color: black;\n  cursor: pointer;\n  margin: 0.5rem;\n}\n\n.problem-container[_ngcontent-%COMP%] {\n  max-height: 200px;\n  max-width: 500px;\n  margin-left: 15%;\n  overflow-y: scroll;\n  justify-content: center;\n}\n\n.taggedProblems[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FsbC1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLCtFQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7QUFLSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFLSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBS0o7O0FBRkE7RUFDSSxrQkFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBS0o7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBS0o7O0FBRkE7RUFDSSxtQkFBQTtBQUtKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0RBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEE7RUFDSSx5QkFBQTtBQU1KOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBTUo7O0FBSkE7RUFDSSw4QkFBQTtFQUVBLHlFQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0kseUJBQUE7QUFRSjs7QUFMQTtFQUNJLDBCQUFBO0FBUUo7O0FBTEE7RUFDSyxpQkFBQTtFQUNBLFdBQUE7QUFRTDs7QUFMQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVFBOztBQUxBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTEE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUFRSjs7QUFKQTtFQUNJLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBT0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSEU7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtBQU1KOztBQUZBO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBRkE7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFLRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBS0YiLCJmaWxlIjoiYWxsLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aHVtYi1sZyB7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIHdpZHRoOiA4OHB4O1xufVxuLnByb2ZpbGUtdXNlci1ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcbn1cbi5iZy1jdXN0b20ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCAsIzc0ZjE4OSwjMmM4NjMzKSAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGUtdXNlci1ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jYXJkLWJveCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmluYm94LXdpZGdldCAuaW5ib3gtaXRlbSBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZXtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmluYm94LXdpZGdldCAuaW5ib3gtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2Y2Zjg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5pbmJveC13aWRnZXQgLmluYm94LWl0ZW0gLmluYm94LWl0ZW0taW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDQwcHhcbn1cblxuLmluYm94LXdpZGdldCAuaW5ib3gtaXRlbSBpbWcge1xuICAgIHdpZHRoOiA0MHB4XG59XG5cbi5zdHlsaW5ne1xuICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5pbmJveC13aWRnZXQgLmluYm94LWl0ZW0gLmluYm94LWl0ZW0tYXV0aG9yIHtcbiAgICBjb2xvcjogIzMxM2E0NjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBcbn1cblxuLmluYm94LXdpZGdldCAuaW5ib3gtaXRlbSAuaW5ib3gtaXRlbS10ZXh0IHtcbiAgICBjb2xvcjogIzk4YTZhZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwXG59XG5cbi5pbmJveC13aWRnZXQgLmluYm94LWl0ZW0gLmluYm94LWl0ZW0tZGF0ZSB7XG4gICAgY29sb3I6ICM5OGE2YWQ7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogN3B4O1xuICAgIHRvcDogMTJweFxufVxuXG4uY29tbWVudC1saXN0IC5jb21tZW50LWJveC1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcbn1cblxuLmNvbW1lbnQtbGlzdCAuY29tbWVudC1ib3gtaXRlbSAuY29tbW5ldC1pdGVtLWRhdGUge1xuICAgIGNvbG9yOiAjOThhNmFkO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDdweDtcbiAgICB0b3A6IDJweFxufVxuXG4uY29tbWVudC1saXN0IC5jb21tZW50LWJveC1pdGVtIC5jb21tbmV0LWl0ZW0tbXNnIHtcbiAgICBjb2xvcjogIzMxM2E0NjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjRweFxufVxuXG4uY29tbWVudC1saXN0IC5jb21tZW50LWJveC1pdGVtIC5jb21tbmV0LWl0ZW0tdXNlciB7XG4gICAgY29sb3I6ICM5OGE2YWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMFxufVxuXG4uY29tbWVudC1saXN0IGErYSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9ja1xufVxuXG4ucmliYm9uLWJveCAucmliYm9uLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICMyZDdiZjQ7XG59XG5cbi5yaWJib24tYm94IC5yaWJib24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogYm90aDtcbiAgICBwYWRkaW5nOiA1cHggMTJweCA1cHggMTJweDtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LWZhbWlseTogUnViaWssc2Fucy1zZXJpZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggMTBweCByZ2JhKDQ5LDU4LDcwLC4xNSk7XG4gICAgLW8tYm94LXNoYWRvdzogMnB4IDVweCAxMHB4IHJnYmEoNDksNTgsNzAsLjE1KTtcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggcmdiYSg0OSw1OCw3MCwuMTUpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi50ZXh0LWN1c3RvbSB7XG4gICAgY29sb3I6ICMwMmMwY2UhaW1wb3J0YW50O1xufVxuXG4uYmFkZ2UtY3VzdG9tIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDJjMGNlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJhZGdlIHtcbiAgICBmb250LWZhbWlseTogUnViaWssc2Fucy1zZXJpZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyNHB4IDAgcmdiYSgwLDAsMCwuMDYpLCAwIDFweCAwIDAgcmdiYSgwLDAsMCwuMDIpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyNHB4IDAgcmdiYSgwLDAsMCwuMDYpLCAwIDFweCAwIDAgcmdiYSgwLDAsMCwuMDIpO1xuICAgIHBhZGRpbmc6IC4zNWVtIC41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50ZXh0LW11dGVkIHtcbiAgICBjb2xvcjogIzk4YTZhZCFpbXBvcnRhbnQ7XG59XG5cbi5mb250LTEzIHtcbiAgICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xufVxuXG4uZ3JhcGhze1xuICAgICBtaW4taGVpZ2h0OiAxMzBweDtcbiAgICAgcGFkZGluZzo1JTtcbiAgfVxuXG4ucHJvYmxlbS10ZXh0LXNvbHZlZHtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmNvbG9yOmdyZWVuO1xufVxuXG4ucHJvYmxlbS10ZXh0LXBhcnRpYWxseV9zb2x2ZWR7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgY29sb3I6Z3JheTtcbn1cblxuLnByb2JsZW0tdGV4dC11bnNvbHZlZHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6cmVkO1xuXG59XG5cbmJ1dHRvbiwgaW5wdXQsIG9wdGdyb3VwLCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGhlaWdodDogMi40cmVtO1xufVxuXG5cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDoyLjVyZW07XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogLjQ1cmVtIDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG59XG5cblxuYnV0dG9ue1xuICBib3JkZXItcmFkaXVzOiAxLjU5cmVtIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxLjZyZW0haW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxLjZyZW0haW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4uYnRue1xuICBib3JkZXItcmFkaXVzOiAxcmVtIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMXJlbSFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IC41cmVtO1xufVxuXG4ucHJvYmxlbS1jb250YWluZXJ7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGFnZ2VkUHJvYmxlbXN7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-post',
                templateUrl: './all-post.component.html',
                styleUrls: ['./all-post.component.scss']
            }]
    }], function () { return [{ type: _Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_3__["ApiDataService"] }, { type: _modal__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "OWb/":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "RMzS");



class BodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 1, vars: 0, template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2R5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-body',
                templateUrl: './body.component.html',
                styleUrls: ['./body.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "P3Ho":
/*!****************************************************!*\
  !*** ./src/app/article/create/create.component.ts ***!
  \****************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api-Data/api-data.service */ "yc3H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth.service */ "ccyI");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function CreateComponent_div_26_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateComponent_div_26_div_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.removeTag(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r3.problem_name, " ");
} }
function CreateComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateComponent_div_26_div_1_button_1_Template, 4, 1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.selected == "yes");
} }
function CreateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateComponent_div_26_div_1_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.problems_selected);
} }
function CreateComponent_div_38_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateComponent_div_38_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.addProblem(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r10.problem_name, "");
} }
function CreateComponent_div_38_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateComponent_div_38_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.removeProblem(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r10.problem_name, "");
} }
function CreateComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CreateComponent_div_38_button_1_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateComponent_div_38_button_2_Template, 2, 1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r10.selected != "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r10.selected == "yes");
} }
const _c0 = function () { return { "height": "512px" }; };
class CreateComponent {
    constructor(dataService, route, router, authService) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.items = [
            { display: 'Pizza', value: 1 },
            { display: 'Pasta', value: 2 },
            { display: 'Parmesan', value: 3 },
        ];
        this.options = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                // [{ 'direction': 'rtl' }],                         // text direction
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': ["white"] }],
                [{ 'align': [] }],
                ['link', 'image', 'video']
            ],
            syntax: true
        };
        this.problemNameSearched = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.problems_selected = [];
        this.isLoading = false;
        this.editorialForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required }),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required }),
            // tags: new FormControl('', { validators: Validators.required }),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`
      <h3><strong style="color: rgb(0, 102, 204);">Summary of Test and Questions:</strong></h3><p><br></p><p><br></p><p><br></p><h3><strong style="color: rgb(0, 102, 204);">Concepts covered in the coding section of the test:</strong></h3><h3><br></h3><p><br></p><p><br></p><h3><strong style="color: rgb(0, 102, 204);">Concepts covered in the MCQ section of the test:</strong></h3><h3><br></h3><p><br></p><h3><br></h3><h3><strong style="color: rgb(0, 102, 204);">Concepts that were given more weightage:</strong></h3><h3><br></h3><p><br></p><p><br></p><h3><strong style="color: rgb(0, 102, 204);">Additional remarks/resources to help your junior batches from your experience today:</strong></h3><h3><br></h3><p><br></p><p><br></p>
      `, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required }),
        });
        this.problemsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            problem_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
    }
    onSubmit() {
        let dataToSubmit = this.editorialForm.value;
        let problemIds = [];
        for (let i = 0; i < this.problems_selected.length; i++) {
            problemIds.push(this.problems_selected[i]._id);
        }
        dataToSubmit.problemIds = problemIds;
        console.log(dataToSubmit);
        this.dataService.postData('/article/create', this.editorialForm.value).subscribe((d) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(d);
            console.log("added");
            alert('Added Successfully');
        }));
    }
    // Searching for problem based on problem name using a subject
    searchByProblemName() {
        this.problemNameSearched.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((e) => {
            console.log(e.target.value);
            return e.target.value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(word => {
            word.trim();
            return this.searchProblem(word);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log(err);
            this.errorMessage = err.message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        })).subscribe(val => {
            this.problemsFetched = val;
            console.log(`problems fetched based on problem name`);
        });
    }
    // Observing the changes recieved when subject is used
    searchProblem(word) {
        word = word.trim();
        if (word === "") {
            console.log("no word entered");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }
        else {
            return this.dataService.getData(`/problems/getProblemByName/${word}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
                console.log(response);
                this.problemsFetched = response;
                this.arrayList = this.problemsFetched.problems;
                for (let i = 0; i < this.arrayList.length; i++) {
                    this.arrayList[i].selected = "no";
                    // console.log(this.arrayList[i]);
                    if (this.arrayList[i].createdAt != null) {
                        let d = new Date(this.arrayList[i].createdAt);
                        this.arrayList[i].createdAt = (d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate());
                    }
                    // this.arrayList[i].createdAt=  this.arrayList[i].createdAt.slice(0,10)
                }
                console.log("Problems fetched based on problem Name");
                console.log(this.arrayList);
            }));
        }
    }
    ngOnInit() {
        this.arrayList = [];
        this.searchByProblemName();
    }
    addProblem(position) {
        this.problems_selected.push(this.arrayList[position]);
        this.arrayList[position].selected = "yes";
        console.log(this.problems_selected);
    }
    removeTag(position) {
        this.current_problem = this.problems_selected[position];
        let fg = 0;
        for (let i = 0; i < this.arrayList.length; i++) {
            if (this.current_problem == this.arrayList[i]) {
                fg = 1;
                this.problems_selected.splice(position, 1);
                this.arrayList[i].selected = "no";
                break;
            }
        }
        if (!fg) {
            console.log(`problem not in array list removing from default`);
            this.problems_selected.splice(position, 1);
        }
        console.log("tag removed");
    }
    removeProblem(position) {
        this.current_problem = this.arrayList[position];
        let fg = 0;
        for (let i = 0; i < this.problems_selected.length; i++) {
            if (this.current_problem === this.problems_selected[i]) {
                // delete this.problems_selected[i];
                fg = 1;
                this.problems_selected.splice(i, 1);
                this.arrayList[position].selected = "no";
                break;
            }
        }
        if (!fg) {
            console.log(`problem not in array list removing from default`);
            this.problems_selected.splice(position, 1);
        }
        console.log(this.problems_selected);
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_5__["ApiDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_7__["OurAuthService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 41, vars: 7, consts: [[1, "container"], [1, "row"], [1, "col-md-12", "mt-5"], [3, "formGroup", "ngSubmit"], [1, "col-sm-5", "mt-3"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "formControlName", "title", 1, "form-control"], [1, "col-sm-4", "mt-3"], ["type", "text", "formControlName", "company", 1, "form-control"], [1, "col-sm-3", "mt-3"], ["type", "date", "formControlName", "date", 1, "form-control"], [1, "mt-3"], ["formControlName", "content", 3, "styles", "modules"], ["class", "taggedProblems", 4, "ngIf"], [1, "mt-2", 3, "formGroup"], [1, "col-9", "mt-3", "mx-3"], ["for", "inlineFormInputGroup", 1, "sr-only"], [1, "input-group", "mb-2"], [1, "input-group-text"], ["type", "text", "id", "inlineFormInputGroup", "placeholder", "Enter Problem Name", 1, "form-control", 3, "keyup"], [1, "problem-container"], ["class", "", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-success", "float-right", 2, "padding-left", "30px", "padding-right", "30px"], [1, "taggedProblems"], [1, ""], ["class", "warning tagged", 3, "click", 4, "ngIf"], [1, "warning", "tagged", 3, "click"], ["aria-hidden", "true", 1, "close-icon"], ["class", "info", 3, "click", 4, "ngIf"], ["class", "danger", 3, "click", 4, "ngIf"], [1, "info", 3, "click"], [1, "danger", 3, "click"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "quill-editor", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CreateComponent_div_26_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Enter Problem Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Tag Problems");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function CreateComponent_Template_input_keyup_36_listener($event) { return ctx.problemNameSearched.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, CreateComponent_div_38_Template, 3, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.editorialForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("modules", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.problems_selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.problemsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.arrayList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["button[_ngcontent-%COMP%] {\n  border-radius: 1.59rem !important;\n  padding-left: 1.6rem !important;\n  padding-right: 1.6rem !important;\n  background-color: white;\n  color: black;\n  cursor: pointer;\n  margin-bottom: 0.5rem;\n}\n\n.tagged[_ngcontent-%COMP%] {\n  border-radius: 1rem !important;\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n  background-color: white;\n  color: black;\n  cursor: pointer;\n  margin: 0.5rem;\n}\n\n\n\n.success[_ngcontent-%COMP%] {\n  border-color: #04AA6D;\n  color: green;\n}\n\n.success[_ngcontent-%COMP%]:hover {\n  background-color: #04AA6D;\n  color: white;\n}\n\n\n\n.info[_ngcontent-%COMP%] {\n  border-color: #2196F3;\n  color: dodgerblue;\n}\n\n.info[_ngcontent-%COMP%]:hover {\n  background: #2196F3;\n  color: white;\n}\n\n\n\n.warning[_ngcontent-%COMP%] {\n  border-color: #ff9800;\n  color: orange;\n}\n\n.warning[_ngcontent-%COMP%]:hover {\n  background: #ff9800;\n  color: white;\n}\n\n\n\n.danger[_ngcontent-%COMP%] {\n  border-color: #f44336;\n  color: red;\n}\n\n.danger[_ngcontent-%COMP%]:hover {\n  background: #f44336;\n  color: white;\n}\n\n\n\n.default[_ngcontent-%COMP%] {\n  border-color: #e7e7e7;\n  color: black;\n}\n\n.default[_ngcontent-%COMP%]:hover {\n  background: #e7e7e7;\n}\n\n.problem-container[_ngcontent-%COMP%] {\n  max-height: 200px;\n  max-width: 500px;\n  margin-left: 15%;\n  overflow-y: scroll;\n  justify-content: center;\n}\n\n.taggedProblems[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQSxVQUFBOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQSxTQUFBOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUEsV0FBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUEsUUFBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUEsU0FBQTs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUYiLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICBib3JkZXItcmFkaXVzOiAxLjU5cmVtIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxLjZyZW0haW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxLjZyZW0haW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4udGFnZ2Vke1xuICBib3JkZXItcmFkaXVzOiAxcmVtIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMXJlbSFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAuNXJlbTtcbn1cblxuLyogR3JlZW4gKi9cbi5zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDRBQTZEO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBCbHVlICovXG4uaW5mbyB7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZGMztcbiAgY29sb3I6IGRvZGdlcmJsdWVcbn1cblxuLmluZm86aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIE9yYW5nZSAqL1xuLndhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmZjk4MDA7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi53YXJuaW5nOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmOTgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBSZWQgKi9cbi5kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiByZWRcbn1cblxuLmRhbmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogR3JheSAqL1xuLmRlZmF1bHQge1xuICBib3JkZXItY29sb3I6ICNlN2U3ZTc7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRlZmF1bHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xufVxuXG4ucHJvYmxlbS1jb250YWluZXJ7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGFnZ2VkUHJvYmxlbXN7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY2xvc2UtaWNvbntcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.scss']
            }]
    }], function () { return [{ type: _Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_5__["ApiDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["OurAuthService"] }]; }, null); })();


/***/ }),

/***/ "RMzS":
/*!*******************************************!*\
  !*** ./src/app/body/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/article/create"]; };
function NavComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/posts"]; };
function NavComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/review-posts"]; };
function NavComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Review Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/auth/login"]; };
function NavComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return ["/"]; };
function NavComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7._authService.logout(); })("click", function NavComponent_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9._authService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
function NavComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NavComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    ngOnInit() {
        this.profilePic = localStorage.getItem('profilePic') || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==";
    }
    onClick() {
        this._router.navigate(['/profile']);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["OurAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 17, vars: 7, consts: [[1, "navbar", "navbar-light", "navbar-expand-lg", "fixed-top", "kaushik"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo01", "aria-controls", "navbarTogglerDemo01", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo01", 1, "collapse", "navbar-collapse"], ["href", "#", 1, "navbar-brand"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["class", "btn btn-outline-light mx-2  ", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-outline-light  mx-2 my-sm-0", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-link ", "id", "profile", "role", "button", 3, "click", 4, "ngIf"], ["class", "nav-link ", "id", "profile", "role", "button", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], [1, "btn", "btn-outline-light", "mx-2", 3, "routerLink"], [1, "btn", "btn-outline-light", "mx-2", "my-sm-0", 3, "routerLink", "click"], ["id", "profile", "role", "button", 1, "nav-link", 3, "click"], ["width", "35", "height", "35", 1, "rounded-circle", 3, "src"], ["id", "profile", "role", "button", 1, "nav-link"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==", "width", "35", "height", "35", 1, "rounded-circle"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PlacementsGyaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavComponent_li_7_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavComponent_li_8_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavComponent_li_9_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavComponent_button_11_Template, 2, 2, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavComponent_a_13_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavComponent_a_15_Template, 2, 1, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavComponent_a_16_Template, 2, 0, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._authService.validateAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._authService.loggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["nav[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right bottom, rgba(128, 214, 113, 0.801), rgba(39, 180, 133, 0.801));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlHQUFBO0FBQ0oiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byByaWdodCBib3R0b20sXG4gICAgICAgIGhzbGEoMTExLCA1NSUsIDY0JSwgMC44MDEpLFxuICAgICAgICBoc2xhKDE2MCwgNjQlLCA0MyUsIDAuODAxKSlcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["OurAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body/body.component */ "OWb/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'placements-gyaan';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_body_body_component__WEBPACK_IMPORTED_MODULE_1__["BodyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api-Data/api-data.service */ "yc3H");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProfileComponent_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", op_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", op_r1, " ");
} }
class ProfileComponent {
    constructor(apiDataService, apiAuth) {
        this.apiDataService = apiDataService;
        this.apiAuth = apiAuth;
        this.profilePictureUrl = apiAuth.getProfileUrl();
        this.language = [
            'C',
            'C++',
            'C#',
            'Java',
            'Python',
            'Javascript (NodeJS)',
            'Other'
        ];
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: true }),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            most_comfortable_coding_language: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            linkedin_user_handle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            github_user_handle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            facebook_user_handle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            insta_user_handle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            twitter_user_handle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        this.getUserDetails();
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.updateForm.value);
        this.apiDataService.postData('/profile/detail/update', this.updateForm.value).subscribe(d => {
            alert(d['msg']);
            this.getUserDetails();
        }, (error) => {
            // alert(error.error.msg);
            console.log(error['msg']);
        });
    }
    getUserDetails() {
        this.apiDataService.getData('/user/detail').subscribe(d => {
            console.log(d);
            this.updateForm.patchValue({
                name: d['data'].google.name,
                email: d['data'].google.email,
                phone_number: d['data'].phoneNumber,
                most_comfortable_coding_language: d['data'].most_comfortable_coding_language,
                linkedin_user_handle: d['linkedin_user_handle'],
                github_user_handle: d['github_user_handle'],
                facebook_user_handle: d['facebook_user_handle'],
                insta_user_handle: d['insta_user_handle'],
                twitter_user_handle: d['twitter_user_handle'],
            });
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_2__["ApiDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["OurAuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 75, vars: 5, consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "profile-user-box", "card-box", "bg-custom"], [1, "col-sm-6"], [1, "float-left", "mr-3"], ["alt", "", 1, "thumb-lg", "rounded-circle", 3, "src"], [1, "media-body", "text-white"], [1, "font-13", "text-light"], [1, "display-4", "text-center"], [3, "formGroup", "ngSubmit"], [1, "col-sm-12", "mt-3"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "col-sm-7", "mt-3"], ["type", "text", "formControlName", "email", 1, "form-control"], [1, "col-sm-5", "mt-3"], ["type", "text", "formControlName", "phone_number", "min", "1", 1, "form-control"], [1, "col-sm-6", "mt-3"], ["formControlName", "linkedin_user_handle", "type", "text", 1, "form-control"], ["formControlName", "github_user_handle", "type", "text", 1, "form-control"], ["formControlName", "facebook_user_handle", "type", "text", 1, "form-control"], ["formControlName", "insta_user_handle", "type", "text", 1, "form-control"], ["formControlName", "twitter_user_handle", "type", "text", 1, "form-control"], ["formControlName", "most_comfortable_coding_language", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "float-right", "btn", "btn-outline-dark", "pull-right", "mt-3", "shadow", 3, "disabled"], [3, "value"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Amazing Coder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "LinkedIn Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "GitHub Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Facebook Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Insta Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Twitter Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Preferred Coding Language ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ProfileComponent_option_72_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Update Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.profilePictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".mt10[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.mt8[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n\n.mt7[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\n.hcolor[_ngcontent-%COMP%] {\n  color: #18f3f3;\n}\n\n.mcolor[_ngcontent-%COMP%] {\n  color: deeppink;\n}\n\n.thumb-lg[_ngcontent-%COMP%] {\n  height: 88px;\n  width: 88px;\n}\n\n.profile-user-box[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n}\n\n.bg-custom[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom right, #02c0ce, #05b2d1) !important;\n}\n\n.profile-user-box[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 5px;\n}\n\n.card-box[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 3px;\n  margin-bottom: 30px;\n  background-color: #fff;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f6f8;\n  overflow: hidden;\n  padding: 10px 0;\n  position: relative;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   .inbox-item-img[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  margin-right: 15px;\n  width: 40px;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   .inbox-item-author[_ngcontent-%COMP%] {\n  color: #313a46;\n  display: block;\n  margin: 0;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   .inbox-item-text[_ngcontent-%COMP%] {\n  color: #98a6ad;\n  display: block;\n  font-size: 14px;\n  margin: 0;\n}\n\n.inbox-widget[_ngcontent-%COMP%]   .inbox-item[_ngcontent-%COMP%]   .inbox-item-date[_ngcontent-%COMP%] {\n  color: #98a6ad;\n  font-size: 11px;\n  position: absolute;\n  right: 7px;\n  top: 12px;\n}\n\n.comment-list[_ngcontent-%COMP%]   .comment-box-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.comment-list[_ngcontent-%COMP%]   .comment-box-item[_ngcontent-%COMP%]   .commnet-item-date[_ngcontent-%COMP%] {\n  color: #98a6ad;\n  font-size: 11px;\n  position: absolute;\n  right: 7px;\n  top: 2px;\n}\n\n.comment-list[_ngcontent-%COMP%]   .comment-box-item[_ngcontent-%COMP%]   .commnet-item-msg[_ngcontent-%COMP%] {\n  color: #313a46;\n  display: block;\n  margin: 10px 0;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 24px;\n}\n\n.comment-list[_ngcontent-%COMP%]   .comment-box-item[_ngcontent-%COMP%]   .commnet-item-user[_ngcontent-%COMP%] {\n  color: #98a6ad;\n  display: block;\n  font-size: 14px;\n  margin: 0;\n}\n\n.comment-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: block;\n}\n\n.ribbon-box[_ngcontent-%COMP%]   .ribbon-primary[_ngcontent-%COMP%] {\n  background: #2d7bf4;\n}\n\n.ribbon-box[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n  position: relative;\n  float: left;\n  clear: both;\n  padding: 5px 12px 5px 12px;\n  margin-left: -30px;\n  margin-bottom: 15px;\n  font-family: Rubik, sans-serif;\n  -o-box-shadow: 2px 5px 10px rgba(49, 58, 70, 0.15);\n  box-shadow: 2px 5px 10px rgba(49, 58, 70, 0.15);\n  color: #fff;\n  font-size: 13px;\n}\n\n.text-custom[_ngcontent-%COMP%] {\n  color: #02c0ce !important;\n}\n\n.badge-custom[_ngcontent-%COMP%] {\n  background: #02c0ce;\n  color: #fff;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-family: Rubik, sans-serif;\n  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);\n  padding: 0.35em 0.5em;\n  font-weight: 500;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #98a6ad !important;\n}\n\n.font-13[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n\n.graphs[_ngcontent-%COMP%] {\n  min-height: 130px;\n  padding: 5%;\n}\n\n.problem-text-solved[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: green;\n}\n\n.problem-text-partially_solved[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: gray;\n}\n\n.problem-text-unsolved[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxpQkFBQTtBQURKOztBQUlBO0VBRUksZ0JBQUE7QUFGSjs7QUFLQTtFQUVJLGdCQUFBO0FBSEo7O0FBTUE7RUFFQSxjQUFBO0FBSkE7O0FBTUE7RUFDSSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUhKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlBO0VBQ0ksK0VBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxrREFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLDhCQUFBO0VBRUEseUVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtBQUtKOztBQUZBO0VBQ0ksMEJBQUE7QUFLSjs7QUFGQTtFQUNLLGlCQUFBO0VBQ0EsV0FBQTtBQUtMOztBQUZBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBS0E7O0FBRkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFLSjs7QUFGQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQUtKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tdDEwXG57XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5tdDhcbntcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4ubXQ3XG57XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLmhjb2xvcntcbiAgICBcbmNvbG9yOiByZ2IoMjQsIDI0MywgMjQzKTtcbn1cbi5tY29sb3J7XG4gICAgY29sb3I6IGRlZXBwaW5rO1xufVxuXG4udGh1bWItbGcge1xuICAgIGhlaWdodDogODhweDtcbiAgICB3aWR0aDogODhweDtcbn1cbi5wcm9maWxlLXVzZXItYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG59XG4uYmctY3VzdG9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQgLCMwMmMwY2UsIzA1YjJkMSkgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlLXVzZXItYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2FyZC1ib3gge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5pbmJveC13aWRnZXQgLmluYm94LWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmV7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pbmJveC13aWRnZXQgLmluYm94LWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmNmY4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxufVxuXG4uaW5ib3gtd2lkZ2V0IC5pbmJveC1pdGVtIC5pbmJveC1pdGVtLWltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiA0MHB4XG59XG5cbi5pbmJveC13aWRnZXQgLmluYm94LWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogNDBweFxufVxuXG4uaW5ib3gtd2lkZ2V0IC5pbmJveC1pdGVtIC5pbmJveC1pdGVtLWF1dGhvciB7XG4gICAgY29sb3I6ICMzMTNhNDY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwXG59XG5cbi5pbmJveC13aWRnZXQgLmluYm94LWl0ZW0gLmluYm94LWl0ZW0tdGV4dCB7XG4gICAgY29sb3I6ICM5OGE2YWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMFxufVxuXG4uaW5ib3gtd2lkZ2V0IC5pbmJveC1pdGVtIC5pbmJveC1pdGVtLWRhdGUge1xuICAgIGNvbG9yOiAjOThhNmFkO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDdweDtcbiAgICB0b3A6IDEycHhcbn1cblxuLmNvbW1lbnQtbGlzdCAuY29tbWVudC1ib3gtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5jb21tZW50LWxpc3QgLmNvbW1lbnQtYm94LWl0ZW0gLmNvbW1uZXQtaXRlbS1kYXRlIHtcbiAgICBjb2xvcjogIzk4YTZhZDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgdG9wOiAycHhcbn1cblxuLmNvbW1lbnQtbGlzdCAuY29tbWVudC1ib3gtaXRlbSAuY29tbW5ldC1pdGVtLW1zZyB7XG4gICAgY29sb3I6ICMzMTNhNDY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHhcbn1cblxuLmNvbW1lbnQtbGlzdCAuY29tbWVudC1ib3gtaXRlbSAuY29tbW5ldC1pdGVtLXVzZXIge1xuICAgIGNvbG9yOiAjOThhNmFkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDBcbn1cblxuLmNvbW1lbnQtbGlzdCBhK2Ege1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2tcbn1cblxuLnJpYmJvbi1ib3ggLnJpYmJvbi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMmQ3YmY0O1xufVxuXG4ucmliYm9uLWJveCAucmliYm9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgcGFkZGluZzogNXB4IDEycHggNXB4IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrLHNhbnMtc2VyaWY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggNXB4IDEwcHggcmdiYSg0OSw1OCw3MCwuMTUpO1xuICAgIC1vLWJveC1zaGFkb3c6IDJweCA1cHggMTBweCByZ2JhKDQ5LDU4LDcwLC4xNSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDVweCAxMHB4IHJnYmEoNDksNTgsNzAsLjE1KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4udGV4dC1jdXN0b20ge1xuICAgIGNvbG9yOiAjMDJjMGNlIWltcG9ydGFudDtcbn1cblxuLmJhZGdlLWN1c3RvbSB7XG4gICAgYmFja2dyb3VuZDogIzAyYzBjZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5iYWRnZSB7XG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrLHNhbnMtc2VyaWY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjRweCAwIHJnYmEoMCwwLDAsLjA2KSwgMCAxcHggMCAwIHJnYmEoMCwwLDAsLjAyKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMjRweCAwIHJnYmEoMCwwLDAsLjA2KSwgMCAxcHggMCAwIHJnYmEoMCwwLDAsLjAyKTtcbiAgICBwYWRkaW5nOiAuMzVlbSAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udGV4dC1tdXRlZCB7XG4gICAgY29sb3I6ICM5OGE2YWQhaW1wb3J0YW50O1xufVxuXG4uZm9udC0xMyB7XG4gICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcbn1cblxuLmdyYXBoc3tcbiAgICAgbWluLWhlaWdodDogMTMwcHg7XG4gICAgIHBhZGRpbmc6NSU7XG4gIH1cblxuLnByb2JsZW0tdGV4dC1zb2x2ZWR7XG50ZXh0LWRlY29yYXRpb246IG5vbmU7XG5jb2xvcjpncmVlbjtcbn1cblxuLnByb2JsZW0tdGV4dC1wYXJ0aWFsbHlfc29sdmVke1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIGNvbG9yOmdyYXk7XG59XG5cbi5wcm9ibGVtLXRleHQtdW5zb2x2ZWR7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOnJlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_2__["ApiDataService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["OurAuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: providerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providerConfig", function() { return providerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ng_social_login_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-social-login-module */ "Zm4g");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-interceptor.service */ "9vt0");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/body.component */ "OWb/");
/* harmony import */ var _body_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./body/nav/nav.component */ "RMzS");
/* harmony import */ var _article_create_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./article/create/create.component */ "P3Ho");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _all_post_all_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./all-post/all-post.component */ "K90U");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_modal */ "dPr5");


























const CONFIG = new ng_social_login_module__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"]([
    {
        id: ng_social_login_module__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new ng_social_login_module__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"]('479946233198-qdpn3s314aaokbfjdhph1s954kkpp82p.apps.googleusercontent.com')
    }
], true);
function providerConfig() {
    return CONFIG;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ng_social_login_module__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"],
            useFactory: providerConfig
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_15__["QuillModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ng_social_login_module__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
            _modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _body_body_component__WEBPACK_IMPORTED_MODULE_12__["BodyComponent"],
        _body_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
        _article_create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"],
        _all_post_all_post_component__WEBPACK_IMPORTED_MODULE_16__["AllPostComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_15__["QuillModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ng_social_login_module__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
        _modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _body_body_component__WEBPACK_IMPORTED_MODULE_12__["BodyComponent"],
                    _body_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                    _article_create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"],
                    _all_post_all_post_component__WEBPACK_IMPORTED_MODULE_16__["AllPostComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_15__["QuillModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["NgMultiSelectDropDownModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    ng_social_login_module__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
                    _modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"]
                ],
                providers: [
                    {
                        provide: ng_social_login_module__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"],
                        useFactory: providerConfig
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                        useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: OurAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurAuthService", function() { return OurAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "BOF4");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





// AIzaSyAt5EKL3uug5WSxx8AoVoz4z5mWy8Pq1hg
class OurAuthService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = "/api/auth/register";
        this._loginUrl = "/api/auth/login";
        this._oAuthgoogle = "/api/auth/google";
        this.isValid = false;
        this.url = '';
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            this.url = "http://localhost:3000";
        }
    }
    registerUser(user) {
        return this.http.post(this.url + this._registerUrl, user);
    }
    loginUser(user) {
        return this.http.post(this.url + this._loginUrl, user);
    }
    loginOauthUser(user) {
        console.log("here!!!");
        console.log("service ");
        console.log(this._oAuthgoogle);
        console.log(user);
        return this.http.post(this.url + this._oAuthgoogle, user);
    }
    getTokenExpirationDate(token) {
        const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(token);
        // console.log(decoded);
        if (decoded.exp === undefined)
            return null;
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }
    loggedIn() {
        let token = localStorage.getItem("token");
        if (!token)
            return false;
        const date = this.getTokenExpirationDate(token);
        if (date === undefined)
            return false;
        if (date.valueOf() < new Date().valueOf()) {
            console.log("session expired");
            this.logout();
        }
        let tok = localStorage.getItem('token');
        if (tok)
            return tok;
        return null;
    }
    getToken() {
        return localStorage.getItem('token');
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('profilePic');
        this._router.navigate(['/auth/login']);
        this.bat = null;
        this.uid = this.hid = this.mid = null;
        this.isValid = false;
    }
    getName() {
        if (this.loggedIn()) {
            var decode = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(localStorage.getItem('token'));
            return decode.name;
        }
    }
    getMail() {
        if (this.loggedIn()) {
            var decode = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(localStorage.getItem('token'));
            return decode.email;
        }
    }
    getRole() {
        if (this.loggedIn()) {
            var decode = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(localStorage.getItem('token'));
            return decode.role;
        }
        return false;
    }
    validateAdmin() {
        if (this.loggedIn()) {
            var decode = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(localStorage.getItem('token'));
            var role = decode.role;
            if (role == "Admin")
                return true;
        }
        return false;
    }
    validateStudent() {
        if (this.loggedIn()) {
            var decode = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(localStorage.getItem('token'));
            var role = decode.role;
            if (role === "Student")
                return true;
        }
        return false;
    }
    validateFaculty() {
        if (this.loggedIn()) {
            var decode = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(localStorage.getItem('token'));
            var role = decode.role;
            if (role === "Faculty")
                return true;
        }
        return false;
    }
    getId() {
        var decode = jwt_decode__WEBPACK_IMPORTED_MODULE_1__(localStorage.getItem('token'));
        var id = decode._id;
        return id;
    }
    getProfileUrl() {
        return localStorage.getItem('profilePic') || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==";
    }
    setProfileData(bat, uid, hid, mid) {
        this.bat = bat;
        this.uid = uid;
        this.hid = hid;
        this.mid = mid;
        if (this.bat && this.uid && this.hid && this.mid) {
            this.isValid = true;
        }
    }
}
OurAuthService.ɵfac = function OurAuthService_Factory(t) { return new (t || OurAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
OurAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OurAuthService, factory: OurAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "dPr5":
/*!*********************************!*\
  !*** ./src/app/_modal/index.ts ***!
  \*********************************/
/*! exports provided: ModalModule, ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.module */ "i586");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_0__["ModalModule"]; });

/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "vYor");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]; });





/***/ }),

/***/ "i586":
/*!****************************************!*\
  !*** ./src/app/_modal/modal.module.ts ***!
  \****************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "zALO");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ "CzEO");






class ModalModule {
}
ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"]], exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot(),
                ],
                declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
                exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jX04":
/*!****************************************************!*\
  !*** ./src/app/article/review/review.component.ts ***!
  \****************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Api-Data/api-data.service */ "yc3H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth.service */ "ccyI");
/* harmony import */ var src_app_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_modal */ "dPr5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_modal/modal.component */ "zALO");





// ES6 Modules or TypeScript









function ReviewComponent_div_12_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.arrayList.length, " Article Fetched");
} }
function ReviewComponent_div_12_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r5.arrayList.length, " Articles Fetched");
} }
function ReviewComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ReviewComponent_div_12_p_1_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ReviewComponent_div_12_p_2_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.arrayList.length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.arrayList.length > 1);
} }
function ReviewComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ReviewComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Error Occurred!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
} }
function ReviewComponent_div_15_tr_22_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const problems_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", problems_r11.problem_view_link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", problems_r11.problem_name, "");
} }
function ReviewComponent_div_15_tr_22_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ReviewComponent_div_15_tr_22_div_7_div_1_Template, 3, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r7.problems);
} }
function ReviewComponent_div_15_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "zak-modal", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReviewComponent_div_15_tr_22_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const item_r7 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.rejectReview(item_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReviewComponent_div_15_tr_22_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const item_r7 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.acceptReview(item_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ReviewComponent_div_15_tr_22_div_7_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReviewComponent_div_15_tr_22_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const item_r7 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.modalService.open(item_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "View Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", item_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r7.problems.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", item_r7.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.userId.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.date);
} }
function ReviewComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sno");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " User Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Company ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ReviewComponent_div_15_tr_22_Template, 23, 8, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.arrayList);
} }
class ReviewComponent {
    constructor(dataService, route, router, authService, modalService) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.modalService = modalService;
        this.articleSearched = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.arrayList = [];
        this.articlesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            user_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            article_view_link: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    acceptReview(articleId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure you want to approve?',
            text: 'This will make the article visible to everyone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Approve it!',
            cancelButtonText: 'No, don\'t approve it'
        }).then((result) => {
            if (result.isConfirmed) {
                this.dataService.postData("/approve-article", { articleId }).subscribe(data => {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Approved!', 'This article is approved :)', 'success');
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'The article is not Approved :(', 'error');
            }
        });
    }
    rejectReview(articleId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure you want to reject this article?',
            text: 'You will not be able approve it again!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, reject it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                this.dataService.postData("/reject-article", { articleId }).subscribe(data => {
                    console.log(data);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Rejected!', 'This article has been rejected :(.', 'success');
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.DismissReason.cancel) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Cancelled', 'The article is not rejected :)', 'error');
            }
        });
    }
    searchArticlesGeneric() {
        this.articleSearched.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((e) => {
            console.log(e.target.value);
            return e.target.value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(word => {
            this.isLoading = true;
            return this.searchArticle(word);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log(err);
            this.isLoading = false;
            this.errorMessage = err.message;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        })).subscribe(val => {
            this.isLoading = false;
            console.log(this.isLoading);
            this.articlesFetched = val;
            // this.paginationElements=this.editorialsFetched;
            console.log("Articles Fetched ");
        });
    }
    searchArticle(word) {
        word = word.trim();
        if (word === "") {
            console.log("no word entered");
            // return empty()
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }
        else {
            return this.dataService.getData("/articles/getArticlesByCompanyNotVerified/" + word).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
                console.log(response);
                this.articlesFetched = response;
                // this.p=1;
                this.arrayList = this.articlesFetched.articles;
                console.log("Articles fetched ");
                console.log(this.arrayList);
            }));
        }
    }
    ngOnInit() {
        this.searchArticlesGeneric();
        this.dataService.getData("/article/not-reviewed").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(data);
            this.arrayList = data;
        }));
    }
    onSubmit() {
        console.log(this.articlesForm);
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_6__["ApiDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_8__["OurAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_modal__WEBPACK_IMPORTED_MODULE_9__["ModalService"])); };
ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], decls: 16, vars: 5, consts: [[1, "container", "mt-5"], [1, "col-sm-12", 2, "margin-top", "5%"], [1, "display-4", "text-center"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-sm-10", "mt-3"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "formControlName", "user_name", "placeholder", "Search for Articles", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "keyup"], ["class", "count", 4, "ngIf"], [4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "count"], [1, "lds-ellipsis"], [1, "error-message"], [1, "container"], [1, "table"], [1, "thead-dark"], ["scope", "col"], [1, "link", "text-light"], [1, "link", "text-light", "fa", "fa-sort"], [4, "ngFor", "ngForOf"], [3, "id"], [1, "btn", "btn-danger", "mx-2", 3, "click"], [1, "btn", "btn-success", "mx-2", 3, "click"], ["class", "taggedProblems", 4, "ngIf"], [1, "ql-container", "ql-snow", 2, "border-width", "0"], [1, "ql-editor", 3, "innerHTML"], ["href", "javascript:void(0)", 3, "click"], [1, "taggedProblems"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["target", "_blank", 1, "btn", "btn-outline-warning", 3, "href"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Articles To Be Reviewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ReviewComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function ReviewComponent_Template_input_keyup_11_listener($event) { return ctx.articleSearched.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ReviewComponent_div_12_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ReviewComponent_div_13_Template, 6, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ReviewComponent_div_14_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ReviewComponent_div_15_Template, 23, 1, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.articlesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.arrayList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.arrayList.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"]], styles: [".btn[_ngcontent-%COMP%] {\n  border-radius: 1rem !important;\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n  color: black;\n  cursor: pointer;\n  margin: 0.5rem;\n}\n\n.problem-container[_ngcontent-%COMP%] {\n  max-height: 200px;\n  max-width: 500px;\n  margin-left: 15%;\n  overflow-y: scroll;\n  justify-content: center;\n}\n\n.taggedProblems[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQTtFQUNFLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVZGOztBQWFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFWRiIsImZpbGUiOiJyZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGJ1dHRvbntcbi8vICAgYm9yZGVyLXJhZGl1czogMS41OXJlbSFpbXBvcnRhbnQ7XG4vLyAgIHBhZGRpbmctbGVmdDogMS42cmVtIWltcG9ydGFudDtcbi8vICAgcGFkZGluZy1yaWdodDogMS42cmVtIWltcG9ydGFudDtcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbi8vIH1cblxuLmJ0bntcbiAgYm9yZGVyLXJhZGl1czogMXJlbSFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMXJlbSFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW0haW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAuNXJlbTtcbn1cblxuLnByb2JsZW0tY29udGFpbmVye1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhZ2dlZFByb2JsZW1ze1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-review',
                templateUrl: './review.component.html',
                styleUrls: ['./review.component.scss']
            }]
    }], function () { return [{ type: _Api_Data_api_data_service__WEBPACK_IMPORTED_MODULE_6__["ApiDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_8__["OurAuthService"] }, { type: src_app_modal__WEBPACK_IMPORTED_MODULE_9__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _all_post_all_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-post/all-post.component */ "K90U");
/* harmony import */ var _article_review_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/review/review.component */ "jX04");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'posts', component: _all_post_all_post_component__WEBPACK_IMPORTED_MODULE_2__["AllPostComponent"] },
    { path: 'review-posts', component: _article_review_review_component__WEBPACK_IMPORTED_MODULE_3__["ReviewComponent"] },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() | src-app-auth-auth-module */ "src-app-auth-auth-module").then(__webpack_require__.bind(null, /*! src/app/auth/auth.module */ "Yj9t")).then(m => m.AuthModule) },
    { path: 'article', loadChildren: () => __webpack_require__.e(/*! import() | src-app-article-article-module */ "src-app-article-article-module").then(__webpack_require__.bind(null, /*! src/app/article/article.module */ "rZHr")).then(m => m.ArticleModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vYor":
/*!*****************************************!*\
  !*** ./src/app/_modal/modal.service.ts ***!
  \*****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "yc3H":
/*!**********************************************!*\
  !*** ./src/app/Api-Data/api-data.service.ts ***!
  \**********************************************/
/*! exports provided: ApiDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDataService", function() { return ApiDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ApiDataService {
    constructor(http) {
        this.http = http;
        this.url = '';
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            this.url = "http://localhost:3000";
        }
    }
    getDataWithoutToken(route) {
        const access = '*';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
        });
        console.log("getting data without token", route, headers);
        return this.http.get(this.url + route, { headers });
    }
    getData(route) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            token
        });
        console.log(headers);
        return this.http.get(this.url + '/api' + route, { headers });
        // return this.http.get(this.url + '/api' + route);
    }
    getDataWithParam(route, param) {
        return this.http.get(this.url);
    }
    getD(route) {
        return this.http.get(this.url + '/api' + route);
    }
    postD(route, body) {
        return this.http.post(this.url + '/api' + route, body);
    }
    postData(route, body) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            token
        });
        return this.http.post(this.url + '/api' + route, body, { headers });
        // return this.http.post(this.url + '/api' + route, body);
    }
    putData(route, body) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            token
        });
        return this.http.put(this.url + '/api' + route, body, { headers });
        // return this.http.put(this.url + '/api' + route, body);
    }
    deleteData(route) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            token
        });
        return this.http.delete(this.url + '/api' + route, { headers });
        // return this.http.delete(this.url + '/api' + route);
    }
}
ApiDataService.ɵfac = function ApiDataService_Factory(t) { return new (t || ApiDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiDataService, factory: ApiDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zALO":
/*!*******************************************!*\
  !*** ./src/app/_modal/modal.component.ts ***!
  \*******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "vYor");



const _c0 = ["*"];
class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'zak-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('zak-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('zak-modal-open');
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["zak-modal"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "zak-modal"], ["data-backdrop", "static", "data-keyboard", "false", "tabindex", "-1", 1, "zak-modal-body"], [1, "zak-modal-background"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } }, styles: ["/* MODAL STYLES\n-------------------------------*/\nzak-modal {\n    /* modals are hidden by default */\n    display: none;\n    }\n.zak-modal {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 999;\n      overflow-x: hidden;\n      overflow-y: auto;\n      background-color: rgba(0, 0, 0, 0.7);\n      cursor: pointer;\n      padding: 18px;\n      margin-top:5%;\n      /* enables scrolling for tall modals */\n}\n@media screen and (min-width: 640px) {\n\t.zak-modal {\n\t\tpadding: 15px;\n\t}\n}\n.zak-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n\n  /* z-index must be below .zak-modal and above everything else  */\n  z-index: 0.8;\n}\n.zak-modal-body {\n  padding: 10px 20px;\n\tbackground: #fff;\n\tmargin-left:auto;\n\tmargin-right:auto;\n\tmax-width:960px;\n\tmax-height: 650px;\n\toverflow-y: scroll;\n\n  /* margin exposes part of the modal background */\n  /* margin: 40px; */\n}\nbody.zak-modal-open {\n    /* body overflow is hidden to hide main scrollbar when modal window is open */\n    overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Z0NBQ2dDO0FBQ2hDO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYjtBQUVBO01BQ0UsZUFBZTtNQUNmLE1BQU07TUFDTixTQUFTO01BQ1QsT0FBTztNQUNQLFFBQVE7TUFDUixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixvQ0FBb0M7TUFDcEMsZUFBZTtNQUNmLGFBQWE7TUFDYixhQUFhO01BQ2Isc0NBQXNDO0FBQzVDO0FBRUE7Q0FDQztFQUNDLGFBQWE7Q0FDZDtBQUNEO0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0MsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87O0VBRVAsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixhQUFhOztFQUViLGdFQUFnRTtFQUNoRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtDQUNuQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGtCQUFrQjs7RUFFakIsZ0RBQWdEO0VBQ2hELGtCQUFrQjtBQUNwQjtBQUVBO0lBQ0ksNkVBQTZFO0lBQzdFLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbnphay1tb2RhbCB7XG4gICAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnphay1tb2RhbCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogMThweDtcbiAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcblx0Lnphay1tb2RhbCB7XG5cdFx0cGFkZGluZzogMTVweDtcblx0fVxufVxuXG4uemFrLW1vZGFsLWJhY2tncm91bmQge1xuICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG5cbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcblxuICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLnphay1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICB6LWluZGV4OiAwLjg7XG59XG5cbi56YWstbW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0bWFyZ2luLWxlZnQ6YXV0bztcblx0bWFyZ2luLXJpZ2h0OmF1dG87XG5cdG1heC13aWR0aDo5NjBweDtcblx0bWF4LWhlaWdodDogNjUwcHg7XG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gIC8qIG1hcmdpbjogNDBweDsgKi9cbn1cblxuYm9keS56YWstbW9kYWwtb3BlbiB7XG4gICAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'zak-modal',
                templateUrl: 'modal.component.html',
                styleUrls: ['modal.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main.js.map