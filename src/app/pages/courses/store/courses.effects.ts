import { Injectable, Pipe } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, concat } from 'rxjs';
import { CoursesActions } from './courses.actions';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/models';


@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.loadCourses),
      concatMap(() =>
        this.courseService.getCourses().pipe(
          map(data => CoursesActions.loadCoursesSuccess({ data })),
          catchError(error => of(CoursesActions.loadCoursesFailure({ error }))))
      )
    );
  });

  createCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.createCourse),
      concatMap(
        (action) => {
          return this.courseService.addCourse(action.data)
          .pipe(
              map((res) => CoursesActions.createCourseSuccess({ data: res })),
              catchError(error => of(CoursesActions.createCourseFailure({ error })))
            )
        })
    )
  })

    deleteCourse$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(CoursesActions.deleteCourse),
        concatMap(
          (action) => {
            return this.courseService.deleteCourse(action.id)
            .pipe(
              map(() => CoursesActions.deleteCourseSuccess({ data: action.id })),
              catchError(error => of(CoursesActions.deleteCourseFailure({ error })))
            )
        })
    )
  })

  constructor(private actions$: Actions, private courseService: CourseService) { }
}
