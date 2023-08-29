import { Component, OnInit } from '@angular/core';
import { TwNotification, TwNotificationData, TwNotificationType } from 'ng-tw';

@Component({
    selector: 'app-c-input-route',
    templateUrl: './c-input-route.component.html',
    styleUrls: ['./c-input-route.component.scss'],
})
export class CInputRouteComponent implements OnInit {
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
        import { TwInputModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwInputModule],
        });
        \`\`\`
    `;

    public markdownUsageSegment: string = 'html';
    public markdownUsageHTML = `
        \`\`\`html
        <tw-input label="Name" placeholder="John Doe" [(ngModel)]="name"></tw-input>
        \`\`\`
    `;

    public markdownUsageTS = `
        \`\`\`ts
        // include a field in your component for storing the data
        public name: string = '';
        \`\`\`
    `;

    constructor(private readonly notification: TwNotification) {}

    ngOnInit(): void {}
}
