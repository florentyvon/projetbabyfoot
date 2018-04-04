import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LogOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-out',
  templateUrl: 'log-out.html',
})
export class LogOutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.LogOut();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogOutPage');
  }

  LogOut() {

    window.localStorage.removeItem('userConnected');
    window.localStorage.removeItem('typeAccount');
    this.showPopup('Déconnexion', 'Vous êtes bien déconnecté');
    this.navCtrl.setRoot(LoginPage);
  }
  
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        'OK'
      ]
    });
    alert.present();
  }

}
