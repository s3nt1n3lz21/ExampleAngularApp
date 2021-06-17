import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Testing1Module } from './components/1_testingComponentsAreDisplayed/testing1.component.module';
import { ChildComponentModule } from './components/childComponent/child.component.module';
import { Testing2Module } from './components/2_testingTextIsDisplayed/testing2.component.module';
import { Testing3Module } from './components/3_testingngIfs/testing3.component.module';
import { Testing4Module } from './components/4_testingngFors/testing4.module';
import { Testing5Module } from './components/5_testingngClass/testing5.component.module';
import { Testing6Module } from './components/6_testingChildComponentOutputs/testing6.component.module';
import { Testing7Module } from './components/7_testingChildComponentInputs/testing7.component.module';
import { Testing8Module } from './components/8_testingUserInputsAndTextAreas/testing8.component.module';
import { Testing9Module } from './components/9_testingngSelect/testing9.component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildComponentModule,
    Testing1Module,
    Testing2Module,
    Testing3Module,
    Testing4Module,
    Testing5Module,
    Testing6Module,
    Testing7Module,
    Testing8Module,
    Testing9Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
