import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActionsPanelComponent } from './components/actions-panel/actions-panel.component';
import { CourseComponent } from './components/course/course.component';
import { DeleteCourseModalComponent } from './components/course/delete-course-modal/delete-course-modal.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesService } from './courses.service';
import { CoursesImplementationService } from './courses-implementation.service';
import { CoursesPageRoutingModule } from './courses-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    CoursesPageRoutingModule,
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
    { provide: CoursesService, useClass: CoursesImplementationService },
  ],
})
export class CoursesPageModule { }
