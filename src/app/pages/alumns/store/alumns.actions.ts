import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Alumns, CreateAlumnsData } from 'src/app/models';

export const AlumnsActions = createActionGroup({
  source: 'Alumns',
  events: {
    'Load Alumns': emptyProps(),
    'Load Alumns Success': props<{ data: Alumns[] }>(),
    'Load Alumns Failure': props<{ error: unknown }>(),

    'Delete Alumn': props<{ id: number }>(),
    'Delete Alumn Success': props<{ data: number }>(),
    'Delete Alumn Failure': props<{ error: unknown }>(),

    'Create Alumn': props<{ data: CreateAlumnsData }>(),
    'Create Alumn Success': props<{ data: Alumns }>(),
    'Create Alumn Failure': props<{ error: unknown }>(),
  }
});
