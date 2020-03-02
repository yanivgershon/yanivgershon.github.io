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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-edit-entity/create-edit-entity.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-edit-entity/create-edit-entity.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1>{{title}}</h1>\n  <form (ngSubmit)=\"onSubmit(entityForm)\" #entityForm=\"ngForm\">\n\n    <div class=\"form-group\">\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Name</mat-label>\n            <input type=\"text\" matInput name=\"name\"  maxlength=\"100\" required ngModel>\n          </mat-form-field>\n\n    </div>\n\n    <div class=\"form-group\">\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Description</mat-label>\n            <input type=\"text\" matInput name=\"Description\"   ngModel>\n          </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n        <mat-form-field appearance=\"fill\">\n            <mat-label>Amount</mat-label>\n            <input type=\"number\" matInput name=\"Amount\"  maxlength=\"6\"  ngModel>\n          </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"\n                 name=\"Date\" ngModel>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n\n          <!--\n      <label for=\"Date\">Date</label>\n      <input type=\"text\" class=\"form-control\" id=\"Date\" name=\"Date\"  ngModel>\n          -->\n    </div>\n\n    <div class=\"form-group\">\n        <mat-checkbox ngModel name=\"IsPrivate\">Private</mat-checkbox>\n        <!--\n      <label for=\"IsPrivate\">IsPrivate</label>\n      <input type=\"text\" class=\"form-control\" id=\"IsPrivate\" name=\"IsPrivate\" ngModel>\n      -->\n    </div>\n\n\n\n\n\n    <button  mat-raised-button type=\"submit\" color=\"primary\" class=\"btn btn-success\" [disabled]=\"!entityForm.form.valid\">Submit</button>\n  </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/entities.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/entities.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<table matSort (matSortChange)=\"sortData($event)\">\n    <tr>\n        <th>Id</th>\n        <th mat-sort-header=\"Name\">Dessert (100g)</th>\n        <th mat-sort-header=\"Name\">Calories</th>\n        <th mat-sort-header=\"fat\">Fat (g)</th>\n        <th mat-sort-header=\"carbs\">Carbs (g)</th>\n        <th mat-sort-header=\"protein\">Protein (g)</th>\n      </tr>\n\n  <ng-container *ngFor=\"let entity of entities\">\n      <tr><td>{{entity.Id}}</td>\n        <td>{{entity.Name}}</td>\n        <td>{{entity.Description}}</td>\n        <td>{{entity.Amount}}</td>\n        <td>{{entity.Date}}</td>\n        <td>{{entity.IsPrivate}}</td>\n      </tr>\n  </ng-container>\n</table>\n-->\n\n\n\n<!--\n<table mat-table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th>Id</th>\n    <th mat-sort-header=\"Name\">Name</th>\n    <th>Description</th>\n    <th>Amount</th>\n    <th mat-sort-header=\"Date\">Date</th>\n    <th>IsPrivate</th>\n  </tr>\n\n  <tr *ngFor=\"let entity of entities\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ col }} </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element[col] }} </td>\n        <td>{{entity.Id}}</td>\n        <td>{{entity.Name}}</td>\n        <td>{{entity.Description}}</td>\n        <td>{{entity.Amount}}</td>\n        <td>{{entity.Date}}</td>\n        <td>{{entity.IsPrivate}}</td>\n      </tr>\n</table>-->\n<a mat-raised-button  color=\"primary\" routerLink=\"/create\" routerLinkActive=\"active\">Create</a>\n<div style=\"height: 50px;\"></div>\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"Id\">\n      <th mat-header-cell *matHeaderCellDef > Id </th>\n      <td mat-cell *matCellDef=\"let entity\"> {{entity.Id}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let entity\"> {{entity.Name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"Description\">\n      <th mat-header-cell *matHeaderCellDef> Description </th>\n      <td mat-cell *matCellDef=\"let entity\"> {{entity.Description}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"Amount\">\n      <th mat-header-cell *matHeaderCellDef> Amount </th>\n      <td mat-cell *matCellDef=\"let entity\"> {{entity.Amount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Date\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n        <td mat-cell *matCellDef=\"let entity\"> {{getDate(entity.Date)}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"IsPrivate\">\n          <th mat-header-cell *matHeaderCellDef> IsPrivate </th>\n          <td mat-cell *matCellDef=\"let entity\"> {{entity.IsPrivate}} </td>\n        </ng-container>\n\n      <ng-container matColumnDef=\"Edit\">\n          <th mat-header-cell *matHeaderCellDef> Edit </th>\n          <td mat-cell *matCellDef=\"let entity\"><a mat-raised-button  color=\"primary\" routerLink=\"/edit/{{entity.Id}}\" routerLinkActive=\"active\">Edit</a>\n             </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Delete\">\n            <th mat-header-cell *matHeaderCellDef> Delete </th>\n            <td mat-cell *matCellDef=\"let entity\"><button (click)=delete(entity.Id)  mat-raised-button  color=\"primary\" >Delete</button> </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Details\">\n              <th mat-header-cell *matHeaderCellDef> Details </th>\n              <td mat-cell *matCellDef=\"let entity\"><a mat-raised-button  color=\"primary\" routerLink=\"/details/{{entity.Id}}\" routerLinkActive=\"active\">Details</a> </td>\n            </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entity-details/entity-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entity-details/entity-details.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card  *ngIf=\"entity\">\n    <mat-card-content>\n      <div>Id: {{entity.Id}}</div>\n      <div>Name: {{entity.Name}}</div>\n      <div>Description: {{entity.Description}}</div>\n      <div>Amount: {{entity.Amount}}</div>\n      <div>Date: {{getDate(entity.Date)}}</div>\n      <div>IsPrivate: {{entity.IsPrivate}}</div>\n    </mat-card-content>\n\n</mat-card>\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Data/entity.ts":
/*!********************************!*\
  !*** ./src/app/Data/entity.ts ***!
  \********************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Entity {
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
/* harmony import */ var _entity_details_entity_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity-details/entity-details.component */ "./src/app/entity-details/entity-details.component.ts");
/* harmony import */ var _entities_entities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/entities.component */ "./src/app/entities/entities.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_edit_entity_create_edit_entity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-edit-entity/create-edit-entity.component */ "./src/app/create-edit-entity/create-edit-entity.component.ts");






