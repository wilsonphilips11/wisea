import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recommendation3PageRoutingModule } from './recommendation3-routing.module';

import { Recommendation3Page } from './recommendation3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recommendation3PageRoutingModule
  ],
  declarations: [Recommendation3Page]
})
export class Recommendation3PageModule {}
