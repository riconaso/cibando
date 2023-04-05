import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  datiRicetta = new ReplaySubject;

  apiBaseUrl = "api/recipes";

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
   // return of (RECIPES);
   return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }

  getRecipe(id: string): Observable<Recipe> { //numeber con il mock, string con il database perchè è autogenerato
    // const recipe = RECIPES.find(ricetta => ricetta._id === id);//COSI PèERCHE STIAMO LAVORANDO CON IL MOCK
    // return of (recipe);
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  insertRecipe(recipe){
    return this.http.post<Recipe>(`${this.apiBaseUrl}/`, recipe);
  }
}

