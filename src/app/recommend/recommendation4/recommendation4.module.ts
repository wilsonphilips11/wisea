import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recommendation4PageRoutingModule } from './recommendation4-routing.module';

import { Recommendation4Page } from './recommendation4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recommendation4PageRoutingModule
  ],
  declarations: [Recommendation4Page]
})
export class Recommendation4PageModule {}
