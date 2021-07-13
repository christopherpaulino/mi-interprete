import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteRegisterPageRoutingModule } from './complete-register-routing.module';

import { CompleteRegisterPage } from './complete-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteRegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CompleteRegisterPage]
})
export class CompleteRegisterPageModule { }
