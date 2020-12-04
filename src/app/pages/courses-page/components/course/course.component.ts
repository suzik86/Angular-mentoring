import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Course from './course.types';
import { DeleteCourseModalComponent } from './delete-course-modal/delete-course-modal.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit{
  @Input() course: Course;

  creationDate: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.creationDate = this.course.date;
  }

  openDialog(): void {
    this.dialog.open(DeleteCourseModalComponent, {
      width: '500px',
      data: { id: this.course.id },
    });
  }

  onEdit(): void {
    this.router.navigate(['/courses/' + this.course.id]);
  }
}
