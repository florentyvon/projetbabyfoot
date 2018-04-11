webpackJsonp([15],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_game__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
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
 * Generated class for the DirectGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DirectGamePage = (function () {
    function DirectGamePage(navCtrl, socket, navParams, alertCtrl, game, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.socket = socket;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.game = game;
        this.toastCtrl = toastCtrl;
        //Flag pour gérer l'affichage des joueurs
        this.showPlayerB1 = false;
        this.showPlayerB2 = false;
        this.showPlayerR1 = false;
        this.showPlayerR2 = false;
        this.scoreEquipeB = 0;
        this.scoreEquipeR = 0;
        var dataSalon = this.navParams.get('dataGame');
        this.idgame = dataSalon.idgame;
        console.log(dataSalon);
        console.log(this.idgame);
        console.log(dataSalon.playerB2);
        //Attribution des joueurs
        if (typeof dataSalon.playerB1 !== "undefined") {
            this.playerB1 = dataSalon.playerB1;
            this.showPlayerB1 = true;
        }
        if (typeof dataSalon.playerB2 !== "undefined") {
            console.log('player B2 est undefined');
            this.playerB2 = dataSalon.playerB2;
            this.showPlayerB2 = true;
        }
        if (typeof dataSalon.playerR1 !== "undefined") {
            this.playerR1 = dataSalon.playerR1;
            this.showPlayerR1 = true;
        }
        if (typeof dataSalon.playerR2 !== "undefined") {
            this.playerR2 = dataSalon.playerR2;
            this.showPlayerR2 = true;
        }
        this.directGame(this.idgame);
        /** ECOUTE MAJ DES SCORES */
        this.socket.on('maj-score-game', function (rep) {
            console.log("on maj-score-game");
            console.log(rep);
            //SI la maj correspond bien au bon babyfoot et à la bonne partie 
            if (rep.idgame === _this.idgame && rep.nameBF === window.localStorage.getItem('userConnected')) {
                //On met à jour les scores à afficher
                _this.scoreEquipeB = rep.score.b;
                _this.scoreEquipeR = rep.score.r;
                //Tester si une equipe a gagnée 
                _this.checkWinner();
            }
        });
        /** ECOUTE SI BABYFOOT NON CONNECTE */
        this.socket.on('no-bf-connecter', function (rep) {
            console.log("babyfoot non connecté");
            _this.showPopup("Erreur", "Babyfoot non connecté");
            _this.navCtrl.pop();
        });
    }
    DirectGamePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DirectGamePage');
        this.navBar.backButtonClick = function (e) {
            var alert1 = _this.alertCtrl.create({
                title: 'Êtes-vous sûr de vouloir quitter la partie ?',
                inputs: [
                    {
                        type: 'radio',
                        label: 'Oui',
                        id: 'o',
                        value: 'o',
                        checked: true
                    },
                    {
                        type: 'radio',
                        label: 'Non',
                        id: 'n',
                        value: 'n'
                    }
                ],
                buttons: [
                    {
                        text: 'Annuler',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Valider',
                        handler: function (data2) {
                            if (data2 === "o") {
                                _this.socket.emit('cancel-game', { "idgame": _this.idgame });
                                _this.socket.removeAllListeners();
                                _this.navCtrl.popToRoot();
                            }
                        }
                    }
                ]
            });
            alert1.present();
        };
    };
    DirectGamePage.prototype.directGame = function (idgame) {
        var _this = this;
        var data = { "idgame": idgame };
        console.log('direct game function');
        console.log(data);
        //On appelle la fonction signin du provider authentification (Providers/authentification) => requète vers le serveur
        this.game.directGame(data).subscribe(function (success) {
            console.log('success');
            console.log(success);
            //Si la réponse est de type objet <=> la réponse contient les données de la partie en cours
            if (typeof success === "object") {
                _this.dataGame = success;
                _this.limiteScore = success.config.limiteScore;
                console.log(_this.limiteScore);
                //Attribution des joueurs
                _this.showToast("La partie est lancée");
                console.log(_this.dataGame);
                //On demande l'envoie des scores de la partie
                //Pour le babyfoot concerné 
                _this.socket.emit('ask-score-bf', { "nameBF": window.localStorage.getItem('userConnected'), "idgame": idgame });
                console.log('emit ask-score-bf');
            }
            else {
                _this.showPopup('Erreur', success);
                _this.navCtrl.pop();
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    DirectGamePage.prototype.checkWinner = function () {
        //Si la limite de score est atteinte 
        //SI l'équipe Bleue gagne 
        if (this.scoreEquipeB === this.limiteScore) {
            this.showPopup("Gagné", "L'équipe Bleue a gagné " + this.scoreEquipeB + " - " + this.scoreEquipeR + " !");
            this.socket.emit("stop-game", { "idgame": this.idgame, "scoreB": this.scoreEquipeB, "scoreR": this.scoreEquipeR });
            this.navCtrl.popToRoot();
        }
        else {
            //Si l'équipe Rouge gagne
            if (this.scoreEquipeR === this.limiteScore) {
                this.showPopup("Gagné", "L'équipe Rouge a gagné " + this.scoreEquipeR + " - " + this.scoreEquipeB + " !");
                this.socket.emit("stop-game", { "idgame": this.idgame, "scoreB": this.scoreEquipeB, "scoreR": this.scoreEquipeR });
                this.navCtrl.popToRoot();
            }
        }
    };
    /** FONCTION ARRET DE LA PARTIE */
    DirectGamePage.prototype.stopGame = function () {
        if (this.scoreEquipeB > this.scoreEquipeR) {
            this.showPopup("Gagné", "L'équipe Bleue a gagné " + this.scoreEquipeB + " - " + this.scoreEquipeR + " !");
        }
        else {
            if (this.scoreEquipeR > this.scoreEquipeB) {
                this.showPopup("Gagné", "L'équipe Rouge a gagné " + this.scoreEquipeR + " - " + this.scoreEquipeB + " !");
            }
            else {
                this.showPopup("Égalité", this.scoreEquipeR + " - " + this.scoreEquipeB);
            }
        }
        this.socket.emit("stop-game", { "idgame": this.idgame, "scoreB": this.scoreEquipeB, "scoreR": this.scoreEquipeR });
        this.navCtrl.popToRoot();
    };
    /** FONCTION EQUIPE B DECLARE FORFAITE */
    DirectGamePage.prototype.giveupB = function () {
        this.showPopup("Gagné", "L'équipe Rouge a gagné par forfait 10 - 0 ");
        this.socket.emit("stop-game", { "idgame": this.idgame, "scoreB": 0, "scoreR": 10 });
        this.navCtrl.popToRoot();
    };
    /** FONCTION EQUIPE R DECLARE FORFAITE */
    DirectGamePage.prototype.giveupR = function () {
        this.showPopup("Gagné", "L'équipe Bleue a gagné par forfait 0 - 10 ");
        this.socket.emit("stop-game", { "idgame": this.idgame, "scoreB": 10, "scoreR": 0 });
        this.navCtrl.popToRoot();
    };
    /** FONCTION AJOUT et ENLEVE BUT EQUIPE B */
    DirectGamePage.prototype.addGoalB = function () {
        this.scoreEquipeB++;
        //Tester si une equipe a gagnée 
        this.checkWinner();
        this.socket.emit('maj-score-user', { "idgame": this.idgame, "scoreB": this.scoreEquipeB, "scoreR": this.scoreEquipeR });
    };
    DirectGamePage.prototype.removeGoalB = function () {
        this.scoreEquipeB--;
        //Tester si une equipe a gagnée 
        this.checkWinner();
        this.socket.emit('maj-score-user', { "idgame": this.idgame, "scoreB": this.scoreEquipeB, "scoreR": this.scoreEquipeR });
    };
    /** FONCTION AJOUT et ENLEVE BUT EQUIPE R */
    DirectGamePage.prototype.addGoalR = function () {
        this.scoreEquipeR++;
        //Tester si une equipe a gagnée 
        this.checkWinner();
        this.socket.emit('maj-score-user', { "idgame": this.idgame, "scoreB": this.scoreEquipeB, "scoreR": this.scoreEquipeR });
    };
    DirectGamePage.prototype.removeGoalR = function () {
        this.scoreEquipeR--;
        //Tester si une equipe a gagnée 
        this.checkWinner();
        this.socket.emit('maj-score-user', { "idgame": this.idgame, "scoreB": this.scoreEquipeB, "scoreR": this.scoreEquipeR });
    };
    /** AFFICHER DES TOASTS */
    DirectGamePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    /** AFFICHER DES POP-UP */
    DirectGamePage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], DirectGamePage.prototype, "navBar", void 0);
    DirectGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-direct-game',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\direct-game\direct-game.html"*/'<!--\n\n  Generated template for the DirectGamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Partie en cours : {{idgame}}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card style="font-size: 5em;text-align: center;height: 1.25em ;margin-top: 0;"><br><br>\n\n        <button item-left ion-button color="danger" (click)="removeGoalB()">\n\n              <ion-icon name="remove"></ion-icon>\n\n          </button>\n\n        <button item-left ion-button color="secondary" (click)="addGoalB()">\n\n                  <ion-icon name="add"></ion-icon>                \n\n          </button> {{scoreEquipeB}} - {{scoreEquipeR}}\n\n        <button item-left ion-button color="danger" (click)="removeGoalR()">\n\n                  <ion-icon name="remove"></ion-icon>\n\n          </button>\n\n        <button item-left ion-button color="secondary" (click)="addGoalR()">\n\n              <ion-icon name="add"></ion-icon>\n\n          </button>\n\n    </ion-card>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col style="font-size: 2em; text-align: center;">\n\n\n\n                <img width="40" height="40" src="assets/imgs/blue_flag.png"> Equipe Bleue\n\n            </ion-col>\n\n            <ion-col style="font-size: 2em; text-align: center;">\n\n                Equipe Rouge\n\n                <img width="40" height="40" src="assets/imgs/red_flag.png">\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n    </ion-grid>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-card *ngIf="showPlayerB1" style="height:50px; margin-top: 0;">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/icon_equipeB.png">\n\n                        </ion-avatar>\n\n                        <h2>{{this.playerB1.pseudo}}</h2>\n\n                        <!--   <p>November 5, 1955</p> -->\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ion-col>\n\n\n\n            <ion-col>\n\n                <ion-card *ngIf="showPlayerR1" style="height:50px; margin-top: 0;">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/icon_equipeR.png">\n\n                        </ion-avatar>\n\n                        <h2>{{this.playerR1.pseudo}}</h2>\n\n                        <!--   <p>November 5, 1955</p> -->\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-card *ngIf="showPlayerB2" style="height:50px; margin-top: 0;">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/icon_equipeB.png">\n\n                        </ion-avatar>\n\n                        <h2>{{this.playerB2.pseudo}}</h2>\n\n                        <!--   <p>November 5, 1955</p> -->\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ion-col>\n\n\n\n            <ion-col>\n\n                <ion-card *ngIf="showPlayerR2" style="height:50px; margin-top: 0;">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/icon_equipeR.png">\n\n                        </ion-avatar>\n\n                        <h2>{{this.playerR2.pseudo}}</h2>\n\n                        <!--   <p>November 5, 1955</p> -->\n\n                    </ion-item>\n\n                </ion-card>\n\n\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button icon-right ion-button full color="light" (click)="giveupB()">          \n\n                  Déclarer forfait\n\n                  <ion-icon name="remove-circle" item-start></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n\n\n            <ion-col>\n\n                <button icon-right ion-button full color="danger" (click)="stopGame()">          \n\n                  Arrêter la partie\n\n                  <ion-icon name="power" item-start></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n\n\n            <ion-col>\n\n                <button icon-right ion-button full color="light" (click)="giveupR()">          \n\n                  Déclarer forfait\n\n                  <ion-icon name="remove-circle" item-start></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\direct-game\direct-game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_game_game__["a" /* GameProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], DirectGamePage);
    return DirectGamePage;
}());

//# sourceMappingURL=direct-game.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-friends',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\friends\friends.html"*/'<!--\n\n  Generated template for the FriendsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mes amis</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="../assets/imgs/unnamed.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="../assets/imgs/unnamed.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="../assets/imgs/unnamed.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="../assets/imgs/unnamed.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="../assets/imgs/unnamed.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="../assets/imgs/unnamed.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="../assets/imgs/unnamed.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="../assets/imgs/unnamed.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-card>\n\n          <img src="../assets/imgs/unnamed.png" />\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\friends\friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historic',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\historic\historic.html"*/'<!--\n\n  Generated template for the HistoricPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar no-border-bottom>\n\n        <ion-title>Historique des parties</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar no-border-top>\n\n        <ion-segment [(ngModel)]="historic">\n\n            <ion-segment-button value="general">\n\n                General\n\n            </ion-segment-button>\n\n            <ion-segment-button value="moi">\n\n                Moi\n\n            </ion-segment-button>\n\n            <ion-segment-button value="amis">\n\n                Amis\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div [ngSwitch]="historic">\n\n        <ion-list *ngSwitchCase="\'general\'">\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Florent<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>8</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>10/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Youssef<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Aloïs<br/>2</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>05/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Julien<br/>12</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Mickaël<br/>10</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>03/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Florent<br/>5</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Steve<br/>8</b></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'moi\'">\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Florent<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>8</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>03/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Florent<br/>5</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Steve<br/>8</b></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>23/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Florent<br/>8</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Julien<br/>8</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Florent<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Aloïs<br/>3</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'amis\'">\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>10/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Youssef<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Aloïs<br/>2</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>05/10/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Julien<br/>12</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Mickaël<br/>10</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>23/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div><b>Aloïs<br/>10</b></div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>5</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row style="text-align:center">\n\n                        <ion-col col-4>\n\n                            <div>20/09/2018</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Youssef<br/>10</div>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <div>vs.</div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div>Steve<br/>10</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\historic\historic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HistoricPage);
    return HistoricPage;
}());

//# sourceMappingURL=historic.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalonPartiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_game__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_bf_home_bf__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__direct_game_direct_game__ = __webpack_require__(121);
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
 * Generated class for the SalonPartiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SalonPartiePage = (function () {
    function SalonPartiePage(nav, navParams, game, alertCtrl, socket, toastCtrl) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.game = game;
        this.alertCtrl = alertCtrl;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        //Tableau de joueur Equipe Bleue et Rouge
        this.joueursB = {};
        this.joueursR = {};
        //Nb de joueurs dans les équipes
        this.nbJoueursB = 0;
        this.nbJoueursR = 0;
        //Variable de config de partie
        this.nbJoueursMin = 0;
        this.nbJoueursMax = 0;
        //Flag pour gérer l'affichage des joueurs
        this.showPlayerB1 = false;
        this.showPlayerB2 = false;
        this.showPlayerR1 = false;
        this.showPlayerR2 = false;
        //Flag pour l'affichage du bouton de lancer une partie
        this.ready = false;
        //Nombre d'"invité"
        this.nGuests = 0;
        //Flag de verification des joueurs présents dans la partie
        var checkPlayerB1 = false;
        var checkPlayerB2 = false;
        var checkPlayerR1 = false;
        var checkPlayerR2 = false;
        //Flag pour l'affichage des joueurs
        var flag;
        //Recuperation du nombre de joueurs min et max demandé par home_bf page
        this.nbJoueursMin = this.navParams.get('nbJoueursMin');
        this.nbJoueursMax = this.navParams.get('nbJoueursMax');
        //Créer une partie rapide
        this.CreateSpeedGame(this.nbJoueursMin, this.nbJoueursMax);
        /** SOCKETS */
        /**______________________________________________________________________________________________________________________________ */
        /** ECOUTE SI ERREUR LORS DE L'AJOUT D'INVITE */
        this.socket.on('ack-set-player', function (rep) {
            console.log("on add player");
            switch (rep.ack) {
                //Si joueur ajouté a la partie 
                case 'ok':
                    //On redirige vers la page 
                    _this.showToast('"Invité" ajouté dans la partie');
                    break;
                //Si la partie est complète
                case 'err_full':
                    _this.showToast('La partie est complète');
                    break;
                //Si le joueur n'a pas d'équipe attribuée
                case 'err_noteam':
                    _this.showToast('Pas d\'équipe attribuée');
                    break;
                //Si l'équipe rouge est complète
                case 'err_fullteam':
                    _this.showToast('L\'équipe est complète');
                    break;
                //Si l'équipe bleue est complète
                case 'err_player':
                    _this.showToast('Joueur déjà dans cette partie');
                    break;
                //Si la partie est déjà lancée
                case 'err_notopen':
                    _this.showToast('La partie est déjà lancée ou terminée');
                    break;
            }
        });
        /**______________________________________________________________________________ */
        /**ECOUTE : MAJ DES JOUEURS DE LA PARTIE  */
        this.socket.on('maj-players', function (data) {
            // On met à jour la liste des joueurs et leur nombre 
            _this.joueursB = data.dataGame.players.b;
            _this.joueursR = data.dataGame.players.r;
            //Si il y a eu un joueur de supprimé dans l'équipe Bleue
            if (Object.keys(_this.joueursB).length < _this.nbJoueursB) {
                //Flag pour trouver quel joueur est supprimé
                checkPlayerB1 = false;
                checkPlayerB2 = false;
                //Si il n'y a plus de joueur dans l'équipe
                if (Object.keys(_this.joueursB).length === 0) {
                    //On reset tous les joueurs de l'équipe Bleue
                    _this.showPlayerB1 = false;
                    _this.showPlayerB2 = false;
                    _this.playerB1 = undefined;
                    _this.playerB2 = undefined;
                    //Sinon
                }
                else {
                    //Pour chaque joueur de l'équipe bleue restant 
                    for (var jb in _this.joueursB) {
                        //Verif si PlayerB1 et PlayerB2 sont toujours présent dans les joueurs de la partie
                        if (_this.playerB1 === jb) {
                            checkPlayerB1 = true;
                        }
                        if (_this.playerB1 === jb) {
                            checkPlayerB1 = true;
                        }
                    }
                }
                //Si des joueurs ne sont plus présent => on les supprime
                if (!checkPlayerB1) {
                    _this.showPlayerB1 = false;
                    _this.playerB1 = undefined;
                }
                if (!checkPlayerB2) {
                    _this.showPlayerB2 = false;
                    _this.playerB2 = undefined;
                }
            }
            //Si il y a eu un joueur de supprimé dans l'équipe Rouge
            if (Object.keys(_this.joueursR).length < _this.nbJoueursR) {
                //Flag pour trouver quel joueur est supprimé
                checkPlayerR1 = false;
                checkPlayerR2 = false;
                //Si il n'y a plus de joueur dans l'équipe
                if (Object.keys(_this.joueursR).length === 0) {
                    //On reset tous les joueurs de l'équipe Bleue
                    _this.showPlayerR1 = false;
                    _this.showPlayerR2 = false;
                    _this.playerR1 = undefined;
                    _this.playerR2 = undefined;
                    //Sinon
                }
                else {
                    //Pour chaque joueur de l'équipe bleue restant 
                    for (var jr in _this.joueursR) {
                        //Verif si PlayerB1 et PlayerB2 sont toujours présent dans les joueurs de la partie
                        if (_this.playerR1 === jr) {
                            checkPlayerR1 = true;
                        }
                        if (_this.playerR1 === jr) {
                            checkPlayerR1 = true;
                        }
                    }
                }
                //Si des joueurs ne sont plus présent => on les supprime
                if (!checkPlayerR1) {
                    _this.showPlayerR1 = false;
                    _this.playerR1 = undefined;
                }
                if (!checkPlayerR2) {
                    _this.showPlayerR2 = false;
                    _this.playerR2 = undefined;
                }
            }
            //Pour chaque joueur de l'équipe Bleue
            for (var jb in _this.joueursB) {
                flag = false;
                //Si le 1er joueur de l'équipe 1 n'est pas renseigné 
                if (typeof _this.playerB1 === "undefined") {
                    //si le joueur 2 est renseigné
                    if (typeof _this.playerB2 !== "undefined") {
                        //verification que le joueur n'est pas déjà ajouté comme joueur 2
                        try {
                            flag = _this.isEquivalent(_this.joueursB[jb], _this.playerB2);
                        }
                        catch (error) {
                            console.error(error);
                        }
                        //Si le joueur n'est pas = au joueur 2 => on l'ajoute comme joueur 1
                        if (!flag) {
                            _this.playerB1 = _this.joueursB[jb];
                            _this.showPlayerB1 = true;
                        }
                        //Si le joueur 2 n'est pas renseigné non plus => on l'ajoute comme joueur 1
                    }
                    else {
                        _this.playerB1 = _this.joueursB[jb];
                        _this.showPlayerB1 = true;
                    }
                    //Si le joueur 1 est déjà renseigné 
                }
                else {
                    //Si le joueur 2 n'est pas renseigné
                    if (typeof _this.playerB2 === "undefined") {
                        //vérifié que le joueur n'est pas déja ajouté comme joueur 1
                        try {
                            flag = _this.isEquivalent(_this.joueursB[jb], _this.playerB1);
                        }
                        catch (error) {
                            console.error(error);
                        }
                        //Si le joueur n'est pas = au joueur 2 => on l'ajoute comme joueur 1
                        if (!flag) {
                            _this.playerB2 = _this.joueursB[jb];
                            _this.showPlayerB2 = true;
                        }
                    }
                }
            }
            //Pour chaque joueur de l'équipe Rouge 
            for (var jr in _this.joueursR) {
                flag = false;
                //Si le 1er joueur de l'équipe 1 n'est pas renseigné 
                if (typeof _this.playerR1 === "undefined") {
                    //si le joueur 2 est renseigné
                    if (typeof _this.playerR2 !== "undefined") {
                        //verifier que le joueur n'est pas déjà ajouté comme joueur 2
                        try {
                            flag = _this.isEquivalent(_this.joueursR[jr], _this.playerR2);
                        }
                        catch (error) {
                            console.error(error);
                        }
                        //Si le joueur n'est pas = au joueur 2 => on l'ajoute comme joueur 1
                        if (!flag) {
                            _this.playerR1 = _this.joueursB[jr];
                            _this.showPlayerR1 = true;
                        }
                        //Si le joueur 2 n'est pas renseigné non plus => on l'ajoute comme joueur 1
                    }
                    else {
                        _this.playerR1 = _this.joueursR[jr];
                        _this.showPlayerR1 = true;
                    }
                    //Si le joueur 1 est déjà renseigné 
                }
                else {
                    //Si le joueur 2 n'est pas renseigné
                    if (typeof _this.playerR2 === "undefined") {
                        //vérifié que le joueur n'est pas déja ajouté comme joueur 1
                        try {
                            flag = _this.isEquivalent(_this.joueursR[jr], _this.playerR1);
                        }
                        catch (error) {
                            console.error(error);
                        }
                        //Si le joueur n'est pas = au joueur 2 => on l'ajoute comme joueur 1
                        if (!flag) {
                            _this.playerR2 = _this.joueursR[jr];
                            _this.showPlayerR2 = true;
                        }
                    }
                }
            }
            //Mise à jour du nombre de joueur dans les équipes
            _this.nbJoueursB = Object.keys(_this.joueursB).length;
            _this.nbJoueursR = Object.keys(_this.joueursR).length;
            //Si le nombre de joueurs > min && < max et >0 dans les 2 équipe
            if ((_this.nbJoueursB + _this.nbJoueursR) <= _this.nbJoueursMax
                && (_this.nbJoueursB + _this.nbJoueursR) >= _this.nbJoueursMin
                && _this.nbJoueursB > 0
                && _this.nbJoueursR > 0) {
                _this.ready = true;
            }
            else {
                _this.ready = false;
            }
        });
        /**______________________________________________________________________________ */
        /**ECOUTE : Confirmation de suppression de joueur */
        this.socket.on('ack-remove-player', function (data) {
            if (data.ack === 'ok') {
                _this.showToast(data.playername + ' a quitté la partie');
            }
            else {
                if (data.ack === 'player_nofound') {
                    _this.showToast('Le joueur est déjà supprimé');
                }
            }
        });
    }
    SalonPartiePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SalonPartiePage');
        this.navBar.backButtonClick = function (e) {
            // todo something
            var alert1 = _this.alertCtrl.create({
                title: 'Êtes-vous sûr de vouloir quitter la partie ?',
                inputs: [
                    {
                        type: 'radio',
                        label: 'Oui',
                        id: 'o',
                        value: 'o',
                        checked: true
                    },
                    {
                        type: 'radio',
                        label: 'Non',
                        id: 'n',
                        value: 'n'
                    }
                ],
                buttons: [
                    {
                        text: 'Annuler',
                        role: 'cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Valider',
                        handler: function (data2) {
                            if (data2 === "o") {
                                _this.socket.emit('cancel-game', { "idgame": _this.idgame });
                                _this.socket.removeAllListeners();
                                _this.nav.pop();
                            }
                        }
                    }
                ]
            });
            alert1.present();
        };
    };
    /** FONCTION CREATION DE PARTIE RAPIDE */
    SalonPartiePage.prototype.CreateSpeedGame = function (nbJoueursMin, nbJoueursMax) {
        var _this = this;
        //Données de la partie
        this.dataGame = {
            "nomBabyfoot": window.localStorage.getItem('userConnected'),
            "nbJoueursMin": nbJoueursMin,
            "nbJoueursMax": nbJoueursMax,
            "limiteScore": 10,
        };
        //Regex pour l'id de la partie
        var idRegex = /[a-zA-Z0-9]{6}/;
        //On appelle la fonction createSpeedGame du provider game (Providers/game) => requète vers le serveur
        this.game.createSpeedGame(this.dataGame).subscribe(function (success) {
            //Si creation de partie OK
            if (idRegex.test(success)) {
                _this.idgame = success;
                _this.showToast('Rejoignez la partie');
                //Connexion Socket io
                //On envoit l'id de la partie => fonction set-game du server
                _this.socket.emit('set-game', { "idgame": _this.idgame, "nbJoueursMin": nbJoueursMin, "nbJoueursMax": nbJoueursMax, "limiteScore": _this.dataGame.limiteScore });
            }
            else {
                _this.showPopup("Erreur", 'Impossible de créer la partie');
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__home_bf_home_bf__["a" /* HomeBfPage */]);
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    /** FONCTION SUPPRESSION DES JOUEURS DANS LA PARTIE  */
    SalonPartiePage.prototype.RemovePlayer = function (player) {
        //On envoit les données du joueurs a supprimer de la partie 
        this.socket.emit('remove-player', player);
        if (player.pseudo === "Guestpseudo") {
            this.nGuests--;
        }
    };
    /** FONCTION AJOUTER INVITE */
    SalonPartiePage.prototype.addGuest = function () {
        var _this = this;
        this.nGuests++;
        var Guestpseudo = "Invité" + this.nGuests;
        var alert1 = this.alertCtrl.create({
            title: 'Choix de l\'équipe',
            inputs: [
                {
                    type: 'radio',
                    label: 'Bleue',
                    id: 'b',
                    value: 'b',
                    checked: true
                },
                {
                    type: 'radio',
                    label: 'Rouge',
                    id: 'r',
                    value: 'r'
                }
            ],
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Valider',
                    handler: function (data2) {
                        console.log(data2);
                        //On envoit les données du joueur à ajouter au server
                        console.log("emiit add player ");
                        _this.socket.emit('set-player', { "pseudo": Guestpseudo, "idgame": _this.idgame, "equipe": data2 });
                    }
                }
            ]
        });
        alert1.present();
    };
    /** FONCTION LANCER LA PARTIE */
    SalonPartiePage.prototype.LaunchGame = function () {
        //On envoit l'id de la partie à lancer et le nom du babyfoot au serveur'
        this.socket.emit('launch-game', { "idgame": this.idgame, "nameBF": window.localStorage.getItem('userConnected') });
        //On redirige vers la page DirectGamePage avec les données de la partie et les joueurs
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__direct_game_direct_game__["a" /* DirectGamePage */], { "dataGame": { "idgame": this.idgame,
                "playerB1": this.playerB1,
                "playerB2": this.playerB2,
                "playerR1": this.playerR1,
                "playerR2": this.playerR2 } });
    };
    /** AFFICHER DES POP-UP */
    SalonPartiePage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                }
            ]
        });
        alert.present();
    };
    /** AFFICHER DES TOASTS */
    SalonPartiePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    /** COMPARER 2 OBJECTS ET LEURS PROPRIETES */
    SalonPartiePage.prototype.isEquivalent = function (a, b) {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        if (aProps.length != bProps.length) {
            return false;
        }
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], SalonPartiePage.prototype, "navBar", void 0);
    SalonPartiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-salon-partie',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\salon-partie\salon-partie.html"*/'<!--\n\n  Generated template for the SalonPartiePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Rejoignez la partie</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-icon name="football" item-start></ion-icon>\n\n        <ion-label>ID : {{ idgame }}</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col style="font-size: 2em; text-align: center;">\n\n                <img width="40" height="40" src="assets/imgs/blue_flag.png"> Equipe Bleue\n\n            </ion-col>\n\n            <ion-col style="font-size: 2em; text-align: center;">\n\n                Equipe Rouge\n\n                <img width="40" height="40" src="assets/imgs/red_flag.png">\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-card *ngIf="showPlayerB1" style="height:50px; margin-top: 0;">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/icon_equipeB.png">\n\n                        </ion-avatar>\n\n                        <h2>{{playerB1.pseudo}}</h2>\n\n\n\n                        <button item-right ion-button color="danger" (click)=\'RemovePlayer( playerB1 )\'>\n\n                                                     <ion-icon name="remove-circle"></ion-icon>\n\n                                                </button>\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ion-col>\n\n\n\n            <ion-col>\n\n                <ion-card *ngIf="showPlayerR1" style="height:50px; margin-top: 0;">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/icon_equipeR.png">\n\n                        </ion-avatar>\n\n                        <h2>{{playerR1.pseudo}}</h2>\n\n\n\n                        <button item-right ion-button color="danger" (click)=\'RemovePlayer( playerR1 )\'>\n\n                                                        <ion-icon name="remove-circle"></ion-icon>\n\n                                                </button>\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-card *ngIf="showPlayerB2" style="height:50px; margin-top: 0;">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/icon_equipeB.png">\n\n                        </ion-avatar>\n\n                        <h2>{{playerB2.pseudo}}</h2>\n\n                        <button item-right ion-button color="danger" (click)=\'RemovePlayer( playerB2 )\'>\n\n                                                <ion-icon name="remove-circle"></ion-icon>\n\n                                        </button>\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ion-col>\n\n\n\n            <ion-col>\n\n                <ion-card *ngIf="showPlayerR2" style="height:50px; margin-top: 0;">\n\n                    <ion-item>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/icon_equipeR.png">\n\n                        </ion-avatar>\n\n                        <h2>{{playerR2.pseudo}}</h2>\n\n                        <button item-right ion-button color="danger" (click)=\'RemovePlayer( playerR2 )\'>\n\n                                                <ion-icon name="remove-circle"></ion-icon>\n\n                                        </button>\n\n                    </ion-item>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-row>\n\n        <ion-col style="text-align:center">\n\n            <button ion-button center color="primary" (click)=\'this.addGuest()\'>Ajouter un joueur en tant que "invité"</button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <button *ngIf="!ready" ion-button full color="light">En attente de joueur</button>\n\n    <button *ngIf="ready" icon-right ion-button full color="primary" (click)=\'this.LaunchGame()\'>          \n\n                Lancer la partie\n\n                <ion-icon name="play" item-start></ion-icon>\n\n        </button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\salon-partie\salon-partie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_game_game__["a" /* GameProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SalonPartiePage);
    return SalonPartiePage;
}());

