import { Injectable } from '@angular/core';
import { Alumns, EditAlumnData, PayloadAlumns } from '../../models';
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

  getAlumn(id: number): Observable<Alumns> {
    return this.http.get<Alumns>(`${this.apiURL}/alumns/${id}`)
  }

  addAlumnos(payload: PayloadAlumns): Observable<Alumns> {
    return this.http.post<Alumns>(`${this.apiURL}/alumns`, payload).pipe(
      concatMap((createResponse) => {
        return this.getAlumn(createResponse.id)
      })
    )
  }


  getAlumnById(id: number): Observable<Alumns> {
    return this.http.get<Alumns>(`${this.apiURL}/alumns/${id}`)
  }


  editAlumnos(payload: Alumns): Observable<Alumns> {
    return this.http.put<Alumns>(`${this.apiURL}/alumns/${payload.id}`, {
      status: payload.status,
      name: payload.name,
      lastname: payload.lastname,
      registro: new Date(),
      courses_fk: payload.courses_fk
    }).pipe(
      concatMap((createResponse) => {
        return this.getAlumn(createResponse.id)
      })
    )
  }


  deleteAlumn(id: number): Observable<unknown> {
    return this.http.delete(
      `${this.apiURL}/alumns/${id}`
    )
  }
}
