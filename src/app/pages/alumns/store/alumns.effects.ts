import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { AlumnsActions } from './alumns.actions';
import { AlumnosService } from 'src/app/core/services/alumnos.service';


@Injectable()
export class AlumnsEffects {

  loadAlumns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnsActions.loadAlumns),
      concatMap(() =>
        this.alumnsService.getAlumnos().pipe(
          map(data => AlumnsActions.loadAlumnsSuccess({ data })),
          catchError(error => of(AlumnsActions.loadAlumnsFailure({ error }))))
      )
    );
  });

  CreateAlumns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnsActions.loadAlumns),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AlumnsActions.loadAlumnsSuccess({ data })),
          catchError(error => of(AlumnsActions.loadAlumnsFailure({ error }))))
      )
    );
  });

  DeleteAlumns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnsActions.loadAlumns),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AlumnsActions.loadAlumnsSuccess({ data })),
          catchError(error => of(AlumnsActions.loadAlumnsFailure({ error }))))
      )
    );
  });

  UpdateAlumns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnsActions.loadAlumns),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AlumnsActions.loadAlumnsSuccess({ data })),
          catchError(error => of(AlumnsActions.loadAlumnsFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private alumnsService: AlumnosService) {}
}
