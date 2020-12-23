import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss'],
})
export class ActionsPanelComponent {
  constructor(private router: Router) {}

  onAddCourse(): void {
    this.router.navigate(['/courses/new']);
  }

}
