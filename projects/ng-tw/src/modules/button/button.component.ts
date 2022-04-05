import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { difference } from 'lodash';

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

    private _config: any = {
        global: 'focus:outline-none border border-transparent rounded',
        font: {
            weight: 'font-medium',
        },
        disabled: {
            basic: {
                class: 'disabled:bg-transparent disabled:text-gray-200',
                ignore: '',
            },
            raised: {
                class: 'disabled:bg-gray-200 disabled:text-gray-300',
                ignore: '',
            },
            stroked: {
                class: 'disabled:border disabled:border-gray-200 disabled:text-gray-200',
                ignore: 'hover:bg-gray-100 hover:bg-primary-50 hover:bg-secondary-100 hover:bg-danger-100',
            },
            flat: {
                class: 'disabled:bg-gray-200 disabled:text-gray-300',
                ignore: '',
            },
        },
        layout: {
            basic: {
                basic: 'hover:bg-gray-100',
                primary: 'hover:bg-primary-50 text-primary',
                secondary: 'hover:bg-secondary-50 text-secondary',
                danger: 'hover:bg-danger-50 text-danger',
                tailwind: 'hover:bg-{color}-50 text-{color}-600',
                ignore: '',
            },
            raised: {
                basic: 'bg-white',
                primary: 'text-white bg-primary',
                secondary: 'text-white bg-secondary',
                danger: 'text-white bg-danger',
                tailwind: 'text-white bg-{color}-600',
                global: 'shadow-sm hover:active:shadow-lg',
                ignore: '',
            },
            stroked: {
                basic: 'hover:bg-gray-100',
                primary: 'text-primary hover:bg-primary-50',
                secondary: 'text-secondary hover:bg-secondary-100',
                danger: 'text-danger hover:bg-danger-100',
                tailwind: 'text-{color}-600 hover:bg-{color}-200',
                global: 'bg-transparent border border-gray-200',
                ignore: '',
            },
            flat: {
                basic: 'bg-white',
                primary: 'text-white bg-primary focus:ring-primary-500',
                secondary: 'text-white bg-secondary focus:ring-secondary-500',
                danger: 'text-white bg-danger focus:ring-danger-500',
                tailwind: 'text-white bg-{color}-600 focus:ring-{color}-600',
                global: 'focus:ring-2 focus:ring-offset-2',
                ignore: '',
            },
        },
        sizes: {
            xs: {
                class: 'px-2.5 py-1.5 text-xs',
                ignore: '',
            },
            sm: {
                class: 'px-3 py-1.5 text-sm',
                ignore: '',
            },
            md: {
                class: 'px-4 py-2 text-sm',
                ignore: '',
            },
            lg: {
                class: 'px-4 py-2 text-base',
                ignore: '',
            },
            xl: {
                class: 'px-6 py-3 text-base',
                ignore: '',
            },
        },
    };

    constructor(private readonly elementRef: ElementRef) {
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
