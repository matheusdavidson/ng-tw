import { Attribute, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TwToggleConfig } from './toggle-config.interface';
import { TwToggleConfigService } from './toggle-config.service';

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
    private readonly toggleConfig: TwToggleConfigService
  ) {}
  
  @Input() value!: boolean;
  @Input() public enabledColor: string = '';

  private _config: TwToggleConfig = this.toggleConfig.config;

  getPillClasses(): string {
    return this.toggleConfig.config.pillGlobal
  }

  getSliderClasses(): string {
    return this.toggleConfig.config.sliderGlobal
  }

  getEnabledColor(): string {
    return this.enabledColor ? this.enabledColor : this.toggleConfig.config.color.enabled
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
