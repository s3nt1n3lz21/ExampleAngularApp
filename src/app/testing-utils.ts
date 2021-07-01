/* eslint-disable jasmine/no-unsafe-spy */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, EventEmitter, Injectable, Injector, Input, Output} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { Routes } from '@angular/router';
import { AuthorisationService } from './typescriptTests/services/authorisation.service';
import { ApiService } from './typescriptTests/services/api.service';
import { BehaviorSubject, Subject } from 'rxjs';

// import { SharedModule } from './shared/shared.module';
// import { appRoutes } from './app.routing.module';

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

export const routes: Routes = [
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
    providers = [],
    routes = []
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
        ...providers
    ],
});
