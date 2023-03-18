import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { NomeComponent } from './views/nome/nome.component';
import { CssComponent } from './views/css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NomeComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
