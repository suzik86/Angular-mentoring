import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss'],
})
export class ActionsPanelComponent {
  searchText: string;
  @Output() searchTextUp = new EventEmitter();

  getSearchText(text: string): void{
    this.searchText = text;
    this.searchTextUp.emit(text);
  }

  seeText(): void {
    console.log(this.searchText);
  }
}
