import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebStorageModule } from 'ngx-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { SharedModule } from './shared/shared.module';
import { AddCoursePageModule } from './pages/add-course-page/add-course-page.module';
import { AuthModule } from './auth/auth.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { AuthInterceptor } from './auth.interceptor';
import { coursesReducer } from './state/courses/courses.reducer';
import { userReducer } from './state/user/user.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoursesPageModule,
    BrowserAnimationsModule,
    LoginPageModule,
    WebStorageModule,
    AddCoursePageModule,
    AuthModule,
    NotFoundModule,
    HttpClientModule,
    StoreModule.forRoot({ courses: coursesReducer, user: userReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
