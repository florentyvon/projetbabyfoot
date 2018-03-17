webpackJsonp([14],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChampionshipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-championship',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\championship\championship.html"*/'<!--\n  Generated template for the ChampionshipPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Championnats</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Bonjour je suis la page championnat\n</ion-content>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\championship\championship.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChampionshipPage);
    return ChampionshipPage;
}());

//# sourceMappingURL=championship.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-following',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\following\following.html"*/'<!--\n\n  Generated template for the FollowingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Suivre un match</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <p>\n\n        <ion-item>\n\n            <ion-label floating>Code Partie</ion-label>\n\n            <ion-input type="text" [(ngModel)]="code"></ion-input>\n\n        </ion-item>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" (click)="follow(code)">Suivre le match</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\following\following.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FollowingPage);
    return FollowingPage;
}());

//# sourceMappingURL=following.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsPage = (function () {
    function FriendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsPage');
    };
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\friends\friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes amis</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="../assets/imgs/unnamed.png" />\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="../assets/imgs/unnamed.png" />\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="../assets/imgs/unnamed.png" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="../assets/imgs/unnamed.png" />\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="../assets/imgs/unnamed.png" />\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="../assets/imgs/unnamed.png" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <img src="../assets/imgs/unnamed.png" />\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="../assets/imgs/unnamed.png" />\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <img src="../assets/imgs/unnamed.png" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\friends\friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-historic',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\historic\historic.html"*/'<!--\n\n  Generated template for the HistoricPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar no-border-bottom>\n\n        <ion-title>Historique des parties</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar no-border-top>\n\n        <ion-segment [(ngModel)]="historic">\n\n            <ion-segment-button value="general">\n\n                General\n\n            </ion-segment-button>\n\n            <ion-segment-button value="moi">\n\n                Moi\n\n            </ion-segment-button>\n\n            <ion-segment-button value="amis">\n\n                Amis\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div [ngSwitch]="historic">\n\n        <ion-list *ngSwitchCase="\'general\'">\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Florent<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>8</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>10/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Youssef<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Aloïs<br/>2</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>05/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Julien<br/>12</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Mickaël<br/>10</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>03/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Florent<br/>5</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Steve<br/>8</b></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'moi\'">\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Florent<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>8</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>03/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Florent<br/>5</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Steve<br/>8</b></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>23/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Florent<br/>8</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Julien<br/>8</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Florent<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Aloïs<br/>3</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'amis\'">\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>10/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Youssef<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Aloïs<br/>2</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>05/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Julien<br/>12</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Mickaël<br/>10</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>23/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Aloïs<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>5</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Youssef<br/>10</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>10</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\historic\historic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HistoricPage);
    return HistoricPage;
}());

//# sourceMappingURL=historic.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsgamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-friendsgame',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\friendsgame\friendsgame.html"*/'<!--\n  Generated template for the FriendsgamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>friendsgame</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\friendsgame\friendsgame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FriendsgamePage);
    return FriendsgamePage;
}());

//# sourceMappingURL=friendsgame.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnknowngamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-unknowngame',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\unknowngame\unknowngame.html"*/'<!--\n  Generated template for the UnknowngamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Partie Rapide</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\unknowngame\unknowngame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UnknowngamePage);
    return UnknowngamePage;
}());

