import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';
import { first, take } from 'rxjs';
@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnDestroy {

@Input() pag: string;
@Output() messaggio = new EventEmitter();

recipes: Recipe[];
ricetteTotali: number;
page = 1;
ricettePerPagina = 4;

constructor(
  private recipeService: RecipeService,
  private router: Router){}

ngOnInit(): void {
   this.prendiRicette();
  //this.metodino();
}

ngOnDestroy(): void {
  console.log('utente uscito dal componente')
}
prendiRicette(){
  this.recipeService.getRecipes()
  .pipe(
    first()
  )
  .subscribe({
    next: (res) =>{
      this.recipes = res;

      if(this.pag){
        this.recipes = this.recipes.sort((a,b) => b._id - a._id).slice(0,4);
      }
      this.ricetteTotali = res.length;
    },
    error: (error) =>{
      console.log(error)
    }
  })

}

inviaTitolo(titolo: string){
  this.messaggio.emit(titolo);
}


paginate(event){
  event.page = event.page + 1;
  this.page = event.page;
}

}
// prendiRicetteHome(){
//   this.recipeService.getRecipes().subscribe({
//     next: (response) => {
//       this.recipes = response;
//       this.recipes = this.recipes.sort((a,b) => b._id - a._id).slice(0,4); //per ordinarle, può essere fatto anche per le vendite ecc ecc, devo aggiungere nel mock l'attributo
//       this.ricetteTotali = response.length;
//     },
//     error: (error) => {
//       console.log(error);
//     }
//   })
// }
// metodino() {
//   const currentRoute = this.router.url;
//   if (currentRoute === '/home') {
//     this.prendiRicetteHome();
//   }else{
//     this.prendiRicette();
//   }
// }
// @ si dice decorare o meglio decoratore
