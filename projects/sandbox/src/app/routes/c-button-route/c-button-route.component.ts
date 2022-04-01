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

    constructor() {}

    ngOnInit(): void {}
}
