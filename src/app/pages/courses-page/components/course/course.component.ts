import { Component, EventEmitter, Input, Output } from '@angular/core';
import Course from './course.types';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter();

  onClick(id: number): void {
    this.deleteCourse.emit(id);
  }
}
