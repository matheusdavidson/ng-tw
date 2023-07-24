import { Component, OnInit } from '@angular/core';
import { TwNotification, TwNotificationData, TwNotificationType } from 'ng-tw';

@Component({
    selector: 'app-c-notification-route',
    templateUrl: './c-radio-route.component.html',
    styleUrls: ['./c-radio-route.component.scss'],
})
export class CRadioRouteComponent implements OnInit {
    public radioOptions: Array<any> = [
        {
            name: "Hello",
            value: 1
        },
        {
            name: "World",
            value: 2
        },
        {
            name: "!",
            value: 3
        }
    ]

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
        import { TwRadioModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwRadioModule],
        });
        \`\`\`
    `;

    public markdownUsageSegment: string = 'html';
    public markdownUsageHTML = `
        \`\`\`html
        <tw-radio label="Example Radio" [items]="radioOptions"></tw-radio>
        \`\`\`
    `;

    public markdownUsageTS = `
        \`\`\`ts
        public radioOptions: Array<any> = [
            {
                name: "Hello",
                value: 1
            },
            {
                name: "World",
                value: 2
            },
            {
                name: "!",
                value: 3
            }
        ]
        \`\`\`
    `;

    constructor(private readonly notification: TwNotification) {}

    ngOnInit(): void {}
}
