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
  cuerpo: number;
  fuerza: number;
  destreza: number;
  resistencia: number;
  mente: number;
  inteligencia: number;
  percepcion: number;
  tecnologia: number;
  espiritu: number;
  extrovertido: number;
  introvertido: number;
  calma: number;
  pasion: number;
  fe: number;
  ego: number;
  humano: number;
  alienigena: number;

  constructor() { }

  ngOnInit(): void {
  }

  personajeAleatorio() {
    this.generoAleatorio();
    this.razaAleatoria();
    this.cuerpoAleatorio();
    this.claseAleatoria();
    this.característicaAleatoria();
    this.formaDeSerAleatoria();
    this.poderesAleatorios();
    this.menteAleatorio();
    this.espirituAleatorio();
  }

  generoAleatorio() {
    this.genres = ['mujer', 'hombre'];
    this.genre = this.genres[Math.floor(Math.random() * this.genres.length)];
  }

  razaAleatoria() {
    const FOR_HUMAN = 60;
    const FOR_OBUN = 70;
    const FOR_UKAR = 80;
    const RANDOM_NUMBER = Math.floor(Math.random() * (1 - 101)) + 101;
    if (this.genre === 'mujer') {
      this.races = [
        'vórox',
        'vúldrok',
        'kurgana',
        'shántor (percherona)',
        'gánnock (simiesca)',
        'etyri (mujer pájaro)',
        'hirónem (mujer lagarto)',
        'ascorbita (mujer insectoide)',
        'oro\'ym (sirena o tritona)',
        'infiltrada simbionte (no permitido salvo para partidas donde haya personajes de esta especie)',
        'Vau (no permitido salvo para partidas donde haya personajes de esta especie)',
      ];
      if (RANDOM_NUMBER <= FOR_HUMAN) {
        this.race = 'humana';
      } else if (RANDOM_NUMBER > FOR_HUMAN && RANDOM_NUMBER <= FOR_OBUN) {
        this.race = 'Ur-Obún';
      } else if (RANDOM_NUMBER > FOR_OBUN && RANDOM_NUMBER <= FOR_UKAR) {
        this.race = 'Ur-Ukar';
      } else if (RANDOM_NUMBER > FOR_UKAR) {
        this.race = this.races[Math.floor(Math.random() * this.races.length)];
      }
    } else if (this.genre === 'hombre') {
      this.races = [
        'vórox',
        'vúldrok',
        'kurgano',
        'shántor (percherón)',
        'gánnock (simiesco)',
        'etyri (hombre pájaro)',
        'hirónem (hombre lagarto)',
        'ascorbita (insectoide)',
        'oro\'ym (tritón)',
        'infiltrado Simbionte (no permitido salvo para partidas donde haya personajes de esta especie)',
        'Vau (no permitido salvo para partidas donde haya personajes de esta especie)',
      ];
      if (RANDOM_NUMBER <= FOR_HUMAN) {
        this.race = 'humano';
      } else if (RANDOM_NUMBER > FOR_HUMAN && RANDOM_NUMBER <= FOR_OBUN) {
        this.race = 'Ur-Obún';
      } else if (RANDOM_NUMBER > FOR_OBUN && RANDOM_NUMBER <= FOR_UKAR) {
        this.race = 'Ur-Ukar';
      } else if (RANDOM_NUMBER > FOR_UKAR) {
        this.race = this.races[Math.floor(Math.random() * this.races.length)];
      }
    }
  }

  claseAleatoria() {
    const FOR_FREE_HUMAN = 60;
    const RANDOM_NUMBER = Math.floor(Math.random() * (1 - 101)) + 101;
    if (this.genre === 'mujer') {
      this.classes = [
        'Casa Real Hawkwood',
        'Casa Real Decados',
        'Casa Real Hazat',
        'Casa Real Li Halan',
        'Casa Real al-Malik',
        'Ortodoxa',
        'Hermana de batalla',
        'Eskatónica',
        'Amalteana',
        'Avestita',
        'Hesicasta',
        'Chorali (secta de Venecia que ora con sus cantos al Pancreator)',
        'Gjarti (chamanas de la naturaleza)',
        'Manja (las creyentes funerarias)',
        'Auriga',
        'Ingeniera',
        'Carroñera',
        'Asambleista (Esclavista)',
        'Magistrada (Cara Gris)',
        'Máscara (gremio de entretenimiento de la Segunda República)',
        'Feriante (La Jauría)',
        'Asesina', 'Vagabunda',
        'Prospectora (del espacio)',
        'Apotecaria (sanadora de gremio, no eclesiástico)',
        'Armera',
        'Cortesana',
        'Bromista',
      ];
      if (RANDOM_NUMBER <= FOR_FREE_HUMAN) {
        this.class = 'Mujer libre';
      } else if (RANDOM_NUMBER > FOR_FREE_HUMAN) {
        this.class = this.classes[Math.floor(Math.random() * this.classes.length)];
      }
    } else if (this.genre === 'hombre') {
      this.classes = [
        'Casa Real Hawkwood',
        'Casa Real Decados',
        'Casa Real Hazat',
        'Casa Real Li Halan',
        'Casa Real al-Malik',
        'Ortodoxo',
        'Hermano de batalla',
        'Eskatónico', 'Amalteano',
        'Avestita', 'Hesicasto',
        'Chorali (secta de Venecia que ora con sus cantos al Pancreator)',
        'Gjarti (chamanes de la naturaleza)',
        'Manja (los creyentes funerarios)',
        'Auriga',
        'Ingeniero',
        'Carroñero',
        'Asambleista (Esclavista)',
        'Magistrado (Cara Gris)',
        'Máscara (gremio de entretenimiento de la Segunda República)',
        'Feriante (La Jauría)',
        'Asesino',
        'Vagabundo',
        'Prospector (del espacio)',
        'Apotecario (sanador de gremio, no eclesiástico)',
        'Armero',
        'Cortesano',
        'Bromista',
      ];
      if (RANDOM_NUMBER <= FOR_FREE_HUMAN) {
        this.class = 'Hombre libre';
      } else if (RANDOM_NUMBER > FOR_FREE_HUMAN) {
        this.class = this.classes[Math.floor(Math.random() * this.classes.length)];
      }
    }
  }

  cuerpoAleatorio() {
    const MIN = 3;
    const MAX = 10;

    this.cuerpo = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.fuerza = this.cuerpo;
    this.cuerpo = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.destreza = this.cuerpo;
    this.cuerpo = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.resistencia = this.cuerpo;
  }

  menteAleatorio() {
    const MIN = 3;
    const MAX = 10;

    this.mente = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.inteligencia = this.mente;
    this.mente = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.percepcion = this.mente;
    this.mente = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.tecnologia = this.mente;
  }

  espirituAleatorio() {
    const MIN = 3;
    const MAX = 10;

    this.espiritu = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.extrovertido = this.espiritu;
    this.espiritu = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    if (this.espiritu + this.extrovertido <= 10) {
      this.introvertido = this.espiritu;
    } else {
      this.introvertido = 10 - this.extrovertido;
    }

    this.espiritu = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.calma = this.espiritu;
    this.espiritu = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    if (this.espiritu + this.calma <= 10) {
      this.pasion = this.espiritu;
    } else {
      this.pasion = 10 - this.calma;
    }

    this.espiritu = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.fe = this.espiritu;
    this.espiritu = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    if (this.espiritu + this.fe <= 10) {
      this.ego = this.espiritu;
    } else {
      this.ego = 10 - this.fe;
    }

    if (this.race === 'humana' || this.race === 'humano') {
      this.humano = 3;
      this.alienigena = 0;
    } else {
      this.humano = 0;
      this.alienigena = 3;
    }
  }

  característicaAleatoria() {
    if (this.genre === 'mujer') {
      this.caracts = [
        'Calva',
        'Tuerta',
        'Ciega',
        'Muda',
        'Barbuda',
        'Cicatriz en una parte de la cara',
        'Manca',
        'Manca total',
        'Cicatriz en el pecho o brazos',
        'Coja',
        'Coja total',
        'Ojo cibernético',
        'Ojos cibernéticos',
        'Altavoz cibernético',
        'Oreja cibernética',
        'Orejas cibernéticas',
        'Brazo cibernético',
        'Brazos cibernéticos',
        'Pierna cibernética',
        'Piernas cibernéticas',
        'Elegante',
        'Bella',
        'Angelical',
        'Desagradable',
        'Fea',
        'Monstruosa',
        'Vista aguda',
        'Oído agudo',
        'Olfato agudo',
        'Tacto agudo',
        'Jorobada',
        'Alta',
        'Baja',
        'Enana',
        'Gigante',
      ];
      this.caract = this.caracts[Math.floor(Math.random() * this.caracts.length)];
    } else if (this.genre === 'hombre') {
      this.caracts = [
        'Calvo',
        'Tuerto',
        'Ciego',
        'Mudo',
        'Barbudo',
        'Cicatriz en una parte de la cara',
        'Manco',
        'Manco total',
        'Cicatriz en el pecho o brazos',
        'Cojo',
        'Cojo total',
        'Ojo cibernético',
        'Ojos cibernéticos',
        'Altavoz cibernético',
        'Oreja cibernética',
        'Orejas cibernéticas',
        'Brazo cibernético',
        'Brazos cibernéticos',
        'Pierna cibernética',
        'Piernas cibernéticas',
        'Elegante',
        'Bello',
        'Angelical',
        'Desagradable',
        'Feo',
        'Monstruoso',
        'Vista aguda',
        'Oído agudo',
        'Olfato agudo',
        'Tacto agudo',
        'Jorobado',
        'Alto',
        'Bajo',
        'Enano',
        'Gigante',
      ];
      this.caract = this.caracts[Math.floor(Math.random() * this.caracts.length)];
    }
  }

  formaDeSerAleatoria() {
    if (this.genre === 'mujer') {
      this.adjectives = [
        'Audaz',
        'Cortés',
        'Curiosa',
        'Disciplinada',
        'Inflexible',
        'Innovadora',
        'Justa',
        'Misericordiosa',
        'Pía',
        'Suspicaz',
        'Altiva',
        'Arrogante',
        'Avara',
        'Condescendiente',
        'Culpable',
        'Desconcertante',
        'Despistada',
        'Fanfarrona',
        'Grosera',
        'Impetuosa',
        'Insensible',
        'Materialista',
        'Recta',
        'Ruidosa',
        'Sutil',
        'Vanidosa',
        'Vengativa',
        'Casanova',
        'Patosa',
        'Famosa',
        'Honesta',
      ];
      this.adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
    } else if (this.genre === 'hombre') {
      this.adjectives = [
        'Audaz',
        'Cortés',
        'Curioso',
        'Disciplinado',
        'Inflexible',
        'Innovador',
        'Justo',
        'Misericordioso',
        'Pío',
        'Suspicaz',
        'Altivo',
        'Arrogante',
        'Avaro',
        'Condescendiente',
        'Culpable',
        'Desconcertante',
        'Despistado',
        'Fanfarrón',
        'Grosero',
        'Impetuoso',
        'Insensible',
        'Materialista',
        'Recto',
        'Ruidoso',
        'Sutil',
        'Vanidoso',
        'Vengativo',
        'Casanova',
        'Patoso',
        'Famoso',
        'Honesto',
      ];
      this.adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
    }
  }

  poderesAleatorios() {
    this.powers = ['Tiene poderes', 'No tiene poderes'];
    this.power = this.powers[Math.floor(Math.random() * this.powers.length)];
  }

}
