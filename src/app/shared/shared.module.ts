import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { SetCourseBorderDirective } from './directives/set-course-border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationImplementationService } from './services/authentication-implementation.service';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
   ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SetCourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    UserComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SetCourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    UserComponent,
    CommonModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [
    FilterPipe,
    { provide: AuthenticationService, useClass: AuthenticationImplementationService },
  ],
})
export class SharedModule { }
