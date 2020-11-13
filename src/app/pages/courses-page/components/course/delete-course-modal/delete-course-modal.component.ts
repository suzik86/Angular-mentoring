import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesService } from '../../../courses.service';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.sass']
})
export class DeleteCourseModalComponent {
  constructor(
    private coursesService: CoursesService,
    public dialogRef: MatDialogRef<DeleteCourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeleteCourse(id): void {
    this.coursesService.removeItem(id);
    this.dialogRef.close();
  }

}
