import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnBoardingScreenPageRoutingModule } from './on-boarding-screen-routing.module';

import { OnBoardingScreenPage } from './on-boarding-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnBoardingScreenPageRoutingModule
  ],
  declarations: [OnBoardingScreenPage]
})
export class OnBoardingScreenPageModule {}
