import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public layout: any = 'stroked';
    public color: any = 'basic';
    public options: any[] = [];
    // public options: any[] = [
    //     { label: 'One', value: 'value-1' },
    //     { label: 'Two', value: 'value-2' },
    //     { label: 'Three', value: 'value-3' },
    //     { label: 'Four', value: 'value-4' },
    //     { label: 'Five', value: 'value-5' },
    //     { label: 'Six', value: 'value-6' },
    //     { label: 'Seven', value: 'value-7' },
    //     { label: 'Eight', value: 'value-8' },
    //     { label: 'Nine', value: 'value-9' },
    //     { label: 'Ten', value: 'value-10' },
    //     { label: 'Eleven', value: 'value-11' },
    //     { label: 'Twelve', value: 'value-12' },
    //     { label: 'Thirteen', value: 'value-13' },
    //     { label: 'Fourteen', value: 'value-14' },
    //     { label: 'Fifteen', value: 'value-15' },
    //     { label: 'Sixteen', value: 'value-16' },
    //     { label: 'Seventeen', value: 'value-17' },
    //     { label: 'Eighteen', value: 'value-18' },
    //     { label: 'Nineteen', value: 'value-19' },
    //     { label: 'Twenty', value: 'value-20' },
    // ];

    public navigation: any[] = [
        {
            label: 'Getting Started',
            links: [
                {
                    label: 'Introduction',
                    link: '/',
                },
                {
                    label: 'Installation',
                    link: '/installation',
                },
            ],
        },
        {
            label: 'Components',
            links: [
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
                    label: 'Input',
                    link: '/components/input'
                }
            ],
        },
    ];

    public disabled: boolean = false;

    public selectControl: UntypedFormControl = new UntypedFormControl({ value: 'value-1', disabled: false });
    public selectCompareWithControl: UntypedFormControl = new UntypedFormControl({ value: null, disabled: false });
    public selectCompareWithInitialValueControl: UntypedFormControl = new UntypedFormControl({ value: null, disabled: false });
    // public selectCompareWithInitialValueControl: FormControl = new FormControl({ value: this.options[3], disabled: false });

    constructor() {
        setTimeout(() => {
            this.layout = 'raised';
            // setTimeout(()=>{
            //   this.color = 'primary'
            // }, 5000);
        }, 5000);

        setTimeout(() => {
            this.options = [
                { label: 'One', value: 'value-1' },
                { label: 'Two', value: 'value-2' },
                { label: 'Three', value: 'value-3' },
                { label: 'Four', value: 'value-4' },
                { label: 'Five', value: 'value-5' },
                { label: 'Six', value: 'value-6' },
                { label: 'Seven', value: 'value-7' },
                { label: 'Eight', value: 'value-8' },
                { label: 'Nine', value: 'value-9' },
                { label: 'Ten', value: 'value-10' },
                { label: 'Eleven', value: 'value-11' },
                { label: 'Twelve', value: 'value-12' },
                { label: 'Thirteen', value: 'value-13' },
                { label: 'Fourteen', value: 'value-14' },
                { label: 'Fifteen', value: 'value-15' },
                { label: 'Sixteen', value: 'value-16' },
                { label: 'Seventeen', value: 'value-17' },
                { label: 'Eighteen', value: 'value-18' },
                { label: 'Nineteen', value: 'value-19' },
                { label: 'Twenty', value: 'value-20' },
            ];
            this.selectCompareWithInitialValueControl.patchValue({ label: 'Four', value: 'value-4' });
            // setTimeout(() => {
            //     this.selectControl.disable();
            // }, 2000);
        }, 5000);
    }

    compareWith(option: any, value: any): boolean {
        return option?.value && value?.value ? option.value === value.value : option === value;
    }

    getGroupedNavigation() {
        const navigation: any[] = [];

        for (const nav of this.navigation) {
            navigation.push({ label: nav.label, link: null });

            //
            // Loop inner links
            for (const link of nav.links) {
                navigation.push({ label: link.label, link: link.link });
            }
        }

        return navigation;
    }
}
