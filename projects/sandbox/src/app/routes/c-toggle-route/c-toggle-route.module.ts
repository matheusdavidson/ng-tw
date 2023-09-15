import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CToggleRouteComponent } from './c-toggle-route.component';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CToggleSideRouteComponent } from '../c-toggle-side-route/c-toggle-side-route.component';
import { TwToggleModule } from 'projects/ng-tw/src/public-api';

const routes: Routes = [
    {
        path: '',
        component: CToggleRouteComponent,
    },
    {
        path: '',
        component: CToggleSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [CToggleSideRouteComponent, CToggleRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule, TwToggleModule],
})
export class CToggleRouteModule {}
