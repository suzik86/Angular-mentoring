import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-courses-page-top-section',
  templateUrl: './courses-page-top-section.component.html',
  styleUrls: ['./courses-page-top-section.component.scss'],
})
export class CoursesPageTopSectionComponent implements OnInit {
  searchForm = new FormGroup({
    searchValue: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.searchForm.value);
  }

}
