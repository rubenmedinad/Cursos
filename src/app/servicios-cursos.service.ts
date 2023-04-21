import { Injectable } from '@angular/core';
import { Cursos } from './modelos/cursos';
import { nivelCurso } from './modelos/nivelCurso';

@Injectable({
  providedIn: 'root',
})
export class ServiciosCursosService {
  cursos: Cursos[] = [
    new Cursos(nivelCurso.medio,1, 'Matematicas', 120),

    new Cursos(nivelCurso.medio,2, 'Lengua', 120),

    new Cursos( nivelCurso.medio,3, 'Conocimiento', 120),

    new Cursos(nivelCurso.medio,4, 'Administracion', 120)
  ];
  constructor() {}
  addCursos(curso: Cursos){
    this.cursos.push(curso);
  }
  getCurso(): Cursos[]{
    return this.cursos
  }
  addmodificar(id:number, curso:Cursos){
    let ids=this.cursos.findIndex((curso)=>curso.id==id)
    if (ids!=-1){
      this.cursos[ids]=curso
    }
  }
}

