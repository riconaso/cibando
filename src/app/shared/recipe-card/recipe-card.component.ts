import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';
import { Observable, first, take, map} from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  providers: [MessageService]
})
export class RecipeCardComponent implements OnInit, OnDestroy {

@Input() pag: string;
@Output() messaggio = new EventEmitter();

recipes: Recipe[];
ricetteTotali: number;
page = 1;
ricettePerPagina = 4;
ricercato: any;

//il dollaro nelle variabili mi rappresenta una variabile asincrona
// recipes$ = this.recipeService.getRecipes().pipe(
// // map(response => response.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 3)),
// map(res => {
//   this.ricette = res;
//   if(res){
//     this.messageService.add({severity:'success', summary:'completato', detail:'ricetta caricata correttamente'})
//   }
// })
// );

recipes$ = this.recipeService.getRecipes().pipe(
  map(response => {
    if(this.pag === 'ricerca') {
      this.recipeService.testoCercato.subscribe({
        next: (res) => {
          if(this.ricercato) {
            this.recipeService.findRecipes(this.ricercato).subscribe({
              next: (res) => {
                this.ricette = res;
                console.log(res);
              },
              error: (err) => {
                console.log(err);
              }
            })
          }
          this.ricercato = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      this.ricette = response;
      if(response) {
        this.messageService.add({severity: 'success', summary:'Completato', detail: 'Ricette caricate correttamente', life: 3000})
      }
    }
  }),
);

ricette: Recipe[];

ruolo: any;


constructor(
  private recipeService: RecipeService,
  private router: Router,
  private userService: UserService,
  private messageService: MessageService){}

ngOnInit(): void {
   //this.prendiRicette();
  //this.metodino();
  if(JSON.parse(localStorage.getItem('user')) != null){
    this.userService.userRole.subscribe({
      next: res => this.ruolo = res
    })
  }

}

ngOnDestroy(): void {
  console.log('utente uscito dal componente')
}
// prendiRicette(){
//   this.recipeService.getRecipes().pipe(first()).subscribe({
//     next: (res) =>{
//       this.recipes = res;

//       if(this.pag){
//         this.recipes = this.recipes.sort((a,b) => b._id - a._id).slice(0,4);
//       }
//       this.ricetteTotali = res.length;
//     },
//     error: (error) =>{
//       console.log(error)
//     }
//   })

// }

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
