import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './Persona';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  private APIUrl = 'http://127.0.0.1:3000/api/personas';
  private APIUrlLogin = 'http://localhost:3000/api/cuentas/login?include=user';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('token')
    })
  };
  constructor(private http: HttpClient) { }

  Login (nombre: string, pass: string): Observable<any> {
    const data = { username : nombre, password : pass };
    console.log (data);
    return this.http.post<any>(this.APIUrlLogin , data );
  }


  Mostrar (): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.APIUrl, this.httpOptions);
  }


  Incrementar (persona: Persona): Observable<any> {
    persona.puntos++;
    return this.http.put<any>(this.APIUrl + '/' + persona.nombre, persona, this.httpOptions);
  }


  Eliminar (nombre: string): Observable<any>  {
    return this.http.delete<any>(this.APIUrl + '/' + nombre, this.httpOptions);
  }


  PonPersona(persona: Persona): Observable<any> {
    return this.http.post<any>(this.APIUrl, persona, this.httpOptions);
  }



  PonPass (alumno: Persona, nuevopass: string): Observable<any> {
      alumno.pass = nuevopass;
      return this.http.put<any>(this.APIUrl + '/' + alumno.nombre, alumno, this.httpOptions);
    }

  DamePersona (nombre: string): Observable<Persona> {
    return this.http.get<Persona>(this.APIUrl + '/' + nombre, this.httpOptions);
  }
}
