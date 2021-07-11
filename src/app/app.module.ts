import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Testing1Module } from './htmlTests/1_testingComponentsAreDisplayed/testing1.component.module';
import { ChildComponentModule } from './htmlTests/childComponent/child.component.module';
import { Testing2Module } from './htmlTests/2_testingTextIsDisplayed/testing2.component.module';
import { Testing3Module } from './htmlTests/3_testingngIfs/testing3.component.module';
import { Testing4Module } from './htmlTests/4_testingngFors/testing4.module';
import { Testing5Module } from './htmlTests/5_testingngClass/testing5.component.module';
import { Testing6Module } from './htmlTests/6_testingChildComponentOutputs/testing6.component.module';
import { Testing7Module } from './htmlTests/7_testingChildComponentInputs/testing7.component.module';
import { Testing8Module } from './htmlTests/8_testingUserInputsAndTextAreas/testing8.component.module';
import { Testing9Module } from './htmlTests/9_testingngSelect/testing9.component.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Testing1Module,
    Testing2Module,
    Testing3Module,
    Testing4Module,
    Testing5Module,
    Testing6Module,
    Testing7Module,
    Testing8Module,
    Testing9Module,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
