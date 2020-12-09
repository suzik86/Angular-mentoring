import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoursesService } from '../../courses.service';
import Course from '../course/course.types';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, OnChanges, OnDestroy {
  start = 0;
  count = 5;
  sort = 'date';
  @Input() textFragment = '';
  coursesList: Array<Course> = [];
  private subs = new Subscription();

  constructor(
    public coursesService: CoursesService,
  ) { }

  async onSearch(text): Promise<void> {
    this.textFragment = text;
    await this.loadData();
  }

  async ngOnInit(): Promise<void> {
    this.subs.add(this.coursesService.coursesChanged.subscribe(() => this.loadData()));
    await this.loadData();
  }

  ngOnChanges(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    this.coursesList = await this.coursesService.getCourses(this.start, this.count, this.sort, this.textFragment);
  }

  async loadMore(): Promise<void> {
    this.start += 5;
    this.coursesList = this.coursesList.concat(await this.coursesService.getCourses(this.start, this.count, this.sort, this.textFragment));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
