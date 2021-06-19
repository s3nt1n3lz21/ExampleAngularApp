import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../childComponent/child.component.module';
import { Testing5Component } from './testing5.component';

@NgModule({
    declarations: [
        Testing5Component,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        Testing5Component,
    ],
})
export class Testing5Module { }