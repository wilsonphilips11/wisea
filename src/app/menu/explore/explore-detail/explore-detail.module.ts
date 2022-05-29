import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreDetailPageRoutingModule } from './explore-detail-routing.module';

import { ExploreDetailPage } from './explore-detail.page';
import {SharedComponentsModule} from "../../../components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreDetailPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ExploreDetailPage]
})
export class ExploreDetailPageModule {}
