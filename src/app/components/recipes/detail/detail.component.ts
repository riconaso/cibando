import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  percorsoStelline = "../../../../assets/images/difficolta-";
  ricetta: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ){}

ngOnInit(): void {
  this.onGetRecipe();
}

  //SNAPSHOT PARMAMAP Con il mock prima del this NUmber e si circonda dalle tonde
  onGetRecipe(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.recipeService.getRecipe(id).subscribe({
      next: (res) => {
        this.ricetta = res;
      },
      error: (err) => {
        console.log(err);
      }

    })
  }



  //PARAMS con il moch dopo const id) Number e si circonda dalle tonde
  onGetRecipe2(): void {
    this.activatedRoute.params.subscribe((parametriUrl) => {
      const id = parametriUrl['_id'];


      this.recipeService.getRecipe(id).subscribe({
        next: (res) => {
          this.ricetta = res;
        },
        error: (error) => {
          console.log(error);
        }
      })
    })
  }
}
