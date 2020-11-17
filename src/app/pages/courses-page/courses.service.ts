import { Injectable } from '@angular/core';
import Course from '../../pages/courses-page/components/course/course.types';

@Injectable({
  providedIn: 'root',
})
export abstract class CoursesService {

  abstract get list(): Array<Course>;

  abstract createCourse(course): void;

  abstract getItemById(id): Course;

  abstract updateItem(course): void;

  abstract removeItem(id): void;
}
