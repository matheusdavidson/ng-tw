import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionComponent } from './option.component';

@NgModule({
    declarations: [OptionComponent],
    imports: [CommonModule],
    exports: [OptionComponent],
})
export class TwOptionModule {}
