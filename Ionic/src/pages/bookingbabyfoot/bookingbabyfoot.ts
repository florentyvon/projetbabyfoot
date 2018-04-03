import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataProvider } from '../../providers/data/data';


/**
 * Generated class for the BookingbabyfootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookingbabyfoot',
  templateUrl: 'bookingbabyfoot.html',
})
export class BookingbabyfootPage {

  testRadioOpen: boolean;
  testRadioResult;
  now = new Date();
  username;
  player;
  id;
  createSuccess;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private data: DataProvider) {
    /*Construction Date*/
    if (this.now.getMonth() + 1 < 10) {
      this.event.month = `${this.now.getFullYear()}-0${this.now.getMonth() + 1}`;
    } else {
      this.event.month = `${this.now.getFullYear()}-${this.now.getMonth() + 1}`;
    }
    if (this.now.getDate() < 10) {
      this.event.month += `-0${this.now.getDate()}`;
    } else {
      this.event.month += `-${this.now.getDate()}`;
    }

    /*Construction créneau*/
    if (this.now.getHours() < 10) {
      this.event.timeStarts = `0${this.now.getHours()}`;
    } else {
      this.event.timeStarts = `${this.now.getHours()}`;
    }
    if (this.now.getMinutes() < 10) {
      this.event.timeStarts += `:0${this.now.getMinutes()}`;
    } else {
      this.event.timeStarts += `:${this.now.getMinutes()}`;
    }
    if (this.now.getMinutes() + 10 > 59) {
      if (this.now.getHours() < 9) {
        this.event.timeEnds = `0${this.now.getHours()+1}`;
      } else {
        this.event.timeEnds = `${this.now.getHours()+1}`;
      }
      this.event.timeEnds += `:0${(this.now.getMinutes() + 10) % 60}`
    } else {
      this.event.timeEnds = `${this.now.getHours()}:${this.now.getMinutes() + 10}`
    }
    this.username=window.localStorage.getItem('userConnected');
    //Requête à la BDD pour avoir les données du joeurs et pouvoir les afficher
    this.data.getDataPlayer(this.username).subscribe(data => {
      this.player = JSON.parse(data);
      this.username = this.player.pseudo;
      this.id= this.player._id;
    });
  }

  doRadio() {
    document.getElementById("Resultat").style.visibility = "hidden";
    let alert = this.alertCtrl.create();
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
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        document.getElementById("Resultat").style.visibility = "visible";
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  booking(babyfoot, date, hdeb, hfin) {
    let id_baby : number;
    if (babyfoot != undefined) {
      switch(this.testRadioResult)
      {
        case 'Babyfoot Présidence':
          id_baby=1;
          break;
        case 'Babyfoot Sciences':
          id_baby=2;
          break;
        case 'Babyfoot Istia':
          id_baby=3;
          break;
        case 'Babyfoot Suaps':
          id_baby=4;
          break;
        case 'Babyfoot Médecine':
          id_baby=5;
          break;
      }
      var DD = Date.parse(date+" "+hdeb);
      var DF = Date.parse(date+" "+hfin);
      var dataR = {
        ID_baby: id_baby,
        ID_Joueur: this.id,
        DateDeb: DD,
        DateFin: DF,
      }

      this.data.bookReservation(dataR).subscribe(success => {
      
        console.log(success);
        //Si creation de compte OK
        if (success === 'OK') {
          this.createSuccess = true;
          this.showPopup("Réservation enregistrée", "Votre réservation du " + date + " entre " + hdeb + " et " + hfin + " sur le " + babyfoot + " a bien été enregistrée. Vous recevrez un email de confirmation. <br/> <br/>D'avance, bonne partie !")
        //Sinon
        } else {
          this.showPopup("Erreur", success);
        }
      },
        error => {
          this.showPopup("Error", error);
        });
    } else {
      this.showPopup("Réservation impossible", "Veuillez indiquer un babyfoot");
    }
  }

  goTo(page) {
    switch (page) {
      case 'h':
        this.navCtrl.push(HomePage);
        break;
    }
  }

  public event = {
    month:'',
    timeStarts: '',
    timeEnds: '',

  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
