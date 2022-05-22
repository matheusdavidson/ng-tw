import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TwDropdownTriggerFor } from './dropdown-trigger-for.directive';
import { DropdownItemComponent } from './dropdown-item.component';
import { TwDropdownConfig } from './dropdown-config.interface';
import { TwDropdownConfigService, TwDropdownSetup } from './dropdown-config.service';

@NgModule({
    declarations: [DropdownComponent, TwDropdownTriggerFor, DropdownItemComponent],
    imports: [CommonModule, OverlayModule],
    exports: [DropdownComponent, TwDropdownTriggerFor, DropdownItemComponent],
})
export class TwDropdownModule {
    static forRoot(options?: Partial<TwDropdownConfig>): ModuleWithProviders<TwDropdownModule> {
        return {
            ngModule: TwDropdownModule,
            providers: [
                TwDropdownConfigService,
                {
                    provide: TwDropdownSetup,
                    useValue: options,
                },
            ],
        };
    }
}

@NgModule()
export class TwDropdownConfigModule {
    static forRoot(options?: Partial<TwDropdownConfig>): ModuleWithProviders<TwDropdownConfigModule> {
        return {
            ngModule: TwDropdownModule,
            providers: [
                TwDropdownConfigService,
                {
                    provide: TwDropdownSetup,
                    useValue: options,
                },
            ],
        };
    }
}
