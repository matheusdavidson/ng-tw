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
            label: 'Dropdown',
            link: '/components/dropdown',
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
    
    public markdownLayoutAndColor = `
        \`\`\`html
        <div class="demo-container">

            <div class="demo-row">
                <div class="demo-row-title">Basic</div>

                <div class="demo-row-content">
                    <button tw-button>
                        Basic
                    </button>

                    <button
                        tw-button
                        color="primary"
                    >
                        Primary
                    </button>

                    <button
                        tw-button
                        color="secondary"
                    >
                        Secondary
                    </button>

                    <button
                        tw-button
                        color="danger"
                    >
                        Danger
                    </button>

                    <button
                        tw-button
                        disabled
                    >
                        Disabled
                    </button>

                    <a
                        tw-button
                        disabled
                        href="https://www.google.com"
                        target="_blank"
                    >
                        Link
                    </a>
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">Raised</div>

                <div class="demo-row-content">
                    <button
                        tw-button
                        layout="raised"
                    >
                        Basic
                    </button>

                    <button
                        tw-button
                        color="primary"
                        layout="raised"
                    >
                        Primary
                    </button>

                    <button
                        tw-button
                        color="secondary"
                        layout="raised"
                    >
                        Secondary
                    </button>

                    <button
                        tw-button
                        color="danger"
                        layout="raised"
                    >
                        Danger
                    </button>

                    <button
                        tw-button
                        layout="raised"
                        disabled
                    >
                        Disabled
                    </button>

                    <a
                        tw-button
                        disabled
                        layout="raised"
                        href="https://www.google.com"
                        target="_blank"
                    >
                        Link
                    </a>
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">Stroked</div>

                <div class="demo-row-content">
                    <button
                        tw-button
                        layout="stroked"
                    >
                        Basic
                    </button>

                    <button
                        tw-button
                        color="primary"
                        layout="stroked"
                    >
                        Primary
                    </button>

                    <button
                        tw-button
                        color="secondary"
                        layout="stroked"
                    >
                        Secondary
                    </button>

                    <button
                        tw-button
                        color="danger"
                        layout="stroked"
                    >
                        Danger
                    </button>

                    <button
                        tw-button
                        layout="stroked"
                        disabled
                    >
                        Disabled
                    </button>

                    <a
                        tw-button
                        disabled
                        layout="stroked"
                        href="https://www.google.com"
                        target="_blank"
                    >
                        Link
                    </a>
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">Flat</div>

                <div class="demo-row-content">
                    <button
                        tw-button
                        layout="flat"
                    >
                        Basic
                    </button>

                    <button
                        tw-button
                        color="primary"
                        layout="flat"
                    >
                        Primary
                    </button>

                    <button
                        tw-button
                        color="secondary"
                        layout="flat"
                    >
                        Secondary
                    </button>

                    <button
                        tw-button
                        color="danger"
                        layout="flat"
                    >
                        Danger
                    </button>

                    <button
                        tw-button
                        layout="flat"
                        disabled
                    >
                        Disabled
                    </button>

                    <a
                        tw-button
                        disabled
                        layout="flat"
                        href="https://www.google.com"
                        target="_blank"
                    >
                        Link
                    </a>
                </div>
            </div>

        </div>

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
