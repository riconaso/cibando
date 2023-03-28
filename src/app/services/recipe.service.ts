import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of (RECIPES);
  }

  getRecipe(id: number): Observable<Recipe> { //COSI PèERCHE STIAMO LAVORANDO CON IL MOCK
    const recipe = RECIPES.find(ricetta => ricetta._id === id);
    return of (recipe);
  }
}

