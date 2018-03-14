import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatsPage } from '../stats/stats';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }*/

  goTo(page) {
    switch (page) {
      case 'stats':
        this.navCtrl.push(StatsPage);
        break;
      case 'team':
        this.navCtrl.push(StatsPage);
        break;
    }
  }

}
