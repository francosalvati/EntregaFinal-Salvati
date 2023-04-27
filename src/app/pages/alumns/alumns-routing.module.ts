import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlumnsComponent } from './alumns.component';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AlumnsComponent
      },
      {
        path: ':id',
        loadChildren: () => import('../alumns-detail/alumns-detail-routing.module').then(m => m.AlumnsDetailRoutingModule)
      }
    ])
  ],
  exports: [RouterModule]
})
export class AlumnsRoutingModule { }
