import { Injectable } from '@angular/core';
import { Course, PayloadCourse } from '../../models/index';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesMOCK: Course[] = [
    {
      id: 's1',
      name: 'Angular',
      schedules: '20:30 - 22:30'
    },
    {
      id: 's3',
      name: 'UX - UI',
      schedules: '10:30 - 12:30'
    },
    {
      id: 's2',
      name: 'Css',
      schedules: '17:00 - 20:00'
    }
  ]

  private courses$ = new BehaviorSubject<Course[]>([])

  constructor( ) { }

  getCourses(): Observable<Course[]> {
    this.courses$.next(this.coursesMOCK);
    return this.courses$.asObservable()
  }

  addCourses(payload: PayloadCourse): Observable<Course[]> {
    this.courses$.pipe(
      take(1)
    )
      .subscribe({
        next: (alumn => {
          this.courses$.next([...this.coursesMOCK, {
            id: `s${this.coursesMOCK.length + 1}`,
            ...payload
          }])
        }),
        complete: () => { },
        error: () => { }
      })
    return this.courses$.asObservable()
  }

  editCourses(id: string, actualizacion: Date): Observable<Course[]> {

    this.courses$.pipe(
      take(1)
    )
      .subscribe({
        next: (course => {

          const CoursesA = course.map((course) => {
            if (course.id === id) {
              return {
                ...course,
                ...actualizacion
              }
            } else {
              return course
            }
          })

          this.courses$.next(CoursesA);
        }),
        complete: () => { },
        error: () => { }
      })

    return this.courses$.asObservable()
  }

  deleteCourses(id: string): Observable<Course[]> {
    this.courses$
      .pipe(
        take(1)
      ).subscribe({
        next: (courses => {
          const CoursesA = courses.filter(course => course.id !== id)
          this.courses$.next(CoursesA)
        }),
        complete: () => { },
        error: () => { }

      })
    return this.courses$.asObservable()
  }
}
