import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tirar-dados',
  templateUrl: './tirar-dados.component.html',
  styleUrls: ['./tirar-dados.component.scss']
})
export class TirarDadosComponent implements OnInit {

  tiradaResultado: number[];
  input: number;

  constructor() { }

  ngOnInit(): void {
  }

  dadosAleatorios() {
    this.tiradaResultado = [];
    for (let i = 0; i < this.input; i++) {
      this.tiradaResultado.push(Math.floor(Math.random() * 20) + 1);
    }
  }

}
