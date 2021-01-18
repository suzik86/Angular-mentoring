import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit{
  searchTextChanged = new Subject<string>();
  subscription;
  form: FormGroup;

  constructor(
    public coursesService: CoursesService,
    private _fb: FormBuilder,
  ) {
    this.form = this._fb.group({
      search: [''],
    });
  }

  ngOnInit(): void {
    this.subscription = this.searchTextChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(search => this.coursesService.textFragment = this.form.value.search),
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
