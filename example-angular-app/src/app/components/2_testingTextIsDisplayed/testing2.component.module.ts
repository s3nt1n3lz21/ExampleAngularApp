import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../childComponent/child.component.module';
import { Testing2Component } from './testing2.component';

@NgModule({
    declarations: [
        Testing2Component,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        Testing2Component,
    ],
})
export class Testing2Module { }
