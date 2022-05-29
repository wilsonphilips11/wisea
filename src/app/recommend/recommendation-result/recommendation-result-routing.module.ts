import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationResultPage } from './recommendation-result.page';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    component: RecommendationResultPage,
    ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationResultPageRoutingModule {}
