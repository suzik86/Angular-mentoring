import { Component, forwardRef, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, NG_VALIDATORS, AbstractControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [
    {   provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DurationComponent),
        multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationComponent),
      multi: true,
    },
  ],
})
export class DurationComponent implements ControlValueAccessor, OnInit {

  constructor(
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer,
  ) {
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
    this.onValidationChange();
    this.notify();
  }

  public control: AbstractControl;
  @Input() formControlName: string;

  private _duration;
  isIncorrectValue = false;

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

  notify(): void {
    this.onChange(this.duration);
  }

  validate(control: AbstractControl): ValidationErrors {
    const re = new RegExp('^[0-9]*$');
    this.isIncorrectValue = this._duration && !this._duration.toString().match(re);

    return this.isIncorrectValue ? { incorectDate: this.isIncorrectValue } : null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn;
    this.onValidationChange();
    this.notify();
  }

  writeValue(value): void {
    this._duration = value;
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
