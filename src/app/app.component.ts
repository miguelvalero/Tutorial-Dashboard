import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTutorial';
  numero1: number;
  numero2: number;
  resultado: number;

  Multiplicar () {
    console.log ('Voy a multiplicar');
    this.resultado = this.numero1 * this.numero2;
    console.log (this.resultado);
  }
}
