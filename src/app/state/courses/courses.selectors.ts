import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CoursesState } from './courses.state';
import Course from './courses.types';


export const selectCourses = (state: AppState) => state.courses;

export const selectCoursesList = createSelector(
  selectCourses,
  (state: CoursesState) => state.list,
);

export const selectCourse = createSelector(
  selectCoursesList,
  (list: Course[], props) => list.find((course: Course) => course.id === props.id),
);
