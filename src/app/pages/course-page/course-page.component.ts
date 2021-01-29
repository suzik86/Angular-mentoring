import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { addCourse, editCourse, LoadCourseAction } from 'src/app/state/courses/couses.actions';
import Course from '../../state/courses/courses.types';
import { selectCourse, selectLoading } from '../../state/courses/courses.selectors';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent implements OnInit, OnDestroy {
  course$: Observable<Course> = this.store.pipe(select(selectCourse));
  loading$: Observable<boolean> = this.store.pipe(select(selectLoading));
  updatedCourse: Course;
  isEdit = false;
  destroy$ = new Subject();

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    ) {
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    if (id) {
      this.isEdit = true;
      this.store.dispatch(LoadCourseAction({id}));
    }
    this.course$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(course => this.updatedCourse = this.isEdit ? {...course} :
      { id: null, name: null, date: null, length: null, description: null });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.isEdit = false;
  }

  changeDuration(newValue): void {
    this.updatedCourse.length = newValue;
  }

  changeDate(newValue): void {
    this.updatedCourse.date = newValue;
  }

  onSave(): void {
    if (this.isEdit) {
      this.store.dispatch(editCourse({course: this.updatedCourse}));
    } else {
      this.store.dispatch(addCourse({course: this.updatedCourse}));
    }
    this.router.navigate(['/courses']);
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
