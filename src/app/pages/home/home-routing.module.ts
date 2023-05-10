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
            redirectTo: 'courses',
            pathMatch: 'full'
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
        ]
      }
    ])
  ],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
