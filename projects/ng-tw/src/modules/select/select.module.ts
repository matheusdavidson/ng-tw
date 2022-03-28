import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TwOptionModule } from '../option/option.module';

@NgModule({
    declarations: [SelectComponent],
    imports: [CommonModule, OverlayModule, TwOptionModule],
    exports: [SelectComponent, TwOptionModule],
})
export class TwSelectModule {}
