import { Injectable } from '@angular/core';
import { Receta } from './recetas.model';
@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private recetas: Receta[] = [
    {
      id: 'sandwich',
      title: 'Sandwich',
      imageUrl: 'http://c.files.bbci.co.uk/14D0C/production/_103206258_sandwich.png',
      ingredients: ['Pan','Tomate','Queso','Jamon','Lechuga']
    },
    {
      id: 'espagueti',
      title: 'Espagueti',
      imageUrl: 'https://www.philadelphia.com.mx/modx/assets/img/recetas/thumb/receta_thumbs_v2/Comida/Pastas/SPAGUETTI-ROJO.png',
      ingredients: ['Taza de agua','Espagueti','Pure de tomate','Media crema']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recetas];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recetas.find(receta => receta.id === recipeId)
    };
  }
  deleteRecipe(recipeId: string){
    this.recetas = this.recetas.filter(receta =>receta.id !== recipeId);
  }
}
