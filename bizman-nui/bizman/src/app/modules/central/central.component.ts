import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.scss']
})
export class CentralComponent {
  showLoader = true;

  constructor(private router: Router,
              private activeRoute: ActivatedRoute) {    
    this.router.events.subscribe((event) => {
      console.log('event from central', event)
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

  async goBack() {
    this.router.navigate(['..'], {relativeTo: this.activeRoute});
  }
}
