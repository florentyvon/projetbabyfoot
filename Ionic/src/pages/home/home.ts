import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingbabyfootPage } from '../bookingbabyfoot/bookingbabyfoot';
import { UnknowngamePage } from '../unknowngame/unknowngame';
import { FriendsgamePage } from '../friendsgame/friendsgame';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController) { }

  goTo(page) {
    switch (page) {
      case 'fg':
        this.navCtrl.push(FriendsgamePage);
        break;
      case 'ug':
        this.navCtrl.push(UnknowngamePage);
        break;
      case 'bb':
        this.navCtrl.push(BookingbabyfootPage);
        break;
    }
  }
  /*back() {
    if (this.navCtrl.length() >= 2) {
      this.navCtrl.pop();
    }
  }*/

}