//# sourceMappingURL=salon-partie.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(36);
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
    function StatsPage(navCtrl, navParams, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        //On récupère le pseudo courrant
        this.username = window.localStorage.getItem('userConnected');
        //On envoie une requête à la BDD pour trouver l'ID des stats du joueur
        this.data.getDataPlayer(this.username).subscribe(function (data) {
            //On décrypte le résultat
            _this.player = JSON.parse(data);
            //On récupère l'id_stat du joueur
            _this.idstats = _this.player.id_stat;
            //On peut maintenant envoyer une requête pour connaitre les stats selon leur id
            _this.data.getStatsPlayer(_this.idstats).subscribe(function (data2) {
                //Décryptage
                _this.stats = JSON.parse(data2);
                //Chaque variable globale reçoit maintenant sa valeur correspondante
                _this.goals = _this.stats.nbr_but;
                _this.games = _this.stats.nbr_match;
                _this.V = _this.stats.nbr_victoires;
                _this.D = _this.stats.nbr_defaites;
                _this.R = (_this.goals / _this.games).toFixed(2);
                _this.F_r = _this.stats.friend_rank;
                _this.G_r = _this.stats.gen_rank;
            });
        });
    }
    StatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatsPage');
    };
    StatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stats',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\stats\stats.html"*/'<!--\n\n  Generated template for the StatsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>Statistiques</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <p style="text-align:center">\n\n        <ion-row>\n\n            <ion-col>\n\n                <h1>{{ V }} Victoires</h1>\n\n            </ion-col>\n\n            <ion-col>\n\n                <h1>{{ D }} Défaites</h1>\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <br/>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center">\n\n                <h2>\n\n                    <ion-icon name="reorder"></ion-icon> Classement Général : {{ G_r }}/10</h2>\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center">\n\n                <h2>\n\n                    <ion-icon name="reorder"></ion-icon> Classement Amis : {{ F_r }}/5</h2>\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <br/>\n\n    <p style="text-align:center">\n\n        <ion-row>\n\n            <ion-col>\n\n                <h1>{{ goals }}\n\n                    <ion-icon name="football"></ion-icon>\n\n                </h1>\n\n            </ion-col>\n\n            <ion-col>\n\n                <h1>{{ games }}\n\n                    <ion-icon name="game-controller-a"></ion-icon>\n\n                </h1>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <h2>{{ R }} buts/match</h2>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\stats\stats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], StatsPage);
    return StatsPage;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(36);
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
 * Generated class for the MyBookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyBookingsPage = (function () {
    function MyBookingsPage(navCtrl, navParams, data, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        this.alertCtrl = alertCtrl;
        this.reservationsTD = [];
        this.DelBool = false;
        this.event = {
            month: '',
            timeStarts: '',
            timeEnds: '',
        };
        //On stocke le pseudo courant
        this.username = window.localStorage.getItem("userConnected");
        //Requête à la BDD pour avoir les données du joeurs et pouvoir les afficher
        this.data.getDataPlayer(this.username).subscribe(function (data) {
            _this.player = JSON.parse(data);
            _this.username = _this.player.pseudo;
            _this.id = _this.player._id;
            _this.data.getMyReservations(_this.id).subscribe(function (data2) {
                _this.reservations = JSON.parse(data2);
                _this.reservations.forEach(function (element) {
                    _this.printReservation(element);
                });
            });
        });
    }
    MyBookingsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MyBookingsPage");
    };
    MyBookingsPage.prototype.printReservation = function (reservation) {
        var dated = new Date(reservation.DateDeb);
        var datef = new Date(reservation.DateFin);
        switch (reservation.ID_baby) {
            case 1:
                reservation.ID_baby = "Babyfoot Présidence";
                break;
            case 2:
                reservation.ID_baby = "Babyfoot Sciences";
                break;
            case 3:
                reservation.ID_baby = "Babyfoot Istia";
                break;
            case 4:
                reservation.ID_baby = "Babyfoot Suaps";
                break;
            case 5:
                reservation.ID_baby = "Babyfoot Médecine";
                break;
        }
        if (dated.getDate() < 10) {
            this.event.month = "0" + dated.getDate();
        }
        else {
            this.event.month = "" + dated.getDate();
        }
        if (dated.getMonth() + 1 < 10) {
            this.event.month += "-0" + (dated.getMonth() + 1) + "-" + dated.getFullYear();
        }
        else {
            this.event.month += "-" + (dated.getMonth() + 1) + "-" + dated.getFullYear();
        }
        /*Construction créneau*/
        if (dated.getHours() < 10) {
            this.event.timeStarts = "0" + dated.getHours();
        }
        else {
            this.event.timeStarts = "" + dated.getHours();
        }
        if (dated.getMinutes() < 10) {
            this.event.timeStarts += ":0" + dated.getMinutes();
        }
        else {
            this.event.timeStarts += ":" + dated.getMinutes();
        }
        if (datef.getHours() < 10) {
            this.event.timeEnds = "0" + datef.getHours();
        }
        else {
            this.event.timeEnds = "" + datef.getHours();
        }
        if (datef.getMinutes() < 10) {
            this.event.timeEnds += ":0" + datef.getMinutes();
        }
        else {
            this.event.timeEnds += ":" + datef.getMinutes();
        }
        reservation.DateDeb = this.event.month;
        reservation.DateFin = this.event.timeStarts + ' à ' + this.event.timeEnds;
    };
    MyBookingsPage.prototype.delete = function (reservation) {
        console.log("Supprimer la réservation " + reservation._id);
        this.data.DelReservation(reservation._id).subscribe(function (data) {
        });
        this.navCtrl.push(this.navCtrl.getActive().component);
    };
    MyBookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-my-bookings",template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\my-bookings\my-bookings.html"*/'<!--\n\n  Generated template for the MyBookingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Mes Réservations</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card *ngFor="let stack of reservations">\n\n        <ion-card-header>\n\n            <b> Réservation du  {{ stack.DateDeb }}</b>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-icon name="pin"></ion-icon> {{stack.ID_baby }} <br/>\n\n            <ion-icon name="time"></ion-icon> {{ stack.DateFin }}\n\n        </ion-card-content>\n\n        <ion-row style="text-align:center">\n\n            <ion-col><button ion-button (click)="delete(stack)" color="danger">Supprimer</button></ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\my-bookings\my-bookings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyBookingsPage);
    return MyBookingsPage;
}());

