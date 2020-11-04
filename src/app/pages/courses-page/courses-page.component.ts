import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent {
  searchText: string;

  getText(text: string): void {
    this.searchText = text;
    console.log(this.searchText);
  }
}
