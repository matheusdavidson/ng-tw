import { Component, OnInit } from '@angular/core';
import { TwNotification, TwNotificationData, TwNotificationType } from 'ng-tw';

@Component({
    selector: 'app-c-notification-route',
    templateUrl: './c-checkbox-route.component.html',
    styleUrls: ['./c-checkbox-route.component.scss'],
})
export class CCheckboxRouteComponent implements OnInit {
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
        import { TwCheckboxModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwCheckboxModule],
        });
        \`\`\`
    `;

    public markdownUsageSegment: string = 'html';
    public markdownUsageHTML = `
        \`\`\`html
        <tw-checkbox label="Click me!"></tw-checkbox>
        <!-- or -->
        <tw-checkbox label="Click me!" toggle="true"></tw-checkbox>
        \`\`\`
    `;

    public markdownUsageTS = `
        \`\`\`ts
        \`\`\`
    `;

    constructor(private readonly notification: TwNotification) {}

    ngOnInit(): void {}
}
