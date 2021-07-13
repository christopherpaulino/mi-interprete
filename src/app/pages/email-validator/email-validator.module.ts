import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailValidatorPageRoutingModule } from './email-validator-routing.module';

import { EmailValidatorPage } from './email-validator.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailValidatorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EmailValidatorPage]
})
export class EmailValidatorPageModule { }
