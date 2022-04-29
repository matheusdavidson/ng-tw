import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSelectSideRouteComponent } from '../c-select-side-route/c-select-side-route.component';
import { CSelectRouteComponent } from './c-select-route.component';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TwSelectModule } from 'ng-tw';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: CSelectRouteComponent,
    },
    {
        path: '',
        component: CSelectSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [CSelectSideRouteComponent, CSelectRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule, TwSelectModule, ReactiveFormsModule],
})
export class CSelectRouteModule {}
