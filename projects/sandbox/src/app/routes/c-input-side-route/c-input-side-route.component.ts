import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-input-side-route',
    templateUrl: './c-input-side-route.component.html',
    styleUrls: ['./c-input-side-route.component.scss'],
})
export class CInputSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Input',
            alt: '',
            fragment: 'input',
            link: '/components/input',
        },
        {
            label: 'Basic Usage',
            alt: '',
            fragment: 'basic-usage',
            link: '/components/input',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
