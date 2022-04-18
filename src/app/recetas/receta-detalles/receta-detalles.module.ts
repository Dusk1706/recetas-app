import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaDetallesPageRoutingModule } from './receta-detalles-routing.module';

import { RecetaDetallesPage } from './receta-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaDetallesPageRoutingModule
  ],
  declarations: [RecetaDetallesPage]
})
export class RecetaDetallesPageModule {}
