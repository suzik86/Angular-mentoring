import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state';
import { selectCoursesList } from 'src/app/state/courses/courses.selectors';
import { LoadCoursesAction } from 'src/app/state/courses/couses.actions';
import Course from '../../state/courses/courses.types';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit{
  query = '';
  loading = false;
  coursesList$: Observable<Course[]> = this.store.select(selectCoursesList);

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(LoadCoursesAction());
  }
}