//# sourceMappingURL=my-bookings.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoingamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_game__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player_board_game_player_board_game__ = __webpack_require__(128);
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
 * Generated class for the JoingamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoingamePage = (function () {
    function JoingamePage(navCtrl, navParams, game, formBuilder, alertCtrl, socket, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.game = game;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        //Instanciation du formulaire de connection 
        this.JoinGameForm = formBuilder.group({
            //Variable idgame composé de 6 caractères : minuscule, majuscule ou chiffre
            idgame: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]{6}'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
        });
        /** SOCKETS */
        /** ________________________________________________________________________________________________ */
        /** ECOUTE CONFIRMATION CONNEXION A LA PARTIE */
        this.socket.on('ack-set-player', function (rep) {
            switch (rep.ack) {
                //Si joueur ajouté a la partie 
                case 'ok':
                    //On redirige vers la page 
                    _this.showToast('Joueur dans la partie');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__player_board_game_player_board_game__["a" /* PlayerBoardGamePage */], { "dataPlayer": _this.dataPlayer });
                    _this.socket.removeAllListeners();
                    break;
                //Si la partie est complète
                case 'err_full':
                    _this.showToast('La partie est complète');
                    break;
                //Si le joueur n'a pas d'équipe attribuée
                case 'err_noteam':
                    _this.showToast('Pas d\'équipe attribuée');
                    break;
                //Si l'équipe rouge est complète
                case 'err_fullteam':
                    _this.showToast('L\'équipe est complète');
                    break;
                //Si l'équipe bleue est complète
                case 'err_player':
                    _this.showToast('Joueur déjà dans cette partie');
                    break;
                //Si la partie est déjà lancée
                case 'err_notopen':
                    _this.showToast('La partie est déjà lancée ou terminée');
                    break;
            }
        });
    }
    JoingamePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad JoingamePage');
        this.navBar.backButtonClick = function (e) {
            // todo something
            _this.socket.removeAllListeners();
            _this.navCtrl.pop();
        };
    };
    /** FONCTION REJOINDRE UNE PARTIE */
    JoingamePage.prototype.joinGame = function () {
        var _this = this;
        //Si le formulaire est valide
        if (this.JoinGameForm.valid) {
            //On recupère la donnée du formulaire
            var dataForm = { idgame: this.JoinGameForm.value.idgame,
                equipe: this.equipe };
            //On appelle la fonction signin du provider joingame (Providers/joingame)
            this.game.joinGame(dataForm).subscribe(function (success) {
                //Si la partie existe bien
                if (success === 'OKjoin') {
                    //  this.navCtrl.setRoot(HomePage);
                    _this.dataPlayer = { pseudo: window.localStorage.getItem('userConnected'), idgame: dataForm.idgame, equipe: dataForm.equipe };
                    //On envoit le pseudo et l'id de la partie
                    _this.socket.emit('set-player', _this.dataPlayer);
                }
                else {
                    _this.showPopup("Accès refusé", success);
                }
            }, function (error) {
                _this.showPopup("Error", error);
            });
        }
    };
    /** FONCTION SELECTIONNER EQUIPE BLEUE */
    JoingamePage.prototype.selectBleue = function () {
        this.equipe = 'b';
    };
    /** FONCTION SELECTIONNER EQUIPE ROUGE */
    JoingamePage.prototype.selectRouge = function () {
        this.equipe = 'r';
    };
    /** FONCTION AFFICHAGE POP-UP */
    JoingamePage.prototype.showPopup = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                }
            ]
        });
        alert.present();
    };
    /** FONCTION AFFICHAGE TOASTS */
    JoingamePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], JoingamePage.prototype, "navBar", void 0);
    JoingamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-joingame',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\joingame\joingame.html"*/'<!--\n\n  Generated template for the JoingamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n  <ion-icon name="menu"></ion-icon>\n\n</button>\n\n    <ion-title>Rejoindre une partie</ion-title>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h4>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><br/>Entrez l\'ID de la partie à rejoindre (affiché sur l\'écran du babyfoot)</ion-col>\n\n        </ion-row>\n\n    </h4>\n\n    <ion-list radio-group [(ngModel)]="autoManufacturers">\n\n\n\n        <form [formGroup]="JoinGameForm">\n\n      \n\n            <ion-item>\n\n                <ion-label floating>ID</ion-label>\n\n                <ion-input formControlName="idgame" type="text" [class.invalid]="!JoinGameForm.controls.idgame.valid && JoinGameForm.controls.idgame.dirty"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!JoinGameForm.controls.idgame.valid  && JoinGameForm.controls.idgame.dirty">\n\n                <p style=" color: red;">Format de l\'ID incorrect</p>\n\n            </ion-item> \n\n        \n\n            <ion-item>\n\n                    <ion-label>Équipe Bleue</ion-label>\n\n                    <ion-radio (ionSelect)="selectBleue()" [disabled]="isDisabled"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n                    <ion-label>Équipe Rouge</ion-label>\n\n                    <ion-radio (ionSelect)="selectRouge()" [disabled]="isDisabled"></ion-radio>\n\n            </ion-item>\n\n    \n\n        </form>\n\n      \n\n      </ion-list>\n\n      <button ion-button full color="primary" (click)="joinGame()">Rejoindre</button>\n\n      \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\joingame\joingame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_game_game__["a" /* GameProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], JoingamePage);
    return JoingamePage;
}());

