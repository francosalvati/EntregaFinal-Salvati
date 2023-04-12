import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


//Componentes
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';




//Material Module
import { SharedModule } from './shared/shared.module';



//Modulos de paginas
import { AlumnsModule } from './pages/alumns/alumns.module';
import { DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AlumnsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
