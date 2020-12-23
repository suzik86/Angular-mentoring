import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from '../../pages/courses-page/components/course/course.types';

@Injectable({
  providedIn: 'root',
})
export abstract class CoursesService {
  courses;
  loading;
  textFragment;

  abstract loadAll(): void;

  abstract getCourses(start: number, count: number, sort?: string, textFragment?: string): Observable<Course[]>;

  abstract createCourse(course: Course): void;

  abstract getItemById(id): void;

  abstract updateItem(course: Course): void;

  abstract removeItem(id): void;

  abstract loadMoreCourses(): void;
}
