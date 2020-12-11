import { Component,  EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit{
  @Output() searchCourses = new EventEmitter();

  searchValue = '';
  searchTextChanged = new Subject<string>();
  subscription;

  ngOnInit(): void {
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(search => this.searchCourses.emit(this.searchValue)),
     ).subscribe((res) => {
       console.log(res);
     });
  }

 search(event): void {
   if (event.target.value.length >= 3 || event.target.value.length === 0) {
    this.searchTextChanged.next(event.target.value);
   }
 }

}
