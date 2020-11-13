import { Component, DoCheck, Input } from '@angular/core';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CoursesService } from '../../courses.service';
import Course from '../course/course.types';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements DoCheck{
  @Input() searchCourse: string;

  private courses: Course[];

  constructor(
    private filterPipe: FilterPipe,
    private coursesService: CoursesService,
    ) {}

  ngDoCheck(): void {
    this.courses = this.coursesService.list;
  }

  get coursesList(): Array<Course> {
    return this.courses;
  }

  get filteredCourses(): Array<Course> {
    return this.filterPipe.transform(this.courses, this.searchCourse);
  }

  loadMore(): void {
    console.log('Load more courses');
  }

}
