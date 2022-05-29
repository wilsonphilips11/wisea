import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSummaryPage } from './payment-summary.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSummaryPageRoutingModule {}
