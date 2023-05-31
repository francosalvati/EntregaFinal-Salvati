import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models';
import { CoursesActions } from 'src/app/pages/courses/store/courses.actions';
import { State } from 'src/app/pages/courses/store/courses.reducer';
import { selectCoursesState } from 'src/app/pages/courses/store/courses.selectors';
import { AddCourseDialogComponent } from './add-course-dialog/add-course-dialog.component';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})

export class CoursesTableComponent implements OnInit {


  courses!: Course[]
  displayedColumns: string[] = ['id', 'name', 'schedules', 'actions'];
  dataSource = this.courses;
  clickedRows = new Set<Course>()
  state$: Observable<State>;


  constructor(
    private store: Store,
    private dialogService: MatDialog
  ) {
    this.state$ = this.store.select(selectCoursesState)
  }


  ngOnInit(): void {
      this.store.dispatch(CoursesActions.loadCourses())
      this.state$.subscribe(a => this.courses = a.courses)
  }

  onAdd() {
    const dialogRef = this.dialogService.open(AddCourseDialogComponent)
  }

  deleteCourse(id:number){
    this.store.dispatch(CoursesActions.deleteCourse({ id }))
  }

}
