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
  habilidadesNaturales: number;
  acechar: number;
  concentracion: number;
  disparo: number;
  encanto: number;
  esquivar: number;
  lucha: number;
  observar: number;
  pelea: number;
  presencia: number;
  vigor: number;
  wyrd: number;
  vida: number;
  arma: string;
  armadura: string;
  escudoEnergetico: string;

  constructor() { }

  ngOnInit(): void {
  }

  personajeAleatorio() {
    this.generoAleatorio();
    this.razaAleatoria();
    this.cuerpoAleatorio();
    this.claseAleatoria();
    this.poderesAleatorios();
    this.menteAleatorio();
    this.espirituAleatorio();
    this.habilidadesNaturalesAleatorio();
    this.wyrdAleatorio();
    this.vidaCalculo();
    this.equipoAleatorio();
    this.escudoEnergeticoAleatorio();
    /* this.característicaAleatoria();
    this.formaDeSerAleatoria(); */
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

  habilidadesNaturalesAleatorio() {
    const MIN = 3;
    const MAX = 10;

    this.habilidadesNaturales = Math.floor(Math.random() * (MIN - MAX)) + MAX;

    this.acechar = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.concentracion = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.disparo = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.encanto = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.esquivar = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.lucha = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.observar = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.pelea = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.presencia = Math.floor(Math.random() * (MIN - MAX)) + MAX;
    this.vigor = Math.floor(Math.random() * (MIN - MAX)) + MAX;
  }

  wyrdAleatorio() {
    if (this.power === 'Psi') {
      if (this.extrovertido > this.introvertido) {
        this.wyrd = this.extrovertido;
      } else {
        this.wyrd = this.introvertido;
      }
    } else if (this.power === 'Teurgia') {
      this.wyrd = this.fe;
    } else {
      if (this.calma > this.pasion) {
        this.wyrd = this.calma;
      } else {
        this.wyrd = this.pasion;
      }
    }
  }

  equipoAleatorio() {
    const ARMAS = [
      'Puñal con daño 4',
      'Estoque con daño 5',
      'Espada con daño 6',
      'Cimitarra con daño 6',
      'Espada a dos manos con daño 8',
      'Maza con daño 5',
      'Mayal con daño 4',
      'Revólver ligero con daño 4',
      'Pistola automática con daño 4',
      'Revólver medio con daño 5',
      'Pistola automática media con daño 5',
      'Revólver pesado con daño 6',
      'Pistola automática pesada con daño 6',
      'Fusil de asalto con daño 7',
      'Rifle de precisión con daño 7',
      'Ametralladora con daño 5',
      'Escopeta con daño 8',
      'Pistola láser con daño 5',
      'Pistola bláster con daño 7',
    ];
    const ARMADURAS = [
      'Ropa acolcahada 1',
      'Ropas pesadas 2',
      'Justillo de cuero 2+2D',
      'Cuero reforzado 2+3D',
      'Cota de escamas 3+3D',
      'Cota de malla 4+4D',
      'Coraza 5+5D',
      'Sinteseda 2+2D',
      'Acerámica 7+7D',
    ];

    this.arma = ARMAS[Math.floor(Math.random() * ARMAS.length)];
    this.armadura = ARMADURAS[Math.floor(Math.random() * ARMADURAS.length)];
  }

  escudoEnergeticoAleatorio() {
    const SIN_ESCUDO = 60;
    const RANDOM_NUMBER = Math.floor(Math.random() * (1 - 101)) + 101;

    if (RANDOM_NUMBER <= SIN_ESCUDO) {
      this.escudoEnergetico = '';
    } else if (RANDOM_NUMBER > SIN_ESCUDO) {
      const ESTANDAR = 40;
      const DUELO = 70;
      const ASALTO = 90;
      const NUMERO_ALEATORIO = Math.floor(Math.random() * (1 - 101)) + 101;

      if (NUMERO_ALEATORIO <= ESTANDAR) {
        this.escudoEnergetico = 'Escudo energético estándar 1/5 y 10 impactos';
      } else if (NUMERO_ALEATORIO > ESTANDAR && NUMERO_ALEATORIO <= DUELO) {
        this.escudoEnergetico = 'Escudo energético de duelo 1/5 y 15 impactos';
      } else if (NUMERO_ALEATORIO > DUELO && NUMERO_ALEATORIO <= ASALTO) {
        this.escudoEnergetico = 'Escudo energético de asalto 1/10 y 20 impactos';
      } else if (NUMERO_ALEATORIO > ASALTO) {
        this.escudoEnergetico = 'Escudo energético de batalla 1/15 y 30 impactos';
      }
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
    if (this.power === 'Tiene poderes') {
      const OCULTISMO = ['Psi', 'Teurgia'];
      this.power = OCULTISMO[Math.floor(Math.random() * OCULTISMO.length)];
    }
  }

  vidaCalculo() {
    this.vida = 5 + this.resistencia;
  }

}
