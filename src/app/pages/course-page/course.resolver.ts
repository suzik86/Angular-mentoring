import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { selectCourse } from 'src/app/state/courses/courses.selectors';

@Injectable()
export class CoursePageResolve implements Resolve<string> {

  constructor(
    private store: Store<AppState>,
  ) {}

  resolve(route: ActivatedRouteSnapshot): string {
    const id = parseInt(route.params.id, 10);
    let title;
    this.store.select(selectCourse, {id}).subscribe(item => {
        title = item.name;
    });

    return title;
  }
}
