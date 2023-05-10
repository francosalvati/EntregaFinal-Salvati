import { NgModule, isDevMode } from '@angular/core';
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
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './auth/login/login.module';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { actionReducerMap } from './store/index';
import { CoursesTableModule } from './components/courses-table/courses-table.module';
import { CoursesModule } from './pages/courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    //modulos de componentes

    AlumnsModule,
    CoursesModule,
    HomeModule,
    ErrorModule,
    AlumnsDetailModule,
    AuthModule,
    LoginModule,

    //Store
    StoreModule.forRoot(actionReducerMap, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
