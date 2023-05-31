import { createFeature, createReducer, on } from '@ngrx/store';
import { AlumnsActions } from './alumns.actions';
import { Alumns } from 'src/app/models';

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
);

export const alumnsFeature = createFeature({
  name: alumnsFeatureKey,
  reducer,
});

