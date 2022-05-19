import { FocusableOption, InputModalityDetector } from '@angular/cdk/a11y';
import { Component, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import { difference } from 'lodash';

/**
 * IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;

@Component({
    selector: 'tw-dropdown-item, [tw-dropdown-item]',
    templateUrl: './dropdown-item.component.html',
    styleUrls: ['./dropdown-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.id]': 'id',
        '[attr.tabindex]': '_getTabIndex()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.disabled]': 'disabled || null',
        '[attr.role]': 'menuitem',
        '[class]': '_getClasses()',
        '(click)': '_checkDisabled($event)',
    },
})
export class DropdownItemComponent implements FocusableOption {
    @Input() public disabled: boolean = false;
    @Input() public id: string = `tw-dropdown-item-${_uniqueIdCounter++}`;
    @Input() public class: string = '';

    public active: boolean = false;
    public selected: boolean = false;

    private _config: any = {
        class: 'w-full block px-4 py-2 text-sm text-gray-700 text-left focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-100 hover:text-gray-900 outline-0',
        disabled: 'disabled:text-gray-400 hover:disabled:bg-transparent hover:disabled:text-gray-400',
        ignore: '',
    };

    constructor(private readonly element: ElementRef<HTMLElement>) {}

    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel(): string {
        return this.element.nativeElement.textContent ? this.element.nativeElement.textContent : '';
    }

    /** Used to set the `tabindex`. */
    _getTabIndex(): string {
        return this.disabled ? '-1' : '0';
    }

    focus() {
        this.element.nativeElement.focus();
    }

    /** Prevents the default element actions if it is disabled. */
    _checkDisabled(event: Event): void {
        if (this.disabled === true) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    private _getClasses() {
        //
        // Hold classes
        let classes: string[] = [];

        //
        // Set global config, classes and disabled
        const config: any = this._config;
        const globalClasses: string[] = config?.class ? config.class.split(' ').filter((item: string) => item) : [];
        const globalDisabledClasses: string[] = config?.disabled ? config.disabled.split(' ').filter((item: string) => item) : [];

        //
        // Set @Input classes if available
        const inputClasses: string[] = this.class ? this.class.split(' ').filter((item: string) => item) : [];

        //
        // Set ignore classes, global and @input
        const globalIgnoreClasses: string[] = config?.ignore ? config.ignore.split(' ').filter((item: string) => item) : [];
        const inputIgnoreClasses: string[] = config?.ignore ? config.ignore.split(' ').filter((item: string) => item) : [];

        //
        // Add global and disabled classes
        classes = [...globalClasses, ...globalDisabledClasses];

        //
        // Filter global classes using global and @input ignore
        classes = difference(classes, globalIgnoreClasses, inputIgnoreClasses);

        //
        // Add @input classes
        classes = [...classes, ...inputClasses];

        return classes?.length ? classes.join(' ') : '';
    }
}
