import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { isEmpty, merge } from 'lodash';
import { TwDropdownConfig } from './dropdown-config.interface';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */
export const TwDropdownSetup = new InjectionToken<TwDropdownConfig>('TwDropdownConfig');

@Injectable({
    providedIn: 'root',
})
export class TwDropdownConfigService {
    public config: TwDropdownConfig = {
        panel: { class: 'rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none', ignore: '' },
        items: {
            class: 'w-full block px-4 py-2 text-sm text-gray-700 text-left focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-100 hover:text-gray-900 outline-0 disabled:text-gray-400 hover:disabled:bg-transparent hover:disabled:text-gray-400',
            ignore: '',
        },
    };

    constructor(@Optional() @Inject(TwDropdownSetup) public options: TwDropdownConfig) {
        //
        // Validate
        if (isEmpty(options)) return;

        //
        // Merge panel config
        if (options.panel) {
            this.config.panel = merge(this.config.panel, options.panel);
        }

        //
        // Merge items config
        if (options.items) {
            this.config.items = merge(this.config.items, options.items);
        }
    }
}
