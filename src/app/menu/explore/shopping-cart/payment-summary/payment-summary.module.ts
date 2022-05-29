import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSummaryPageRoutingModule } from './payment-summary-routing.module';

import { PaymentSummaryPage } from './payment-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentSummaryPageRoutingModule
  ],
  declarations: [PaymentSummaryPage]
})
export class PaymentSummaryPageModule {}
