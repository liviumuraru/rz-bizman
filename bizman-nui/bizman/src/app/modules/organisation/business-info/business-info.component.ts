import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
    selector: 'business-info',
    templateUrl: './business-info.component.html',
    styleUrls: ['./business-info.component.scss']
})
export class BusinessInfoComponent {
    @Input()
    business;

    imageSrc: string;

    constructor(private router: Router, private domSanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.imageSrc = this.business.image;
    }
}