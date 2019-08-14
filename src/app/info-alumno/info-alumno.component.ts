import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-info-alumno',
  templateUrl: './info-alumno.component.html',
  styleUrls: ['./info-alumno.component.css']
})
export class InfoAlumnoComponent implements OnInit {

  nombre: string;
  constructor(private dialogRef: MatDialogRef<InfoAlumnoComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

      this.nombre = data.alumno;
   }

  ngOnInit() {
  }

  Cerrar () {
    this.dialogRef.close();
  }
}
