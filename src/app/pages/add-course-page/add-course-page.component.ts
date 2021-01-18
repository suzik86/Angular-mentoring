import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
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
  form: FormGroup;

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
    this.form = new FormGroup({
      name: new FormControl(this.course.name, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(this.course.description, [Validators.maxLength(500)]),
      date: new FormControl(this.course.date, [Validators.required]),
      length: new FormControl(this.course.length),
      authors: new FormControl(this.course.authors),
    });
  }

  get nameControl(): AbstractControl {
    return this.form.get('name');
  }

  get dateControl(): AbstractControl {
    return this.form.get('date');
  }

  get durationControl(): AbstractControl {
    return this.form.get('duration');
  }

  onSave(): void {
    this.course = Object.assign(this.course, this.form.value);
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
