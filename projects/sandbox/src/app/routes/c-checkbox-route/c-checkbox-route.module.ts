import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CCheckboxRouteComponent } from './c-checkbox-route.component';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TwCheckboxModule } from 'ng-tw';
import { CCheckboxSideRouteComponent } from '../c-checkbox-side-route/c-checkbox-side-route.component';

const routes: Routes = [
    {
        path: '',
        component: CCheckboxRouteComponent,
    },
    {
        path: '',
        component: CCheckboxSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [CCheckboxSideRouteComponent, CCheckboxRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule, TwCheckboxModule],
})
export class CCheckboxRouteModule {}
