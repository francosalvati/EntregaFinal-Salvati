import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})

export class CoursesTableComponent {

  courses!: Course[]
  displayedColumns: string[] = ['id', 'name', 'schedules'];
  dataSource = this.courses;
  clickedRows = new Set<Course>()

  constructor(
    private dialogService: MatDialog,
    private courseService: CourseService,
    private router: Router
  ) {
    courseService.getCourses().subscribe(a => {
      this.courses = a
    })
  }
}