//# sourceMappingURL=joingame.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerBoardGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
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
 * Generated class for the PlayerBoardGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayerBoardGamePage = (function () {
    function PlayerBoardGamePage(navCtrl, alertCtrl, toastCtrl, navParams, socket) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.dataPlayer = this.navParams.get('dataPlayer');
        /**SOCKETS */
        /* ___________________________________________________________________________________________________________________*/
        ///**ECOUTE CONFIRMATION SI LE JOUEUR A AJOUTER EXISTE DANS LA BDD */
        this.socket.on('ack-add-player', function (rep) {
            //Si le joueur n'existe pas
            if (rep.rep === 'player_nofound') {
                _this.showToast('Ce joueur n\'existe pas');
                //Sinon si il existe
            }
            else {
                //On l'ajoute à la partie 
                _this.socket.emit('set-player', rep.dataPlayer);
            }
        });
        /**__________________________________________________________________________________ */
        /** ECOUTE CONFIRMATION DE L'AJOUT DE JOUEUR */
        this.socket.on('ack-set-player', function (rep) {
            switch (rep.ack) {
                //Si joueur ajouté a la partie 
                case 'ok':
                    //On redirige vers la page 
                    _this.showToast('Joueur ajouté dans la partie');
                    break;
                //Si la partie est complète
                case 'err_full':
                    _this.showToast('La partie est complète');
                    break;
                //Si le joueur n'a pas d'équipe attribuée
                case 'err_noteam':
                    _this.showToast('Pas d\'équipe attribuée');
                    break;
                //Si l'équipe rouge est complète
                case 'err_fullteam':
                    _this.showToast('L\'équipe est complète');
                    break;
                //Si l'équipe bleue est complète
                case 'err_player':
                    _this.showToast('Joueur déjà dans cette partie');
                    break;
                //Si la partie est déjà lancée
                case 'err_notopen':
                    _this.showToast('La partie est déjà lancée ou terminée');
                    break;
            }
        });
        /**__________________________________________________________________________________________ */
        /** ECOUTE DE LA CONFIRMATION QUE LE JOUEUR A QUITTE LA PARTIE */
        this.socket.on('ack-remove-player', function (data) {
            if (data.ack === 'ok' && data.playername === _this.dataPlayer.pseudo) {
                _this.showToast('Vous avez été déconnecté de la partie');
                _this.navCtrl.pop();
                _this.socket.removeAllListeners();
            }
            else {
                if (data.ack === 'player_nofound') {
                    _this.showToast('Votre joueur n\'est pas dans la partie');
                }
            }
        });
    }
    PlayerBoardGamePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PlayerBoardGamePage');
        this.navBar.backButtonClick = function (e) {
            // todo something
            _this.socket.removeAllListeners();
            _this.navCtrl.pop();
        };
    };
    /** FONCTION AJOUTER JOUEUR A LA PARTIE */
    PlayerBoardGamePage.prototype.addPlayer = function () {
        var _this = this;
        //Creation d'une alerte pour récupérer le nom et l'équipe du joueur à ajouter
        var alert = this.alertCtrl.create({
            title: 'Pseudo du joueur',
            inputs: [
                {
                    name: 'pseudoPlayer',
                    placeholder: ''
                }
            ],
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Ajouter',
                    handler: function (data) {
                        var alert2 = _this.alertCtrl.create({
                            title: 'Choix de l\'équipe',
                            inputs: [
                                {
                                    type: 'radio',
                                    label: 'Bleue',
                                    id: 'b',
                                    value: 'b',
                                    checked: true
                                },
                                {
                                    type: 'radio',
                                    label: 'Rouge',
                                    id: 'r',
                                    value: 'r'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Annuler',
                                    role: 'cancel',
                                    handler: function (data) {
                                    }
                                },
                                {
                                    text: 'Valider',
                                    handler: function (data2) {
                                        //On envoit les données du joueur à ajouter au server
                                        _this.socket.emit('add-player', { "pseudo": data.pseudoPlayer, "idgame": _this.dataPlayer.idgame, "equipe": data2 });
                                    }
                                }
                            ]
                        });
                        alert2.present();
                    }
                }
            ]
        });
        alert.present();
    };
    /**FONCTION POUR QUITTER LA PARTIE */
    PlayerBoardGamePage.prototype.quitGame = function () {
        //On envoit les données du joueur qui veut quitter la partie
        this.socket.emit('remove-player', this.dataPlayer);
    };
    /**FONCTION AFFICHAGE DE POP UP */
    PlayerBoardGamePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], PlayerBoardGamePage.prototype, "navBar", void 0);
    PlayerBoardGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-player-board-game',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\player-board-game\player-board-game.html"*/'<!--\n\n  Generated template for the PlayerBoardGamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Partie en cours</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h4>Vous êtes connecté à la partie en tant que {{ this.dataPlayer.pseudo }} </h4>\n\n  <ion-item>\n\n      <ion-label>ID de la partie : {{ this.dataPlayer.idgame }}</ion-label>\n\n  </ion-item>\n\n<!--  \n\n  <ion-item>\n\n      <ion-label>Lien de la partie : </ion-label>\n\n </ion-item> \n\n --> \n\n  <button ion-button full color="primary" (click) ="addPlayer()">Ajouter un autre joueur</button>\n\n  <button ion-button full color="danger" (click) = "quitGame()">Quitter la partie</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\player-board-game\player-board-game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
    ], PlayerBoardGamePage);
    return PlayerBoardGamePage;
}());

