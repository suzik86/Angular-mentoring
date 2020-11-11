import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    const hours = Math.floor( +value / 60);
    const min = +value - (hours * 60);

    return hours === 0 ? `${value}min` : `${hours}h ${min}min`;
  }
}
