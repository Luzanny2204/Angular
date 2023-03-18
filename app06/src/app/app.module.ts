import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DuasViasComponent } from './views/duas-vias/duas-vias.component';
import { SumaComponent } from './views/suma/suma.component';
import { CachorroComponent } from './views/cachorro/cachorro.component';
import { SelectComponent } from './views/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    DuasViasComponent,
    SumaComponent,
    CachorroComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
