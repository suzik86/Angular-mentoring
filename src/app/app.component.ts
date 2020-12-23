import { Component } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { CoursesService } from './pages/courses-page/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  
  constructor(
    public authenticationService: AuthenticationService,
    public coursesService: CoursesService,
  ) { }

  get isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated;
  }

}
