import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CoursesService } from '../courses-page/courses.service';
import Course from '../../pages/courses-page/components/course/course.types';
import { selectCourses } from '../../state/courses/courses.selectors';


@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
})
export class AddCoursePageComponent implements OnInit {
  courses: Observable<Course[]>;
  course: Course = null;

  isEdit = false;
  loading = false;

  constructor(
    private coursesService: CoursesService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private store: Store,
    ) {
  }

  ngOnInit(): void {
    const id = parseInt(this.activatedRouter.snapshot.params.id, 10);
    this.courses = this.store.pipe(select(selectCourses));
    this.coursesService.loading.subscribe(state => this.loading = state);
    if (id) {
      this.isEdit = true;
      this.courses.subscribe(courses => {
          this.course = new Course(courses.find(item => item.id === id));
        },
      );
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
