import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { defaultTwNotificationConfig, TW_NOTIFICATION_CONFIG_TOKEN } from './notification-config';

@NgModule({
    declarations: [NotificationComponent],
    imports: [CommonModule, OverlayModule],
    exports: [NotificationComponent],
})
export class TwNotificationModule {
    public static forRoot(config = defaultTwNotificationConfig): ModuleWithProviders<TwNotificationModule> {
        return {
            ngModule: TwNotificationModule,
            providers: [
                {
                    provide: TW_NOTIFICATION_CONFIG_TOKEN,
                    useValue: { ...defaultTwNotificationConfig, ...config },
                },
            ],
        };
    }
}
