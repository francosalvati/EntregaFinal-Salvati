import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//components
import { UserDialogoComponent } from '../dialog/user-dialogo/user-dialogo.component';
import { EditDialogoComponent } from '../dialog/edit-dialogo/edit-dialogo.component';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component';
import { AlumnsTableComponent } from './alumns-table.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AlumnsTableComponent,
    UserDialogoComponent,
    EditDialogoComponent,
    ConfirmDialogComponent
  ],

  imports: [
    CommonModule,
    DialogModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],

  exports: [
    AlumnsTableComponent,
  ]
})
export class AlumnsTableModule { }
