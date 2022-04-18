import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecetasService } from '../recetas.service';
import { Receta } from '../recetas.model';

@Component({
  selector: 'app-receta-detalles',
  templateUrl: './receta-detalles.page.html',
  styleUrls: ['./receta-detalles.page.scss'],
})
export class RecetaDetallesPage implements OnInit {

  loadedRecipe: Receta;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetasService: RecetasService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recetaId')){
        return;
      }
      const recetaId = paramMap.get('recetaId');
      this.loadedRecipe = this.recetasService.getRecipe(recetaId);
    });
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: '¿Estas seguro?',
      message: '¿Deseas eliminar la receta?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancelar'
      },
      {
        text: 'Eliminar',
        handler: () =>{
          this.recetasService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recetas']);
        }
      }
    ]
  }).then(alertEl => {
    alertEl.present();
  });
  }

}
