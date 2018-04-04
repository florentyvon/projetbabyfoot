import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SalonPartiePage }from '../salon-partie/salon-partie';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the HomeBfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-bf',
  templateUrl: 'home-bf.html',
})
export class HomeBfPage {

  username;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username=window.localStorage.getItem('userConnected');
  }

  goTo(page) {
    switch (page) {
      //Partie rapide : entre 2 et 4 joueurs
      case 'pr':
        this.navCtrl.push(SalonPartiePage,  { "nbJoueursMin" : 2, "nbJoueursMax" : 4 });
        break;
      case 'pp':
      //Redirection vers la page de gestion des options de partie
        //this.navCtrl.push(FriendsgamePage);
        break;
      case 'mp':
      this.navCtrl.push(ProfilePage);
      break;
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeBfPage');
  }

}
