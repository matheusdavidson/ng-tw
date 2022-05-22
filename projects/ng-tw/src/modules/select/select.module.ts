import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TwOptionModule } from '../option/option.module';
import { TwSelectConfig } from './select-config.interface';
import { TwSelectConfigService, TwSelectSetup } from './select-config.service';

@NgModule({
    declarations: [SelectComponent],
    imports: [CommonModule, OverlayModule, TwOptionModule],
    exports: [SelectComponent, TwOptionModule],
})
export class TwSelectModule {
    static forRoot(options?: Partial<TwSelectConfig>): ModuleWithProviders<TwSelectModule> {
        return {
            ngModule: TwSelectModule,
            providers: [
                TwSelectConfigService,
                {
                    provide: TwSelectSetup,
                    useValue: options,
                },
            ],
        };
    }
}

@NgModule()
export class TwSelectConfigModule {
    static forRoot(options?: Partial<TwSelectConfig>): ModuleWithProviders<TwSelectConfigModule> {
        return {
            ngModule: TwSelectModule,
            providers: [
                TwSelectConfigService,
                {
                    provide: TwSelectSetup,
                    useValue: options,
                },
            ],
        };
    }
}
