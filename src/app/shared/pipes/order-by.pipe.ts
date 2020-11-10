import { Pipe, PipeTransform } from '@angular/core';

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC',
}

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], sortBy: string, sortOrder: string): any[] {
    if (!Array.isArray(array)) {
      return [];
    }
    const ascSorterFn = (a: any, b: any): number => new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime();
    const descSorterFn = (a: any, b: any): number => new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime();

    return array.sort(sortOrder === OrderBy.ASC ? ascSorterFn : descSorterFn);
  }
}
