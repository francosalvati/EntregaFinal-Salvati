import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnsDetailComponent } from './alumns-detail.component';
import { AlumnsDetailRoutingModule } from './alumns-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlumnsDetailComponent
  ],
  imports: [
    CommonModule,
    AlumnsDetailRoutingModule,
    SharedModule
  ]
})
export class AlumnsDetailModule { }
