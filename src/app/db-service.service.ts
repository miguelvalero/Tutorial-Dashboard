import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './Persona';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  private APIUrl = 'http://127.0.0.1:3000/api/personas';
  private APIUrlLogin = 'http://localhost:3000/api/cuentas/login?include=user';
  constructor(private http: HttpClient) { }

  Login (nombre: string, pass: string): Observable<any> {
    const data = { username : nombre, password : pass };
    const datajson = JSON.stringify(data);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    console.log (data);

    return this.http.post<any>(this.APIUrlLogin , datajson, httpOptions );
  }

  // Acceder () {
  //   console.log ('vamos a acceder: '+ localStorage.getItem('token'));
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': localStorage.getItem('token')
  //     })
  //   };



  //   this.http.get<any[]>(this.APIUrl2, httpOptions)
  //   .subscribe( lista => {
  //                           console.log ('Ya ha llegado');
  //                           console.log (lista);
  //                         }
  //             );

  // }

  Mostrar (): Observable<Persona[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get<Persona[]>(this.APIUrl, httpOptions);
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
