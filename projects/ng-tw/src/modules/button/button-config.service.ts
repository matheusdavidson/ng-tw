import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { isEmpty, merge } from 'lodash';
import { TwButtonConfig } from './button-config.interface';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */
export const TwButtonSetup = new InjectionToken<TwButtonConfig>('TwButtonConfig');

@Injectable({
    providedIn: 'root',
})
export class TwButtonConfigService {
    public config: TwButtonConfig = {
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
                global: '',
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

    constructor(@Optional() @Inject(TwButtonSetup) public options: TwButtonConfig) {
        //
        // Validate
        if (isEmpty(options)) return;

        //
        // Merge options
        this.config = merge(this.config, options);
    }
}
