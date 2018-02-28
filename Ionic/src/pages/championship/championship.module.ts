import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChampionshipPage } from './championship';

@NgModule({
  declarations: [
    ChampionshipPage,
  ],
  imports: [
    IonicPageModule.forChild(ChampionshipPage),
  ],
})
export class ChampionshipPageModule {}
