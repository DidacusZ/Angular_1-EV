import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasComponent } from './preguntas/preguntas.component';


const routes: Routes = [
  { path: 'asignaturas', component: AsignaturasComponent},
  { path: 'preguntas', component: PreguntasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
