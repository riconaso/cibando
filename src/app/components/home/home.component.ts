import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  evidenziato = false;
  ricette: Recipe[];

  //INJECTON SEMPRE NEL COSTRUTTORE
  constructor(private recipeService: RecipeService){}

  //COLORI GIALLI SONO I METODI
  // next: (response) => this.ricette = response; POSSO SCRIVERLO ANCHE COSI
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (response) => {
        this.ricette = response;
        this.ricette = this.ricette.sort((a,b) => b._id - a._id).slice(0,4); //per ordinarle, può essere fatto anche per le vendite ecc ecc, devo aggiungere nel mock l'attributo
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onEvidenziazione() {
    this.evidenziato = !this.evidenziato;
  }
}
