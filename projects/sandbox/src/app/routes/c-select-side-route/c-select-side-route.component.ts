import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-select-side-route',
    templateUrl: './c-select-side-route.component.html',
    styleUrls: ['./c-select-side-route.component.scss'],
})
export class CSelectSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Select',
            alt: '',
            fragment: 'select',
            link: '/components/select',
        },
        {
            label: 'Basic Usage',
            alt: '',
            fragment: 'basic-usage',
            link: '/components/select',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
