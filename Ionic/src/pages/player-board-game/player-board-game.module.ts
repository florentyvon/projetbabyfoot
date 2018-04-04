import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerBoardGamePage } from './player-board-game';

@NgModule({
  declarations: [
    PlayerBoardGamePage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerBoardGamePage),
  ],
})
export class PlayerBoardGamePageModule {}
