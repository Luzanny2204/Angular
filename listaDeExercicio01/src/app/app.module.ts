import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicaComponent } from './views/musica/musica.component';
import { SumaComponent } from './views/suma/suma.component';
import { ColoresComponent } from './views/colores/colores.component';
import { CachorrosComponent } from './views/cachorros/cachorros.component';
import { NomeComponent } from './views/nome/nome.component';
import { DivComponent } from './views/div/div.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicaComponent,
    SumaComponent,
    ColoresComponent,
    CachorrosComponent,
    NomeComponent,
    DivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
