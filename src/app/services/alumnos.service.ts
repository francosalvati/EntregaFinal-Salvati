import { Injectable } from '@angular/core';
import { Alumns } from '../interfaces/alumns';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnos : Alumns[]   = [
    {
      legajo: 'a20-1',
      name: 'franco',
      lastname: 'salvati',
      status: true,
      registro: new Date(),
    },
    {
      legajo: 'a20-2',
      name: 'cacaroto',
      lastname: 'son',
      status: true,
      registro: new Date(),
    },
    {
      legajo: 'a20-3',
      name: 'felipe',
      lastname: 'Magixz',
      status: true,
      registro: new Date(),
    },
    {
      legajo: 'a20-4',
      name: 'pedro',
      lastname: 'luro',
      status: true,
      registro: new Date(),
    },
    {
      legajo: 'a20-5',
      name: 'ignacio',
      lastname: 'nachenzen',
      status: true,
      registro: new Date(),
    },
    {
      legajo: 'a20-6',
      name: 'baltazar',
      lastname: 'nigu',
      status: true,
      registro: new Date(),
    },
  ];
  constructor() { }
}
