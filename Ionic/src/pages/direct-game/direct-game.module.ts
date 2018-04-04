import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectGamePage } from './direct-game';

@NgModule({
  declarations: [
    DirectGamePage,
  ],
  imports: [
    IonicPageModule.forChild(DirectGamePage),
  ],
})
export class DirectGamePageModule {}
