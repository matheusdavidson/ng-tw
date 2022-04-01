import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./routes/introduction-route/introduction-route.module').then((m) => m.IntroductionRouteModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            scrollOffset: [0, 84],
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
