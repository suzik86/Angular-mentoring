import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
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
    loadChildren: () => import('../app/pages/courses-page/courses-page.module').then(mod => mod.CoursesPageModule),
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
