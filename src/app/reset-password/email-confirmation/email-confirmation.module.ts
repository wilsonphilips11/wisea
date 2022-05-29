import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailConfirmationPageRoutingModule } from './email-confirmation-routing.module';

import { EmailConfirmationPage } from './email-confirmation.page';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EmailConfirmationPageRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule
    ],
  declarations: [EmailConfirmationPage]
})
export class EmailConfirmationPageModule {}
