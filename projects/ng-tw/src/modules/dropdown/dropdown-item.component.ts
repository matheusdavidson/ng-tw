import { Component, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';

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
        '[class]': 'itemClass + " " + (selected === true ? activeClass : inactiveClass)',
    },
})
export class DropdownItemComponent {
    @Input() public disabled: boolean = false;
    @Input() public id: string = `tw-dropdown-item-${_uniqueIdCounter++}`;

    public active: boolean = false;
    public selected: boolean = false;

    public itemClass: string = 'block px-4 py-2 text-sm text-gray-700 active:bg-gray-100 active:text-gray-900';
    public activeClass: string = ''; //'bg-gray-100 text-gray-900';
    public inactiveClass: string = ''; //'text-gray-700';

    constructor(private readonly element: ElementRef<HTMLElement>) {}

    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setActiveStyles(): void {
        console.log('here');
        if (!this.active) {
            this.active = true;
            this.scrollIntoView();
        }
    }

    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setInactiveStyles(): void {
        if (this.active) {
            this.active = false;
        }
    }

    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel(): string {
        return this.element.nativeElement.textContent ? this.element.nativeElement.textContent : '';
    }

    scrollIntoView() {
        if (typeof this.element.nativeElement.scrollIntoView !== 'undefined') this.element.nativeElement.scrollIntoView();
    }

    select(): void {
        console.log('select');
        //
        // Validate disabled
        if (this.disabled === true) return;
        // set selected
        this.selected = true;
    }

    /** Used to set the `tabindex`. */
    _getTabIndex(): string {
        return this.disabled ? '-1' : '0';
    }
}
