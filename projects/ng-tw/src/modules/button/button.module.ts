import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { TwButtonConfigService, TwButtonSetup } from './button-config.service';
import { TwButtonConfig } from './button-config.interface';

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule],
    exports: [ButtonComponent],
})
export class TwButtonModule {
    static forRoot(options?: Partial<TwButtonConfig>): ModuleWithProviders<TwButtonModule> {
        return {
            ngModule: TwButtonModule,
            providers: [
                TwButtonConfigService,
                {
                    provide: TwButtonSetup,
                    useValue: options,
                },
            ],
        };
    }
}
@NgModule()
export class TwButtonConfigModule {
    static forRoot(options?: Partial<TwButtonConfig>): ModuleWithProviders<TwButtonConfigModule> {
        return {
            ngModule: TwButtonModule,
            providers: [
                TwButtonConfigService,
                {
                    provide: TwButtonSetup,
                    useValue: options,
                },
            ],
        };
    }
}
