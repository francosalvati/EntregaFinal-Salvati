import { Injectable } from '@angular/core';
import { Alumns, PayloadAlumns } from '../../models';
import { BehaviorSubject, Observable, Subject, concatMap, filter, retry, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  private apiURL = environment.apiURL
  private alumns$ = new BehaviorSubject<Alumns[]>([])
  constructor(private http: HttpClient) { }


  getAlumnos(): Observable<Alumns[]> {
    this.http.get<Alumns[]>(`${this.apiURL}/alumns`).subscribe(alumns => {
      this.alumns$.next(alumns)
    })
    return this.alumns$.asObservable()
  }

  addAlumnos(payload: PayloadAlumns): Observable<Alumns[]> {
    return this.http.post<Alumns[]>(`${this.apiURL}/alumns`, payload)
  }


  getAlumnById(id: number): Observable<Alumns> {
    return this.http.get<Alumns>(`${this.apiURL}/alumns/${id}`)
  }


  editAlumnos(id: number, actualizacion: Date): Observable<Alumns[]> {

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

  deleteAlumnos(id: number): Observable<Alumns[]> {
    return this.alumns$.asObservable()
  }
}
