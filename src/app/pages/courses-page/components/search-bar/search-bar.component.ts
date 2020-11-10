import { Component,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchCourses = new EventEmitter();

  searchValue = '';

  onClick(serchText: string): void {
      this.searchCourses.emit(serchText);
  }

}