const routes = [
    { path: '', component: _entities_entities_component__WEBPACK_IMPORTED_MODULE_2__["EntitiesComponent"] },
    // {path: '**', component: EntitiesComponent},
    { path: 'edit/:id', component: _create_edit_entity_create_edit_entity_component__WEBPACK_IMPORTED_MODULE_5__["CreateEditEntityComponent"] },
    { path: 'create', component: _create_edit_entity_create_edit_entity_component__WEBPACK_IMPORTED_MODULE_5__["CreateEditEntityComponent"] },
    { path: 'details/:id', component: _entity_details_entity_details_component__WEBPACK_IMPORTED_MODULE_1__["EntityDetailsComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */");

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
    constructor() {
        this.title = 'upStartClient';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _entities_entities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/entities.component */ "./src/app/entities/entities.component.ts");
/* harmony import */ var _entity_details_entity_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entity-details/entity-details.component */ "./src/app/entity-details/entity-details.component.ts");
/* harmony import */ var _create_edit_entity_create_edit_entity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-edit-entity/create-edit-entity.component */ "./src/app/create-edit-entity/create-edit-entity.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _entities_entities_component__WEBPACK_IMPORTED_MODULE_6__["EntitiesComponent"],
            _entity_details_entity_details_component__WEBPACK_IMPORTED_MODULE_7__["EntityDetailsComponent"],
            _create_edit_entity_create_edit_entity_component__WEBPACK_IMPORTED_MODULE_8__["CreateEditEntityComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/create-edit-entity/create-edit-entity.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/create-edit-entity/create-edit-entity.component.less ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1lZGl0LWVudGl0eS9jcmVhdGUtZWRpdC1lbnRpdHkuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/create-edit-entity/create-edit-entity.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/create-edit-entity/create-edit-entity.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateEditEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditEntityComponent", function() { return CreateEditEntityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Data_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Data/entity */ "./src/app/Data/entity.ts");
/* harmony import */ var _services_entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CreateEditEntityComponent = class CreateEditEntityComponent {
    constructor(route, entityService, router) {
        this.route = route;
        this.entityService = entityService;
        this.router = router;
        this.title = 'create';
        this.entity = new _Data_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"]();
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.entityService.GetById(id).subscribe(data => {
                // this.entityForm.setValue(data);
                setTimeout(() => {
                    //this.formName.nativeElement.value="ddata."
                    //this.entityForm.setValue(data)
                    //this.entityForm.controls["name"].setValue("1");
                    var obj = {
                        name: data.Name,
                        Description: data.Description,
                        Amount: data.Amount,
                        Date: new Date(data.Date / 10000),
                        IsPrivate: data.IsPrivate,
                    };
                    this.entityForm.control.patchValue(obj);
                });
                //this.entity=data;
                //this.Name=data.Name;
            });
            this.title = "Edit";
        }
    }
    onSubmit(entityForm) {
        let entity = Object.assign({}, entityForm.value, { Date: entityForm.value.Date.getTime() * 10000 });
        const id = this.route.snapshot.paramMap.get('id');
        if (id)
            entity.Id = id;
        // entity.Date=((entityForm.value.Date.getTime() * 10000));
        this.entityService.CreateOrEdit(entity).subscribe(response => {
            this.router.navigate([`/details/${entity.Id}`]);
        });
    }
};
CreateEditEntityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('myInput', null)
], CreateEditEntityComponent.prototype, "formName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('entityForm', null)
], CreateEditEntityComponent.prototype, "entityForm", void 0);
CreateEditEntityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-edit-entity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-edit-entity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-edit-entity/create-edit-entity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-edit-entity.component.less */ "./src/app/create-edit-entity/create-edit-entity.component.less")).default]
    })
], CreateEditEntityComponent);



