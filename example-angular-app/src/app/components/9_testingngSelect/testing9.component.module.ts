import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../childComponent/child.component.module';
import { Testing9Component } from './testing9.component';

@NgModule({
    declarations: [
        Testing9Component,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        Testing9Component,
    ],
})
export class Testing9Module { }