import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('./modules/welcome/welcome.module').then(module => module.WelcomeModule),
      },
      {
        path: 'business',
        loadChildren: () => import('./modules/organisation/organisation.module').then(module => module.OrganisationModule)
      },
      //TODO change business to organisation
      {
        path: 'organisation/requests',
        loadChildren: () => import('./modules/organisation-requests/organisation-request.module').then(module => module.OrganisationRequestModule)
      },
      {
        path: 'organisation',
        redirectTo: 'business',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class RootRoutingModule { }
