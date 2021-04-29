import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NativeService } from './core/native/native.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  showLoader = true;

  constructor(private nativeService: NativeService, private router: Router) {
    this.router.navigate(['/bussiness']);
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      }
      else {
        this.showLoader = false;
      }
    }, (_err) => {
      this.showLoader = false;
    });

    this.showLoader = false;
  }

  async close() {
    await this.nativeService.closeUI();
    this.router.navigate(['/bussiness']);
  }
}
