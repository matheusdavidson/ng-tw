import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationRouteComponent } from './installation-route.component';
import { InstallationSideRouteComponent } from '../installation-side-route/installation-side-route.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

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
    imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule],
})
export class InstallationRouteModule {}
