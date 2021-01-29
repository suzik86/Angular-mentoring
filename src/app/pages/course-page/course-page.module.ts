import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursePageComponent } from './course-page.component';
import { DateComponent } from './components/date/date.component';
import { DurationComponent } from './components/duration/duration.component';
import { AddCoursePageRoutingModule } from './course-page-routing.module';
import { CoursePageResolve } from './course.resolver';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    AddCoursePageRoutingModule,
  ],
  declarations: [
    CoursePageComponent,
    DateComponent,
    DurationComponent,
  ],
  exports: [
    CoursePageComponent,
  ],
  providers: [CoursePageResolve],
})
export class AddCoursePageModule { }
