import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationRouteComponent } from './installation-route.component';
import { InstallationSideRouteComponent } from '../installation-side-route/installation-side-route.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: InstallationRouteComponent,
    },
    {
        path: '',
        component: InstallationSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [InstallationRouteComponent, InstallationSideRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class InstallationRouteModule {}
