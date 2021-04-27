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
import { BussinessDetailsComponent } from './pages/bussiness-details/bussiness-details.component';
import { LoaderComponent } from './core/loader/loader.component';

@NgModule({
  declarations: [
    RootComponent,
    BussinessSelectorComponent,
    BussinessDetailsComponent
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
    MatIconModule
  ],
  providers: [NativeService],
  bootstrap: [RootComponent]
})
export class RootModule { }
