import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesTableComponent } from './courses-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { coursesFeature } from 'src/app/pages/courses/store/courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from 'src/app/pages/courses/store/courses.effects';
import { AddCourseDialogComponent } from './add-course-dialog/add-course-dialog.component';



@NgModule({
  declarations: [CoursesTableComponent , AddCourseDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(coursesFeature),
    EffectsModule.forFeature([CoursesEffects])
  ],
  exports:[CoursesTableComponent]
})
export class CoursesTableModule { }
