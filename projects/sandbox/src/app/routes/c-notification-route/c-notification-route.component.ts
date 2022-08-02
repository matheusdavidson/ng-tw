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
            label: 'Dropdown',
            link: '/components/dropdown',
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

    public markdownUsageSegment: string = 'html';
    public markdownUsageHTML = `
        \`\`\`html
        <button
            tw-button
            (click)="showNotification()"
        >
            Show notification
        </button>
        \`\`\`
    `;

    public markdownUsageTS = `
        \`\`\`ts
        constructor(private readonly notification: TwNotification) {}

        showNotification() {
            // 
            // Create notification properties
            const notification: TwNotificationData = { type: 'success', title: 'Success', text: 'This is a success notification' };
            // show notification
            this.notification.show(notification);
        }
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
