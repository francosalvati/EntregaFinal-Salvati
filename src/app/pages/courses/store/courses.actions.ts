import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course, CreateCourseData } from 'src/app/models';

export const CoursesActions = createActionGroup({
  source: 'Courses',
  events: {

    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: Course[] }>(),
    'Load Courses Failure': props<{ error: unknown }>(),

    'Delete Course': props<{ id: number }>(),
    'Delete Course Success': props<{ data: number }>(),
    'Delete Course Failure': props<{ error: unknown }>(),

    'Create Course': props<{ data: CreateCourseData }>(),
    'Create Course Success': props<{ data: Course }>(),
    'Create Course Failure': props<{ error: unknown }>(),
  }
});
