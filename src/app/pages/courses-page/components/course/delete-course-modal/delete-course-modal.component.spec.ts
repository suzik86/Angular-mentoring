import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourseModalComponent } from './delete-course-modal.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('DeleteCourseModalComponent', () => {
  let component: DeleteCourseModalComponent;
  let fixture: ComponentFixture<DeleteCourseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCourseModalComponent ],
      providers: [
         {
           provide: MatDialogRef,
           useValue: {}
         },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
