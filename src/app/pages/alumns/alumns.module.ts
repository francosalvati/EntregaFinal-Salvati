import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlumnsComponent } from './alumns.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnsRoutingModule } from './alumns-routing.module';
import { AlumnsTableModule } from 'src/app/components/alumns-table/alumns-table.module';
import { HomeRoutingModule } from '../home/home-routing.module';


@NgModule({
  declarations: [
    AlumnsComponent,
  ],
  imports: [
    CommonModule,
    AlumnsRoutingModule,
    SharedModule,
    AlumnsTableModule
  ]
})
export class AlumnsModule { }
