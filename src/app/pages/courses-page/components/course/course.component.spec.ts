import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { CourseComponent } from './course.component';
import Course from './course.types';

// Test host testing
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
    selector: `app-host-component`,
    template: `<app-course [course]="course"></app-course>`,
  })
  class TestHostComponent implements OnInit{
    course: Course;

    ngOnInit(): void {
      this.course = {
        id: 3,
        title: 'Ethical, Professional and Legal Standards in Psychology',
        creationDate: '12/02/2020',
        duration: '3 weeks',
        description: 'Ethical issues relevant to teaching, research, and application of psychology are reviewed, with an emphasis on the principles of the American Psychological Associations ethics code and related professional standards and guidelines.',
      };
    }
  }

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should show course title', () => {
      expect(testHostFixture.nativeElement.querySelector('h3').innerText)
        .toEqual('Ethical, Professional and Legal Standards in Psychology');
    });
});

// Use stand alone testing
describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let courseDe;
  let courseEl;
  let expectedCourse: Course;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    courseDe = fixture.debugElement.query(By.css('.course'));
    courseEl = courseDe.nativeElement;
    expectedCourse = {
      id: 3,
      title: 'Ethical, Professional and Legal Standards in Psychology',
      creationDate: '12/02/2020',
      duration: '3 weeks',
      description: 'Ethical issues relevant to teaching, research, and application of psychology are reviewed, with an emphasis on the principles of the American Psychological Associations ethics code and related professional standards and guidelines.',
    };
    component.course = expectedCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(CourseComponent).toBeTruthy();
  });

  it('should render course title', () => {
    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toContain('Ethical, Professional and Legal Standards in Psychology');
  });

  // it('raises the deleteCourse event when clicked', () => {
  //   let selectedId: number;
  //   let deleteBtnDe;
  //   deleteBtnDe = fixture.debugElement.query(By.css('.delete-btn'));

  //   component.deleteCourse.subscribe((id: number) => selectedId = id);
  //   deleteBtnDe.triggerEventHandler('click', selectedId);
  //   expect(selectedId).toBe(expectedCourse.id);

  // });

});
