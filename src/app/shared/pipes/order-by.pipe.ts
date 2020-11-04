import { Pipe, PipeTransform } from '@angular/core';
import Course from '../../pages/courses-page/components/course/course.types';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<Course>, order = ''): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      const first = a.creationDate;
      const parts: Array<string> = first.split('/');
      const firstDate: Date = new Date(parseInt(parts[2], 10), parseInt(parts[0], 10) - 1, parseInt(parts[1], 10));
      const firstDateInMilliseconds = firstDate.getTime();

      const second = b.creationDate;
      const secondParts: Array<string> = second.split('/');
      const secondDate: Date = new Date(parseInt(secondParts[2], 10), parseInt(secondParts[0], 10) - 1, parseInt(secondParts[1], 10));
      const secondDateInMilliseconds = secondDate.getTime();
      if (firstDateInMilliseconds < secondDateInMilliseconds) {
        return -1;
      } else if (firstDateInMilliseconds > secondDateInMilliseconds) {
        return 1;
      } else {
        return 0;
      }
    });
    if (order === 'DESC') {
      return array;
    } else {
      return array.reverse();
    }
  }
}
