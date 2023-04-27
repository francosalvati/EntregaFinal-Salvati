import { Injectable } from '@angular/core';
import { Alumns, PayloadAlumns } from '../../models';
import { BehaviorSubject, Observable, Subject, filter, retry, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumns_MOCK: Alumns[] = [
    {
      id: 'a20-1',
      name: 'franco',
      lastname: 'salvati',
      status: true,
      registro: new Date(),
      courses_fk: ['s1', 's2']
    },
    {
      id: 'a20-2',
      name: 'cacaroto',
      lastname: 'son',
      status: false,
      registro: new Date(),
      courses_fk: ['s2']
    },
    {
      id: 'a20-3',
      name: 'felipe',
      lastname: 'Magixz',
      status: true,
      registro: new Date(),
      courses_fk: ['s2']
    },
    {
      id: 'a20-4',
      name: 'pedro',
      lastname: 'luro',
      status: false,
      registro: new Date(),
      courses_fk: ['s3']
    },
    {
      id: 'a20-5',
      name: 'ignacio',
      lastname: 'nachenzen',
      status: true,
      registro: new Date(),
      courses_fk: ['s2', 's3']
    },
    {
      id: 'a20-6',
      name: 'baltazar',
      lastname: 'nigu',
      status: true,
      registro: new Date(),
      courses_fk: ['s1']
    },
  ];

  private alumns$ = new BehaviorSubject<Alumns[]>(
    []
  )
  constructor() { }


  getAlumnos(): Observable<Alumns[]> {
    this.alumns$.next(this.alumns_MOCK);
    return this.alumns$.asObservable()
  }

  addAlumnos(payload: PayloadAlumns): Observable<Alumns[]> {
    this.alumns$.pipe(
      take(1)
    )
      .subscribe({
        next: (alumn => {
          this.alumns$.next([...this.alumns_MOCK, {
            id: `a20-${this.alumns_MOCK.length + 1}`,
            status: true,
            ...payload
          }])
        }),
        complete: () => { },
        error: () => { }
      })
    return this.alumns$.asObservable()
  }

  editAlumnos(id: string, actualizacion: Date): Observable<Alumns[]> {

    this.alumns$.pipe(
      take(1)
    )
      .subscribe({
        next: (alumn => {

          const alumnosA = alumn.map((alumn) => {
            if (alumn.id === id) {
              return {
                ...alumn,
                ...actualizacion
              }
            } else {
              return alumn
            }
          })

          this.alumns$.next(alumnosA);
        }),
        complete: () => { },
        error: () => { }
      })

    return this.alumns$.asObservable()
  }

  deleteAlumnos(id: string): Observable<Alumns[]> {
    this.alumns$
      .pipe(
        take(1)
      ).subscribe({
        next: (alumns => {
          const alumnsA = alumns.filter(alumn => alumn.id !== id)

          this.alumns$.next(alumnsA)
        }),
        complete: () => { },
        error: () => { }

      })
    return this.alumns$.asObservable()
  }
}
