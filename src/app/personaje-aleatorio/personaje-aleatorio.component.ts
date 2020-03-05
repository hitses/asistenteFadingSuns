import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje-aleatorio',
  templateUrl: './personaje-aleatorio.component.html',
  styleUrls: ['./personaje-aleatorio.component.scss']
})
export class PersonajeAleatorioComponent implements OnInit {

  random: number;
  genres: string[];
  genre: string;
  races: string[];
  race: string;
  classes: string[];
  class: string;
  caracts: string[];
  caract: string;
  adjectives: string[];
  adjective: string;
  powers: string[];
  power: string;

  constructor() { }

  ngOnInit(): void {
    this.generoAleatorio();
    this.razaAleatoria();
    this.claseAleatoria();
    this.característicaAleatoria();
    this.formaDeSerAleatoria();
    this.poderesAleatorios();
  }

  generoAleatorio() {
    this.genres = ['Mujer', 'Hombre'];
    this.genre = this.genres[Math.floor(Math.random() * this.genres.length)];
  }

  razaAleatoria() {
    if (this.genre === 'Mujer') {
      // tslint:disable-next-line: max-line-length
      this.races = ['Humana', 'Ur-Obún', 'Ur-Ukar', 'Vórox', 'Bárbara Vúldrok', 'Bárbara Kurgana', 'Shántor (hembra percherona)', 'Gánnock (hembra simiesca)', 'Etyri (mujer pájaro)', 'Hirónem (mujer lagarto)', 'Ascorbita (insectoide)', 'Oro\'ym (sirena o hembra tritona)', 'Infiltrada Simbionte (no permitido salvo para partidas donde haya personajes de esta especie)', 'Mandarina Vau (no permitido salvo para partidas donde haya personajes de esta especie)'];
      this.race = this.races[Math.floor(Math.random() * this.races.length)];
    } else if (this.genre === 'Hombre') {
      // tslint:disable-next-line: max-line-length
      this.races = ['Humano', 'Ur-Obún', 'Ur-Ukar', 'Vórox', 'Bárbaro Vúldrok', 'Bárbaro Kurgano', 'Shántor (percherón)', 'Gánnock (simiesco)', 'Etyri (hombre pájaro)', 'Hirónem (hombre lagarto)', 'Ascorbita (insectoide)', 'Oro\'ym (tritón)', 'Infiltrado Simbionte (volver a crear otro personaje)', 'Mandarín Vau (volver a crear otro personaje)'];
      this.race = this.races[Math.floor(Math.random() * this.races.length)];
    }
  }

  claseAleatoria() {
    if (this.genre === 'Mujer') {
      // tslint:disable-next-line: max-line-length
      this.classes = ['Hawkwood', 'Decados', 'Hazat', 'Li Halan', 'al-Malik', 'Ortodoxa', 'Hermana de batalla', 'Eskatónica', 'Amalteana', 'Avestita', 'Hesicasta', 'Chorali (secta de Venecia que oran con sus cántos al Pancreator)', 'Gjarti (las chamanas)', 'Manja (las creyentes funerarias)', 'Auriga', 'Ingeniera', 'Carroñera', 'Asambleista (Esclavista)', 'Magistrada (Cara Gris)', 'Máscara (gremio de entretenimiento de la Segunda República)', 'Feriante (La Jauría)', 'Asesina', 'Vagabunda', 'Prospectora (del espacio)', 'Apotecaria (sanadora de gremio, no eclesiástico)', 'Armera', 'Cortesana', 'Bromista', 'Mujer libre'];
      this.class = this.classes[Math.floor(Math.random() * this.classes.length)];
    } else if (this.genre === 'Hombre') {
      // tslint:disable-next-line: max-line-length
      this.classes = ['Hawkwood', 'Decados', 'Hazat', 'Li Halan', 'al-Malik', 'Ortodoxo', 'Hermano de batalla', 'Eskatónico', 'Amalteano', 'Avestita', 'Hesicasto', 'Chorali (secta de Venecia que oran con sus cántos al Pancreator)', 'Gjarti (los chamanes)', 'Manja (los creyentes funerarios)', 'Auriga', 'Ingeniero', 'Carroñero', 'Asambleista (Esclavista)', 'Magistrado (Cara Gris)', 'Máscara (gremio de entretenimiento de la Segunda República)', 'Feriante (La Jauría)', 'Asesino', 'Vagabundo', 'Prospector (del espacio)', 'Apotecario (sanador de gremio, no eclesiástico)', 'Armero', 'Cortesano', 'Bromista', 'Hombre libre'];
      this.class = this.classes[Math.floor(Math.random() * this.classes.length)];
    }
  }

