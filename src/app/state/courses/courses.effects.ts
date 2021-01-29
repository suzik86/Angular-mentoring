import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, switchMap } from 'rxjs/operators';
import { CoursesService } from 'src/app/pages/courses-page/courses.service';
import { AppState } from '..';
import { selectCourses, selectQueryParams } from './courses.selectors';
import { CoursesState } from './courses.state';
import {
  addCourse, CourseLoadedSuccessfully,
  CoursesListLoadedFailed,
  CoursesListLoadedSuccessfully,
  editCourse, LoadCourseAction,
  LoadCoursesAction,
  removeCourse,
} from './couses.actions';

@Injectable()
export class CoursesEffects {
  coursesState$: Observable<CoursesState> = this.store.select(selectCourses);
  coursesState: CoursesState;

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<AppState>,
  ) {
      this.coursesState$.subscribe((state) => {
        this.coursesState = state;
      });
  }

  loadCourses$ = createEffect(() => this.actions$.pipe(
    ofType(LoadCoursesAction),
    withLatestFrom(this.store.pipe(select(selectQueryParams))),
    switchMap(([action, options]) => {
      return this.coursesService.getCourses(options.start, options.count, options.filter)
        .pipe(
          map(courses => CoursesListLoadedSuccessfully({courses})),
          catchError(() => of(CoursesListLoadedFailed)),
        );
    }),
    ),
  );

  loadCourse$ = createEffect(() => this.actions$.pipe(
    ofType(LoadCourseAction),
    switchMap(action => {
      return this.coursesService.getCourse(action.id)
        .pipe(
          map(course => CourseLoadedSuccessfully({course})),
          catchError(() => of(CoursesListLoadedFailed)),
        );
    }),
    ),
  );

  removeCourse$ = createEffect(() => this.actions$.pipe(
    ofType(removeCourse),
    switchMap(action => this.coursesService.removeItem(action.courseId)),
    ),
    {dispatch: false},
  );

  addCourse$ = createEffect(() => this.actions$.pipe(
    ofType(addCourse),
    switchMap(action => this.coursesService.createCourse(action.course)),
    ),
    {dispatch: false},
  );

  editCourse$ = createEffect(() => this.actions$.pipe(
    ofType(editCourse),
    switchMap(action => this.coursesService.updateItem(action.course)),
    ),
    {dispatch: false},
  );
}
