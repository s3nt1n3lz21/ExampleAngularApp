import { NgModule } from '@angular/core';
import { ChildComponentModule } from '../../childComponent/child.component.module';
import { TestingTextIsDisplayedComponent } from './testingTextIsDisplayed.component';

@NgModule({
    declarations: [
        TestingTextIsDisplayedComponent,
    ],
    imports: [
        ChildComponentModule
    ],
    exports: [
        TestingTextIsDisplayedComponent,
    ],
})
export class TestingTextIsDisplayedModule { }
