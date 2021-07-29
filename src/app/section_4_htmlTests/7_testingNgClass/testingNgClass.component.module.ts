import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { TestingNgClassComponent } from './testingNgClass.component';

@NgModule({
    declarations: [
        TestingNgClassComponent,
    ],
    imports: [
        ChildComponentModule,
        SharedModule
    ],
    exports: [
        TestingNgClassComponent,
    ],
})
export class TestingNgClassModule { }
