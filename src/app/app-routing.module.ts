import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModificadorComponent } from './modificador/modificador.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'modificar/:id',component:ModificadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
