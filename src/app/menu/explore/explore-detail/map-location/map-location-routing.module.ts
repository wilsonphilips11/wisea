import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapLocationPage } from './map-location.page';

const routes: Routes = [
  {
    path: '',
    component: MapLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapLocationPageRoutingModule {}
