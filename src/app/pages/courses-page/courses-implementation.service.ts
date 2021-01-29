import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import Course from '../../state/courses/courses.types';
import { CoursesService } from './courses.service';

const COURSES_ENDPOINT = 'courses';
const BACKEND_URL = 'http://localhost:3004/';

@Injectable({
  providedIn: 'root',
})
export class CoursesImplementationService  implements CoursesService {
  constructor(private http: HttpClient) { }

  getCourses(start: number, count: number, textFragment?: string, sort = 'date'): Observable<Course[]> {
    const params = new HttpParams()
                .set('start', start.toString())
                .set('count', count.toString())
                .set('sort', sort)
                .set('textFragment', textFragment);

    return this.http.get<Course[]>(BACKEND_URL + COURSES_ENDPOINT, {params});
  }

  createCourse(course: Course): Observable<any> {
    return this.http.post(BACKEND_URL + COURSES_ENDPOINT, course);
  }


  getCourse(courseId: string): Observable<Course> {
    return this.http.get<Course>(`${BACKEND_URL}${COURSES_ENDPOINT}/${courseId}`);
  }

  updateItem(course: Course): Observable<any> {
    return this.http.put(`${BACKEND_URL}${COURSES_ENDPOINT}/${course.id}`, course);
  }

  removeItem(id: number): Observable<any> {
    return this.http.delete(`${BACKEND_URL}${COURSES_ENDPOINT}/${id}`);
  }
}
