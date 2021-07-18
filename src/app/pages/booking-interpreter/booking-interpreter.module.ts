import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingInterpreterPageRoutingModule } from './booking-interpreter-routing.module';

import { BookingInterpreterPage } from './booking-interpreter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingInterpreterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BookingInterpreterPage]
})
export class BookingInterpreterPageModule { }
