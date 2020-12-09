import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses-page/courses.service';
import Course from '../../pages/courses-page/components/course/course.types';


@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
})
export class AddCoursePageComponent implements OnInit {
  course: Course = null;

  isEdit = false;

  constructor(
    private coursesService: CoursesService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.course = this.activatedRouter.snapshot.data.course;
    if (this.course) {
      this.isEdit = true;
      localStorage.setItem('editableCourseName', this.course.name);
    } else {
      this.course = new Course();
    }
  }

  changeDuration(newValue): void {
    this.course.length = newValue;
  }

  changeDate(newValue): void {
    this.course.date = newValue;
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
