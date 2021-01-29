import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CoursesState } from './courses.state';
import Course from './courses.types';


export const selectCourses = (state: AppState) => state.courses;

export const selectCoursesList = createSelector(
  selectCourses,
  (state: CoursesState) => state.list,
);

export const selectLoading = createSelector(
  selectCourses,
  (state: CoursesState) => state.loading,
);

export const selectTextFragment = createSelector(
  selectCourses,
  (state: CoursesState) => state.filter,
);

export const selectCount = createSelector(
  selectCourses,
  (state: CoursesState) => state.count,
);

export const selectOffset = createSelector(
  selectCourses,
  (state: CoursesState) => state.start,
);

export const selectQueryParams = createSelector(
  selectTextFragment, selectCount, selectOffset,
  (filter: string, count: number, start: number) => {
    return {
      filter,
      count,
      start,
    };
  });

export const selectCourse = createSelector(
  selectCourses,
  (state: CoursesState) => state.selectedCourse,
);
