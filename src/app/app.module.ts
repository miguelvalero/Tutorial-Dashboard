import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonaComponent } from './persona/persona.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { LoginComponent } from './login/login.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DatosComponent } from './datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    PersonaComponent,
    ProfesorComponent,
    LoginComponent,
    AlumnoComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
