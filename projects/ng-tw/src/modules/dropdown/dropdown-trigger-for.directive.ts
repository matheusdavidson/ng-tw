import { DOWN_ARROW } from '@angular/cdk/keycodes';
import { Directive, Input, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { TwDropdownPanel } from './dropdown-panel.interface';

@Directive({
    selector: '[twDropdownTriggerFor]',
    host: {
        '(click)': 'toggleDropdown(dropdownPanel.templateRef, elementRef, viewContainerRef)',
        '(keydown)': 'handleKeydown($event)',
    },
})
export class TwDropdownTriggerFor {
    @Input('twDropdownTriggerFor') public dropdownPanel!: TwDropdownPanel;

    constructor(public elementRef: ElementRef<HTMLElement>, public viewContainerRef: ViewContainerRef) {}

    toggleDropdown(
        templateRef: TemplateRef<TwDropdownPanel>,
        elementRef: ElementRef<HTMLElement>,
        viewContainerRef: ViewContainerRef
    ): void {
        this.dropdownPanel.isDropdownOpen
            ? this.dropdownPanel.destroyDropdown()
            : this.dropdownPanel.openDropdown(templateRef, elementRef, viewContainerRef);
    }

    handleKeydown(event: KeyboardEvent): void {
        const keyCode = event.keyCode;

        if (keyCode === DOWN_ARROW) {
            this.dropdownPanel.openDropdown(this.dropdownPanel.templateRef, this.elementRef, this.viewContainerRef);
        }
    }
}
