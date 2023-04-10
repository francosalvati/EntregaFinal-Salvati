import { Component } from '@angular/core';
import { Alumns } from 'src/app/interfaces/alumns';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class TableComponent {
  columnsToDisplay: string[] = ['id', 'name', 'status', 'age'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  alumnos : Alumns[]   = [
    {
      id: '1',
      name: 'string',
      lastname: 'string',
      status: true,
      age: new Date(),
    },
    {
      id: '1',
      name: 'string',
      lastname: 'string',
      status: true,
      age: new Date(),
    },
    {
      id: '1',
      name: 'string',
      lastname: 'string',
      status: true,
      age: new Date(),
    },
    {
      id: '1',
      name: 'string',
      lastname: 'string',
      status: true,
      age: new Date(),
    },
    {
      id: '1',
      name: 'string',
      lastname: 'string',
      status: true,
      age: new Date(),
    },
  ];
  expandedElement?: Alumns | null;


}
