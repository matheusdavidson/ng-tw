import { Directive, Input, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { TwDropdownPanel } from './dropdown-panel.interface';

@Directive({
    selector: '[twDropdownTriggerFor]',
    host: {
        '(click)': 'toggleDropdown(dropdownPanel.templateRef, elementRef, viewContainerRef)',
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
}
