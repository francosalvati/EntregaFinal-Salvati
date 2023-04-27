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
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ErrorModule } from './pages/error/error.module';
import { AlumnsDetailModule } from './pages/alumns-detail/alumns-detail.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    //modulos de componentes

    AlumnsModule,
    HomeModule,
    ErrorModule,
    AlumnsDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
