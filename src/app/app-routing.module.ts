import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'detalhes/:slug', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
