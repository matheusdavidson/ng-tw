import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { isEmpty, merge } from 'lodash';
import { TwSelectConfig } from './select-config.interface';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */
export const TwSelectSetup = new InjectionToken<TwSelectConfig>('TwSelectConfig');

@Injectable({
    providedIn: 'root',
})
export class TwSelectConfigService {
    public config: TwSelectConfig = {
        select: {
            host: {
                class: 'bg-white relative border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                ignore: '',
            },
            panel: {
                class: 'bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5',
                mandatoryClass: 'w-full overflow-auto focus:outline-none sm:text-sm tw-option-panel-scroll',
                ignore: '',
            },
        },
        option: {
            class: 'block py-2 hover:bg-gray-50 cursor-default select-none relative',
            ignore: '',
            indicatorClass: 'text-primary-600 pr-4',
            indicatorMandatoryClass: 'absolute inset-y-0 items-center',
            activeClass: 'font-bold',
            selectedClass: 'bg-gray-100',
        },
    };

    constructor(@Optional() @Inject(TwSelectSetup) public options: TwSelectConfig) {
        //
        // Validate
        if (isEmpty(options)) return;

        //
        // Merge panel config
        if (options.select) {
            this.config.select = merge(this.config.select, options.select);
        }

        //
        // Merge items config
        if (options.option) {
            this.config.option = merge(this.config.option, options.option);
        }
    }
}
