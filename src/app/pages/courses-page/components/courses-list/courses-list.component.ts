import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesService } from '../../courses.service';
import Course from '../course/course.types';
import { selectCourses } from '../../../../state/courses/courses.selectors';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  coursesList: Observable<Course[]>;

  constructor(
    public coursesService: CoursesService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.coursesList = this.store.pipe(select(selectCourses));
  }

  loadMore(): void {
    this.coursesService.loadMoreCourses();
  }
}
