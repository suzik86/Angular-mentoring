import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SetCourseBorderDirective } from './directives/set-course-border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { UserComponent } from './components/user/user.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SetCourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    UserComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SetCourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    UserComponent,
    CommonModule,
    FormsModule
  ],
  providers: [
    FilterPipe,
  ],
})
export class SharedModule { }
