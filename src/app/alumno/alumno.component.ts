import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { ListaService } from '../lista.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DbServiceService } from '../db-service.service';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno: Persona;
  nuevoPass: string;
  constructor(  private servicioLista: ListaService,
                private dbService: DbServiceService,
                private route: ActivatedRoute,
                private location: Location) { }

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.DameAlumno(nombre);
  }

  DameAlumno (nombre: string) {
    this.dbService.DamePersona(nombre)
    .subscribe (alumno => { this.alumno = alumno;
                            console.log (this.alumno);
                          }
                );
  }

  Cambia () {
    this.dbService.PonPass (this.alumno, this.nuevoPass)
    .subscribe (() => this.DameAlumno (this.alumno.nombre));
  }

  GoBack () {
    this.location.back();
  }
}
