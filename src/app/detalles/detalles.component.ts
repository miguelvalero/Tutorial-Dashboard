import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../Persona';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  @Input() alumno: Persona;
  @Output() nuevosPuntos = new EventEmitter<number>();
  puntos: number;

  constructor() { }

  ngOnInit() {
  }
  Aceptar () {
    this.nuevosPuntos.emit(this.puntos);
  }

}
