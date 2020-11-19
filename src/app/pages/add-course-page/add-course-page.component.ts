import { Component } from '@angular/core';
import { CoursesService } from '../courses-page/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
})
export class AddCoursePageComponent {
  title = '';
  creationDate = '';
  duration = '';
  description = '';

  constructor(private coursesService: CoursesService) {}

  onSave(): void {
    console.log(this.title, 'was created!');
  }

  onCancel(): void {
    console.log('Changes was not saved!');
    this.title = '';
    this.creationDate = '';
    this.duration = '';
    this.description = '';
    this.coursesService.isCourseCreation = false;
  }
}
