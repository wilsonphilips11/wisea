import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recommendation2PageRoutingModule } from './recommendation2-routing.module';

import { Recommendation2Page } from './recommendation2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recommendation2PageRoutingModule
  ],
  declarations: [Recommendation2Page]
})
export class Recommendation2PageModule {}
