import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-radio-side-route',
    templateUrl: './c-radio-side-route.component.html',
    styleUrls: ['./c-radio-side-route.component.scss'],
})
export class CRadioSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Radio',
            alt: '',
            fragment: 'radio',
            link: '/components/radio',
        },
        {
            label: 'Basic Usage',
            alt: '',
            fragment: 'basic-usage',
            link: '/components/radio',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
