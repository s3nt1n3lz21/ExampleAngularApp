import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { TestingNgForsComponent } from './testingNgFors.component';

@NgModule({
    declarations: [
        TestingNgForsComponent,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        TestingNgForsComponent,
    ],
})
export class TestingNgForsModule { }
