import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesTableComponent } from './courses-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CoursesTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[CoursesTableComponent]
})
export class CoursesTableModule { }
