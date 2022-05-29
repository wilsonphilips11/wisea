import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailConfirmationPage } from './email-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: EmailConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailConfirmationPageRoutingModule {}
