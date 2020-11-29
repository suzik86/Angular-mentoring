import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss'],
})
export class ActionsPanelComponent {
  @Output() searchTextUp = new EventEmitter<string>();

  searchText: string;

  constructor(private router: Router) {}

  onSearchCourses(text: string): void{
    this.searchText = text;
    this.searchTextUp.emit(text);
  }

  onAddCourse(): void {
    this.router.navigate(['/courses/new']);
  }

}
