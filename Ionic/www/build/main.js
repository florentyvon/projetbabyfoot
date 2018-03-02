webpackJsonp([10],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChampionshipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChampionshipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChampionshipPage = (function () {
    function ChampionshipPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChampionshipPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChampionshipPage');
    };
    ChampionshipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-championship',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\championship\championship.html"*/'<!--\n\n  Generated template for the ChampionshipPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Championnats</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  Bonjour je suis la page championnat\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\championship\championship.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChampionshipPage);
    return ChampionshipPage;
}());

//# sourceMappingURL=championship.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickgamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QuickgamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuickgamePage = (function () {
    function QuickgamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuickgamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuickgamePage');
    };
    QuickgamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quickgame',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\quickgame\quickgame.html"*/'<!--\n\n  Generated template for the QuickgamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Partei Rapide</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  Bonjour je suis la page partie rapide\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\quickgame\quickgame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuickgamePage);
    return QuickgamePage;
}());

//# sourceMappingURL=quickgame.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bookingbabyfoot/bookingbabyfoot.module": [
		282,
		9
	],
	"../pages/championship/championship.module": [
		283,
		8
	],
	"../pages/following/following.module": [
		284,
		7
	],
	"../pages/friendsgame/friendsgame.module": [
		285,
		6
	],
	"../pages/historic/historic.module": [
		286,
		5
	],
	"../pages/home/home.module": [
		287,
		4
	],
	"../pages/listbabyfoots/listbabyfoots.module": [
		288,
		3
	],
	"../pages/profile/profile.module": [
		289,
		2
	],
	"../pages/quickgame/quickgame.module": [
		290,
		1
	],
	"../pages/unknowngame/unknowngame.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My First List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\item-details\item-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_item_details_item_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_quickgame_quickgame__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_championship_championship__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bookingbabyfoot_bookingbabyfoot__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_friendsgame_friendsgame__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_unknowngame_unknowngame__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_historic_historic__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_listbabyfoots_listbabyfoots__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_following_following__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_quickgame_quickgame__["a" /* QuickgamePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_championship_championship__["a" /* ChampionshipPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friendsgame_friendsgame__["a" /* FriendsgamePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_unknowngame_unknowngame__["a" /* UnknowngamePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_listbabyfoots_listbabyfoots__["a" /* ListbabyfootsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_historic_historic__["a" /* HistoricPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_following_following__["a" /* FollowingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bookingbabyfoot/bookingbabyfoot.module#BookingbabyfootPageModule', name: 'BookingbabyfootPage', segment: 'bookingbabyfoot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/championship/championship.module#ChampionshipPageModule', name: 'ChampionshipPage', segment: 'championship', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/following/following.module#FollowingPageModule', name: 'FollowingPage', segment: 'following', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friendsgame/friendsgame.module#FriendsgamePageModule', name: 'FriendsgamePage', segment: 'friendsgame', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historic/historic.module#HistoricPageModule', name: 'HistoricPage', segment: 'historic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listbabyfoots/listbabyfoots.module#ListbabyfootsPageModule', name: 'ListbabyfootsPage', segment: 'listbabyfoots', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quickgame/quickgame.module#QuickgamePageModule', name: 'QuickgamePage', segment: 'quickgame', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unknowngame/unknowngame.module#UnknowngamePageModule', name: 'UnknowngamePage', segment: 'unknowngame', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_quickgame_quickgame__["a" /* QuickgamePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_championship_championship__["a" /* ChampionshipPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_friendsgame_friendsgame__["a" /* FriendsgamePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_unknowngame_unknowngame__["a" /* UnknowngamePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_listbabyfoots_listbabyfoots__["a" /* ListbabyfootsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_historic_historic__["a" /* HistoricPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_following_following__["a" /* FollowingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_quickgame_quickgame__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_championship_championship__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bookingbabyfoot_bookingbabyfoot__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_unknowngame_unknowngame__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_friendsgame_friendsgame__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historic_historic__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listbabyfoots_listbabyfoots__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_following_following__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HomePage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */] },
            { title: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */] },
            { title: 'Partie Rapide', component: __WEBPACK_IMPORTED_MODULE_4__pages_quickgame_quickgame__["a" /* QuickgamePage */] },
            { title: 'Championnats', component: __WEBPACK_IMPORTED_MODULE_5__pages_championship_championship__["a" /* ChampionshipPage */] },
            { title: 'Réservation Babyfoot', component: __WEBPACK_IMPORTED_MODULE_6__pages_bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */] },
            { title: 'Jouer avec des amis', component: __WEBPACK_IMPORTED_MODULE_8__pages_friendsgame_friendsgame__["a" /* FriendsgamePage */] },
            { title: 'Jouer avec des inconnus', component: __WEBPACK_IMPORTED_MODULE_7__pages_unknowngame_unknowngame__["a" /* UnknowngamePage */] },
            { title: 'Historique des Parties', component: __WEBPACK_IMPORTED_MODULE_9__pages_historic_historic__["a" /* HistoricPage */] },
            { title: 'Liste des babyfoots', component: __WEBPACK_IMPORTED_MODULE_10__pages_listbabyfoots_listbabyfoots__["a" /* ListbabyfootsPage */] },
            { title: 'Mon Profil', component: __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Suivre un match', component: __WEBPACK_IMPORTED_MODULE_12__pages_following_following__["a" /* FollowingPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Pages</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingbabyfootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BookingbabyfootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookingbabyfootPage = (function () {
    function BookingbabyfootPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.now = new Date();
        this.event = {
            month: "'" + this.now.getFullYear() + "-" + this.now.getMonth() + "-" + this.now.getDate() + "'",
            timeStarts: "'" + this.now.getHours() + ":" + this.now.getMinutes() + "'",
            timeEnds: "'" + this.now.getHours() + ":" + this.now.getMinutes() + "'",
        };
    }
    BookingbabyfootPage.prototype.doRadio = function () {
        var _this = this;
        document.getElementById("Resultat").style.visibility = "hidden";
        var alert = this.alertCtrl.create();
        alert.setTitle('Choix du babyfoot');
        alert.addInput({
            type: 'radio',
            label: 'Babyfoot Présidence',
            value: 'Babyfoot Présidence',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Babyfoot Sciences',
            value: 'Babyfoot Sciences'
        });
        alert.addInput({
            type: 'radio',
            label: 'Babyfoot Suaps',
            value: 'Babyfoot Suaps'
        });
        alert.addInput({
            type: 'radio',
            label: 'Babyfoot Istia',
            value: 'Babyfoot Istia'
        });
        alert.addInput({
            type: 'radio',
            label: 'Babyfoot Médecine',
            value: 'Babyfoot Médecine'
        });
        alert.addButton('Annuler');
        alert.addButton({
            text: 'Valider',
            handler: function (data) {
                console.info('Choix babyfoot', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                document.getElementById("Resultat").style.visibility = "visible";
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    BookingbabyfootPage.prototype.booking = function (date, hdeb, hfin) {
        console.log(this.testRadioResult + ':' + date + '-' + hdeb + '-' + hfin);
        this.goTo('h');
    };
    BookingbabyfootPage.prototype.goTo = function (page) {
        switch (page) {
            case 'h':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                break;
        }
    };
    BookingbabyfootPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookingbabyfoot',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\bookingbabyfoot\bookingbabyfoot.html"*/'<!--\n\n  Generated template for the BookingbabyfootPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Réserver un Babyfoot</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-col style="text-align:center"><button ion-button (click)="doRadio()">Choisir le babyfoot</button></ion-col>\n\n    </ion-row>\n\n    <p id=\'Resultat\'>Vous avez choisi le : {{ testRadioResult }}</p>\n\n    <p>Créneau horaire :</p>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>Date</ion-label>\n\n            <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="event.month"></ion-datetime>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>Heure début</ion-label>\n\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Heure fin</ion-label>\n\n            <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeEnds"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-row>\n\n        <ion-col style="text-align:center"><button ion-button (click)="booking(event.month, event.timeStarts, event.timeEnds)">Réserver</button></ion-col>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\bookingbabyfoot\bookingbabyfoot.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], BookingbabyfootPage);
    return BookingbabyfootPage;
    var _a, _b;
}());

//# sourceMappingURL=bookingbabyfoot.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookingbabyfoot_bookingbabyfoot__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unknowngame_unknowngame__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friendsgame_friendsgame__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historic_historic__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listbabyfoots_listbabyfoots__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__following_following__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.goTo = function (page) {
        switch (page) {
            case 'fg':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__friendsgame_friendsgame__["a" /* FriendsgamePage */]);
                break;
            case 'ug':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__unknowngame_unknowngame__["a" /* UnknowngamePage */]);
                break;
            case 'bb':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */]);
                break;
            case 'hp':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__historic_historic__["a" /* HistoricPage */]);
                break;
            case 'f':
                this.navCtrl.push(HomePage_1);
                break;
            case 'lb':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__listbabyfoots_listbabyfoots__["a" /* ListbabyfootsPage */]);
                break;
            case 'mp':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
                break;
            case 'fm':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__following_following__["a" /* FollowingPage */]);
                break;
        }
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Babyfoot Connecté</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <h3 (click)="goTo(\'mp\')">\n\n        <ion-icon name="contact"></ion-icon> Joueur1 - Equipe1\n\n    </h3>\n\n    <h4>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><br/>Je souhaite...</ion-col>\n\n        </ion-row>\n\n    </h4>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'fg\')"><ion-icon name="contacts"></ion-icon>Jouer avec des amis</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'ug\')"><ion-icon name="help"></ion-icon>Jouer avec des inconnus</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'fm\')"><ion-icon name="information"></ion-icon>Suivre un match</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'bb\')"><ion-icon name="calendar"></ion-icon>Reserver un babyfoot</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <!--<p><button ion-button color="light" (click)="back()">Back</button></p>-->\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-row>\n\n            <ion-col style="text-align:center" (click)="goTo(\'hp\')">\n\n                <ion-icon name="time"></ion-icon><br/>Historique des Parties\n\n            </ion-col>\n\n            <ion-col style="text-align:center" (click)="goTo(\'f\')">\n\n                <ion-icon name="heart"></ion-icon><br/>Favoris\n\n            </ion-col>\n\n            <ion-col style="text-align:center" (click)="goTo(\'lb\')">\n\n                <ion-icon name="pin"></ion-icon><br/>Les Babys\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnknowngamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UnknowngamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnknowngamePage = (function () {
    function UnknowngamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UnknowngamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnknowngamePage');
    };
    UnknowngamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unknowngame',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\unknowngame\unknowngame.html"*/'<!--\n\n  Generated template for the UnknowngamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Partie Rapide</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\unknowngame\unknowngame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UnknowngamePage);
    return UnknowngamePage;
}());

