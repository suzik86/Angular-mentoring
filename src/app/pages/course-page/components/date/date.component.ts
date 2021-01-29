import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  @Input() creationDate: string;
  @Output() update = new EventEmitter();

  onChange(newValue): void {
    this.update.emit(newValue);
  }
}
