import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FontSizeDirective } from './directives/font-size.directive';


@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
  ],
  exports:[
    AngularMaterialModule
  ]
})
export class SharedModule { }
