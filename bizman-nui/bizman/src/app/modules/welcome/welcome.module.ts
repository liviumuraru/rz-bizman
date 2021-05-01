import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { LoaderModule } from 'src/app/core/loader/loader.module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome.routing.module';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    MatCardModule,
    WelcomeRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatBadgeModule,
    MatChipsModule
  ]
})
export class WelcomeModule { }
