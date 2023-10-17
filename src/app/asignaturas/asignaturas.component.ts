import { Component } from '@angular/core';
import { ASIGNATURAS } from '../mock-asignaturas';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent {
  asignaturas=ASIGNATURAS;
}
