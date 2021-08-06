import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';

import { MyProfilePage } from './my-profile.page';
import { ComponentsModule } from '../../components/components.module';
import { BecomeInterpreterComponent } from './become-interpreter/become-interpreter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProfilePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [MyProfilePage, BecomeInterpreterComponent]
})
export class MyProfilePageModule { }
