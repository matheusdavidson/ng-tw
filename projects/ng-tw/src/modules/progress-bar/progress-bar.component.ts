import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit, Optional } from '@angular/core';

/**
 * IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueIdCounter = 0;
declare var location: any;

@Component({
    selector: 'tw-progress-bar',
    templateUrl: './progress-bar.component.html',
    styles: [
        `
            @keyframes tw-progress-bar-buffer-animation {
                to {
                    transform: translateX(var(--tw-progress-bar-height));
                }
            }

            @keyframes tw-progress-bar-buffer-indeterminate-translate {
                0% {
                    transform: translateX(0);
                }
                20% {
                    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
                    transform: translateX(0);
                }
                59.15% {
                    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
                    transform: translateX(83.67142%);
                }
                100% {
                    transform: translateX(200.611057%);
                }
            }

            @keyframes tw-progress-bar-buffer-indeterminate-translate-2 {
                0% {
                    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
                    transform: translateX(0);
                }
                25% {
                    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);

                    transform: translateX(37.651913%);
                }
                48.35% {
                    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
                    transform: translateX(84.386165%);
                }
                100% {
                    transform: translateX(160.277782%);
                }
            }

            @keyframes tw-progress-bar-buffer-indeterminate-scale {
                0% {
                    transform: scaleX(0.08);
                }
                36.65% {
                    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
                    transform: scaleX(0.08);
                }
                69.15% {
                    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
                    transform: scaleX(0.661479);
                }
                100% {
                    transform: scaleX(0.08);
                }
            }

            @keyframes tw-progress-bar-buffer-indeterminate-scale-2 {
                0% {
                    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
                    transform: scaleX(0.08);
                }
                19.15% {
                    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
                    transform: scaleX(0.457104);
                }
                44.15% {
                    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
                    transform: scaleX(0.72796);
                }
                100% {
                    transform: scaleX(0.08);
                }
            }

            :host {
                display: block;
            }

            :host[mode='indeterminate'] .progress-bar-indeterminate,
            :host[mode='indeterminate'] .progress-bar-indeterminate-2 {
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;

                transform: scale3d(0, 1, 1);
                transition: none;
                transform-origin: top left;
            }

            :host[mode='indeterminate'] .progress-bar-indeterminate {
                animation: tw-progress-bar-buffer-indeterminate-translate 2000ms infinite linear;
                left: -145.166611%;
            }

            :host[mode='indeterminate'] .progress-bar-indeterminate-2 {
                animation: tw-progress-bar-buffer-indeterminate-translate-2 2000ms infinite linear;
                left: -54.888891%;
            }

            :host[mode='indeterminate'] .progress-bar-indeterminate-inner,
            :host[mode='indeterminate'] .progress-bar-indeterminate-2-inner {
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }

            :host[mode='indeterminate'] .progress-bar-indeterminate-inner {
                animation: tw-progress-bar-buffer-indeterminate-scale 2000ms infinite linear;
            }

            :host[mode='indeterminate'] .progress-bar-indeterminate-2-inner {
                animation: tw-progress-bar-buffer-indeterminate-scale-2 2000ms infinite linear;
            }

            .animate-tw-progress-bar-buffer {
                animation: tw-progress-bar-buffer-animation 250ms linear infinite;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.id]': 'id',
        '[attr.mode]': 'mode',
        '[style.--tw-progress-bar-height]': '"-" + height * 2 + "px"',
        '[style.--tw-progress-bar-fill]': 'fill',
        '[style.--tw-progress-bar-background]': 'background',
        '[style.--tw-progress-bar-color]': 'color',
    },
})
export class ProgressBarComponent implements OnInit {
    @Input() public id: string = `tw-progress-bar-${_uniqueIdCounter++}`;

    @Input() public height: number = 4;
    @Input() public fill: string = 'fill-gray-300';
    @Input() public background: string = 'bg-gray-300';
    @Input() public color: string = 'bg-primary-500';

    @Input() public value: number = 0;
    @Input() public bufferValue: number = 0;
    @Input() public mode: 'determinate' | 'indeterminate' | 'buffer' = 'determinate';

    @HostBinding('class') class: string = 'overflow-hidden';

    private readonly _path = typeof location !== 'undefined' && location ? location.pathname.split('#')[0] : '';

    public bufferID: string = `${this.id}-buffer`;
    public bufferFillValue: string = `url(${this._path}#${this.bufferID})`;

    constructor() {}

    ngOnInit(): void {}
}
