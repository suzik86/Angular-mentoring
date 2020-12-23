import { Injectable } from '@angular/core';
import Course from '../../pages/courses-page/components/course/course.types';

@Injectable({
  providedIn: 'root',
})
export abstract class CoursesService {
  courses;
  loading;
  textFragment;

  abstract loadAll();

  abstract getCourses(start: number, count: number, sort?: string, textFragment?: string);

  abstract createCourse(course: Course);

  abstract getItemById(id);

  abstract updateItem(course: Course);

  abstract removeItem(id);

  abstract loadMoreCourses();
}