//# sourceMappingURL=unknowngame.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsgamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FriendsgamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsgamePage = (function () {
    function FriendsgamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FriendsgamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsgamePage');
    };
    FriendsgamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friendsgame',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\friendsgame\friendsgame.html"*/'<!--\n\n  Generated template for the FriendsgamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>friendsgame</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\friendsgame\friendsgame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FriendsgamePage);
    return FriendsgamePage;
}());

//# sourceMappingURL=friendsgame.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoricPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoricPage = (function () {
    function HistoricPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historic = "general";
    }
    HistoricPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoricPage');
    };
    HistoricPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historic',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\historic\historic.html"*/'<!--\n\n  Generated template for the HistoricPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar no-border-bottom>\n\n        <ion-title>Historique des parties</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar no-border-top>\n\n        <ion-segment [(ngModel)]="historic">\n\n            <ion-segment-button value="general">\n\n                General\n\n            </ion-segment-button>\n\n            <ion-segment-button value="moi">\n\n                Moi\n\n            </ion-segment-button>\n\n            <ion-segment-button value="amis">\n\n                Amis\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div [ngSwitch]="historic">\n\n        <ion-list *ngSwitchCase="\'general\'">\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Florent<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>8</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>10/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Youssef<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Aloïs<br/>2</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>05/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Julien<br/>12</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Mickaël<br/>10</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>03/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Florent<br/>5</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Steve<br/>8</b></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'moi\'">\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Florent<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>8</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>03/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Florent<br/>5</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Steve<br/>8</b></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>23/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Florent<br/>8</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Julien<br/>8</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Florent<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Aloïs<br/>3</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'amis\'">\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>10/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Youssef<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Aloïs<br/>2</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>05/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Julien<br/>12</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Mickaël<br/>10</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>23/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Aloïs<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>5</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Youssef<br/>10</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>10</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\historic\historic.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], HistoricPage);
    return HistoricPage;
    var _a, _b;
}());

