import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRadioSideRouteComponent } from '../c-radio-side-route/c-radio-side-route.component';
import { CRadioRouteComponent } from './c-radio-route.component';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TwRadioModule } from 'ng-tw';

const routes: Routes = [
    {
        path: '',
        component: CRadioRouteComponent,
    },
    {
        path: '',
        component: CRadioSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [CRadioSideRouteComponent, CRadioRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule, TwRadioModule],
})
export class CRadioRouteModule {}
