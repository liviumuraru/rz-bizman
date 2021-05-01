import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { BusinessListComponent } from './bussiness-list/business-list.component';

const routes: Routes = [
    {
        path: 'details/:id',
        component: BusinessDetailsComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        component: BusinessListComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganisationRoutingModule { }
