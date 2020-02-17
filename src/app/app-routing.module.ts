import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajeAleatorioComponent } from './personaje-aleatorio/personaje-aleatorio.component';
import { PreciosComponent } from './precios/precios.component';
import { TirarDadosComponent } from './tirar-dados/tirar-dados.component';
import { TablaDeVictoriaComponent } from './tabla-de-victoria/tabla-de-victoria.component';
import { CobrosComponent } from './cobros/cobros.component';


const routes: Routes = [
  {path: 'personaje-aleatorio', component: PersonajeAleatorioComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'tirar-dados', component: TirarDadosComponent},
  {path: 'tabla-de-victoria', component: TablaDeVictoriaComponent},
  {path: 'cobros', component: CobrosComponent},
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
