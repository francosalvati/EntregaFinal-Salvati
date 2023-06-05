import { createFeature, createReducer, on } from '@ngrx/store';
import { AlumnsActions } from './alumns.actions';
import { Alumns } from 'src/app/models';
import { act } from '@ngrx/effects';

export const alumnsFeatureKey = 'alumns';

export interface State {
  loading: boolean;
  alumns: Alumns[];
  error: unknown;
}

export const initialState: State = {
  loading: false,
  alumns: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(AlumnsActions.loadAlumns, state => {
    return {
      ...state,
      loading: true
    }}),

  on(AlumnsActions.loadAlumnsSuccess, (state, action) => {
    return{
      ...state,
      alumns: action.data,
      loading: false
    }
  }),
  on(AlumnsActions.loadAlumnsFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }),

  // create

  on(AlumnsActions.createAlumn, state => {
    return {
      ...state,
      loading: true
    }}),

  on(AlumnsActions.createAlumnSuccess, (state, action) => {
    const newAlumn = action.data
    return{
      ...state,
      alumns: [ ...state.alumns, newAlumn ],
      loading: false
    }
  }),
  on(AlumnsActions.createAlumnFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }),


  on(AlumnsActions.deleteAlumn, state => {
    return {
      ...state,
      loading: true
    }}),

  on(AlumnsActions.deleteAlumnSuccess, (state, action) => {

    return{
      ...state,
      alumns: state.alumns.filter(a => action.data !== a.id),
      loading: false
    }
  }),

  on(AlumnsActions.deleteAlumnFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }),

//update

  on(AlumnsActions.updateAlumn, state => {
    return {
      ...state,
      loading: true
    }}),

  on(AlumnsActions.updateAlumnSuccess, (state, action) => {
    const alumnUpdate = action.data
    return{
      ...state,
      alumns: state.alumns.map(a =>  a.id === alumnUpdate.id? alumnUpdate : a ),
      loading: false
    }
  }),

  on(AlumnsActions.updateAlumnFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }),



);

export const alumnsFeature = createFeature({
  name: alumnsFeatureKey,
  reducer,
});

