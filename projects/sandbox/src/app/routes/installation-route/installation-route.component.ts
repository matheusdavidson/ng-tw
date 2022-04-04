import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-installation-route',
    templateUrl: './installation-route.component.html',
    styleUrls: ['./installation-route.component.scss'],
})
export class InstallationRouteComponent implements OnInit {
    public bottomNavigation: any = {
        first: {
            label: 'Introduction',
            link: '/',
        },
        last: {
            label: 'Button',
            link: '/components/button',
        },
    };

    public markdownInstall = `
        \`\`\`bash
        $ npm install ng-tw @angular/cdk
        \`\`\`
    `;

    public markdownCDKCSSImport = `
        \`\`\`scss
        @import '@angular/cdk/overlay-prebuilt.css';
        \`\`\`
    `;

    public markdownTailwindColorConfig = `
        \`\`\`js
        const colors = require('tailwindcss/colors');

        module.exports = {
            //...
            theme: {
                extend: {
                    colors: {
                        primary: { ...colors.indigo, DEFAULT: colors.indigo[500] },
                        secondary: { ...colors.pink, DEFAULT: colors.pink[500] },
                        danger: { ...colors.red, DEFAULT: colors.red[500] },
                    },
                },
            },
            variants: {
                extend: {
                    opacity: ['disabled'],
                    backgroundColor: ['disabled'],
                },
            },
            //...
        }
        \`\`\`

        ### Disabled Variants
        > It's also important to note that you should add the \`disabled\` variant for \`opacity\` and \`backgroundColor\`.
    `;

    public markdownTailwindContentConfig = `
        \`\`\`js
        module.exports = {
            //...
            content: [..., './node_modules/ng-tw/**/*'],
            //...
        }
        \`\`\`
    `;

    constructor() {}

    ngOnInit(): void {}
}
