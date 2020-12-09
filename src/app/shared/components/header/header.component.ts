import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit{
  userName: string;

  constructor(
    public authenticationService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.userName = `${this.authenticationService.currentUser?.name.first} ${this.authenticationService.currentUser?.name.last}`;
  }

}
