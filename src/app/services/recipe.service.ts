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

  testoCercato = new ReplaySubject;

  constructor(private http: HttpClient) { }

  // getRecipes(): Observable<Recipe[]> {
  //  // return of (RECIPES);
  //  return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  // }
  getRecipes(){
    // return of (RECIPES); con il mock
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
   }

  getRecipe(id: string): Observable<Recipe> { //number con il mock, string con il database perchè è autogenerato
    // const recipe = RECIPES.find(ricetta => ricetta._id === id);//COSI PèERCHE STIAMO LAVORANDO CON IL MOCK
    // return of (recipe);
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  insertRecipe(recipe: any) : Observable <any>{
    return this.http.post<any>(`${this.apiBaseUrl}/`, recipe);
  }

  findRecipes(text: string): Observable<any>{
    return this.http.get<any>(`${this.apiBaseUrl}/cerca/${text}`); //tra le parentesi tonde si chiama Query Params
  }
}

