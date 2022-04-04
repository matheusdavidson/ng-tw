import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-button-side-route',
    templateUrl: './c-button-side-route.component.html',
    styleUrls: ['./c-button-side-route.component.scss'],
})
export class CButtonSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Button',
            alt: '',
            fragment: 'button',
            link: '/components/button',
        },
        {
            label: 'Lauout and Colors',
            alt: '',
            fragment: 'layout-and-colors',
            link: '/components/button',
        },
        {
            label: 'Customizing',
            alt: '',
            fragment: 'customizing',
            link: '/components/button',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
