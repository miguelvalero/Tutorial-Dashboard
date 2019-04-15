import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { DbServiceService } from '../db-service.service';
import { Persona} from '../Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nombre: string;
  pass: string;
  constructor(  private servicioLista: ListaService,
                private dbService: DbServiceService) { }

  ngOnInit() {
  }

  Autentificar () {
    this.dbService.Login(this.nombre, this.pass)
    .subscribe (res => {  console.log (res);
                          localStorage.setItem('token', res.id);
                          console.log ('OK');
                          if (res.user.rol === 'Profesor') {
                            window.location.href = '/profesor';
                          } else {
                            window.location.href = '/alumno/' + this.nombre;
                          }
                          // this.Acceder();
                          },
                error => console.log ('Fallo de login')
                );
  }

}


// this.dbService.Login(this.nombre, this.pass)
//     .subscribe (persona => {
//                               if ((persona != null) && (persona.pass === this.pass)) {
//                                 localStorage.setItem ('Login', 'Si');
//                                 if (persona.rol === 'Profesor') {
//                                     window.location.href = '/profesor';
//                                 } else {
//                                     window.location.href = '/alumno/' + persona.nombre;
//                                 }
//                               }

//                             }
//                 );
