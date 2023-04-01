import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgForComponent } from './views/exemplo-ng-for/exemplo-ng-for.component';
import { Exer01Component } from './views/exer01/exer01.component';
import { Exer02Component } from './views/exer02/exer02.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgForComponent,
    Exer01Component,
    Exer02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