  característicaAleatoria() {
    if (this.genre === 'Mujer') {
      // tslint:disable-next-line: max-line-length
      this.caracts = ['Calva', 'Tuerta', 'Ciega', 'Muda', 'Barbuda', 'Cicatriz en una parte de la cara', 'Manca', 'Manca total', 'Cicatriz en el pecho o brazos', 'Coja', 'Coja total', 'Ojo cibernético', 'Ojos cibernéticos', 'Altavoz cibernético', 'Oreja cibernética', 'Orejas cibernéticas', 'Brazo cibernético', 'Brazos cibernéticos', 'Pierna cibernética', 'Piernas cibernéticas', 'Elegante', 'Bella', 'Angelical', 'Desagradable', 'Fea', 'Monstruosa', 'Vista aguda', 'Oído agudo', 'Olfato agudo', 'Tacto agudo', 'Jorobada', 'Alta', 'Baja', 'Enana', 'Gigante'];
      this.caract = this.caracts[Math.floor(Math.random() * this.caracts.length)];
    } else if (this.genre === 'Hombre') {
      // tslint:disable-next-line: max-line-length
      this.caracts = ['Calvo', 'Tuerto', 'Ciego', 'Mudo', 'Barbudo', 'Cicatriz en una parte de la cara', 'Manco', 'Manco total', 'Cicatriz en el pecho o brazos', 'Cojo', 'Cojo total', 'Ojo cibernético', 'Ojos cibernéticos', 'Altavoz cibernético', 'Oreja cibernética', 'Orejas cibernéticas', 'Brazo cibernético', 'Brazos cibernéticos', 'Pierna cibernética', 'Piernas cibernéticas', 'Elegante', 'Bello', 'Angelical', 'Desagradable', 'Feo', 'Monstruoso', 'Vista aguda', 'Oído agudo', 'Olfato agudo', 'Tacto agudo', 'Jorobado', 'Alto', 'Bajo', 'Enano', 'Gigante'];
      this.caract = this.caracts[Math.floor(Math.random() * this.caracts.length)];
    }
  }

  formaDeSerAleatoria() {
    if (this.genre === 'Mujer') {
      // tslint:disable-next-line: max-line-length
      this.adjectives = ['Audaz', 'Cortés', 'Curiosa', 'Disciplinada', 'Inflexible', 'Innovadora', 'Justa', 'Misericordiosa', 'Pía', 'Suspicaz', 'Altiva', 'Arrogante', 'Avara', 'Condescendiente', 'Culpable', 'Desconcertante', 'Despistada', 'Fanfarrona', 'Grosera', 'Impetuosa', 'Insensible', 'Materialista', 'Recta', 'Ruidosa', 'Sutil', 'Vanidosa', 'Vengativa', 'Casanova', 'Patosa', 'Famosa', 'Honesta'];
      this.adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
    } else if (this.genre === 'Hombre') {
      // tslint:disable-next-line: max-line-length
      this.adjectives = ['Audaz', 'Cortés', 'Curioso', 'Disciplinado', 'Inflexible', 'Innovador', 'Justo', 'Misericordioso', 'Pío', 'Suspicaz', 'Altivo', 'Arrogante', 'Avaro', 'Condescendiente', 'Culpable', 'Desconcertante', 'Despistado', 'Fanfarrón', 'Grosero', 'Impetuoso', 'Insensible', 'Materialista', 'Recto', 'Ruidoso', 'Sutil', 'Vanidoso', 'Vengativo', 'Casanova', 'Patoso', 'Famoso', 'Honesto'];
      this.adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
    }
  }

  poderesAleatorios() {
    // tslint:disable-next-line: max-line-length
    this.powers = ['Tiene poderes', 'No tiene poderes'];
    this.power = this.powers[Math.floor(Math.random() * this.powers.length)];
  }

}