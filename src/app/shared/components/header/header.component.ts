import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectUser } from 'src/app/state/user/user.selectors';
import { UserState } from 'src/app/state/user/user.state';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  userName: string;
  public userData$: Subscription;
  public userData = null;

  getState: Observable<any>;

  constructor(
    public authenticationService: AuthenticationService,
    private store: Store<UserState>,
  ) {
    this.getState = this.store.select(selectUser);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.userData = state;
      if (this.userData) {
        this.userName = `${this.userData?.name.first} ${this.userData?.name.last}`;
      } else {
        this.userName = '';
      }
    });
  }
}
