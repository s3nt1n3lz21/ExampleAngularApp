/* eslint-disable jasmine/no-unsafe-spy */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, EventEmitter, Injectable, Injector, Input, Output} from '@angular/core';
import { SharedModule } from './shared.module';
import { Routes } from '@angular/router';
import { AuthorisationService } from './services/authorisation.service';
import { ApiService } from './services/api.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-testing1',
    template: ''
})
class Testing1Component {}

@Component({
    selector: 'app-testing1',
    template: ''
})
class Testing2Component {}

@Component({
    selector: 'app-testing1',
    template: ''
})
class Testing3Component {}

@Component({
    selector: 'app-testing1',
    template: ''
})
class Testing4Component {}

@Component({
    selector: 'app-testing1',
    template: ''
})
class Testing5Component {}

@Component({
    selector: 'app-testing1',
    template: ''
})
class Testing6Component {}

@Component({
    selector: 'app-testing1',
    template: ''
})
class Testing7Component {}

@Component({
    selector: 'app-testing1',
    template: ''
})
class Testing8Component {}

@Component({
    selector: 'app-testing1',
    template: ''
})
class Testing9Component {}

@Component({
    selector: 'app-child-component',
    template: ''
})
class ChildComponent {
    @Input() public inputData;
    @Output() public outputData: EventEmitter<string> = new EventEmitter<string>();
}

@Component({
    selector: 'app-home-component',
    template: ''
})
class HomeComponent {}

@Component({
    selector: 'app-login-component',
    template: ''
})
class LoginComponent {}

@Injectable({
    providedIn: 'root'
})
export class ApiServiceMock {
   
    public getData() {
        return new BehaviorSubject<number>(1).asObservable();
    }

    public getOtherData() {
        return new BehaviorSubject<number>(2).asObservable();
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthorisationServiceMock {
    public canActivate() {
        return false;
    }
}

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthorisationService]
    }
]

// Create your test app
export const configureTestingModule = ({
    imports = [],
    declarations = [],
    providers = []
}) => TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        SharedModule,
        ...imports
    ],
    declarations: [
        Testing1Component,
        Testing2Component,
        Testing3Component,
        Testing4Component,
        Testing5Component,
        Testing6Component,
        Testing7Component,
        Testing8Component,
        Testing9Component,
        ChildComponent,
        ...declarations
    ],
    providers: [
        Injector,
        { provide: ApiService, useClass: ApiServiceMock },
        { provide: AuthorisationService, useClass: AuthorisationServiceMock },
        ...providers
    ],
});
