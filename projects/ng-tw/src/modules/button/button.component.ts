import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { difference } from 'lodash';
import { TwButtonConfig } from './button-config.interface';
import { TwButtonConfigService } from './button-config.service';

type ColorType = 'basic' | 'primary' | 'secondary' | 'danger';

// type TailwindColorType =
//     | 'slate'
//     | 'gray'
//     | 'zinc'
//     | 'neutral'
//     | 'stone'
//     | 'red'
//     | 'orange'
//     | 'amber'
//     | 'yellow'
//     | 'lime'
//     | 'green'
//     | 'emerald'
//     | 'teal'
//     | 'cyan'
//     | 'sky'
//     | 'blue'
//     | 'indigo'
//     | 'indigo'
//     | 'violet'
//     | 'purple'
//     | 'fuchsia'
//     | 'pink'
//     | 'rose';
// type ColorType = 'basic' | 'primary' | 'secondary' | 'danger' | TailwindColorType;

// @TODO: Add support for tailwind colors
// const tailwindColors: TailwindColorType[] = [
//     'slate',
//     'gray',
//     'zinc',
//     'neutral',
//     'stone',
//     'red',
//     'orange',
//     'amber',
//     'yellow',
//     'lime',
//     'green',
//     'emerald',
//     'teal',
//     'cyan',
//     'sky',
//     'blue',
//     'indigo',
//     'indigo',
//     'violet',
//     'purple',
//     'fuchsia',
//     'pink',
//     'rose',
// ];

@Component({
    selector: 'button[tw-button], a[tw-button]',
    templateUrl: './button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit, OnChanges {
    @Input() class: string = '';
    @Input() public color: ColorType = 'basic';
    @Input() public layout: 'basic' | 'raised' | 'stroked' | 'flat' = 'basic';
    @Input() public size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Input() public ignore: string = '';

    private _config: TwButtonConfig = this.buttonConfig.config;

    constructor(private readonly elementRef: ElementRef, private readonly buttonConfig: TwButtonConfigService) {
        //
        // Get config according to inputs
        const classes: string[] = this.setup();

        this.classes = classes.join(' ');
    }

    @HostBinding('class') classes!: string;

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        //
        // Setup and change classes
        const classes: string[] = this.setup();
        this.classes = classes.join(' ');
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
        return this._config.global.split(' ').filter((item: string) => item);
    }

    getFontClasses() {
        return this._config.font.weight.split(' ').filter((item: string) => item);
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
        const layoutClasses: string[] = this._config.layout[this.layout][this.color].split(' ');
        const layoutGlobalClasses: string[] = this._config.layout[this.layout]?.global?.split(' ');
        const layoutIgnoreClasses: string[] = this._config.layout[this.layout].ignore.split(' ');
        // add global classes
        if (layoutGlobalClasses) layoutClasses.push(...layoutGlobalClasses);
        // filter ignored classes and remove empty strings
        const classes = difference(layoutClasses, layoutIgnoreClasses);

        //
        // Get disabled classes and push
        const disabledClasses = this.getDisabledClasses();
        classes.push(...disabledClasses);

        return classes;
    }

    getSizeClasses() {
        //
        // Get size config
        const config: any = this._config.sizes[this.size];

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

    getDisabledClasses() {
        //
        // Get disabled config
        const config: any = this._config.disabled[this.layout];

        //
        // Get disabled classes according to layout and split values
        const disabledClasses: string[] = config.class.split(' ');
        const disabledIgnoreClasses: string[] = config.ignore.split(' ');
        // filter ignored classes and remove empty strings
        const classes = difference(disabledClasses, disabledIgnoreClasses);

        return classes;
    }

    filterGlobalClasses(classes: string[]) {
        return difference(classes, this.getGlobalIgnoreClasses());
    }

    filterEmptyClasses(classes: string[]) {
        return classes.filter((item: string) => item);
    }
}
