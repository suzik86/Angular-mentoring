import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageComponent } from './login-page.component';



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
