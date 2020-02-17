import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { HttpClientModule } from '@angular/common/http'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonajeAleatorioComponent } from './personaje-aleatorio/personaje-aleatorio.component';
import { PreciosComponent } from './precios/precios.component';
import { TirarDadosComponent } from './tirar-dados/tirar-dados.component';
import { TablaDeVictoriaComponent } from './tabla-de-victoria/tabla-de-victoria.component';
import { CobrosComponent } from './cobros/cobros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonajeAleatorioComponent,
    PreciosComponent,
    TirarDadosComponent,
    TablaDeVictoriaComponent,
    CobrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* HttpClientModule, */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
