import { Component, OnInit, Pipe } from '@angular/core';
import { Alumns, Course } from 'src/app/models';
import { AlumnosService } from '../../core/services/alumnos.service';
import { filter } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-alumns-detail',
  templateUrl: './alumns-detail.component.html',
  styleUrls: ['./alumns-detail.component.css']
})
export class AlumnsDetailComponent implements OnInit {
  alumn: Alumns;
  alumns!: Alumns[];
  courses!: Course[];
  id!: string | null;
  constructor(
    private alumnosService: AlumnosService,
    private activatedRoute: ActivatedRoute
  ) {
    this.alumn = {
      id: '',
      name: 'no existe',
      lastname: '',
      status: true,
      registro: new Date(),
      courses_fk: []
    }
  }

  ngOnInit(): void {
    this.getId();
    this.getAlumn();
    this.getCourses();
  }

  getCourses(){
    this.alumnosService.getAlumnos().subscribe({
      next: (alumns => {
        const alumnsA = alumns.find(alumn => alumn.id === this.id)
        if (alumnsA) this.alumn = alumnsA
      }),
    })
  }

  getAlumn(){
    this.alumnosService.getAlumnos().subscribe({
      next: (alumns => {
        const alumnsA = alumns.find(alumn => alumn.id === this.id)
        if (alumnsA) this.alumn = alumnsA
      }),
    })
  }

  getId(){
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get('id')
    })
  }
}
