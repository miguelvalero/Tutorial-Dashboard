import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './Persona';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  private APIUrl = 'http://127.0.0.1:3000/personas';

  constructor(private http: HttpClient) { }

  // Mostrar (): Persona[] {
  //   return this.lista;
  // }

  Mostrar (): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.APIUrl);
  }

  // Incrementar (nombre: string): Persona[] {
  //   this.lista.filter(persona => persona.nombre === nombre)[0].puntos ++;
  //   return this.lista;
  // }

  Incrementar (persona: Persona): Observable<any> {
    persona.puntos++;
    return this.http.put<any>(this.APIUrl + '/' + persona.nombre, persona);
  }

  // Eliminar (nombre: string): Persona [] {
  //   this.lista = this.lista.filter(persona => persona.nombre !== nombre);
  //   return this.lista;
  // }

  Eliminar (nombre: string): Observable<any>  {
    return this.http.delete<any>(this.APIUrl + '/' + nombre);
  }

  // OrdenarPuntos (): Persona [] {
  //   this.lista = this.lista.sort(
  //       function(obj1, obj2) {
  //           return obj2.puntos - obj1.puntos;
  //       });
  //   return this.lista;
  // }

  // PonPersona(persona: Persona): Persona [] {
  //   this.lista.push(persona);
  //   return this.lista;


  PonPersona(persona: Persona): Observable<any> {
    return this.http.post<any>(this.APIUrl, persona);
  }

  // Autentificar(nombre: string, pass: string): Persona {
  //   let user: Persona[] = [];
  //   user = this.lista.filter(persona => persona.nombre === nombre && persona.pass === pass );

  //   if (user.length === 0) {
  //     return null;
  //   } else {
  //     return user[0];
  //   }
  // }

  // PonPass (nombre: string, nuevopass: string): void {
  //   this.lista.filter(persona => persona.nombre === nombre)[0].pass = nuevopass;
  //   console.log (this.lista);
  // }


  DamePersona (nombre: string): Observable<Persona> {
    return this.http.get<Persona>(this.APIUrl + '/' + nombre);
  }
}
