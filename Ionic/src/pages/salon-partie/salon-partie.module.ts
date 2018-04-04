import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonPartiePage } from './salon-partie';

@NgModule({
  declarations: [
    SalonPartiePage,
  ],
  imports: [
    IonicPageModule.forChild(SalonPartiePage),
  ],
})
export class SalonPartiePageModule {}
