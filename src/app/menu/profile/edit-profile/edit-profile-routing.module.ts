import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfilePage } from './edit-profile.page';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    component: EditProfilePage,
    ...canActivate(redirectUnauthorizedToLogin),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfilePageRoutingModule {}
