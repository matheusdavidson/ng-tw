import { EventEmitter, QueryList, TemplateRef } from '@angular/core';
import { DropdownItemComponent } from './dropdown-item.component';

export interface TwDropdownPanel {
    templateRef: TemplateRef<any>;
    items: QueryList<DropdownItemComponent>;
    readonly closed: EventEmitter<void>;
    readonly yPosition: 'top' | 'bottom';
    readonly xPosition: 'start' | 'end';
    readonly id: string;
    readonly focusFirstItem: () => void;
}
