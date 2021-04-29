import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RootRoutingModule } from './root.routing.module';
import { RootComponent } from './root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NativeService } from './core/native/native.service';
import { LoaderModule } from './core/loader/loader.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BussinessSelectorComponent } from './pages/bussiness-selector/bussiness-selector.component';
import { BusinessDetailsComponent } from './pages/business-details/business-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { BusinessInfoComponent } from './pages/business-info/business-info.component';
import { BusinessLegalStatusListComponent } from './pages/business-legal-status-list/business-legal-status-list.component';

@NgModule({
  declarations: [
    RootComponent,
    BussinessSelectorComponent,
    BusinessDetailsComponent,
    BusinessInfoComponent,
    BusinessLegalStatusListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RootRoutingModule,
    LoaderModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatChipsModule
  ],
  providers: [NativeService],
  bootstrap: [RootComponent]
})
export class RootModule { }
