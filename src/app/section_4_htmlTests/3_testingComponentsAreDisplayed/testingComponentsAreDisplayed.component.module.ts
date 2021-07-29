import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { TestingComponentsAreDisplayedComponent } from './testingComponentsAreDisplayed.component';

@NgModule({
    declarations: [
        TestingComponentsAreDisplayedComponent,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        TestingComponentsAreDisplayedComponent,
    ],
})
export class TestingComponentsAreDisplayedModule { }
