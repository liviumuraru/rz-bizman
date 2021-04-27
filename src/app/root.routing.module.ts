import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BussinessDetailsComponent } from './pages/bussiness-details/bussiness-details.component';
import { BussinessSelectorComponent } from './pages/bussiness-selector/bussiness-selector.component';
import { RootComponent } from './root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent
  },
  {
    path: 'details/:id',
    component: BussinessDetailsComponent,
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
