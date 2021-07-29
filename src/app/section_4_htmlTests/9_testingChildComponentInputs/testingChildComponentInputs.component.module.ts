import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { TestingChildComponentInputsComponent } from './testingChildComponentInputs.component';

@NgModule({
    declarations: [
        TestingChildComponentInputsComponent,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        TestingChildComponentInputsComponent,
    ],
})
export class TestingChildComponentInputsModule { }
