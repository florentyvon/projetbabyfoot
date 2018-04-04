import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { JoingamePage } from '../joingame/joingame';
import { Navbar } from 'ionic-angular';
/**
 * Generated class for the PlayerBoardGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-board-game',
  templateUrl: 'player-board-game.html',
})
export class PlayerBoardGamePage {
  //Variables globales
  dataPlayer : any;
  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private toastCtrl : ToastController,public navParams: NavParams, private socket: Socket) {
  
    this.dataPlayer = this.navParams.get('dataPlayer');

      /**SOCKETS */
    /* ___________________________________________________________________________________________________________________*/

      ///**ECOUTE CONFIRMATION SI LE JOUEUR A AJOUTER EXISTE DANS LA BDD */
    this.socket.on('ack-add-player', (rep) => {
      //Si le joueur n'existe pas
      if(rep.rep === 'player_nofound'){
        this.showToast('Ce joueur n\'existe pas');
        //Sinon si il existe
      }else{
        //On l'ajoute à la partie 
        this.socket.emit('set-player', rep.dataPlayer);   
      }
    });

    /**__________________________________________________________________________________ */


   /** ECOUTE CONFIRMATION DE L'AJOUT DE JOUEUR */
    this.socket.on('ack-set-player', (rep) => {
      switch (rep.ack) {
        //Si joueur ajouté a la partie 
        case 'ok':
            //On redirige vers la page 
          this.showToast('Joueur ajouté dans la partie');   
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
    
/**__________________________________________________________________________________________ */
    /** ECOUTE DE LA CONFIRMATION QUE LE JOUEUR A QUITTE LA PARTIE */
    this.socket.on('ack-remove-player', (data) =>{
      if( data.ack === 'ok' && data.playername === this.dataPlayer.pseudo){
        this.showToast('Vous avez été déconnecté de la partie');
        this.navCtrl.pop();
        this.socket.removeAllListeners();
      }else{
        if(data.ack === 'player_nofound'){
          this.showToast('Votre joueur n\'est pas dans la partie');
        }
      }
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerBoardGamePage');
    this.navBar.backButtonClick = (e:UIEvent)=>{
      // todo something
      this.socket.removeAllListeners();
      this.navCtrl.pop();
     }
  }

/** FONCTION AJOUTER JOUEUR A LA PARTIE */
addPlayer(){

  //Creation d'une alerte pour récupérer le nom et l'équipe du joueur à ajouter
    let alert = this.alertCtrl.create({
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
          handler: data => {
          }
        },
        {
          text: 'Ajouter',
          handler: data => {

            let alert2 = this.alertCtrl.create({
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
                      //On envoit les données du joueur à ajouter au server
                      this.socket.emit('add-player',  {"pseudo" : data.pseudoPlayer, "idgame" : this.dataPlayer.idgame, "equipe" : data2 });
                    }
                  }
                ]});
                alert2.present();
          }
        }
      ]
    });
    alert.present();
}

  /**FONCTION POUR QUITTER LA PARTIE */
  quitGame(){
    //On envoit les données du joueur qui veut quitter la partie
    this.socket.emit('remove-player', this.dataPlayer);
  }

  /**FONCTION AFFICHAGE DE POP UP */
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}