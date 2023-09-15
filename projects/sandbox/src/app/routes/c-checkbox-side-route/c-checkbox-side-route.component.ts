import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-checkbox-side-route',
    templateUrl: './c-checkbox-side-route.component.html',
    styleUrls: ['./c-checkbox-side-route.component.scss'],
})
export class CCheckboxSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Checkbox',
            alt: '',
            fragment: 'checkbox',
            link: '/components/checkbox',
        },
        {
            label: 'Basic Usage',
            alt: '',
            fragment: 'basic-usage',
            link: '/components/checkbox',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
