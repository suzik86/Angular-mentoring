import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log message after click', () => {
    const consoleSpy = spyOn(console, 'log');
    component.onDeleteCourse(1);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should log message after click', () => {
    const consoleSpy = spyOn(console, 'log');
    component.loadMore();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
