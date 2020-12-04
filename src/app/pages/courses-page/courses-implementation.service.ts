import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import Course from './components/course/course.types';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesImplementationService  implements CoursesService {
  private courses: any = [];
  public coursesChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  async getCourses(start: number, count: number, sort?: string, textFragment?: string): Promise<Course[]> {
    const params = new HttpParams()
                .set('start', start.toString())
                .set('count', count.toString())
                .set('sort', sort)
                .set('textFragment', textFragment);

    return await this.http.get<Course[]>('http://localhost:3004/courses', {params}).toPromise();
  }

  async createCourse(course): Promise<void> {
    await this.http.post<void>('http://localhost:3004/courses/', course).toPromise();
  }

  async getItemById(id): Promise<Course> {
    return await this.http.get<Course>('http://localhost:3004/courses/' + id).toPromise();
  }

  async updateItem(course): Promise<void> {
    await this.http.patch<void>('http://localhost:3004/courses/' + course.id, course).toPromise();
  }

  async removeItem(id): Promise<void> {
    await this.http.delete<void>('http://localhost:3004/courses/' + id).toPromise();
    this.coursesChanged.emit(true);
  }
}
