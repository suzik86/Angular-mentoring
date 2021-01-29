import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { removeCourse } from 'src/app/state/courses/couses.actions';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.sass'],
})
export class DeleteCourseModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteCourseModalComponent>,
    private store: Store<AppState>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeleteCourse(id): void {
    this.store.dispatch(removeCourse({courseId: id}));
    this.dialogRef.close();
  }

}