//# sourceMappingURL=historic.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListbabyfootsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListbabyfootsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListbabyfootsPage = (function () {
    function ListbabyfootsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListbabyfootsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListbabyfootsPage');
    };
    ListbabyfootsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listbabyfoots',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\listbabyfoots\listbabyfoots.html"*/'<!--\n\n  Generated template for the ListbabyfootsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Les babyfoots de l\'UA</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b1.jpg" />\n\n        <div class="card-title">Présidence</div>\n\n        <div class="card-subtitle">41 Parties Jouées</div>\n\n        <ion-fab right top>\n\n            <button ion-fab (click)="map()">\n\n              <ion-icon name="pin"></ion-icon>\n\n            </button>\n\n        </ion-fab>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b2.jpg" />\n\n        <div class="card-title">ISTIA</div>\n\n        <div class="card-subtitle">64 Parties Jouées</div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b3.jpg" />\n\n        <div class="card-title">Sciences</div>\n\n        <div class="card-subtitle">72 Parties Jouées</div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b4.jpg" />\n\n        <div class="card-title">SUAPS</div>\n\n        <div class="card-subtitle">28 Parties Jouées</div>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\listbabyfoots\listbabyfoots.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListbabyfootsPage);
    return ListbabyfootsPage;
}());

//# sourceMappingURL=listbabyfoots.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Mon Profil</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-icon name="contact"></ion-icon> Joueur1 - Niv. 12\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-icon name="contacts"></ion-icon> Mon équipe\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-icon name="people"></ion-icon> Mes amis\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-icon name="stats"></ion-icon> Mes statistiques\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FollowingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FollowingPage = (function () {
    function FollowingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FollowingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FollowingPage');
    };
    FollowingPage.prototype.follow = function (key) {
        console.log("Match a suivre : ", key);
    };
    FollowingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-following',template:/*ion-inline-start:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\following\following.html"*/'<!--\n\n  Generated template for the FollowingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Suivre un match</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <p>\n\n        <ion-item>\n\n            <ion-label floating>Code Partie</ion-label>\n\n            <ion-input type="text" [(ngModel)]="code"></ion-input>\n\n        </ion-item>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" (click)="follow(code)">Suivre le match</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\Documents\Projet_Babyfoot\projetbabyfoot\Ionic\src\pages\following\following.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FollowingPage);
    return FollowingPage;
}());

//# sourceMappingURL=following.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map