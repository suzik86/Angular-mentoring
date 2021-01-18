import { createAction, props } from '@ngrx/store';
import Course from '../../pages/courses-page/components/course/course.types';

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

export const retrievedCoursesList = createAction(
  '[Courses List/API] Retrieve Courses Success',
  props<{ courses: Course[] }>(),
);

export const retrievedMoreCoursesList = createAction(
    '[Courses List/API] Retrieve More Courses Success',
    props<{ courses }>(),
  );
