import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ActionsPanelComponent } from './components/actions-panel/actions-panel.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesService } from './courses.service';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DeleteCourseModalComponent } from './components/course/delete-course-modal/delete-course-modal.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
   ],
  declarations: [
    ActionsPanelComponent,
    CourseComponent,
    CoursesListComponent,
    SearchBarComponent,
    CoursesPageComponent,
    DeleteCourseModalComponent,
  ],
  exports: [
    ActionsPanelComponent,
    CourseComponent,
    CoursesListComponent,
    SearchBarComponent,
    CoursesPageComponent,
    CommonModule,
    FormsModule,
  ],
  providers: [
    CoursesService,
  ],
})
export class CoursesPageModule { }
