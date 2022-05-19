import { ElementRef, EventEmitter, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
import { DropdownItemComponent } from './dropdown-item.component';

export interface TwDropdownPanel {
    items: QueryList<DropdownItemComponent>;
    readonly closed: EventEmitter<void>;
    readonly isDropdownOpen: boolean;
    readonly yPosition: 'top' | 'bottom';
    readonly xPosition: 'start' | 'end';
    readonly id: string;
    readonly focusFirstItem: () => void;
    readonly destroyDropdown: () => void;
    readonly openDropdown: (
        templateRef: TemplateRef<TwDropdownPanel>,
        elementRef: ElementRef<HTMLElement>,
        viewContainerRef: ViewContainerRef
    ) => void;
}
