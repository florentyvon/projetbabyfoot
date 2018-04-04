import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoingamePage } from './joingame';

@NgModule({
  declarations: [
    JoingamePage,
  ],
  imports: [
    IonicPageModule.forChild(JoingamePage),
  ],
})
export class JoingamePageModule {}
