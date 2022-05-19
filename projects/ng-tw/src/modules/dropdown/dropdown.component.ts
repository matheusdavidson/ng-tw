import { FocusKeyManager } from '@angular/cdk/a11y';
import { DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef,
    Output,
    EventEmitter,
    Input,
    ContentChildren,
    QueryList,
    AfterContentInit,
} from '@angular/core';
import { DropdownItemComponent } from './dropdown-item.component';
import { TwDropdownPanel } from './dropdown-panel.interface';

/**
 * IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;

@Component({
    selector: 'tw-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.id]': 'id',
    },
})
export class DropdownComponent implements TwDropdownPanel, AfterContentInit {
    @ViewChild(TemplateRef) public templateRef!: TemplateRef<any>;
    @ContentChildren(DropdownItemComponent, { descendants: true }) public items!: QueryList<DropdownItemComponent>;

    @Output() public closed = new EventEmitter<void>();

    @Input() public yPosition: 'top' | 'bottom' = 'bottom';
    @Input() public xPosition: 'start' | 'end' = 'start';

    @Input() public id: string = `tw-dropdown-${_uniqueIdCounter++}`;

    private _keyManager!: FocusKeyManager<DropdownItemComponent>;

    ngAfterContentInit(): void {
        this._keyManager = new FocusKeyManager(this.items).withWrap().withTypeAhead().withHomeAndEnd();
    }

    handleKeydown(event: KeyboardEvent) {
        const keyCode = event.keyCode;
        const manager = this._keyManager;

        // manager.setFocusOrigin('keyboard');
        // manager.onKeydown(event);

        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
            manager.setFocusOrigin('keyboard');
        }

        manager.onKeydown(event);
        event.stopPropagation();
    }

    focusFirstItem() {
        this._keyManager.setFirstItemActive();
    }
}
