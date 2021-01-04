import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import Course from '../../pages/courses-page/components/course/course.types';

export const selectCourses = createSelector(
  (state: AppState) => state.courses,
  (courses: Array<Course>) => courses,
);
