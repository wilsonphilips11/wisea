import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapLocationPageRoutingModule } from './map-location-routing.module';

import { MapLocationPage } from './map-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapLocationPageRoutingModule,
  ],
  declarations: [MapLocationPage]
})
export class MapLocationPageModule {}
