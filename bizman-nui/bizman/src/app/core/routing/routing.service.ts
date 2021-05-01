import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RouterCommService {
    goBackSubject = new Subject();
    goHomeSubject = new Subject();

    goBack() {
        this.goBackSubject.next();
    }

    goHome() {
        this.goHomeSubject.next();
    }
}