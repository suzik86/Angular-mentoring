import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import Course from './components/course/course.types';
import { CoursesService } from './courses.service';

const COURSES_ENDPOINT = 'courses';
const BACKEND_URL = 'http://localhost:3004/';

@Injectable({
  providedIn: 'root',
})
export class CoursesImplementationService  implements CoursesService {
  private _courses = new BehaviorSubject<Course[]>([]);
  private _loading = new BehaviorSubject<boolean>(false);
  private dataStore: { courses: Course[] } = { courses: [] };

  start = 0;
  count = 5;
  sort = 'date';
  textFragment = '';

  constructor(private http: HttpClient) { }

  get courses(): Observable<Course[]> {
    return this._courses.asObservable();
  }

  get loading(): Observable<boolean> {
    return this._loading.asObservable();
  }

  loadAll(): void {
    this._loading.next(true);

    this.getCourses(this.start, this.count, this.sort, this.textFragment).subscribe(
      data => {
        this.dataStore.courses = data;
        this._courses.next(Object.assign({}, this.dataStore).courses);
        this._loading.next(false);
      },
      error => console.log('Could not load courses.'),
    );
  }


  getCourses(start: number, count: number, sort?: string, textFragment?: string): Observable<Course[]> {
    const params = new HttpParams()
                .set('start', start.toString())
                .set('count', count.toString())
                .set('sort', sort)
                .set('textFragment', textFragment);

    return this.http.get<Course[]>(BACKEND_URL + COURSES_ENDPOINT, {params});
  }

  getItemById(id: number | string): void {
    this._loading.next(true);
    this.http.get<Course>(`${BACKEND_URL}${COURSES_ENDPOINT}/${id}`).subscribe(
      data => {
        let notFound = true;

        this.dataStore.courses.forEach((item, index) => {
          if (item.id === data.id) {
            this.dataStore.courses[index] = data;
            notFound = false;
          }
        });

        if (notFound) {
          this.dataStore.courses.push(data);
        }

        this._courses.next(Object.assign({}, this.dataStore).courses);
        this._loading.next(false);
      },
      error => console.log('Could not load course.'),
    );
  }

  createCourse(course: Course): void {
    this._loading.next(true);
    this.http
      .post<Course>(BACKEND_URL + COURSES_ENDPOINT, course)
      .subscribe(
        data => {
          this.dataStore.courses.push(data);
          this._courses.next(Object.assign({}, this.dataStore).courses);
          this._loading.next(false);
        },
        error => console.log('Could not create course.'),
      );
  }

  updateItem(course: Course): void {
    this.http
      .put<Course>(`${BACKEND_URL}${COURSES_ENDPOINT}/${course.id}`, course)
      .subscribe(
        data => {
          this.dataStore.courses.forEach((t, i) => {
            if (t.id === data.id) {
              this.dataStore.courses[i] = data;
            }
          });

          this._courses.next(Object.assign({}, this.dataStore).courses);
        },
        error => console.log('Could not update course.'),
      );
  }

  removeItem(courseId: number): void {
    this._loading.next(true);
    this.http.delete(`${BACKEND_URL}${COURSES_ENDPOINT}/${courseId}`).subscribe(
      response => {
        this.dataStore.courses.forEach((t, i) => {
          if (t.id === courseId) {
            this.dataStore.courses.splice(i, 1);
          }
        });

        this._courses.next(Object.assign({}, this.dataStore).courses);
        this._loading.next(false);
      },
      error => console.log('Could not delete course.'),
    );
  }

  loadMoreCourses(): void {
    this._loading.next(true);
    this.start += 5;
    this.getCourses(this.start, this.count, this.sort, this.textFragment).subscribe(
      data => {
        this.dataStore.courses = this.dataStore.courses.concat(data);
        this._courses.next(Object.assign({}, this.dataStore).courses);
        this._loading.next(false);
      },
      error => console.log('Could not load courses.'),
    );
  }
}
