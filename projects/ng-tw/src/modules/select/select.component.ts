import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    forwardRef,
    HostListener,
    Input,
    NgZone,
    OnInit,
    QueryList,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { defer, merge, Observable, startWith, switchMap, take } from 'rxjs';
import { OptionComponent, OptionSelectionChange } from '../option/option.component';
import { A, DOWN_ARROW, ENTER, hasModifierKey, LEFT_ARROW, RIGHT_ARROW, SPACE, UP_ARROW } from '@angular/cdk/keycodes';
import { ActiveDescendantKeyManager, LiveAnnouncer } from '@angular/cdk/a11y';

/**
 * IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;

@Component({
    selector: 'tw-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        role: 'combobox',
        'aria-autocomplete': 'none',
        // TODO: the value for aria-haspopup should be `listbox`, but currently it's difficult
        // to sync into Google, because of an outdated automated a11y check which flags it as an invalid
        // value. At some point we should try to switch it back to being `listbox`.
        'aria-haspopup': 'true',
        '[attr.id]': 'id',
        '[attr.aria-controls]': 'isOpen ? id + "-panel" : null',
        '[attr.aria-expanded]': 'isOpen',
        '[attr.aria-disabled]': 'disabled.toString()',
        '(keydown)': 'handleKeydown($event)',
    },
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true,
        },
    ],
})
export class SelectComponent implements ControlValueAccessor, OnInit, AfterContentInit {
    @Input() public placeholder: string = 'Select an option';
    @Input() public disabled: boolean = false;
    @Input() public id: string = `tw-select-${_uniqueIdCounter++}`;
    @Input() public compareWith: (o1: any, o2: any) => boolean = (o1: any, o2: any) => o1 === o2;

    @ViewChild('trigger', { static: true }) public trigger!: ElementRef;
    @ContentChildren(OptionComponent, { descendants: true }) public options!: QueryList<OptionComponent>;

    public onChange = (value: any) => {};
    public onTouched = () => {};

    public value: any = null;
    public htmlValue: any = null;

    public wasTouched: boolean = false;
    public isOpen: boolean = false;

    public overlayWidth!: string;

    private _onResizeTimeout: any = null;
    private _keyManager!: ActiveDescendantKeyManager<OptionComponent>;

    /** Combined stream of all of the child options' change events. */
    readonly optionSelectionChanges: Observable<OptionSelectionChange> = defer(() => {
        const options = this.options;

        if (options) {
            return options.changes.pipe(
                startWith(options),
                switchMap(() => merge(...options.map((option) => option.onSelectionChange)))
            );
        }

        return this.zone.onStable.pipe(
            take(1),
            switchMap(() => this.optionSelectionChanges)
        );
    }) as Observable<OptionSelectionChange>;

    @HostListener('window:resize')
    public detectResize(): void {
        // //
        // // Clear timeout
        // if (this._onResizeTimeout) clearTimeout(this._onResizeTimeout);
        // //
        // // Set timeout
        // this._onResizeTimeout = setTimeout(() => {
        //     console.log(this.trigger.nativeElement.offsetWidth);
        //     console.log(this.trigger.nativeElement.offsetHeight);
        // }, 470);
    }

    constructor(public cdr: ChangeDetectorRef, private readonly zone: NgZone) {}

    ngOnInit(): void {}

    ngAfterContentInit(): void {
        this._initKeyManager();

        this.optionSelectionChanges.subscribe((event) => {
            this.onSelect(event.source, event.isUserInput, event.content);
            this.cdr.markForCheck();
        });
    }

    writeValue(value: any) {
        this.value = value;
    }

    registerOnChange(onChange: any) {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: any) {
        this.onTouched = onTouched;
    }

    markAsTouched() {
        if (!this.wasTouched) {
            this.onTouched();
            this.wasTouched = true;
        }
    }

    setDisabledState(isDisabled: boolean) {
        //
        // Set disabled
        this.disabled = isDisabled;

        //
        // Set aria-disabled
        this.trigger.nativeElement.setAttribute('aria-disabled', isDisabled.toString());
    }

    openPanel() {
        //
        // Validate disabled
        if (this.disabled === true) return;

        //
        // open panel
        this.isOpen = true;

        //
        // Scroll if we have an active item
        if (this._keyManager.activeItem) this._keyManager.activeItem.setActiveStylesWithDelay();
    }

    closePanel() {
        //
        // Update manager active item
        if (this.value) this._updateKeyManagerActiveItem(this.value);

        // close
        this.isOpen = false;
    }

    backdropClick() {
        this.closePanel();
    }

    selectOption(value: any) {
        this.value = value;

        this.onChange(value);
        this.markAsTouched();
    }

    onSelect(source: OptionComponent, isUserInput: boolean, content: ElementRef) {
        //
        // Validate value is different
        if (this.value === source.value) return this.closePanel();

        //
        // Loop options and deselect all except the selected one
        this.options.forEach((option) => {
            if (option.id !== source.id) {
                option.deselect();
            }
        });

        //
        // Select option
        this.selectOption(source.value);

        //
        // Update content
        this.updateContent(content, source.value);

        //
        // Update manager active item
        this._updateKeyManagerActiveItem(this.value);

        //
        // Close
        this.closePanel();
    }

    updateContent(content: ElementRef, value: any) {
        this.htmlValue = value ? content.nativeElement.innerHTML : '';
    }

    handleKeydown(event: KeyboardEvent) {
        if (!this.disabled) {
            this.isOpen === true ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
    }

    private _handleClosedKeydown(event: KeyboardEvent): void {
        const manager = this._keyManager;

        manager.onKeydown(event);
    }

    /** Handles keyboard events when the selected is open. */
    private _handleOpenKeydown(event: KeyboardEvent): void {
        const manager = this._keyManager;
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
        const isTyping = manager.isTyping();

        if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.closePanel();
            // Don't do anything in this case if the user is typing,
            // because the typing sequence can include the space key.
        } else if (!isTyping && (keyCode === ENTER || keyCode === SPACE) && manager.activeItem && !hasModifierKey(event)) {
            event.preventDefault();
            manager.activeItem.selectViaInteraction();
        } else {
            manager.onKeydown(event);
        }
    }

    private _initKeyManager() {
        this._keyManager = new ActiveDescendantKeyManager<OptionComponent>(this.options)
            .withTypeAhead()
            .withVerticalOrientation()
            .withHomeAndEnd()
            .withAllowedModifierKeys(['shiftKey']);

        this._keyManager.change.pipe().subscribe(() => {
            if (!this.isOpen && this._keyManager.activeItem) {
                this._keyManager.activeItem.selectViaInteraction();
            }
        });
    }

    private _updateKeyManagerActiveItem(value: any) {
        //
        // Set key manager
        const manager = this._keyManager;

        //
        // Update focus for different values
        if (!this.compareWith(manager.activeItem?.value, value)) {
            //
            // Find selected option index
            const correspondingOption = this.options.find((option: OptionComponent) => {
                return option.value != null && this.compareWith(option.value, value);
            });
            // validate and update active item
            if (correspondingOption) manager.setActiveItem(correspondingOption);
        }
    }
}

//
// set scroll to selected option
// element scroll is okay on the second time i open the panel
// but not on the first time
