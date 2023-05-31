import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumns from './alumns.reducer';

export const selectAlumnsState = createFeatureSelector<fromAlumns.State>(
  fromAlumns.alumnsFeatureKey
);
