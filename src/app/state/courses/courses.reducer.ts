import { createReducer, on } from '@ngrx/store';
import { addCourse, removeCourse, editCourse, CoursesListLoadedSuccessfuly, CoursesListMoreLoadedSuccessfuly, SetFilterCoursesAction, LoadCoursesMoreAction, LoadCoursesAction } from './couses.actions';
import { CoursesState } from './courses.state';

export const initialState: CoursesState = {list: [], count: 5, start: 0, filter: '', sort: 'date', loading: false};

export const coursesReducer = createReducer(
  initialState,
  on(CoursesListLoadedSuccessfuly, (state, {courses}) => ({...state, list: courses})),
  on(CoursesListMoreLoadedSuccessfuly, (state, {courses}) => ({...state, list: courses})),
  on(SetFilterCoursesAction, (state, {filter}) => ({...state, filter})),
  on(LoadCoursesMoreAction, (state) => ({...state, count: state.count + 5})),
  on(removeCourse, (state, {courseId}) => {
        const newState = {...state};
        newState.list = newState.list.filter((course) => course.id !== courseId);

        return newState;
    }),
  on(addCourse, (state, { course }) => ({...state, list: [course]})),
  on(editCourse, (state, { course }) => ({...state, list: [state.list, course]})),
  on(LoadCoursesAction, (state) => ({...state, count: 5, filter: ''})),
);
