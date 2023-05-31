import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Form, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Course, CreateCourseData } from 'src/app/models';
import { CoursesActions } from 'src/app/pages/courses/store/courses.actions';

@Component({
  selector: 'app-add-course-dialog',
  templateUrl: './add-course-dialog.component.html',
  styleUrls: ['./add-course-dialog.component.css']
})
export class AddCourseDialogComponent {


  courseControl: FormControl = new FormControl('', [
    Validators.required
  ])

  schedulesControl: FormControl = new FormControl('', [
    Validators.required
  ])

  addForm: FormGroup = new FormGroup({
    name: this.courseControl,
    schedules: this.schedulesControl
  })

  constructor(private matDialog: MatDialogRef<AddCourseDialogComponent>, private store: Store) { }


  onSubmit() {
    if (this.addForm.valid) {
      this.store.dispatch( CoursesActions.createCourse({
        data: this.addForm.value as CreateCourseData
      }))
      this.matDialog.close()
    }else {
      this.addForm.markAllAsTouched()
    }
  }

}
