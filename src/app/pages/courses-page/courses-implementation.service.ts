import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import Course from './components/course/course.types';
import { CoursesService } from './courses.service';

const COURSES_ENDPOINT = 'courses';
const BACKEND_URL = 'http://localhost:3004/';

@Injectable({
  providedIn: 'root',
})
export class CoursesImplementationService  implements CoursesService {
  public coursesChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  async getCourses(start: number, count: number, sort?: string, textFragment?: string): Promise<Course[]> {
    const params = new HttpParams()
                .set('start', start.toString())
                .set('count', count.toString())
                .set('sort', sort)
                .set('textFragment', textFragment);

    return await this.http.get<Course[]>(BACKEND_URL + COURSES_ENDPOINT, {params}).toPromise();
  }

  async createCourse(course): Promise<void> {
    await this.http.post<void>(BACKEND_URL + COURSES_ENDPOINT, course).toPromise();
  }

  async getItemById(id): Promise<Course> {
    return await this.http.get<Course>(`${BACKEND_URL}${COURSES_ENDPOINT}/${id}`).toPromise();
  }

  async updateItem(course): Promise<void> {
    await this.http.patch<void>(`${BACKEND_URL}${COURSES_ENDPOINT}/${course.id}`, course).toPromise();
  }

  async removeItem(id): Promise<void> {
    await this.http.delete<void>(`${BACKEND_URL}${COURSES_ENDPOINT}/${id}`).toPromise();
    this.coursesChanged.emit(true);
  }
}
