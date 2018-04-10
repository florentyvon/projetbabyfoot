import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { ProfilePage } from '../profile/profile';

import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the MyBookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-my-bookings",
  templateUrl: "my-bookings.html"
})
export class MyBookingsPage {
  username;
  id;
  player;
  reservations;
  printedR: string;
  count: number;
  reservationsTD = [];
  DelBool : boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataProvider,
    public alertCtrl : AlertController,

  ) {
    //On stocke le pseudo courant
    this.username = window.localStorage.getItem("userConnected");
    //Requête à la BDD pour avoir les données du joeurs et pouvoir les afficher
    this.data.getDataPlayer(this.username).subscribe(data => {
      this.player = JSON.parse(data);
      this.username = this.player.pseudo;
      this.id = this.player._id;
      this.data.getMyReservations(this.id).subscribe(data2 => {
        this.reservations = JSON.parse(data2);
        this.reservations.forEach(element => {
            this.printReservation(element);
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyBookingsPage");
  }

  printReservation(reservation) {
    let dated = new Date(reservation.DateDeb);
    let datef = new Date(reservation.DateFin);
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
      this.event.month = `0${dated.getDate()}`;
    } else {
      this.event.month = `${dated.getDate()}`;
    }
    if (dated.getMonth() + 1 < 10) {
      this.event.month += `-0${dated.getMonth() + 1}-${dated.getFullYear()}`;
    } else {
      this.event.month += `-${dated.getMonth() + 1}-${dated.getFullYear()}`;
    }
    
    /*Construction créneau*/
    if (dated.getHours() < 10) {
      this.event.timeStarts = `0${dated.getHours()}`;
    } else {
      this.event.timeStarts = `${dated.getHours()}`;
    }
    if (dated.getMinutes() < 10) {
      this.event.timeStarts += `:0${dated.getMinutes()}`;
    } else {
      this.event.timeStarts += `:${dated.getMinutes()}`;
    }
    if (datef.getHours() < 10) {
      this.event.timeEnds = `0${datef.getHours()}`;
    } else {
      this.event.timeEnds = `${datef.getHours()}`;
    }
    if (datef.getMinutes() < 10) {
      this.event.timeEnds += `:0${datef.getMinutes()}`;
    } else {
      this.event.timeEnds += `:${datef.getMinutes()}`;
    }
    reservation.DateDeb = this.event.month;
    reservation.DateFin = this.event.timeStarts + ' à ' +  this.event.timeEnds;
  }

  public event = {
    month:'',
    timeStarts: '',
    timeEnds: '',

  }

  delete(reservation) 
  {
    console.log("Supprimer la réservation "+reservation._id)
      this.data.DelReservation(reservation._id).subscribe(data => {
    });
    this.navCtrl.push(this.navCtrl.getActive().component);
  }
}
