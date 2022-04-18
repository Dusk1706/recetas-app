import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaDetallesPage } from './receta-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaDetallesPageRoutingModule {}
