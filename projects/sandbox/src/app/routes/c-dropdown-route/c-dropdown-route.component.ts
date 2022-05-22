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

    public markdownUsage = `
        \`\`\`html
        <div class="demo-container">
            <div class="demo-row">
                <div class="demo-row-title">Basic</div>

                <div class="demo-row-content md:flex-1">
                    <button
                        tw-button
                        layout="stroked"
                        [twDropdownTriggerFor]="dropdown"
                    >
                        Options

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 inline-block -mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <tw-dropdown
                        class="w-40"
                        xPosition="end"
                        #dropdown
                    >
                        <a
                            tw-dropdown-item
                            *ngFor="let item of options"
                        >
                            {{item.label}}
                        </a>
                    </tw-dropdown>
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">Disabled item</div>

                <div class="demo-row-content md:flex-1">
                    <button
                        tw-button
                        layout="stroked"
                        [twDropdownTriggerFor]="dropdown2"
                    >
                        Options

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 inline-block -mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <tw-dropdown
                        class="w-40"
                        xPosition="end"
                        #dropdown2
                    >
                        <button
                            class="disabled:text-gray-200"
                            tw-dropdown-item
                            *ngFor="let item of options"
                            [disabled]="item.disabled"
                        >
                            {{item.label}}
                        </button>
                    </tw-dropdown>
                </div>
            </div>
        </div>
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
