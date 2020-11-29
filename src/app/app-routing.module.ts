import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AddCoursePageComponent } from './pages/add-course-page/add-course-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CourseComponent } from './pages/courses-page/components/course/course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
    data: {
      breadcrumb: 'asdasd',
    },
  },
  {
    path: 'login',
    data: {
      breadcrumb: 'Login',
    },
    component: LoginPageComponent,
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Courses',
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: 'List',
        },
        canActivate: [AuthGuard],
        component: CoursesPageComponent,
      },
      {
        path: 'new',
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'New',
        },
        component: AddCoursePageComponent,
      },
      {
        path: ':id',
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Edit',
        },
        component: AddCoursePageComponent,
      },
    ],
  },
  {
    path: '404',
    data: {
      breadcrumb: 'Page not found',
    },
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
