import { Attribute, Component, ElementRef, HostBinding, Input, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TwInputConfig } from './input-config.interface';
import { TwInputConfigService } from './input-config.service';
import { difference } from 'lodash';

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
  @Input() class: string = '';
  @Input() public layout: 'basic' = 'basic';
  @Input() public size: 'sm' | 'md' | 'lg' = 'md';
  @Input() public ignore: string = '';

  private config: TwInputConfig = this.inputConfig.config;

  @ViewChild('field') input!: ElementRef;

  constructor(
    @Attribute('id') public id: string,
    @Attribute('type') public type: string,
    private readonly inputConfig: TwInputConfigService
  ) {}

  ngAfterViewInit() {
    const classes: string[] = this.setup();
    this.input.nativeElement.className = classes.join(' ');
  }

  @HostBinding('class') classes!: string;
  
  @Input() public label!: string;
  @Input() public placeholder!: string;

  public _value: string = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  private setup(): string[] {
    //
    // hold classes
    let classes: string[] = [];

    //
    // Add [class] if available
    if (this.class) classes = this.class.split(' ').filter((item: string) => item);

    //
    // Get global and font classes
    const globalClasses = this.getGlobalClasses();
    const fontClasses = this.getFontClasses();
    // push
    classes.push(...globalClasses, ...fontClasses);

    //
    // Get layout classes and push
    const layoutClasses: string[] = this.getLayoutClasses();
    classes.push(...layoutClasses);

    //
    // Get size classes and push
    const sizeClasses: string[] = this.getSizeClasses();
    classes.push(...sizeClasses);

    //
    // Filter global disabled and filter empty strings
    classes = this.filterGlobalClasses(classes);
    classes = this.filterEmptyClasses(classes);

    return classes;
  }

  getGlobalClasses() {
    return this.config.global.split(' ').filter((item: string) => item);
  }

  getFontClasses() {
    return this.config.font.weight.split(' ').filter((item: string) => item);
  }

  getLayoutClasses() {
    // @TODO: add tailwind custom colors
    // //
    // // Get color key
    // const colorKey: ColorType | 'tailwind' = tailwindColors.includes(this.color as TailwindColorType) ? 'tailwind' : this.color;
    // // get color config
    // let colorConfig = this._config.layout[this.layout][colorKey];
    // // adjust for tailwind colors
    // if (colorKey === 'tailwind') colorConfig = colorConfig.split('{color}').join(this.color);

    // //
    // // Get layout classes according and split values
    // const layoutClasses: string[] = colorConfig.split();

    //
    // Get layout classes according and split values
    const layoutClasses: string[] = [];
    const layoutGlobalClasses: string[] = this.config.layout[this.layout]?.global?.split(' ');
    const layoutIgnoreClasses: string[] = this.config.layout[this.layout].ignore.split(' ');
    // add global classes
    if (layoutGlobalClasses) layoutClasses.push(...layoutGlobalClasses);
    // filter ignored classes and remove empty strings
    const classes = difference(layoutClasses, layoutIgnoreClasses);

    return classes;
  }

  getSizeClasses() {
    //
    // Get size config
    const config: any = this.config.sizes[this.size];

    //
    // Get layout classes according and split values
    const sizeClasses: string[] = config.class.split(' ');
    const sizeIgnoreClasses: string[] = config.ignore.split(' ');
    // filter ignored classes and remove empty strings
    const classes = difference(sizeClasses, sizeIgnoreClasses);

    return classes;
  }

  getGlobalIgnoreClasses() {
    return this.ignore.split(' ');
  }

  filterGlobalClasses(classes: string[]) {
    return difference(classes, this.getGlobalIgnoreClasses());
  }

  filterEmptyClasses(classes: string[]) {
    return classes.filter((item: string) => item);
  }

  get value(): string {
    return this._value;
  }

  set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  writeValue(v: any): void {
    if (v !== this._value) {
      this._value = v;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }
}