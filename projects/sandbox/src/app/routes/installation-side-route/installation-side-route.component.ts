import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-installation-side-route',
    templateUrl: './installation-side-route.component.html',
    styleUrls: ['./installation-side-route.component.scss'],
})
export class InstallationSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Installation',
            alt: '',
            fragment: 'installation',
            link: '/installation',
        },
        {
            label: 'Tailwind Config',
            alt: '',
            fragment: 'tailwind-config',
            link: '/installation',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
