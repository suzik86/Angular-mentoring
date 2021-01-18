import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit{
  query = '';
  loading = false;

  constructor(
    public coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.coursesService.loading.subscribe(state => this.loading = state);
    this.coursesService.loadAll();
  }

  setQuery(text: string): void {
    this.query = text;
  }
}
