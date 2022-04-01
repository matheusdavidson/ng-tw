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

    constructor() {}

    ngOnInit(): void {}
}
