import { Component, forwardRef, Host, Input, OnDestroy, OnInit, Optional, SkipSelf } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, NG_VALIDATORS, AbstractControl, ControlContainer, NgForm, NgControl, FormGroupDirective, Validator, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  providers: [
    {   provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateComponent),
        multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateComponent),
      multi: true,
    },
  ],
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  @Input() formControlName: string;

  stateChanges = new Subject<void>();
  public control: AbstractControl;
  private _value;
  isIncorrectValue = false;

  constructor(
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer,
  ) {
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onValidationChange();
    this.notify();
    this.stateChanges.next();
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

  onChange: any = () => {};
  onTouch: any = () => {};
  onValidationChange: any = () => {};

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  formatValue(): string {
    if (this._value && !this.isIncorrectValue) {
      // tslint:disable-next-line
      let [d, m, y] = this._value.split('/');
      d = d.toString().padStart(2, '0');
      m = m.toString().padStart(2, '0');

      return `${y}-${m}-${d}`;
    }

    return this._value;
  }

  notify(): void {
    this.onChange(this.formatValue());
  }

  validate(control: AbstractControl): ValidationErrors {
    const re = new RegExp('^(3[01]|[12][0-9]|0[1-9])\/(1[0-2]|0[1-9])\/[0-9]{4}$');
    this.isIncorrectValue = this._value && !this._value.match(re);
    const errors = this.isIncorrectValue ? { incorectDate: this.isIncorrectValue } : null;
    this.control.setErrors(errors);

    return errors;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn;
    this.onValidationChange();
    this.notify();
  }

  writeValue(date: string): void {
    if (date) {
      const dt = new Date(date);
      this.value = `${dt.getDate().toString().padStart(2, '0')}/${(1 + dt.getMonth()).toString().padStart(2, '0')}/${dt.getFullYear()}`;
    }
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
