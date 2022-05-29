import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';

import { Recommendation3Page } from './recommendation3.page';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    component: Recommendation3Page,
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recommendation3PageRoutingModule {}
