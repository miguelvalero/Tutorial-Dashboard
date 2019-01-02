import { Injectable } from '@angular/core';
import { Persona } from './Persona';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  lista: Persona[] = [];

  constructor(
  ) {
    this.lista[0] = new Persona ('Juan', 'JJJ', 'Profesor', 0);
    this.lista[1] = new Persona ('Pedro', 'PPP', 'Alumno', 0);
    this.lista[2] = new Persona ('Maria', 'MMM', 'Profesor', 0);
    this.lista[3] = new Persona ('Lucas', 'LLL', 'Alumno', 0);
    this.lista[4] = new Persona ('Salva', 'SSS', 'Alumno', 0);
    this.lista[5] = new Persona ('Rocio', 'RRR', 'Alumno', 0);
  }

  Mostrar (): Persona[] {
    return this.lista;
  }

  Incrementar (nombre: string): Persona[] {
    this.lista.filter(persona => persona.nombre === nombre)[0].puntos ++;
    return this.lista;
  }

  Eliminar (nombre: string): Persona [] {
    this.lista = this.lista.filter(persona => persona.nombre !== nombre);
    return this.lista;
  }

  OrdenarPuntos (): Persona [] {
    this.lista = this.lista.sort(
        function(obj1, obj2) {
            return obj2.puntos - obj1.puntos;
        });
    return this.lista;
  }

  PonPersona(persona: Persona): Persona [] {
    this.lista.push(persona);
    return this.lista;
  }

  Autentificar(nombre: string, pass: string): Persona {
    let user: Persona[] = [];
    user = this.lista.filter(persona => persona.nombre === nombre && persona.pass === pass );

    if (user.length === 0) {
      return null;
    } else {
      return user[0];
    }
  }

  PonPass (nombre: string, nuevopass: string): void {
    this.lista.filter(persona => persona.nombre === nombre)[0].pass = nuevopass;
    console.log (this.lista);
  }

  DamePersona(nombre: string): Persona {
    return this.lista.filter(persona => persona.nombre === nombre)[0];
  }


}
