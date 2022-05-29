import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreDetailPage } from './explore-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreDetailPage
  },
  {
    path: 'map-location/:lat:long',
    loadChildren: () => import('./map-location/map-location.module').then( m => m.MapLocationPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreDetailPageRoutingModule {}
