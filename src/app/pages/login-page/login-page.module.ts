import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageComponent } from './login-page.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginPageComponent,
  ],
  exports: [
    CommonModule,
    LoginPageComponent,
    MatButtonModule,
  ],
  providers: [
  ],
})
export class LoginPageModule { }
