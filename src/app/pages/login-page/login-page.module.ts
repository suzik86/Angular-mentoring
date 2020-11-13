import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
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
