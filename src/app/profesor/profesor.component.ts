import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  lista: Persona[] = [];
  constructor() { }

  ngOnInit() {
  }

  Mostrar () {
    this.lista[0] = new Persona ('Juan', 'JJJ', 'Profesor', 0);
    this.lista[1] = new Persona ('Pedro', 'PPP', 'Alumno', 0);
    this.lista[2] = new Persona ('Maria', 'MMM', 'Profesor', 0);
    this.lista[3] = new Persona ('Lucas', 'LLL', 'Alumno', 0);
    this.lista[4] = new Persona ('Salva', 'SSS', 'Alumno', 0);
    this.lista[5] = new Persona ('Rocio', 'RRR', 'Alumno', 0);
  }
  Incrementar (nombre: string) {
    this.lista.filter(persona => persona.nombre === nombre)[0].puntos ++;
  }

  ResetPuntos () {
    this.lista.forEach(function (alumno) {
      alumno.puntos = 0;
    });
  }
}
