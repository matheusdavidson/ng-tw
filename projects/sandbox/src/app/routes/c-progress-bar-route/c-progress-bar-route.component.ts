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

    constructor() {}

    ngOnInit(): void {}
}
