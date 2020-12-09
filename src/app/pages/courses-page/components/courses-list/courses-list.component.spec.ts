import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from '../../../../shared/pipes/filter.pipe';
import Course from '../course/course.types';
import { CoursesListComponent } from './courses-list.component';


@Pipe({name: 'pipename'})
class MockPipe implements PipeTransform {
    transform(items: Array<Course>, searchText: string): Array<Course> {
      return items.filter(i => i.name === searchText);
    }
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, MockPipe ],
      providers: [
        { provide: FilterPipe, useValue: MockPipe },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should log message after click', () => {
  //   const consoleSpy = spyOn(console, 'log');
  //   component.loadMore();
  //   expect(consoleSpy).toHaveBeenCalled();
  // });
});
