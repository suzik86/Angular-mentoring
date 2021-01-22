import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoursesService } from 'src/app/pages/courses-page/courses.service';
import { AppState } from '..';
import { selectCourses } from './courses.selectors';
import { CoursesState } from './courses.state';
import { addCourse, CoursesListLoadedFailed, CoursesListLoadedSuccessfuly, editCourse, LoadCoursesAction, LoadCoursesMoreAction, removeCourse, SetFilterCoursesAction } from './couses.actions';

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
    ofType(...[LoadCoursesAction.type, SetFilterCoursesAction.type, LoadCoursesMoreAction.type]),
    mergeMap(() => this.coursesService.getCourses(
      this.coursesState.start, this.coursesState.count, this.coursesState.filter, this.coursesState.sort)
      .pipe(
        map(courses => CoursesListLoadedSuccessfuly({courses})),
        catchError(() => of(CoursesListLoadedFailed)),
      )),
    ),
  );

  removeCourse$ = createEffect(() => this.actions$.pipe(
            ofType(removeCourse),
            mergeMap(action => this.coursesService.removeItem(action.courseId) ),
        ),
        {dispatch: false},
    );

    addCourse$ = createEffect(() => this.actions$.pipe(
            ofType(addCourse),
            mergeMap(action => this.coursesService.createCourse(action.course) ),
        ),
        {dispatch: false},
    );

    editCourse$ = createEffect(() => this.actions$.pipe(
            ofType(editCourse),
            mergeMap(action => this.coursesService.updateItem(action.course) ),
        ),
        {dispatch: false},
    );
}
