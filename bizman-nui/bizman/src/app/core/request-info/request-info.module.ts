import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LoaderModule } from '../loader/loader.module';
import { OrganisationRequestInfoComponent } from './request-info.component';

@NgModule({
  declarations: [
    OrganisationRequestInfoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    LoaderModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    OrganisationRequestInfoComponent
  ]
})
export class RequestInfoModule { }
