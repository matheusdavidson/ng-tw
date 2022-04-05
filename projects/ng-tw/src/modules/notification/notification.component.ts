import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { TwNotificationData, TW_NOTIFICATION_CONFIG_TOKEN, TwNotificationConfig } from './notification-config';
import { TwNotificationRef } from './notification-ref';
import { twNotificationAnimations, TwNotificationAnimationState } from './notification.animation';

@Component({
    selector: 'tw-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css'],
    animations: [twNotificationAnimations.fadeNotification],
})
export class NotificationComponent implements OnInit, OnDestroy {
    animationState: TwNotificationAnimationState = 'default';

    private intervalId!: number | any;

    constructor(
        readonly data: TwNotificationData,
        readonly ref: TwNotificationRef,
        @Inject(TW_NOTIFICATION_CONFIG_TOKEN) public notificationConfig: TwNotificationConfig
    ) {
        //
        // Extend data with defalt notification config
        this.data = { ...this.notificationConfig, ...this.data };
    }

    ngOnInit() {
        //
        // Set autoclose
        if (this.data.autoClose === true) this.intervalId = setTimeout(() => (this.animationState = 'closing'), this.data.autoCloseTimeout);
    }

    ngOnDestroy() {
        //
        // Clear autoclose
        if (this.data.autoClose === true) clearTimeout(this.intervalId);
    }

    close() {
        this.ref.close();
    }

    onFadeFinished(event: AnimationEvent) {
        const { toState } = event;
        const isFadeOut = (toState as TwNotificationAnimationState) === 'closing';
        const itFinished = this.animationState === 'closing';

        if (isFadeOut && itFinished) {
            this.close();
        }
    }
}
