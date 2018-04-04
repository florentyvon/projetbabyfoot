import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatsPage } from '../stats/stats';
import { FriendsPage } from '../friends/friends';
import { MyBookingsPage } from '../my-bookings/my-bookings';

import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  username;
  niv;
  player;


  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {
    //On stocke le pseudo courant
    this.username=window.localStorage.getItem('userConnected');
    //Requête à la BDD pour avoir les données du joeurs et pouvoir les afficher
    this.data.getDataPlayer(this.username).subscribe(data => {
      this.player = JSON.parse(data);
      this.username = this.player.pseudo;
      this.niv = this.player.niv;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  goTo(page) {
    switch (page) {
      case 'stats':
        this.navCtrl.push(StatsPage);
        break;
      case 'friends':
        this.navCtrl.push(FriendsPage);
        break;
      case 'bookings':
      this.navCtrl.push(MyBookingsPage);
      break;
    }
  }

}
