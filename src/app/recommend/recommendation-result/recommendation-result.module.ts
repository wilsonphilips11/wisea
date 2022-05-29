import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendationResultPageRoutingModule } from './recommendation-result-routing.module';

import { RecommendationResultPage } from './recommendation-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendationResultPageRoutingModule
  ],
  declarations: [RecommendationResultPage]
})
export class RecommendationResultPageModule {}
