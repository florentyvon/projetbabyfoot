import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController,AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';

import { GameProvider } from '../../providers/game/game';

import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
import { HomeBfPage } from '../home-bf/home-bf';
import { isUndefined } from 'ionic-angular/util/util';
import { Navbar } from 'ionic-angular';
import { DirectGamePage } from '../direct-game/direct-game';

/**
 * Generated class for the SalonPartiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salon-partie',
  templateUrl: 'salon-partie.html'
})
export class SalonPartiePage {
 
  //Variables globales

  dataGame : any;
  idgame : String;
  //Joueurs equipe Bleue
  playerB1 : {};
  playerB2 : {};
  //Joueurs equipe Rouge
  playerR1 : {};
  playerR2 : {};
  //Tableau de joueur Equipe Bleue et Rouge
  joueursB = {};
  joueursR = {};
  //Nb de joueurs dans les équipes
  nbJoueursB = 0;
  nbJoueursR = 0;
  //Variable de config de partie
  nbJoueursMin = 0;
  nbJoueursMax = 0;
  //Flag pour gérer l'affichage des joueurs
  showPlayerB1 = false;
  showPlayerB2 = false;
  showPlayerR1 = false;
  showPlayerR2 = false;
  //Flag pour l'affichage du bouton de lancer une partie
  ready = false;
  //Nombre d'"invité"
  nGuests = 0;

  @ViewChild(Navbar) navBar: Navbar;
  constructor(private nav: NavController, private navParams: NavParams, private game: GameProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private socket: Socket, private toastCtrl: ToastController) {
    
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
    this.socket.on('ack-set-player', (rep) => {
      console.log("on add player");
      switch (rep.ack) {
        //Si joueur ajouté a la partie 
        case 'ok':
            //On redirige vers la page 
          this.showToast('"Invité" ajouté dans la partie');   
          break;
        //Si la partie est complète
        case 'err_full':
          this.showToast('La partie est complète');  
          break;
        //Si le joueur n'a pas d'équipe attribuée
        case 'err_noteam':
          this.showToast('Pas d\'équipe attribuée');    
          break;
        //Si l'équipe rouge est complète
        case 'err_fullteam':
          this.showToast('L\'équipe est complète');
          break;
        //Si l'équipe bleue est complète
        case 'err_player':
          this.showToast('Joueur déjà dans cette partie');
          break;
        //Si la partie est déjà lancée
        case 'err_notopen':
        this.showToast('La partie est déjà lancée ou terminée');
        break;
      }
  });

  /**______________________________________________________________________________ */
