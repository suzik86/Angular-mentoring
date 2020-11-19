import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCoursePageComponent } from './add-course-page.component';
import { DateComponent } from './components/date/date.component';
import { DurationComponent } from './components/duration/duration.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
  ],
  declarations: [
    AddCoursePageComponent,
    DateComponent,
    DurationComponent,
  ],
  exports: [
    CommonModule,
    AddCoursePageComponent,
    MatButtonModule,
  ],
  providers: [
  ],
})
export class AddCoursePageModule { }
