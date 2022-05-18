import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TwDropdownTriggerFor } from './dropdown-trigger-for.directive';
import { DropdownItemComponent } from './dropdown-item.component';

@NgModule({
    declarations: [DropdownComponent, TwDropdownTriggerFor, DropdownItemComponent],
    imports: [CommonModule, OverlayModule],
    exports: [DropdownComponent, TwDropdownTriggerFor, DropdownItemComponent],
})
export class TwDropdownModule {}
