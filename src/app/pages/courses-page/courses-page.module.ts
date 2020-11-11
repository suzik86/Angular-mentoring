import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ActionsPanelComponent } from './components/actions-panel/actions-panel.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CoursesPageComponent } from './courses-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
   ],
  declarations: [
    ActionsPanelComponent,
    CourseComponent,
    CoursesListComponent,
    SearchBarComponent,
    CoursesPageComponent,
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
  providers: [],
})
export class CoursesPageModule { }
