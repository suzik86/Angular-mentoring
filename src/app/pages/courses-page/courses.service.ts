import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Course from '../../state/courses/courses.types';

@Injectable({
  providedIn: 'root',
})
export abstract class CoursesService {
  abstract getCourses(start: number, count: number, textFragment?: string, sort?: string): Observable<Course[]>;
  abstract createCourse(course: Course): Observable<any>;
  abstract updateItem(course: Course): Observable<any>;
  abstract removeItem(id): Observable<any>;
}
