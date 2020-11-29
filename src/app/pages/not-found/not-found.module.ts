import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CommonModule,
    NotFoundComponent,
  ],
})
export class NotFoundModule { }
