import { Attribute, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tw-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleComponent),
    multi: true
  }]
})
export class ToggleComponent implements ControlValueAccessor {

  constructor(
    @Attribute('id') public id: string,
    @Attribute('label') public label: string,
    @Attribute('disabled') public disabled: boolean,
  ) {}
  
  @Input() value!: boolean;

  onChange = (value: boolean) => {};
  onTouched = () => {};

  writeValue(v: boolean): void {
    this.value = v;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  toggleValue(): void {
    this.value = !this.value;
    console.log(this.value);
    this.onChange(this.value);
  }
}
