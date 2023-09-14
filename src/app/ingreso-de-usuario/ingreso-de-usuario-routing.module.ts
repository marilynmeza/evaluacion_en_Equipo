import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoDeUsuarioPage } from './ingreso-de-usuario.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: IngresoDeUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule],
})
export class IngresoDeUsuarioPageRoutingModule {}
