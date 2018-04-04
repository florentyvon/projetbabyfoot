import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickgamePage } from './quickgame';

@NgModule({
  declarations: [
    QuickgamePage,
  ],
  imports: [
    IonicPageModule.forChild(QuickgamePage),
  ],
})
export class QuickgamePageModule {}
