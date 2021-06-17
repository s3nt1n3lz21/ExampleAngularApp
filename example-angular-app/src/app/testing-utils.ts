/* eslint-disable jasmine/no-unsafe-spy */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Injector} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './components/childComponent/child.component';

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

export const configureTestingModule = ({
    imports = [],
    declarations = [],
    providers = [],
    // routes = appRoutes,
    routes = []
}) => TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        // SharedModule,
        BrowserAnimationsModule,
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
        ...providers
    ],
});
