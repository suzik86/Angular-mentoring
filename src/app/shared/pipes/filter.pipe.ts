import { Pipe, PipeTransform } from '@angular/core';
import Course from '../../pages/courses-page/components/course/course.types';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Course[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();

    return items.filter( item => {
      return item.name.toLowerCase().includes(searchText);
    });
   }
}
