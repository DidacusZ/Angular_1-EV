import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AsignaturasComponent,
    CabeceraComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
