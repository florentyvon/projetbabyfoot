import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BookingbabyfootPage } from '../bookingbabyfoot/bookingbabyfoot';
import { HistoricPage } from '../historic/historic';
import { ListbabyfootsPage } from '../listbabyfoots/listbabyfoots';
import { ProfilePage } from '../profile/profile';
import { JoingamePage }from '../joingame/joingame';

import { DataProvider } from '../../providers/data/data';

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

  username;
  player;
  team;

  constructor(private navCtrl: NavController, private data: DataProvider) {
    this.username=window.localStorage.getItem('userConnected');
    this.data.getDataPlayer(this.username).subscribe(data => {
      this.player = JSON.parse(data);
      this.username = this.player.pseudo;
      if(this.player.nom_equipe)
      {
        this.team = this.player.nom_equipe;
      }else
      {
        this.team = "Aucune Equipe";
      }     
    });
   }

  goTo(page) {
    switch (page) {
      case 'jg':
        this.navCtrl.push(JoingamePage);
        break;
      case 'bb':
        this.navCtrl.push(BookingbabyfootPage);
        break;
      case 'hp':
        this.navCtrl.push(HistoricPage);
        break;
      case 'f':
        this.navCtrl.push(HomePage);
        break;
      case 'lb':
        this.navCtrl.push(ListbabyfootsPage);
        break;
      case 'mp':
        this.navCtrl.push(ProfilePage);
        break;
    }
  }
  /*back() {
    if (this.navCtrl.length() >= 2) {
      this.navCtrl.pop();
    }
  }*/

}
