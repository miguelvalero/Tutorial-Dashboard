import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { ListaService } from '../lista.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { InfoAlumnoComponent } from '../info-alumno/info-alumno.component';
import { IntroAlumnoComponent } from '../intro-alumno/intro-alumno.component';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'puntos', 'incrementar', 'eliminar', 'info'];
  lista: Persona[] = [];
  nombre: string;
  pass: string;
  rol: string;
  puntos: number;
  constructor(private servicioLista: ListaService,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  Mostrar () {
    this.lista = this.servicioLista.Mostrar ();
  }

  Incrementar (nombre: string) {
    this.lista = this.servicioLista.Incrementar (nombre);
  }
  Eliminar (nombre: string) {
    this.lista = this.servicioLista.Eliminar (nombre);
  }

  OrdenarPuntos () {
    this.lista = this.servicioLista.OrdenarPuntos();
    this.lista = this.servicioLista.Eliminar (' ');
  }
  VerInfo (nombre: string) {
    console.log ('Voy a mostrar info de: ' + nombre);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      alumno: nombre
    };
    dialogConfig.position = {
      top: '0',
      left: '0'
  };
    this.dialog.open(InfoAlumnoComponent, dialogConfig);

  }


  CrearAlumno() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(IntroAlumnoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
                    this.lista = this.servicioLista.PonPersona (data);
                    this.lista = this.servicioLista.Eliminar (' ');
        }
    );

  }
}
