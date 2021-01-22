import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesImplementationService } from './courses-implementation.service';
import { CoursePageResolve } from '../course-page/course.resolver';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
  },
  {
    path: 'new',
    data: {
      breadcrumb: 'New Course',
    },
    loadChildren: () => import('../course-page/course-page.module').then(mod => mod.AddCoursePageModule),
  },
  {
    path: ':id',
    data: {
      params: {
        isDynamicRoute: true,
        routeName: 'editableCourseName',
      },
    },
    resolve: {
      title: CoursePageResolve,
    },
    loadChildren: () => import('../course-page/course-page.module').then(mod => mod.AddCoursePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [
    CoursesImplementationService,
  ],
})
export class CoursesPageRoutingModule {
}
