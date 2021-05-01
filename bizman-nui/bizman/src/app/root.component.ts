import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { RouterCommService } from './core/routing/routing.service';

export enum NativeMessageType {
  TOGGLE_UI = 'rz://gameplay/bizman/toggleDisplay'
}

export function sleepPromise(millis: number) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  showLoader = true;


  async goBack() {
    this.routerCommService.goBack();
  }

  constructor(private routerCommService: RouterCommService, private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
    window.addEventListener('message', this.handleNativeEvent.bind(this));
    window.addEventListener('keyup', this.handleKeyupEvent.bind(this));

    this.routerCommService.goHomeSubject.subscribe(_ => {
      this.router.navigate(['welcome']);
    });

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

  async closeUi() {
    this.showUI = false;
    await this.httpClient.post('https://bizman/onUIToggled', JSON.stringify({
      showUI: this.showUI
    })).toPromise();
    this.router.navigate(['welcome']);
  }

  async handleKeyupEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      await this.closeUi();
    }
  }

  async handleNativeEvent(event: MessageEvent<any>) {
    switch (event?.data?.message) {
      case NativeMessageType.TOGGLE_UI:
        this.showUI = !this.showUI;
        await this.httpClient.post('https://bizman/onUIToggled', JSON.stringify({
          showUI: this.showUI
        })).toPromise();
        if (this.showUI) {
          await this.router.navigate(['welcome']);
        }

        break;

      default:
        break;
    }
  }

  showUI = false;



  shouldShowUi() {
    return this.showUI;
  }
}