import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinentsComponent } from './continents/continents.component';
import { AllWorldComponent } from './continents/all-world/all-world.component';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    AllWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
