import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

const FRESH_COURSE_OFFSET = 14 * 24 * 60 * 60 * 1000;

enum BorderColor {
  Green = 'green',
  Blue = 'blue',
}

@Directive({
  selector: '[appSetCourseBorder]',
})
export class SetCourseBorderDirective implements OnChanges {
  @Input('appSetCourseBorder') public creationDate: string;

  currentDate: number = Date.now();

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnChanges(): void {
    const borderColor = this.defineBorderColor();
    if (borderColor) {
      this.renderer.setStyle(this.element.nativeElement, 'border-color', borderColor);
    }
  }

  defineBorderColor(): string {
    const courseTimeStamp: number = Date.parse(this.creationDate);
    if (this.isUpcomingCourse(courseTimeStamp)) {
      return BorderColor.Blue;
    }
    if (this.isFreshCourse(courseTimeStamp)) {
      return BorderColor.Green;
    }
  }

  isFreshCourse(courseTimeStamp): boolean {
    return courseTimeStamp < this.currentDate && this.currentDate - courseTimeStamp <= FRESH_COURSE_OFFSET;
  }

  isUpcomingCourse(courseTimeStamp): boolean {
    return courseTimeStamp > this.currentDate;
  }
}
