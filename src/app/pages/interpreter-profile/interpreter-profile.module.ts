import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpreterProfilePageRoutingModule } from './interpreter-profile-routing.module';

import { InterpreterProfilePage } from './interpreter-profile.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpreterProfilePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InterpreterProfilePage]
})
export class InterpreterProfilePageModule { }
