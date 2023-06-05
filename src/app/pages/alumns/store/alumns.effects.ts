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
      ofType(AlumnsActions.createAlumn),
      concatMap((action) =>
        this.alumnsService.addAlumnos(action.data).pipe(
          map((res) => AlumnsActions.createAlumnSuccess({ data: res })),
          catchError(error => of(AlumnsActions.createAlumnFailure({ error }))))
      )
    );
  });

  DeleteAlumns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnsActions.deleteAlumn),
      concatMap((action) =>
        this.alumnsService.deleteAlumn(action.id).pipe(
          map(() => AlumnsActions.deleteAlumnSuccess({ data: action.id })),
          catchError(error => of(AlumnsActions.deleteAlumnFailure({ error }))))
      )
    );
  });

  UpdateAlumns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AlumnsActions.updateAlumn),
      concatMap((action) =>
          this.alumnsService.editAlumnos(action.data).pipe(
          map((res) => AlumnsActions.updateAlumnSuccess({ data: res })),
          catchError(error => of(AlumnsActions.updateAlumnFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private alumnsService: AlumnosService) {}
}
