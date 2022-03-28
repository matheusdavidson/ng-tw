import { ENTER, hasModifierKey, SPACE } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as _ from 'lodash';

/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;

/** Event object emitted by MatOption when selected or deselected. */
export class OptionSelectionChange<T = any> {
    constructor(
        /** Reference to the option that emitted the event. */
        public source: OptionComponent<T>,
        /** Whether the change in the option's value was a result of a user action. */
        public isUserInput: boolean = false,
        /** Content element */
        public content: ElementRef
    ) {}
}

@Component({
    selector: 'tw-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.css'],
    host: {
        '(click)': 'select(true)',
        '[attr.id]': 'id',
    },
})
export class OptionComponent<T = any> implements OnInit {
    @Input() public value: any;
    @Input() public disabled: boolean = false;
    @Input() public id: string = `tw-option-${_uniqueIdCounter++}`;

    @Input() public useSelectedIndicator: boolean = true;
    @Input() public selectedIndicatorSide: 'left' | 'right' = 'right';

    @Output() readonly onSelectionChange = new EventEmitter<OptionSelectionChange<T>>();

    @ViewChild('content') public contentElement!: ElementRef;

    public selected: boolean = false;
    public active: boolean = false;

    constructor(private readonly element: ElementRef<HTMLElement>) {}

    ngOnInit(): void {}

    /** Emits the selection change event. */
    private _emitSelectionChangeEvent(isUserInput = false): void {
        this.onSelectionChange.emit(new OptionSelectionChange<T>(this, isUserInput, this.contentElement));
    }

    /** Selects the option. */
    select(isUserInput: boolean = false): void {
        //
        // Validate disabled and alredy selected
        if (this.disabled) return;

        //
        // Select and emit event
        this._emitSelectionChangeEvent(isUserInput);
        // set select if we have a value
        if (this.value) this.selected = true;
    }

    deselect(isUserInput: boolean = false): void {
        //
        // Deselect and emit event
        this.selected = false;
    }

    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setActiveStyles(): void {
        if (!this.active) {
            this.active = true;
            this.scrollIntoView();
        }
    }

    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setInactiveStyles(): void {
        if (this.active) {
            this.active = false;
        }
    }

    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel(): string {
        return this.element.nativeElement.textContent ? this.element.nativeElement.textContent : '';
    }

    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     */
    selectViaInteraction(): void {
        if (!this.disabled) {
            this.selected = true;
            this._emitSelectionChangeEvent(true);
        }
    }

    scrollIntoView() {
        this.element.nativeElement.scrollIntoView();
    }

    setActiveStylesWithDelay(): void {
        setTimeout(() => {
            if (!this.active) {
                this.active = true;
            }

            this.scrollIntoView();
        });
    }
}
