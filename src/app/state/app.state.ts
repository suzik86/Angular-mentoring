import Course from '../pages/courses-page/components/course/course.types';
import User from '../shared/components/user/user.types';

export interface AppState {
  courses: ReadonlyArray<Course>;
  user: User;
}
