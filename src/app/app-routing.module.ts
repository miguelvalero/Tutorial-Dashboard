import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { MiguardiaGuard } from './miguardia.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'profesor', component: ProfesorComponent, canActivate:[MiguardiaGuard] },
  { path: 'alumno/:nombre', component: AlumnoComponent, canActivate:[MiguardiaGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
