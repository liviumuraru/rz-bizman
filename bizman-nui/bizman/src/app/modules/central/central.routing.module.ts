import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralComponent } from './central.component';

const routes: Routes = [
  {
    path: '',
    component: CentralComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('../welcome/welcome.module').then(module => module.WelcomeModule),
      },
      {
        path: 'business',
        loadChildren: () => import('../organisation/organisation.module').then(module => module.OrganisationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentralRoutingModule { }
