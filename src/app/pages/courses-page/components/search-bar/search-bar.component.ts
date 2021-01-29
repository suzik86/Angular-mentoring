import { Component,  OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { AppState } from 'src/app/state';
import { LoadCoursesAction, SetFilterAction, SetOffsetAction } from 'src/app/state/courses/couses.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit{
  searchValue = '';
  searchTextChanged = new Subject<string>();
  subscription;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(search => {
        this.store.dispatch(SetFilterAction({filter: search}));
        this.store.dispatch(SetOffsetAction({start: 0}));
        this.store.dispatch(LoadCoursesAction());
      }),
     ).subscribe();
  }

 search(event): void {
   if (event.target.value.length >= 3 || event.target.value.length === 0) {
    this.searchTextChanged.next(event.target.value);
   }
 }

}
