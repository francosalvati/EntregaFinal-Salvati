import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AlumnsDetailModule } from './pages/alumns-detail/alumns-detail.module';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule),
  },
  {
    path: 'auth',
    canActivate:[LoginGuard],
    loadChildren: () => import ('./auth/auth-routing.module').then( m => m.AuthRoutingModule)
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
