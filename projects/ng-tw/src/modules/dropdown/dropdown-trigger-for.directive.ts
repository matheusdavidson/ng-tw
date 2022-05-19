import { FocusKeyManager } from '@angular/cdk/a11y';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, OnDestroy, Input, ElementRef, ViewContainerRef, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { Subscription, Observable, merge } from 'rxjs';
import { DropdownItemComponent } from './dropdown-item.component';
import { TwDropdownPanel } from './dropdown-panel.interface';

@Directive({
    selector: '[twDropdownTriggerFor]',
    host: {
        '(click)': 'toggleDropdown()',
        // '(keydown)': 'handleKeydown($event)',
    },
})
export class TwDropdownTriggerFor implements OnDestroy {
    @Input('twDropdownTriggerFor') public dropdownPanel!: TwDropdownPanel;

    private isDropdownOpen = false;
    private overlayRef!: OverlayRef;
    private dropdownClosingActionsSub = Subscription.EMPTY;

    constructor(private overlay: Overlay, private elementRef: ElementRef<HTMLElement>, private viewContainerRef: ViewContainerRef) {}

    toggleDropdown(): void {
        this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown();
    }

    openDropdown(): void {
        //
        // Set position
        const position: any = {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 0,
        };

        const xPosition: any = this.dropdownPanel.xPosition === 'end' ? ['end', 'end'] : ['start', 'start'];
        const yPosition: any = this.dropdownPanel.yPosition === 'top' ? ['top', 'bottom'] : ['bottom', 'top'];

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
                .flexibleConnectedTo(this.elementRef)
                .withLockedPosition()
                .withGrowAfterOpen()
                .withPositions([position]),
        });

        const templatePortal = new TemplatePortal(this.dropdownPanel.templateRef, this.viewContainerRef);
        this.overlayRef.attach(templatePortal);

        this.dropdownClosingActionsSub = this.dropdownClosingActions().subscribe(() => this.destroyDropdown());

        //
        // Set focus on the first item
        if (this.dropdownPanel.items?.length) {
            console.log('set focus on first item');
            this.dropdownPanel.focusFirstItem();
        }
    }

    private dropdownClosingActions(): Observable<MouseEvent | void> {
        const backdropClick$ = this.overlayRef.backdropClick();
        const detachment$ = this.overlayRef.detachments();
        const dropdownClosed = this.dropdownPanel.closed;

        return merge(backdropClick$, detachment$, dropdownClosed);
    }

    private destroyDropdown(): void {
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
