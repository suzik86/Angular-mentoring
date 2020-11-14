import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Course from './course.types';
import { DeleteCourseModalComponent } from './delete-course-modal/delete-course-modal.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit{
  @Input() course: Course;

  creationDate: string;

  constructor(public dialog:MatDialog ) { }

  ngOnInit(): void {
    this.creationDate = this.course.creationDate;
  }

  openDialog(): void {
    this.dialog.open(DeleteCourseModalComponent, {
      width: '500px',
      data: { id: this.course.id },
    });

  }
}
