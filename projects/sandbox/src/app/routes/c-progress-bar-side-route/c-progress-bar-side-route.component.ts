import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-c-progress-bar-side-route',
    templateUrl: './c-progress-bar-side-route.component.html',
    styleUrls: ['./c-progress-bar-side-route.component.scss'],
})
export class CProgressBarSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Progress Bar',
            alt: '',
            fragment: 'progress-bar',
            link: '/components/progress-bar',
        },
        {
            label: 'Basic Usage',
            alt: '',
            fragment: 'basic-usage',
            link: '/components/progress-bar',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
