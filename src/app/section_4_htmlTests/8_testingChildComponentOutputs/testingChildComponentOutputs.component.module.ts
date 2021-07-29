import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { TestingChildComponentOutputsComponent } from './testingChildComponentOutputs.component';

@NgModule({
    declarations: [
        TestingChildComponentOutputsComponent,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        TestingChildComponentOutputsComponent,
    ],
})
export class TestingChildComponentOutputsModule { }
