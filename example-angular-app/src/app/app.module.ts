import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1ComponentModule } from './components/1_testingComponentsAreDisplayed/app.component.module';
import { ChildComponentModule } from './components/childComponent/child.component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildComponentModule,
    App1ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
