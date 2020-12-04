import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CoursesService } from '../../courses.service';
import Course from '../course/course.types';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnChanges {
  start = 0;
  count = 5;
  sort = 'date';
  @Input() textFragment = '';
  coursesList: Array<Course> = [];

  constructor(
    public coursesService: CoursesService,
  ) {
    this.coursesService.coursesChanged.subscribe(() => this.loadData());
  }

  async onSearch(text): Promise<void> {
    this.textFragment = text;
    await this.loadData();
  }

  async ngOnInit(): Promise<void> {
    await this.loadData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const item: SimpleChange = changes.item;
    this.loadData();
  }

  async loadData(): Promise<void> {
    this.coursesList = await this.coursesService.getCourses(this.start, this.count, this.sort, this.textFragment);
  }

  async loadMore(): Promise<void> {
    this.start += 5;
    this.coursesList = this.coursesList.concat(await this.coursesService.getCourses(this.start, this.count, this.sort, this.textFragment));
  }

}
