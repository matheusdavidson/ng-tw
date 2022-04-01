import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-notification-route',
    templateUrl: './c-notification-route.component.html',
    styleUrls: ['./c-notification-route.component.scss'],
})
export class CNotificationRouteComponent implements OnInit {
    public bottomNavigation: any = {
        first: {
            label: 'Button',
            link: '/components/button',
        },
        last: {
            label: 'Progress Bar',
            link: '/components/progress-bar',
        },
    };

    constructor() {}

    ngOnInit(): void {}
}
