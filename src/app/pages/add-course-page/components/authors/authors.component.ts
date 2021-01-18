import { Component, forwardRef, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, NG_VALIDATORS, AbstractControl, ControlContainer } from '@angular/forms';
import { AuthorsService } from 'src/app/pages/courses-page/authors.service';
import Author from 'src/app/pages/courses-page/components/course/author.types';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [
    {   provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AuthorsComponent),
        multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true,
    },
  ],
})
export class AuthorsComponent implements ControlValueAccessor, OnInit {
  @Input() formControlName: string;

  public control: AbstractControl;
  public items: Array<Author> = [];
  public filter: string;
  private _authors: Array<Author> = [];
  isIncorrectValue = false;

  constructor(
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer,
    private authorsService: AuthorsService,
  ) {  }

  onChange: any = () => {};
  onTouch: any = () => {};
  onValidationChange: any = () => {};

  get authors(): Array<Author> {
    return this._authors;
  }

  set authors(value: Array<Author>) {
    this._authors = value;
    this.onValidationChange();
    this.notify();
  }

  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        this.control = this.controlContainer.control.get(this.formControlName);
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn('Can\'t find parent FormGroup directive');
    }
  }

  async findAuthors(): Promise<void> {
    if (this.filter) {
      this.items = await this.authorsService.findAuthors(this.filter).toPromise();
    } else {
      this.items = [];
    }
  }

  addAuthor(author: Author): void {
    this.filter = '';
    this.items = [];
    this._authors.push(author);
    this.notify();
  }

  removeAuthor(author: Author): void {
    this._authors.splice(this._authors.indexOf(author), 1);
    this.notify();
  }

  notify(): void {
    this.onChange(this._authors);
  }

  validate(control: AbstractControl): ValidationErrors {
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn;
    this.onValidationChange();
    this.notify();
  }

  writeValue(value): void {
    this._authors = value ? value.map((item) => Object.assign({}, item, {selected: false})) : [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.notify();
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
