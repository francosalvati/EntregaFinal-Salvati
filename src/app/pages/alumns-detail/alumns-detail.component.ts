import { Component, OnDestroy, OnInit, Pipe, AfterViewInit } from '@angular/core';
import { Alumns, Course } from 'src/app/models';
import { AlumnosService } from '../../core/services/alumnos.service';
import { filter, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-alumns-detail',
  templateUrl: './alumns-detail.component.html',
  styleUrls: ['./alumns-detail.component.css']
})
export class AlumnsDetailComponent implements OnDestroy {
  alumn: Alumns | undefined;
  courses: Course[];
  private destroyed$ = new Subject()
  constructor(
    private alumnosService: AlumnosService,
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.courses = []
    this.getAlumns()
  }

  getAlumns() {
    this.alumnosService.getAlumnById(parseInt(this.activatedRoute.snapshot.params['id']))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((alumno) => {
        this.alumn = alumno
        this.getCourses()
      });
  }

  getCourses() {
    if (this.alumn?.courses_fk) {
      this.alumn.courses_fk.forEach(id => {
        this.courseService.getCourse(id).subscribe(c => {
          this.courses.push(c)
        })
      })
    }
  }


  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }



}
