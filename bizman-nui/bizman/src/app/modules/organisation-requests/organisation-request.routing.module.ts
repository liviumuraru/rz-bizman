import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationPersonalRequestListComponent } from './organisation-personal-request-list/organisation-personal-request-list.component';
import { OrganisationPersonalRequestNewComponent } from './organisation-personal-request-new/organisation-personal-request-new.component';

const routes: Routes = [
    {
        path: '',
        component: OrganisationPersonalRequestListComponent,
        pathMatch: 'full'
    },
    {
        path: 'create',
        component: OrganisationPersonalRequestNewComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganisationRequestRoutingModule { }
