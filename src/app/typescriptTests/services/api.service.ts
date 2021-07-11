import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private dataSubject = new BehaviorSubject<number>(1);
    private otherDataSubject = new BehaviorSubject<number>(1);

    public getData() {
        return this.dataSubject.asObservable();
    }

    public getOtherData() {
        return this.otherDataSubject.asObservable();
    }
}