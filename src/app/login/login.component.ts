import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { DbServiceService } from '../db-service.service';
import { Persona} from '../Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string;
  pass: string;
  constructor(  private servicioLista: ListaService,
                private dbService: DbServiceService) { }

  ngOnInit() {
  }

  Autentificar () {
    this.dbService.DamePersona(this.nombre)
    .subscribe (persona => {
                              if (persona != null) {
                                if (persona.rol === 'Profesor') {
                                    window.location.href = '/profesor';
                                } else {
                                    window.location.href = '/alumno/' + persona.nombre;
                                }
                              }

                            }
                );

  }

}
