import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Persona } from '../Persona';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  alumno: Persona;
  constructor( private servicioLista: ListaService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.alumno = this.servicioLista.DamePersona(nombre);
  }

  GoBack () {
    this.location.back();
  }
}
