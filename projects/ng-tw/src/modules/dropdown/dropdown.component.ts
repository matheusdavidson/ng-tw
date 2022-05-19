import { FocusKeyManager } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
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
    ElementRef,
    ViewContainerRef,
} from '@angular/core';
import { Subscription, Observable, merge } from 'rxjs';
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
    @ContentChildren(DropdownItemComponent, { descendants: true }) public items!: QueryList<DropdownItemComponent>;
    @ViewChild(TemplateRef) public templateRef!: TemplateRef<any>;

    @Output() public closed = new EventEmitter<void>();

    @Input() public yPosition: 'top' | 'bottom' = 'bottom';
    @Input() public xPosition: 'start' | 'end' = 'start';

    @Input() public id: string = `tw-dropdown-${_uniqueIdCounter++}`;

    public isDropdownOpen = false;

    private overlayRef!: OverlayRef;
    private dropdownClosingActionsSub = Subscription.EMPTY;
    private _keyManager!: FocusKeyManager<DropdownItemComponent>;

    constructor(private overlay: Overlay) {}

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
        } else if (keyCode === ESCAPE) {
            this.destroyDropdown();
        } else if (keyCode === ENTER) {
            // @TODO: Handle enter without need of timeout
            // added to close items with no click or href actions, elements with those will autoclose itself already
            // if i don't do this, the dropdown will close before the item is clicked
            setTimeout(() => {
                this.destroyDropdown();
            });
        }

        manager.onKeydown(event);
    }

    focusFirstItem() {
        this._keyManager.setFirstItemActive();
    }

    openDropdown(templateRef: TemplateRef<TwDropdownPanel>, elementRef: ElementRef<HTMLElement>, viewContainerRef: ViewContainerRef): void {
        //
        // Set position
        const position: any = {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 0,
        };

        const xPosition: any = this.xPosition === 'end' ? ['end', 'end'] : ['start', 'start'];
        const yPosition: any = this.yPosition === 'top' ? ['top', 'bottom'] : ['bottom', 'top'];

        //
        // Set user position
        position.originX = xPosition[0];
        position.originY = yPosition[0];
        position.overlayX = xPosition[1];
        position.overlayY = yPosition[1];

        //
        // Set dropdown open
        this.isDropdownOpen = true;
        // create overlay
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(elementRef)
                .withLockedPosition()
                .withGrowAfterOpen()
                .withPositions([position]),
        });

        const templatePortal = new TemplatePortal(templateRef, viewContainerRef);
        this.overlayRef.attach(templatePortal);

        this.dropdownClosingActionsSub = this.dropdownClosingActions().subscribe(() => this.destroyDropdown());

        //
        // Set focus on the first item
        if (this.items?.length) {
            this.focusFirstItem();
        }
    }

    private dropdownClosingActions(): Observable<MouseEvent | void> {
        const backdropClick$ = this.overlayRef.backdropClick();
        const detachment$ = this.overlayRef.detachments();
        const dropdownClosed = this.closed;

        return merge(backdropClick$, detachment$, dropdownClosed);
    }

    destroyDropdown(): void {
        if (!this.overlayRef || !this.isDropdownOpen) {
            return;
        }

        this.dropdownClosingActionsSub.unsubscribe();
        this.isDropdownOpen = false;
        this.overlayRef.detach();
    }

    ngOnDestroy(): void {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
    }
}
