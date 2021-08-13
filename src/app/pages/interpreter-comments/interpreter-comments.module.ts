import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpreterCommentsPageRoutingModule } from './interpreter-comments-routing.module';

import { InterpreterCommentsPage } from './interpreter-comments.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpreterCommentsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InterpreterCommentsPage]
})
export class InterpreterCommentsPageModule { }
