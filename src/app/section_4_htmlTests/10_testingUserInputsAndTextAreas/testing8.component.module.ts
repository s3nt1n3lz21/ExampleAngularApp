import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { Testing8Component } from './testing8.component';

@NgModule({
    declarations: [
        Testing8Component,
    ],
    imports: [
        ChildComponentModule,
        SharedModule
    ],
    exports: [
        Testing8Component,
    ],
})
export class Testing8Module { }
