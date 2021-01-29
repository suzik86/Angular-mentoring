import { createReducer, on } from '@ngrx/store';
import {
  addCourse,
  removeCourse,
  editCourse,
  LoadCoursesAction,
  SetOffsetAction,
  SetFilterAction,
  CoursesListLoadedSuccessfully,
  CoursesListLoadedFailed,
  LoadCourseAction,
  CourseLoadedSuccessfully,
  CourseLoadedFailed,
} from './couses.actions';
import { CoursesState } from './courses.state';
import Course from './courses.types';

export const initialState: CoursesState = {
  list: [], count: 5, start: 0, filter: '', sort: 'date', loading: false, courseLoading: false, selectedCourse: {
    id: null,
    name: '',
    date: null,
    length: '',
    description: '',
  } as Course,
};

export const coursesReducer = createReducer(
  initialState,
  on(LoadCoursesAction, (state) => ({...state, loading: true})),
  on(CoursesListLoadedSuccessfully, (state, {courses}) => ({...state, list: courses, loading: false})),
  on(CoursesListLoadedFailed, (state) => ({...state, loading: false})),
  on(LoadCourseAction, (state) => ({...state, courseLoading: true})),
  on(CourseLoadedSuccessfully, (state, {course}) => ({...state, selectedCourse: course, courseLoading: false})),
  on(CourseLoadedFailed, (state) => ({...state, courseLoading: false})),
  on(removeCourse, (state, {courseId}) => {
    const newState = {...state};
    newState.list = newState.list.filter((course) => course.id !== courseId);

    return newState;
  }),
  on(addCourse, (state, {course}) => ({...state, list: [course]})),
  on(editCourse, (state, {course}) => ({...state, list: [state.list, course]})),

  on(SetFilterAction, (state, {filter}) => ({...state, filter})),
  on(SetOffsetAction, (state, {start}) => {
    return {...state, start: start ?? state.start + 5};
  }),
);
