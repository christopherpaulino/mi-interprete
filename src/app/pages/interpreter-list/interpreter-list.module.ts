import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpreterListPage } from './interpreter-list.page';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { InterpreterProfilePage } from '../interpreter-profile/interpreter-profile.page';
const routes: Routes = [
  {
    path: '',
    component: InterpreterListPage
  },
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [InterpreterListPage]
})
export class InterpreterListPageModule { }
