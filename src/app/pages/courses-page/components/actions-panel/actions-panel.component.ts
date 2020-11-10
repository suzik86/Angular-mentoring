import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss'],
})
export class ActionsPanelComponent {
  @Output() searchTextUp = new EventEmitter<string>();

  searchText: string;

  onSearchCourses(text: string): void{
    this.searchText = text;
    this.searchTextUp.emit(text);
  }

}
