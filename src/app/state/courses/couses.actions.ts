import { createAction, props } from '@ngrx/store';
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

export const LoadCoursesAction = createAction(
  '[Courses List/API] Load Courses Action',
);

export const CoursesListLoadedSuccessfully = createAction(
  '[Courses List/API] Courses List Loaded Successfully',
  props<{ courses: Course[] }>(),
);

export const CoursesListLoadedFailed = createAction(
  '[Courses List/API] Courses List Loaded Failed',
);


export const LoadCourseAction = createAction(
  '[Courses List/API] Load Course Action',
  props<{id: string}>(),
);

export const CourseLoadedSuccessfully = createAction(
  '[Courses List/API] Course Loaded Successfully',
  props<{ course: Course }>(),
);

export const CourseLoadedFailed = createAction(
  '[Courses List/API] Course Loaded Failed',
);

export const SetFilterAction = createAction(
  '[Courses List/API] Set Filter Action',
  props<{filter: string}>(),
);

export const SetOffsetAction = createAction(
  '[Courses List/API] Set Offset',
  props<{start?: number}>(),
);
