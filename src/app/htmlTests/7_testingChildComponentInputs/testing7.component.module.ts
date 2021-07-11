import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../childComponent/child.component.module';
import { Testing7Component } from './testing7.component';

@NgModule({
    declarations: [
        Testing7Component,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        Testing7Component,
    ],
})
export class Testing7Module { }
