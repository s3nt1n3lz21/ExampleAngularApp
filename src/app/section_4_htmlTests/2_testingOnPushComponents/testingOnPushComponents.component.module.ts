import { NgModule } from '@angular/core';
import { TestingOnPushComponentsComponent } from './testingOnPushComponents.component';

@NgModule({
    declarations: [
        TestingOnPushComponentsComponent,
    ],
    exports: [
        TestingOnPushComponentsComponent,
    ],
})
export class TestingOnPushComponentsModule { }
