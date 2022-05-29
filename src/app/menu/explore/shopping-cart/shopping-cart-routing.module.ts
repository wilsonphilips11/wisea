import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartPage } from './shopping-cart.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPage
  },
  {
    path: 'payment-summary',
    loadChildren: () => import('./payment-summary/payment-summary.module').then( m => m.PaymentSummaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartPageRoutingModule {}
