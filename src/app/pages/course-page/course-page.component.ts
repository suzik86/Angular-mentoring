import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { addCourse, editCourse } from 'src/app/state/courses/couses.actions';
import Course from '../../state/courses/courses.types';
import { selectCourse } from '../../state/courses/courses.selectors';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent implements OnInit {
  course$: Observable<Course>;
  course: Course = null;
  loading = false;
  isEdit = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    ) {
  }

  ngOnInit(): void {
    const id = parseInt(this.activatedRouter.snapshot.params.id, 10);

    // this.coursesService.loading.subscribe(state => this.loading = state);
    if (id) {
      this.course$ = this.store.pipe(select(selectCourse, {id}));
      this.isEdit = true;
      this.course$.subscribe(course => this.course = new Course(course));
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
      this.store.dispatch(editCourse({course: this.course}));
    } else {
      this.store.dispatch(addCourse({course: this.course}));
    }
    this.router.navigate(['/courses']);
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
