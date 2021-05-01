import { NgModule } from '@angular/core';

import { RootRoutingModule } from './root.routing.module';
import { RootComponent } from './root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './core/loader/loader.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RootRoutingModule,
    HttpClientModule,
    LoaderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
