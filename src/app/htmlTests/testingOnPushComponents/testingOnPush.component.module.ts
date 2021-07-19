import { NgModule } from '@angular/core';
import { TestingOnPushComponent } from './testingOnPush.component';

@NgModule({
    declarations: [
        TestingOnPushComponent,
    ],
    exports: [
        TestingOnPushComponent,
    ],
})
export class TestingOnPushModule { }
