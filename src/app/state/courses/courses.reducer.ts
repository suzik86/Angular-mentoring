import { createReducer, on } from '@ngrx/store';
import { retrievedCoursesList, addCourse, removeCourse, editCourse, findCourse, retrievedMoreCoursesList } from './couses.actions';
import Course from '../../pages/courses-page/components/course/course.types';

export const initialState: ReadonlyArray<Course> = [];

export const coursesReducer = createReducer(
  initialState,
  on(retrievedCoursesList, (state, { courses }) => [...courses]),
  on(retrievedMoreCoursesList, (state, { courses }) => [...state, ...courses]),
  on(removeCourse, (state, { courseId }) => {
        const newState = [...state];

        return newState.filter((course) => course.id !== courseId);
    }),
  on(addCourse, (state, { course }) => [course]),
  on(editCourse, (state, { course }) => [...state, course]),
);
