import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { isEmpty, merge } from 'lodash';
import { TwToggleConfig } from './toggle-config.interface';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionToken used to import the config object, provided from the outside
 */
export const TwToggleSetup = new InjectionToken<TwToggleConfig>('TwToggleConfig');

@Injectable({
    providedIn: 'root',
})
export class TwToggleConfigService {
    public config: TwToggleConfig = {
        pillGlobal: 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
        sliderGlobal: 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        color: {
            enabled: 'bg-indigo-600',
        }
    };

    constructor(@Optional() @Inject(TwToggleSetup) public options: TwToggleConfig) {
        //
        // Validate
        if (isEmpty(options)) return;

        //
        // Merge options
        this.config = merge(this.config, options);
    }
}