/***/ }),

/***/ "./src/app/entities/entities.component.less":
/*!**************************************************!*\
  !*** ./src/app/entities/entities.component.less ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n.mat-column-id {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 28% !important;\n  width: 28% !important;\n}\n.mat-column-name {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 28% !important;\n  width: 28% !important;\n}\n.mat-column-amoumt {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 28% !important;\n  width: 28% !important;\n}\n.mat-column-desctription {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 28% !important;\n  width: 28% !important;\n}\n.mat-column-date {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 28% !important;\n  width: 28% !important;\n}\n.mat-column-isprivate {\n  -webkit-box-flex: 0 !important;\n          flex: 0 0 28% !important;\n  width: 28% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50aXRpZXMvRDovcHJvZ3JhbWluZzEvdXBTdGFydENsaWVudC9zcmMvYXBwL2VudGl0aWVzL2VudGl0aWVzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9lbnRpdGllcy9lbnRpdGllcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjtBREVDO0VBRUUsOEJBQUE7VUFBQSx3QkFBQTtFQUNBLHFCQUFBO0FDREg7QURJQztFQUVDLDhCQUFBO1VBQUEsd0JBQUE7RUFDQSxxQkFBQTtBQ0hGO0FET0E7RUFFRSw4QkFBQTtVQUFBLHdCQUFBO0VBQ0EscUJBQUE7QUNORjtBRFNBO0VBRUUsOEJBQUE7VUFBQSx3QkFBQTtFQUNBLHFCQUFBO0FDUkY7QURXQTtFQUVFLDhCQUFBO1VBQUEsd0JBQUE7RUFDQSxxQkFBQTtBQ1ZGO0FEYUE7RUFFRSw4QkFBQTtVQUFBLHdCQUFBO0VBQ0EscUJBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2VudGl0aWVzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuIH1cblxuIC5tYXQtY29sdW1uLWlkIHtcblxuICAgZmxleDogMCAwIDI4JSAhaW1wb3J0YW50O1xuICAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuXG4gfVxuIC5tYXQtY29sdW1uLW5hbWUge1xuXG4gIGZsZXg6IDAgMCAyOCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuXG59XG5cbi5tYXQtY29sdW1uLWFtb3VtdCB7XG5cbiAgZmxleDogMCAwIDI4JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG5cbn1cbi5tYXQtY29sdW1uLWRlc2N0cmlwdGlvbiB7XG5cbiAgZmxleDogMCAwIDI4JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG5cbn1cbi5tYXQtY29sdW1uLWRhdGUge1xuXG4gIGZsZXg6IDAgMCAyOCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuXG59XG4ubWF0LWNvbHVtbi1pc3ByaXZhdGUge1xuXG4gIGZsZXg6IDAgMCAyOCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuXG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1jb2x1bW4taWQge1xuICBmbGV4OiAwIDAgMjglICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcbn1cbi5tYXQtY29sdW1uLW5hbWUge1xuICBmbGV4OiAwIDAgMjglICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcbn1cbi5tYXQtY29sdW1uLWFtb3VtdCB7XG4gIGZsZXg6IDAgMCAyOCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xufVxuLm1hdC1jb2x1bW4tZGVzY3RyaXB0aW9uIHtcbiAgZmxleDogMCAwIDI4JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNvbHVtbi1kYXRlIHtcbiAgZmxleDogMCAwIDI4JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjglICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNvbHVtbi1pc3ByaXZhdGUge1xuICBmbGV4OiAwIDAgMjglICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOCUgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/entities/entities.component.ts":
/*!************************************************!*\
  !*** ./src/app/entities/entities.component.ts ***!
  \************************************************/