//# sourceMappingURL=unknowngame.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListbabyfootsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(262);
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
    function ListbabyfootsPage(navCtrl, alertCtrl, launchNavigator) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.launchNavigator = launchNavigator;
        this.start = "";
    }
    ListbabyfootsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ListbabyfootsPage");
    };
    ListbabyfootsPage.prototype.map = function (adr) {
        var _this = this;
        switch (adr) {
            case "1":
                console.log("switch1 ok");
                var alert_1 = this.alertCtrl.create({
                    title: "Babyfoot de la Présidence",
                    message: "Présidence de l'Université d'Angers<br/>40 rue de Rennes<br/>49035 Angers<br/>02 41 96 23 23",
                    buttons: [
                        {
                            text: "Retour",
                            role: "cancel"
                        },
                        {
                            text: "Voir sur Maps",
                            handler: function () {
                                console.log("Maps clicked");
                                _this.destination = "Présidence de l'université d'Angers, 40 rue de Rennes, 49000 Angers";
                                _this.navigate(_this.destination);
                            }
                        }
                    ]
                });
                alert_1.present();
                break;
            case "2":
                var alert2 = this.alertCtrl.create({
                    title: "Babyfoot de l'ISTIA",
                    message: "Ecole d'Ingénieurs ISTIA<br/>62 avenue Notre Dame du Lac<br/>49000 Angers<br/>02 44 68 75 00",
                    buttons: [
                        {
                            text: "Retour",
                            role: "cancel"
                        },
                        {
                            text: "Voir sur Maps",
                            handler: function () {
                                console.log("Maps clicked");
                                _this.destination = "ISTIA, 62 avenue Notre Dame du Lac, 49000 Angers";
                                _this.navigate(_this.destination);
                            }
                        }
                    ]
                });
                alert2.present();
                break;
            case "3":
                var alert3 = this.alertCtrl.create({
                    title: "Babyfoot Fac de Sciences",
                    message: "Faculté de Sciences<br/>2 Boulevard Lavoisier<br/>49000 Angers<br/>02 41 73 53 53",
                    buttons: [
                        {
                            text: "Retour",
                            role: "cancel"
                        },
                        {
                            text: "Voir sur Maps",
                            handler: function () {
                                console.log("Maps clicked");
                                _this.destination = "Fac de Sciences, 2 Boulevard Lavoisier, 49000 Angers";
                                _this.navigate(_this.destination);
                            }
                        }
                    ]
                });
                alert3.present();
                break;
            case "4":
                var alert4 = this.alertCtrl.create({
                    title: 'Babyfoot SUAPS',
                    message: "SUAPS<br/>6 Boulevard Beaussier<br/>49000 Angers<br/>02 41 22 69 49",
                    buttons: [
                        {
                            text: "Retour",
                            role: "cancel"
                        },
                        {
                            text: "Voir sur Maps",
                            handler: function () {
                                console.log("Maps clicked");
                                _this.destination = "S.U.A.P.S, 49000 Angers";
                                _this.navigate(_this.destination);
                            }
                        }
                    ]
                });
                alert4.present();
                break;
        }
    };
    ListbabyfootsPage.prototype.navigate = function (destination) {
        var options = {
            start: this.start
        };
        this.launchNavigator
            .navigate(destination, options)
            .then(function (success) { return console.log("Launched navigator"); }, function (error) { return console.log("Error launching navigator: " + error); });
    };
    ListbabyfootsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-listbabyfoots",template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\listbabyfoots\listbabyfoots.html"*/'<!--\n\n  Generated template for the ListbabyfootsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<!-- cordova.js required for cordova apps -->\n\n<script src="cordova.js"></script>\n\n\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Les babyfoots de l\'UA</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b1.jpg" />\n\n        <div class="card-title">Présidence</div>\n\n        <div class="card-subtitle">41 Parties Jouées</div>\n\n        <ion-fab right top>\n\n            <button ion-fab (click)="map(\'1\')">\n\n              <ion-icon name="pin"></ion-icon>\n\n            </button>\n\n        </ion-fab>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b2.jpg" />\n\n        <div class="card-title">ISTIA</div>\n\n        <div class="card-subtitle">64 Parties Jouées</div>\n\n        <ion-fab right top>\n\n            <button ion-fab (click)="map(\'2\')">\n\n              <ion-icon name="pin"></ion-icon>\n\n            </button>\n\n        </ion-fab>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b3.jpg" />\n\n        <div class="card-title">Sciences</div>\n\n        <div class="card-subtitle">72 Parties Jouées</div>\n\n        <ion-fab right top>\n\n            <button ion-fab (click)="map(\'3\')">\n\n              <ion-icon name="pin"></ion-icon>\n\n            </button>\n\n        </ion-fab>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b4.jpg" />\n\n        <div class="card-title">SUAPS</div>\n\n        <div class="card-subtitle">28 Parties Jouées</div>\n\n        <ion-fab right top>\n\n            <button ion-fab (click)="map(\'4\')">\n\n              <ion-icon name="pin"></ion-icon>\n\n            </button>\n\n        </ion-fab>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\listbabyfoots\listbabyfoots.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], ListbabyfootsPage);
    return ListbabyfootsPage;
}());

