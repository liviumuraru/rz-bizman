import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoaderModule } from 'src/app/core/loader/loader.module';
import { CentralRoutingModule } from './central.routing.module';
import { CommonModule } from '@angular/common';
import { CentralComponent } from './central.component';

@NgModule({
  declarations: [
    CentralComponent
  ],
  imports: [
    CommonModule,
    CentralRoutingModule,
    HttpClientModule,
    LoaderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CentralModule { }
