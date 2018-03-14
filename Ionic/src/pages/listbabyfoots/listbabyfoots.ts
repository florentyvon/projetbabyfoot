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

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private launchNavigator: LaunchNavigator
  ) {
    this.start = "";
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListbabyfootsPage");
  }

  map(adr) {
    switch (adr) {
      case "1":
        console.log("switch1 ok");
        let alert = this.alertCtrl.create({
          title: "Babyfoot de la Présidence",
          message: "Présidence de l'Université d'Angers<br/>40 rue de Rennes<br/>49035 Angers<br/>02 41 96 23 23",
          buttons: [
            {
              text: "Retour",
              role: "cancel"
            },
            {
              text: "Voir sur Maps",
              handler: () => {
                console.log("Maps clicked");
                this.destination="Présidence de l'université d'Angers, 40 rue de Rennes, 49000 Angers";
                this.navigate(this.destination);
              }
            }
          ]
        });
        alert.present();
        break;
      case "2":
        let alert2 = this.alertCtrl.create({
          title: `Babyfoot de l'ISTIA`,
          message: "Ecole d'Ingénieurs ISTIA<br/>62 avenue Notre Dame du Lac<br/>49000 Angers<br/>02 44 68 75 00",
          buttons: [
            {
              text: "Retour",
              role: "cancel"
            },
            {
              text: "Voir sur Maps",
              handler: () => {
                console.log("Maps clicked");
                this.destination="ISTIA, 62 avenue Notre Dame du Lac, 49000 Angers";
                this.navigate(this.destination);
              }
            }
          ]
        });
        alert2.present();
        break;
      case "3":
        let alert3 = this.alertCtrl.create({
          title: `Babyfoot Fac de Sciences`,
          message: "Faculté de Sciences<br/>2 Boulevard Lavoisier<br/>49000 Angers<br/>02 41 73 53 53",
          buttons: [
            {
              text: "Retour",
              role: "cancel"
            },
            {
              text: "Voir sur Maps",
              handler: () => {
                console.log("Maps clicked");
                this.destination="Fac de Sciences, 2 Boulevard Lavoisier, 49000 Angers";
                this.navigate(this.destination);
              }
            }
          ]
        });
        alert3.present();
        break;
        case "4":
        let alert4 = this.alertCtrl.create({
          title: 'Babyfoot SUAPS',
          message: "SUAPS<br/>6 Boulevard Beaussier<br/>49000 Angers<br/>02 41 22 69 49",
          buttons: [
            {
              text: "Retour",
              role: "cancel"
            },
            {
              text: "Voir sur Maps",
              handler: () => {
                console.log("Maps clicked");
                this.destination="S.U.A.P.S, 49000 Angers";
                this.navigate(this.destination);
              }
            }
          ]
        });
        alert4.present();
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
}
