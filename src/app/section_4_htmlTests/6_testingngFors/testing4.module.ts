import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { Testing4Component } from './testing4.component';

@NgModule({
    declarations: [
        Testing4Component,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        Testing4Component,
    ],
})
export class Testing4Module { }