//# sourceMappingURL=player-board-game.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(68);
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
        window.localStorage.removeItem('typeAccount');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-log-out',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\log-out\log-out.html"*/'<!--\n\n  Generated template for the LogOutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>LogOut</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\log-out\log-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LogOutPage);
    return LogOutPage;
}());

//# sourceMappingURL=log-out.js.map

/***/ }),

/***/ 140:
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
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bookingbabyfoot/bookingbabyfoot.module": [
		352,
		14
	],
	"../pages/direct-game/direct-game.module": [
		344,
		13
	],
	"../pages/friends/friends.module": [
		345,
		12
	],
	"../pages/historic/historic.module": [
		346,
		11
	],
	"../pages/home-bf/home-bf.module": [
		347,
		10
	],
	"../pages/home/home.module": [
		348,
		9
	],
	"../pages/joingame/joingame.module": [
		349,
		8
	],
	"../pages/listbabyfoots/listbabyfoots.module": [
		350,
		7
	],
	"../pages/log-out/log-out.module": [
		351,
		6
	],
	"../pages/login/login.module": [
		354,
		5
	],
	"../pages/my-bookings/my-bookings.module": [
		355,
		4
	],
	"../pages/player-board-game/player-board-game.module": [
		353,
		3
	],
	"../pages/profile/profile.module": [
		356,
		2
	],
	"../pages/salon-partie/salon-partie.module": [
		357,
		1
	],
	"../pages/stats/stats.module": [
		358,
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
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(186);
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
        return this.http.post('http://192.168.1.1:8080/signin', data, options)
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
        return this.http.post('http://192.168.1.1:8080/signup', data, options)
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
        this.http.post('http://192.168.1.1:8080/logout', data, options)
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthentificationProvider);
    return AuthentificationProvider;
}());

//# sourceMappingURL=authentification.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\item-details\item-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bookingbabyfoot_bookingbabyfoot__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_log_out_log_out__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_historic_historic__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_listbabyfoots_listbabyfoots__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_stats_stats__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_friends_friends__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_bookings_my_bookings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_joingame_joingame__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_bf_home_bf__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_salon_partie_salon_partie__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_player_board_game_player_board_game__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_direct_game_direct_game__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_authentification_authentification__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_data_data__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_game_game__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_launch_navigator__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng_socket_io__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























