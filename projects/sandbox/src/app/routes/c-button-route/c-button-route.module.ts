import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CButtonRouteComponent } from './c-button-route.component';
import { CButtonSideRouteComponent } from '../c-button-side-route/c-button-side-route.component';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TwButtonModule } from 'ng-tw';

const routes: Routes = [
    {
        path: '',
        component: CButtonRouteComponent,
    },
    {
        path: '',
        component: CButtonSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [CButtonRouteComponent, CButtonSideRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule, TwButtonModule],
})
export class CButtonRouteModule {}
