import { Component, OnInit } from '@angular/core';
import { TwNotification, TwNotificationData, TwNotificationType } from 'ng-tw';

@Component({
    selector: 'app-c-notification-route',
    templateUrl: './c-notification-route.component.html',
    styleUrls: ['./c-notification-route.component.scss'],
})
export class CNotificationRouteComponent implements OnInit {
    public bottomNavigation: any = {
        first: {
            label: 'Button',
            link: '/components/button',
        },
        last: {
            label: 'Progress Bar',
            link: '/components/progress-bar',
        },
    };

    public markdownLoad = `
        \`\`\`typescript
        import { TwNotificationModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwNotificationModule.forRoot()],
        });
        \`\`\`
    `;

    constructor(private readonly notification: TwNotification) {}

    ngOnInit(): void {}

    openNotification(type: TwNotificationType, title: string | null = null, text: string | null = null): void {
        //
        // Set values
        const notification: TwNotificationData = { type };
        // add title and text
        if (title) notification.title = title;
        if (text) notification.text = text;

        //
        // Show notification
        this.notification.show(notification);
    }
}
