import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { TestingNgSelectComponent } from './testingNgSelect.component';

@NgModule({
    declarations: [
        TestingNgSelectComponent,
    ],
    imports: [
        ChildComponentModule,
        SharedModule
    ],
    exports: [
        TestingNgSelectComponent,
    ],
})
export class TestingNgSelectModule { }
