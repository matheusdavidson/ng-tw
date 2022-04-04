import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-button-route',
    templateUrl: './c-button-route.component.html',
    styleUrls: ['./c-button-route.component.scss'],
})
export class CButtonRouteComponent implements OnInit {
    public bottomNavigation: any = {
        first: {
            label: 'Installation',
            link: '/installation',
        },
        last: {
            label: 'Notification',
            link: '/components/notification',
        },
    };

    public markdownLoad = `
        \`\`\`typescript
        import { TwButtonModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwButtonModule],
        });
        \`\`\`
    `;

    public markdownCustomizePaddingColor = `
        \`\`\`html
        <button
            tw-button
            layout="raised"
            color="primary"
            ignore="bg-primary text-white py-2"
            class="bg-yellow-500 text-black py-8"
        >
            Custon button
        </button>
        \`\`\`
    `;

    public markdownButtonGroup = `
        \`\`\`html
        <div class="flex items-center">
            <button
                tw-button
                layout="stroked"
                ignore="rounded border"
                class="rounded-l border-y border-l"
            >
                Left
            </button>
            <button
                tw-button
                layout="stroked"
                ignore="rounded"
            >
                Center
            </button>
            <button
                tw-button
                layout="stroked"
                ignore="rounded border"
                class="rounded-r border-y border-r"
            >
                Right
            </button>
        </div>
        \`\`\`
    `;

    constructor() {}

    ngOnInit(): void {}
}
