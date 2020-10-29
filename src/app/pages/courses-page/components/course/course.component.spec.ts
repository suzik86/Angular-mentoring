import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import Course from './course.types';

describe('CourseComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  @Component({
    selector: `host-component`,
    template: `<app-course [course]="course"></app-course>`
  })
  class TestHostComponent implements OnInit{
    course: Course;

    ngOnInit(): void {
      this.course = {
        id: 3,
        title: 'Ethical, Professional and Legal Standards in Psychology ',
        creationDate: '12/02/2020',
        duration: '3 weeks',
        description: 'Ethical issues relevant to teaching, research, and application of psychology are reviewed, with an emphasis on the principles of the American Psychological Associations ethics code and related professional standards and guidelines.',
      };
    }
  }

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('raises the deleteCourse event when clicked', () => {
    const comp = new CourseComponent();
    const course: Course = {
      id: 3,
      title: 'Ethical, Professional and Legal Standards in Psychology ',
      creationDate: '12/02/2020',
      duration: '3 weeks',
      description: 'Ethical issues relevant to teaching, research, and application of psychology are reviewed, with an emphasis on the principles of the American Psychological Associations ethics code and related professional standards and guidelines.',
    };
    comp.course = course;

    comp.deleteCourse.subscribe((selectedCourse: Course) => expect(selectedCourse).toEqual(course));
    comp.onClick(course);
  });

  // it('should show TEST INPUT', () => {
    //   expect(testHostFixture.nativeElement.querySelector('div').innerText).toEqual('TEST INPUT');
    // });

    // it('should render button title', () => {
    //   const fixture = TestBed.createComponent(CourseComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.nativeElement;
    //   expect(compiled.querySelector('.course .block-wrapper .btns .delete-btn').textContent).toContain('Delete');
    // });
});
