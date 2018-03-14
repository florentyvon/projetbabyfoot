import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {LaunchNavigator, LaunchNavigatorOptions} from '@ionic-native/launch-navigator';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { QuickgamePage } from '../pages/quickgame/quickgame';
import { ChampionshipPage } from '../pages/championship/championship';
import { BookingbabyfootPage } from '../pages/bookingbabyfoot/bookingbabyfoot'
import { FriendsgamePage } from '../pages/friendsgame/friendsgame';
import { UnknowngamePage } from '../pages/unknowngame/unknowngame';
import { HistoricPage } from '../pages/historic/historic';
import { ListbabyfootsPage } from '../pages/listbabyfoots/listbabyfoots';
import { ProfilePage } from '../pages/profile/profile';
import { FollowingPage } from '../pages/following/following';
import { StatsPage } from '../pages/stats/stats';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    HomePage,
    QuickgamePage,
    ChampionshipPage,
    BookingbabyfootPage,
    FriendsgamePage,
    UnknowngamePage,
    ListbabyfootsPage,
    HistoricPage,
    ProfilePage,
    FollowingPage,
    StatsPage,
  ],
  imports: [
    BrowserModule,
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
    FriendsgamePage,
    UnknowngamePage,
    ListbabyfootsPage,
    HistoricPage,
    ProfilePage,
    FollowingPage,
    StatsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LaunchNavigator
  ]
})
export class AppModule {}
