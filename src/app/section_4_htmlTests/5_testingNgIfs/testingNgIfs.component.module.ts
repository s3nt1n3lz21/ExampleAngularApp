import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { TestingNgIfsComponent } from './testingNgIfs.component';

@NgModule({
    declarations: [
        TestingNgIfsComponent,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        TestingNgIfsComponent,
    ],
})
export class TestingNgIfsModule { }
