import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTutorial';
  numero: number;
  resultado: number;

  Duplicar () {
    console.log ('Voy a duplicar');
    this.resultado = this.numero * 2;
    console.log (this.resultado);
  }
}