//const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };
var config = { url: 'http://192.168.1.1:8080', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_log_out_log_out__["a" /* LogOutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_historic_historic__["a" /* HistoricPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_listbabyfoots_listbabyfoots__["a" /* ListbabyfootsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_stats_stats__["a" /* StatsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_bookings_my_bookings__["a" /* MyBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_joingame_joingame__["a" /* JoingamePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_bf_home_bf__["a" /* HomeBfPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_salon_partie_salon_partie__["a" /* SalonPartiePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_player_board_game_player_board_game__["a" /* PlayerBoardGamePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_direct_game_direct_game__["a" /* DirectGamePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/direct-game/direct-game.module#DirectGamePageModule', name: 'DirectGamePage', segment: 'direct-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historic/historic.module#HistoricPageModule', name: 'HistoricPage', segment: 'historic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-bf/home-bf.module#HomeBfPageModule', name: 'HomeBfPage', segment: 'home-bf', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/joingame/joingame.module#JoingamePageModule', name: 'JoingamePage', segment: 'joingame', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listbabyfoots/listbabyfoots.module#ListbabyfootsPageModule', name: 'ListbabyfootsPage', segment: 'listbabyfoots', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log-out/log-out.module#LogOutPageModule', name: 'LogOutPage', segment: 'log-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookingbabyfoot/bookingbabyfoot.module#BookingbabyfootPageModule', name: 'BookingbabyfootPage', segment: 'bookingbabyfoot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/player-board-game/player-board-game.module#PlayerBoardGamePageModule', name: 'PlayerBoardGamePage', segment: 'player-board-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-bookings/my-bookings.module#MyBookingsPageModule', name: 'MyBookingsPage', segment: 'my-bookings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/salon-partie/salon-partie.module#SalonPartiePageModule', name: 'SalonPartiePage', segment: 'salon-partie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stats/stats.module#StatsPageModule', name: 'StatsPage', segment: 'stats', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_28_ng_socket_io__["SocketIoModule"].forRoot(config),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_log_out_log_out__["a" /* LogOutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_historic_historic__["a" /* HistoricPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_listbabyfoots_listbabyfoots__["a" /* ListbabyfootsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_stats_stats__["a" /* StatsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_bookings_my_bookings__["a" /* MyBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_joingame_joingame__["a" /* JoingamePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_bf_home_bf__["a" /* HomeBfPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_salon_partie_salon_partie__["a" /* SalonPartiePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_player_board_game_player_board_game__["a" /* PlayerBoardGamePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_direct_game_direct_game__["a" /* DirectGamePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_authentification_authentification__["a" /* AuthentificationProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_26__providers_game_game__["a" /* GameProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_bookingbabyfoot_bookingbabyfoot__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_listbabyfoots_listbabyfoots__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_log_out_log_out__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_bf_home_bf__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(243);
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
            { title: 'Page d\'accueil', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */] },
            { title: 'Réservation Babyfoot', component: __WEBPACK_IMPORTED_MODULE_3__pages_bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */] },
            { title: 'Liste des babyfoots', component: __WEBPACK_IMPORTED_MODULE_4__pages_listbabyfoots_listbabyfoots__["a" /* ListbabyfootsPage */] },
            { title: 'Mon Profil', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Déconnexion', component: __WEBPACK_IMPORTED_MODULE_7__pages_log_out_log_out__["a" /* LogOutPage */] },
        ];
        this.checkPreviousAuthorization();
    }
    MyApp.prototype.checkPreviousAuthorization = function () {
        console.log(window.localStorage.getItem('userConnected'));
        console.log(window.localStorage.getItem('typeAccount'));
        if ((window.localStorage.getItem('userConnected') === "undefined" || window.localStorage.getItem('userConnected') === null)) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        }
        else {
            if (window.localStorage.getItem('typeAccount') === "joueur") {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
            }
            else {
                if (window.localStorage.getItem('typeAccount') === "babyfoot") {
                    this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_bf_home_bf__["a" /* HomeBfPage */];
                }
            }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Pages</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(244);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My First List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
    }
    //Fonction de récupération de données joueurs
    DataProvider.prototype.getDataPlayer = function (dataPlayerName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
        var data = { dataPN: dataPlayerName };
        //Transformation string en JSON
        var dataPN = JSON.stringify(data);
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Envoi de la requête POST
        return (this.http
            .post("http://192.168.1.1:8080/getDataPlayer", dataPN, options)
            .map(function (res) {
            //On envoie la réponse à login.ts
            return res.json();
        }));
    };
    //Fonction pour récupérer les stats d'un joueur
    DataProvider.prototype.getStatsPlayer = function (dataIDStats) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
        //Création trame JSON
        var data = { dataIS: dataIDStats };
        //Transformation string en JSON
        var dataIS = JSON.stringify(data);
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Envoi de la requête POST
        return (this.http
            .post("http://192.168.1.1:8080/getStatsPlayer", dataIS, options)
            .map(function (res) {
            //On envoie la réponse à login.ts
            return res.json();
        }));
    };
    DataProvider.prototype.bookReservation = function (reservationData) {
        //Creation d'un header => JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Creation des data en JSON
        var data = JSON.stringify(reservationData);
        //Requete au serveur
        // return this.http.post('http://192.168.1.1:8080/bookReservation', data, options)
        return this.http
            .post("http://192.168.1.1:8080/bookReservation", data, options)
            .map(function (res) {
            //On envoie la réponse à bookingbabyfoot.ts
            return res.json();
        });
    };
    DataProvider.prototype.getMyReservations = function (userID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
        //Création trame JSON
        var data = { dataID: userID };
        //Transformation string en JSON
        var dataID = JSON.stringify(data);
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Envoi de la requête POST
        return (this.http
            .post("http://192.168.1.1:8080/getMyReservations", dataID, options)
            .map(function (res) {
            //On envoie la réponse à login.ts
            return res.json();
        }));
    };
    DataProvider.prototype.DelReservation = function (ResID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json"
        });
        //Création trame JSON
        var data = { dataID: ResID };
        //Transformation string en JSON
        var dataID = JSON.stringify(data);
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Envoi de la requête POST
        return (this.http
            .post("http://192.168.1.1:8080/DelReservation", dataID, options)
            .map(function (res) {
            //On envoie la réponse à login.ts
            return res.json();
        }));
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats_stats__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friends__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_bookings_my_bookings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(36);
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
    function ProfilePage(navCtrl, navParams, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = data;
        //On stocke le pseudo courant
        this.username = window.localStorage.getItem('userConnected');
        //Requête à la BDD pour avoir les données du joeurs et pouvoir les afficher
        this.data.getDataPlayer(this.username).subscribe(function (data) {
            _this.player = JSON.parse(data);
            _this.username = _this.player.pseudo;
            _this.niv = _this.player.niv;
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goTo = function (page) {
        switch (page) {
            case 'stats':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__stats_stats__["a" /* StatsPage */]);
                break;
            case 'friends':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__friends_friends__["a" /* FriendsPage */]);
                break;
            case 'bookings':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_bookings_my_bookings__["a" /* MyBookingsPage */]);
                break;
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Mon Profil</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-icon name="contact"></ion-icon> {{ username }} - Niv. {{ niv }}\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-icon name="contacts"></ion-icon> Mon équipe\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row (click)="goTo(\'friends\')">\n\n            <ion-col>\n\n                <ion-icon name="people"></ion-icon> Mes amis\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row  (click)="goTo(\'stats\')">\n\n            <ion-col>\n\n                <ion-icon name="stats"></ion-icon> Mes statistiques\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row (click)="goTo(\'bookings\')">\n\n            <ion-col>\n\n                <ion-icon name="calendar"></ion-icon> Mes Réservations\n\n            </ion-col>\n\n        </ion-row>\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookingbabyfoot_bookingbabyfoot__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historic_historic__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listbabyfoots_listbabyfoots__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__joingame_joingame__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(36);
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
    function HomePage(navCtrl, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.data = data;
        this.username = window.localStorage.getItem('userConnected');
        this.data.getDataPlayer(this.username).subscribe(function (data) {
            _this.player = JSON.parse(data);
            _this.username = _this.player.pseudo;
            if (_this.player.nom_equipe) {
                _this.team = _this.player.nom_equipe;
            }
            else {
                _this.team = "Aucune Equipe";
            }
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.goTo = function (page) {
        switch (page) {
            case 'jg':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__joingame_joingame__["a" /* JoingamePage */]);
                break;
            case 'bb':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bookingbabyfoot_bookingbabyfoot__["a" /* BookingbabyfootPage */]);
                break;
            case 'hp':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__historic_historic__["a" /* HistoricPage */]);
                break;
            case 'f':
                this.navCtrl.push(HomePage_1);
                break;
            case 'lb':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__listbabyfoots_listbabyfoots__["a" /* ListbabyfootsPage */]);
                break;
            case 'mp':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
                break;
        }
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Babyfoot Connecté</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content text-right>\n\n    <ion-img style="margin-top : 15px; margin-right:15px" width="50" height="50" src="/assets/imgs/logobaby1.png"></ion-img>\n\n</ion-content>\n\n\n\n<ion-content padding>\n\n\n\n    <h3 (click)="goTo(\'mp\')">\n\n        <ion-icon name="contact"></ion-icon> {{ username }} - {{ team }}\n\n     \n\n    </h3>\n\n    \n\n    <h4>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><br/>Je souhaite...</ion-col>\n\n        </ion-row>\n\n    </h4>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'jg\')"><ion-icon name="contacts"></ion-icon>Rejoindre une partie</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <p>\n\n        <ion-row>\n\n            <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'bb\')"><ion-icon name="calendar"></ion-icon>Reserver un babyfoot</button></ion-col>\n\n        </ion-row>\n\n    </p>\n\n    <!--<p><button ion-button color="light" (click)="back()">Back</button></p>-->\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-row>\n\n            <ion-col style="text-align:center" (click)="goTo(\'hp\')">\n\n                <ion-icon name="time"></ion-icon><br/>Historique des Parties\n\n            </ion-col>\n\n            <ion-col style="text-align:center" (click)="goTo(\'lb\')">\n\n                <ion-icon name="pin"></ion-icon><br/>Les Babys\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the JoingameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GameProvider = (function () {
    function GameProvider(http) {
        this.http = http;
    }
    /** FONCTION REJOINDRE UNE PARTIE */
    GameProvider.prototype.joinGame = function (dataForm) {
        //Creation d'un header => JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Creation des data en JSON 
        var data = JSON.stringify(dataForm);
        //Requete au serveur
        // return this.http.post('http://localhost:8080/joingame', data, options)
        return this.http.post('http://192.168.1.1:8080/joingame', data, options)
            .map(function (res) {
            //On envoie la réponse à joingame.ts
            return res.json();
        });
    };
    /** FONCTION CREATION PARTIE RAPIDE */
    GameProvider.prototype.createSpeedGame = function (dataGame) {
        //Creation d'un header => JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Creation des data en JSON 
        var data = JSON.stringify(dataGame);
        //Requete au serveur
        // return this.http.post('http://localhost:8080/createSpeedGame', data, options)
        return this.http.post('http://192.168.1.1:8080/createSpeedGame', data, options)
            .map(function (res) {
            //On envoie la réponse à salonpartie.ts
            return res.json();
        });
    };
    /** FONCTION DIRECT GAME (lancement d'une partie) */
    GameProvider.prototype.directGame = function (dataGame) {
        //Creation d'un header => JSON
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        //Creation des options
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //Creation des data en JSON 
        var data = JSON.stringify(dataGame);
        console.log(dataGame);
        //Requete au serveur (localhost ou serveur local)
        // return this.http.post('http://localhost:8080/directGame', data, options)
        return this.http.post('http://192.168.1.1:8080/directGame', dataGame, options)
            .map(function (res) {
            //On envoie la réponse à directGame.ts
            return res.json();
        });
    };
    GameProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], GameProvider);
    return GameProvider;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeBfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salon_partie_salon_partie__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(46);
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
 * Generated class for the HomeBfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeBfPage = (function () {
    function HomeBfPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = window.localStorage.getItem('userConnected');
    }
    HomeBfPage.prototype.goTo = function (page) {
        switch (page) {
            //Partie rapide : entre 2 et 4 joueurs
            case 'pr':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__salon_partie_salon_partie__["a" /* SalonPartiePage */], { "nbJoueursMin": 2, "nbJoueursMax": 4 });
                break;
            case 'pp':
                //Redirection vers la page de gestion des options de partie
                //this.navCtrl.push(FriendsgamePage);
                break;
            case 'mp':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
                break;
        }
    };
    HomeBfPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeBfPage');
    };
    HomeBfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home-bf',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\home-bf\home-bf.html"*/'<!--\n\n  Generated template for the JoingamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      \n\n      <ion-title>Créer une partie</ion-title>\n\n      \n\n  </ion-navbar>\n\n  \n\n  </ion-header>\n\n  <ion-content text-right>\n\n      <ion-img style="margin-top : 15px; margin-right:15px" width="50" height="50" src="/assets/imgs/logobaby1.png"></ion-img>\n\n  </ion-content>\n\n  \n\n  <ion-content padding>\n\n      <h3>\n\n          <ion-icon name="contact"></ion-icon> {{ username }}\n\n  \n\n      </h3>\n\n      <h4>\n\n          <ion-row>\n\n              <ion-col style="text-align:center"><br/>Créer une partie</ion-col>\n\n          </ion-row>\n\n      </h4>\n\n  \n\n      <p>\n\n          <ion-row>\n\n              <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'pr\')"><ion-icon name="contacts"></ion-icon>Partie Rapide</button></ion-col>\n\n          </ion-row>\n\n      </p>\n\n      <p>\n\n          <ion-row>\n\n              <ion-col style="text-align:center"><button ion-button color="primary" icon-left (click)="goTo(\'pp\')"><ion-icon name="contacts"></ion-icon>Partie Personnalisée</button></ion-col>\n\n          </ion-row>\n\n      </p>\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\home-bf\home-bf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomeBfPage);
    return HomeBfPage;
}());

