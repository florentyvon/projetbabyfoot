import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatsPage } from '../stats/stats';
import { FriendsPage } from '../friends/friends';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username=window.localStorage.getItem('userConnected');
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }*/

  goTo(page) {
    switch (page) {
      case 'stats':
        this.navCtrl.push(StatsPage);
        break;
      case 'friends':
        this.navCtrl.push(FriendsPage);
        break;
    }
  }

}
