import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exer03Component } from './views/exer03/exer03.component';
import { Exer04Component } from './views/exer04/exer04.component';

@NgModule({
  declarations: [
    AppComponent,
    Exer03Component,
    Exer04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
