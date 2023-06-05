import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Alumns, CreateAlumnsData } from 'src/app/models';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { Store } from '@ngrx/store';
import { selectAlumnsState } from 'src/app/pages/alumns/store/alumns.selectors';
import { AlumnsActions } from 'src/app/pages/alumns/store/alumns.actions';
import { CoursesActions } from '../../../pages/courses/store/courses.actions';
import { Observable } from 'rxjs';
import { State } from 'src/app/pages/courses/store/courses.reducer';
import { selectCoursesState } from 'src/app/pages/courses/store/courses.selectors';

@Component({
  selector: 'app-user-dialogo',
  templateUrl: './user-dialogo.component.html',
  styleUrls: ['./user-dialogo.component.css']
})
export class UserDialogoComponent implements OnInit {



  nombreControll: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/)
  ])

  apellidoControll: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/)
  ])

  courseControll: FormControl = new FormControl('', [
    Validators.required
  ])

  formularioUser: FormGroup = new FormGroup({
    name: this.nombreControll,
    lastname: this.apellidoControll,
    course_fk: this.courseControll
  });

  courses: any;
  stateCourse$: Observable<State>;

  constructor(private matDialog: MatDialogRef<UserDialogoComponent>, private store: Store) {
    this.stateCourse$ = this.store.select(selectCoursesState)
    this.store.dispatch(CoursesActions.loadCourses())
  }

  ngOnInit(): void {
    this.store.dispatch(CoursesActions.loadCourses())
    this.stateCourse$.subscribe(a => this.courses = a.courses)
  }

  onSubmit() {
    if (this.formularioUser.valid) {
      this.store.dispatch(AlumnsActions.createAlumn({
        data: {
          ...this.formularioUser.value,
          status: true,
          registro: new Date(),
          courses_fk: [this.formularioUser.value.course_fk]
        } as CreateAlumnsData
      }))
      this.matDialog.close()
    } else {
      this.formularioUser.markAllAsTouched()
    }
  }
}
