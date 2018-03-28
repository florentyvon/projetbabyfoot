import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the MyBookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-bookings',
  templateUrl: 'my-bookings.html',
})
export class MyBookingsPage {

  username;
  id;
  player;
  reservations;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {
    //On stocke le pseudo courant
    this.username = window.localStorage.getItem('userConnected');
    //Requête à la BDD pour avoir les données du joeurs et pouvoir les afficher
    this.data.getDataPlayer(this.username).subscribe(data => {
      this.player = JSON.parse(data);
      this.username = this.player.pseudo;
      this.id = this.player._id;
      this.data.getMyReservations(this.id).subscribe(data2 => {
        this.reservations = JSON.parse(data2);
      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBookingsPage');
  }

  printReservations()
  {
    this.reservations.forEach(function(reservation){
          
    });
  }

}