//# sourceMappingURL=home-bf.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingbabyfootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(36);
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
    function BookingbabyfootPage(navCtrl, alertCtrl, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.data = data;
        this.now = new Date();
        this.event = {
            month: '',
            timeStarts: '',
            timeEnds: '',
        };
        /*Construction Date*/
        if (this.now.getMonth() + 1 < 10) {
            this.event.month = this.now.getFullYear() + "-0" + (this.now.getMonth() + 1);
        }
        else {
            this.event.month = this.now.getFullYear() + "-" + (this.now.getMonth() + 1);
        }
        if (this.now.getDate() < 10) {
            this.event.month += "-0" + this.now.getDate();
        }
        else {
            this.event.month += "-" + this.now.getDate();
        }
        /*Construction créneau*/
        if (this.now.getHours() < 10) {
            this.event.timeStarts = "0" + this.now.getHours();
        }
        else {
            this.event.timeStarts = "" + this.now.getHours();
        }
        if (this.now.getMinutes() < 10) {
            this.event.timeStarts += ":0" + this.now.getMinutes();
        }
        else {
            this.event.timeStarts += ":" + this.now.getMinutes();
        }
        if (this.now.getMinutes() + 10 > 59) {
            if (this.now.getHours() < 9) {
                this.event.timeEnds = "0" + (this.now.getHours() + 1);
            }
            else {
                this.event.timeEnds = "" + (this.now.getHours() + 1);
            }
            this.event.timeEnds += ":0" + (this.now.getMinutes() + 10) % 60;
        }
        else {
            this.event.timeEnds = this.now.getHours() + ":" + (this.now.getMinutes() + 10);
        }
        this.username = window.localStorage.getItem('userConnected');
        //Requête à la BDD pour avoir les données du joeurs et pouvoir les afficher
        this.data.getDataPlayer(this.username).subscribe(function (data) {
            _this.player = JSON.parse(data);
            _this.username = _this.player.pseudo;
            _this.id = _this.player._id;
        });
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
        var id_baby;
        if (babyfoot != undefined) {
            switch (this.testRadioResult) {
                case 'Babyfoot Présidence':
                    id_baby = 1;
                    break;
                case 'Babyfoot Sciences':
                    id_baby = 2;
                    break;
                case 'Babyfoot Istia':
                    id_baby = 3;
                    break;
                case 'Babyfoot Suaps':
                    id_baby = 4;
                    break;
                case 'Babyfoot Médecine':
                    id_baby = 5;
                    break;
            }
            var DD = Date.parse(date + " " + hdeb);
            var DF = Date.parse(date + " " + hfin);
            var dataR = {
                ID_baby: id_baby,
                ID_Joueur: this.id,
                DateDeb: DD,
                DateFin: DF,
            };
            this.data.bookReservation(dataR).subscribe(function (success) {
                console.log(success);
                //Si creation de compte OK
                if (success === 'OK') {
                    _this.createSuccess = true;
                    _this.showPopup("Réservation enregistrée", "Votre réservation du " + date + " entre " + hdeb + " et " + hfin + " sur le " + babyfoot + " a bien été enregistrée. Vous recevrez un email de confirmation. <br/> <br/>D'avance, bonne partie !");
                    //Sinon
                }
                else {
                    _this.showPopup("Erreur", success);
                }
            }, function (error) {
                _this.showPopup("Error", error);
            });
        }
        else {
            this.showPopup("Réservation impossible", "Veuillez indiquer un babyfoot");
        }
    };
    BookingbabyfootPage.prototype.goTo = function (page) {
        switch (page) {
            case 'h':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                break;
        }
    };
    BookingbabyfootPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    BookingbabyfootPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bookingbabyfoot',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\bookingbabyfoot\bookingbabyfoot.html"*/'<!--\n\n  Generated template for the BookingbabyfootPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Réserver un Babyfoot</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-row>\n\n        <ion-col style="text-align:center"><button ion-button (click)="doRadio()">Choisir le babyfoot</button></ion-col>\n\n    </ion-row>\n\n    <p id=\'Resultat\'>Vous avez choisi le : {{ testRadioResult }}</p>\n\n    <p>Créneau horaire :</p>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>Date</ion-label>\n\n            <ion-datetime displayFormat="DD MMM YYYY" [(ngModel)]="event.month"></ion-datetime>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>Heure début</ion-label>\n\n            <ion-datetime displayFormat="H:mm" pickerFormat="H mm" [(ngModel)]="event.timeStarts"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Heure fin</ion-label>\n\n            <ion-datetime displayFormat="H:mm" pickerFormat="H mm" [(ngModel)]="event.timeEnds"></ion-datetime>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-row>\n\n        <ion-col style="text-align:center"><button ion-button (click)="booking(testRadioResult, event.month, event.timeStarts, event.timeEnds)">Réserver</button></ion-col>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\bookingbabyfoot\bookingbabyfoot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
    ], BookingbabyfootPage);
    return BookingbabyfootPage;
}());

//# sourceMappingURL=bookingbabyfoot.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListbabyfootsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(200);
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
        switch (adr) {
            case "1":
                this.showPopup('Babyfoot de la Présidence', "Présidence de l'Université d'Angers<br/>40 rue de Rennes<br/>49035 Angers<br/>02 41 96 23 23", "Présidence de l'université d'Angers, 40 rue de Rennes, 49000 Angers");
                break;
            case "2":
                this.showPopup("Babyfoot de l'ISTIA", "Ecole d'Ingénieurs ISTIA<br/>62 avenue Notre Dame du Lac<br/>49000 Angers<br/>02 44 68 75 00", "ISTIA, 62 avenue Notre Dame du Lac, 49000 Angers");
                break;
            case "3":
                this.showPopup('Babyfoot Fac de Sciences', "Faculté de Sciences<br/>2 Boulevard Lavoisier<br/>49000 Angers<br/>02 41 73 53 53", "Fac de Sciences, 2 Boulevard Lavoisier, 49000 Angers");
                break;
            case "4":
                this.showPopup('Babyfoot SUAPS', "SUAPS<br/>6 Boulevard Beaussier<br/>49000 Angers<br/>02 41 22 69 49", "S.U.A.P.S, 49000 Angers");
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
    ListbabyfootsPage.prototype.showPopup = function (title, text, destination) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: [
                {
                    text: 'Retour',
                    role: "cancel",
                },
                {
                    text: "Voir sur Maps",
                    handler: function () {
                        console.log("Maps clicked");
                        _this.destination = destination;
                        _this.navigate(_this.destination);
                    }
                }
            ]
        });
        alert.present();
    };
    ListbabyfootsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-listbabyfoots",template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\listbabyfoots\listbabyfoots.html"*/'<!--\n\n  Generated template for the ListbabyfootsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<!-- cordova.js required for cordova apps -->\n\n<script src="cordova.js"></script>\n\n\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Les babyfoots de l\'UA</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b1.jpg" />\n\n        <div class="card-title">Présidence</div>\n\n        <div class="card-subtitle">41 Parties Jouées</div>\n\n        <ion-fab right top>\n\n            <button ion-fab (click)="map(\'1\')">\n\n              <ion-icon name="pin"></ion-icon>\n\n            </button>\n\n        </ion-fab>\n\n\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b2.jpg" />\n\n        <div class="card-title">ISTIA</div>\n\n        <div class="card-subtitle">64 Parties Jouées</div>\n\n        <ion-fab right top>\n\n            <button ion-fab (click)="map(\'2\')">\n\n              <ion-icon name="pin"></ion-icon>\n\n            </button>\n\n        </ion-fab>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b3.jpg" />\n\n        <div class="card-title">Sciences</div>\n\n        <div class="card-subtitle">72 Parties Jouées</div>\n\n        <ion-fab right top>\n\n            <button ion-fab (click)="map(\'3\')">\n\n              <ion-icon name="pin"></ion-icon>\n\n            </button>\n\n        </ion-fab>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="../assets/imgs/b4.jpg" />\n\n        <div class="card-title">SUAPS</div>\n\n        <div class="card-subtitle">28 Parties Jouées</div>\n\n        <ion-fab right top>\n\n            <button ion-fab (click)="map(\'4\')">\n\n              <ion-icon name="pin"></ion-icon>\n\n            </button>\n\n        </ion-fab>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\listbabyfoots\listbabyfoots.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], ListbabyfootsPage);
    return ListbabyfootsPage;
}());

