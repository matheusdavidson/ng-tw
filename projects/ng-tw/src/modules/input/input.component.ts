import { Component, ElementRef, Input } from '@angular/core';
import { TwInputConfig } from './input-config.interface';
import { TwInputConfigService } from './input-config.service';
import { difference } from 'lodash';

@Component({
  selector: '[tw-input]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() class: string = '';
  @Input() public layout: 'basic' = 'basic';
  @Input() public size: 'sm' | 'md' | 'lg' = 'md';
  @Input() public ignore: string = '';

  private config: TwInputConfig = this.inputConfig.config;
  constructor(
    private el: ElementRef,
    private readonly inputConfig: TwInputConfigService
  ) {}

  ngAfterViewInit() {
    const classes: string[] = this.setup();
    this.el.nativeElement.className = classes.join(' ');
  }

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

}