//# sourceMappingURL=listbabyfoots.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats_stats__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friends__ = __webpack_require__(104);
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
    /*ionViewDidLoad() {
      console.log('ionViewDidLoad ProfilePage');
    }*/
    ProfilePage.prototype.goTo = function (page) {
        switch (page) {
            case 'stats':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__stats_stats__["a" /* StatsPage */]);
                break;
            case 'friends':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__friends_friends__["a" /* FriendsPage */]);
                break;
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Mon Profil</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-icon name="contact"></ion-icon> Joueur1 - Niv. 12\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-icon name="contacts"></ion-icon> Mon équipe\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row (click)="goTo(\'friends\')">\n\n            <ion-col>\n\n                <ion-icon name="people"></ion-icon> Mes amis\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row  (click)="goTo(\'stats\')">\n\n            <ion-col>\n\n                <ion-icon name="stats"></ion-icon> Mes statistiques\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row (click)="goTo(\'res\')">\n\n            <ion-col>\n\n                <ion-icon name="calendar"></ion-icon> Mes Réservations\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatsPage = (function () {
    function StatsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatsPage');
    };
    StatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stats',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\stats\stats.html"*/'<!--\n  Generated template for the StatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Statistiques</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p style="text-align:center">\n    <ion-row>\n      <ion-col>\n        <h1>3 Victoires</h1>\n      </ion-col>\n      <ion-col>\n        <h1>4 Défaites</h1>\n      </ion-col>\n    </ion-row>\n  </p>\n  <br/>\n  <p>\n    <ion-row>\n      <ion-col style="text-align:center">\n        <h2>\n          <ion-icon name="reorder"></ion-icon> Classement Général : 3/123</h2>\n      </ion-col>\n    </ion-row>\n  </p>\n  <p>\n    <ion-row>\n      <ion-col style="text-align:center">\n        <h2>\n          <ion-icon name="reorder"></ion-icon> Classement Amis : 3/123</h2>\n      </ion-col>\n    </ion-row>\n  </p>\n  <br/>\n  <p style="text-align:center">\n    <ion-row>\n      <ion-col>\n        <h1>8\n          <ion-icon name="football"></ion-icon>\n        </h1>\n      </ion-col>\n      <ion-col>\n        <h1>4\n          <ion-icon name="game-controller-a"></ion-icon>\n        </h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h2>2 buts/match</h2>\n      </ion-col>\n\n    </ion-row>\n  </p>\n</ion-content>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\stats\stats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], StatsPage);
    return StatsPage;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickgamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-quickgame',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\quickgame\quickgame.html"*/'<!--\n  Generated template for the QuickgamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Partei Rapide</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Bonjour je suis la page partie rapide\n</ion-content>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\quickgame\quickgame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], QuickgamePage);
    return QuickgamePage;
}());

