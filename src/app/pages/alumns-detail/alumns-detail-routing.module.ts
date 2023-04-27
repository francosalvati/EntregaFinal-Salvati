import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlumnsDetailComponent } from './alumns-detail.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AlumnsDetailComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AlumnsDetailRoutingModule { }
