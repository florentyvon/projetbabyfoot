import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, NavController, AlertController } from 'ionic-angular';

import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { QuickgamePage } from '../pages/quickgame/quickgame';
import { ChampionshipPage } from '../pages/championship/championship';
import { BookingbabyfootPage } from '../pages/bookingbabyfoot/bookingbabyfoot';
import { UnknowngamePage } from '../pages/unknowngame/unknowngame';
import { FriendsgamePage } from '../pages/friendsgame/friendsgame';
import { HistoricPage } from '../pages/historic/historic';
import { ListbabyfootsPage } from '../pages/listbabyfoots/listbabyfoots';
import { ProfilePage } from '../pages/profile/profile';
import { FollowingPage } from '../pages/following/following';
import { StatsPage } from '../pages/stats/stats';
import { FriendsPage } from '../pages/friends/friends';
import {LoginPage} from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
 
  rootPage : any;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl : AlertController,
  ) { 
    this.initializeApp();
    
    // set our app's pages
    this.pages = [
      { title: 'My First List', component: ListPage },
      { title: 'HomePage', component: HomePage },
      { title: 'Partie Rapide', component: QuickgamePage },
      { title: 'Championnats', component: ChampionshipPage },
      { title: 'Réservation Babyfoot', component: BookingbabyfootPage },
      { title: 'Jouer avec des amis', component: FriendsgamePage },
      { title: 'Jouer avec des inconnus', component: UnknowngamePage },
      { title: 'Historique des Parties', component: HistoricPage },
      { title: 'Liste des babyfoots', component: ListbabyfootsPage },
      { title: 'Mon Profil', component: ProfilePage },
      { title: 'Suivre un match', component: FollowingPage},
      { title: 'Voir stats', component: StatsPage},
      { title: 'Voir amis', component: FriendsPage},
      { title: 'Déconnexion', component : HomePage}
    ];
    this.checkPreviousAuthorization();
  }

  checkPreviousAuthorization(): void { 
    
    console.log(window.localStorage.getItem('userConnected'));
    //window.localStorage.removeItem('userConnected');
    if((window.localStorage.getItem('userConnected') === "undefined" || window.localStorage.getItem('userConnected') === null)) {
      this.rootPage=LoginPage;
    } else {
      this.rootPage=HomePage;  
    }

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

LogOut() {

  window.localStorage.removeItem('userConnected');
  this.showPopup('Déconnexion', 'Vous êtes bien déconnecté');
  this.rootPage=LoginPage;
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
