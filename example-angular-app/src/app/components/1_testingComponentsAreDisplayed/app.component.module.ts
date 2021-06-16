import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../childComponent/child.component.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        AppComponent,
    ],
})
export class App1ComponentModule { }
