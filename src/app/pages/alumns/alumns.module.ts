import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnsComponent } from './alumns.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlumnsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AlumnsComponent
  ]
})
export class AlumnsModule { }
