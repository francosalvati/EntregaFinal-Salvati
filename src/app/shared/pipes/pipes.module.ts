import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstUpperCasePipe } from './first-upper-case.pipe';
import { FullNamePipe } from './full-name.pipe';



@NgModule({
  declarations: [
    FirstUpperCasePipe,
    FullNamePipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FirstUpperCasePipe,
    FullNamePipe,
  ]
})
export class PipesModule { }
