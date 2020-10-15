import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageTopSectionComponent } from './courses-page-top-section.component';

describe('CoursesPageTopSectionComponent', () => {
  let component: CoursesPageTopSectionComponent;
  let fixture: ComponentFixture<CoursesPageTopSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageTopSectionComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
