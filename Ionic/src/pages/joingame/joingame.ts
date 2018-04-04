import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, AlertController, LoadingController, Loading } from 'ionic-angular';

import { GameProvider } from '../../providers/game/game';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Socket } from 'ng-socket-io';
import { PlayerBoardGamePage } from '../player-board-game/player-board-game';

import { Navbar } from 'ionic-angular';

/**
 * Generated class for the JoingamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joingame',
  templateUrl: 'joingame.html',
})
export class JoingamePage {

    JoinGameForm: FormGroup;
    dataPlayer : any;
    equipe : String;
  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams, private game: GameProvider,public formBuilder: FormBuilder, private alertCtrl: AlertController, private loadingCtrl: LoadingController,private socket: Socket, private toastCtrl: ToastController) {
   
    //Instanciation du formulaire de connection 
    this.JoinGameForm = formBuilder.group({
    
      //Variable idgame composé de 6 caractères : minuscule, majuscule ou chiffre
      idgame: ['', Validators.compose([, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[a-zA-Z0-9]{6}'), Validators.required])],
    });


    /** SOCKETS */
    /** ________________________________________________________________________________________________ */

   /** ECOUTE CONFIRMATION CONNEXION A LA PARTIE */
   
    this.socket.on('ack-set-player', (rep) => {
      switch (rep.ack) {
        //Si joueur ajouté a la partie 
        case 'ok':
            //On redirige vers la page 
          this.showToast('Joueur dans la partie');   
              this.navCtrl.push(PlayerBoardGamePage,  { "dataPlayer" :  this.dataPlayer });
              this.socket.removeAllListeners();
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


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoingamePage');
    this.navBar.backButtonClick = (e:UIEvent)=>{
      // todo something
      this.socket.removeAllListeners();
      this.navCtrl.pop();
     }
  }

/** FONCTION REJOINDRE UNE PARTIE */
  joinGame(): void{

    //Si le formulaire est valide
    if(this.JoinGameForm.valid){
      //On recupère la donnée du formulaire
      var dataForm = { idgame : this.JoinGameForm.value.idgame,
                        equipe : this.equipe }

      //On appelle la fonction signin du provider joingame (Providers/joingame)
      this.game.joinGame(dataForm).subscribe(success => {
        //Si la partie existe bien
        if(success === 'OKjoin'){
          //  this.navCtrl.setRoot(HomePage);
          this.dataPlayer = { pseudo : window.localStorage.getItem('userConnected'), idgame : dataForm.idgame, equipe : dataForm.equipe };         
          //On envoit le pseudo et l'id de la partie
          this.socket.emit('set-player',  this.dataPlayer);
        }else{
          this.showPopup("Accès refusé", success);
        }
    },
      error => {
        this.showPopup("Error", error);
      });
    }
  }
/** FONCTION SELECTIONNER EQUIPE BLEUE */
  selectBleue(){
    this.equipe='b';
  }
/** FONCTION SELECTIONNER EQUIPE ROUGE */
  selectRouge(){
    this.equipe='r';
  }
/** FONCTION AFFICHAGE POP-UP */
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
  /** FONCTION AFFICHAGE TOASTS */
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
