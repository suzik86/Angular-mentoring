import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ActionsPanelComponent } from './pages/courses-page/components/actions-panel/actions-panel.component';
import { CourseComponent } from './pages/courses-page/components/course/course.component';
import { CoursesListComponent } from './pages/courses-page/components/courses-list/courses-list.component';
import { SearchBarComponent } from './pages/courses-page/components/search-bar/search-bar.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { UserComponent } from './shared/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CoursesListComponent,
    CoursesPageComponent,
    ActionsPanelComponent,
    CourseComponent,
    UserComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
