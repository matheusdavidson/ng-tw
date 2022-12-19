import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'app-c-select-route',
    templateUrl: './c-select-route.component.html',
    styleUrls: ['./c-select-route.component.scss'],
})
export class CSelectRouteComponent implements OnInit {
    public bottomNavigation: any = {
        first: {
            label: 'Progress Bar',
            link: '/components/progress-bar',
        },
        last: null,
    };

    public markdownLoad = `
        \`\`\`typescript
        import { TwSelectModule } from 'ng-tw';

        @NgModule({
            imports: [..., TwSelectModule],
        });
        \`\`\`
    `;

    public markdownUsage = `
        \`\`\`html
        <div class="demo-container">
            <div class="demo-row">
                <div class="demo-row-title">Basic</div>

                <div class="demo-row-content md:flex-1">
                    <tw-select
                        class="w-64 max-w-full"
                        [formControl]="selectControl"
                    >
                        <tw-option>Select an option</tw-option>
                        <tw-option
                            activeClass="bg-gray-100"
                            selectedClass="font-bold"
                            *ngFor="let item of options"
                            [value]="item.value"
                        >
                            {{item.label}}
                        </tw-option>
                    </tw-select>
                </div>

                <div class="md:flex-1">
                    Selected Value: {{ selectControl.value ? selectControl.value : '---' }}
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">Custom arrow</div>

                <div class="demo-row-content md:flex-1">
                    <tw-select
                        class="w-64 max-w-full"
                        [formControl]="selectCustomArrowControl"
                    >
                        <svg
                            arrow-icon
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <tw-option>Select an option</tw-option>
                        <tw-option
                            activeClass="bg-gray-100"
                            selectedClass="font-bold"
                            *ngFor="let item of options"
                            [value]="item.value"
                        >
                            {{item.label}}
                        </tw-option>
                    </tw-select>
                </div>

                <div class="md:flex-1">
                    Selected Value: {{ selectCustomArrowControl.value ? selectCustomArrowControl.value : '---' }}
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">Compare with</div>

                <div class="demo-row-content md:flex-1">
                    <tw-select
                        class="w-64 max-w-full"
                        [formControl]="selectCompareWithControl"
                        [compareWith]="compareWith"
                    >
                        <tw-option>Select an option</tw-option>
                        <tw-option
                            activeClass="bg-gray-100"
                            selectedClass="font-bold"
                            *ngFor="let item of options"
                            [value]="item.value"
                        >
                            {{item.label}}
                        </tw-option>
                    </tw-select>
                </div>

                <div class="md:flex-1">
                    Selected Value: {{ selectCompareWithControl.value ? (selectCompareWithControl.value | json) : '---' }}
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">Compare with <br> Initial value</div>
                <div class="demo-row-content md:flex-1">
                    <tw-select
                        class="w-64 max-w-full"
                        [formControl]="selectCompareWithInitialValueControl"
                        [compareWith]="compareWith"
                    >
                        <tw-option>Select an option</tw-option>
                        <tw-option
                            activeClass="bg-gray-100"
                            selectedClass="font-bold"
                            *ngFor="let item of options"
                            [value]="item"
                        >
                            {{item.label}}
                        </tw-option>
                    </tw-select>
                </div>

                <div class="md:flex-1">
                    Selected Value: {{ selectCompareWithInitialValueControl.value ? (selectCompareWithInitialValueControl.value | json) : '---' }}
                </div>
            </div>

            <div class="demo-row">
                <div class="demo-row-title">With Input</div>

                <div class="demo-row-content md:flex-1">
                    <tw-select
                        class="w-64 max-w-full"
                        [formControl]="selectControlWithInput"
                    >
                        <input
                            type="text"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Search.."
                        />

                        <tw-option>Select an option</tw-option>
                        <tw-option
                            activeClass="bg-gray-100"
                            selectedClass="font-bold"
                            *ngFor="let item of options"
                            [value]="item.value"
                        >
                            {{item.label}}
                        </tw-option>
                    </tw-select>
                </div>

                <div class="md:flex-1">
                    Selected Value: {{ selectControl.value ? selectControl.value : '---' }}
                </div>
            </div>
        </div>
        \`\`\`
    `;

    public options: any[] = [
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

    public optionsForWithInput: any[] = [];

    public selectControl: UntypedFormControl = new UntypedFormControl({ value: 'value-1', disabled: false });
    public selectCustomArrowControl: UntypedFormControl = new UntypedFormControl({ value: null, disabled: false });
    public selectCompareWithControl: UntypedFormControl = new UntypedFormControl({ value: null, disabled: false });
    public selectCompareWithInitialValueControl: UntypedFormControl = new UntypedFormControl({ value: null, disabled: false });
    public selectWithInputControl: UntypedFormControl = new UntypedFormControl({ value: null, disabled: false });
    public selectWithModel: string = 'value-1';

    constructor() {}

    ngOnInit(): void {
        this.optionsForWithInput = cloneDeep(this.options);
    }

    compareWith(option: any, value: any): boolean {
        return option?.value && value?.value ? option.value === value.value : option === value;
    }

    change(form: UntypedFormControl) {
        form.value === 'value-1'
            ? form.patchValue('value-4')
            : form.value === 'value-4'
            ? form.patchValue('value-2')
            : form.patchValue('value-1');
    }

    reset(form: UntypedFormControl) {
        form.reset();
    }
}
