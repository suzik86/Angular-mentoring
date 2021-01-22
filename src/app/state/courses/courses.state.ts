import Course from './courses.types';

export interface CoursesState {
  list: Course[];
  count: number;
  start: number;
  sort: string;
  loading: boolean;
  filter: string;
}
