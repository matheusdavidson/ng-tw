import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-introduction-route',
    templateUrl: './introduction-route.component.html',
    styleUrls: ['./introduction-route.component.scss'],
})
export class IntroductionRouteComponent implements OnInit {
    public components: any[] = [
        {
            label: 'Button',
            link: '/components/button',
        },
        {
            label: 'Dropdown',
            link: '/components/dropdown',
        },
        {
            label: 'Notification',
            link: '/components/notification',
        },
        {
            label: 'Progress Bar',
            link: '/components/progress-bar',
        },
        {
            label: 'Select',
            link: '/components/select',
        },
        {
            label: 'Checkbox',
            link: '/components/checkbox'
        },
        {
            label: 'Toggle',
            link: '/components/toggle'
        }
    ];

    public bottomNavigation: any = {
        first: null,
        last: {
            label: 'Installation',
            link: '/installation',
        },
    };

    constructor() {}

    ngOnInit(): void {}

    teste() {
        console.log('teste');
    }
}
