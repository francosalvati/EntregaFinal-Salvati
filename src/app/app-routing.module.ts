import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: 'alumns',
    loadChildren: () => import('./pages/alumns/alumns-routing.module').then(m => m.AlumnsRoutingModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error-routing.module').then(m => m.ErrorRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
