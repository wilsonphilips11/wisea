import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/menu/tabs/home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'on-boarding-screen',
    pathMatch: 'full'
  },
  {
    path: 'recommendation1',
    loadChildren: () => import('./recommend/recommendation1/recommendation1.module').then( m => m.Recommendation1PageModule)
  },
  {
    path: 'recommendation2',
    loadChildren: () => import('./recommend/recommendation2/recommendation2.module').then( m => m.Recommendation2PageModule)
  },
  {
    path: 'recommendation3',
    loadChildren: () => import('./recommend/recommendation3/recommendation3.module').then( m => m.Recommendation3PageModule)
  },
  {
    path: 'recommendation4',
    loadChildren: () => import('./recommend/recommendation4/recommendation4.module').then( m => m.Recommendation4PageModule)
  },
  {
    path: 'recommendation-result',
    loadChildren: () => import('./recommend/recommendation-result/recommendation-result.module').then( m => m.RecommendationResultPageModule)
  },
  {
    path: 'on-boarding-screen',
    loadChildren: () => import('./on-boarding-screen/on-boarding-screen.module').then( m => m.OnBoardingScreenPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./menu/explore/explore.module').then(m => m.ExplorePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'history-detail/:id',
    loadChildren: () => import('./history/history-detail/history-detail-routing.module').then( m => m.HistoryDetailPageRoutingModule)
  },
  {
    path: 'payment-summary/:id',
    loadChildren: () => import('./menu/explore/shopping-cart/payment-summary/payment-summary-routing.module').then( m => m.PaymentSummaryPageRoutingModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
