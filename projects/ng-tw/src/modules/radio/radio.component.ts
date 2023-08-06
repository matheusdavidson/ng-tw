import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import RadioButtonItem from './radio-button-item.interface';

@Component({
  selector: 'tw-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }]
})
export class RadioComponent implements ControlValueAccessor {

  @Input() label!: string;
  @Input() items!: Array<RadioButtonItem>;

  private _value!: string | number | boolean;

  get value(): string | number | boolean {
    return this._value;
  }

  set value(v: string | number | boolean) {
    if (v !== this._value) {
      this._value = v;
      this.change(v);
    }
  }

  onChange: Function = (value: boolean) => {};
  onTouched: Function = () => {};

  writeValue(value: string | number | boolean) {
    if (value !== this._value) {
      this._value = value;
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  change(value: string | number | boolean) {
    console.log(value);
    this._value = value;
    this.onChange(value);
    this.onTouched(value);
  }
}
