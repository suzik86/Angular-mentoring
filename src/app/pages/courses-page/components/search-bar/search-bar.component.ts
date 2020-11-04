import { Component,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchValue = '';
  @Output() searchTextOut = new EventEmitter();

  onClick(serchText: string): void {
      this.searchTextOut.emit(serchText);
  }

}
