import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnBoardingScreenPage } from './on-boarding-screen.page';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    component: OnBoardingScreenPage,
    // ...canActivate(redirectUnauthorizedToLogin),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnBoardingScreenPageRoutingModule {}
