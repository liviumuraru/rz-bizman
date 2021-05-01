import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoaderModule } from 'src/app/core/loader/loader.module';
import { CommonModule } from '@angular/common';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { BusinessLegalStatusListComponent } from './business-legal-status-list/business-legal-status-list.component';
import { BusinessListComponent } from './bussiness-list/business-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { OrganisationRoutingModule } from './organisation.routing.module';

@NgModule({
  declarations: [
    BusinessDetailsComponent,
    BusinessInfoComponent,
    BusinessLegalStatusListComponent,
    BusinessListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    LoaderModule,
    OrganisationRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule
  ]
})
export class OrganisationModule { }