//# sourceMappingURL=listbabyfoots.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentification_authentification__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_bf_home_bf__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
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
    function LoginPage(nav, auth, formBuilder, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.createSuccess = false;
        this.submitSignin = false;
        this.submitSignup = false;
        this.MatchPassword = true;
        this.signindata = { pseudo_signin: '', password_signin: '' };
        this.signupdata = { pseudo_signup: '', password_signup: '', password_verif_signup: '', mail_signup: '' };
        //Instanciation du formulaire de connection 
        this.SigninForm = formBuilder.group({
            //Variable pseudo_signin : longueur entre 3 et 16 caracteres, contenant des chiffres / lettres / point / tiret / underscore
            pseudo_signin: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(16), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9._-]{3,16}'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            //variable password_signin : longueur entre 6 et 32 caractères
            password_signin: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(32), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])]
        });
        //Instanciation du formulaire de creation de compte
        this.SignupForm = formBuilder.group({
            //Variable pseudo_signup : longueur entre 3 et 16 caracteres, contenant des chiffres / lettres / point / tiret / underscore
            pseudo_signup: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(16), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9._-]{3,16}'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            //variable password_signup : longueur entre 6 et 32 caractères, contient au moins une minuscule, une majuscule et un chiffre
            password_signup: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            password_verify_signup: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            //variable mail_signup valide
            mail_signup: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$'), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
        }, 
        //Verification des mots de passes
        { validator: this.areEqual('password_signup', 'password_verify_signup') });
    }
    /** FONCTION COMPARAISON DES MOTS DE PASSE ENTREES */
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
    /** FONCTION DE CONNECTION  */
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
                //Si connection OK et que c'est un compte Joueur
                if (success === 'OKjoueur') {
                    //On enregistre dans une variable local l'utilisateur connecté
                    window.localStorage.setItem('userConnected', _this.signindata.pseudo_signin);
                    //On enregistre dans une variable local le type de compte
                    window.localStorage.setItem('typeAccount', 'joueur');
                    _this.createSuccess = true;
                    _this.showToast("Connection réussie");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    //Sinon
                }
                else {
                    if (success === 'OKbabyfoot') {
                        //On enregistre dans une variable local l'utilisateur connecté
                        window.localStorage.setItem('userConnected', _this.signindata.pseudo_signin);
                        //On enregistre dans une variable local le type de compte
                        window.localStorage.setItem('typeAccount', 'babyfoot');
                        console.log(window.localStorage.getItem('typeAccount'));
                        console.log(success);
                        _this.createSuccess = true;
                        _this.showToast("Connection réussie");
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_bf_home_bf__["a" /* HomeBfPage */]);
                    }
                    else {
                        _this.showPopup("Accès refusé", 'Pseudo et mot de passe invalide');
                    }
                }
            }, function (error) {
                _this.showPopup("Error", error);
            });
        }
    };
    /** FONCTION CREATION DE COMPTE */
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
                    //Type de compte = joueur
                    window.localStorage.setItem('typeAccount', 'joueur');
                    _this.createSuccess = true;
                    _this.showPopup("Succès", "Votre compte a été créé");
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    //Sinon
                }
                else {
                    _this.showPopup("Erreur", 'Compte déjà existant (pseudo ou adresse mail)');
                }
            }, function (error) {
                _this.showPopup("Error", error);
            });
        }
    };
    /** FONCTION AFFICHER ERREURS */
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    /** FONCTION AFFICHER POP-UP */
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
    /** AFFICHER DES TOASTS */
    LoginPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <link rel="stylesheet prefetch" href="http://fonts.googleapis.com/css?family=Open+Sans:600">\n\n\n\n    <ion-navbar>\n\n        <ion-title>Se connecter / S\'enregistrer</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n<!--\n\n<ion-content>\n\n  <div class="login-wrap">\n\n      <div class="login-html">\n\n        <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>\n\n        <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>\n\n        <div class="login-form">\n\n          <div class="sign-in-htm">\n\n            <div class="group">\n\n              <!--<label for="user" class="label">Pseudo</label>-->\n\n<!--           <input id="user" type="text" class="input" placeholder="Pseudo"> \n\n\n\n\n\n\n\n          \n\n            </div>\n\n            <div class="group">\n\n              <!--<label for="pass" class="label">Mot de passe</label>-->\n\n<!--             <input id="pass" type="password" class="input" data-type="password" placeholder="Mot de passe" >\n\n              \n\n            </div>\n\n            <div class="group">\n\n              <input id="check" type="checkbox" class="check" checked>\n\n              <label for="check"><span class="icon"></span> Rester connecté</label>\n\n            </div>\n\n            <div class="group">\n\n              <input type="submit" class="button" value="Sign In">\n\n            \n\n            </div>\n\n            <div class="hr"></div>\n\n            <div class="foot-lnk">\n\n              <label href="#forgot">Mot de passe oublié?</label>\n\n            </div>\n\n          </div>\n\n          <div class="sign-up-htm">\n\n            <div class="group">\n\n             <!-- <label for="user" class="label">Pseudo</label>-->\n\n<!--             <input id="user" type="text" class="input" placeholder="Pseudo" >\n\n            </div>\n\n            <div class="group">\n\n             <!-- <label for="pass" class="label">Mot de passe</label>-->\n\n<!--         <input id="pass" type="password" class="input" data-type="password" placeholder="Mot de passe">\n\n            </div>\n\n            <div class="group">\n\n             <!-- <label for="pass" class="label">Confirmer le mot de passe</label>-->\n\n<!--          <input id="pass" type="password" class="input" data-type="password" placeholder=" Confirmer mot de passe" >\n\n            </div>\n\n            <div class="group">\n\n              <!--<label for="pass" class="label">Adresse mail</label>-->\n\n<!--            <input id="pass" type="text" class="input" placeholder="Adresse mail">\n\n            </div>\n\n            <div class="group">\n\n              <input type="submit" class="button" value="Sign Up">\n\n            </div>\n\n            <div class="hr"></div>\n\n            <div class="foot-lnk">\n\n              <label for="tab-1">Déja membre?</label>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n\n\n  -->\n\n\n\n\n\n\n\n<!--\n\n<ion-content padding>\n\n\n\n\n\n<ion-item>\n\n  <ion-label floating>Pseudo</ion-label>\n\n  <ion-input [(ngModel)]="signindata.pseudo_signin" type="text" required></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label floating>Mot de passe</ion-label>\n\n  <ion-input [(ngModel)]="signindata.password_signin" type="text" required></ion-input>\n\n</ion-item>\n\n<button ion-button full color="primary" (click)="signin()">Sign In</button>\n\n\n\n\n\n\n\n<ion-item>\n\n  <ion-label floating>Pseudo</ion-label>\n\n  <ion-input [(ngModel)]="signupdata.pseudo_signup" type="text"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label floating>Mot de passe</ion-label>\n\n  <ion-input [(ngModel)]="signupdata.password_signup" type="text"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label floating>Confirmer le mot de passe</ion-label>\n\n  <ion-input [(ngModel)]="vpassword_verif_signup" type="text"></ion-input>\n\n</ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Adresse mail</ion-label>\n\n    <ion-input [(ngModel)]="signupdata.mail_signup" type="text"></ion-input>\n\n  </ion-item>\n\n  <button ion-button full color="primary" (click)="signup()">Sign Up</button>\n\n-->\n\n<ion-content>\n\n    <ion-list no-lines>\n\n\n\n        <form [formGroup]="SigninForm">\n\n\n\n            <ion-item>\n\n                <ion-label floating>Pseudo</ion-label>\n\n                <ion-input formControlName="pseudo_signin" type="text" [class.invalid]="!SigninForm.controls.pseudo_signin.valid && (SigninForm.controls.pseudo_signin.dirty || submitSignin)"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!SigninForm.controls.pseudo_signin.valid  && (SigninForm.controls.pseudo_signin.dirty || submitSignin)">\n\n                <p style=" color: red;">Entrer un pseudo entre 3 et 16 caractères (caractères speciaux non autorisés)</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Mot de passe</ion-label>\n\n                <ion-input formControlName="password_signin" type="password"></ion-input>\n\n            </ion-item>\n\n        </form>\n\n\n\n    </ion-list>\n\n    <button ion-button full color="primary" (click)="signin()">Se connecter</button>\n\n\n\n    <ion-list no-lines>\n\n\n\n        <form [formGroup]="SignupForm">\n\n\n\n            <ion-item>\n\n                <ion-label floating>Pseudo</ion-label>\n\n                <ion-input formControlName="pseudo_signup" type="text" [class.invalid]="!SignupForm.controls.pseudo_signup.valid && (SignupForm.controls.pseudo_signup.dirty || submitSignup)"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!SignupForm.controls.pseudo_signup.valid  && (SignupForm.controls.pseudo_signup.dirty || submitSignup)">\n\n                <p style=" color: red;">Entrer un pseudo entre 3 et 16 caractères (caractères speciaux non autorisés)</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Mot de passe</ion-label>\n\n                <ion-input formControlName="password_signup" type="password" [class.invalid]="!SignupForm.controls.password_signup.valid && (SignupForm.controls.password_signup.dirty || submitSignup)"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!SignupForm.controls.password_signup.valid  && (SignupForm.controls.password_signup.dirty || submitSignup)">\n\n                <p style=" color: red;">Le mot de passe doit contenir au moins 6 caractères dont au moins un minuscule, une Majuscule et un chiffre.</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Vérification du mot de passe</ion-label>\n\n                <ion-input formControlName="password_verify_signup" type="password"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!MatchPassword">\n\n                <p style=" color: red;">Les deux mots de passe ne correspondent pas</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Adresse mail</ion-label>\n\n                <ion-input formControlName="mail_signup" type="text" [class.invalid]="!SignupForm.controls.mail_signup.valid && (SignupForm.controls.mail_signup.dirty || submitSignup)"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!SignupForm.controls.mail_signup.valid  && (SignupForm.controls.mail_signup.dirty || submitSignup)">\n\n                <p style=" color: red;">Entrer une addresse mail valide</p>\n\n            </ion-item>\n\n        </form>\n\n\n\n    </ion-list>\n\n    <button ion-button full color="primary" (click)="signup()">Créer un compte</button>\n\n</ion-content>\n\n<!--\n\n<form method="post">\n\n\n\n<div>\n\n  <br/>\n\n  <label> Login </label>\n\n  <input type="text" name="login" >\n\n  </div>\n\n  <br/>\n\n  <div>\n\n  <label>Mot de passe</label>\n\n    <input type="password" name="password">\n\n</div>\n\n<p><button ion-button [navPush]="Connection" menuToggle>Se connecter </button></p>\n\n</form>\n\n-->'/*ion-inline-end:"C:\Users\SteveD\Documents\PROJET_BABYFOOT\PrototypeV4\projetbabyfoot\Ionic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_authentification_authentification__["a" /* AuthentificationProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[245]);
//# sourceMappingURL=main.js.map