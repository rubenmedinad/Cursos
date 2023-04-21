import { Component, Input } from '@angular/core';
import { ServiciosCursosService } from '../servicios-cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from '../modelos/cursos';
import { nivelCurso } from '../modelos/nivelCurso';

@Component({
  selector: 'app-modificador',
  templateUrl: './modificador.component.html',
  styleUrls: ['./modificador.component.css']
})
export class ModificadorComponent {
  curso : Cursos = new Cursos(nivelCurso.alto, 0, '', 0);
  cursos: Cursos[] = [];
  ids : number=0;
  constructor(private miServicio: ServiciosCursosService,
    private activarRutas: ActivatedRoute,
    private rutes: Router) {

  }
  ngOnInit():void {
    this.ids = this.activarRutas.snapshot.queryParams["ids"]
  }
  anadir(){
    this.miServicio.addmodificar(this.ids, this.curso)
    this.curso=new Cursos(nivelCurso.alto,0,"",0)

  }

}

