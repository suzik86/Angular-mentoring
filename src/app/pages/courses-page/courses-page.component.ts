import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state';
import { selectCoursesList, selectLoading, selectQueryParams } from 'src/app/state/courses/courses.selectors';
import { LoadCoursesAction, SetFilterAction, SetOffsetAction } from 'src/app/state/courses/couses.actions';
import Course from '../../state/courses/courses.types';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit{
  loading$: Observable<boolean> = this.store.select(selectLoading);
  coursesList$: Observable<Course[]> = this.store.select(selectCoursesList);

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.store.dispatch(SetFilterAction({filter: params?.textFragment || ''}));
      this.store.dispatch(SetOffsetAction({start: params?.start || 0}));
      this.store.dispatch(LoadCoursesAction());
    });
  }
}
