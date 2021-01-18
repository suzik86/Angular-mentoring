import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCoursePageComponent } from './add-course-page.component';
import { DateComponent } from './components/date/date.component';
import { DurationComponent } from './components/duration/duration.component';
import { AddCoursePageRoutingModule } from './add-course-page-routing.module';
import { AuthorsComponent } from './components/authors/authors.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    AddCoursePageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    AddCoursePageComponent,
    DateComponent,
    DurationComponent,
    AuthorsComponent,
  ],
  exports: [
    AddCoursePageComponent,
  ],
})
export class AddCoursePageModule { }
