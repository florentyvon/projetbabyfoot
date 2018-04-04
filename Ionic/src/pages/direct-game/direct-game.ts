import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Navbar } from 'ionic-angular';

import { GameProvider } from '../../providers/game/game';
import { Socket } from 'ng-socket-io';

/**
 * Generated class for the DirectGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-direct-game',
  templateUrl: 'direct-game.html',
})
export class DirectGamePage {

  idgame : String;
  dataGame : {};

  //Joueurs equipe Bleue
  playerB1 : {};
  playerB2 : {};
  //Joueurs equipe Rouge
  playerR1 : {};
  playerR2 : {};

  //Flag pour gérer l'affichage des joueurs
  showPlayerB1 = false;
  showPlayerB2 = false;
  showPlayerR1 = false;
  showPlayerR2 = false;

  scoreEquipeB = 0;
  scoreEquipeR = 0;

  limiteScore : Number;

  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, private socket: Socket,public navParams: NavParams, private alertCtrl: AlertController,private game: GameProvider, private toastCtrl: ToastController) {

    var dataSalon = this.navParams.get('dataGame');
    this.idgame = dataSalon.idgame;
    console.log(dataSalon);
    console.log(this.idgame);

    console.log(dataSalon.playerB2);
    //Attribution des joueurs
    if(typeof  dataSalon.playerB1 !== "undefined"){
      this.playerB1 = dataSalon.playerB1;
      this.showPlayerB1=true;
    }
    if(typeof dataSalon.playerB2 !== "undefined"){
      console.log('player B2 est undefined');
      this.playerB2 = dataSalon.playerB2;
      this.showPlayerB2=true;
    }
    if(typeof dataSalon.playerR1 !== "undefined"){
      this.playerR1 = dataSalon.playerR1;
      this.showPlayerR1=true;
    }
    if(typeof dataSalon.playerR2 !== "undefined"){
      this.playerR2 = dataSalon.playerR2;
      this.showPlayerR2=true;
    }
  

    this.directGame(this.idgame);

    /** ECOUTE MAJ DES SCORES */
    this.socket.on('maj-score-game',(rep) => {

      console.log("on maj-score-game");
      console.log(rep);
        //SI la maj correspond bien au bon babyfoot et à la bonne partie 
          if( rep.idgame === this.idgame && rep.nameBF === window.localStorage.getItem('userConnected')){
            //On met à jour les scores à afficher
            this.scoreEquipeB = rep.score.b;
            this.scoreEquipeR = rep.score.r;

            //Tester si une equipe a gagnée 
            this.checkWinner();


          }
    } );

      /** ECOUTE SI BABYFOOT NON CONNECTE */
      this.socket.on('no-bf-connecter',(rep) => {
        console.log("babyfoot non connecté")
        this.showPopup("Erreur", "Babyfoot non connecté");
        this.navCtrl.pop();
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectGamePage');
    this.navBar.backButtonClick = (e:UIEvent)=>{

    let alert1 = this.alertCtrl.create({
      title: 'Êtes-vous sûr de vouloir quitter la partie ?',
      inputs: [
        {
          type:'radio',
          label:'Oui',
          id: 'o',
          value:'o',
          checked: true
        },
        {
          type:'radio',
          label:'Non',
          id: 'n',
          value:'n'
        }
        ],
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: data => {
            }
          },
          {
            text: 'Valider',
            handler: data2 => {

              if(data2==="o"){
                this.socket.emit('cancel-game',  { "idgame" : this.idgame });
                this.socket.removeAllListeners();
                this.navCtrl.popToRoot();
              }
            }
          }
        ]});
        alert1.present();

      
     }
  }

  directGame(idgame){

    var data = { "idgame" : idgame};
    console.log('direct game function');
    console.log(data)

    //On appelle la fonction signin du provider authentification (Providers/authentification) => requète vers le serveur
    this.game.directGame(data).subscribe(success => {

      console.log('success');
      console.log(success);
      //Si la réponse est de type objet <=> la réponse contient les données de la partie en cours
      if(typeof success === "object"){
        this.dataGame=success;

        this.limiteScore = success.config.limiteScore;

        console.log(this.limiteScore);

        //Attribution des joueurs


        this.showToast("La partie est lancée");
        console.log(this.dataGame);

        //On demande l'envoie des scores de la partie
        //Pour le babyfoot concerné 
        this.socket.emit('ask-score-bf', { "nameBF" : window.localStorage.getItem('userConnected'), "idgame" : idgame });
        console.log('emit ask-score-bf');

      }else{

        this.showPopup('Erreur', success);
        this.navCtrl.pop();
      }


    },
    error => {
      this.showPopup("Error", error);
    });
  }


  checkWinner()
{
    //Si la limite de score est atteinte 
    //SI l'équipe Bleue gagne 
    if(this.scoreEquipeB === this.limiteScore){
      this.showPopup("Gagné", "L'équipe Bleue a gagné "+this.scoreEquipeB+" - "+this.scoreEquipeR+ " !");
      this.socket.emit("stop-game", { "idgame" : this.idgame, "scoreB" : this.scoreEquipeB, "scoreR":this.scoreEquipeR });
      this.navCtrl.popToRoot();

    }else{

      //Si l'équipe Rouge gagne
      if(this.scoreEquipeR === this.limiteScore){
        this.showPopup("Gagné", "L'équipe Rouge a gagné "+this.scoreEquipeR+" - "+this.scoreEquipeB+ " !");
        this.socket.emit("stop-game", { "idgame" : this.idgame, "scoreB" : this.scoreEquipeB, "scoreR":this.scoreEquipeR });
        this.navCtrl.popToRoot();

      }
    }

}
  /** FONCTION ARRET DE LA PARTIE */
  stopGame(){

    if( this.scoreEquipeB > this.scoreEquipeR){
      this.showPopup("Gagné", "L'équipe Bleue a gagné "+this.scoreEquipeB+" - "+this.scoreEquipeR+ " !");

    }else{
      if( this.scoreEquipeR > this.scoreEquipeB){
        this.showPopup("Gagné", "L'équipe Rouge a gagné "+this.scoreEquipeR+" - "+this.scoreEquipeB+ " !");
      }else{
        this.showPopup("Égalité", this.scoreEquipeR+" - "+this.scoreEquipeB);
      }
    }
    
    this.socket.emit("stop-game", { "idgame" : this.idgame, "scoreB" : this.scoreEquipeB, "scoreR":this.scoreEquipeR });
    this.navCtrl.popToRoot();
  }

  /** FONCTION EQUIPE B DECLARE FORFAITE */
  giveupB(){
    this.showPopup("Gagné", "L'équipe Rouge a gagné par forfait 10 - 0 ");
    this.socket.emit("stop-game", { "idgame" : this.idgame, "scoreB" : 0, "scoreR":10 });
    this.navCtrl.popToRoot();
  }

  /** FONCTION EQUIPE R DECLARE FORFAITE */
  giveupR(){
    this.showPopup("Gagné", "L'équipe Bleue a gagné par forfait 0 - 10 ");
    this.socket.emit("stop-game", { "idgame" : this.idgame, "scoreB" : 10, "scoreR":0 });
    this.navCtrl.popToRoot();
  }

  /** FONCTION AJOUT et ENLEVE BUT EQUIPE B */
  addGoalB(){ 
    this.scoreEquipeB++;
    //Tester si une equipe a gagnée 
    this.checkWinner();
    this.socket.emit('maj-score-user', { "idgame" : this.idgame,"scoreB" : this.scoreEquipeB, "scoreR": this.scoreEquipeR});
  }

  removeGoalB(){
    this.scoreEquipeB--;
    //Tester si une equipe a gagnée 
    this.checkWinner();
    this.socket.emit('maj-score-user', { "idgame" : this.idgame,"scoreB" : this.scoreEquipeB, "scoreR": this.scoreEquipeR});
  }

  /** FONCTION AJOUT et ENLEVE BUT EQUIPE R */
  addGoalR(){ 
    this.scoreEquipeR++;
    //Tester si une equipe a gagnée 
    this.checkWinner();
    this.socket.emit('maj-score-user', { "idgame" : this.idgame,"scoreB" : this.scoreEquipeB, "scoreR": this.scoreEquipeR});
  }
  removeGoalR(){ 
    this.scoreEquipeR--;
    //Tester si une equipe a gagnée 
    this.checkWinner();
    this.socket.emit('maj-score-user', { "idgame" : this.idgame,"scoreB" : this.scoreEquipeB, "scoreR": this.scoreEquipeR});
  }
    
  /** AFFICHER DES TOASTS */
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  /** AFFICHER DES POP-UP */
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
        }
      ]
    });
    alert.present();
  }

}
