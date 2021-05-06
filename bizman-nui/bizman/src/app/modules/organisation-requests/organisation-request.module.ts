import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoaderModule } from 'src/app/core/loader/loader.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { OrganisationRequestRoutingModule } from './organisation-request.routing.module';
import { OrganisationPersonalRequestListComponent } from './organisation-personal-request-list/organisation-personal-request-list.component';
import { OrganisationPersonalRequestNewComponent } from './organisation-personal-request-new/organisation-personal-request-new.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { OrganisationPersonalRequestDetailsComponent } from './organisation-personal-request-details/organisation-personal-request-details.component';
import { RequestInfoModule } from 'src/app/core/request-info/request-info.module';
import { OrganisationManagementRequestListComponent } from './organisation-management-request-list/organisation-management-request-list.component';
import { ChatModule } from 'src/app/core/chat/chat.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    OrganisationPersonalRequestListComponent,
    OrganisationPersonalRequestNewComponent,
    OrganisationPersonalRequestDetailsComponent,
    OrganisationManagementRequestListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    LoaderModule,
    OrganisationRequestRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    RequestInfoModule,
    ChatModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatTableModule,
    MatStepperModule
  ]
})
export class OrganisationRequestModule { }
