import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-intro-alumno',
  templateUrl: './intro-alumno.component.html',
  styleUrls: ['./intro-alumno.component.css']
})
export class IntroAlumnoComponent implements OnInit {

  nombre: string;
  pass: string;
  rol: string;
  puntos: number;
  alumno: Persona;
  constructor(private dialogRef: MatDialogRef<IntroAlumnoComponent>) { }

  ngOnInit() {
  }

  CrearAlumno () {
    this.alumno =  new Persona (this.nombre, this.pass, this.rol, this.puntos);
    this.dialogRef.close(this.alumno);
  }
}
