import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesImplementationService } from './courses-implementation.service';

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
    loadChildren: () => import('../add-course-page/add-course-page.module').then(mod => mod.AddCoursePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [CoursesImplementationService],
})
export class CoursesPageRoutingModule {
}
