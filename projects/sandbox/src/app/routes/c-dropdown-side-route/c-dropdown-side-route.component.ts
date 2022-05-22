import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-dropdown-side-route',
    templateUrl: './c-dropdown-side-route.component.html',
    styleUrls: ['./c-dropdown-side-route.component.scss'],
})
export class CDropdownSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Dropdown',
            alt: '',
            fragment: 'dropdown',
            link: '/components/dropdown',
        },
        {
            label: 'Basic Usage',
            alt: '',
            fragment: 'basic-usage',
            link: '/components/dropdown',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
