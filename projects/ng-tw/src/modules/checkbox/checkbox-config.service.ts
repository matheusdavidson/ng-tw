import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { isEmpty, merge } from 'lodash';
import { TwCheckboxConfig } from './checkbox-config.interface';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionToken used to import the config object, provided from the outside
 */
export const TwCheckboxSetup = new InjectionToken<TwCheckboxConfig>('TwCheckboxConfig');

@Injectable({
    providedIn: 'root',
})
export class TwCheckboxConfigService {
    public config: TwCheckboxConfig = {
        global: 'w-4 h-4 rounded focus:ring-2 disabled:cursor-default disabled:opacity-60',
        color: {
            default: 'accent-primary-300',
            focus: 'focus:ring-primary-600'
        }
    };

    constructor(@Optional() @Inject(TwCheckboxSetup) public options: TwCheckboxConfig) {
        //
        // Validate
        if (isEmpty(options)) return;

        //
        // Merge options
        this.config = merge(this.config, options);
    }
}
