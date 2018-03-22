import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  
  username;
  idstats;
  player;
  stats;
  goals;
  games;
  V;
  D;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data : DataProvider) {
    this.username = window.localStorage.getItem('userconnected');
    this.data.getStatsPlayer(this.username).subscribe(data => {
      this.player = JSON.parse(data);
      this.idstats = this.player.id_stats;
      this.data.getStatsPlayer(this.idstats).subscribe(data => {
        this.stats = JSON.parse(data);
        this.goals = this.stats.nbr_buts;
        this.games = this.stats.nbr_match;
        this.V = this.stats.nbr_victoires;
        this.D = this.stats.nbr_defaites;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

}
