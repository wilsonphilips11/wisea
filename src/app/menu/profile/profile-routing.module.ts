import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
