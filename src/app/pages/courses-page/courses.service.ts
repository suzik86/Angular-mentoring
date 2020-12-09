import { EventEmitter, Injectable } from '@angular/core';
import Course from '../../pages/courses-page/components/course/course.types';

@Injectable({
  providedIn: 'root',
})
export abstract class CoursesService {
  public coursesChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  abstract async getCourses(start: number, count: number, sort?: string, textFragment?: string): Promise<Course[]>;

  abstract async createCourse(course): Promise<void>;

  abstract async getItemById(id): Promise<Course>;

  abstract async updateItem(course): Promise<void>;

  abstract async removeItem(id): Promise<void>;
}
