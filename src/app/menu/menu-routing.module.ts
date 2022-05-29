import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'explore',
        loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
