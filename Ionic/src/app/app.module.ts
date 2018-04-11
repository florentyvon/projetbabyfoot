import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { BookingbabyfootPage } from '../pages/bookingbabyfoot/bookingbabyfoot';
import { LoginPage } from '../pages/login/login';
import { LogOutPage } from '../pages/log-out/log-out';
import { ProfilePage } from '../pages/profile/profile';
import { HistoricPage } from '../pages/historic/historic'
import { ListbabyfootsPage } from '../pages/listbabyfoots/listbabyfoots';
import { StatsPage } from '../pages/stats/stats';
import { FriendsPage } from '../pages/friends/friends';
import { MyBookingsPage } from '../pages/my-bookings/my-bookings';
import { JoingamePage } from '../pages/joingame/joingame';
import { HomeBfPage } from '../pages/home-bf/home-bf';
import { SalonPartiePage } from '../pages/salon-partie/salon-partie';
import { PlayerBoardGamePage } from '../pages/player-board-game/player-board-game';
import { DirectGamePage } from '../pages/direct-game/direct-game';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthentificationProvider } from '../providers/authentification/authentification';
import { DataProvider } from '../providers/data/data';
import { GameProvider } from '../providers/game/game';

import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
//const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };
const config: SocketIoConfig = { url: 'http://192.168.1.1:8080', options: {} };

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    HomePage,
    BookingbabyfootPage,
    LoginPage,
    LogOutPage,
    ProfilePage,
    HistoricPage,
    FriendsPage,
    ListbabyfootsPage,
    StatsPage,
    MyBookingsPage,
    JoingamePage,
    HomeBfPage,
    SalonPartiePage,
    PlayerBoardGamePage,
    DirectGamePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    HomePage,
    BookingbabyfootPage,
    LoginPage,
    LogOutPage,
    ProfilePage,
    HistoricPage,
    FriendsPage,
    ListbabyfootsPage,
    StatsPage,
    MyBookingsPage,
    JoingamePage,
    HomeBfPage,
    SalonPartiePage,
    PlayerBoardGamePage,
    DirectGamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthentificationProvider,
    DataProvider,
    LaunchNavigator,
    GameProvider
  ]
})
export class AppModule {}
