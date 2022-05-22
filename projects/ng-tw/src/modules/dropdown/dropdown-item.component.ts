import { FocusableOption, InputModalityDetector } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input, ElementRef, Inject } from '@angular/core';
import { difference } from 'lodash';
import { TwDropdownConfig } from './dropdown-config.interface';
import { TwDropdownConfigService } from './dropdown-config.service';

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
    @Input() public ignore: string = '';

    public active: boolean = false;
    public selected: boolean = false;

    private _config: TwDropdownConfig['items'] = this.dropdownConfig.config.items;

    constructor(
        private readonly element: ElementRef<HTMLElement>,
        private readonly dropdownConfig: TwDropdownConfigService,
        @Inject(DOCUMENT) private _document?: any
    ) {}

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

        //
        // Set @Input classes if available
        const inputClasses: string[] = this.class ? this.class.split(' ').filter((item: string) => item) : [];

        //
        // Set ignore classes, global and @input
        const globalIgnoreClasses: string[] = config?.ignore ? config.ignore.split(' ').filter((item: string) => item) : [];
        const inputIgnoreClasses: string[] = this.ignore ? this.ignore.split(' ').filter((item: string) => item) : [];

        //
        // Add global and disabled classes
        classes = [...globalClasses];

        //
        // Filter global classes using global and @input ignore
        classes = difference(classes, globalIgnoreClasses, inputIgnoreClasses);

        //
        // Add @input classes
        classes = [...classes, ...inputClasses];

        return classes?.length ? classes.join(' ') : '';
    }

    /** Returns the host DOM element. */
    _getHostElement(): HTMLElement {
        return this.element.nativeElement;
    }

    _hasFocus(): boolean {
        return this._document && this._document.activeElement === this._getHostElement();
    }
}
