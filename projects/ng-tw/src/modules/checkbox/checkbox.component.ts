import { Attribute, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TwCheckboxConfig } from './checkbox-config.interface';
import { TwCheckboxConfigService } from './checkbox-config.service';

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
    private readonly checkboxConfig: TwCheckboxConfigService
  ) {}

  @Input() class: string = '';
  @Input() public color: string = '';
  @Input() public focusColor: string = '';
  @Input() value!: boolean;

  private _config: TwCheckboxConfig = this.checkboxConfig.config;

  getClasses(): string {
    //
    // hold classes
    let classes: string[] = [];

    classes.push(...this._config.global.split(' '));

    if (this.color) {
      classes.push(this.color)
    } else {
      classes.push(this._config.color.default)
    }

    if (this.focusColor) {
      classes.push(this.focusColor)
    } else {
      classes.push(this._config.color.focus)
    }

    return classes.length ? classes.join(' ') : '';
  }

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
