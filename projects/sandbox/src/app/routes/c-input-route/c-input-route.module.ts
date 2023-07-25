import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CInputSideRouteComponent } from '../c-input-side-route/c-input-side-route.component';
import { CInputRouteComponent } from './c-input-route.component';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TwInputModule } from 'ng-tw';

const routes: Routes = [
    {
        path: '',
        component: CInputRouteComponent,
    },
    {
        path: '',
        component: CInputSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [CInputSideRouteComponent, CInputRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule, TwInputModule],
})
export class CInputRouteModule {}
