import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//components
import { UserDialogoComponent } from './user-dialogo/user-dialogo.component';
import { EditDialogoComponent } from './edit-dialogo/edit-dialogo.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AlumnsTableComponent } from './alumns-table.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AlumnsEffects } from 'src/app/pages/alumns/store/alumns.effects';
import { alumnsFeature } from 'src/app/pages/alumns/store/alumns.reducer';



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
    RouterModule,
    StoreModule.forFeature(alumnsFeature),
    EffectsModule.forFeature([AlumnsEffects])
  ],

  exports: [
    AlumnsTableComponent,
  ]
})
export class AlumnsTableModule { }
