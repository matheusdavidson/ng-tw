import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionRouteComponent } from './introduction-route.component';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionSideRouteComponent } from '../introduction-side-route/introduction-side-route.component';

const routes: Routes = [
    {
        path: '',
        component: IntroductionRouteComponent,
    },
    {
        path: '',
        component: IntroductionSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [IntroductionRouteComponent, IntroductionSideRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class IntroductionRouteModule {}
