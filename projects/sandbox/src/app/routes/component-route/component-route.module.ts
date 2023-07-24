import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRouteComponent } from './component-route.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'button',
        loadChildren: () => import('../../routes/c-button-route/c-button-route.module').then((m) => m.CButtonRouteModule),
    },
    {
        path: 'dropdown',
        loadChildren: () => import('../../routes/c-dropdown-route/c-dropdown-route.module').then((m) => m.CDropdownRouteModule),
    },
    {
        path: 'notification',
        loadChildren: () => import('../../routes/c-notification-route/c-notification-route.module').then((m) => m.CNotificationRouteModule),
    },
    {
        path: 'progress-bar',
        loadChildren: () => import('../../routes/c-progress-bar-route/c-progress-bar-route.module').then((m) => m.CProgressBarRouteModule),
    },
    {
        path: 'select',
        loadChildren: () => import('../../routes/c-select-route/c-select-route.module').then((m) => m.CSelectRouteModule),
    },
    {
        path: 'checkbox',
        loadChildren: () => import('../../routes/c-checkbox-route/c-checkbox-route.module').then((m) => m.CCheckboxRouteModule)
    }
];

@NgModule({
    declarations: [ComponentRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ComponentRouteModule {}
