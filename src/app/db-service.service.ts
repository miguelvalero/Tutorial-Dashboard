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

  Mostrar (): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.APIUrl);
  }


  Incrementar (persona: Persona): Observable<any> {
    persona.puntos++;
    return this.http.put<any>(this.APIUrl + '/' + persona.nombre, persona);
  }


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



  PonPersona(persona: Persona): Observable<any> {
    return this.http.post<any>(this.APIUrl, persona);
  }



  PonPass (alumno: Persona, nuevopass: string): Observable<any> {
      alumno.pass = nuevopass;
      return this.http.put<any>(this.APIUrl + '/' + alumno.nombre, alumno);
    }

  DamePersona (nombre: string): Observable<Persona> {
    return this.http.get<Persona>(this.APIUrl + '/' + nombre);
  }
}
