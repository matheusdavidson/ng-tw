import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CProgressBarSideRouteComponent } from '../c-progress-bar-side-route/c-progress-bar-side-route.component';
import { CProgressBarRouteComponent } from './c-progress-bar-route.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CProgressBarRouteComponent,
    },
    {
        path: '',
        component: CProgressBarSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [CProgressBarSideRouteComponent, CProgressBarRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CProgressBarRouteModule {}
