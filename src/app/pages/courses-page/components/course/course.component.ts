import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Course from './course.types';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit{
  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter();
  creationDate: string | number;

  ngOnInit(): void {
    this.creationDate = this.course.creationDate;
  }

  onClick(id: number): void {
    this.deleteCourse.emit(id);
  }
}
