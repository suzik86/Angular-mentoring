import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
})
export class DurationComponent {
  @Input() duration: string;
  @Output() update = new EventEmitter();

  onChange(newValue): void {
    this.update.emit(newValue);
  }
}
