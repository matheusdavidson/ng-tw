import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CDropdownSideRouteComponent } from '../c-dropdown-side-route/c-dropdown-side-route.component';
import { CDropdownRouteComponent } from './c-dropdown-route.component';
import { Routes, RouterModule } from '@angular/router';
import { TwButtonModule, TwDropdownModule } from 'ng-tw';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
    {
        path: '',
        component: CDropdownRouteComponent,
    },
    {
        path: '',
        component: CDropdownSideRouteComponent,
        outlet: 'side',
    },
];

@NgModule({
    declarations: [CDropdownSideRouteComponent, CDropdownRouteComponent],
    imports: [CommonModule, RouterModule.forChild(routes), MarkdownModule, TwDropdownModule, TwButtonModule],
})
export class CDropdownRouteModule {}
