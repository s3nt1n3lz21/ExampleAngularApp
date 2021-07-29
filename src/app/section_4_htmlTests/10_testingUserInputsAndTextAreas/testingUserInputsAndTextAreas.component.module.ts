import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { TestingUserInputsAndTextAreasComponent } from './testingUserInputsAndTextAreas.component';

@NgModule({
    declarations: [
        TestingUserInputsAndTextAreasComponent,
    ],
    imports: [
        ChildComponentModule,
        SharedModule
    ],
    exports: [
        TestingUserInputsAndTextAreasComponent,
    ],
})
export class TestingUserInputsAndTextAreasModule { }
