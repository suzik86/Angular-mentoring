import { Component,  OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { CoursesService } from '../../courses.service';

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
    public coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(search => this.coursesService.textFragment = this.searchValue),
      tap(search => this.coursesService.loadAll()),
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
