import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { QuickgamePage } from '../pages/quickgame/quickgame';
import { ChampionshipPage } from '../pages/championship/championship';
import { BookingbabyfootPage } from '../pages/bookingbabyfoot/bookingbabyfoot';
import { LoginPage } from '../pages/login/login';
import { LogOutPage } from '../pages/log-out/log-out';
import { ProfilePage } from '../pages/profile/profile';
import { FollowingPage } from '../pages/following/following';
import { FriendsgamePage } from '../pages/friendsgame/friendsgame';
import { HistoricPage } from '../pages/historic/historic'
import { ListbabyfootsPage } from '../pages/listbabyfoots/listbabyfoots';
import { StatsPage } from '../pages/stats/stats';
import { FriendsPage } from '../pages/friends/friends';
import { TeamPage } from '../pages/team/team';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthentificationProvider } from '../providers/authentification/authentification';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    HomePage,
    QuickgamePage,
    ChampionshipPage,
    BookingbabyfootPage,
    LoginPage,
    LogOutPage,
    ProfilePage,
    FollowingPage,
    FriendsgamePage,
    HistoricPage,
    FriendsPage,
    ListbabyfootsPage,
    StatsPage,
    TeamPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    HomePage,
    QuickgamePage,
    ChampionshipPage,
    BookingbabyfootPage,
    LoginPage,
    LogOutPage,
    ProfilePage,
    FollowingPage,
    FriendsgamePage,
    HistoricPage,
    FriendsPage,
    ListbabyfootsPage,
    StatsPage,
    TeamPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthentificationProvider,
  ]
})
export class AppModule {}
