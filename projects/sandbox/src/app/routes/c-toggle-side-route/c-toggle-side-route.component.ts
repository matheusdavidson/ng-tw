import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-toggle-side-route',
    templateUrl: './c-toggle-side-route.component.html',
    styleUrls: ['./c-toggle-side-route.component.scss'],
})
export class CToggleSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Toggle',
            alt: '',
            fragment: 'toggle',
            link: '/components/toggle',
        },
        {
            label: 'Basic Usage',
            alt: '',
            fragment: 'basic-usage',
            link: '/components/toggle',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
