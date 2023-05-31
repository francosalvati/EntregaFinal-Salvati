import { Injectable } from '@angular/core';
import { Course, CreateCourseData, PayloadCourse } from '../../models/index';
import { BehaviorSubject, Observable, concatMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiURL = environment.apiURL
  private courses$ = new BehaviorSubject<Course[]>([])

  constructor( private http: HttpClient ) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiURL}/courses`)
  }

  getCourse(id: number): Observable<Course>{
    return this.http.get<Course>(`${this.apiURL}/courses/${id}`)
  }

  addCourse( data: CreateCourseData ) {
    return this.http.post<Course>(`${this.apiURL}/courses`, data).pipe(
      concatMap((createResponse) => this.getCourse(createResponse.id))
    )
  }

  deleteCourse(id: number): Observable<unknown>{
    return this.http.delete(
      `${this.apiURL}/courses/${id}`
    )
  }

}
