import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { EditProfilePage } from './edit-profile.page';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditProfilePageRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule
    ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule {}
