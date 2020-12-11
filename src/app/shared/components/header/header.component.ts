import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit, OnDestroy {
  userName: string;
  public userData$: Subscription;
  public userData = null;

  constructor( public authenticationService: AuthenticationService ) { }

  ngOnInit(): void {
    this.userData$ = this.authenticationService.userData$.subscribe(
      userData$ => {
        this.userData = userData$;
        this.userName = `${this.userData?.name.first} ${this.userData?.name.last}`;
      },
    );
  }

  ngOnDestroy(): void {
    this.userData$.unsubscribe();
  }

}
