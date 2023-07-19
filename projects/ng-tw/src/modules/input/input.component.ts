import { Attribute, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noOp = () => {};

@Component({
  selector: 'tw-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {

  constructor(
    @Attribute('id') public id: string,
    @Attribute('type') public type: string,
  ) {}

  @Input() public label!: string;
  @Input() public placeholder!: string;

  private _value: string = '';

  private onTouchedCallback: () => void = noOp;
  private onChangeCallback: (_: any) => void = noOp;

  get value(): string {
    return this._value;
  }

  set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(v: any): void {
    if (v !== this._value) {
      this._value = v;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}