import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../../../../shared/pipes/duration.pipe';
import { FilterPipe } from '../../../../shared/pipes/filter.pipe';
import { SharedModule } from '../../../../shared/shared.module';
import { CourseComponent } from './course.component';
import Course from '../../../../state/courses/courses.types';

@Pipe({name: 'pipename'})
class MockPipe implements PipeTransform {
    transform(value: number): number {
      return value;
    }
}

// Test host testing
describe('CourseComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let dialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        TestHostComponent,
        MockPipe,
       ],
      providers: [
        { provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>(['open']) },
        { provide: FilterPipe, useValue: MockPipe },
        { provide: DurationPipe, useValue: MockPipe },
      ],
      imports: [ SharedModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
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
        name: 'Ethical, Professional and Legal Standards in Psychology',
        date: '12/02/2020',
        length: '3 weeks',
        description: 'Ethical issues relevant to teaching, research, and application of psychology are reviewed, with an emphasis on the principles of the American Psychological Associations ethics code and related professional standards and guidelines.',
      };
    }
  }

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  // it('should show course title', () => {
  //     expect(testHostFixture.nativeElement.querySelector('h3').innerText)
  //       .toEqual('Ethical, Professional and Legal Standards in Psychology');
  //   });
});

// Use stand alone testing
describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let courseDe;
  let courseEl;
  let expectedCourse: Course;
  let dialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent, MockPipe ],
      providers: [
        { provide: MatDialog, useValue: jasmine.createSpyObj<MatDialog>(['open']) },
        { provide: FilterPipe, useValue: MockPipe },
        { provide: DurationPipe, useValue: MockPipe },
      ],
      imports: [ SharedModule ],
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
      name: 'Ethical, Professional and Legal Standards in Psychology',
      date: '12/02/2020',
      length: '3 weeks',
      description: 'Ethical issues relevant to teaching, research, and application of psychology are reviewed, with an emphasis on the principles of the American Psychological Associations ethics code and related professional standards and guidelines.',
    };
    component.course = expectedCourse;
    fixture.detectChanges();
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should create', () => {
    expect(CourseComponent).toBeTruthy();
  });

  // it('should render course title', () => {
  //   const h3 = fixture.nativeElement.querySelector('h3');
  //   expect(h3.textContent).toContain('Ethical, Professional and Legal Standards in Psychology');
  // });

  it('should open the dialog', (() => {
    component.openDialog();
    expect(dialog.open.calls.count()).toBe(1);
  }));

});
