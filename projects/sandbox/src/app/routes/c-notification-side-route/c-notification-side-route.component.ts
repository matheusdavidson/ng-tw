import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-notification-side-route',
    templateUrl: './c-notification-side-route.component.html',
    styleUrls: ['./c-notification-side-route.component.scss'],
})
export class CNotificationSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Notification',
            alt: '',
            fragment: 'notification',
            link: '/components/notification',
        },
        {
            label: 'Basic Usage',
            alt: '',
            fragment: 'basic-usage',
            link: '/components/notification',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
