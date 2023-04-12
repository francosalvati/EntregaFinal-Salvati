import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpperCase'
})
export class FirstUpperCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value[0].toUpperCase() + value.substring(1);
  }

}
