import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeCourseBorder]',
})
export class ChangeCourseBorderDirective implements OnInit {

  @Input('appChangeCourseBorder') public creationDate: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const currentDate = Date.now();
    const parts: Array<string> = this.creationDate.split('/');
    const courseDate: Date = new Date(parseInt(parts[2], 10), parseInt(parts[0], 10) - 1, parseInt(parts[1], 10));
    const date = courseDate.getTime();
    if (date < currentDate && date >= currentDate - 14 * 24 * 60 * 60 * 1000) {
      this.element.nativeElement.style.borderColor = 'green';
    }
    if (date > currentDate) {
      this.element.nativeElement.style.borderColor = 'blue';
    }
  }
}
