import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-select-route',
    templateUrl: './c-select-route.component.html',
    styleUrls: ['./c-select-route.component.scss'],
})
export class CSelectRouteComponent implements OnInit {
    public bottomNavigation: any = {
        first: {
            label: 'Progress Bar',
            link: '/components/progress-bar',
        },
        last: null,
    };

    constructor() {}

    ngOnInit(): void {}
}