/**ECOUTE : MAJ DES JOUEURS DE LA PARTIE  */

    this.socket.on('maj-players', (data) =>{

      // On met à jour la liste des joueurs et leur nombre 
      this.joueursB = data.dataGame.players.b;
      this.joueursR = data.dataGame.players.r;

      //Si il y a eu un joueur de supprimé dans l'équipe Bleue
      if(Object.keys(this.joueursB).length < this.nbJoueursB){

        //Flag pour trouver quel joueur est supprimé
        checkPlayerB1 = false;
        checkPlayerB2 = false;

        //Si il n'y a plus de joueur dans l'équipe
        if(Object.keys(this.joueursB).length === 0){
          //On reset tous les joueurs de l'équipe Bleue
          this.showPlayerB1 = false;
          this.showPlayerB2 = false;
          this.playerB1 = undefined;
          this.playerB2 = undefined;
        //Sinon
        }else{
          //Pour chaque joueur de l'équipe bleue restant 
          for(var jb in this.joueursB){
            //Verif si PlayerB1 et PlayerB2 sont toujours présent dans les joueurs de la partie
            if( this.playerB1 === jb ){
                checkPlayerB1 = true;
            }
            if( this.playerB1 === jb ){
              checkPlayerB1 = true;
            }
          }
        }
        //Si des joueurs ne sont plus présent => on les supprime
        if(!checkPlayerB1){
          this.showPlayerB1 = false;
          this.playerB1 = undefined;
        }
        if(!checkPlayerB2){
          this.showPlayerB2 = false;
          this.playerB2 = undefined;
        }
      }
      
      //Si il y a eu un joueur de supprimé dans l'équipe Rouge
      if(Object.keys(this.joueursR).length < this.nbJoueursR){
        
        //Flag pour trouver quel joueur est supprimé
        checkPlayerR1 = false;
        checkPlayerR2 = false;
        
        //Si il n'y a plus de joueur dans l'équipe
        if(Object.keys(this.joueursR).length === 0){
          //On reset tous les joueurs de l'équipe Bleue
          this.showPlayerR1 = false;
          this.showPlayerR2 = false;
          this.playerR1 = undefined;
          this.playerR2 = undefined;
        //Sinon
        }else{
          //Pour chaque joueur de l'équipe bleue restant 
          for(var jr in this.joueursR){
            //Verif si PlayerB1 et PlayerB2 sont toujours présent dans les joueurs de la partie
            if( this.playerR1 === jr ){
                checkPlayerR1 = true;
            }
            if( this.playerR1 === jr ){
              checkPlayerR1 = true;
            }
          }
        }
        //Si des joueurs ne sont plus présent => on les supprime
        if(!checkPlayerR1){
          this.showPlayerR1 = false;
          this.playerR1 = undefined;
        }
        if(!checkPlayerR2){
          this.showPlayerR2 = false;
          this.playerR2 = undefined;
        }
      }


      //Pour chaque joueur de l'équipe Bleue
      for(var jb in this.joueursB){
        flag = false;
        //Si le 1er joueur de l'équipe 1 n'est pas renseigné 
        if(typeof this.playerB1 === "undefined"){
          //si le joueur 2 est renseigné
          if(typeof this.playerB2 !== "undefined"){
            
            //verification que le joueur n'est pas déjà ajouté comme joueur 2
            try{
              flag = this.isEquivalent(this.joueursB[jb],this.playerB2);
            }catch(error){
              console.error(error);
            }
            //Si le joueur n'est pas = au joueur 2 => on l'ajoute comme joueur 1
            if(!flag){
              this.playerB1 = this.joueursB[jb];
              this.showPlayerB1 = true;
            }
            //Si le joueur 2 n'est pas renseigné non plus => on l'ajoute comme joueur 1
          }else{
              this.playerB1 = this.joueursB[jb];
              this.showPlayerB1 = true;
          }
        //Si le joueur 1 est déjà renseigné 
        }else{
          //Si le joueur 2 n'est pas renseigné
          if(typeof this.playerB2 === "undefined" ){
            //vérifié que le joueur n'est pas déja ajouté comme joueur 1
            try{
              flag = this.isEquivalent(this.joueursB[jb],this.playerB1);
            }catch(error){
              console.error(error);
            }
            //Si le joueur n'est pas = au joueur 2 => on l'ajoute comme joueur 1
            if(!flag){
              this.playerB2 = this.joueursB[jb];
              this.showPlayerB2 = true;
            }
          }
        }
      }     
      
      //Pour chaque joueur de l'équipe Rouge 
      for(var jr in this.joueursR){
      flag = false;
      //Si le 1er joueur de l'équipe 1 n'est pas renseigné 
      if(typeof this.playerR1 === "undefined"){
        //si le joueur 2 est renseigné
        if(typeof this.playerR2 !== "undefined"){
          //verifier que le joueur n'est pas déjà ajouté comme joueur 2
          try{
            flag = this.isEquivalent(this.joueursR[jr],this.playerR2);
          }catch(error){
            console.error(error);
          }
          //Si le joueur n'est pas = au joueur 2 => on l'ajoute comme joueur 1
          if(!flag){
            this.playerR1 = this.joueursB[jr];
            this.showPlayerR1 = true;
          }
        //Si le joueur 2 n'est pas renseigné non plus => on l'ajoute comme joueur 1
        }else{
            this.playerR1 = this.joueursR[jr];
            this.showPlayerR1 = true;

        }
      //Si le joueur 1 est déjà renseigné 
      }else{
        //Si le joueur 2 n'est pas renseigné
        if(typeof this.playerR2 === "undefined" ){
          //vérifié que le joueur n'est pas déja ajouté comme joueur 1
          try{
            flag = this.isEquivalent(this.joueursR[jr],this.playerR1);
          }catch(error){
            console.error(error);
          }
          //Si le joueur n'est pas = au joueur 2 => on l'ajoute comme joueur 1
          if(!flag){
            this.playerR2 = this.joueursR[jr];
            this.showPlayerR2 = true;
          }
        }
      }
    }
        
      //Mise à jour du nombre de joueur dans les équipes
      this.nbJoueursB = Object.keys(this.joueursB).length;
      this.nbJoueursR = Object.keys(this.joueursR).length;
  
      //Si le nombre de joueurs > min && < max et >0 dans les 2 équipe
      if( (this.nbJoueursB + this.nbJoueursR) <= this.nbJoueursMax 
      && (this.nbJoueursB + this.nbJoueursR) >= this.nbJoueursMin
      && this.nbJoueursB >0 
      && this.nbJoueursR >0){
 
        this.ready = true;
      }else{
        this.ready = false;
      }   
    });
    /**______________________________________________________________________________ */
    /**ECOUTE : Confirmation de suppression de joueur */

    this.socket.on('ack-remove-player', (data) =>{

      if( data.ack === 'ok'){
        this.showToast(data.playername + ' a quitté la partie');
      }else{
        if(data.ack === 'player_nofound'){
          this.showToast('Le joueur est déjà supprimé');
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonPartiePage');
    this.navBar.backButtonClick = (e:UIEvent)=>{
      // todo something

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
                  this.nav.pop();
                }
              }
            }
          ]});
          alert1.present();
     }
  }

  /** FONCTION CREATION DE PARTIE RAPIDE */
  CreateSpeedGame(nbJoueursMin, nbJoueursMax){
   //Données de la partie
    this.dataGame = {
      "nomBabyfoot": window.localStorage.getItem('userConnected'),
      "nbJoueursMin" : nbJoueursMin,
      "nbJoueursMax" : nbJoueursMax,
      "limiteScore" : 10,
   }
   

    //Regex pour l'id de la partie
    var idRegex = /[a-zA-Z0-9]{6}/ ;
    
    //On appelle la fonction createSpeedGame du provider game (Providers/game) => requète vers le serveur
    this.game.createSpeedGame(this.dataGame).subscribe(success => {
   
      //Si creation de partie OK
      if (idRegex.test(success)) {
     
        this.idgame = success;
        this.showToast('Rejoignez la partie');

        //Connexion Socket io
        //On envoit l'id de la partie => fonction set-game du server
        this.socket.emit('set-game',  { "idgame" : this.idgame, "nbJoueursMin" : nbJoueursMin, "nbJoueursMax" : nbJoueursMax, "limiteScore" : this.dataGame.limiteScore });
  
      }else{
        this.showPopup("Erreur", 'Impossible de créer la partie');
        this.nav.push(HomeBfPage); 
      }
    },
    error => {
      this.showPopup("Error", error);
    });
  }

  /** FONCTION SUPPRESSION DES JOUEURS DANS LA PARTIE  */
  RemovePlayer(player){

     //On envoit les données du joueurs a supprimer de la partie 
     this.socket.emit('remove-player',player );


  }

  /** FONCTION AJOUTER INVITE */
  addGuest(){
    this.nGuests++;
    var Guestpseudo = "Invité"+this.nGuests;
    let alert1 = this.alertCtrl.create({
      title: 'Choix de l\'équipe',
      inputs: [
        {
          type:'radio',
          label:'Bleue',
          id: 'b',
          value:'b',
          checked: true
        },
        {
          type:'radio',
          label:'Rouge',
          id: 'r',
          value:'r'
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
              console.log(data2);
              //On envoit les données du joueur à ajouter au server
              console.log("emiit add player ");
              this.socket.emit('set-player',  {"pseudo" : Guestpseudo, "idgame" : this.idgame, "equipe" : data2 });
            }
          }
        ]});
        alert1.present();
  }

  /** FONCTION LANCER LA PARTIE */
  LaunchGame(){
  //On envoit l'id de la partie à lancer et le nom du babyfoot au serveur'
  this.socket.emit('launch-game', {"idgame" : this.idgame, "nameBF" : window.localStorage.getItem('userConnected') } );
  //On redirige vers la page DirectGamePage avec les données de la partie et les joueurs
  this.nav.push( DirectGamePage, { "dataGame" :
                                   {"idgame" : this.idgame,
                                    "playerB1" : this.playerB1,
                                    "playerB2" : this.playerB2,
                                    "playerR1" : this.playerR1,
                                    "playerR2" : this.playerR2}});

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

  /** AFFICHER DES TOASTS */
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  /** COMPARER 2 OBJECTS ET LEURS PROPRIETES */
  isEquivalent(a, b) {

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
  }

  

}

