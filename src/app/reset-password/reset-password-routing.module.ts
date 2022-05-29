import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswordPage } from './reset-password.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordPage
  },  {
    path: 'email-confirmation',
    loadChildren: () => import('./email-confirmation/email-confirmation.module').then( m => m.EmailConfirmationPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordPageRoutingModule {}
