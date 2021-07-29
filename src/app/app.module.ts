import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponentsAreDisplayedModule } from './section_4_htmlTests/3_testingComponentsAreDisplayed/testingComponentsAreDisplayed.component.module';
import { TestingTextIsDisplayedModule } from './section_4_htmlTests/4_testingTextIsDisplayed/testingTextIsDisplayed.component.module';
import { TestingNgIfsModule } from './section_4_htmlTests/5_testingNgIfs/testingNgIfs.component.module';
import { TestingNgForsModule } from './section_4_htmlTests/6_testingNgFors/testingNgFors.module';
import { TestingNgClassModule } from './section_4_htmlTests/7_testingNgClass/testingNgClass.component.module';
import { TestingChildComponentOutputsModule } from './section_4_htmlTests/8_testingChildComponentOutputs/testingChildComponentOutputs.component.module';
import { TestingChildComponentInputsModule } from './section_4_htmlTests/9_testingChildComponentInputs/testingChildComponentInputs.component.module';
import { TestingUserInputsAndTextAreasModule } from './section_4_htmlTests/10_testingUserInputsAndTextAreas/testingUserInputsAndTextAreas.component.module';
import { TestingNgSelectModule } from './section_4_htmlTests/11_testingNgSelect/testingNgSelect.component.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestingComponentsAreDisplayedModule,
    TestingTextIsDisplayedModule,
    TestingNgIfsModule,
    TestingNgForsModule,
    TestingNgClassModule,
    TestingChildComponentOutputsModule,
    TestingChildComponentInputsModule,
    TestingUserInputsAndTextAreasModule,
    TestingNgSelectModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
