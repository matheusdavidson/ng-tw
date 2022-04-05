import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CNotificationSideRouteComponent } from '../c-notification-side-route/c-notification-side-route.component';
import { CNotificationRouteComponent } from './c-notification-route.component';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TwButtonModule } from 'ng-tw';

const routes: Routes = [
    {
        path: '',
        component: CNotificationRouteComponent,
    },
    {
        path: '',
        component: CNotificationSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [CNotificationSideRouteComponent, CNotificationRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule, TwButtonModule],
})
export class CNotificationRouteModule {}
