import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeBfPage } from './home-bf';

@NgModule({
  declarations: [
    HomeBfPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeBfPage),
  ],
})
export class HomeBfPageModule {}
