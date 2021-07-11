import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../childComponent/child.component.module';
import { Testing6Component } from './testing6.component';

@NgModule({
    declarations: [
        Testing6Component,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        Testing6Component,
    ],
})
export class Testing6Module { }
