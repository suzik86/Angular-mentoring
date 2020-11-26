import { Component, EventEmitter, Output } from '@angular/core';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss'],
})
export class ActionsPanelComponent {
  @Output() searchTextUp = new EventEmitter<string>();

  searchText: string;

  constructor(private coursesService: CoursesService) {}

  onSearchCourses(text: string): void{
    this.searchText = text;
    this.searchTextUp.emit(text);
  }

  onAddCourse(): void {
    this.coursesService.isCourseCreation = true;
  }

}
