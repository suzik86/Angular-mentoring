import { Component, Input, OnInit } from '@angular/core';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import Course from '../course/course.types';
import { courses } from './mocked-courses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit{
  @Input() searchCourse: string;

  courses: Course[];

  constructor(private filterPipe: FilterPipe) {}

  ngOnInit(): void {
    this.courses = courses;
  }

  get filteredCourses(): Array<Course> {
    return this.filterPipe.transform(this.courses, this.searchCourse);
  }

  onDeleteCourse(id): void {
    console.log(id);
  }

  loadMore(): void {
    console.log('Load more courses');
  }

}
