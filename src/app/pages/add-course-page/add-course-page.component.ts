import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses-page/courses.service';
import Course from '../../pages/courses-page/components/course/course.types';


@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
})
export class AddCoursePageComponent {
  course: Course = null;

  isEdit = false;

  constructor(
    private coursesService: CoursesService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    ) {
      if (activatedRouter.snapshot.paramMap.get('id')) {

        this.isEdit = true;
        const id = parseInt(activatedRouter.snapshot.paramMap.get('id'), 10);
        this.course = this.coursesService.getItemById(id);
      } else {
        this.course = new Course();
      }
  }

  onSave(): void {
    if (this.isEdit) {
      this.coursesService.updateItem(this.course);
    } else {
      this.coursesService.createCourse(this.course);
    }
    this.router.navigate(['/courses']);
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
