import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import Course from './components/course/course.types';
import { CoursesService } from './courses.service';
import { retrievedCoursesList, addCourse, removeCourse, editCourse, retrievedMoreCoursesList } from '../../state/courses/couses.actions';

const COURSES_ENDPOINT = 'courses';
const BACKEND_URL = 'http://localhost:3004/';

@Injectable({
  providedIn: 'root',
})
export class CoursesImplementationService  implements CoursesService {
  private _loading = new BehaviorSubject<boolean>(false);

  start = 0;
  count = 5;
  sort = 'date';
  textFragment = '';

  constructor(private http: HttpClient, private store: Store) { }


  get loading(): Observable<boolean> {
    return this._loading.asObservable();
  }

  loadAll(): void {
    this._loading.next(true);
    this.start = 0;

    this.getCourses(this.start, this.count, this.sort, this.textFragment).subscribe(
      courses => {
        this.store.dispatch(retrievedCoursesList({ courses }));
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

  createCourse(course: Course): void {
    this._loading.next(true);
    this.http
      .post<Course>(BACKEND_URL + COURSES_ENDPOINT, course)
      .subscribe(
        data => {
          this.store.dispatch(addCourse({ course }));
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
          this.store.dispatch(editCourse({ course }));
        },
        error => console.log('Could not update course.'),
      );
  }

  removeItem(id: number): void {
    this._loading.next(true);
    this.http.delete(`${BACKEND_URL}${COURSES_ENDPOINT}/${id}`).subscribe(
      response => {
        this.store.dispatch(removeCourse({ courseId: id }));
        this._loading.next(false);
      },
      error => console.log('Could not delete course.'),
    );
  }

  loadMoreCourses(): void {
    this._loading.next(true);
    this.start += 5;
    this.getCourses(this.start, this.count, this.sort, this.textFragment).subscribe(
      courses => {
        this.store.dispatch(retrievedMoreCoursesList({ courses }));
        this._loading.next(false);
      },
      error => console.log('Could not load courses.'),
    );
  }
}
