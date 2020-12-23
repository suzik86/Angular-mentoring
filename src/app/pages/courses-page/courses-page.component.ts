import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent {
  query = '';
  loading = false;

  constructor(
    public coursesService: CoursesService,
  ) { }

  ngOnInit() {
    this.coursesService.loading.subscribe(state => this.loading = state);
  }

  setQuery(text: string): void {
    this.query = text;
  }
}
