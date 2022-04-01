import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-introduction-side-route',
    templateUrl: './introduction-side-route.component.html',
    styleUrls: ['./introduction-side-route.component.scss'],
})
export class IntroductionSideRouteComponent implements OnInit {
    public navigation: any[] = [
        {
            label: 'Components',
            alt: '',
            fragment: 'components',
            link: '/',
        },
        {
            label: 'Source',
            alt: '',
            fragment: 'source',
            link: '/',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
