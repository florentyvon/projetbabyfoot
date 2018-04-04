import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { QuickgamePage } from '../pages/quickgame/quickgame';
import { BookingbabyfootPage } from '../pages/bookingbabyfoot/bookingbabyfoot';
import { ListbabyfootsPage } from '../pages/listbabyfoots/listbabyfoots';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { LogOutPage } from '../pages/log-out/log-out';
import { HomeBfPage } from '../pages/home-bf/home-bf';

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
  ) { 
    this.initializeApp();
    
    // set our app's pages
    this.pages = [
      { title: 'HomePage', component: HomePage },
      { title: 'Partie Rapide', component: QuickgamePage },
      { title: 'Réservation Babyfoot', component: BookingbabyfootPage },
      { title: 'Liste des babyfoots', component: ListbabyfootsPage },
      { title: 'Mon Profil', component: ProfilePage },
      { title: 'Déconnexion', component : LogOutPage},
    ];
    this.checkPreviousAuthorization();
  }

  checkPreviousAuthorization(): void { 
    
    console.log(window.localStorage.getItem('userConnected'));
    console.log(window.localStorage.getItem('typeAccount'));
    if((window.localStorage.getItem('userConnected') === "undefined" || window.localStorage.getItem('userConnected') === null)) {
      this.rootPage=LoginPage;
    } else {
      if(window.localStorage.getItem('typeAccount') === "joueur"){
        this.rootPage=HomePage;  
      }else{
        if(window.localStorage.getItem('typeAccount') === "babyfoot"){
          this.rootPage=HomeBfPage;  
        } 
      }
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
}
