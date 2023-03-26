import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  // SENZA IL MODELLO AVREMMO SCRITTO ricette: any[] anzichè ricette: Recipe[]. Quindi togliere anche l'import di modello da sopra
  ricette: Recipe[];

  //INJECTON SEMPRE NEL COSTRUTTORE
  constructor(private recipeService: RecipeService){}

  //COLORI GIALLI SONO I METODI
  // next: (response) => this.ricette = response; POSSO SCRIVERLO ANCHE COSI
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (response) => {
        this.ricette = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
