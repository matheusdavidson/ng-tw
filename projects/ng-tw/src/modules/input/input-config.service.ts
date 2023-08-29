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
                tailwind: 'text-{color}-600',
                global: 'focus:outline-0 block w-full text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500',
                ignore: '',
            }
        },
        sizes: {
            sm: {
                class: 'p-2 text-xs',
                ignore: '',
            },
            md: {
                class: 'p-2.5 text-sm',
                ignore: '',
            },
            lg: {
                class: 'p-4 text-md',
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
