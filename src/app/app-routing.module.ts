import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//lista de rutas que iremos declarando para cargar componentes asociados a las mismas
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
