import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from 'src/app/guards/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path:'',
        component:HomeComponent,
        children:[
          {
            path:'',
            canActivate:[AuthGuard],
            loadChildren: () => import ('../presentation/presentation-routing.module').then( m => m.PresentationRoutingModule)
          },
          {
            path: 'courses',
            canActivate: [AuthGuard],
            loadChildren: () => import('../courses/courses-routing.module').then(m => m.CoursesRoutingModule)
          },
          {
            path: 'alumns',
            canActivate: [AuthGuard],
            loadChildren: () => import('../alumns/alumns-routing.module').then(m => m.AlumnsRoutingModule)
          },
          {
            path: 'alumns/:id',
            canActivate: [AuthGuard],
            loadChildren: () => import('../alumns-detail/alumns-detail-routing.module').then(m => m.AlumnsDetailRoutingModule)
          },
        ]
      }
    ])
  ],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
