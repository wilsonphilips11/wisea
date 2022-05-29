import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recommendation1PageRoutingModule } from './recommendation1-routing.module';

import { Recommendation1Page } from './recommendation1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recommendation1PageRoutingModule
  ],
  declarations: [Recommendation1Page]
})
export class Recommendation1PageModule {}
