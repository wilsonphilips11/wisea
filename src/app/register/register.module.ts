import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterPageRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
    ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
