import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-notification-route',
    templateUrl: './c-toggle-route.component.html',
    styleUrls: ['./c-toggle-route.component.scss'],
})
export class CToggleRouteComponent implements OnInit {
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
        import { TwToggleModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwToggleModule],
        });
        \`\`\`
    `;

    public markdownUsageSegment: string = 'html';
    public markdownUsageHTML = `
        \`\`\`html
        <tw-toggle></tw-toggle>
        <!-- or -->
        <tw-toggle label="Click me!"></tw-toggle>
        \`\`\`
    `;

    public markdownUsageTS = `
        \`\`\`ts
        \`\`\`
    `;

    constructor() {}

    ngOnInit(): void {}
}
