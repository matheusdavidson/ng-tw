import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-progress-bar-route',
    templateUrl: './c-progress-bar-route.component.html',
    styleUrls: ['./c-progress-bar-route.component.scss'],
})
export class CProgressBarRouteComponent implements OnInit {
    public bottomNavigation: any = {
        first: {
            label: 'Notification',
            link: '/components/notification',
        },
        last: {
            label: 'Select',
            link: '/components/select',
        },
    };

    public markdownLoad = `
        \`\`\`typescript
        import { TwProgressBarModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwProgressBarModule],
        });
        \`\`\`
    `;
    
    public markdownUsage = `
        \`\`\`html
        <div class="demo-container">
            <div class="demo-row">
                <div class="demo-row-title">Determinate</div>

                <div class="demo-row-content md:flex-1">
                    <tw-progress-bar
                        class="w-full"
                        [height]="6"
                        [value]="37"
                    ></tw-progress-bar>
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">Indeterminate</div>

                <div class="demo-row-content md:flex-1">
                    <tw-progress-bar
                        class="w-full"
                        [height]="6"
                        mode="indeterminate"
                    ></tw-progress-bar>
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">Buffer</div>

                <div class="demo-row-content md:flex-1">
                    <tw-progress-bar
                        class="w-full"
                        mode="buffer"
                        [height]="6"
                        [value]="37"
                        [bufferValue]="57"
                    ></tw-progress-bar>
                </div>
            </div>
        </div>
        \`\`\`
    `;

    constructor() {}

    ngOnInit(): void {}
}
