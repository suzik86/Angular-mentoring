import { CoursesState } from './courses/courses.state';
import { UserState } from './user/user.state';

export interface AppState {
    courses: CoursesState;
    user: UserState;
}
