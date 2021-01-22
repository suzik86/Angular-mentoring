import { createAction, props } from '@ngrx/store';
import { CoursesState } from './courses.state';
import Course from './courses.types';

export const addCourse = createAction(
  '[Courses List] Add Course',
  props<{ course: Course }>(),
);

export const removeCourse = createAction(
  '[Courses List] Remove Course',
  props<{ courseId }>(),
);

export const editCourse = createAction(
    '[Courses List] Edit Course',
    props<{ course: Course }>(),
);

export const findCourse = createAction(
    '[Courses List] Find Course',
    props<{ courseId }>(),
);

export const LoadCoursesAction = createAction(
  '[Courses List/API] Retrieve Courses',
);

export const SetFilterCoursesAction = createAction(
  '[Courses List/API] Set Courses filter',
  props<{ filter: string }>(),
);

export const FilterCoursesUpdatedAction = createAction(
  '[Courses List/API] Courses Filter was updated',
  props<{ state: CoursesState }>(),
);

export const CoursesListLoadedSuccessfuly = createAction(
  '[Courses List/API] Retrieved Courses Success',
  props<{ courses: Course[] }>(),
);

export const CoursesListLoadedFailed = createAction(
  '[Courses List/API] Retrieved Courses Fail',
);

export const LoadCoursesMoreAction = createAction(
  '[Courses List/API] Retrieve More Courses',
);

export const CoursesListMoreLoadedSuccessfuly = createAction(
  '[Courses List/API] Retrieved Courses More Success',
  props<{ courses: Course[] }>(),
);

export const CoursesListMoreLoadedFailed = createAction(
  '[Courses List/API] Retrieved Courses More Fail',
);
