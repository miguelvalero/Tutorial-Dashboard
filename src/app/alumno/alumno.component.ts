import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { ListaService } from '../lista.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DbServiceService } from '../db-service.service';
import { ChatService } from '../chat.service';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno: Persona;
  nuevoPass: string;
  conectados: [];
  conectadosPrivado: [];
  mensaje: string;
  mensajes: string[] = [];
  privados: string[] = [];
  privado: string;
  segundos: string;

  constructor(  private servicioLista: ListaService,
                private dbService: DbServiceService,
                private route: ActivatedRoute,
                private location: Location,
                private chatService: ChatService) { }

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

  ConectarChat() {
    this.chatService.Conectar (this.alumno.nombre);
    this.chatService
    .RecibirMensajes()
    .subscribe((mensaje: string) => {
      const trozos = mensaje.split (':');
      if (trozos[0] === 'conectados') {
        this.conectados = JSON.parse (trozos[1]);
      } else if (trozos[0] === 'mensaje') {
        this.mensajes.push (trozos[1]);
      } else {
        this.segundos = trozos [1];
      }
    });
  }
  DesconectarChat () {
    this.chatService.Desconectar();
  }
  EnviarMensaje () {
    this.chatService.EnviarMensaje (this.mensaje);
  }

  ConectarPrivado () {
    this.chatService.ConectarPrivado(this.alumno.nombre);
    this.chatService.RecibirMensajesPrivado()
    .subscribe((mensaje: string) => {
      const trozos = mensaje.split (':');
      if (trozos[0] === 'conectados') {
        this.conectadosPrivado = JSON.parse (trozos[1]);
      } else {
        this.privados.push (trozos[1]);
      }
    });
  }

  DesconectarPrivado () {
    this.chatService.DesconectarPrivado();
  }

  EnviarMensajePrivado() {
    this.chatService.EnviarMensajePrivado( this.privado);
    this.privado = '';
  }
}