/*! exports provided: EntitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesComponent", function() { return EntitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_entity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





let EntitiesComponent = class EntitiesComponent {
    constructor(entityService) {
        this.entityService = entityService;
        this.displayedColumns = ['Id', 'Name', 'Description', 'Amount', 'Date', 'IsPrivate', 'Edit', 'Delete', 'Details'];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.entityService.Get().subscribe(data => {
            this.entities = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.entities);
            this.dataSource.sort = this.sort;
        });
    }
    update(id) {
    }
    delete(id) {
        this.entityService.delete(id).subscribe(response => {
            this.getData();
        });
    }
    getDate(tick) {
        return new Date(tick / 10000);
    }
};
EntitiesComponent.ctorParameters = () => [
    { type: _services_entity_service__WEBPACK_IMPORTED_MODULE_2__["EntityService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], EntitiesComponent.prototype, "sort", void 0);
EntitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/entities.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entities.component.less */ "./src/app/entities/entities.component.less")).default]
    })
], EntitiesComponent);



/***/ }),

/***/ "./src/app/entity-details/entity-details.component.less":
/*!**************************************************************!*\
  !*** ./src/app/entity-details/entity-details.component.less ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0eS1kZXRhaWxzL2VudGl0eS1kZXRhaWxzLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/entity-details/entity-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/entity-details/entity-details.component.ts ***!
  \************************************************************/
/*! exports provided: EntityDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityDetailsComponent", function() { return EntityDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/entity.service */ "./src/app/services/entity.service.ts");




let EntityDetailsComponent = class EntityDetailsComponent {
    constructor(route, entityService) {
        this.route = route;
        this.entityService = entityService;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.entityService.GetById(id).subscribe(data => this.entity = data);
        }
    }
    getDate(tick) {
        return new Date(tick / 10000);
    }
};
EntityDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }
];
EntityDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entity-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./entity-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entity-details/entity-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./entity-details.component.less */ "./src/app/entity-details/entity-details.component.less")).default]
    })
], EntityDetailsComponent);



/***/ }),

/***/ "./src/app/services/entity.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/entity.service.ts ***!
  \********************************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let EntityService = class EntityService {
    constructor(http) {
        this.http = http;
        //private baseUrl="http://localhost:52841";
        this.baseUrl = "http://upstartserver.somee.com/";
    }
    Get() {
        return this.http.get(`${this.baseUrl}/api/entity/`);
    }
    GetById(id) {
        return this.http.get(`${this.baseUrl}/api/entity/${id}`);
    }
    CreateOrEdit(entity) {
        return this.http.post(`${this.baseUrl}/api/entity/`, entity);
    }
    delete(id) {
        return this.http.delete(`${this.baseUrl}/api/entity/${id}`);
    }
};
EntityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EntityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], EntityService);



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programing1\upStartClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map