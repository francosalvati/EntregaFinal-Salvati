import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnsComponent } from './alumns.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogModule } from '@angular/cdk/dialog';
import { UserDialogoComponent } from 'src/app/components/dialog/user-dialogo/user-dialogo.component';
import { EditDialogoComponent } from 'src/app/components/dialog/edit-dialogo/edit-dialogo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from 'src/app/components/dialog/confirm-dialog/confirm-dialog.component';
import { FullNamePipe } from 'src/app/shared/pipes/full-name.pipe';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';



@NgModule({
  declarations: [
    AlumnsComponent,
    TableComponent,
    UserDialogoComponent,
    EditDialogoComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    PipesModule
  ],
  exports:[
    AlumnsComponent
  ]
})
export class AlumnsModule { }
