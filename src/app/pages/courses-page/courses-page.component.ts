import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent {
  query: string;

  setQuery(text: string): void {
    this.query = text;
    console.log(this.query);
  }
}
