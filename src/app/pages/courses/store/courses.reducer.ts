import { createFeature, createReducer, on } from '@ngrx/store';
import { CoursesActions } from './courses.actions';
import { Course } from 'src/app/models';
import { act } from '@ngrx/effects';

export const coursesFeatureKey = 'courses';

export interface State {
  loading: boolean;
  courses: Course[];
  error: unknown;
}

export const initialState: State = {
  loading: false,
  courses: [],
  error: null
};

export const reducer = createReducer<State>(
  initialState,

  // loadCourses
  on(CoursesActions.loadCourses, state =>{
      return{
        ...state,
        loading: true
      }
  }),
  on(CoursesActions.loadCoursesSuccess, (state, action) => {
    return{
      ...state,
      loading: false,
      courses: action.data
    }
  }),
  on(CoursesActions.loadCoursesFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }),


  //createCourses

  on(CoursesActions.createCourse, state => {
    return{
      ...state,
      loading: true
    }
  }),

  on(CoursesActions.createCourseSuccess, (state, action) => {

    const newCourse = action.data;
    return{
      ...state,
      loading: false,
      courses: [...state.courses, newCourse]
    }
  }),

  on(CoursesActions.createCourseFailure, (state, action) => {
    return{
      ...state,
      loading: false,
      error: action.error
    }
  }),



  //deleteCourse
  on(CoursesActions.deleteCourse, state => {
    return{
      ...state,
      loading: true
    }
  }),

  on(CoursesActions.deleteCourseSuccess, (state, action) => {

    return{
      ...state,
      loading: false,
      courses: state.courses.filter( c => c.id !== action.data)
    }
  }),

  on(CoursesActions.deleteCourseFailure, (state, action) => {
    return{
      ...state,
      loading: false,
      error: action.error
    }
  })
);

export const coursesFeature = createFeature({
  name: coursesFeatureKey,
  reducer,
});

