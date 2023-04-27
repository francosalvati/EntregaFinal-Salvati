import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FontSizeDirective } from './directives/font-size.directive';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';


@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
    PipesModule,
    DirectivesModule
  ],
  exports:[
    AngularMaterialModule,
    PipesModule,
    DirectivesModule
  ]
})
export class SharedModule { }
