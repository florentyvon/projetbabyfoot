import { Component } from "@angular/core";
import { IonicPage, NavController, AlertController } from "ionic-angular";
import { LaunchNavigator, LaunchNavigatorOptions } from "@ionic-native/launch-navigator";

/**
 * Generated class for the ListbabyfootsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-listbabyfoots",
  templateUrl: "listbabyfoots.html"
})
export class ListbabyfootsPage {
  destination: string;
  start: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private launchNavigator: LaunchNavigator) { this.start = "";}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListbabyfootsPage");
  }

  map(adr) {
    switch (adr) {
      case "1":
        this.showPopup('Babyfoot de la Présidence', "Présidence de l'Université d'Angers<br/>40 rue de Rennes<br/>49035 Angers<br/>02 41 96 23 23","Présidence de l'université d'Angers, 40 rue de Rennes, 49000 Angers");
        break;
      case "2":
        this.showPopup(`Babyfoot de l'ISTIA`, "Ecole d'Ingénieurs ISTIA<br/>62 avenue Notre Dame du Lac<br/>49000 Angers<br/>02 44 68 75 00","ISTIA, 62 avenue Notre Dame du Lac, 49000 Angers");
        break;
      case "3":
        this.showPopup('Babyfoot Fac de Sciences', "Faculté de Sciences<br/>2 Boulevard Lavoisier<br/>49000 Angers<br/>02 41 73 53 53","Fac de Sciences, 2 Boulevard Lavoisier, 49000 Angers");
        break;
      case "4":
          this.showPopup('Babyfoot SUAPS', "SUAPS<br/>6 Boulevard Beaussier<br/>49000 Angers<br/>02 41 22 69 49","S.U.A.P.S, 49000 Angers");
        break;
    }
  }

  navigate(destination) {
    let options: LaunchNavigatorOptions = {
      start: this.start
    };

    this.launchNavigator
      .navigate(destination, options)
      .then(
        success => console.log("Launched navigator"),
        error => console.log("Error launching navigator: " + error)
      );
  }

  showPopup(title, text, destination) {
    let alert = this.alertCtrl.create({
      title: title,
      message: text,
      buttons: [
        {
          text: 'Retour',
          role: "cancel",
        },
        {
          text: "Voir sur Maps",
          handler: () => {
            console.log("Maps clicked");
            this.destination=destination;
            this.navigate(this.destination);
          }
        }
      ]
    });
    alert.present();
  }
}
