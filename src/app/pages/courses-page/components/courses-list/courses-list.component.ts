import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import {
  LoadCoursesAction,
  SetOffsetAction,
} from 'src/app/state/courses/couses.actions';
import Course from '../../../../state/courses/courses.types';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() coursesList: Course[] = [];

  constructor(
    private store: Store<AppState>,
  ) { }

  loadMore(): void {
    this.store.dispatch(SetOffsetAction({}));
    this.store.dispatch(LoadCoursesAction());
  }
}
