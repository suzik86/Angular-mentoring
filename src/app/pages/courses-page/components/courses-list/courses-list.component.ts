import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses.service';
import Course from '../course/course.types';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  coursesList: Array<Course> = [];
  
  constructor(
    public coursesService: CoursesService,
  ) { }

  ngOnInit() {
    this.coursesList = this.coursesService.courses;
    this.coursesService.loadAll();
  }

  loadMore() {
    this.coursesService.loadMoreCourses();    
  }
}
