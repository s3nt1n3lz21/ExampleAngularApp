import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../childComponent/child.component.module';
import { Testing1Component } from './testing1.component';

@NgModule({
    declarations: [
        Testing1Component,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        Testing1Component,
    ],
})
export class Testing1Module { }
