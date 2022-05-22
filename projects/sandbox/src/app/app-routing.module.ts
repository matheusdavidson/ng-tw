import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./routes/introduction-route/introduction-route.module').then((m) => m.IntroductionRouteModule),
    },
    {
        path: 'installation',
        loadChildren: () => import('./routes/installation-route/installation-route.module').then((m) => m.InstallationRouteModule),
    },
    {
        path: 'components',
        loadChildren: () => import('./routes/component-route/component-route.module').then((m) => m.ComponentRouteModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 84],
    initialNavigation: 'enabledBlocking',
}),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
