import { Component } from '@angular/core';
import { PREGUNTAS, RESPUESTAS } from '../mock-preguntas';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {

  preguntas=PREGUNTAS;
  respuestas=RESPUESTAS;
}
