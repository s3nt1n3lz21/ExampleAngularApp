import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthorisationService {
    public canActivate() {
        return false;
    }
}