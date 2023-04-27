import { Pipe, PipeTransform } from '@angular/core';
import { Alumns } from 'src/app/models';

@Pipe({
  name: 'alumns'
})

export class FullNamePipe implements PipeTransform {

  transform(value: Alumns, args?: any): string {


    let retorno = '';
    switch (args) {

      case 'nombreCompleto':
        retorno = `${value.name[0].toUpperCase() + value.name.substring(1)} ${value.lastname[0].toUpperCase() + value.lastname.substring(1)}`;
        break

      case 'status':
        retorno = `${value? 'aprobado': 'desaprobado'}`;
        break
    }
    return retorno;
  }

}
