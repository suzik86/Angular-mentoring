import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class SpinnerService {
  public loadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeLoadingStatus(value): void {
    this.loadingChanged.emit(value);
  }

}
