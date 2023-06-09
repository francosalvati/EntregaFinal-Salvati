import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ]
})

export class HomeModule { }
