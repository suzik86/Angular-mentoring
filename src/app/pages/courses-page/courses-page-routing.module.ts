import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesImplementationService } from './courses-implementation.service';
import { CourseResolver } from './course.resolver';
import Course from './components/course/course.types';

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
    loadChildren: () => import('../add-course-page/add-course-page.module').then(mod => mod.AddCoursePageModule),
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
      course: CourseResolver,
    },
    loadChildren: () => import('../add-course-page/add-course-page.module').then(mod => mod.AddCoursePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [
    CoursesImplementationService,
    {
      provide: 'courseResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Course,
    },
  ],
})
export class CoursesPageRoutingModule {
}
