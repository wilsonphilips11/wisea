import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplorePage } from './explore.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage
  },
  {
    path: 'explore-detail/map-location',
    loadChildren: () => import('./explore-detail/map-location/map-location.module').then( m => m.MapLocationPageModule)
  },
  {
    path: 'explore-detail/:id',
    loadChildren: () => import('./explore-detail/explore-detail.module').then(m => m.ExploreDetailPageModule)
  },
  {
    path: 'list-item/:order',
    loadChildren: () => import('./list-item/list-item.module').then( m => m.ListItemPageModule)
  },
  {
    path: 'shopping-cart/:id',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorePageRoutingModule {}
