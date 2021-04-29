import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessDetailsComponent } from './pages/business-details/business-details.component';
import { BussinessSelectorComponent } from './pages/bussiness-selector/bussiness-selector.component';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent
  },
  {
    path: 'details/:id',
    component: BusinessDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'bussiness',
    component: BussinessSelectorComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
