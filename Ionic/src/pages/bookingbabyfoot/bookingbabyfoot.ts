import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


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
  m : number;
  d: number;
  mm :string;
  dd : string;
  s:string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  doRadio() {
    document.getElementById("Resultat").style.visibility="hidden";
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
        console.info('Choix babyfoot', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        document.getElementById("Resultat").style.visibility="visible";
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }
    booking(date, hdeb, hfin){
      console.log(this.testRadioResult+':'+date+'-'+hdeb+'-'+hfin)
      this.goTo('h'); 
    }

    goTo(page) {
      switch (page) {
        case 'h':
          this.navCtrl.push(HomePage);
          break;
      }
    }

  public event = {
    month: `'${this.now.getFullYear()}-${this.now.getMonth()}-${this.now.getDate()}'`,
    timeStarts: `'${this.now.getHours()}:${this.now.getMinutes()}'`,
    timeEnds:  `'${this.now.getHours()}:${this.now.getMinutes()}'`,
  }
}
