import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { isEmpty, merge } from 'lodash';
import { TwInputConfig } from './input-config.interface';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */
export const TwInputSetup = new InjectionToken<TwInputConfig>('TwInputConfig');

@Injectable({
    providedIn: 'root',
})
export class TwInputConfigService {
    public config: TwInputConfig = {
        global: 'focus:outline-none rounded',
        font: {
            weight: 'font-medium',
        },
        layout: {
            basic: {
                // TODO: figure out what these do
                tailwind: 'hover:bg-{color}-50 text-{color}-600',
                global: 'border-transparent focus:outline-0 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                ignore: '',
            }
        },
        sizes: {
            sm: {
                class: 'p-2 sm:text-xs',
                ignore: '',
            },
            md: {
                class: 'p-2.5 text-sm',
                ignore: '',
            },
            lg: {
                class: 'p-4 sm:text-md',
                ignore: '',
            }
        },
    };

    constructor(@Optional() @Inject(TwInputSetup) public options: TwInputConfig) {
        //
        // Validate
        if (isEmpty(options)) return;

        //
        // Merge options
        this.config = merge(this.config, options);
    }
}