//# sourceMappingURL=quickgame.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentification_authentification__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, auth, formBuilder, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.createSuccess = false;
        this.submitSignin = false;
        this.submitSignup = false;
        this.MatchPassword = true;
        this.signindata = { pseudo_signin: '', password_signin: '' };
        this.signupdata = { pseudo_signup: '', password_signup: '', password_verif_signup: '', mail_signup: '' };
        //Instanciation du formulaire de connection 
        this.SigninForm = formBuilder.group({
            //Variable pseudo_signin : longueur entre 3 et 16 caracteres, contenant des chiffres / lettres / point / tiret / underscore
            pseudo_signin: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(16), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9._-]{3,16}'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            //variable password_signin : longueur entre 6 et 32 caractères
            password_signin: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
        });
        //Instanciation du formulaire de creation de compte
        this.SignupForm = formBuilder.group({
            //Variable pseudo_signup : longueur entre 3 et 16 caracteres, contenant des chiffres / lettres / point / tiret / underscore
            pseudo_signup: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(16), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9._-]{3,16}'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            //variable password_signup : longueur entre 6 et 32 caractères, contient au moins une minuscule, une majuscule et un chiffre
            password_signup: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            password_verify_signup: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            //variable mail_signup valide
            mail_signup: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        }, 
        //Verification des mots de passes
        { validator: this.areEqual('password_signup', 'password_verify_signup') });
    }
    //Comparer si les deux mots de passe correspondent
    LoginPage.prototype.areEqual = function (passwordKey, passwordConfirmationKey) {
        var _this = this;
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                _this.MatchPassword = false;
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                _this.MatchPassword = true;
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    //Fonction de connection 
    LoginPage.prototype.signin = function () {
        var _this = this;
        //this.showLoading();
        this.submitSignin = true;
        //Si le formulaire est bien remplit
        if (this.SigninForm.valid) {
            //On recupère les données du formulaire
            this.signindata = this.SigninForm.value;
            //On appelle la fonction signin du provider authentification (Providers/authentification)   
            this.auth.signin(this.signindata).subscribe(function (success) {
                console.log(success);
                //Si connection OK
                if (success === 'OK') {
                    //On enregistre dans une variable local l'utilisateur connecté
                    window.localStorage.setItem('userConnected', _this.signindata.pseudo_signin);
                    _this.createSuccess = true;
                    _this.showPopup("Success", "Connection réussie");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    //Sinon
                }
                else {
                    _this.showPopup("Accès refusé", success);
                }
            }, function (error) {
                _this.showPopup("Error", error);
            });
        }
    };
    //Fonction Signup : creation de compte
    LoginPage.prototype.signup = function () {
        var _this = this;
        this.submitSignup = true;
        //Si le formulaire est bien remplit
        if (this.SignupForm.valid) {
            //On recupère les données du formulaire
            this.signupdata = this.SignupForm.value;
            //On appelle la fonction signup du provider authentification (Providers/authentification)   
            this.auth.signup(this.signupdata).subscribe(function (success) {
                console.log(success);
                //Si creation de compte OK
                if (success === 'OK') {
                    //On enregistre dans une variable local l'utilisateur connecté
                    window.localStorage.setItem('userConnected', _this.signupdata.pseudo_signup);
                    _this.createSuccess = true;
                    _this.showPopup("Succès", "Votre compte a été créé");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    //Sinon
                }
                else {
                    _this.showPopup("Erreur", success);
                }
            }, function (error) {
                _this.showPopup("Error", error);
            });
        }
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <link rel="stylesheet prefetch" href="http://fonts.googleapis.com/css?family=Open+Sans:600">\n\n\n\n<ion-navbar>\n\n  <ion-title>Se connecter / S\'enregistrer</ion-title>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n<!--\n\n<ion-content>\n\n  <div class="login-wrap">\n\n      <div class="login-html">\n\n        <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>\n\n        <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>\n\n        <div class="login-form">\n\n          <div class="sign-in-htm">\n\n            <div class="group">\n\n              <!--<label for="user" class="label">Pseudo</label>-->\n\n <!--           <input id="user" type="text" class="input" placeholder="Pseudo"> \n\n\n\n\n\n\n\n          \n\n            </div>\n\n            <div class="group">\n\n              <!--<label for="pass" class="label">Mot de passe</label>-->\n\n <!--             <input id="pass" type="password" class="input" data-type="password" placeholder="Mot de passe" >\n\n              \n\n            </div>\n\n            <div class="group">\n\n              <input id="check" type="checkbox" class="check" checked>\n\n              <label for="check"><span class="icon"></span> Rester connecté</label>\n\n            </div>\n\n            <div class="group">\n\n              <input type="submit" class="button" value="Sign In">\n\n            \n\n            </div>\n\n            <div class="hr"></div>\n\n            <div class="foot-lnk">\n\n              <label href="#forgot">Mot de passe oublié?</label>\n\n            </div>\n\n          </div>\n\n          <div class="sign-up-htm">\n\n            <div class="group">\n\n             <!-- <label for="user" class="label">Pseudo</label>-->\n\n <!--             <input id="user" type="text" class="input" placeholder="Pseudo" >\n\n            </div>\n\n            <div class="group">\n\n             <!-- <label for="pass" class="label">Mot de passe</label>-->\n\n     <!--         <input id="pass" type="password" class="input" data-type="password" placeholder="Mot de passe">\n\n            </div>\n\n            <div class="group">\n\n             <!-- <label for="pass" class="label">Confirmer le mot de passe</label>-->\n\n    <!--          <input id="pass" type="password" class="input" data-type="password" placeholder=" Confirmer mot de passe" >\n\n            </div>\n\n            <div class="group">\n\n              <!--<label for="pass" class="label">Adresse mail</label>-->\n\n  <!--            <input id="pass" type="text" class="input" placeholder="Adresse mail">\n\n            </div>\n\n            <div class="group">\n\n              <input type="submit" class="button" value="Sign Up">\n\n            </div>\n\n            <div class="hr"></div>\n\n            <div class="foot-lnk">\n\n              <label for="tab-1">Déja membre?</label>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n  -->\n\n\n\n\n\n\n\n<!--\n\n<ion-content padding>\n\n\n\n\n\n<ion-item>\n\n  <ion-label floating>Pseudo</ion-label>\n\n  <ion-input [(ngModel)]="signindata.pseudo_signin" type="text" required></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label floating>Mot de passe</ion-label>\n\n  <ion-input [(ngModel)]="signindata.password_signin" type="text" required></ion-input>\n\n</ion-item>\n\n<button ion-button full color="primary" (click)="signin()">Sign In</button>\n\n\n\n\n\n\n\n<ion-item>\n\n  <ion-label floating>Pseudo</ion-label>\n\n  <ion-input [(ngModel)]="signupdata.pseudo_signup" type="text"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label floating>Mot de passe</ion-label>\n\n  <ion-input [(ngModel)]="signupdata.password_signup" type="text"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label floating>Confirmer le mot de passe</ion-label>\n\n  <ion-input [(ngModel)]="vpassword_verif_signup" type="text"></ion-input>\n\n</ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Adresse mail</ion-label>\n\n    <ion-input [(ngModel)]="signupdata.mail_signup" type="text"></ion-input>\n\n  </ion-item>\n\n  <button ion-button full color="primary" (click)="signup()">Sign Up</button>\n\n-->\n\n<ion-content>\n\n\n\n<ion-list no-lines>\n\n\n\n  <form [formGroup]="SigninForm">\n\n\n\n      <ion-item>\n\n          <ion-label floating>Pseudo</ion-label>\n\n          <ion-input formControlName="pseudo_signin" type="text" [class.invalid]="!SigninForm.controls.pseudo_signin.valid && (SigninForm.controls.pseudo_signin.dirty || submitSignin)"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!SigninForm.controls.pseudo_signin.valid  && (SigninForm.controls.pseudo_signin.dirty || submitSignin)">\n\n          <p style=" color: red;">Entrer un pseudo entre 3 et 16 caractères (caractères speciaux non autorisés)</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Mot de passe</ion-label>\n\n          <ion-input formControlName="password_signin" type="password"></ion-input>\n\n      </ion-item> \n\n  </form>\n\n\n\n</ion-list>\n\n<button ion-button full color="primary" (click)="signin()">Se connecter</button>\n\n\n\n<ion-list no-lines>\n\n\n\n  <form [formGroup]="SignupForm">\n\n\n\n      <ion-item>\n\n          <ion-label floating>Pseudo</ion-label>\n\n          <ion-input formControlName="pseudo_signup" type="text" [class.invalid]="!SignupForm.controls.pseudo_signup.valid && (SignupForm.controls.pseudo_signup.dirty || submitSignup)"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!SignupForm.controls.pseudo_signup.valid  && (SignupForm.controls.pseudo_signup.dirty || submitSignup)">\n\n          <p style=" color: red;">Entrer un pseudo entre 3 et 16 caractères (caractères speciaux non autorisés)</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Mot de passe</ion-label>\n\n          <ion-input formControlName="password_signup" type="password" [class.invalid]="!SignupForm.controls.password_signup.valid && (SignupForm.controls.password_signup.dirty || submitSignup)"></ion-input>\n\n      </ion-item> \n\n      <ion-item *ngIf="!SignupForm.controls.password_signup.valid  && (SignupForm.controls.password_signup.dirty || submitSignup)">\n\n          <p style=" color: red;">Le mot de passe doit contenir au moins 6 caractères dont au moins un minuscule, une Majuscule et un chiffre.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Vérification du mot de passe</ion-label>\n\n          <ion-input formControlName="password_verify_signup" type="password"></ion-input>\n\n      </ion-item> \n\n      <ion-item *ngIf="!MatchPassword">\n\n          <p style=" color: red;">Les deux mots de passe ne correspondent pas</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label floating>Adresse mail</ion-label>\n\n          <ion-input formControlName="mail_signup" type="text" [class.invalid]="!SignupForm.controls.mail_signup.valid && (SignupForm.controls.mail_signup.dirty || submitSignup)"></ion-input>\n\n      </ion-item> \n\n      <ion-item *ngIf="!SignupForm.controls.mail_signup.valid  && (SignupForm.controls.mail_signup.dirty || submitSignup)">\n\n          <p style=" color: red;">Entrer une addresse mail valide</p>\n\n      </ion-item>\n\n  </form>\n\n\n\n</ion-list>\n\n<button ion-button full color="primary" (click)="signup()">Créer un compte</button>\n\n\n\n</ion-content>\n\n  <!--\n\n<form method="post">\n\n\n\n<div>\n\n  <br/>\n\n  <label> Login </label>\n\n  <input type="text" name="login" >\n\n  </div>\n\n  <br/>\n\n  <div>\n\n  <label>Mot de passe</label>\n\n    <input type="password" name="password">\n\n</div>\n\n<p><button ion-button [navPush]="Connection" menuToggle>Se connecter </button></p>\n\n</form>\n\n-->\n\n\n\n'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_authentification_authentification__["a" /* AuthentificationProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bookingbabyfoot/bookingbabyfoot.module": [
		299,
		30
	],
	"../pages/championship/championship.module": [
		294,
		29
	],
	"../pages/following/following.module": [
		295,
		28
	],
	"../pages/friends/friends.module": [
		296,
		27
	],
	"../pages/friendsgame/friendsgame.module": [
		298,
		26
	],
	"../pages/historic/historic.module": [
		297,
		25
	],
	"../pages/home/home.module": [
		300,
		24
	],
	"../pages/listbabyfoots/listbabyfoots.module": [
		307,
		23
	],
	"../pages/log-out/log-out.module": [
		309,
		17
	],
	"../pages/login/login.module": [
		306,
		22
	],
	"../pages/profile/profile.module": [
		301,
		21
	],
	"../pages/quickgame/quickgame.module": [
		302,
		20
	],
	"../pages/stats/stats.module": [
		303,
		19
	],
	"../pages/team/team.module": [
		304,
		16
	],
	"../pages/unknowngame/unknowngame.module": [
		305,
		18
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
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**Provider Authentification */
/**Envoie des requètes au serveur pour l'authentification (signin / signup / logout)*/
var AuthentificationProvider = (function () {
    function AuthentificationProvider(http) {
        this.http = http;
    }
    //Fonction signin qui recoit en parametre le pseudo + mot de passe
    AuthentificationProvider.prototype.signin = function (signindata) {
        //Creation d'un header => JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Creation des data en JSON 
        var data = JSON.stringify(signindata);
        //Requete au serveur
        return this.http.post('http://localhost:8080/signin', data, options)
            .map(function (res) {
            //On envoie la réponse à login.ts
            return res.json();
        });
    };
    //Fonction signup qui recoit en parametre les données de création de compte
    AuthentificationProvider.prototype.signup = function (signupdata) {
        //Creation d'un header => JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Creation des data en JSON 
        var data = JSON.stringify(signupdata);
        //Requete au serveur
        return this.http.post('http://localhost:8080/signup', data, options)
            .map(function (res) {
            //On envoie la réponse à login.ts
            return res.json();
        });
    };
    AuthentificationProvider.prototype.logout = function (userdata) {
        //Creation d'un header => JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Creation des data en JSON 
        var data = JSON.stringify(userdata);
        //Requete au serveur
        //    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:8080/logout', data, options)
            .toPromise()
            .then(function (response) {
            console.log('API Response : ', response.json());
        })
            .catch(function (error) {
            console.error('API Error : ', error.status);
            console.error('API Error : ', JSON.stringify(error));
        });
        //test sans backend 
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            //   this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthentificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthentificationProvider);
    return AuthentificationProvider;
}());

//# sourceMappingURL=authentification.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(210);
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
    function ListPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
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
            selector: 'page-list',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-item-details',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quickgame_quickgame__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_championship_championship__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bookingbabyfoot_bookingbabyfoot__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_authentification_authentification__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_log_out_log_out__ = __webpack_require__(310);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quickgame_quickgame__["a" /* QuickgamePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_championship_championship__["a" /* ChampionshipPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_log_out_log_out__["a" /* LogOutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/championship/championship.module#ChampionshipPageModule', name: 'ChampionshipPage', segment: 'championship', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/following/following.module#FollowingPageModule', name: 'FollowingPage', segment: 'following', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historic/historic.module#HistoricPageModule', name: 'HistoricPage', segment: 'historic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friendsgame/friendsgame.module#FriendsgamePageModule', name: 'FriendsgamePage', segment: 'friendsgame', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookingbabyfoot/bookingbabyfoot.module#BookingbabyfootPageModule', name: 'BookingbabyfootPage', segment: 'bookingbabyfoot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quickgame/quickgame.module#QuickgamePageModule', name: 'QuickgamePage', segment: 'quickgame', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stats/stats.module#StatsPageModule', name: 'StatsPage', segment: 'stats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team/team.module#TeamPageModule', name: 'TeamPage', segment: 'team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unknowngame/unknowngame.module#UnknowngamePageModule', name: 'UnknowngamePage', segment: 'unknowngame', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listbabyfoots/listbabyfoots.module#ListbabyfootsPageModule', name: 'ListbabyfootsPage', segment: 'listbabyfoots', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log-out/log-out.module#LogOutPageModule', name: 'LogOutPage', segment: 'log-out', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quickgame_quickgame__["a" /* QuickgamePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_championship_championship__["a" /* ChampionshipPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_log_out_log_out__["a" /* LogOutPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_authentification_authentification__["a" /* AuthentificationProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_quickgame_quickgame__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_championship_championship__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bookingbabyfoot_bookingbabyfoot__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_unknowngame_unknowngame__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_friendsgame_friendsgame__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historic_historic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listbabyfoots_listbabyfoots__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_following_following__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_stats_stats__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_friends_friends__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_log_out_log_out__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(212);
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
            { title: 'Suivre un match', component: __WEBPACK_IMPORTED_MODULE_12__pages_following_following__["a" /* FollowingPage */] },
            { title: 'Voir stats', component: __WEBPACK_IMPORTED_MODULE_13__pages_stats_stats__["a" /* StatsPage */] },
            { title: 'Voir amis', component: __WEBPACK_IMPORTED_MODULE_14__pages_friends_friends__["a" /* FriendsPage */] },
            { title: 'Déconnexion', component: __WEBPACK_IMPORTED_MODULE_16__pages_log_out_log_out__["a" /* LogOutPage */] }
        ];
        this.checkPreviousAuthorization();
    }
    MyApp.prototype.checkPreviousAuthorization = function () {
        console.log(window.localStorage.getItem('userConnected'));
        //window.localStorage.removeItem('userConnected');
        if ((window.localStorage.getItem('userConnected') === "undefined" || window.localStorage.getItem('userConnected') === null)) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        }
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\babyprojet\Ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\babyprojet\Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(112);
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
 * Generated class for the LogOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogOutPage = (function () {
    function LogOutPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.LogOut();
    }
    LogOutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogOutPage');
    };
    LogOutPage.prototype.LogOut = function () {
        window.localStorage.removeItem('userConnected');
        this.showPopup('Déconnexion', 'Vous êtes bien déconnecté');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    LogOutPage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                'OK'
            ]
        });
        alert.present();
    };
    LogOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-log-out',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\log-out\log-out.html"*/'<!--\n  Generated template for the LogOutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>LogOut</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\log-out\log-out.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], LogOutPage);
    return LogOutPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=log-out.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookingbabyfoot_bookingbabyfoot__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unknowngame_unknowngame__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friendsgame_friendsgame__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historic_historic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listbabyfoots_listbabyfoots__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__following_following__ = __webpack_require__(103);
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
            selector: 'page-home',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Babyfoot Connecté</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <h3 (click)="goTo(\'mp\')">\n\n        <ion-icon name="contact"></ion-icon> Joueur1 - Equipe1\n\n    </h3>\n\n    <h4>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><br/>Je souhaite...</ion-col>\n\n        </ion-row>\n\n    </h4>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'fg\')"><ion-icon name="contacts"></ion-icon>Jouer avec des amis</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'ug\')"><ion-icon name="help"></ion-icon>Jouer avec des inconnus</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'fm\')"><ion-icon name="information"></ion-icon>Suivre un match</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'bb\')"><ion-icon name="calendar"></ion-icon>Reserver un babyfoot</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <!--<p><button ion-button color="light" (click)="back()">Back</button></p>-->\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-row>\n\n            <ion-col style="text-align:center" (click)="goTo(\'hp\')">\n\n                <ion-icon name="time"></ion-icon><br/>Historique des Parties\n\n            </ion-col>\n\n            <ion-col style="text-align:center" (click)="goTo(\'f\')">\n\n                <ion-icon name="heart"></ion-icon><br/>Favoris\n\n            </ion-col>\n\n            <ion-col style="text-align:center" (click)="goTo(\'lb\')">\n\n                <ion-icon name="pin"></ion-icon><br/>Les Babys\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingbabyfootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
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
            month: "'" + this.now.getDate() + "-" + (this.now.getMonth() + 1) + "-" + this.now.getFullYear() + "'",
            timeStarts: "'" + this.now.getHours() + ":" + this.now.getMinutes() + "'",
            timeEnds: "'" + this.now.getHours() + ":" + (this.now.getMinutes() + 10) + "'",
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
    BookingbabyfootPage.prototype.booking = function (babyfoot, date, hdeb, hfin) {
        var _this = this;
        console.log(this.testRadioResult + ':' + date + '-' + hdeb + '-' + hfin);
        if (babyfoot != undefined) {
            var alert_1 = this.alertCtrl.create({
                title: "Réservation enregistrée",
                message: "Votre réservation du " + date + " entre " + hdeb + " et " + hfin + " sur le " + babyfoot + " a bien été enregistrée. Vous recevrez un email de confirmation. <br/> <br/>D'avance, bonne partie !",
                buttons: [
                    {
                        text: "Retour",
                        role: "cancel"
                    },
                    {
                        text: "Ok",
                        handler: function () {
                            console.log("ok clicked");
                            _this.goTo('h');
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Réservation impossible",
                message: "Veuillez indiquer un babyfoot",
                buttons: [
                    {
                        text: "Retour",
                        role: "cancel"
                    }
                ],
            });
            alert_2.present();
        }
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
            selector: 'page-bookingbabyfoot',template:/*ion-inline-start:"D:\babyprojet\Ionic\src\pages\bookingbabyfoot\bookingbabyfoot.html"*/'<!--\n\n  Generated template for the BookingbabyfootPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Réserver un Babyfoot</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-col style="text-align:center"><button ion-button (click)="doRadio()">Choisir le babyfoot</button></ion-col>\n\n    </ion-row>\n\n    <p id=\'Resultat\'>Vous avez choisi le : {{ testRadioResult }}</p>\n\n    <p>Créneau horaire :</p>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>Date</ion-label>\n\n            <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="event.month"></ion-datetime>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>Heure début</ion-label>\n\n            <ion-datetime displayFormat="H:mm" pickerFormat="H mm" [(ngModel)]="event.timeStarts"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Heure fin</ion-label>\n\n            <ion-datetime displayFormat="H:mm" pickerFormat="H mm" [(ngModel)]="event.timeEnds"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-row>\n\n        <ion-col style="text-align:center"><button ion-button (click)="booking(testRadioResult, event.month, event.timeStarts, event.timeEnds)">Réserver</button></ion-col>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\babyprojet\Ionic\src\pages\bookingbabyfoot\bookingbabyfoot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BookingbabyfootPage);
    return BookingbabyfootPage;
}());

//# sourceMappingURL=bookingbabyfoot.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map