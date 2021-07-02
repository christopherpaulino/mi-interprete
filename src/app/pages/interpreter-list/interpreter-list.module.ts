import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpreterListPageRoutingModule } from './interpreter-list-routing.module';

import { InterpreterListPage } from './interpreter-list.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpreterListPageRoutingModule,
  ],
  declarations: [InterpreterListPage]
})
export class InterpreterListPageModule { }
