import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { Testing3Component } from './testing3.component';

@NgModule({
    declarations: [
        Testing3Component,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        Testing3Component,
    ],
})
export class Testing3Module { }
