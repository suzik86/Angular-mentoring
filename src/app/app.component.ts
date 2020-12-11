import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './shared/services/authentication.service';
import { CoursesService } from './pages/courses-page/courses.service';
import { SpinnerService } from './spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';
  show = false;
  private subs = new Subscription();

  constructor(
    public authenticationService: AuthenticationService,
    public coursesService: CoursesService,
    public spinnerService: SpinnerService,
  ) {}

  ngOnInit(): void {
    this.subs.add(this.spinnerService.loadingChanged.subscribe((loading: boolean) => setTimeout(() => this.show = loading, 0)));
  }

  get isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
