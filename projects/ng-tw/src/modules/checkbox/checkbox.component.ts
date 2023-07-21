import { Attribute, Component, ElementRef, Input, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tw-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {

  constructor(
    @Attribute('id') public id: string,
    @Attribute('label') public label: string,
    private renderer: Renderer2
  ) {}

  @ViewChild('checkbox') checkboxInput!: ElementRef;

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
