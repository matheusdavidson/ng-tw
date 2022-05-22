import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-dropdown-route',
    templateUrl: './c-dropdown-route.component.html',
    styleUrls: ['./c-dropdown-route.component.scss'],
})
export class CDropdownRouteComponent implements OnInit {
    public bottomNavigation: any = {
        first: {
            label: 'Button',
            link: '/components/button',
        },
        last: {
            label: 'Notification',
            link: '/components/notification',
        },
    };

    public markdownLoad = `
        \`\`\`typescript
        import { TwDropdownModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwDropdownModule],
        });
        \`\`\`
    `;

    public options: any[] = [
        {
            label: 'Account settings',
            disabled: false,
        },
        {
            label: 'Support',
            disabled: true,
        },
        {
            label: 'License',
            disabled: false,
        },
        {
            label: 'Sign out',
            disabled: false,
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
