
import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  user: any;
  testo = new ReplaySubject;
  ricerca: string = '';


  constructor(private router: Router, public authService: AuthService, private recipeService: RecipeService){}

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  risultato() {
    const currentRoute = this.router.url;
    if(currentRoute !== `/ricette/cerca/${this.ricerca}` ) {
      this.recipeService.testoCercato.next(this.ricerca);
      this.router.navigate([`/ricette/cerca/${this.ricerca}`]);
      this.ricerca = '';
    } else {
      this.recipeService.testoCercato.next(this.ricerca);
      this.router.navigate([`/ricette/cerca/${this.ricerca}`]);
      this.ricerca = '';
    }
  }
}
