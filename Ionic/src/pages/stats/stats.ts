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
  
  //Déclaration des variables globales communes au TS et à l'HTML
  username;
  idstats;
  player;
  stats;
  goals;
  games;
  V;
  D;
  R;
  F_r;
  G_r;
  nbpjson;
  nbp;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data : DataProvider) {
    //On récupère le pseudo courrant
    this.username=window.localStorage.getItem('userConnected');
    //On envoie une requête à la BDD pour trouver l'ID des stats du joueur
    this.data.getDataPlayer(this.username).subscribe(data => {
      //On décrypte le résultat
      this.player = JSON.parse(data);
      //On récupère l'id_stat du joueur
      this.idstats = this.player.id_stat;
      //On peut maintenant envoyer une requête pour connaitre les stats selon leur id
      this.data.getStatsPlayer(this.idstats).subscribe(data2 => {
        //Décryptage
        this.stats = JSON.parse(data2);
        //Chaque variable globale reçoit maintenant sa valeur correspondante
        this.goals = this.stats.nbr_but;
        this.games = this.stats.nbr_match;
        this.V = this.stats.nbr_victoires;
        this.D = this.stats.nbr_defaites;
        this.R = (this.goals / this.games).toFixed(2);
        this.F_r = this.stats.friend_rank;
        this.G_r = this.stats.gen_rank;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

}
