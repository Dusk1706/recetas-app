import { Component, OnInit } from '@angular/core';
import { Receta } from './recetas.model';
import { RecetasService } from './recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  recetas: Receta[];

  constructor(private recetasService: RecetasService) { }

  ngOnInit() {
    this.recetas = this.recetasService.getAllRecipes();
  }

}
