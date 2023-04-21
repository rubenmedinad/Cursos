import { Component } from '@angular/core';
import { Cursos } from './modelos/cursos';
import { nivelCurso } from './modelos/nivelCurso';
import { ServiciosCursosService } from './servicios-cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ids: number = 0;
  curso = new Cursos(nivelCurso.alto, 0, '', 0);
  cursos: Cursos[] = [];
  constructor(private miServicio: ServiciosCursosService) {
    this.cursos = this.miServicio.cursos;
  }

  update(number:number){
    this.ids=number
  }
}
